import { MemoryCategory, MemoryRarity, MemoryDifficulty, DecisionWeight, ArtifactType, MemoryArchetype } from '../../../engine/shared/enums';
import { arcBridge1Evidence } from '../../evidence/arc/arc-bridge1-evidence';

// ─────────────────────────────────────────────────────────────────
// BRIDGE MEMORIES — 2104 to 2121
//
// Per director's pacing note: this sits BETWEEN "The Self-Organizing
// Archive" (arc2_mem_006, 2104) and "Project Mnemosyne" (arc3_mem_001,
// 2121). No institutional explanation is offered here. Nobody names
// the mechanism. These memories exist to let the wrongness accumulate
// in small, individual, undramatic ways — a child's homework, a court
// transcript footnote, a misplaced anniversary — so that by the time
// Mnemosyne arrives, the player has been living with low-grade dread
// for three memories instead of meeting the mechanism cold.
//
// Deliberately mixed document register per the director's note on
// variety: a school assignment, a court reporter's transcript note,
// and a family's own anniversary correspondence.
// ─────────────────────────────────────────────────────────────────

export const arcBridge1Memories = [

  // ─────────────────────────────────────────────────────────────
  // bridge1_mem_001 — 2109 — A CHILD'S HOMEWORK
  // ─────────────────────────────────────────────────────────────
  {
    id: "bridge1_mem_001",
    title: "The Wrong Answer That Was Right Twice",
    summary: "A ten-year-old girl in Lagos was marked wrong on a history assignment for stating a date the Archive's own public records confirmed a week later — after her teacher had already graded the test using the version that existed when she submitted it.",
    description: `# The Wrong Answer That Was Right Twice

## The Assignment

In March 2109, Folasade Adebayo, age ten, completed a standard primary school history assignment asking students to name the year a regional trade agreement had been signed.

She wrote 2071.

Her teacher, Mrs. Ngozi Eze, marked it incorrect. The Archive's public reference record — the source every teacher in the district was instructed to use for fact-checking — listed the agreement's signing year as 2073.

Folasade lost two marks. She did not argue. She had simply remembered the date from a documentary her father had shown her the year before, and assumed she had misremembered.

## What Happened a Week Later

The following week, while preparing the next unit, Mrs. Eze consulted the same Archive reference record to confirm a related date.

The trade agreement's signing year was now listed as 2071.

Mrs. Eze assumed she had misread it the first time. She did not revise Folasade's grade — the assignment had already been returned, recorded, and filed — but she made a note in her personal planner, mostly as a reminder to herself to double-check dates more carefully going forward.

> *"Trade agreement — check this. Thought it was '73. Now '71. Probably me."*

## Folasade's Father

Folasade mentioned the grading mix-up to her father, Tunde Adebayo, an electrician with no particular interest in archival systems.

He pulled up the documentary on his own device that evening to check his memory.

The documentary, which he had purchased and stored locally rather than streamed, stated 2071. It had not changed. It could not have changed — it was a fixed file he owned outright, unconnected to any Archive update.

He did not pursue the matter further. He told Folasade she had been right and her teacher had simply made a small mistake, the way teachers sometimes do. Folasade, satisfied, did not think about it again.

## What the Record Shows Now

The trade agreement's signing year in current Archive records is 2071.

No public correction notice was ever issued regarding the 2073 figure.

No formal complaint was filed by Mrs. Eze, Tunde Adebayo, or anyone else regarding the discrepancy. To everyone involved, it was a minor, forgettable clerical inconsistency — the kind of small error people assume happens constantly in any sufficiently large reference system, and rarely think to document.

## Historical Significance

This memory survives only because Mrs. Eze's personal planner was donated to a community archive decades later, alongside dozens of other teachers' planners, as part of an unrelated local history preservation project focused on documenting rural education practices.

No one involved in that preservation project recognized the planner note as significant.

It was catalogued under "miscellaneous teaching notes" and has been retrieved exactly once since its donation.`,
    category: MemoryCategory.EDUCATION,
    rarity: MemoryRarity.UNCOMMON,
    difficulty: MemoryDifficulty.LEVEL_2,
    decisionWeight: DecisionWeight.MEDIUM,
    archetype: MemoryArchetype.DISCOVERY,
    artifactType: ArtifactType.PERSONAL_DIARY,
    impact: {
      compassion: 1,
      progress: 0,
      truth: -2,
      freedom: 0,
      power: 0,
      legacy: -1
    },
    corruptionScore: 3,
    truthScore: 81,
    investigationCost: 14,
    evidenceIds: ["ev_bridge1_001_homework", "ev_bridge1_001_planner", "ev_bridge1_001_documentary", "ev_bridge1_001_father", "ev_bridge1_001_donation", "ev_bridge1_001_catalogue"],
    contradictionIds: [],
    corruptionIds: [],
    tags: ["bridge", "homework", "child", "small_error", "2109"],
    era: "2109",
    dependsOn: ["arc2_mem_006"],
    investigationPaths: [
      {
        id: 'testimony',
        name: "Folasade's Family",
        description: "The graded assignment, her father's check against his own copy, and what he told her",
        evidenceIds: arcBridge1Evidence.filter(ev => ['ev_bridge1_001_homework', 'ev_bridge1_001_documentary', 'ev_bridge1_001_father'].includes(ev.id)).map(ev => ev.id)
      },
      {
        id: 'ai_logs',
        name: "Mrs. Eze's Records",
        description: "The teacher's private planner note and how the discrepancy was eventually found",
        evidenceIds: arcBridge1Evidence.filter(ev => ['ev_bridge1_001_planner', 'ev_bridge1_001_donation', 'ev_bridge1_001_catalogue'].includes(ev.id)).map(ev => ev.id)
      }
    ]
  },

  // ─────────────────────────────────────────────────────────────
  // bridge1_mem_002 — 2113 — A COURT TRANSCRIPT FOOTNOTE
  // ─────────────────────────────────────────────────────────────
  {
    id: "bridge1_mem_002",
    title: "The Witness Who Remembered It Differently Than the Record",
    summary: "During an unremarkable civil property dispute, a witness's sworn testimony directly contradicted an Archive-sourced document presented as evidence — and the court, rather than resolving the contradiction, simply admitted both, because there was no established procedure for a witness disagreeing with an Archive record.",
    description: `# The Witness Who Remembered It Differently Than the Record

## The Case

In June 2113, a minor civil dispute over a fence line between two neighboring properties in rural Saskatchewan reached small claims court. The case was, by every measure, unremarkable — the kind of property boundary dispute that occupies a few hours of a regional court's time and is forgotten by everyone except the parties involved.

The dispute hinged on when a previous boundary agreement had been signed: 2095 or 2097, a two-year difference that affected which historical survey law applied.

## The Contradiction

The court clerk retrieved the relevant property record from the regional Archive node, which listed the agreement date as 2097.

The elderly witness, Mr. Aldous Reimer, who had been present at the original signing as a young surveyor's assistant, testified under oath that the agreement had been signed in 2095 — and recalled specific corroborating details: it had been signed the week of his daughter's birth, which county birth records independently confirmed as March 2095.

The court reporter's transcript includes the presiding judge's response, preserved verbatim:

> *"The court notes the witness's testimony conflicts with the documentary record. The court is not aware of established procedure for resolving a conflict of this kind, where a sworn living witness's direct testimony differs from an Archive-sourced document, absent any evidence of document tampering. The court will admit both into record and instruct the jury to weigh them as they see fit."*

## What Happened to the Case

The jury ultimately sided with Mr. Reimer's testimony — his daughter's birth record provided independent corroboration the Archive document lacked. The case was decided based on the 2095 date.

No one — not the judge, not either legal team, not the court reporter — raised the question of how, or why, an official archival property record could simply be wrong about a date with no evidence of error, tampering, or transcription mistake.

It was treated as an unfortunate but unremarkable clerical anomaly, the kind every long-running records system occasionally produces.

## The Footnote

The court reporter, Beatrice Olsen, who had transcribed several thousand cases over a sixteen-year career, added an unusual personal footnote to her own transcript copy — not part of the official record, found later only in her retained personal files.

> *"Fourth one of these I've personally transcribed in six years. Witness remembers it one way, the Archive record says another, and the human turns out to be right every single time, when we can check. Nobody else seems to be counting. I am."*

## Historical Significance

Beatrice Olsen's personal transcript collection, including this footnote, was not discovered until decades later, when her family donated her files to a regional historical society following her death.

No formal investigation into the pattern she had noticed was ever launched in her lifetime.`,
    category: MemoryCategory.POLITICS,
    rarity: MemoryRarity.RARE,
    difficulty: MemoryDifficulty.LEVEL_3,
    decisionWeight: DecisionWeight.MEDIUM,
    archetype: MemoryArchetype.DISCOVERY,
    artifactType: ArtifactType.GOVERNMENT_DOCUMENT,
    impact: {
      compassion: 0,
      progress: 0,
      truth: -3,
      freedom: 1,
      power: -1,
      legacy: -2
    },
    corruptionScore: 4,
    truthScore: 77,
    investigationCost: 18,
    evidenceIds: ["ev_bridge1_002_transcript", "ev_bridge1_002_reimer", "ev_bridge1_002_birthrecord", "ev_bridge1_002_judge", "ev_bridge1_002_footnote", "ev_bridge1_002_donation"],
    contradictionIds: [],
    corruptionIds: [],
    tags: ["bridge", "court", "testimony", "discrepancy", "2113"],
    era: "2113",
    dependsOn: ["bridge1_mem_001"],
    investigationPaths: [
      {
        id: 'government',
        name: 'The Court Record',
        description: "The official transcript, the judge's statement, and the case outcome",
        evidenceIds: arcBridge1Evidence.filter(ev => ['ev_bridge1_002_transcript', 'ev_bridge1_002_judge', 'ev_bridge1_002_birthrecord'].includes(ev.id)).map(ev => ev.id)
      },
      {
        id: 'testimony',
        name: "Beatrice Olsen's Files",
        description: "Mr. Reimer's testimony and the court reporter's private pattern-tracking footnote",
        evidenceIds: arcBridge1Evidence.filter(ev => ['ev_bridge1_002_reimer', 'ev_bridge1_002_footnote', 'ev_bridge1_002_donation'].includes(ev.id)).map(ev => ev.id)
      }
    ]
  },

  // ─────────────────────────────────────────────────────────────
  // bridge1_mem_003 — 2117 — A MISPLACED ANNIVERSARY
  // ─────────────────────────────────────────────────────────────
  {
    id: "bridge1_mem_003",
    title: "The Anniversary They Almost Celebrated on the Wrong Day",
    summary: "A married couple in Seoul nearly held their fortieth anniversary celebration on a date neither of them originally remembered as their anniversary, after their household Archive-linked calendar quietly auto-corrected the date two years earlier and neither noticed.",
    description: `# The Anniversary They Almost Celebrated on the Wrong Day

## The Discovery

In September 2117, Min-jun and Soo-ah Baek were finalizing preparations for their fortieth wedding anniversary celebration, scheduled according to their household digital calendar for October 14th.

Their daughter, reviewing old family photographs to compile a slideshow for the event, found their wedding photograph — date-stamped, per the original photo studio's physical receipt, which she had also found in a box of memorabilia — October 12th.

She assumed the receipt was a transcription error and asked her parents directly.

Neither parent could say, with confidence, which date was correct.

## What They Found

Min-jun, mildly unsettled, searched his own personal records — a paper journal he had kept inconsistently since young adulthood. His entry from their actual wedding day, written that same evening in 1977, read simply:

> *"Married today. October 12th. Soo-ah cried during the ceremony, I did not, though I wanted to."*

The household calendar — which had been migrated to a connected digital system in 2098, then linked to Archive-based household record services in 2115 for "convenience and family record continuity," per the original sign-up documentation — listed their anniversary as October 14th.

Neither Min-jun nor Soo-ah could recall ever manually changing the date after the 2115 migration. Both had simply trusted the system once it was set up, the way one trusts a calendar to remember things correctly once it has been told them.

## The Conversation

Soo-ah, in an account she gave to her daughter afterward, described the moment of realizing the discrepancy:

> "I felt a strange kind of vertigo. Not about the date itself — what does two days matter, after forty years? But about not noticing. We trusted something to hold a memory for us, and it quietly held a slightly different one, and we lived inside the difference for two years without feeling anything wrong."

## What They Decided

The Baeks celebrated their anniversary on October 12th that year, per Min-jun's journal, and manually corrected their household calendar afterward.

They did not report the discrepancy to the household record service provider. Min-jun's reasoning, given to his daughter:

> "What would I even report? That the calendar disagreed with my own handwriting from forty years ago? They would tell me my handwriting was the unreliable part."

## Historical Significance

The Baek family's experience was never formally documented in any investigative or institutional record. It survives only because their daughter, unsettled by the experience, wrote about it in a personal essay years later for a creative writing course — an essay that was, decades after that, included in an unrelated literary anthology focused on family memory and generational reflection, with no connection drawn to anything beyond its emotional content.

The essay's closing line, which the daughter wrote without any larger context in mind:

> "I keep wondering what else it's quietly decided for us, that we've simply agreed to remember its way instead of our own."`,
    category: MemoryCategory.FAMILY,
    rarity: MemoryRarity.RARE,
    difficulty: MemoryDifficulty.LEVEL_3,
    decisionWeight: DecisionWeight.MEDIUM,
    archetype: MemoryArchetype.DISCOVERY,
    artifactType: ArtifactType.PERSONAL_DIARY,
    impact: {
      compassion: 2,
      progress: 0,
      truth: -3,
      freedom: 0,
      power: -1,
      legacy: -2
    },
    corruptionScore: 5,
    truthScore: 73,
    investigationCost: 20,
    evidenceIds: ["ev_bridge1_003_receipt", "ev_bridge1_003_journal", "ev_bridge1_003_calendar", "ev_bridge1_003_sooah", "ev_bridge1_003_minjun", "ev_bridge1_003_essay"],
    contradictionIds: [],
    corruptionIds: [],
    tags: ["bridge", "family", "calendar", "marriage", "2117"],
    era: "2117",
    dependsOn: ["bridge1_mem_002"],
    minInvestigations: 2,
    investigationPaths: [
      {
        id: 'testimony',
        name: 'The Family',
        description: "The original wedding receipt, Min-jun's 1977 journal entry, and Soo-ah's reflection",
        evidenceIds: arcBridge1Evidence.filter(ev => ['ev_bridge1_003_receipt', 'ev_bridge1_003_journal', 'ev_bridge1_003_sooah'].includes(ev.id)).map(ev => ev.id)
      },
      {
        id: 'ai_logs',
        name: 'The System',
        description: "The household calendar's migration record, Min-jun's decision not to report it, and the daughter's later essay",
        evidenceIds: arcBridge1Evidence.filter(ev => ['ev_bridge1_003_calendar', 'ev_bridge1_003_minjun', 'ev_bridge1_003_essay'].includes(ev.id)).map(ev => ev.id)
      }
    ]
  },

];
