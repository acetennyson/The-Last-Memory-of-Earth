import type { PlayerProfile } from '../profile/types';
import {
  GovernmentType, EconomyType, CivilizationArchetype, CultureOrientation,
  ScienceLevel, MilitaryPosture, EnvironmentalPolicy, MediaState,
} from '../shared/enums';
import type { Civilization, CivilizationResult, HistoricalEvent } from './types';

export class CivilizationGenerator {
  generate(profile: PlayerProfile): CivilizationResult {
    const government = this.pickGovernment(profile);
    const economy = this.pickEconomy(profile);
    const archetype = this.pickArchetype(profile);
    const culture = this.pickCulture(profile);
    const science = this.pickScience(profile);
    const military = this.pickMilitary(profile);
    const env = this.pickEnvironment(profile);
    const media = this.pickMedia(profile);
    const events = this.genEvents(profile, archetype);
    const stability = this.calcStability(profile);
    const name = this.genName(archetype, government);

    const civ: Civilization = {
      civilizationName: name, archetype, government, economy,
      culture, education: {
        openness: profile.freedom, scientificFocus: profile.progress,
        historicalFocus: profile.legacy, creativity: (profile.freedom + profile.compassion) / 2,
      },
      science, military, environment: env, media, values: { ...profile },
      historicalEvents: events, stabilityScore: stability,
      summary: `A ${archetype.replace(/_/g, ' ').toLowerCase()} civilization, governed by ${government.toLowerCase().replace(/_/g, ' ')}. ${culture.description}`,
    };
    return { civilization: civ, archetype, stabilityScore: stability, summary: civ.summary, events };
  }

  private pickGovernment(p: PlayerProfile): GovernmentType {
    if (p.truth >= 65 && p.progress >= 55) return GovernmentType.TECHNOCRACY;
    if (p.freedom >= 60 && p.compassion >= 50) return GovernmentType.DEMOCRACY;
    if (p.power >= 60 && p.freedom <= 35) return GovernmentType.AUTHORITARIAN_STATE;
    if (p.legacy >= 55 && p.truth >= 45) return GovernmentType.ARCHIVE_GOVERNANCE;
    if (p.compassion >= 55) return GovernmentType.COLLECTIVE;
    return GovernmentType.COUNCIL_RULE;
  }

  private pickEconomy(p: PlayerProfile): EconomyType {
    if (p.progress >= 70) return EconomyType.KNOWLEDGE_ECONOMY;
    if (p.freedom >= 60) return EconomyType.MARKET_ECONOMY;
    if (p.power >= 55) return EconomyType.CENTRALIZED_CONTROL;
    return EconomyType.RESOURCE_SHARING;
  }

  private pickArchetype(p: PlayerProfile): CivilizationArchetype {
    const top = Object.entries(p).sort(([, a], [, b]) => b - a);
    switch (top[0][0]) {
      case 'compassion': return CivilizationArchetype.THE_HUMANISTS;
      case 'progress': return CivilizationArchetype.THE_TECHNOCRATS;
      case 'truth': return CivilizationArchetype.THE_ARCHIVISTS;
      case 'power': return CivilizationArchetype.THE_EMPIRES;
      case 'freedom': return CivilizationArchetype.THE_REFORMERS;
      case 'legacy': return CivilizationArchetype.THE_SCHOLARS;
      default: return CivilizationArchetype.THE_BUILDERS;
    }
  }

  private pickCulture(p: PlayerProfile): { orientation: CultureOrientation; description: string } {
    if (p.compassion >= 60) return { orientation: CultureOrientation.COLLECTIVIST, description: 'Community well-being is the highest cultural value.' };
    if (p.freedom >= 60) return { orientation: CultureOrientation.INDIVIDUALIST, description: 'Individual rights and expression define the culture.' };
    if (p.legacy >= 55) return { orientation: CultureOrientation.PRESERVATIONIST, description: 'Preserving knowledge is the cultural foundation.' };
    if (p.progress >= 55) return { orientation: CultureOrientation.EXPANSIONIST, description: 'Growth and progress drive cultural identity.' };
    return { orientation: CultureOrientation.EXPERIMENTAL, description: 'Innovation and experimentation are celebrated.' };
  }

  private pickScience(p: PlayerProfile): { level: ScienceLevel; description: string } {
    if (p.progress >= 80) return { level: ScienceLevel.TRANSCENDENT, description: 'Scientific understanding has transcended limits.' };
    if (p.progress >= 60) return { level: ScienceLevel.ADVANCED, description: 'Science is highly advanced.' };
    if (p.progress >= 40) return { level: ScienceLevel.DEVELOPING, description: 'Science progresses steadily.' };
    return { level: ScienceLevel.STAGNANT, description: 'Scientific advancement has slowed.' };
  }

