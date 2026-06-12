import type { Memory } from './types';
import type { NarrativeState, CuriosityProfile } from '../civilization/narrative-state';
import { NarrativePhase } from '../shared/enums';
import { RARITY_WEIGHTS } from '../shared/constants';
import { pickRandom } from '../shared/utils';

interface SelectionContext {
  processedIds: Set<string>;
  narrativeState: NarrativeState;
  curiosity: CuriosityProfile;
  categoryDistribution: Record<string, number>;
}

export class MemorySelector {
  selectNext(pool: Memory[], context: SelectionContext): Memory | null {
    const candidates = pool.filter(m => !context.processedIds.has(m.id));
    if (candidates.length === 0) return null;

    const scored = candidates.map(m => ({
      memory: m,
      score: this.calculateScore(m, context),
    }));

    scored.sort((a, b) => b.score - a.score);
    const topScore = scored[0].score;
    return pickRandom(scored.filter(s => s.score >= topScore * 0.8).map(s => s.memory));
  }

  private calculateScore(memory: Memory, ctx: SelectionContext): number {
    let score = RARITY_WEIGHTS[memory.rarity] || 1;

    const phaseMap: Record<NarrativePhase, number[]> = {
      [NarrativePhase.INTRODUCTION]: [1, 2],
      [NarrativePhase.DISCOVERY]: [2, 3],
      [NarrativePhase.CONFLICT]: [3, 4],
      [NarrativePhase.CRISIS]: [4, 5],
      [NarrativePhase.RESOLUTION]: [3, 4, 5],
    };
    if (phaseMap[ctx.narrativeState.phase]?.includes(memory.difficulty)) {
      score += 3;
    }

    const catKey = memory.category.toLowerCase() as keyof CuriosityProfile;
    score += (ctx.curiosity[catKey] || 0) * 0.5;

    return score;
  }
}
