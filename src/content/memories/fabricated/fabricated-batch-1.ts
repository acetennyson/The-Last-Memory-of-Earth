import { MemoryCategory, MemoryRarity, MemoryDifficulty, DecisionWeight, ArtifactType, MemoryArchetype } from '../../../engine/shared/enums';
import { fabricatedBatch1Evidence } from '../../evidence/fabricated/fabricated-batch1-evidence';

// ═══════════════════════════════════════════════════════════════
// FABRICATED HISTORY — EARLY PHASE (era 2025–2050)
// corruptionScore 0–2. These should NOT read as suspicious.
// Corruption, where present, is logged as mundane archival gaps
// (MISSING_DATA / SOURCE_LOSS) — never named as reconstruction.
// A player who never investigates fully will simply believe these.
// ═══════════════════════════════════════════════════════════════

export const fabricatedBatch1Memories = [

  // ─────────────────────────────────────────────────────────────
  // fab_mem_001 — appears as ordinary scientific achievement
  // ─────────────────────────────────────────────────────────────
  {
    id: "fab_mem_001",
    title: "The Glacier Keeper",
    summary: "A solitary climatologist spent eleven winters alone at a Greenland research station, single-handedly producing the most complete ice-core dataset of the early century before vanishing from public record.",
    description: `# The Glacier Keeper

## Historical Overview

Between 2026 and 2037, Dr. Hannelore Voss occupied Outpost Kjeldsen, a three-person research station on the Greenland ice sheet that had been scaled down to a single resident due to funding cuts.

She chose to remain alone.

Over eleven winters, she extracted and catalogued 340 ice cores, producing what climate scientists would later call the most complete continuous ice record of the early twenty-first century.

## The Work

Voss worked without a research team for the majority of her tenure.

Supply flights arrived twice yearly.

Her data was transmitted in quarterly batches to the Nordic Climate Consortium, where it was independently verified against satellite measurements and found consistent in every instance.

Her core samples revealed a previously undetected warming pulse in 2029, later confirmed through three independent paleoclimate methods.

## The Departure

In March 2037, Voss requested permanent reassignment.

She gave no specific reason beyond a single line in her transfer request:

> "Eleven winters is enough for one person to give a place."

She left Outpost Kjeldsen on April 2, 2037, and did not take a subsequent research posting.

## Historical Significance

The Voss ice-core dataset remains a foundational reference for Arctic climate modeling.

Her decision to work in near-total isolation for over a decade is occasionally cited in studies of extreme solitude and scientific dedication, though Voss herself declined all interview requests after 2037.`,
    category: MemoryCategory.SCIENCE,
    rarity: MemoryRarity.UNCOMMON,
    difficulty: MemoryDifficulty.LEVEL_1,
    decisionWeight: DecisionWeight.LOW,
    archetype: MemoryArchetype.ACHIEVEMENT,
    artifactType: ArtifactType.SCIENTIFIC_REPORT,
    impact: {
      compassion: 1,
      progress: 3,
      truth: 1,
      freedom: 1,
      power: 0,
      legacy: 2
    },
    corruptionScore: 0,
    truthScore: 71,
    investigationCost: 10,
    evidenceIds: ["ev_fab_001_dataset", "ev_fab_001_verification", "ev_fab_001_transfer", "ev_fab_001_supply", "ev_fab_001_consortium"],
    contradictionIds: [],
    corruptionIds: ["cor_fab_001_gap"],
    tags: ["climate", "solitude", "science", "greenland", "2026"],
    era: "2026",
    investigationPaths: [
      {
        id: 'government',
        name: 'Research Records',
        description: 'Consortium verification data and supply flight logs',
        evidenceIds: fabricatedBatch1Evidence.filter(ev => ['ev_fab_001_verification', 'ev_fab_001_supply', 'ev_fab_001_consortium'].includes(ev.id)).map(ev => ev.id)
      },
      {
        id: 'testimony',
        name: 'Personal Record',
        description: 'The dataset itself and Voss\'s transfer request',
        evidenceIds: fabricatedBatch1Evidence.filter(ev => ['ev_fab_001_dataset', 'ev_fab_001_transfer'].includes(ev.id)).map(ev => ev.id)
      }
    ]
  },

  // ─────────────────────────────────────────────────────────────
  // fab_mem_002 — appears as ordinary cultural/family story
  // ─────────────────────────────────────────────────────────────
  {
    id: "fab_mem_002",
    title: "The Bridge at Calle Verde",
    summary: "Residents of a Lima neighborhood built an unauthorized pedestrian bridge over a flood-prone ravine after seven petitions for municipal action went unanswered. It stood for nine years before the city formally adopted it.",
    description: `# The Bridge at Calle Verde

## Historical Overview

The Calle Verde neighborhood of Lima was separated from its nearest school and clinic by a ravine that flooded seasonally, cutting off access for up to six weeks each year.

Between 2024 and 2031, residents submitted seven formal petitions requesting a municipal pedestrian bridge.

All seven were acknowledged. None were funded.

## The Build

In June 2031, a retired structural engineer named Tomás Ferreyra, who had lived in Calle Verde for thirty years, proposed that residents build the bridge themselves.

Over four months, using donated materials, volunteer labor, and Ferreyra's professional oversight, the community constructed a 38-meter pedestrian suspension bridge.

It was built without a permit.

It was inspected, informally, by an off-duty municipal engineer who lived nearby and confirmed it met safety tolerances, though no official certification was issued.

## Nine Years

The bridge remained in continuous use from October 2031 until its formal municipal adoption in 2040.

During that period it was used by an estimated 4,000 residents daily during flood season.

No structural failure was recorded.

The city's eventual adoption included a formal safety certification, minor reinforcement, and a plaque crediting "the residents of Calle Verde."

Ferreyra, by then 81, attended the dedication.

## Historical Significance

The Calle Verde bridge became a frequently cited example in discussions of informal infrastructure and community self-organization in Latin American urban planning literature.`,
    category: MemoryCategory.CULTURE,
    rarity: MemoryRarity.COMMON,
    difficulty: MemoryDifficulty.LEVEL_1,
    decisionWeight: DecisionWeight.LOW,
    archetype: MemoryArchetype.INNOVATION,
    artifactType: ArtifactType.HISTORICAL_ARTICLE,
    impact: {
      compassion: 3,
      progress: 2,
      truth: 0,
      freedom: 2,
      power: -1,
      legacy: 1
    },
    corruptionScore: 0,
    truthScore: 74,
    investigationCost: 8,
    evidenceIds: ["ev_fab_002_petitions", "ev_fab_002_ferreyra", "ev_fab_002_adoption", "ev_fab_002_inspection", "ev_fab_002_usage"],
    contradictionIds: [],
    corruptionIds: [],
    tags: ["community", "infrastructure", "lima", "self-organization", "2031"],
    era: "2031",
    investigationPaths: [
      {
        id: 'government',
        name: 'Municipal Trail',
        description: 'Petition records and the eventual adoption certificate',
        evidenceIds: fabricatedBatch1Evidence.filter(ev => ['ev_fab_002_petitions', 'ev_fab_002_adoption'].includes(ev.id)).map(ev => ev.id)
      },
      {
        id: 'testimony',
        name: 'Community Account',
        description: 'Ferreyra\'s account, informal inspection, and usage records',
        evidenceIds: fabricatedBatch1Evidence.filter(ev => ['ev_fab_002_ferreyra', 'ev_fab_002_inspection', 'ev_fab_002_usage'].includes(ev.id)).map(ev => ev.id)
      }
    ]
  },

  // ─────────────────────────────────────────────────────────────
  // fab_mem_003 — appears as ordinary personal/medicine story
  // ─────────────────────────────────────────────────────────────
  {
    id: "fab_mem_003",
    title: "Letters to a Future Doctor",
    summary: "A terminally ill nurse wrote 200 letters of accumulated clinical wisdom to an unnamed future recipient before her death. The letters were discovered decades later and are now used in nursing education.",
    description: `# Letters to a Future Doctor

## Historical Overview

In the final fourteen months of her life, hospice nurse Margaret Oyelaran wrote a series of letters addressed simply to "whoever needs this."

She had worked in emergency and palliative care for thirty-one years.

Diagnosed with terminal pancreatic cancer in late 2027, she began writing what she described as "everything I wish someone had told me on my first day."

## The Letters

Oyelaran completed 203 letters before her death in March 2029.

They covered clinical procedure, emotional resilience, the ethics of difficult conversations with patients, and frank accounts of her own mistakes across three decades of practice.

She left them with her hospital's archive, with no instructions for publication, only a note: "If this helps one person, it was worth the time it took."

## The Discovery

The letters remained in a storage archive, uncatalogued, for six years.

In 2035, a hospital archivist preparing the facility's centennial history discovered the collection and recognized its value.

With permission from Oyelaran's family, a curated edition was published as *Letters to a Future Doctor* in 2036.

## Impact

The collection became required reading in several nursing programs across three countries.

A 2041 survey of nursing students who had read the letters reported significantly higher self-assessed preparedness for emotionally difficult patient interactions compared to a control group.

## Historical Significance

Oyelaran never intended publication or recognition.

Her family has stated that she would likely have been uncomfortable with the book's success.

Royalties are directed to a hospice care scholarship fund in her name.`,
    category: MemoryCategory.MEDICINE,
    rarity: MemoryRarity.UNCOMMON,
    difficulty: MemoryDifficulty.LEVEL_1,
    decisionWeight: DecisionWeight.LOW,
    archetype: MemoryArchetype.PRESERVATION,
    artifactType: ArtifactType.LETTER,
    impact: {
      compassion: 4,
      progress: 1,
      truth: 0,
      freedom: 1,
      power: 0,
      legacy: 3
    },
    corruptionScore: 0,
    truthScore: 68,
    investigationCost: 10,
    evidenceIds: ["ev_fab_003_letters", "ev_fab_003_discovery", "ev_fab_003_survey", "ev_fab_003_family", "ev_fab_003_publication"],
    contradictionIds: [],
    corruptionIds: ["cor_fab_003_gap"],
    tags: ["medicine", "nursing", "legacy", "writing", "2027"],
    era: "2027",
    investigationPaths: [
      {
        id: 'testimony',
        name: 'Personal Legacy',
        description: 'The letters themselves and family statements',
        evidenceIds: fabricatedBatch1Evidence.filter(ev => ['ev_fab_003_letters', 'ev_fab_003_family'].includes(ev.id)).map(ev => ev.id)
      },
      {
        id: 'corporate',
        name: 'Publication Record',
        description: 'Archive discovery, publication details, and educational impact survey',
        evidenceIds: fabricatedBatch1Evidence.filter(ev => ['ev_fab_003_discovery', 'ev_fab_003_publication', 'ev_fab_003_survey'].includes(ev.id)).map(ev => ev.id)
      }
    ]
  },

  // ─────────────────────────────────────────────────────────────
  // fab_mem_004 — appears as ordinary exploration/technology story
  // ─────────────────────────────────────────────────────────────
  {
    id: "fab_mem_004",
    title: "The Cartographer of Empty Places",
    summary: "An amateur surveyor spent twenty years mapping unmarked rural roads across three countries that official cartography had never recorded, eventually producing a dataset adopted by national mapping agencies.",
    description: `# The Cartographer of Empty Places

## Historical Overview

Beginning in 2022, retired postal worker Janez Kovač began a personal project: cycling and walking the unmarked rural roads of Slovenia, Croatia, and Austria that did not appear on any official map.

He had noticed during his decades as a postal carrier that official cartography consistently failed to capture small farm access roads, footpaths used by generations of rural residents, and informal border-region crossings.

## The Method

Kovač used handheld GPS devices, his own notebooks, and conversations with rural residents to document roads that existed in practice but not on paper.

By 2034, he had logged 14,000 kilometers of previously unmapped routes.

He shared his data freely through an open geographic database, refusing all commercial licensing offers.

## Recognition

In 2036, the Slovenian national mapping agency formally incorporated 60% of Kovač's dataset into official cartography, citing its accuracy and completeness.

Austria and Croatia followed in 2038 and 2039 respectively.

Kovač, by then 71, was invited to a ceremony recognizing the contribution. He did not attend, citing a scheduling conflict with a road he had not yet finished mapping.

## Historical Significance

The "Kovač correction," as cartographers informally termed the dataset integration, is considered one of the most significant citizen-science contributions to European cartography in the early twenty-first century.

Kovač continued mapping until his death in 2044.`,
    category: MemoryCategory.EXPLORATION,
    rarity: MemoryRarity.COMMON,
    difficulty: MemoryDifficulty.LEVEL_1,
    decisionWeight: DecisionWeight.LOW,
    archetype: MemoryArchetype.DISCOVERY,
    artifactType: ArtifactType.RESEARCH_PAPER,
    impact: {
      compassion: 1,
      progress: 3,
      truth: 1,
      freedom: 2,
      power: -1,
      legacy: 2
    },
    corruptionScore: 0,
    truthScore: 73,
    investigationCost: 8,
    evidenceIds: ["ev_fab_004_dataset", "ev_fab_004_agency", "ev_fab_004_ceremony", "ev_fab_004_method", "ev_fab_004_obituary"],
    contradictionIds: [],
    corruptionIds: [],
    tags: ["cartography", "citizen-science", "rural", "europe", "2022"],
    era: "2022",
    investigationPaths: [
      {
        id: 'government',
        name: 'Official Adoption',
        description: 'National mapping agency integration records',
        evidenceIds: fabricatedBatch1Evidence.filter(ev => ['ev_fab_004_agency', 'ev_fab_004_ceremony'].includes(ev.id)).map(ev => ev.id)
      },
      {
        id: 'testimony',
        name: 'The Cartographer',
        description: 'Kovač\'s methodology and personal record',
        evidenceIds: fabricatedBatch1Evidence.filter(ev => ['ev_fab_004_dataset', 'ev_fab_004_method', 'ev_fab_004_obituary'].includes(ev.id)).map(ev => ev.id)
      }
    ]
  },

  // ─────────────────────────────────────────────────────────────
  // fab_mem_005 — appears as ordinary political/family story
  // ─────────────────────────────────────────────────────────────
  {
    id: "fab_mem_005",
    title: "The Translator Who Stayed",
    summary: "A UN interpreter remained at her post through the final 72 hours of a regional government's collapse, ensuring evacuation orders reached non-native-speaking residents, before evacuating last among all staff.",
    description: `# The Translator Who Stayed

## Historical Overview

During the final collapse of regional governance in a contested administrative zone in 2033, UN interpreter Beatriz Fonseca remained at her post in the regional coordination office for 72 hours after all non-essential international staff had been evacuated.

Her official mandate did not require this.

## The 72 Hours

Fonseca's role was translating evacuation orders, medical instructions, and safety information into four minority languages spoken by approximately 60,000 residents who did not speak the region's administrative language.

As the security situation deteriorated, most translation staff were evacuated according to standard protocol.

Fonseca requested, and received, an exception to remain.

Over the following three days, she personally translated and helped distribute final evacuation routes, working in coordination with local community leaders who could not otherwise access official guidance.

## The Evacuation

Fonseca evacuated on the third day, on the final scheduled transport, after confirming that translated materials had reached community leaders in all four target language groups.

She later stated in a debrief that she did not consider her actions exceptional:

> "My job was to make sure people understood. People still needed to understand. I left when that job was finished."

## Historical Significance

Fonseca's actions were not publicly recognized at the time due to the sensitivity of the political situation.

A 2040 review of UN field interpreter protocols cited her case anonymously as a reference point in revising staff exception procedures during crisis evacuations.

She continued working as a field interpreter until her retirement in 2045.`,
    category: MemoryCategory.POLITICS,
    rarity: MemoryRarity.UNCOMMON,
    difficulty: MemoryDifficulty.LEVEL_1,
    decisionWeight: DecisionWeight.MEDIUM,
    archetype: MemoryArchetype.SACRIFICE,
    artifactType: ArtifactType.GOVERNMENT_DOCUMENT,
    impact: {
      compassion: 4,
      progress: 0,
      truth: 1,
      freedom: 1,
      power: -1,
      legacy: 2
    },
    corruptionScore: 0,
    truthScore: 70,
    investigationCost: 10,
    evidenceIds: ["ev_fab_005_debrief", "ev_fab_005_protocol", "ev_fab_005_leaders", "ev_fab_005_transport", "ev_fab_005_retirement"],
    contradictionIds: [],
    corruptionIds: ["cor_fab_005_gap"],
    tags: ["humanitarian", "translation", "crisis", "un", "2033"],
    era: "2033",
    investigationPaths: [
      {
        id: 'government',
        name: 'Official Record',
        description: 'UN debrief, protocol review, and transport logs',
        evidenceIds: fabricatedBatch1Evidence.filter(ev => ['ev_fab_005_debrief', 'ev_fab_005_protocol', 'ev_fab_005_transport'].includes(ev.id)).map(ev => ev.id)
      },
      {
        id: 'testimony',
        name: 'Community Account',
        description: 'Local community leader statements and her later career',
        evidenceIds: fabricatedBatch1Evidence.filter(ev => ['ev_fab_005_leaders', 'ev_fab_005_retirement'].includes(ev.id)).map(ev => ev.id)
      }
    ]
  },

];