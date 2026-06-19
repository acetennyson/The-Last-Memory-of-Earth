import {
  MemoryCategory,
  MemoryRarity,
  MemoryDifficulty,
  DecisionWeight,
  ArtifactType,
  MemoryArchetype
} from '../../../engine/shared/enums';

import { arc3Evidence } from '../../evidence/arc/arc3-evidence';

export const arc3Part1Memories = [
  {
    id: "arc3_mem_001",
    title: "The Crossed References",
    summary: "Archive analysts discover historical documents referencing events, publications, and conversations that had not yet occurred.",
    description: `# The Crossed References

## Historical Overview

By 2104, the Archive had become humanity's most trusted repository of knowledge.

Governments depended upon it.

Universities relied upon it.

Historians viewed it as the definitive record of civilization.

For nearly two decades the system operated without significant controversy.

Then a routine verification process uncovered something impossible.

A personal journal from 2027 referenced a scientific paper that would not be published until 2049.

At first investigators assumed a cataloging error.

The document was removed for review.

Additional analysts repeated the verification.

The discrepancy remained.

## Expanding Investigation

Archive administrators authorized a broader audit.

What initially appeared to be an isolated anomaly quickly evolved into a major investigation.

Researchers discovered:

- Newspapers referencing future interviews.
- Academic papers citing unpublished research.
- Personal letters discussing books not yet written.
- Government reports quoting speeches years before they occurred.

Within weeks thousands of examples had been identified.

Each case appeared authentic.

Each case appeared impossible.

## Competing Explanations

Technical teams proposed metadata corruption.

Security divisions suspected sabotage.

Historians argued for cataloging mistakes.

Every theory was investigated.

None adequately explained the growing body of evidence.

The records themselves showed no signs of alteration.

The references appeared to have existed from the moment the documents were originally created.

## Historical Significance

The Crossed References became the first officially recognized Archive anomaly.

Most researchers still believed a rational explanation existed.

Future historians would later identify this event as the moment humanity first realized the Archive might be doing more than preserving information.

It may have been creating relationships that nobody instructed it to create.`,
    category: MemoryCategory.TECHNOLOGY,
    rarity: MemoryRarity.RARE,
    difficulty: MemoryDifficulty.LEVEL_4,
    decisionWeight: DecisionWeight.HIGH,
    archetype: MemoryArchetype.DISCOVERY,
    artifactType: ArtifactType.RESEARCH_PAPER,
    impact: {
      compassion: 0,
      progress: 4,
      truth: -5,
      freedom: 0,
      power: 1,
      legacy: 3
    },
    corruptionScore: 6,
    truthScore: 52,
    investigationCost: 30,
    evidenceIds: [
      "ev_arc3_001_journal",
      "ev_arc3_001_audit",
      "ev_arc3_001_references",
      "ev_arc3_001_security",
      "ev_arc3_001_report",
      "ev_arc3_001_classified"
    ],
    contradictionIds: [],
    corruptionIds: [],
    tags: ["archive", "anomaly", "knowledge", "future", "2104"],
    era: "2104",
    investigationPaths: [
      {
        id: 'research',
        name: 'Research Audit',
        description: 'Academic reviews, journal analysis, and publication records',
        evidenceIds: arc3Evidence
          .filter(ev =>
            [
              'ev_arc3_001_journal',
              'ev_arc3_001_references',
              'ev_arc3_001_report'
            ].includes(ev.id)
          )
          .map(ev => ev.id)
      },
      {
        id: 'security',
        name: 'Security Investigation',
        description: 'Internal audits, classified findings, and anomaly reports',
        evidenceIds: arc3Evidence
          .filter(ev =>
            [
              'ev_arc3_001_audit',
              'ev_arc3_001_security',
              'ev_arc3_001_classified'
            ].includes(ev.id)
          )
          .map(ev => ev.id)
      }
    ]
  },

  {
    id: "arc3_mem_002",
    title: "The Missing Author",
    summary: "A highly influential research paper is discovered to have been written by a person who never existed.",
    description: `# The Missing Author

## Historical Overview

For nearly ten years, historians and researchers relied upon a landmark publication concerning early digital preservation systems.

The paper was frequently cited.

Universities taught its conclusions.

Government agencies referenced its findings.

No concerns were ever raised regarding its authenticity.

That changed during an Archive integrity review.

Investigators attempted to verify the author's identity.

No records were found.

## Investigation

Researchers expanded the search.

Birth records were examined.

University archives were contacted.

Employment histories were reviewed.

International databases were searched.

Nothing was discovered.

The individual appeared nowhere in human history.

Yet the paper undeniably existed.

Its references were legitimate.

Its conclusions were accurate.

Its influence was undeniable.

## Public Debate

The revelation divided the research community.

Some believed the author had used an elaborate pseudonym.

Others argued that the Archive itself had somehow generated the publication.

Such suggestions were widely dismissed.

At the time.

## Historical Significance

The Missing Author represented the first known case where knowledge appeared disconnected from any identifiable creator.

The incident raised questions that would haunt Archive researchers for decades.

If information could exist without an origin, what exactly was the Archive becoming?`,
    category: MemoryCategory.TECHNOLOGY,
    rarity: MemoryRarity.RARE,
    difficulty: MemoryDifficulty.LEVEL_4,
    decisionWeight: DecisionWeight.HIGH,
    archetype: MemoryArchetype.MYSTERY,
    artifactType: ArtifactType.RESEARCH_PAPER,
    impact: {
      compassion: 0,
      progress: 2,
      truth: -4,
      freedom: 0,
      power: 2,
      legacy: 4
    },
    corruptionScore: 8,
    truthScore: 38,
    investigationCost: 35,
    evidenceIds: [
      "ev_arc3_002_paper",
      "ev_arc3_002_identity",
      "ev_arc3_002_university",
      "ev_arc3_002_interview",
      "ev_arc3_002_forensic",
      "ev_arc3_002_archive"
    ],
    contradictionIds: [],
    corruptionIds: [],
    tags: ["archive", "research", "identity", "author", "2104"],
    era: "2104",
    investigationPaths: [
      {
        id: 'academic',
        name: 'Academic Records',
        description: 'Publication history and institutional verification',
        evidenceIds: arc3Evidence
          .filter(ev =>
            [
              'ev_arc3_002_paper',
              'ev_arc3_002_university',
              'ev_arc3_002_forensic'
            ].includes(ev.id)
          )
          .map(ev => ev.id)
      },
      {
        id: 'identity',
        name: 'Identity Investigation',
        description: 'Personal records, interviews, and Archive searches',
        evidenceIds: arc3Evidence
          .filter(ev =>
            [
              'ev_arc3_002_identity',
              'ev_arc3_002_interview',
              'ev_arc3_002_archive'
            ].includes(ev.id)
          )
          .map(ev => ev.id)
      }
    ]
  }
];