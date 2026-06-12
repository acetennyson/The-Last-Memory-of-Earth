import { EvidenceSource, EvidenceTier } from '../shared/enums';
import type { UUID } from '../shared/types';

export interface Evidence {
  id: UUID;
  memoryId: UUID;
  title: string;
  content: string;
  sourceType: EvidenceSource;
  tier: EvidenceTier;
  reliability: number;
  completeness: number;
  bias: number;
}

export interface EvidenceRevelation {
  evidence: Evidence;
  isNewDiscovery: boolean;
  altersInterpretation: boolean;
}
