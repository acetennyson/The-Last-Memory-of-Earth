import type { CivilizationResult } from '../civilization/types';
import type { PlayerProfile } from '../profile/types';
import type { HistoricalEvent } from '../civilization/types';

export interface HistoryBook {
  id?: string;
  civilizationId?: string;
  title: string;
  civilizationName: string;
  archetype: string;
  chapters: Chapter[];
  epilogue: string;
  generatedAt: string;
}

export interface Chapter {
  title: string;
  summary: string;
  paragraphs: string[];
}

export class HistoryBookGenerator {
  generate(result: CivilizationResult, profile: PlayerProfile): HistoryBook {
    const civ = result.civilization;
    return {
      title: `The Rise of ${civ.civilizationName}`,
      civilizationName: civ.civilizationName,
      archetype: civ.archetype,
      chapters: [
        this.origins(profile),
        { title: 'Governance', summary: civ.government.replace(/_/g, ' ').toLowerCase() + ' system.', paragraphs: [`Society was governed as a ${civ.government.toLowerCase().replace(/_/g, ' ')}.`, civ.stabilityScore >= 60 ? 'The system proved remarkably stable.' : 'Internal tensions challenged the governing system.'] },
        { title: 'Society & Culture', summary: civ.culture.description, paragraphs: [`Culture was defined by ${civ.culture.orientation.toLowerCase().replace(/_/g, ' ')} values.`, `Education emphasized ${civ.education.scientificFocus >= 50 ? 'scientific inquiry' : 'historical preservation'}.`] },
        { title: 'Knowledge & Science', summary: civ.science.description, paragraphs: [`Scientific advancement reached a ${civ.science.level.toLowerCase().replace(/_/g, ' ')} level.`, 'The Archive\'s mission evolved into a civilization-wide commitment to understanding.'] },
        { title: 'Major Events', summary: 'Defining moments of the civilization.', paragraphs: result.events.map((e: HistoricalEvent) => `In year ${e.year}, ${e.title.toLowerCase()} — ${e.description}`) },
        { title: 'Conflicts & Challenges', summary: 'Struggles that shaped society.', paragraphs: [civ.stabilityScore < 50 ? 'Internal tensions created ongoing challenges.' : 'The civilization maintained remarkable harmony.', `Military posture was ${civ.military.posture.toLowerCase().replace(/_/g, ' ')}.`] },
        { title: 'Achievements', summary: 'What the civilization accomplished.', paragraphs: [`The ${civ.civilizationName} successfully ${['established universal education', 'restored damaged ecosystems', 'created a knowledge-sharing society', 'built a bridge between past and future'][Math.floor(Math.random() * 4)]}.`] },
        { title: 'Legacy', summary: 'What humanity became.', paragraphs: [`The ${civ.civilizationName} stands as a testament to preserved memory.`, 'What survived was not perfection, but truth — or as close to truth as memory allows.'] },
      ],
      epilogue: `And so humanity continued — not as it was, but as it chose to remember itself. The ${civ.civilizationName} carried forward the Archive's legacy, building a future that honored the past while forging its own path.`,
      generatedAt: new Date().toISOString(),
    };
  }

  private origins(profile: PlayerProfile): Chapter {
    const top = Object.entries(profile).sort(([, a], [, b]) => b - a).slice(0, 2);
    return {
      title: 'Origins',
      summary: 'The founding principles that shaped a civilization.',
      paragraphs: [
        'In the aftermath of the Archive\'s final transmission, a new civilization emerged from the preserved memories of humanity.',
        `The founding generation was shaped by ${top[0][0]} and ${top[1]?.[0] || 'legacy'}, which became their cornerstone values.`,
      ],
    };
  }
}
