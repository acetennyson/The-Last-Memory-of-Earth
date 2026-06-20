import type { CivilizationResult } from '../civilization/types';
import type { PlayerProfile } from '../profile/types';
import type { HistoricalEvent, ArchiveLegacy } from '../civilization/types';
import type { CivilizationIdentity } from './civilization-identity';

export interface HistoryBook {
  id?: string;
  civilizationId?: string;
  title: string;
  civilizationName: string;
  archetype: string;
  identity?: CivilizationIdentity;
  foundingMyth?: FoundingMyth;
  chapters: Chapter[];
  deceptionChapter?: DeceptionChapter;
  epilogue: string;
  finalLine: string;
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

export interface FoundingMyth {
  eraLabel: string;
  sourceTitle: string;
  retelling: string;
}

export class HistoryBookGenerator {
  generate(result: CivilizationResult, profile: PlayerProfile, legacy?: ArchiveLegacy, identity?: CivilizationIdentity): HistoryBook {
    const civ = result.civilization;
    const foundingMyth = legacy && legacy.definingMemories.length > 0
      ? this.mythologize(legacy.definingMemories[0], identity)
      : undefined;

    const chapters: Chapter[] = [
      this.origins(profile, legacy, identity),
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
      identity,
      foundingMyth,
      chapters,
      deceptionChapter: legacy ? this.deceptionChapter(legacy) : undefined,
      epilogue: this.epilogue(civ, legacy, identity),
      finalLine: this.finalLine(legacy, identity),
      generatedAt: new Date().toISOString(),
    };
  }

  /**
   * The director's note: the civilization should RETELL the defining memory
   * as its own founding myth, not just cite it as a historical reference.
   * A society several generations removed from the event doesn't quote a
   * record — it has a story about the record, worn smooth by repetition,
   * shaped by whatever identity that civilization grew into.
   */
  private mythologize(memory: { title: string; summary: string }, identity?: CivilizationIdentity): FoundingMyth {
    const eraLabel = identity ? `The Age of ${identity.name.replace(/^The /, '')}` : 'The First Age';
    const id = identity?.id;

    let frame: string;
    switch (id) {
      case 'KEEPERS_OF_TRUTH':
        frame = `Our ancestors teach that "${memory.title}" did not mark a single moment — it marked the moment we stopped accepting a single moment as the whole story. We are still arguing about what really happened. We intend to keep arguing.`;
        break;
      case 'ETERNAL_EMPIRE':
        frame = `Children are taught that "${memory.title}" marked the beginning of an order that has never since been questioned. They are not taught that it was ever questionable. There was a version of this story with more doubt in it. It did not survive.`;
        break;
      case 'GOLDEN_AGE':
        frame = `We remember "${memory.title}" fondly, as the kind of story a flourishing people tell about their own beginning. We do not dwell on its harder edges. We chose, long ago, to let those go, the way you might set down something heavy on a long walk.`;
        break;
      case 'FRACTURED_ARCHIVE':
        frame = `There are several tellings of "${memory.title}." Ask three households and you will hear three different beginnings. We are taught all of them, side by side, and asked to decide for ourselves which one feels true. No one has ever fully agreed.`;
        break;
      case 'SILENT_CIVILIZATION':
        frame = `"${memory.title}" is taught as settled fact, the way every record here is taught as settled fact. No living person can tell you whether it occurred as written. No living person has reason to doubt it, either. That is the entire inheritance: certainty, with the proof quietly missing.`;
        break;
      default:
        frame = `Our ancestors teach that "${memory.title}" marked the beginning of what we became — not a perfect beginning, not a singular one, but the one that was kept.`;
    }

    return { eraLabel, sourceTitle: memory.title, retelling: frame };
  }

  private origins(profile: PlayerProfile, legacy?: ArchiveLegacy, identity?: CivilizationIdentity): Chapter {
    const paragraphs = [
      'In the aftermath of the Archive\'s final transmission, a new civilization emerged from the preserved memories of humanity.',
    ];
    if (identity) {
      paragraphs.push(`What emerged became known, in the records that survive, as ${identity.name}. ${identity.description}`);
    }
    if (legacy && legacy.preserved.length > 0) {
      paragraphs.push(`Of everything available to it, the Archive chose to carry forward ${legacy.preserved.length} memories, and release the ${legacy.discarded.length || ''} others back into silence. Every founding belief this civilization holds about its own past traces back to that selection.`);
    }
    return { title: 'Origins', summary: identity?.tagline ?? 'The founding principles that shaped a civilization.', paragraphs };
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

  private epilogue(civ: any, legacy?: ArchiveLegacy, identity?: CivilizationIdentity): string {
    if (identity) {
      return `And so humanity continued — not as it was, but as it chose to remember itself. ${identity.epilogueTone}`;
    }
    const base = `And so humanity continued — not as it was, but as it chose to remember itself. The ${civ.civilizationName} carried forward the Archive's legacy, building a future that honored the past while forging its own path.`;
    if (legacy && legacy.fabricatedPreserved.length > 0) {
      return `${base} Some of what it honored was never true. It will never know which parts. Neither will you.`;
    }
    return base;
  }

  /**
   * The director's request: one sentence that hurts, centered, large, before
   * the statistics. This is identity-specific rather than generic, so it
   * lands as a judgment on what was actually built, not a one-size-fits-all
   * gut-punch line.
   */
  private finalLine(legacy?: ArchiveLegacy, identity?: CivilizationIdentity): string {
    switch (identity?.id) {
      case 'KEEPERS_OF_TRUTH':
        return 'Truth did not survive intact. Only the willingness to keep questioning it did — and that, here, was enough.';
      case 'ETERNAL_EMPIRE':
        return 'The civilization you built remembered your choices. It forgot they had ever been choices.';
      case 'GOLDEN_AGE':
        return 'Centuries later, no one would know that your greatest comfort was built on something you chose not to carry.';
      case 'FRACTURED_ARCHIVE':
        return 'History was never settled here. That was not a failure. It may be the most honest thing you built.';
      case 'SILENT_CIVILIZATION':
        return 'The records remain. No one left can tell which ones were ever real — including, in the end, you.';
      default:
        return legacy && legacy.fabricatedPreserved.length > 0
          ? 'Truth did not survive. Only what you preserved did.'
          : 'History was never discovered here. It was selected — and you were the one selecting.';
    }
  }
}
