import { NarrativePhase } from '../shared/enums';
import type { Session } from '../session/types';

export interface NarrativeState {
  phase: NarrativePhase;
  tension: number;
  uncertainty: number;
  discoveredContradictions: number;
  investigatedMemories: number;
  processedMemories: number;
}

export function createNarrativeState(): NarrativeState {
  return { phase: NarrativePhase.INTRODUCTION, tension: 10, uncertainty: 10, discoveredContradictions: 0, investigatedMemories: 0, processedMemories: 0 };
}

export interface CuriosityProfile {
  science: number; politics: number; culture: number;
  technology: number; conflict: number; philosophy: number;
}

export function createCuriosityProfile(): CuriosityProfile {
  return { science: 0, politics: 0, culture: 0, technology: 0, conflict: 0, philosophy: 0 };
}