  private pickMilitary(p: PlayerProfile): { posture: MilitaryPosture; description: string } {
    if (p.power >= 65 && p.compassion <= 35) return { posture: MilitaryPosture.DOMINANT, description: 'Military power is the primary instrument of policy.' };
    if (p.power >= 50) return { posture: MilitaryPosture.EXPANSIONIST, description: 'Military supports expansion.' };
    if (p.compassion >= 55) return { posture: MilitaryPosture.MINIMAL, description: 'Military exists only for essential security.' };
    return { posture: MilitaryPosture.DEFENSIVE, description: 'Military maintained for defense.' };
  }

  private pickEnvironment(p: PlayerProfile): { policy: EnvironmentalPolicy; description: string } {
    if (p.compassion >= 65) return { policy: EnvironmentalPolicy.RESTORATION, description: 'Environmental restoration is a primary goal.' };
    if (p.compassion >= 45) return { policy: EnvironmentalPolicy.PRESERVATION, description: 'Preservation guides policy.' };
    if (p.progress >= 65) return { policy: EnvironmentalPolicy.EXPLOITATION, description: 'Resource use prioritized over environment.' };
    return { policy: EnvironmentalPolicy.BALANCED, description: 'Environment and economy are balanced.' };
  }

  private pickMedia(p: PlayerProfile): { state: MediaState; description: string } {
    if (p.truth >= 65 && p.freedom >= 45) return { state: MediaState.OPEN, description: 'Media operates freely with strong truth standards.' };
    if (p.freedom >= 55) return { state: MediaState.INDEPENDENT, description: 'Media is independent of government.' };
    if (p.power >= 55) return { state: MediaState.PROPAGANDA, description: 'Media serves as state communication.' };
    return { state: MediaState.CURATED, description: 'Media is curated for accuracy.' };
  }

  private genEvents(p: PlayerProfile, archetype: CivilizationArchetype): HistoricalEvent[] {
    const events: HistoricalEvent[] = [
      { title: 'The Archive Preservation', year: 10, significance: 90, description: 'The new society established memory preservation as its founding mission.' },
    ];
    if (p.progress >= 55) events.push({ title: 'The Great Reconstruction', year: 50, significance: 80, description: 'Ambitious reconstruction transformed society.' });
    if (p.truth >= 55) events.push({ title: 'The Knowledge Renaissance', year: 100, significance: 75, description: 'A renaissance of knowledge and inquiry emerged.' });
    if (p.compassion >= 55) events.push({ title: 'The Compassion Mandate', year: 40, significance: 75, description: 'Social welfare became a foundational institution.' });
    return events.sort((a, b) => a.year - b.year);
  }

  private calcStability(p: PlayerProfile): number {
    const tensions = [Math.abs(p.freedom - p.power), Math.abs(p.progress - p.truth), Math.abs(p.compassion - p.power)];
    return Math.max(20, Math.min(100, 100 - tensions.reduce((a, b) => a + b, 0) / tensions.length));
  }

  private genName(archetype: CivilizationArchetype, government: GovernmentType): string {
    const prefixes: Record<string, string[]> = {
      [CivilizationArchetype.THE_ARCHIVISTS]: ['The Archive', 'The Memory', 'The Repository'],
      [CivilizationArchetype.THE_TECHNOCRATS]: ['The Innovation', 'The Logic', 'The Precision'],
      [CivilizationArchetype.THE_HUMANISTS]: ['The Compassion', 'The Unity', 'The Harmony'],
      [CivilizationArchetype.THE_EMPIRES]: ['The Dominion', 'The Authority', 'The Order'],
      [CivilizationArchetype.THE_REFORMERS]: ['The Liberty', 'The Horizon', 'The Dawn'],
      [CivilizationArchetype.THE_BUILDERS]: ['The Foundation', 'The Progress', 'The Future'],
      [CivilizationArchetype.THE_SCHOLARS]: ['The Wisdom', 'The Knowledge', 'The Legacy'],
      [CivilizationArchetype.THE_GUARDIANS]: ['The Vigil', 'The Protection', 'The Steadfast'],
      [CivilizationArchetype.THE_COLLECTORS]: ['The Collection', 'The Record', 'The Archive'],
      [CivilizationArchetype.THE_EXPANSIONISTS]: ['The Horizon', 'The Frontier', 'The Beyond'],
    };
    const suffixes: Record<string, string[]> = {
      [GovernmentType.TECHNOCRACY]: ['Council', 'Institutes'],
      [GovernmentType.DEMOCRACY]: ['Union', 'Commonwealth'],
      [GovernmentType.FEDERATION]: ['Federation', 'Alliance'],
      [GovernmentType.COUNCIL_RULE]: ['Consortium', 'Assembly'],
      [GovernmentType.MERITOCRACY]: ['Academy', 'Order'],
      [GovernmentType.COLLECTIVE]: ['Collective', 'Partnership'],
      [GovernmentType.AUTHORITARIAN_STATE]: ['State', 'Directorate'],
      [GovernmentType.ARCHIVE_GOVERNANCE]: ['Archives', 'Vault'],
    };
    const p = prefixes[archetype] || ['The New'];
    const s = suffixes[government] || ['Society'];
    return `${p[Math.floor(Math.random() * p.length)]} ${s[Math.floor(Math.random() * s.length)]}`;
  }
}
