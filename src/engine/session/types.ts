import type { UUID } from '../shared/types';
import type { PlayerProfile } from '../profile/types';
import { SessionStatus, NarrativePhase } from '../shared/enums';

export interface Session {
  id: UUID;
  playerId?: UUID;
  powerRemaining: number;
  capacityRemaining: number;
  investigationsRemaining: number;
  profile: PlayerProfile;
  processedMemoryIds: UUID[];
  status: SessionStatus;
  narrativePhase: NarrativePhase;
  createdAt: string;
  updatedAt: string;
}

export function createSession(id: UUID): Session {
  return {
    id,
    powerRemaining: 100,
    capacityRemaining: 100,
    investigationsRemaining: 20,
    profile: { compassion: 50, progress: 50, truth: 50, freedom: 50, power: 50, legacy: 50 },
    processedMemoryIds: [],
    status: SessionStatus.ACTIVE,
    narrativePhase: NarrativePhase.INTRODUCTION,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
}
