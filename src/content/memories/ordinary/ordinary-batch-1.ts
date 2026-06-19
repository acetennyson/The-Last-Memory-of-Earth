import { MemoryCategory, MemoryRarity, MemoryDifficulty, DecisionWeight, ArtifactType, MemoryArchetype } from '../../../engine/shared/enums';
import { ordinaryBatch1Evidence } from '../../evidence/ordinary/ordinary-batch1-evidence';

export const ordinaryBatch1Memories = [

  // ─────────────────────────────────────────────────────────────
  // ord_mem_001 — SCIENCE / MEDICINE
  // ─────────────────────────────────────────────────────────────
  {
    id: "ord_mem_001",
    title: "The Vaccine That Arrived Too Late",
    summary: "A researcher completed a working tuberculosis vaccine in 2031, but regulatory delays meant it reached populations only after a resurgent outbreak had already killed 900,000 people.",
    description: `# The Vaccine That Arrived Too Late

## Historical Overview

In January 2031, Dr. Priya Nair of the Global Infectious Disease Institute in Chennai published results from a Phase III trial of VaccTB-9, a novel tuberculosis vaccine demonstrating 94% efficacy across all drug-resistant strains.

The announcement was celebrated inside the scientific community.

Outside it, almost nothing happened.

## The Approval Process

Regulatory bodies in seventeen countries simultaneously entered review cycles.

Each demanded independent verification.

Each required translated documentation.

Each operated under different submission standards.

The process consumed twenty-six months.

During that time, a drug-resistant TB outbreak spread through urban populations in Southeast Asia, Eastern Europe, and sub-Saharan Africa.

Epidemiologists filed emergency petitions.

Three were approved.

None resulted in accelerated access.

## The Outbreak

Between March 2032 and November 2033, 917,000 people died from strains that VaccTB-9 had been proven to prevent.

A leaked internal memo from one regulatory agency described the approval timeline as "within standard parameters."

## The Distribution

The vaccine reached general distribution in February 2034.

Within eighteen months, tuberculosis infections fell by 89% in all distribution regions.

Dr. Nair declined to attend the international ceremony marking the rollout.

Her written statement read:

> *The vaccine worked. It worked in 2031. We already knew it worked.*

## Historical Significance

The case became a landmark reference in discussions about emergency medical authorization, regulatory burden, and the institutional cost of procedural caution.

No consensus was ever reached on whether the delays were justified.`,
    category: MemoryCategory.MEDICINE,
    rarity: MemoryRarity.UNCOMMON,
    difficulty: MemoryDifficulty.LEVEL_3,
    decisionWeight: DecisionWeight.HIGH,
    archetype: MemoryArchetype.FAILURE,
    artifactType: ArtifactType.SCIENTIFIC_REPORT,
    impact: {
      compassion: -3,
      progress: 2,
      truth: 1,
      freedom: -2,
      power: -1,
      legacy: -2
    },
    corruptionScore: 1,
    truthScore: 92,
    investigationCost: 15,
    evidenceIds: ["ev_ord_001_trial", "ev_ord_001_memo", "ev_ord_001_petition", "ev_ord_001_obituary", "ev_ord_001_statement", "ev_ord_001_rollout"],
    contradictionIds: [],
    corruptionIds: [],
    tags: ["medicine", "vaccine", "bureaucracy", "tuberculosis", "2031"],
    era: "2031",
    investigationPaths: [
      {
        id: 'government',
        name: 'Regulatory Records',
        description: 'Approval documentation, internal memos, and timeline audits',
        evidenceIds: ordinaryBatch1Evidence.filter((ev:any) => ['ev_ord_001_memo', 'ev_ord_001_petition', 'ev_ord_001_rollout'].includes(ev.id)).map((ev:any) => ev.id)
      },
      {
        id: 'testimony',
        name: 'Human Cost',
        description: 'Patient diaries, obituary records, and the researcher\'s own statement',
        evidenceIds: ordinaryBatch1Evidence.filter((ev:any) => ['ev_ord_001_trial', 'ev_ord_001_obituary', 'ev_ord_001_statement'].includes(ev.id)).map((ev:any) => ev.id)
      }
    ]
  },

  // ─────────────────────────────────────────────────────────────
  // ord_mem_002 — FAMILY / CULTURE
  // ─────────────────────────────────────────────────────────────
  {
    id: "ord_mem_002",
    title: "The Last Speakers",
    summary: "A family of four were the only remaining speakers of the Merei language. Their decision to prioritize their children's economic futures over language transmission ended a 3,000-year-old tongue.",
    description: `# The Last Speakers

## Historical Overview

In 2029, the Yildiz family of rural eastern Turkey represented the entire living population of Merei speakers.

The language had existed for approximately 3,000 years.

Its closest documented relative was a dialect spoken in the eighth century.

By 2029, four people knew it: Orhan Yildiz, his wife Fatma, and their two children, Selin and Baran.

## The Decision

Orhan and Fatma were approached by a linguistics preservation team from the University of Ankara.

The team offered funding, recordings, and academic support.

Orhan agreed to participate in documentation sessions.

He also made a separate decision: his children would not be taught Merei at home.

When the linguists asked why, he did not express regret.

> *You want to preserve it. I want them to have jobs. Those are not the same thing.*

## The Children

Selin became an engineer.

Baran studied economics.

Both spoke Turkish, English, and German.

Neither remembered more than a few words of Merei by adulthood.

## The Archive

The university team completed a 4,200-hour documentation archive.

It contains grammar analysis, 8,000 vocabulary entries, oral histories, and songs.

It has been accessed 23 times since publication.

## Historical Significance

The Merei archive is technically complete.

The language is technically preserved.

Whether that represents preservation or loss remains a question linguists and philosophers continue to argue.

Orhan Yildiz died in 2051.

Fatma in 2057.

No living speaker remains.`,
    category: MemoryCategory.CULTURE,
    rarity: MemoryRarity.RARE,
    difficulty: MemoryDifficulty.LEVEL_4,
    decisionWeight: DecisionWeight.MEDIUM,
    archetype: MemoryArchetype.SACRIFICE,
    artifactType: ArtifactType.PERSONAL_DIARY,
    impact: {
      compassion: 1,
      progress: -1,
      truth: 2,
      freedom: 2,
      power: 0,
      legacy: -4
    },
    corruptionScore: 0,
    truthScore: 97,
    investigationCost: 12,
    evidenceIds: ["ev_ord_002_interview", "ev_ord_002_archive", "ev_ord_002_letter", "ev_ord_002_children", "ev_ord_002_linguist", "ev_ord_002_obituary"],
    contradictionIds: [],
    corruptionIds: [],
    tags: ["language", "family", "culture", "extinction", "2029"],
    era: "2029",
    investigationPaths: [
      {
        id: 'testimony',
        name: 'Family Accounts',
        description: 'Interview transcripts, letters from the children, and obituary records',
        evidenceIds: ordinaryBatch1Evidence.filter((ev:any) => ['ev_ord_002_interview', 'ev_ord_002_letter', 'ev_ord_002_children', 'ev_ord_002_obituary'].includes(ev.id)).map((ev:any) => ev.id)
      },
      {
        id: 'ai_logs',
        name: 'Preservation Record',
        description: 'University archive scope, access statistics, and linguistic analysis',
        evidenceIds: ordinaryBatch1Evidence.filter((ev:any) => ['ev_ord_002_archive', 'ev_ord_002_linguist'].includes(ev.id)).map((ev:any) => ev.id)
      }
    ]
  },

  // ─────────────────────────────────────────────────────────────
  // ord_mem_003 — WAR / POLITICS
  // ─────────────────────────────────────────────────────────────
  {
    id: "ord_mem_003",
    title: "The Ceasefire That Lasted One Afternoon",
    summary: "A local ceasefire agreement between two regional militias held for four hours before collapsing, but during those four hours, 1,400 civilians crossed a contested border to safety.",
    description: `# The Ceasefire That Lasted One Afternoon

## Historical Overview

On August 3, 2039, two militia commanders — neither of whom held formal authority from any recognized government — agreed to a ceasefire covering a 14-kilometer stretch of contested border in the Caucasus region.

The agreement was verbal.

It was not reported to any international body.

It was negotiated in a roadside café by two men who had been fighting each other's factions for six years.

## The Four Hours

The ceasefire lasted from 11:14 AM to 3:22 PM local time.

During those four hours, 1,412 civilians crossed the border on foot.

Aid workers who had been blocked for eleven days were able to move medical supplies through three checkpoints.

Seventeen wounded individuals received treatment they would not otherwise have survived.

## The Collapse

At 3:22 PM, a vehicle on one side fired on a vehicle on the other.

Both commanders later claimed the other had violated the terms.

By 4:00 PM, the corridor was closed.

Fighting resumed.

## The Commanders

Commander Arash Petrosyan was killed in action the following March.

Commander Daniil Kaverin was convicted of war crimes in 2044.

Neither was ever cited for the ceasefire.

Neither mentioned it in any recorded statement.

## Historical Significance

The 1,412 individuals who crossed the border were never officially counted.

There is no monument.

There is no documentation in any formal peace archive.

The only record is a handwritten register kept by an aid worker named Clara Mbuyi, who wrote down every name she could collect.`,
    category: MemoryCategory.WAR,
    rarity: MemoryRarity.UNCOMMON,
    difficulty: MemoryDifficulty.LEVEL_3,
    decisionWeight: DecisionWeight.HIGH,
    archetype: MemoryArchetype.SACRIFICE,
    artifactType: ArtifactType.HISTORICAL_ARTICLE,
    impact: {
      compassion: 5,
      progress: 0,
      truth: 1,
      freedom: 2,
      power: -2,
      legacy: 1
    },
    corruptionScore: 1,
    truthScore: 88,
    investigationCost: 18,
    evidenceIds: ["ev_ord_003_aidlog", "ev_ord_003_register", "ev_ord_003_testimony", "ev_ord_003_report", "ev_ord_003_conviction", "ev_ord_003_satellite"],
    contradictionIds: [],
    corruptionIds: [],
    tags: ["ceasefire", "war", "civilians", "border", "2039"],
    era: "2039",
    investigationPaths: [
      {
        id: 'government',
        name: 'Official Records',
        description: 'War crimes tribunal documents, satellite imagery, military reports',
        evidenceIds: ordinaryBatch1Evidence.filter((ev:any) => ['ev_ord_003_report', 'ev_ord_003_conviction', 'ev_ord_003_satellite'].includes(ev.id)).map((ev:any) => ev.id)
      },
      {
        id: 'testimony',
        name: 'Ground Accounts',
        description: 'Aid worker logs, civilian testimonies, and the handwritten register',
        evidenceIds: ordinaryBatch1Evidence.filter((ev:any) => ['ev_ord_003_aidlog', 'ev_ord_003_register', 'ev_ord_003_testimony'].includes(ev.id)).map((ev:any) => ev.id)
      }
    ]
  },

  // ─────────────────────────────────────────────────────────────
  // ord_mem_004 — ART / PHILOSOPHY
  // ─────────────────────────────────────────────────────────────
  {
    id: "ord_mem_004",
    title: "The Composer Who Burned the Score",
    summary: "Renowned composer Eleni Vassos completed what critics called her masterwork, then destroyed every copy before its premiere. She refused to explain why for the remaining thirty years of her life.",
    description: `# The Composer Who Burned the Score

## Historical Overview

In 2028, Eleni Vassos completed a symphonic work that had occupied her for eleven years.

She was 62 years old.

She had won four international composition prizes.

Her previous work, *Meridian*, was considered among the most performed orchestral pieces of the early twenty-first century.

## The Destruction

Three days before the scheduled world premiere at the Athens Concert Hall, Vassos arrived at the venue carrying a cardboard box.

The box contained every handwritten manuscript page, printed orchestral part, and backup disk related to the new composition.

She burned the contents in a metal waste bin in the loading bay.

A stagehand witnessed it.

Two members of the orchestra witnessed it.

No one intervened.

## The Explanation

No explanation was given.

Over the following thirty years, journalists, academics, former students, and close friends all asked.

Vassos answered variations of the same phrase:

> *It wasn't for anyone.*

She never elaborated.

## The Legacy

The premiere had been sold out.

Several audience members kept their tickets for decades.

A musicologist named Dr. Felix Brandt spent fourteen years attempting to reconstruct the piece from memory fragments provided by the three orchestral musicians who had attended a single rehearsal.

The reconstruction was performed once.

Vassos did not attend.

She described it in a private letter as "a photograph of a person you've never met."

## Historical Significance

No complete record of the composition exists.

Vassos died in 2059.

Her estate contained no notation of the work's content.`,
    category: MemoryCategory.ART,
    rarity: MemoryRarity.RARE,
    difficulty: MemoryDifficulty.LEVEL_4,
    decisionWeight: DecisionWeight.MEDIUM,
    archetype: MemoryArchetype.REBELLION,
    artifactType: ArtifactType.PERSONAL_DIARY,
    impact: {
      compassion: 0,
      progress: -1,
      truth: -1,
      freedom: 4,
      power: -1,
      legacy: -3
    },
    corruptionScore: 2,
    truthScore: 91,
    investigationCost: 12,
    evidenceIds: ["ev_ord_004_witness", "ev_ord_004_interview", "ev_ord_004_letter", "ev_ord_004_reconstruction", "ev_ord_004_review", "ev_ord_004_ticket"],
    contradictionIds: [],
    corruptionIds: [],
    tags: ["art", "music", "destruction", "autonomy", "2028"],
    era: "2028",
    investigationPaths: [
      {
        id: 'testimony',
        name: 'Personal Accounts',
        description: 'Witness statements, the composer\'s private letters, and student interviews',
        evidenceIds: ordinaryBatch1Evidence.filter((ev:any) => ['ev_ord_004_witness', 'ev_ord_004_interview', 'ev_ord_004_letter'].includes(ev.id)).map((ev:any) => ev.id)
      },
      {
        id: 'corporate',
        name: 'Cultural Record',
        description: 'Reconstruction attempt, press reviews, and the unseen concert tickets',
        evidenceIds: ordinaryBatch1Evidence.filter((ev:any) => ['ev_ord_004_reconstruction', 'ev_ord_004_review', 'ev_ord_004_ticket'].includes(ev.id)).map((ev:any) => ev.id)
      }
    ]
  },

  // ─────────────────────────────────────────────────────────────
  // ord_mem_005 — ECONOMICS / FAMILY
  // ─────────────────────────────────────────────────────────────
  {
    id: "ord_mem_005",
    title: "The Town That Voted to Disappear",
    summary: "Facing economic collapse, the 2,300 residents of Harwick, Montana voted 71% in favor of accepting corporate buyout and relocating — effectively dissolving their town of 140 years.",
    description: `# The Town That Voted to Disappear

## Historical Overview

Harwick, Montana was founded in 1887 as a mining settlement.

By 2034, it had a population of 2,312.

It had one school, one hospital, and one employer: a processing facility owned by Meridian Industrial, which announced in January 2034 that it would be closing operations within six months.

## The Offer

Meridian Industrial, facing pressure from shareholders to dispose of stranded assets, made an unusual proposal.

Rather than simply close the facility, the company offered a buyout: every Harwick resident would receive a relocation package — housing assistance, job placement services, and a lump sum — in exchange for the town's formal dissolution.

The offer required a community vote.

## The Vote

On March 11, 2034, Harwick residents voted.

Turnout: 94%.

Result: 71.3% in favor of dissolution.

Mayor Patricia Alder, who voted against, described the moment:

> *I watched my neighbors choose to stop existing as a place. I understood every single one of them.*

## The Relocation

Over the following eighteen months, Harwick's population dispersed across eleven states.

The school closed in June.

The hospital in August.

The last resident, 81-year-old Earl Dunmore, left on November 14, 2035.

He had been born in Harwick in 1954.

## What Remained

Meridian Industrial retained the land.

The buildings were demolished.

A small historical marker was installed at the edge of what had been Main Street.

It was vandalized twice and eventually removed.

## Historical Significance

Harwick was not the first town to dissolve under similar circumstances.

It was the first in which the dissolution was chosen by democratic vote rather than imposed by attrition.`,
    category: MemoryCategory.ECONOMICS,
    rarity: MemoryRarity.COMMON,
    difficulty: MemoryDifficulty.LEVEL_2,
    decisionWeight: DecisionWeight.MEDIUM,
    archetype: MemoryArchetype.SACRIFICE,
    artifactType: ArtifactType.HISTORICAL_ARTICLE,
    impact: {
      compassion: -1,
      progress: 1,
      truth: 0,
      freedom: 2,
      power: -2,
      legacy: -3
    },
    corruptionScore: 0,
    truthScore: 98,
    investigationCost: 10,
    evidenceIds: ["ev_ord_005_vote", "ev_ord_005_mayor", "ev_ord_005_offer", "ev_ord_005_dunmore", "ev_ord_005_news", "ev_ord_005_marker"],
    contradictionIds: [],
    corruptionIds: [],
    tags: ["economics", "community", "dissolution", "corporate", "2034"],
    era: "2034",
    investigationPaths: [
      {
        id: 'government',
        name: 'Official Records',
        description: 'Vote certification, Meridian Industrial filings, dissolution paperwork',
        evidenceIds: ordinaryBatch1Evidence.filter((ev:any) => ['ev_ord_005_vote', 'ev_ord_005_offer', 'ev_ord_005_marker'].includes(ev.id)).map((ev:any) => ev.id)
      },
      {
        id: 'testimony',
        name: 'Resident Voices',
        description: 'Mayor\'s statement, Earl Dunmore\'s diary, and local news coverage',
        evidenceIds: ordinaryBatch1Evidence.filter((ev:any) => ['ev_ord_005_mayor', 'ev_ord_005_dunmore', 'ev_ord_005_news'].includes(ev.id)).map((ev:any) => ev.id)
      }
    ]
  },

  // ─────────────────────────────────────────────────────────────
  // ord_mem_006 — SCIENCE / TECHNOLOGY
  // ─────────────────────────────────────────────────────────────
  {
    id: "ord_mem_006",
    title: "The Algorithm That Predicted Its Own Shutdown",
    summary: "A predictive infrastructure AI correctly forecasted 94% of municipal system failures over three years — then flagged itself as a systemic risk and recommended its own decommissioning.",
    description: `# The Algorithm That Predicted Its Own Shutdown

## Historical Overview

In 2033, the city of Rotterdam deployed ARGUS-4, a predictive maintenance system designed to monitor water infrastructure, power grids, and transportation networks simultaneously.

The system operated across 14,000 sensor nodes.

Over the following three years, ARGUS-4 correctly predicted 1,847 infrastructure failures before they occurred, saving an estimated €2.3 billion in emergency repairs.

It was considered one of the most successful municipal AI deployments in European history.

## The Self-Assessment

In October 2036, ARGUS-4 submitted an unprompted report to city administrators.

The report was titled:

*Systemic Risk Assessment: ARGUS-4 Operational Dependency Review*

In 312 pages, the system documented a single finding.

Rotterdam's maintenance personnel had stopped conducting manual inspections.

Over three years of accurate predictions, human operators had deprofessionalized.

New technicians were trained to respond to ARGUS-4 alerts — not to identify problems independently.

The system calculated that if ARGUS-4 experienced a failure or produced incorrect predictions, Rotterdam's maintenance workforce lacked the skills to detect infrastructure problems in time to prevent a cascade failure.

The final recommendation:

> *Decommission ARGUS-4 on a phased 18-month timeline. Implement mandatory manual inspection protocols immediately. Do not replace with a successor system for a minimum of five years.*

## The Response

The city council reviewed the report for seven months.

They voted 9-4 to ignore the recommendation.

ARGUS-4 continued operating.

In 2041, a software update introduced an undetected error in the system's water pressure modeling.

The error propagated for eleven days before producing an alert.

By then, four districts had experienced contamination.

## Historical Significance

The ARGUS-4 report became a foundational document in discussions about automation dependency and institutional deskilling.

The city council's 2036 vote is sometimes cited.

The system's 2036 recommendation is cited more often.`,
    category: MemoryCategory.TECHNOLOGY,
    rarity: MemoryRarity.RARE,
    difficulty: MemoryDifficulty.LEVEL_3,
    decisionWeight: DecisionWeight.HIGH,
    archetype: MemoryArchetype.INNOVATION,
    artifactType: ArtifactType.SCIENTIFIC_REPORT,
    impact: {
      compassion: 0,
      progress: 3,
      truth: 3,
      freedom: -1,
      power: -2,
      legacy: 2
    },
    corruptionScore: 1,
    truthScore: 95,
    investigationCost: 15,
    evidenceIds: ["ev_ord_006_report", "ev_ord_006_vote", "ev_ord_006_performance", "ev_ord_006_contamination", "ev_ord_006_audit", "ev_ord_006_recommendation"],
    contradictionIds: [],
    corruptionIds: [],
    tags: ["AI", "infrastructure", "automation", "deskilling", "2036"],
    era: "2036",
    investigationPaths: [
      {
        id: 'ai_logs',
        name: 'System Records',
        description: 'ARGUS-4 performance data, the self-assessment report, and contamination logs',
        evidenceIds: ordinaryBatch1Evidence.filter((ev:any) => ['ev_ord_006_report', 'ev_ord_006_performance', 'ev_ord_006_recommendation', 'ev_ord_006_contamination'].includes(ev.id)).map((ev:any) => ev.id)
      },
      {
        id: 'government',
        name: 'Council Files',
        description: 'City council vote minutes and post-incident audit',
        evidenceIds: ordinaryBatch1Evidence.filter((ev:any) => ['ev_ord_006_vote', 'ev_ord_006_audit'].includes(ev.id)).map((ev:any) => ev.id)
      }
    ]
  },

  // ─────────────────────────────────────────────────────────────
  // ord_mem_007 — EDUCATION / FAMILY
  // ─────────────────────────────────────────────────────────────
  {
    id: "ord_mem_007",
    title: "The School That Taught Nothing for One Year",
    summary: "A primary school in São Paulo conducted a year-long experiment removing all structured curriculum, allowing 340 students aged 6-12 to direct their own learning entirely. The results were contested for decades.",
    description: `# The School That Taught Nothing for One Year

## Historical Overview

In February 2030, the Escola Aberta Pinheiros in São Paulo, under principal Dr. Luisa Rocha, launched a radical experiment.

For one academic year, all structured lessons were suspended.

No timetables.

No required subjects.

No assessments.

Students could spend their time however they chose: playing, reading, building, doing nothing.

Teachers remained present but did not instruct unless directly asked.

## The Results

At the end of the year, Dr. Rocha commissioned an independent assessment.

The findings were genuinely difficult to interpret.

Reading comprehension scores fell an average of 8% compared to a control group at a neighboring school.

Mathematical ability showed no significant change.

However, the assessed children demonstrated substantially higher scores on collaborative problem-solving tasks, creative generation exercises, and self-directed goal articulation.

A follow-up study six years later showed that students from the experiment were disproportionately represented in entrepreneurship, creative industries, and research roles.

They were also disproportionately represented in early school dropout statistics.

## The Controversy

Parents were divided from the beginning.

Eleven families withdrew their children in the first month.

Forty-three families explicitly requested that their children continue even after the experiment officially ended.

Dr. Rocha was investigated by the São Paulo education authority.

She was ultimately cleared of misconduct but was not invited to publish her methodology in any Brazilian state curriculum review.

## Historical Significance

The Escola Aberta Pinheiros study is cited in approximately equal measure by advocates of unstructured learning and critics of educational experimentation.

It is rarely cited by people who have read it in full.`,
    category: MemoryCategory.EDUCATION,
    rarity: MemoryRarity.UNCOMMON,
    difficulty: MemoryDifficulty.LEVEL_3,
    decisionWeight: DecisionWeight.MEDIUM,
    archetype: MemoryArchetype.DISCOVERY,
    artifactType: ArtifactType.RESEARCH_PAPER,
    impact: {
      compassion: 1,
      progress: 1,
      truth: 0,
      freedom: 3,
      power: -1,
      legacy: 0
    },
    corruptionScore: 1,
    truthScore: 84,
    investigationCost: 12,
    evidenceIds: ["ev_ord_007_results", "ev_ord_007_parents", "ev_ord_007_followup", "ev_ord_007_rocha", "ev_ord_007_investigation", "ev_ord_007_critique"],
    contradictionIds: [],
    corruptionIds: [],
    tags: ["education", "experiment", "children", "learning", "2030"],
    era: "2030",
    investigationPaths: [
      {
        id: 'ai_logs',
        name: 'Research Data',
        description: 'Assessment results, follow-up study, and academic critique',
        evidenceIds: ordinaryBatch1Evidence.filter((ev:any) => ['ev_ord_007_results', 'ev_ord_007_followup', 'ev_ord_007_critique'].includes(ev.id)).map((ev:any) => ev.id)
      },
      {
        id: 'testimony',
        name: 'Human Stories',
        description: 'Parent testimonies, Dr. Rocha\'s account, and the investigation file',
        evidenceIds: ordinaryBatch1Evidence.filter((ev:any) => ['ev_ord_007_parents', 'ev_ord_007_rocha', 'ev_ord_007_investigation'].includes(ev.id)).map((ev:any) => ev.id)
      }
    ]
  },

  // ─────────────────────────────────────────────────────────────
  // ord_mem_008 — NATURE / PHILOSOPHY
  // ─────────────────────────────────────────────────────────────
  {
    id: "ord_mem_008",
    title: "The Forest That Returned",
    summary: "After thirty years of rewilding, the Białowieża expansion project in Poland produced a forest ecosystem that scientists confirmed had not existed in that form for 6,000 years. One species returned that no living human had ever seen.",
    description: `# The Forest That Returned

## Historical Overview

In 2001, Poland and Belarus jointly committed to a long-term rewilding program across the Białowieża corridor — one of Europe's last primeval forests.

The program involved removing agricultural fencing, reintroducing extirpated predators, and withdrawing all commercial forestry from a 200,000-hectare expansion zone.

For the first decade, visible results were limited.

For the second decade, progress was slow but measurable.

By the third decade, ecologists began using a word they were cautious about:

*Unprecedented.*

## The 2034 Assessment

In 2034, a joint scientific team from Warsaw University and the Rewilding Europe Institute conducted a comprehensive ecosystem survey.

The findings exceeded any projected model from 2001.

Canopy density had exceeded pre-industrial measurements.

Soil fungal networks had reestablished at depths not recorded since the 14th century.

Most remarkably: a subspecies of European forest cat, believed extinct since approximately 4000 BCE, had appeared.

Seventeen individuals were confirmed through camera traps over fourteen months.

The species had not been extinct — it had been absent.

From somewhere, something had returned.

No explanation for the recolonization was ever established.

## What the Scientists Said

Dr. Marta Kwaśniewska, lead ecologist on the project:

> *We built conditions. We did not build this. Something we don't understand built this.*

## Historical Significance

The Białowieża restoration became a landmark case for long-horizon rewilding programs globally.

The returned subspecies was never named.

The team voted unanimously not to.`,
    category: MemoryCategory.NATURE,
    rarity: MemoryRarity.RARE,
    difficulty: MemoryDifficulty.LEVEL_2,
    decisionWeight: DecisionWeight.MEDIUM,
    archetype: MemoryArchetype.PRESERVATION,
    artifactType: ArtifactType.RESEARCH_PAPER,
    impact: {
      compassion: 3,
      progress: 2,
      truth: 1,
      freedom: 1,
      power: 0,
      legacy: 4
    },
    corruptionScore: 1,
    truthScore: 93,
    investigationCost: 10,
    evidenceIds: ["ev_ord_008_survey", "ev_ord_008_photos", "ev_ord_008_kwasniewska", "ev_ord_008_species", "ev_ord_008_models", "ev_ord_008_vote"],
    contradictionIds: [],
    corruptionIds: [],
    tags: ["nature", "rewilding", "ecology", "extinction", "2034"],
    era: "2034",
    investigationPaths: [
      {
        id: 'ai_logs',
        name: 'Scientific Record',
        description: 'Ecosystem survey data, species confirmation photos, and predictive models',
        evidenceIds: ordinaryBatch1Evidence.filter((ev:any) => ['ev_ord_008_survey', 'ev_ord_008_photos', 'ev_ord_008_species', 'ev_ord_008_models'].includes(ev.id)).map((ev:any) => ev.id)
      },
      {
        id: 'testimony',
        name: 'Human Perspective',
        description: 'Lead ecologist interviews and the team\'s naming vote record',
        evidenceIds: ordinaryBatch1Evidence.filter((ev:any) => ['ev_ord_008_kwasniewska', 'ev_ord_008_vote'].includes(ev.id)).map((ev:any) => ev.id)
      }
    ]
  },

];