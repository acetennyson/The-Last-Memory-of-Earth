import { ContradictionType } from '../shared/enums';
import type { UUID } from '../shared/types';

export interface Contradiction {
  id: UUID;
  memoryA: UUID;
  memoryB: UUID;
  contradictionType: ContradictionType;
  severity: number;
  explanation: string;
}

export interface ActiveContradiction {
  id: UUID;
  severity: number;
  discovered: boolean;
  resolved: boolean;
}
