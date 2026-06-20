import {
  GovernmentType, EconomyType, CivilizationArchetype, CultureOrientation,
  ScienceLevel, MilitaryPosture, EnvironmentalPolicy, MediaState,
} from '../shared/enums';
import type { ImpactVector, UUID } from '../shared/types';
import type { Memory } from '../memory/types';

export interface ArchiveLegacy {
  preserved: Memory[];
  discarded: Memory[];
  fabricatedPreserved: Memory[];   // fabrications the player preserved as truth — undetected deception
  fabricatedDiscarded: Memory[];   // fabrications the player correctly rejected
  genuinePreserved: Memory[];
  genuineDiscarded: Memory[];      // real history the player let go
  definingMemories: Memory[];      // top 3 highest-impact genuine preserved memories
  mostMournedLoss: Memory | null;  // highest-impact genuine memory discarded
  deceptionRate: number;           // fraction of preserved memories that were fabricated
  discernmentRate: number;         // fraction of all fabrications encountered that were correctly caught
}

export interface Civilization {
  id?: UUID;
  sessionId?: UUID;
  civilizationName: string;
  archetype: CivilizationArchetype;
  government: GovernmentType;
  economy: EconomyType;
  culture: { orientation: CultureOrientation; description: string };
  education: { openness: number; scientificFocus: number; historicalFocus: number; creativity: number };
  science: { level: ScienceLevel; description: string };
  military: { posture: MilitaryPosture; description: string };
  environment: { policy: EnvironmentalPolicy; description: string };
  media: { state: MediaState; description: string };
  values: ImpactVector;
  historicalEvents: HistoricalEvent[];
  stabilityScore: number;
  summary: string;
}

export interface CivilizationResult {
  civilization: Civilization;
  archetype: CivilizationArchetype;
  stabilityScore: number;
  summary: string;
  events: HistoricalEvent[];
}

export interface HistoricalEvent {
  id?: UUID;
  title: string;
  year: number;
  significance: number;
  description: string;
}
