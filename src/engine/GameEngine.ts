import {
  Memory, Evidence, Contradiction, PlayerProfile,
  Session, Decision, NarrativeState, CuriosityProfile,
  CivilizationResult, HistoryBook, ArchiveLegacy,
  CivilizationIdentity,
} from './index';
import { computeCivilizationIdentity } from './ending/civilization-identity';
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
    this.session.preservedMemoryIds.push(this.currentMemory.id);
    return { decision, profile: this.session.profile };
  }

  discard(): { decision: Decision } | null {
    if (!this.currentMemory) return null;
    this.session.discardedMemoryIds.push(this.currentMemory.id);
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

  generateEnding(pool: Memory[]): { civilization: CivilizationResult; book: HistoryBook; legacy: ArchiveLegacy; identity: CivilizationIdentity } {
    this.session.status = SessionStatus.COMPLETED;

    const byId = new Map(pool.map(m => [m.id, m]));
    const preserved = this.session.preservedMemoryIds.map(id => byId.get(id)).filter(Boolean) as Memory[];
    const discarded = this.session.discardedMemoryIds.map(id => byId.get(id)).filter(Boolean) as Memory[];

    // A memory counts as "fabricated" if its truthScore is meaningfully below
    // the genuine-content baseline (~90+). corruptionScore is the strength of
    // the signal; truthScore < 85 is the practical cutoff for the fabricated
    // and bridge-anomaly content authored so far.
    const isFabricated = (m: Memory) => (m.truthScore ?? 100) < 85;

    const fabricatedPreserved = preserved.filter(isFabricated);   // caught nothing: preserved a lie as truth
    const fabricatedDiscarded = discarded.filter(isFabricated);   // correctly rejected a fabrication
    const genuinePreserved = preserved.filter(m => !isFabricated(m));
    const genuineDiscarded = discarded.filter(m => !isFabricated(m)); // lost something real

    // Rank preserved genuine memories by decisionWeight/corruptionScore proxy
    // for "most consequential" — highest impact magnitude, ties broken by
    // investigation cost (a stand-in for narrative depth/rarity).
    const impactMagnitude = (m: Memory) => Object.values(m.impact || {}).reduce((s: number, v: any) => s + Math.abs(Number(v) || 0), 0);
    const rankedPreserved = [...genuinePreserved].sort((a, b) => impactMagnitude(b) - impactMagnitude(a));
    const rankedDiscarded = [...genuineDiscarded].sort((a, b) => impactMagnitude(b) - impactMagnitude(a));

    const legacy: ArchiveLegacy = {
      preserved,
      discarded,
      fabricatedPreserved,
      fabricatedDiscarded,
      genuinePreserved,
      genuineDiscarded,
      definingMemories: rankedPreserved.slice(0, 3),
      mostMournedLoss: rankedDiscarded[0] ?? null,
      deceptionRate: preserved.length > 0 ? fabricatedPreserved.length / preserved.length : 0,
      discernmentRate: (fabricatedPreserved.length + fabricatedDiscarded.length) > 0
        ? fabricatedDiscarded.length / (fabricatedPreserved.length + fabricatedDiscarded.length)
        : 1,
    };

    // Identity is computed from the FULL six-value profile pattern plus
    // corruption/deception signal — not from a single dominant stat (that's
    // what civGen's internal pickArchetype still does, for flavor fields
    // like government/culture). Identity is specifically the ending-level
    // narrative judgment the player actually sees and remembers.
    const identity = computeCivilizationIdentity(this.session.profile, legacy);

    const civ = this.civGen.generate(this.session.profile, legacy);
    const book = this.bookGen.generate(civ, this.session.profile, legacy, identity);
    return { civilization: civ, book, legacy, identity };
  }

  canEnd(): boolean {
    return this.session.status === SessionStatus.FINALIZING || this.session.capacityRemaining <= 0 ||
      (this.narrativeState.processedMemories >= 15 && this.narrativeState.discoveredContradictions >= 2);
  }
}