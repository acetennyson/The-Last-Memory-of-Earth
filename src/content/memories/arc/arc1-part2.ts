import { MemoryCategory, MemoryRarity, MemoryDifficulty, DecisionWeight, ArtifactType, MemoryArchetype } from '../../../engine/shared/enums';
import { arc1Evidence } from '../../evidence/arc/arc1-evidence';

export const arc1Part2Memories = [
  {
    id: "arc1_mem_004",
    title: "The Hundred Thousand Witnesses", 
    summary: "Over one hundred thousand people across the world reported encounters with the same unidentified woman despite no evidence of her existence.",
    description: `# The Hundred Thousand Witnesses

## Historical Overview

In early 2051, authorities in multiple countries began receiving unusual reports.

Individuals claimed to have encountered the same woman.

Initially, investigators dismissed the similarities as coincidence.

The reports continued.

Then multiplied.

Then spread globally.

Within three years, more than 113,000 independent witness reports had been collected.

The descriptions were nearly identical.

Witnesses consistently reported:

- A woman appearing between thirty and forty years old.
- Dark clothing with no identifying markings.
- An unusually calm demeanor.
- A tendency to appear in crowded public spaces.
- A habit of asking a single question.

## The Question

Although accounts differed in many details, one element remained remarkably consistent.

At some point during each interaction, the woman would ask:

> "Do you remember me?"

Most witnesses claimed they had never seen her before.

Yet many reported an unsettling feeling of familiarity.

Several later insisted they had known her for years.

Others believed she was a relative.

A few became convinced she had appeared throughout their lives.

## Global Investigation

Governments launched investigations.

International databases were searched.

Facial recognition systems were deployed.

Travel records were reviewed.

No identity was ever established.

No birth records existed.

No employment records existed.

No medical records existed.

No confirmed relatives were found.

Every attempt to determine who she was ended in failure.

## The Footage Problem

The situation escalated when investigators obtained security recordings from dozens of reported encounters.

The footage appeared genuine.

The woman was clearly visible.

Yet analysts noticed something disturbing.

Archive copies of the same recording sometimes differed.

Small details changed.

Clothing colors shifted.

Background objects disappeared.

In several cases the woman herself appeared in different locations within identical recordings.

The anomalies could not be explained.

## Public Response

Media organizations referred to the phenomenon as:

**The Forgotten Woman**

Books were written.

Documentaries were produced.

Online communities formed around the mystery.

Thousands claimed to have encountered her.

Many believed she represented a coordinated psychological experiment.

Others considered her evidence of a mass memory phenomenon.

No explanation achieved consensus.

## Final Sighting

The final confirmed report occurred in 2054.

Hospital security footage captured the woman approaching a young child in a waiting room.

The recording contained no audio.

However, witness statements claim the child immediately spoke first.

According to every available account, the child said:

> "You're not supposed to be here yet."

The woman reportedly smiled.

The footage ended moments later due to unexplained corruption.

No verified sightings were ever recorded again.

## Historical Significance

The Hundred Thousand Witnesses remains one of the most extensively documented unexplained events of the twenty-first century.

Despite thousands of reports and years of investigation, the identity of the woman remains unknown.`,
    category: MemoryCategory.PHILOSOPHY,
    rarity: MemoryRarity.LEGENDARY,
    difficulty: MemoryDifficulty.LEVEL_5,
    decisionWeight: DecisionWeight.CRITICAL,
    archetype: MemoryArchetype.FAILURE,
    artifactType: ArtifactType.GOVERNMENT_DOCUMENT,
    impact: {
      compassion: -1,
      progress: -2,
      truth: -5,
      freedom: -2,
      power: -1,
      legacy: -3
    },
    corruptionScore: 1,
    truthScore: 15,
    investigationCost: 30,
    evidenceIds: ["ev_arc1_004_witnesses", "ev_arc1_004_reports", "ev_arc1_004_footage", "ev_arc1_004_security", "ev_arc1_004_official", "ev_arc1_004_classified"],
    contradictionIds: [],
    corruptionIds: [],
    tags: ["forgotten_woman", "mass_hallucination", "impossible", "2051"],
    era: "2051-2054",
    investigationPaths: [
      {
        id: 'government',
        name: 'Official Reports',
        description: 'International incident reports and security analysis',
        evidenceIds: arc1Evidence.filter(ev => ['ev_arc1_004_reports', 'ev_arc1_004_classified', 'ev_arc1_004_security'].includes(ev.id)).map(ev => ev.id)
      },
      {
        id: 'testimony',
        name: 'Witness Accounts',
        description: 'Personal testimonies and security footage',
        evidenceIds: arc1Evidence.filter(ev => ['ev_arc1_004_witnesses', 'ev_arc1_004_footage', 'ev_arc1_004_official'].includes(ev.id)).map(ev => ev.id)
      }
    ]
  },

  {
    id: "arc1_mem_005",
    title: "The Children Who Remembered Tomorrow",
    summary: "Thousands of children appeared capable of describing future events years before they occurred.",
    description: `# The Children Who Remembered Tomorrow

## Historical Overview

Beginning in 2058, researchers around the world began documenting an unusual phenomenon involving young children.

The reports initially appeared unrelated.

A child accurately described a natural disaster months before it occurred.

Another predicted the outcome of a national election.

Others described scientific discoveries that had not yet been made.

Most cases were dismissed as coincidence.

Then the numbers grew.

## A Global Pattern

Within two years, thousands of cases had been documented.

The children involved came from different countries, cultures, languages, and backgrounds.

Many had never interacted.

Yet their accounts displayed remarkable similarities.

Researchers found that some children consistently described events before they happened.

The accuracy rates exceeded statistical expectations.

Several institutions attempted to replicate the results.

The phenomenon persisted.

## Interviews

Psychologists conducted extensive interviews.

The children often struggled to explain how they possessed the information.

Many provided the same answer.

When asked:

> "How do you know?"

they replied:

> "Because I remember."

Investigators assumed the children were confused.

Further questioning produced even stranger responses.

When asked what they remembered, many answered:

> "Last time."

No clear explanation was ever established.

## Shared Memories

As research expanded, additional patterns emerged.

Children from opposite sides of the world described identical locations.

Several reported recurring dreams involving the same city.

Others spoke about events that appeared nowhere in contemporary records.

The similarities were difficult to explain.

## The Drawings

One of the most studied cases involved a seven-year-old girl.

Over several years she produced hundreds of drawings.

Many depicted locations that did not exist.

One city appeared repeatedly.

Its architecture was unfamiliar.

Its layout matched no known settlement.

Researchers archived the drawings and moved on.

Years later, images of a nearly identical city would become central to another unexplained phenomenon.

## Public Reaction

News coverage generated widespread debate.

Scientists proposed neurological explanations.

Religious groups interpreted the children as visionaries.

Governments quietly funded additional research.

Parents remained divided between concern and fascination.

No explanation achieved consensus.

## The Final Interview

Among the archived records, one interview became particularly famous.

An investigator asked a young participant:

> "What happens next?"

The child answered:

> "You build it."

The investigator requested clarification.

The child continued:

> "The thing that remembers."

No further explanation was provided.

## Historical Significance

Many historians regard this phenomenon as the defining event of the First Crisis of Truth.

For the first time, society was forced to confront a deeply unsettling question:

If people can remember things that have not happened yet...

what exactly is memory?`,
    category: MemoryCategory.SCIENCE,
    rarity: MemoryRarity.LEGENDARY,
    difficulty: MemoryDifficulty.LEVEL_5,
    decisionWeight: DecisionWeight.CRITICAL,
    archetype: MemoryArchetype.DISCOVERY,
    artifactType: ArtifactType.RESEARCH_PAPER,
    impact: {
      compassion: 1,
      progress: 2,
      truth: 5,
      freedom: -1,
      power: -2,
      legacy: 4
    },
    corruptionScore: 0,
    truthScore: 90,
    investigationCost: 35,
    evidenceIds: ["ev_arc1_005_research", "ev_arc1_005_studies", "ev_arc1_005_interviews", "ev_arc1_005_transcripts", "ev_arc1_005_drawings", "ev_arc1_005_artwork"],
    contradictionIds: [],
    corruptionIds: [],
    tags: ["prophetic_children", "time", "memory", "archive_prophecy", "2058"],
    era: "2058-2060",
    investigationPaths: [
      {
        id: 'ai_logs',
        name: 'Research Files',
        description: 'Child interviews, psychological studies, and academic reports',
        evidenceIds: arc1Evidence.filter(ev => ['ev_arc1_005_interviews', 'ev_arc1_005_research', 'ev_arc1_005_transcripts'].includes(ev.id)).map(ev => ev.id)
      },
      {
        id: 'testimony',
        name: 'Children\'s Art',
        description: 'Drawings, symbols, and artistic evidence',
        evidenceIds: arc1Evidence.filter(ev => ['ev_arc1_005_artwork', 'ev_arc1_005_drawings', 'ev_arc1_005_studies'].includes(ev.id)).map(ev => ev.id)
      }
    ]
  },

  {
    id: "arc1_revelation",
    title: "The First Crisis of Truth",
    summary: "A historical analysis describing humanity's first major confrontation with unreliable memory.",
    description: `# The First Crisis of Truth

## Historical Analysis

Historians generally identify the period between 2037 and 2060 as the beginning of a profound transformation in humanity's relationship with truth.

The era began with concerns surrounding synthetic information.

Many believed technology itself posed the greatest threat.

Subsequent events challenged that assumption.

## Defining Incidents

### 2037
The Day the President Never Spoke

A fabricated speech triggered global panic and demonstrated the dangers of synthetic media.

### 2041
The Funeral That Never Happened

Millions remembered attending an event that could not be historically verified.

### 2044
The City Seen by Millions

A nonexistent city became one of the most recognizable locations on Earth.

### 2051
The Hundred Thousand Witnesses

An unidentified woman appeared in reports from more than one hundred thousand individuals worldwide.

### 2058
The Children Who Have false Memories

Thousands of children described future events before they occurred.

## The Shift

Initially, researchers focused on misinformation.

As investigations continued, a more troubling possibility emerged.

The problem was not merely false information.

The problem was memory itself.

Individuals remembered events differently.

Groups remembered events that could not be verified.

Entire populations appeared capable of sharing experiences that lacked physical evidence.

## Legacy

The First Crisis of Truth permanently altered global society.

Governments invested heavily in preservation initiatives.

Researchers sought methods to safeguard historical accuracy.

Civilization increasingly recognized that facts alone were not enough.

Memories also required protection.

Many historians consider this realization the foundation upon which later preservation systems would eventually be built.

The world had begun to lose confidence in memory.

It would soon attempt to replace it.`,
    category: MemoryCategory.PHILOSOPHY,
    rarity: MemoryRarity.LEGENDARY,
    difficulty: MemoryDifficulty.LEVEL_4,
    decisionWeight: DecisionWeight.CRITICAL,
    archetype: MemoryArchetype.LEADERSHIP,
    artifactType: ArtifactType.HISTORICAL_ARTICLE,
    impact: {
      compassion: -1,
      progress: -2,
      truth: 3,
      freedom: -3,
      power: 2,
      legacy: 5
    },
    corruptionScore: 0,
    truthScore: 100,
    investigationCost: 40,
    evidenceIds: ["ev_arc1_rev_analysis", "ev_arc1_rev_expert", "ev_arc1_rev_records", "ev_arc1_rev_archives"],
    contradictionIds: [],
    corruptionIds: [],
    tags: ["crisis", "truth", "memory", "foundation", "archive_justification"],
    era: "2037-2060",
    investigationPaths: [
      {
        id: 'government',
        name: 'Classified Analysis',
        description: 'Secret reports and pattern correlation studies',
        evidenceIds: arc1Evidence.filter(ev => ['ev_arc1_001_classified', 'ev_arc1_004_classified'].includes(ev.id)).map(ev => ev.id)
      },
      {
        id: 'testimony',
        name: 'Historical Timeline',
        description: 'Crisis chronology and connecting evidence',
        evidenceIds: arc1Evidence.filter(ev => ['ev_arc1_005_studies', 'ev_arc1_003_viral'].includes(ev.id)).map(ev => ev.id)
      }
    ]
  }
];