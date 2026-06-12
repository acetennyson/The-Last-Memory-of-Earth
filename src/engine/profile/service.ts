import type { PlayerProfile, Decision } from './types';
import type { ImpactVector } from '../shared/types';
import { DecisionType } from '../shared/enums';
import { applyImpact } from './types';

export class ProfileService {
  applyDecision(profile: PlayerProfile, memoryImpact: ImpactVector, decision: Decision): PlayerProfile {
    if (decision.decisionType === DecisionType.PRESERVE) {
      return applyImpact(profile, memoryImpact);
    }
    return profile;
  }

  dominantValues(profile: PlayerProfile): string[] {
    return Object.entries(profile)
      .sort(([, a], [, b]) => b - a)
      .slice(0, 3)
      .map(([name]) => name);
  }
}
