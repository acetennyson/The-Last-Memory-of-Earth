import { Evidence, EvidenceRevelation } from './types';
import { EvidenceTier } from '../shared/enums';

export class EvidenceService {
  getAvailable(all: Evidence[], currentTier: EvidenceTier): Evidence[] {
    return all.filter(e => this.tierOrder(e.tier) <= this.tierOrder(currentTier));
  }

  unlockNext(all: Evidence[], currentTier: EvidenceTier): EvidenceRevelation[] {
    const next = this.nextTier(currentTier);
    if (!next) return [];
    return all.filter(e => e.tier === next).map(evidence => ({
      evidence,
      isNewDiscovery: true,
      altersInterpretation: next === EvidenceTier.REVELATION,
    }));
  }

  private nextTier(tier: EvidenceTier): EvidenceTier | null {
    const tiers = [EvidenceTier.SURFACE, EvidenceTier.CONTEXT, EvidenceTier.COMPLICATION, EvidenceTier.REVELATION];
    const idx = tiers.indexOf(tier);
    return idx < tiers.length - 1 ? tiers[idx + 1] : null;
  }

  private tierOrder(tier: EvidenceTier): number {
    return { [EvidenceTier.SURFACE]: 1, [EvidenceTier.CONTEXT]: 2, [EvidenceTier.COMPLICATION]: 3, [EvidenceTier.REVELATION]: 4 }[tier] ?? 0;
  }
}
