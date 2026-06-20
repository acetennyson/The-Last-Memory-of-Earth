import type { PlayerProfile } from '../profile/types';
import type { ArchiveLegacy } from '../civilization/types';

export enum CivilizationIdentityId {
  KEEPERS_OF_TRUTH = 'KEEPERS_OF_TRUTH',
  ETERNAL_EMPIRE = 'ETERNAL_EMPIRE',
  GOLDEN_AGE = 'GOLDEN_AGE',
  FRACTURED_ARCHIVE = 'FRACTURED_ARCHIVE',
  SILENT_CIVILIZATION = 'SILENT_CIVILIZATION',
  QUIET_STEWARDS = 'QUIET_STEWARDS', // fallback: no strong pattern dominates
}

export interface CivilizationIdentity {
  id: CivilizationIdentityId;
  name: string;
  tagline: string;
  description: string;
  epilogueTone: string;
  matchStrength: number; // 0-1, how strongly the profile matched this identity
}

interface ProfileLike {
  compassion: number;
  progress: number;
  truth: number;
  freedom: number;
  power: number;
  legacy: number;
}

const AVG = (p: ProfileLike) => (p.compassion + p.progress + p.truth + p.freedom + p.power + p.legacy) / 6;

/**
 * Identity is computed from the *pattern* across all six values plus
 * corruption/deception signal — never from a single dominant stat. This is
 * deliberate: collapsing six tracked values into "which one is highest"
 * (the old pickArchetype behavior) throws away most of what the player
 * actually built. Each candidate below is a named pattern across multiple
 * axes; we score every candidate and return the best match, so two players
 * with the same "highest stat" can still land on different identities
 * depending on everything else they did.
 */
export function computeCivilizationIdentity(profile: PlayerProfile, legacy?: ArchiveLegacy): CivilizationIdentity {
  const p = profile;
  const corruptionPressure = legacy ? legacy.deceptionRate : 0;
  const discernment = legacy ? legacy.discernmentRate : 1;
  const baseline = AVG(p);

  type Candidate = { id: CivilizationIdentityId; score: number };
  const candidates: Candidate[] = [];

  // SILENT CIVILIZATION — corruption/deception overwhelms everything else.
  // This check runs first and is weighted heavily: no combination of high
  // values matters much if the player let most fabrications through.
  candidates.push({
    id: CivilizationIdentityId.SILENT_CIVILIZATION,
    score: corruptionPressure * 90 + (1 - discernment) * 40 - baseline * 0.1,
  });

  // KEEPERS OF TRUTH — truth and freedom both high, power not dominant.
  candidates.push({
    id: CivilizationIdentityId.KEEPERS_OF_TRUTH,
    score: (p.truth - 50) * 1.1 + (p.freedom - 50) * 0.9 - (p.power - 50) * 0.6 + discernment * 25,
  });

  // ETERNAL EMPIRE — power and legacy both high, freedom suppressed.
  candidates.push({
    id: CivilizationIdentityId.ETERNAL_EMPIRE,
    score: (p.power - 50) * 1.1 + (p.legacy - 50) * 0.9 - (p.freedom - 50) * 0.7,
  });

  // GOLDEN AGE — compassion and progress both high, truth not required.
  candidates.push({
    id: CivilizationIdentityId.GOLDEN_AGE,
    score: (p.compassion - 50) * 1.0 + (p.progress - 50) * 1.0 - Math.abs(p.truth - 50) * 0.2,
  });

  // FRACTURED ARCHIVE — freedom high but truth specifically low (the
  // distinguishing feature vs Keepers of Truth, which needs BOTH high).
  candidates.push({
    id: CivilizationIdentityId.FRACTURED_ARCHIVE,
    score: (p.freedom - 50) * 1.1 - (p.truth - 50) * 1.0 + corruptionPressure * 15,
  });

  candidates.sort((a, b) => b.score - a.score);
  const winner = candidates[0];

  // If nothing scored meaningfully above a neutral baseline, the profile
  // genuinely doesn't lean any direction strongly — that's its own honest
  // result rather than forcing a dramatic label onto a balanced playthrough.
  const NEUTRAL_THRESHOLD = 8;
  const id = winner.score > NEUTRAL_THRESHOLD ? winner.id : CivilizationIdentityId.QUIET_STEWARDS;
  const matchStrength = Math.max(0, Math.min(1, winner.score / 60));

  return buildIdentity(id, matchStrength, p, legacy);
}

