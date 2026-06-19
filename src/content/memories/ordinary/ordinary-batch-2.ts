import { MemoryCategory, MemoryRarity, MemoryDifficulty, DecisionWeight, ArtifactType, MemoryArchetype } from '../../../engine/shared/enums';
import { ordinaryBatch2Evidence } from '../../evidence/ordinary/ordinary-batch2-evidence';

export const ordinaryBatch2Memories = [

  // ─────────────────────────────────────────────────────────────
  // ord_mem_009 — RELIGION / PHILOSOPHY
  // ─────────────────────────────────────────────────────────────
  {
    id: "ord_mem_009",
    title: "The Monastery That Welcomed Doubt",
    summary: "A 600-year-old Buddhist monastery in Bhutan opened its doors to a formal philosophy-of-religion seminar in which monks and atheist academics co-taught for a decade, producing an unusual hybrid curriculum that outlived the original participants.",
    description: `# The Monastery That Welcomed Doubt

## Historical Overview

In 2027, the abbot of Tashi Lhundrup Monastery in Bhutan, Lama Karma Wangchuk, made an unusual proposal to the University of Oxford's philosophy department: a joint seminar, held annually at the monastery, in which monks and secular philosophers would teach each other.

The proposal specified one condition.

No participant would be asked to convert, defend, or abandon their position.

The seminar's stated purpose was not consensus.

It was precision of disagreement.

## The Seminar

Over the following decade, twelve secular philosophers — several explicitly atheist — spent two weeks annually living among the monastic community, attending teachings, and co-leading seminar sessions on consciousness, ethics, and the nature of suffering.

Monks attended the secular sessions in turn.

Both groups described the experience as initially uncomfortable.

Dr. Helena Voss, a philosopher of mind who attended seven consecutive years, wrote in her field journal:

> "I came expecting to find gaps in their reasoning I could politely identify. I have instead found gaps in mine that I cannot stop thinking about."

## The Curriculum

By 2037, the sessions had produced a co-authored curriculum on contemplative philosophy, used in both secular university settings and as supplementary material in several monastic training programs.

Neither institution fully endorsed the other's framework.

Both used the material anyway.

## Historical Significance

Lama Karma Wangchuk died in 2041. The seminar continued under his successor.

Dr. Voss, in a later interview, was asked whether the decade of exchange had affected her personal beliefs.

> "I am still an atheist. I am a much more careful one."`,
    category: MemoryCategory.RELIGION,
    rarity: MemoryRarity.UNCOMMON,
    difficulty: MemoryDifficulty.LEVEL_2,
    decisionWeight: DecisionWeight.MEDIUM,
    archetype: MemoryArchetype.DISCOVERY,
    artifactType: ArtifactType.RESEARCH_PAPER,
    impact: {
      compassion: 2,
      progress: 1,
      truth: 2,
      freedom: 2,
      power: -1,
      legacy: 2
    },
    corruptionScore: 0,
    truthScore: 96,
    investigationCost: 10,
    evidenceIds: ["ev_ord_009_proposal", "ev_ord_009_voss", "ev_ord_009_curriculum", "ev_ord_009_monks", "ev_ord_009_interview", "ev_ord_009_successor"],
    contradictionIds: [],
    corruptionIds: [],
    tags: ["religion", "philosophy", "bhutan", "dialogue", "2027"],
    era: "2027",
    investigationPaths: [
      {
        id: 'testimony',
        name: 'Personal Accounts',
        description: 'Dr. Voss\'s field journal and her later interview',
        evidenceIds: ordinaryBatch2Evidence.filter(ev => ['ev_ord_009_voss', 'ev_ord_009_interview'].includes(ev.id)).map(ev => ev.id)
      },
      {
        id: 'corporate',
        name: 'Institutional Record',
        description: 'The original proposal, monastic participation, and curriculum outcome',
        evidenceIds: ordinaryBatch2Evidence.filter(ev => ['ev_ord_009_proposal', 'ev_ord_009_monks', 'ev_ord_009_curriculum', 'ev_ord_009_successor'].includes(ev.id)).map(ev => ev.id)
      }
    ]
  },

  // ─────────────────────────────────────────────────────────────
  // ord_mem_010 — SCIENCE
  // ─────────────────────────────────────────────────────────────
  {
    id: "ord_mem_010",
    title: "The Experiment That Failed Correctly",
    summary: "A physics team spent nine years and 200 million euros searching for a predicted particle. They found nothing — and published the null result as a landmark paper, reshaping the field's theoretical direction.",
    description: `# The Experiment That Failed Correctly

## Historical Overview

In 2029, a consortium of European research institutions began construction of the Meridian Detector Array, designed to search for a theoretical particle predicted by an extension of the standard model — informally called the "Halden particle" after the theorist who first proposed it in 2014.

The project cost an estimated €200 million and employed 340 researchers at peak operation.

## The Search

Data collection began in 2032 and continued for nine years.

By 2038, the array had collected sufficient data to rule out the Halden particle's predicted mass range with 99.7% confidence.

It was not found.

## The Decision

Project lead Dr. Astrid Lindqvist faced a choice common to large physics collaborations: extend the search into less probable mass ranges, or publish the null result and conclude the experiment.

She chose to publish.

> "A null result this precise is not a failure. It eliminates an entire theoretical branch. That is exactly what we built this for."

## The Paper

The 2039 publication, "Exclusion of the Halden Particle to 99.7% Confidence," became one of the most cited particle physics papers of the decade — not because it found something, but because it definitively closed off a major line of theoretical speculation that had occupied parts of the field for over a decade.

Three competing theoretical frameworks were subsequently abandoned.

Two new frameworks, previously considered less promising, gained significant attention as a result.

## Historical Significance

The Meridian result is frequently cited in discussions of how physics treats negative results, and is sometimes used as a teaching example of methodologically rigorous null findings.

Dr. Lindqvist later noted that the paper took longer to get funding approval for publication celebration than the original experiment took to get built.`,
    category: MemoryCategory.SCIENCE,
    rarity: MemoryRarity.UNCOMMON,
    difficulty: MemoryDifficulty.LEVEL_1,
    decisionWeight: DecisionWeight.MEDIUM,
    archetype: MemoryArchetype.DISCOVERY,
    artifactType: ArtifactType.SCIENTIFIC_REPORT,
    impact: {
      compassion: 0,
      progress: 3,
      truth: 3,
      freedom: 1,
      power: 0,
      legacy: 1
    },
    corruptionScore: 0,
    truthScore: 97,
    investigationCost: 8,
    evidenceIds: ["ev_ord_010_paper", "ev_ord_010_lindqvist", "ev_ord_010_funding", "ev_ord_010_frameworks", "ev_ord_010_citations", "ev_ord_010_construction"],
    contradictionIds: [],
    corruptionIds: [],
    tags: ["physics", "science", "null-result", "research", "2029"],
    era: "2029",
    investigationPaths: [
      {
        id: 'ai_logs',
        name: 'Research Data',
        description: 'The publication, citation impact, and theoretical framework shifts',
        evidenceIds: ordinaryBatch2Evidence.filter(ev => ['ev_ord_010_paper', 'ev_ord_010_citations', 'ev_ord_010_frameworks'].includes(ev.id)).map(ev => ev.id)
      },
      {
        id: 'testimony',
        name: 'Project Account',
        description: 'Dr. Lindqvist\'s decision-making and the project\'s funding history',
        evidenceIds: ordinaryBatch2Evidence.filter(ev => ['ev_ord_010_lindqvist', 'ev_ord_010_funding', 'ev_ord_010_construction'].includes(ev.id)).map(ev => ev.id)
      }
    ]
  },

  // ─────────────────────────────────────────────────────────────
  // ord_mem_011 — FAMILY
  // ─────────────────────────────────────────────────────────────
  {
    id: "ord_mem_011",
    title: "The Custody Arrangement Written by Children",
    summary: "Facing a contentious divorce, a Norwegian couple let their three children, aged 9 to 14, draft their own custody and visitation agreement. The court approved it unmodified — the first such case in the country's legal history.",
    description: `# The Custody Arrangement Written by Children

## Historical Overview

In 2031, Erik and Solveig Haugen filed for divorce in Tromsø, Norway, after eighteen years of marriage.

The proceedings were contentious regarding asset division.

They were not contentious regarding their children.

Both parents independently told their lawyers the same thing: they did not want to fight over custody in a way that made their children feel like property being divided.

## The Proposal

Their family mediator, Ingrid Solberg, suggested an unusual approach: ask the children — Mette (14), Lars (11), and Aksel (9) — to draft their own proposed schedule, with adult guidance only on logistics, not content.

Both parents agreed, with the understanding that they retained final approval.

## The Process

Over six sessions, the three children worked with Solberg to draft a parenting plan.

The plan was unusually detailed.

It specified which parent each child would be with for routine school nights, but allowed any child to "request a switch" with 48 hours notice, no reason required.

It included a clause, written by Lars, stating: "If we want to spend a holiday with Grandma instead of either of you, that's also allowed."

Mette insisted on a provision that all three children be consulted together before any modification, even though their ages and needs differed.

## The Approval

Erik and Solveig reviewed the draft. Both wept reading it, for different reasons they later described in separate interviews — Erik because of its fairness, Solveig because of how clearly it showed the children had been paying attention the entire time.

Neither parent requested changes.

The family court judge, reviewing the case in 2032, approved the agreement without modification — noting in her written decision that it was the first child-authored custody arrangement she had encountered in seventeen years on the bench.

## Historical Significance

The Haugen case has been cited in Norwegian family law literature as an example of child-inclusive mediation, though legal scholars note it remains rare in practice due to the emotional and logistical demands of the process.`,
    category: MemoryCategory.FAMILY,
    rarity: MemoryRarity.UNCOMMON,
    difficulty: MemoryDifficulty.LEVEL_1,
    decisionWeight: DecisionWeight.LOW,
    archetype: MemoryArchetype.INNOVATION,
    artifactType: ArtifactType.GOVERNMENT_DOCUMENT,
    impact: {
      compassion: 4,
      progress: 1,
      truth: 0,
      freedom: 2,
      power: -1,
      legacy: 1
    },
    corruptionScore: 0,
    truthScore: 95,
    investigationCost: 8,
    evidenceIds: ["ev_ord_011_plan", "ev_ord_011_ruling", "ev_ord_011_mediator", "ev_ord_011_parents", "ev_ord_011_lars", "ev_ord_011_scholarship"],
    contradictionIds: [],
    corruptionIds: [],
    tags: ["family", "divorce", "children", "norway", "2031"],
    era: "2031",
    investigationPaths: [
      {
        id: 'government',
        name: 'Legal Record',
        description: 'The court ruling and the original parenting plan document',
        evidenceIds: ordinaryBatch2Evidence.filter(ev => ['ev_ord_011_ruling', 'ev_ord_011_plan'].includes(ev.id)).map(ev => ev.id)
      },
      {
        id: 'testimony',
        name: 'Family Account',
        description: 'The mediator\'s process notes and the parents\' own reflections',
        evidenceIds: ordinaryBatch2Evidence.filter(ev => ['ev_ord_011_mediator', 'ev_ord_011_parents', 'ev_ord_011_lars'].includes(ev.id)).map(ev => ev.id)
      }
    ]
  },

  // ─────────────────────────────────────────────────────────────
  // ord_mem_012 — EXPLORATION
  // ─────────────────────────────────────────────────────────────
  {
    id: "ord_mem_012",
    title: "The Diver Who Mapped the Dark",
    summary: "A free-diving instructor turned amateur cave surveyor mapped 40 kilometers of previously unexplored underwater cave systems in the Yucatán over fifteen years, working almost entirely alone and unfunded.",
    description: `# The Diver Who Mapped the Dark

## Historical Overview

Rosa Itzel Pech began free-diving in the cenotes near her hometown of Tulum, Mexico, as a teenager in the early 2020s.

By 2026, she had transitioned to technical cave diving, drawn by what she described as "rooms no one had ever stood in."

Over the following fifteen years, working largely without institutional funding, she became one of the most prolific cave surveyors in the region's history.

## The Method

Pech financed her diving through instructing tourists during daylight hours, reserving early mornings and off-season weeks for exploration.

She used standard line-laying survey techniques, hand-drawn underwater slates, and — beginning in 2031 — a basic sonar mapping device she purchased used and modified herself.

She dove alone for the majority of her exploratory dives, a practice considered extremely high-risk in technical cave diving, which she defended in a 2034 interview:

> "I know exactly what I'm risking. I have made peace with it in a way I don't expect anyone else to understand."

## The Maps

By 2041, Pech had personally surveyed and mapped approximately 40 kilometers of underwater cave passages, several connecting previously thought-separate cenote systems.

She donated all survey data to the Quintana Roo Speleological Survey, refusing payment, stating only that the maps should "belong to whoever dives there after me."

Three of her discovered passages were later confirmed to contain undisturbed pre-Columbian artifacts, leading to formal archaeological partnerships she facilitated but did not participate in directly, citing a lack of archaeological training.

## Historical Significance

Pech continues diving as of the most recent survey update.

The regional speleological survey now informally refers to unmapped extensions of known systems as "Rosa's gaps" — passages believed to exist based on water flow patterns but not yet personally explored and confirmed by her methodology.`,
    category: MemoryCategory.EXPLORATION,
    rarity: MemoryRarity.RARE,
    difficulty: MemoryDifficulty.LEVEL_2,
    decisionWeight: DecisionWeight.MEDIUM,
    archetype: MemoryArchetype.DISCOVERY,
    artifactType: ArtifactType.RESEARCH_PAPER,
    impact: {
      compassion: 1,
      progress: 2,
      truth: 1,
      freedom: 3,
      power: -1,
      legacy: 2
    },
    corruptionScore: 0,
    truthScore: 94,
    investigationCost: 10,
    evidenceIds: ["ev_ord_012_survey", "ev_ord_012_interview", "ev_ord_012_donation", "ev_ord_012_artifacts", "ev_ord_012_risk", "ev_ord_012_gaps"],
    contradictionIds: [],
    corruptionIds: [],
    tags: ["exploration", "diving", "mexico", "cartography", "2026"],
    era: "2026",
    investigationPaths: [
      {
        id: 'testimony',
        name: 'The Diver',
        description: 'Pech\'s own interviews and her stated risk philosophy',
        evidenceIds: ordinaryBatch2Evidence.filter(ev => ['ev_ord_012_interview', 'ev_ord_012_risk'].includes(ev.id)).map(ev => ev.id)
      },
      {
        id: 'corporate',
        name: 'Survey Record',
        description: 'The donated survey data, artifact discoveries, and ongoing exploration gaps',
        evidenceIds: ordinaryBatch2Evidence.filter(ev => ['ev_ord_012_survey', 'ev_ord_012_donation', 'ev_ord_012_artifacts', 'ev_ord_012_gaps'].includes(ev.id)).map(ev => ev.id)
      }
    ]
  },

  // ─────────────────────────────────────────────────────────────
  // ord_mem_013 — PHILOSOPHY
  // ─────────────────────────────────────────────────────────────
  {
    id: "ord_mem_013",
    title: "The Professor Who Failed His Own Argument",
    summary: "A prominent ethicist published a widely cited paper defending a controversial moral position, then publicly retracted it eleven years later after concluding his own reasoning had been wrong — an act some colleagues called intellectual heroism and others called career suicide.",
    description: `# The Professor Who Failed His Own Argument

## Historical Overview

In 2025, Dr. Thaddeus Okonkwo-Reyes published "The Asymmetry of Future Harm," a paper arguing that potential future suffering should be weighted significantly less than present suffering in policy decisions — a position with direct implications for climate and intergenerational policy debates.

The paper was cited over 1,400 times within its first decade and became foundational to a school of thought informally known as "present-weighted ethics."

## Eleven Years Later

In 2036, Okonkwo-Reyes published a second paper: "Retraction and Reconsideration: Where I Was Wrong."

In it, he systematically dismantled his own 2025 argument, identifying what he described as a foundational error in how he had modeled moral uncertainty across time.

> "I did not make a small mistake. I made the kind of mistake that, if uncorrected, causes real damage when people build policy on top of it. I spent eleven years watching people cite the wrong argument approvingly. I could not continue allowing that."

## The Reaction

The response within academic philosophy was sharply divided.

Some colleagues praised the retraction as a model of intellectual integrity, noting how rare formal retractions are in philosophy compared to empirical sciences.

Others were harsher. One prominent critic wrote that Okonkwo-Reyes had "spent a decade providing intellectual cover for policy decisions that harmed vulnerable future populations, and a apology paper does not undo eleven years of citation."

Several policy frameworks that had cited the original 2025 paper did not retroactively revise their reasoning even after the retraction was published.

## Historical Significance

Okonkwo-Reyes continued teaching until his retirement in 2044.

He required all his graduate seminars to read both papers together, telling students:

> "I am not teaching you what to think. I am teaching you what it costs to admit you were wrong, and why the cost is still worth paying."`,
    category: MemoryCategory.PHILOSOPHY,
    rarity: MemoryRarity.RARE,
    difficulty: MemoryDifficulty.LEVEL_4,
    decisionWeight: DecisionWeight.HIGH,
    archetype: MemoryArchetype.FAILURE,
    artifactType: ArtifactType.RESEARCH_PAPER,
    impact: {
      compassion: 1,
      progress: 1,
      truth: 4,
      freedom: 1,
      power: -2,
      legacy: 2
    },
    corruptionScore: 0,
    truthScore: 98,
    investigationCost: 14,
    evidenceIds: ["ev_ord_013_original", "ev_ord_013_retraction", "ev_ord_013_critics", "ev_ord_013_supporters", "ev_ord_013_policy", "ev_ord_013_seminar"],
    contradictionIds: [],
    corruptionIds: [],
    tags: ["philosophy", "ethics", "retraction", "academia", "2025"],
    era: "2025",
    investigationPaths: [
      {
        id: 'ai_logs',
        name: 'Academic Record',
        description: 'Both papers and their citation/policy impact',
        evidenceIds: ordinaryBatch2Evidence.filter(ev => ['ev_ord_013_original', 'ev_ord_013_retraction', 'ev_ord_013_policy'].includes(ev.id)).map(ev => ev.id)
      },
      {
        id: 'testimony',
        name: 'Reactions',
        description: 'Colleague responses and his own later teaching practice',
        evidenceIds: ordinaryBatch2Evidence.filter(ev => ['ev_ord_013_critics', 'ev_ord_013_supporters', 'ev_ord_013_seminar'].includes(ev.id)).map(ev => ev.id)
      }
    ]
  },

  // ─────────────────────────────────────────────────────────────
  // ord_mem_014 — TECHNOLOGY / ECONOMICS
  // ─────────────────────────────────────────────────────────────
  {
    id: "ord_mem_014",
    title: "The Patent Given Away",
    summary: "A small biotech firm's founder, dying of the disease his own company had developed a treatment for, released the patent into the public domain four months before his death rather than maximizing its commercial value as advisors recommended.",
    description: `# The Patent Given Away

## Historical Overview

Dr. Samuel Achterberg founded Lysoderm Therapeutics in 2024 to develop treatments for a rare degenerative muscular condition that had affected his younger sister throughout her life.

By 2033, the company had developed a treatment showing significant efficacy in late-stage trials.

In early 2034, Achterberg was diagnosed with the same condition.

## The Decision

Company advisors and investors presented Achterberg with standard commercialization strategy: secure the patent, license it at a premium reflecting the treatment's rarity and effectiveness, and pursue an acquisition or IPO that would value the company at an estimated $400-600 million.

Achterberg called an emergency board meeting in March 2034.

He proposed releasing the treatment's core patent into the public domain, allowing any manufacturer worldwide to produce it without licensing fees.

The board was not unanimous. Several investors threatened legal action, citing fiduciary duty concerns.

Achterberg, as majority shareholder and founder, proceeded regardless.

## The Release

The patent entered the public domain in July 2034.

Within eighteen months, generic manufacturers in eleven countries had begun production, reducing treatment costs by an estimated 94% in regions previously unable to afford the original commercial price.

Achterberg's own treatment, ironically, began too late in his disease progression to significantly alter his prognosis.

He died in November 2034, four months after the patent release.

## The Aftermath

Two lawsuits were filed by minority shareholders alleging breach of fiduciary duty. Both were settled out of court with confidential terms.

Lysoderm Therapeutics itself folded within two years, unable to sustain operations without the patent's commercial value.

Forty-one employees lost their positions.

## Historical Significance

The case is frequently cited in business ethics curricula as a genuine dilemma rather than a clean moral lesson: a profound act of generosity that also ended a company and forty-one jobs, undertaken by a man who would not live to see its full effect.

His sister, who had inspired the company's founding, lived an additional twenty-two years using a generic version of the treatment her brother had given away.`,
    category: MemoryCategory.ECONOMICS,
    rarity: MemoryRarity.RARE,
    difficulty: MemoryDifficulty.LEVEL_5,
    decisionWeight: DecisionWeight.CRITICAL,
    archetype: MemoryArchetype.SACRIFICE,
    artifactType: ArtifactType.GOVERNMENT_DOCUMENT,
    impact: {
      compassion: 5,
      progress: 2,
      truth: 0,
      freedom: 3,
      power: -3,
      legacy: 3
    },
    corruptionScore: 0,
    truthScore: 96,
    investigationCost: 16,
    evidenceIds: ["ev_ord_014_patent", "ev_ord_014_board", "ev_ord_014_lawsuit", "ev_ord_014_employees", "ev_ord_014_sister", "ev_ord_014_pricing"],
    contradictionIds: [],
    corruptionIds: [],
    tags: ["patent", "biotech", "sacrifice", "ethics", "2034"],
    era: "2034",
    investigationPaths: [
      {
        id: 'corporate',
        name: 'Business Record',
        description: 'Board minutes, the lawsuits, and the company\'s subsequent closure',
        evidenceIds: ordinaryBatch2Evidence.filter(ev => ['ev_ord_014_board', 'ev_ord_014_lawsuit', 'ev_ord_014_employees'].includes(ev.id)).map(ev => ev.id)
      },
      {
        id: 'testimony',
        name: 'Human Impact',
        description: 'The patent release itself, pricing impact, and his sister\'s outcome',
        evidenceIds: ordinaryBatch2Evidence.filter(ev => ['ev_ord_014_patent', 'ev_ord_014_pricing', 'ev_ord_014_sister'].includes(ev.id)).map(ev => ev.id)
      }
    ]
  },

  // ─────────────────────────────────────────────────────────────
  // ord_mem_015 — CULTURE / ART
  // ─────────────────────────────────────────────────────────────
  {
    id: "ord_mem_015",
    title: "The Mural Painted Over Forty Times",
    summary: "A single wall in Lagos became a continuously repainted public mural for over a decade, with each artist required by informal community tradition to incorporate one element from the previous version before adding their own.",
    description: `# The Mural Painted Over Forty Times

## Historical Overview

In 2025, street artist Chidinma Eze painted an unsanctioned mural on a disused factory wall in the Mushin district of Lagos, depicting a market scene from her childhood neighborhood.

The wall belonged to no one in active use. The building's owner, when located by a local reporter, stated he had no objection.

## The Tradition

In 2026, a second artist painted over part of Eze's mural — but, in a gesture initially unplanned, preserved a single market-seller figure from the original work, integrating it into a new composition.

A third artist did the same in 2027, preserving an element from the second mural.

Over the following decade, this became an informal but strictly observed local tradition: any artist who repainted the wall was expected — by community consensus rather than any written rule — to preserve exactly one element from the immediately preceding version.

## Forty Versions

By 2037, the wall had been repainted approximately forty times by at least twenty-six different identified artists, plus several anonymous contributions.

A local historian, Dr. Folake Adeyemi, began photographing each version before it was painted over, eventually compiling what she called "the only artwork that is also a timeline."

Tracing backward through preserved elements, a single small detail from Eze's original 2025 mural — a child's red sandal, barely visible in a market crowd — could be identified as still present, in increasingly abstracted form, in the 2037 version.

## Historical Significance

The wall continues to be repainted as of the most recent documentation.

Eze, when shown the 2037 version and asked to identify her sandal, took several minutes before pointing to a small red shape she described as "maybe. I think that's it. I'm not sure anymore, and I don't think that not being sure is a bad thing."`,
    category: MemoryCategory.ART,
    rarity: MemoryRarity.UNCOMMON,
    difficulty: MemoryDifficulty.LEVEL_1,
    decisionWeight: DecisionWeight.LOW,
    archetype: MemoryArchetype.PRESERVATION,
    artifactType: ArtifactType.PHOTOGRAPH,
    impact: {
      compassion: 2,
      progress: 1,
      truth: 1,
      freedom: 3,
      power: 0,
      legacy: 3
    },
    corruptionScore: 0,
    truthScore: 92,
    investigationCost: 8,
    evidenceIds: ["ev_ord_015_eze", "ev_ord_015_adeyemi", "ev_ord_015_tradition", "ev_ord_015_sandal", "ev_ord_015_owner", "ev_ord_015_versions"],
    contradictionIds: [],
    corruptionIds: [],
    tags: ["art", "lagos", "community", "mural", "2025"],
    era: "2025",
    investigationPaths: [
      {
        id: 'testimony',
        name: 'The Artists',
        description: 'Eze\'s original account and the building owner\'s statement',
        evidenceIds: ordinaryBatch2Evidence.filter(ev => ['ev_ord_015_eze', 'ev_ord_015_owner'].includes(ev.id)).map(ev => ev.id)
      },
      {
        id: 'corporate',
        name: 'Documentation Project',
        description: 'Dr. Adeyemi\'s photographic archive tracing the tradition and the sandal motif',
        evidenceIds: ordinaryBatch2Evidence.filter(ev => ['ev_ord_015_adeyemi', 'ev_ord_015_tradition', 'ev_ord_015_sandal', 'ev_ord_015_versions'].includes(ev.id)).map(ev => ev.id)
      }
    ]
  },

];