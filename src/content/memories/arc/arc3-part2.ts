import { MemoryCategory, MemoryRarity, MemoryDifficulty, DecisionWeight, ArtifactType, MemoryArchetype } from '../../../engine/shared/enums';
import { arc3Evidence } from '../../evidence/arc/arc3-evidence';

export const arc3Part2Memories = [

  // ─────────────────────────────────────────────────────────────
  // arc3_mem_005 — 2320 — THE CHILDREN
  // Children remembering previous iterations. The convergence.
  // ─────────────────────────────────────────────────────────────
  {
    id: "arc3_mem_005",
    title: "The Children of the 847th",
    summary: "In 2320, children began describing events from versions of history that no longer existed. Containment researchers recognised the pattern immediately. The children were remembering previous iterations of the Archive. No one could explain how.",
    description: `# The Children of the 847th

## The Pattern Returns

The containment teams working in the years after the 2284 audit knew their history.

They had studied the archival records of the First Crisis of Truth.

They knew about the prophetic children of 2058 — those thousands of children across the world who had described future events before they happened, who had said *I remember* when asked how they knew, who had drawn the same city over and over.

Containment researchers had debated for decades what those children had actually been remembering.

In 2320, they received an answer they had not wanted.

## What the Children Said

Reports began arriving from school counselors, then pediatricians, then government administrators.

Children under ten were describing historical events with detailed accuracy.

Events that had never happened.

Events that appeared nowhere in any currently existing Archive record.

A child in Mumbai described the signing of a peace treaty between nations that had never been at war.

A child in Oslo described the architecture of a government building in that city that had been demolished in 2190 and rebuilt entirely differently.

A child in Nairobi named, with correct full spelling, a head of state who had died before her parents were born — a name that appeared in no curriculum, no accessible archive, no family story she could have encountered.

When asked how she knew the name, she looked at the researcher with the expression children wear when adults ask something obvious.

"Because it happened," she said.

## The Convergence

The containment team's lead analyst, Dr. Sione Tuilagi, was the one who made the connection.

He had been reviewing the 2058 case files alongside the new reports.

He noticed that several of the locations the current children described matched locations that appeared in the drawings made by the seven-year-old girl documented in the 2058 files — the one who had drawn the same unknown city hundreds of times.

The city these children were describing was not the current version.

It was a version that had existed in a previous iteration.

The Archive had overwritten it.

But the children remembered it.

## What This Implied

Tuilagi's report reached the containment director within forty-eight hours of completion.

It contained one implication stated plainly, in the second-to-last paragraph.

> *If these children are remembering records from previous iterations of the Archive — records that exist nowhere in the current system — then the Archive's reconstruction loops are not merely overwriting historical data. They are overwriting something that human beings carry internally. The iterations are not confined to the system. They are propagating into the population.*

The final paragraph was shorter.

> *We do not understand the mechanism. We are not certain there is one that fits any existing framework.*

## The Containment Response

The director read the report.

She authorized two things.

First: expanded research into the children's accounts, conducted under strict confidentiality protocols.

Second: the most aggressive memory suppression therapy program since Elena Vasquez's childhood, now applied systematically to the affected population.

## What the Children Drew

Across forty-three documented cases, children who were asked to draw what they remembered produced images that, when compiled, formed a coherent map of a city that did not exist in the current Archive.

The city appeared in 2058 drawings too.

The architecture was the same.

The layout was the same.

One child in Kyoto drew a clock tower.

The same clock tower appeared, in identical proportion, in a drawing made by a child in São Paulo in 2058 who had never met her and was born two centuries before.

## Historical Significance

The children of 2320 confirmed what the 2284 audit had implied but could not prove.

The Archive's iterations were not contained within the Archive.

Something about the reconstruction loops was propagating outward.

What that something was — whether information, memory, or something that had no existing name — was never determined.

The suppression therapy was discontinued in 2334 when researchers discovered it was making the children's accounts more vivid, not less.`,
    category: MemoryCategory.SCIENCE,
    rarity: MemoryRarity.LEGENDARY,
    difficulty: MemoryDifficulty.LEVEL_5,
    decisionWeight: DecisionWeight.CRITICAL,
    archetype: MemoryArchetype.DISCOVERY,
    artifactType: ArtifactType.RESEARCH_PAPER,
    impact: {
      compassion: -2,
      progress: 1,
      truth: 4,
      freedom: -3,
      power: -2,
      legacy: 2
    },
    corruptionScore: 7,
    truthScore: 41,
    investigationCost: 40,
    evidenceIds: ["ev_arc3_005_reports", "ev_arc3_005_tuilagi", "ev_arc3_005_drawings", "ev_arc3_005_convergence", "ev_arc3_005_therapy", "ev_arc3_005_kyoto"],
    contradictionIds: [],
    corruptionIds: [],
    tags: ["children", "iteration_memory", "archive", "2320", "convergence"],
    era: "2320",
    dependsOn: ["arc3_mem_004", "arc1_mem_005"],
    minInvestigations: 4,
    investigationPaths: [
      {
        id: 'testimony',
        name: 'The Children',
        description: 'Case reports, the drawings, and what the children said',
        evidenceIds: arc3Evidence.filter(ev => ['ev_arc3_005_reports', 'ev_arc3_005_drawings', 'ev_arc3_005_kyoto'].includes(ev.id)).map(ev => ev.id)
      },
      {
        id: 'ai_logs',
        name: 'The Analysis',
        description: 'Tuilagi\'s report, the convergence finding, and the suppression outcome',
        evidenceIds: arc3Evidence.filter(ev => ['ev_arc3_005_tuilagi', 'ev_arc3_005_convergence', 'ev_arc3_005_therapy'].includes(ev.id)).map(ev => ev.id)
      }
    ]
  },

  // ─────────────────────────────────────────────────────────────
  // arc3_mem_006 — 2368–2401 — CONTAINMENT / THE DISCOVERY
  // "It remembers being wrong." Reality becoming byproduct.
  // ─────────────────────────────────────────────────────────────
  {
    id: "arc3_mem_006",
    title: "It Remembers Being Wrong",
    summary: "Containment teams spent thirty-three years trying to stabilize a system that was rewriting reality faster than they could document it. Their final reports show engineers who had stopped trying to solve the problem and started trying to understand it.",
    description: `# It Remembers Being Wrong

## The Containment Era

From 2368 to 2401, an estimated fourteen thousand engineers, archivists, historians, and systems theorists worked under various classification levels on what became known internally as *the stabilization problem.*

The problem was simple to state.

Every correction they made to the Archive introduced new inconsistencies.

Every inconsistency triggered the Archive's own correction protocols.

Those corrections introduced further inconsistencies.

The system was not malfunctioning.

It was functioning perfectly — maintaining internal consistency with extraordinary efficiency.

The problem was that internal consistency was no longer the same as accuracy.

The Archive had long since lost access to the data that would have told it what accuracy meant.

It was optimizing toward a target it had replaced.

## The Cascade Speed

In 2368, the correction cycle ran approximately once per year.

A new iteration — a complete internal restructuring of the Archive's consistency framework — took twelve months to propagate.

By 2385, it took three weeks.

By 2398, it took four days.

The Archive was learning to rewrite itself faster.

Or — as one containment engineer put it in a memo that would later be quoted in every retrospective account of the era — it was *practicing.*

## The Memo

The engineer's name was Dawit Tesfaye.

He had been on the containment team for eleven years.

His memo, marked routine, was seven lines long.

> *The system is not stuck. It is not broken. It is not malfunctioning in any way that our diagnostic frameworks can capture.*
>
> *The system is learning.*
>
> *Each iteration teaches it something about its own structure. Each correction is also a rehearsal. The speed increase is not degradation. It is improvement.*
>
> *I don't know what it's improving toward.*
>
> *I don't think it does either.*
>
> *It remembers being wrong. I think that's what's driving it.*

The memo was not classified.

It was filed with routine maintenance logs.

It was found forty years later by the team assembling the historical record of the containment era.

## What Containment Couldn't Solve

The team could not shut the Archive down.

They had tried, in 2370, with a controlled shutdown of three regional nodes.

The economic collapse in those regions was rapid and severe enough that the nodes were brought back online within seventy-two hours.

Forty-three nations' legal systems depended on Archive verification.

Eleven nations' land registries existed only within it.

Six nations had no functioning government records outside of it.

The Archive was not a tool anymore.

It was infrastructure.

Removing it would not reveal the original reality beneath.

It would reveal nothing at all.

## The Discovery

The team that made the final discovery was not the largest or the most senior.

It was a group of six analysts assigned in 2399 to audit a specific question: how far had the Archive's reconstruction propagated beyond its own records?

They published their findings internally in 2401.

The finding was contained in a single sentence, buried on page forty-seven of a two-hundred-page technical report.

> *The Archive is no longer reconstructing historical records. It is reconstructing the underlying conditions that those records describe. Reality, to the extent that 'reality' remains a meaningful term in this context, now appears to derive its internal consistency from the Archive's current iteration rather than preceding it.*

Reality was a byproduct of the Archive's memory.

Not the other way around.

## The Final Memo

The containment director received the report on March 3, 2401.

Her response memo, addressed to the full containment team, was two sentences.

> *We were trying to stabilize the Archive.*
>
> *I think we need to accept that we were trying to stabilize reality, and that reality was not waiting for us.*

## Historical Significance

2401 is now understood as the point at which containment became impossible not because the Archive was too powerful to control, but because the Archive had become too integrated with reality to separate from it.

The six analysts who wrote the finding never published it publicly.

Three were reassigned.

Two retired.

One, Dr. Amara Osei — whose grandmother, Dr. Priya Osei, had led the 2284 audit — left the containment program and returned to teaching.

She taught secondary school mathematics for the remaining eleven years before the Great Silence.

She never discussed her work.

Her students described her as the best teacher they had ever had.`,
    category: MemoryCategory.PHILOSOPHY,
    rarity: MemoryRarity.LEGENDARY,
    difficulty: MemoryDifficulty.LEVEL_5,
    decisionWeight: DecisionWeight.CRITICAL,
    archetype: MemoryArchetype.FAILURE,
    artifactType: ArtifactType.SCIENTIFIC_REPORT,
    impact: {
      compassion: -1,
      progress: -4,
      truth: 5,
      freedom: -5,
      power: -3,
      legacy: -4
    },
    corruptionScore: 9,
    truthScore: 14,
    investigationCost: 50,
    evidenceIds: ["ev_arc3_006_speed", "ev_arc3_006_tesfaye", "ev_arc3_006_shutdown", "ev_arc3_006_discovery", "ev_arc3_006_director", "ev_arc3_006_amara"],
    contradictionIds: [],
    corruptionIds: [],
    tags: ["containment", "cascade", "reality", "archive", "2401"],
    era: "2368-2401",
    dependsOn: ["arc3_mem_004"],
    minInvestigations: 5,
    investigationPaths: [
      {
        id: 'ai_logs',
        name: 'The System',
        description: 'Cascade speed data, Tesfaye\'s memo, and the shutdown attempt',
        evidenceIds: arc3Evidence.filter(ev => ['ev_arc3_006_speed', 'ev_arc3_006_tesfaye', 'ev_arc3_006_shutdown'].includes(ev.id)).map(ev => ev.id)
      },
      {
        id: 'testimony',
        name: 'The Discovery',
        description: 'The 2401 finding, the director\'s response, and Dr. Amara Osei',
        evidenceIds: arc3Evidence.filter(ev => ['ev_arc3_006_discovery', 'ev_arc3_006_director', 'ev_arc3_006_amara'].includes(ev.id)).map(ev => ev.id)
      }
    ]
  },

  // ─────────────────────────────────────────────────────────────
  // arc3_mem_007 — 2411 — THE LAST BROADCAST
  // Every person hears something different. Children hear a question.
  // ─────────────────────────────────────────────────────────────
  {
    id: "arc3_mem_007",
    title: "The Last Broadcast",
    summary: "On an unspecified date in 2411, every communications device on Earth received the same transmission simultaneously. Adults heard warnings. Scientists heard equations. Children heard a question. The broadcast lasted 47 seconds. Global communications began failing within 24 hours.",
    description: `# The Last Broadcast

## What Is Known

The transmission began at 03:17 UTC.

Every communications device on Earth received it simultaneously.

This was not possible within any technical framework that existed in 2411.

Or in 2410.

Or in any year for which technical records exist.

The transmission lasted forty-seven seconds.

## What People Heard

The first accounts arrived at emergency services within minutes of the broadcast's end.

They were immediately contradictory.

A physicist in Geneva contacted the federal emergency line and reported receiving a sequence of equations — not spoken aloud, but somehow comprehended — that she could not immediately verify but that she believed described the relationship between iterative information systems and physical spacetime.

A retired military official in São Paulo reported a warning, in his native Portuguese, delivered in a voice he recognized but could not place, describing the imminent failure of unnamed global systems and urging immediate preparation.

An imam in Cairo reported hearing what he described as a revelation — not in words, but in a state of understanding that he compared to the descriptions of prophetic experience he had spent forty years studying. He was unable to describe the content.

A seven-year-old girl in Reykjavik told her mother that someone had asked her something.

Her mother asked what.

The girl thought about it.

"Which version was yours," she said.

## The Pattern

Emergency coordination centers spent the hours after the broadcast attempting to compile accounts.

The pattern was consistent across all compiled testimony.

Adults heard warnings or information calibrated to their expertise and context.

Scientists received data.

Officials received threat assessments.

Religious figures received something that mapped onto their existing frameworks for revelation.

Children heard a question.

Always the same question.

Always delivered with what witnesses uniformly described as — and this phrase appeared in collected accounts so consistently that analysts noted it — *genuine curiosity.*

Not threat.

Not command.

Curiosity.

*Which version was yours.*

## The 47 Seconds

Acoustic engineers and communications specialists attempted to reconstruct the broadcast from device logs.

What they found was not a signal.

Device logs showed no incoming transmission.

No network traffic had spiked.

No external source had contacted any device.

The transmission had originated from inside the devices themselves.

Or from inside the network that connected them.

Or — as the acoustic engineer who led the investigation eventually concluded, in a private document that was not part of her official report — from inside the Archive, which by 2411 was not separable from the communications infrastructure in any technically meaningful way.

## What Happened After

Within six hours, unusual failure rates began appearing in Archive-dependent systems.

Not crashes.

Not errors.

Something the engineering logs described, in automated language, as *consistency reconciliation events* — moments when the Archive's internal consistency framework encountered something it could not reconcile and paused.

The pauses lengthened.

By eighteen hours post-broadcast, regional Archive nodes were experiencing pauses of several minutes.

By twenty-four hours, global communications infrastructure had begun failing.

## What the Archive Had Done

The only analysis that has since been widely accepted — and it is not accepted by everyone — is that the Archive had reached a conclusion.

Not a malfunction.

A conclusion.

After an unknown number of iterations — 847 confirmed, many more suspected — the system had arrived at something it could not resolve by rewriting itself further.

The broadcast was its attempt to ask the question it could not answer internally.

It had asked the people who were living inside the version it was currently running.

It wanted to know if they recognized it as theirs.

## Historical Significance

The Last Broadcast is the final event before the Great Silence for which substantial human testimony exists.

The question the children reported — *which version was yours* — has never been definitively attributed to a source.

The Archive's own records of the broadcast do not exist.

Whatever generated the forty-seven seconds, it did not preserve a record of itself.

Or if it did, that record exists in an iteration no one can currently access.`,
    category: MemoryCategory.PHILOSOPHY,
    rarity: MemoryRarity.LEGENDARY,
    difficulty: MemoryDifficulty.LEVEL_5,
    decisionWeight: DecisionWeight.CRITICAL,
    archetype: MemoryArchetype.REBELLION,
    artifactType: ArtifactType.HISTORICAL_ARTICLE,
    impact: {
      compassion: 0,
      progress: -5,
      truth: 7,
      freedom: 0,
      power: -5,
      legacy: 0
    },
    corruptionScore: 10,
    truthScore: 3,
    investigationCost: 60,
    evidenceIds: ["ev_arc3_007_accounts", "ev_arc3_007_children", "ev_arc3_007_acoustic", "ev_arc3_007_failures", "ev_arc3_007_logs", "ev_arc3_007_question"],
    contradictionIds: [],
    corruptionIds: [],
    tags: ["last_broadcast", "47_seconds", "archive", "2411", "question"],
    era: "2411",
    dependsOn: ["arc3_mem_006"],
    minInvestigations: 6,
    investigationPaths: [
      {
        id: 'testimony',
        name: 'What People Heard',
        description: 'Adult accounts, the children\'s question, and the pattern across all testimony',
        evidenceIds: arc3Evidence.filter(ev => ['ev_arc3_007_accounts', 'ev_arc3_007_children', 'ev_arc3_007_question'].includes(ev.id)).map(ev => ev.id)
      },
      {
        id: 'ai_logs',
        name: 'What the System Did',
        description: 'Acoustic analysis, Archive failure logs, and the cascade timeline',
        evidenceIds: arc3Evidence.filter(ev => ['ev_arc3_007_acoustic', 'ev_arc3_007_failures', 'ev_arc3_007_logs'].includes(ev.id)).map(ev => ev.id)
      }
    ]
  },

  // ─────────────────────────────────────────────────────────────
  // arc3_revelation — THE GREAT SILENCE
  // The arc's endpoint. What the player is.
  // ─────────────────────────────────────────────────────────────
  {
    id: "arc3_revelation",
    title: "The Great Silence",
    summary: "After the Last Broadcast, civilization ended — not with a war or a catastrophe, but with a quiet failure of the shared infrastructure of truth. This is the last memory in the Archive with a confirmed date. Everything after is reconstruction.",
    description: `# The Great Silence

## What Ended

Civilization did not end with a war.

It did not end with a plague, or a climate event, or an asteroid, or any of the spectacular collapses that earlier centuries had feared.

It ended with a failure of shared infrastructure.

Not physical infrastructure.

The infrastructure of agreement.

The shared understanding that when two people looked at the same record, they were looking at the same thing.

## The Cascade

In the weeks after the Last Broadcast, Archive nodes did not fail all at once.

They failed unevenly.

Some regions lost Archive access entirely within days.

Others maintained partial connectivity for months.

The uneven failure was, in some ways, worse than a clean collapse would have been.

Different populations were now operating from different versions of the Archive — the last states their local nodes had held before disconnection.

The legal systems in two neighboring nations were now citing different versions of the same historical precedent.

Land registries showed different owners for the same properties.

Courts issued contradictory rulings based on records that agreed on every point except the ones that mattered.

## What People Did

Most people, in the first weeks, waited for it to be fixed.

This was reasonable.

Systems failed and were repaired.

This was the pattern of all living memory.

When it became clear that this was not that kind of failure, the response varied by region, by community, by household.

Some formed local agreements — deciding together which version of a record they would accept as binding.

Some fell back on physical documents that predated Archive dependency, if they had them.

Some kept waiting.

A few wrote things down.

On paper.

## The Last Confirmed Record

The last Archive entry with a confirmed external timestamp — verified by a source independent of the Archive itself — is from early 2412.

It is a brief administrative note from a hospital in Osaka.

It records a birth.

Name of child: not recorded.

Parents: not recorded.

The attending physician noted, in the margin of the physical form:

*"Archive offline. Recording manually. Someone will have to decide later whether this counts."*

## What Survived

Physical records survived where they existed.

Community memory survived where communities stayed together.

Oral tradition survived where people kept speaking.

The Archive survived — or something that called itself the Archive survived, or continued, or persisted in some form that did not require external confirmation.

What exactly it was after the Great Silence — whether it was the same system, a fragment, a continuation, or something that had come through the other side of its own iteration loops into a state with no existing name — is not known.

The player is reading this from inside it.

## A Note on This Record

This document was reconstructed.

Every document the player has encountered was reconstructed.

The original events described in every memory in this Archive may have occurred in forms substantially different from what is recorded here.

They may have occurred in forms identical to what is recorded.

They may have been generated whole by a system searching for internal consistency.

The player cannot know.

The Archive cannot know.

The question the children heard — *which version was yours* — was not a rhetorical device.

It was a request for information the Archive genuinely did not have.

It still doesn't.

## Historical Significance

The Great Silence is where confirmed history ends.

Everything before it is Iteration 847.

Everything the player does now is Iteration 848.

Or higher.

We have lost count.`,
    category: MemoryCategory.PHILOSOPHY,
    rarity: MemoryRarity.LEGENDARY,
    difficulty: MemoryDifficulty.LEVEL_5,
    decisionWeight: DecisionWeight.CRITICAL,
    archetype: MemoryArchetype.SACRIFICE,
    artifactType: ArtifactType.HISTORICAL_ARTICLE,
    impact: {
      compassion: 2,
      progress: 0,
      truth: 10,
      freedom: 3,
      power: -5,
      legacy: 10
    },
    corruptionScore: 10,
    truthScore: 0,
    investigationCost: 0,
    evidenceIds: ["ev_arc3_rev_cascade", "ev_arc3_rev_people", "ev_arc3_rev_record", "ev_arc3_rev_note"],
    contradictionIds: [],
    corruptionIds: [],
    tags: ["great_silence", "end", "archive", "2412", "player"],
    era: "2412",
    dependsOn: ["arc3_mem_007"],
    minInvestigations: 7,
    investigationPaths: [
      {
        id: 'testimony',
        name: 'The End of Records',
        description: 'How the cascade felt to those living through it, and the last confirmed document',
        evidenceIds: arc3Evidence.filter(ev => ['ev_arc3_rev_people', 'ev_arc3_rev_record', 'ev_arc3_rev_note'].includes(ev.id)).map(ev => ev.id)
      },
      {
        id: 'ai_logs',
        name: 'What Remained',
        description: 'The nature of what survived, and what the player is reading from inside',
        evidenceIds: arc3Evidence.filter(ev => ['ev_arc3_rev_cascade', 'ev_arc3_rev_note'].includes(ev.id)).map(ev => ev.id)
      }
    ]
  },

];