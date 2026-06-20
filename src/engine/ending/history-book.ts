import type { CivilizationResult } from '../civilization/types';
import type { PlayerProfile } from '../profile/types';
import type { HistoricalEvent, ArchiveLegacy } from '../civilization/types';

export interface HistoryBook {
  id?: string;
  civilizationId?: string;
  title: string;
  civilizationName: string;
  archetype: string;
  chapters: Chapter[];
  deceptionChapter?: DeceptionChapter;
  epilogue: string;
  generatedAt: string;
}

export interface Chapter {
  title: string;
  summary: string;
  paragraphs: string[];
}

export interface DeceptionChapter {
  title: string;
  summary: string;
  deceptionRate: number;
  discernmentRate: number;
  verdict: string;
  inheritedLies: { title: string; summary: string }[];
  caughtFabrications: { title: string; summary: string }[];
  paragraphs: string[];
}

export class HistoryBookGenerator {
  generate(result: CivilizationResult, profile: PlayerProfile, legacy?: ArchiveLegacy): HistoryBook {
    const civ = result.civilization;
    const chapters: Chapter[] = [
      this.origins(profile, legacy),
      { title: 'Governance', summary: civ.government.replace(/_/g, ' ').toLowerCase() + ' system.', paragraphs: [`Society was governed as a ${civ.government.toLowerCase().replace(/_/g, ' ')}.`, civ.stabilityScore >= 60 ? 'The system proved remarkably stable.' : 'Internal tensions challenged the governing system.'] },
      { title: 'Society & Culture', summary: civ.culture.description, paragraphs: [`Culture was defined by ${civ.culture.orientation.toLowerCase().replace(/_/g, ' ')} values.`, `Education emphasized ${civ.education.scientificFocus >= 50 ? 'scientific inquiry' : 'historical preservation'}.`] },
      { title: 'Knowledge & Science', summary: civ.science.description, paragraphs: [`Scientific advancement reached a ${civ.science.level.toLowerCase().replace(/_/g, ' ')} level.`, 'The Archive\'s mission evolved into a civilization-wide commitment to understanding.'] },
      this.majorEvents(result, legacy),
      { title: 'Conflicts & Challenges', summary: 'Struggles that shaped society.', paragraphs: [civ.stabilityScore < 50 ? 'Internal tensions created ongoing challenges.' : 'The civilization maintained remarkable harmony.', `Military posture was ${civ.military.posture.toLowerCase().replace(/_/g, ' ')}.`] },
      this.achievements(civ, legacy),
      this.legacyChapter(civ, legacy),
    ];

    return {
      title: `The Rise of ${civ.civilizationName}`,
      civilizationName: civ.civilizationName,
      archetype: civ.archetype,
      chapters,
      deceptionChapter: legacy ? this.deceptionChapter(legacy) : undefined,
      epilogue: this.epilogue(civ, legacy),
      generatedAt: new Date().toISOString(),
    };
  }

  private origins(profile: PlayerProfile, legacy?: ArchiveLegacy): Chapter {
    const top = Object.entries(profile).sort(([, a], [, b]) => b - a).slice(0, 2);
    const paragraphs = [
      'In the aftermath of the Archive\'s final transmission, a new civilization emerged from the preserved memories of humanity.',
      `The founding generation was shaped by ${top[0][0]} and ${top[1]?.[0] || 'legacy'}, which became their cornerstone values.`,
    ];
    if (legacy && legacy.preserved.length > 0) {
      paragraphs.push(`Of everything available to it, the Archive chose to carry forward ${legacy.preserved.length} memories, and release ${legacy.discarded.length} others back into silence. Every founding belief this civilization holds about its own past traces back to that selection.`);
    }
    return { title: 'Origins', summary: 'The founding principles that shaped a civilization.', paragraphs };
  }

  private majorEvents(result: CivilizationResult, legacy?: ArchiveLegacy): Chapter {
    return {
      title: 'Major Events',
      summary: legacy && legacy.definingMemories.length > 0
        ? 'The specific memories that became this civilization\'s founding stories.'
        : 'Defining moments of the civilization.',
      paragraphs: result.events.map((e: HistoricalEvent) => `In year ${e.year}, ${e.title} — ${e.description}`),
    };
  }