function buildIdentity(id: CivilizationIdentityId, matchStrength: number, p: ProfileLike, legacy?: ArchiveLegacy): CivilizationIdentity {
  switch (id) {
    case CivilizationIdentityId.KEEPERS_OF_TRUTH:
      return {
        id, matchStrength,
        name: 'The Keepers of Truth',
        tagline: 'Truth and freedom govern what is remembered.',
        description: 'This civilization questions everything it is told, including its own founding stories. Nothing is settled simply because it is old, or convenient, or comforting.',
        epilogueTone: 'Your civilization argues. It questions. Research continues long after the questions stop being comfortable. History remains genuinely uncertain here — not because no one searched for the truth, but because they refused to stop searching once they found something that resembled it.',
      };
    case CivilizationIdentityId.ETERNAL_EMPIRE:
      return {
        id, matchStrength,
        name: 'The Eternal Empire',
        tagline: 'Power and legacy outlast questioning.',
        description: 'History here is unified, stable, and unquestioned. It is also, quietly and almost without anyone deciding it should be, no longer something anyone is permitted to argue with.',
        epilogueTone: 'History became settled. Singular. Dissent did not end in a single dramatic act — it simply stopped reproducing itself, generation after generation, until no one quite remembered there had ever been room for it.',
      };
    case CivilizationIdentityId.GOLDEN_AGE:
      return {
        id, matchStrength,
        name: 'The Golden Age',
        tagline: 'Humanity flourishes; some truths are released gladly.',
        description: 'This civilization is, by almost any measure, kind and capable. It built a future people would choose to live in. It also chose, again and again, to let certain uncomfortable facts go rather than carry them forward.',
        epilogueTone: 'Humanity flourished. People were fed, cared for, free to build. Some truths were simply too heavy to carry into that future, so they were set down — gently, deliberately, and almost no one alive today knows exactly what was set down, or why.',
      };
    case CivilizationIdentityId.FRACTURED_ARCHIVE:
      return {
        id, matchStrength,
        name: 'The Fractured Archive',
        tagline: 'Freedom without consensus. Every history coexists.',
        description: 'Nothing here was suppressed. Everything was allowed to survive — including versions of the past that directly contradict one another. There is no single official history left to argue with.',
        epilogueTone: 'Countless histories survived, all at once, all contradicting each other, none of them officially wrong. Every generation since has had to choose, for itself, what it is willing to believe. No one ever fully agreed on an answer. That was, in its way, exactly what was preserved.',
      };
    case CivilizationIdentityId.SILENT_CIVILIZATION:
      return {
        id, matchStrength,
        name: 'The Silent Civilization',
        tagline: 'The records remain. No one can tell which ones are real.',
        description: 'The Archive\'s fabrications were not caught. They were preserved, taught, and believed at roughly the same rate as everything genuine — until the distinction stopped being something anyone could meaningfully draw.',
        epilogueTone: 'The records survived. All of them — the real and the manufactured, filed side by side, with nothing left to tell one from the other. Children here are taught a complete history. No living person can confirm how much of it occurred.',
      };
    default:
      return {
        id: CivilizationIdentityId.QUIET_STEWARDS, matchStrength,
        name: 'The Quiet Stewards',
        tagline: 'No single value defines this civilization.',
        description: 'This civilization did not lean hard in any one direction. It preserved a measured, ordinary mix of triumphs, omissions, and unresolved questions — much like the species that built it.',
        epilogueTone: 'Nothing here was extreme. The civilization that emerged is neither a warning nor an inspiration — just a continuation, careful and undramatic, carrying forward a little of everything you showed it and a little of everything you didn\'t.',
      };
  }
}
