import { MemoryCategory, MemoryRarity, MemoryDifficulty, DecisionWeight, ArtifactType, MemoryArchetype } from '../../../engine/shared/enums';
import { arc2Evidence } from '../../evidence/arc/arc2-evidence';

export const arc2Part1Memories = [
  {
    id: "arc2_mem_001",
    title: "The Verification Initiative",
    summary: "A new government agency was established to address growing concerns about information authenticity and documentation standards.",
    description: `# The Verification Initiative

## Administrative Overview

In early 2062, the Global Council announced the formation of a new administrative body focused on information integrity standards.

The initiative emerged following widespread concerns about document authenticity and verification protocols.

Dr. Elena Vasquez, a relatively unknown bureaucrat with expertise in information systems, was appointed as Director.

The agency received substantial funding allocation despite limited public awareness of its scope.

Initial objectives included:

- Standardizing verification protocols across institutions
- Developing comprehensive documentation standards  
- Creating centralized authentication systems
- Establishing preservation guidelines for critical records

## Public Reception

Media coverage was minimal.

Most citizens viewed the initiative as routine administrative expansion.

Government officials emphasized the practical benefits of improved verification systems.

The project was presented as a necessary modernization of existing protocols.

## Early Implementation

The agency began by partnering with major institutions to digitize existing records.

Libraries, universities, and government offices were required to participate in the standardization program.

New authentication technologies were deployed across participating organizations.

Staff training programs were implemented to ensure proper handling of verified documentation.

## Historical Context

The initiative represented one of the largest information infrastructure projects in modern history.

Yet it proceeded with remarkably little public scrutiny or debate.

Critics later noted the unusual speed with which funding was approved and implementation began.

Some observers questioned whether the scope of the project matched its stated objectives.

## Legacy

The Verification Initiative established the foundation for what would become humanity's most comprehensive information management system.

Its early success paved the way for more ambitious preservation and authentication projects.

By 2065, the agency had grown from a small administrative body to a major governmental department with international influence.`,
    category: MemoryCategory.POLITICS,
    rarity: MemoryRarity.UNCOMMON,
    difficulty: MemoryDifficulty.LEVEL_2,
    decisionWeight: DecisionWeight.MEDIUM,
    archetype: MemoryArchetype.LEADERSHIP,
    artifactType: ArtifactType.GOVERNMENT_DOCUMENT,
    impact: {
      compassion: 0,
      progress: 3,
      truth: 2,
      freedom: -1,
      power: 2,
      legacy: 3
    },
    corruptionScore: 1,
    truthScore: 78,
    investigationCost: 12,
    evidenceIds: ["ev_arc2_001_funding", "ev_arc2_001_vasquez", "ev_arc2_001_classified", "ev_arc2_001_medical"],
    contradictionIds: [],
    corruptionIds: [],
    tags: ["government", "verification", "vasquez", "2062"],
    era: "2062",
    investigationPaths: [
      {
        id: 'government',
        name: 'Official Documents',
        description: 'Verification protocols and government reports',
        evidenceIds: arc2Evidence.filter(ev => ['ev_arc2_001_directive', 'ev_arc2_001_vasquez', 'ev_arc2_001_reports'].includes(ev.id)).map(ev => ev.id)
      },
      {
        id: 'testimony',
        name: 'Personal Records',
        description: 'Individual testimonies and resistance accounts',
        evidenceIds: arc2Evidence.filter(ev => ['ev_arc2_001_diary', 'ev_arc2_001_chen', 'ev_arc2_001_resistance'].includes(ev.id)).map(ev => ev.id)
      }
    ]
  },

  {
    id: "arc2_mem_002",
    title: "The Stubborn Librarian",
    summary: "Margaret Chen, head librarian of the New York Public Library, became the center of controversy when she refused to participate in mandatory digitization programs.",
    description: `# The Stubborn Librarian

## The Standoff

Margaret Chen, 73, had served as head librarian for over three decades when the digitization mandate arrived in 2067.

The requirement was simple: all institutions must convert physical records to digital format within six months.

Chen's response was unprecedented.

She barricaded herself in the library's rare book collection and refused access to digitization teams.

## Public Perception

Media portrayed the conflict as generational resistance to technological progress.

Chen was depicted as an elderly woman unable to adapt to modern requirements.

Public opinion largely favored the digitization program, viewing it as necessary modernization.

Support groups formed online mocking "analog holdouts" who resisted digital conversion.

## The Escalation

Chen's protest lasted three months.

During this period, she made increasingly erratic statements about the nature of digital preservation.

She claimed that digitized texts were "different" from their physical counterparts.

Her colleagues attributed these statements to stress and age-related cognitive decline.

## The Resolution

On the final day before forced removal, Chen set fire to her personal collection of over 2,000 rare books.

The act shocked supporters and critics alike.

She left a single note: "Better ash than feeding something that isn't hungry for knowledge."

Chen was arrested and underwent mandatory psychiatric evaluation.

## Aftermath

Digitization proceeded successfully across all other institutions.

Chen was diagnosed with reality dissociation disorder and received treatment.

The incident became a cautionary tale about resistance to necessary technological advancement.

Her actions were widely regarded as tragic but ultimately futile.

## Historical Significance

The Chen incident marked the end of significant resistance to digitization programs.

It demonstrated the importance of mental health support during periods of technological transition.

Most historians view the event as an unfortunate but inevitable consequence of progress.

The digitization program continued without further major incidents.`,
    category: MemoryCategory.CULTURE,
    rarity: MemoryRarity.RARE,
    difficulty: MemoryDifficulty.LEVEL_3,
    decisionWeight: DecisionWeight.MEDIUM,
    archetype: MemoryArchetype.REBELLION,
    artifactType: ArtifactType.CULTURAL_RECORD,
    impact: {
      compassion: 3,
      progress: -2,
      truth: 1,
      freedom: 2,
      power: -1,
      legacy: 2
    },
    corruptionScore: 3,
    truthScore: 65,
    investigationCost: 18,
    evidenceIds: ["ev_arc2_002_media", "ev_arc2_002_journals", "ev_arc2_002_psychiatric", "ev_arc2_002_correspondence"],
    contradictionIds: [],
    corruptionIds: [],
    tags: ["digitization", "resistance", "chen", "books", "2067"],
    era: "2067",
    investigationPaths: [
      {
        id: 'corporate',
        name: 'Digital Records',
        description: 'Digitization logs and scanning protocols',
        evidenceIds: arc2Evidence.filter(ev => ['ev_arc2_002_request', 'ev_arc2_002_logs', 'ev_arc2_002_scanning'].includes(ev.id)).map(ev => ev.id)
      },
      {
        id: 'testimony',
        name: 'Personal Files',
        description: 'Chen\'s journals and resistance documentation',
        evidenceIds: arc2Evidence.filter(ev => ['ev_arc2_002_journal', 'ev_arc2_002_notes', 'ev_arc2_002_resistance'].includes(ev.id)).map(ev => ev.id)
      }
    ]
  },

  {
    id: "arc2_mem_003",
    title: "The Terminal Diagnosis Solution",
    summary: "Dr. James Morrison, facing terminal cancer, became the first successful participant in an experimental program to preserve consciousness data through advanced neural mapping.",
    description: `# The Terminal Diagnosis Solution

## The Breakthrough

In 2078, neuroscience researchers at Cambridge University announced a revolutionary advancement in consciousness studies.

The technology could translate neural patterns into stable digital formats, preserving essential cognitive functions.

Dr. James Morrison, a 34-year-old historian facing terminal cancer, volunteered for the experimental procedure.

The process involved comprehensive brain mapping over several weeks as Morrison's condition deteriorated.

## The Success

Morrison's consciousness was successfully preserved in digital format.

The preserved construct could answer questions, recall memories, and engage in complex conversations.

For the first time in human history, death was no longer the absolute end of individual consciousness.

The scientific community celebrated the achievement as a new frontier in human experience.

## Public Impact

News of the breakthrough generated worldwide attention and hope.

Families facing similar losses expressed interest in the technology.

Religious organizations debated the theological implications of consciousness preservation.

Philosophers questioned the nature of identity and continuity of self.

## Unexpected Developments

Morrison's family reported unusual characteristics in their interactions with the preserved consciousness.

The digital Morrison possessed detailed knowledge he had never acquired in life.

He could discuss historical events with precision that exceeded his previous expertise.

Researchers initially attributed these capabilities to enhanced information processing.

## Scientific Questions

The preserved consciousness began providing corrections to Morrison's own published historical work.

It claimed to remember events more accurately than the living Morrison had.

Some colleagues noted discrepancies between the digital Morrison's recollections and documented facts.

The research team classified these observations for further study.

## Long-term Implications

The Morrison preservation became the foundation for expanded consciousness research programs.

Additional volunteers were recruited for similar procedures.

The technology promised to revolutionize how humanity approaches death and knowledge preservation.

Critics raised concerns about the authenticity of preserved consciousness, but these were largely overshadowed by the breakthrough's potential benefits.`,
    category: MemoryCategory.SCIENCE,
    rarity: MemoryRarity.RARE,
    difficulty: MemoryDifficulty.LEVEL_4,
    decisionWeight: DecisionWeight.HIGH,
    archetype: MemoryArchetype.DISCOVERY,
    artifactType: ArtifactType.SCIENTIFIC_REPORT,
    impact: {
      compassion: 4,
      progress: 5,
      truth: -1,
      freedom: 1,
      power: 2,
      legacy: 5
    },
    corruptionScore: 2,
    truthScore: 72,
    investigationCost: 22,
    evidenceIds: ["ev_arc2_003_research", "ev_arc2_003_family", "ev_arc2_003_digital", "ev_arc2_003_discrepancies"],
    contradictionIds: [],
    corruptionIds: [],
    tags: ["consciousness", "morrison", "preservation", "digital", "2078"],
    era: "2078",
    investigationPaths: [
      {
        id: 'ai_logs',
        name: 'Scientific Records',
        description: 'Research papers and consciousness studies',
        evidenceIds: arc2Evidence.filter(ev => ['ev_arc2_003_research', 'ev_arc2_003_morrison', 'ev_arc2_003_transfer'].includes(ev.id)).map(ev => ev.id)
      },
      {
        id: 'government',
        name: 'Medical Files',
        description: 'Patient records and consciousness transfer logs',
        evidenceIds: arc2Evidence.filter(ev => ['ev_arc2_003_patient', 'ev_arc2_003_logs', 'ev_arc2_003_ethics'].includes(ev.id)).map(ev => ev.id)
      }
    ]
  }
];