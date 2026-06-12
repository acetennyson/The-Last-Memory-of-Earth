import {
  Memory, Evidence, Contradiction, PlayerProfile,
  Session, Decision, NarrativeState, CuriosityProfile,
  CivilizationResult, HistoryBook,
} from './index';
import { DecisionType, SessionStatus, EvidenceTier, NarrativePhase } from './shared/enums';
import { createSession } from './session/types';
import { generateId } from './shared/utils';

import { MemorySelector } from './memory/selector';
import { PowerService } from './session/power';
import { ProfileService } from './profile/service';
import { EvidenceService } from './evidence/service';
import { ContradictionService } from './contradiction/service';
import { CivilizationGenerator } from './civilization/generator';
import { HistoryBookGenerator } from './ending/history-book';
import { createNarrativeState, createCuriosityProfile } from './civilization/narrative-state';

export interface GameContent {
  memories: Memory[];
  evidence: Evidence[];
  contradictions: Contradiction[];
}

export class GameEngine {
  private selector = new MemorySelector();
  private power = new PowerService();
  private profileSvc = new ProfileService();
  private evidenceSvc = new EvidenceService();
  private contradictionSvc = new ContradictionService();
  private civGen = new CivilizationGenerator();
  private bookGen = new HistoryBookGenerator();

  private session: Session;
  private narrativeState: NarrativeState = createNarrativeState();
  private curiosity: CuriosityProfile = createCuriosityProfile();
  private allEvidence: Evidence[];
  private allContradictions: Contradiction[];
  private currentMemory: Memory | null = null;
  private currentTier: EvidenceTier = EvidenceTier.SURFACE;

  constructor(content: GameContent) {
    this.session = createSession(generateId('sess'));
    this.allEvidence = content.evidence;
    this.allContradictions = content.contradictions;
  }

  get state() { return { session: this.session, narrative: this.narrativeState, memory: this.currentMemory, profile: this.session.profile }; }

  loadNext(pool: Memory[]): Memory | null {
    if (!this.power.canAfford(this.session, 'VIEW_MEMORY')) {
      this.session.status = SessionStatus.FINALIZING; return null;
    }
    const next = this.selector.selectNext(pool, {
      processedIds: new Set(this.session.processedMemoryIds),
      narrativeState: this.narrativeState,
      curiosity: this.curiosity,
      categoryDistribution: {},
    });
    if (!next) return null;
    this.session = this.power.consume(this.session, 'VIEW_MEMORY');
    this.currentMemory = next;
    this.currentTier = EvidenceTier.SURFACE;
    this.session.processedMemoryIds.push(next.id);
    this.narrativeState.processedMemories++;
    const catKey = next.category.toLowerCase() as keyof CuriosityProfile;
    if (catKey in this.curiosity) (this.curiosity as any)[catKey]++;
    return next;
  }

  preserve(): { decision: Decision; profile: PlayerProfile } | null {
    if (!this.currentMemory || this.session.capacityRemaining <= 0) return null;
    const decision: Decision = { memoryId: this.currentMemory.id, decisionType: DecisionType.PRESERVE, timestamp: new Date().toISOString() };
    this.session.profile = this.profileSvc.applyDecision(this.session.profile, this.currentMemory.impact, decision);
    this.session.capacityRemaining--;
    return { decision, profile: this.session.profile };
  }

  discard(): { decision: Decision } | null {
    if (!this.currentMemory) return null;
    return { decision: { memoryId: this.currentMemory.id, decisionType: DecisionType.DISCARD, timestamp: new Date().toISOString() } };
  }

  investigate(): { revelations: any[]; contradictions: Contradiction[] } | null {
    if (!this.currentMemory || !this.power.canAfford(this.session, 'INVESTIGATE')) return null;
    this.session = this.power.consume(this.session, 'INVESTIGATE');
    this.narrativeState.investigatedMemories++;
    const memEvidence = this.allEvidence.filter(e => e.memoryId === this.currentMemory!.id);
    const revelations = this.evidenceSvc.unlockNext(memEvidence, this.currentTier);
    if (revelations.length > 0) {
      this.currentTier = revelations[0].evidence.tier;
      if (revelations.some(r => r.altersInterpretation)) {
        this.narrativeState.uncertainty = Math.min(100, this.narrativeState.uncertainty + 10);
        this.narrativeState.tension = Math.min(100, this.narrativeState.tension + 5);
      }
    }
    const contradictions = this.contradictionSvc.findByMemory(this.currentMemory.id, this.allContradictions);
    if (contradictions.length > 0) {
      this.narrativeState.discoveredContradictions++;
      this.narrativeState.tension = Math.min(100, this.narrativeState.tension + 15);
      this.narrativeState.uncertainty = Math.min(100, this.narrativeState.uncertainty + 20);
    }
    return { revelations, contradictions };
  }

  generateEnding(): { civilization: CivilizationResult; book: HistoryBook } {
    this.session.status = SessionStatus.COMPLETED;
    const civ = this.civGen.generate(this.session.profile);
    const book = this.bookGen.generate(civ, this.session.profile);
    return { civilization: civ, book };
  }

  canEnd(): boolean {
    return this.session.status === SessionStatus.FINALIZING || this.session.capacityRemaining <= 0 ||
      (this.narrativeState.processedMemories >= 15 && this.narrativeState.discoveredContradictions >= 2);
  }
}
