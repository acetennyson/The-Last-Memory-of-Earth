import { CorruptionType } from '../shared/enums';
import type { UUID } from '../shared/types';

export interface Corruption {
  id: UUID;
  memoryId: UUID;
  corruptionType: CorruptionType;
  intensity: number;
  description: string;
}
