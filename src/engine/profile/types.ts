import type { ImpactVector } from '../shared/types';
import { DecisionType } from '../shared/enums';
import type { UUID } from '../shared/types';
import { clamp } from '../shared/utils';

export interface PlayerProfile {
  compassion: number;
  progress: number;
  truth: number;
  freedom: number;
  power: number;
  legacy: number;
}

export function createProfile(): PlayerProfile {
  return { compassion: 50, progress: 50, truth: 50, freedom: 50, power: 50, legacy: 50 };
}

export function applyImpact(profile: PlayerProfile, impact: ImpactVector): PlayerProfile {
  return {
    compassion: clamp(profile.compassion + impact.compassion, 0, 100),
    progress: clamp(profile.progress + impact.progress, 0, 100),
    truth: clamp(profile.truth + impact.truth, 0, 100),
    freedom: clamp(profile.freedom + impact.freedom, 0, 100),
    power: clamp(profile.power + impact.power, 0, 100),
    legacy: clamp(profile.legacy + impact.legacy, 0, 100),
  };
}

export interface Decision {
  id?: UUID;
  sessionId?: UUID;
  memoryId: UUID;
  decisionType: DecisionType;
  timestamp: string;
}
