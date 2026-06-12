import {
  MemoryCategory, MemoryRarity, MemoryDifficulty,
  DecisionWeight, ArtifactType, MemoryArchetype,
} from '../shared/enums';
import type { ImpactVector, UUID } from '../shared/types';

export interface Memory {
  id: UUID;
  title: string;
  summary: string;
  description: string;
  category: MemoryCategory;
  rarity: MemoryRarity;
  difficulty: MemoryDifficulty;
  decisionWeight: DecisionWeight;
  archetype: MemoryArchetype;
  artifactType: ArtifactType;
  impact: ImpactVector;
  corruptionScore: number;
  truthScore: number;
  investigationCost: number;
  evidenceIds: UUID[];
  contradictionIds: UUID[];
  corruptionIds: UUID[];
  tags: string[];
  era: string;
}