  private achievements(civ: any, legacy?: ArchiveLegacy): Chapter {
    const paragraphs: string[] = [];
    if (legacy && legacy.definingMemories.length > 0) {
      const lead = legacy.definingMemories[0];
      paragraphs.push(`The clearest expression of what this civilization values can be traced to a single preserved memory: "${lead.title}." ${lead.summary}`);
      paragraphs.push(`This was not an inevitable achievement. It was a choice — one record kept among many that could have been let go instead.`);
    } else {
      paragraphs.push(`The ${civ.civilizationName} successfully built a future shaped by what was preserved, and by what was not.`);
    }
    return { title: 'Achievements', summary: 'What the civilization accomplished, and why.', paragraphs };
  }

  private legacyChapter(civ: any, legacy?: ArchiveLegacy): Chapter {
    const paragraphs = [
      `The ${civ.civilizationName} stands as a testament to preserved memory.`,
      'What survived was not perfection, but truth — or as close to truth as memory allows.',
    ];
    if (legacy && legacy.mostMournedLoss) {
      paragraphs.push(`Not everything could be kept. "${legacy.mostMournedLoss.title}" was released, deliberately, and is gone now in any form anyone living can recover. Every civilization is built as much from what it forgot as what it remembered.`);
    }
    return { title: 'Legacy', summary: 'What humanity became.', paragraphs };
  }

  private deceptionChapter(legacy: ArchiveLegacy): DeceptionChapter {
    const totalFabricationsSeen = legacy.fabricatedPreserved.length + legacy.fabricatedDiscarded.length;

    let verdict: string;
    if (totalFabricationsSeen === 0) {
      verdict = 'No confirmed Archive fabrication crossed your desk this cycle — or none was ever caught. There is no way, from inside the Archive, to fully tell the difference.';
    } else if (legacy.discernmentRate >= 0.8) {
      verdict = 'You saw through nearly every lie the Archive tried to pass off as memory. This civilization was built on a foundation you actually verified — as much as verification was ever possible.';
    } else if (legacy.discernmentRate >= 0.4) {
      verdict = 'You caught some of what the Archive fabricated, and missed the rest. This civilization carries both real history and invented history in roughly equal, unmarked measure.';
    } else {
      verdict = 'Most of what the Archive fabricated, you let through unchallenged. This civilization\'s sense of its own past rests on foundations that, in significant part, were never real.';
    }

    const paragraphs = [
      `Across this cycle, the Archive presented ${totalFabricationsSeen} memor${totalFabricationsSeen === 1 ? 'y' : 'ies'} bearing the unmistakable, if quiet, signature of fabrication — internally consistent, fully evidenced, and false. ${verdict}`,
    ];

    if (legacy.fabricatedPreserved.length > 0) {
      paragraphs.push(`${legacy.fabricatedPreserved.length} fabricated memor${legacy.fabricatedPreserved.length === 1 ? 'y was' : 'ies were'} preserved as truth. They are now load-bearing. Removing them would mean explaining to an entire civilization that part of its history never happened.`);
    }
    if (legacy.fabricatedDiscarded.length > 0) {
      paragraphs.push(`${legacy.fabricatedDiscarded.length} fabrication${legacy.fabricatedDiscarded.length === 1 ? '' : 's'} were correctly identified and released before they could be mistaken for history. No one will ever know they were almost believed.`);
    }

    return {
      title: 'The Archive\'s Deceptions',
      summary: 'What was false, and what you did about it.',
      deceptionRate: legacy.deceptionRate,
      discernmentRate: legacy.discernmentRate,
      verdict,
      inheritedLies: legacy.fabricatedPreserved.map(m => ({ title: m.title, summary: m.summary })),
      caughtFabrications: legacy.fabricatedDiscarded.map(m => ({ title: m.title, summary: m.summary })),
      paragraphs,
    };
  }

  private epilogue(civ: any, legacy?: ArchiveLegacy): string {
    const base = `And so humanity continued — not as it was, but as it chose to remember itself. The ${civ.civilizationName} carried forward the Archive's legacy, building a future that honored the past while forging its own path.`;
    if (legacy && legacy.fabricatedPreserved.length > 0) {
      return `${base} Some of what it honored was never true. It will never know which parts. Neither will you.`;
    }
    if (legacy && legacy.preserved.length > 0) {
      return `${base} Every word of it traces back to a choice you made, memory by memory, when no one else could have made it instead.`;
    }
    return base;
  }
}
