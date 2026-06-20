import { MemoryCategory, MemoryRarity, MemoryDifficulty, DecisionWeight, ArtifactType, MemoryArchetype } from '../../../engine/shared/enums';
import { arc1Evidence } from '../../evidence/arc/arc1-evidence';

export const arc1Part1Memories = [
  {
    id: "arc1_mem_001",
    title: "The Day the President Never Spoke",
    summary: "A synthetic video of a world leader announcing military action triggered global panic despite the speech never having occurred.",
    description: `# The Day the President Never Spoke

## Historical Overview

On March 18, 2037, citizens across the world awoke to a broadcast that would become one of the defining moments of the early Information Era.

The recording appeared authentic.

A major world leader stood behind an official podium, delivered a prepared address, and announced military action against a neighboring nation.

Within hours:

- Global stock markets plunged.
- Military units entered heightened readiness.
- Emergency meetings were convened by international organizations.
- Millions of citizens began preparing for conflict.

News agencies rushed to verify the statement.

Government officials remained silent.

The uncertainty lasted nearly six hours.

By midday, authorities released an unexpected response:

> The speech had never occurred.

The president had not delivered any public address that morning.

In fact, records indicated that the individual was asleep at the time the broadcast supposedly aired.

## Verification Efforts

Independent analysts quickly determined that the video had been generated using advanced synthetic media systems.

The voice was artificial.

The facial movements were artificial.

The environment itself was artificial.

The recording represented one of the most convincing fabricated broadcasts ever created.

## Public Reaction

The revelation sparked worldwide concern.

If a fabricated video could trigger military mobilization, what other forms of information could no longer be trusted?

Governments proposed verification frameworks.

Technology companies introduced authentication standards.

Academic institutions launched emergency research initiatives.

Most experts believed the crisis had been contained.

## Historical Significance

Modern historians often identify this incident as the first major warning that humanity's relationship with truth was changing.

At the time, many believed the threat was misinformation.

Future generations would question whether the problem had been much deeper.`,
    category: MemoryCategory.POLITICS,
    rarity: MemoryRarity.UNCOMMON,
    difficulty: MemoryDifficulty.LEVEL_2,
    decisionWeight: DecisionWeight.HIGH,
    archetype: MemoryArchetype.FAILURE,
    artifactType: ArtifactType.GOVERNMENT_DOCUMENT,
    impact: {
      compassion: -2,
      progress: -3,
      truth: -4,
      freedom: -2,
      power: 1,
      legacy: -1
    },
    corruptionScore: 1,
    truthScore: 85,
    investigationCost: 15,
    evidenceIds: ["ev_arc1_001_gov", "ev_arc1_001_classified", "ev_arc1_001_witness", "ev_arc1_001_social", "ev_arc1_001_forensic", "ev_arc1_001_tech"],
    contradictionIds: [],
    corruptionIds: [],
    tags: ["synthetic_media", "government", "crisis", "2037"],
    era: "2037",
    investigationPaths: [
      {
        id: 'government',
        name: 'Government Records',
        description: 'Official presidential verification and classified files',
        evidenceIds: arc1Evidence.filter(ev => ['ev_arc1_001_gov', 'ev_arc1_001_witness', 'ev_arc1_001_classified'].includes(ev.id)).map(ev => ev.id)
      },
      {
        id: 'corporate',
        name: 'Media Analysis', 
        description: 'Digital forensics and social media investigation',
        evidenceIds: arc1Evidence.filter(ev => ['ev_arc1_001_forensic', 'ev_arc1_001_social', 'ev_arc1_001_tech'].includes(ev.id)).map(ev => ev.id)
      }
    ]
  },

  {
    id: "arc1_mem_002", 
    title: "The Funeral That Never Happened",
    summary: "Millions remember attending the public funeral of a beloved musician despite a lack of evidence that the event ever occurred.",
    description: `# The Funeral That Never Happened

## Historical Overview

In 2041, the world mourned the death of one of its most influential musicians.

Tributes appeared across every major platform.

Public gatherings were organized in hundreds of cities.

According to public memory, a large state-sponsored funeral was held several weeks later.

For years, the event was considered one of the largest memorial gatherings in modern history.

Many attendees described it vividly.

They recalled the weather.

They recalled the music.

They recalled conversations with strangers.

Some even preserved photographs believed to have been taken during the ceremony.

## The Discovery

Questions first emerged during a cultural preservation initiative.

Researchers attempted to compile official records of the funeral.

Unexpectedly, they found none.

No venue reservation existed.

No transportation records existed.

No government permits existed.

No verified photography could be authenticated.

The deeper researchers searched, the stranger the situation became.

## Public Response

The findings were initially dismissed.

Millions clearly remembered the event.

Many could describe details with remarkable confidence.

Entire families shared memories of attending together.

Yet every attempt to establish a definitive historical record failed.

## Historical Significance

The incident remains one of the most debated examples of collective memory in recorded history.

Whether the funeral occurred, was misremembered, or represented something else entirely remains unresolved.`,
    category: MemoryCategory.CULTURE,
    rarity: MemoryRarity.RARE,
    difficulty: MemoryDifficulty.LEVEL_3,
    decisionWeight: DecisionWeight.MEDIUM,
    archetype: MemoryArchetype.SACRIFICE,
    artifactType: ArtifactType.CULTURAL_RECORD,
    impact: {
      compassion: 2,
      progress: -1,
      truth: -3,
      freedom: 0,
      power: -1,
      legacy: 3
    },
    corruptionScore: 0,
    truthScore: 45,
    investigationCost: 20,
    evidenceIds: ["ev_arc1_002_family", "ev_arc1_002_photos", "ev_arc1_002_permits", "ev_arc1_002_municipal", "ev_arc1_002_interviews", "ev_arc1_002_testimonies"],
    contradictionIds: [],
    corruptionIds: [],
    tags: ["collective_memory", "culture", "musician", "2041"],
    era: "2041",
    investigationPaths: [
      {
        id: 'government',
        name: 'Official Records',
        description: 'Municipal permits and transportation audits',
        evidenceIds: arc1Evidence.filter(ev => ['ev_arc1_002_permits', 'ev_arc1_002_municipal'].includes(ev.id)).map(ev => ev.id)
      },
      {
        id: 'testimony',
        name: 'Personal Accounts',
        description: 'Family photos, diaries, and witness testimonies',
        evidenceIds: arc1Evidence.filter(ev => ['ev_arc1_002_family', 'ev_arc1_002_photos', 'ev_arc1_002_interviews', 'ev_arc1_002_testimonies'].includes(ev.id)).map(ev => ev.id)
      }
    ]
  },

  {
    id: "arc1_mem_003",
    title: "The City Seen by Millions", 
    summary: "A city with no known location became one of the most recognizable places on Earth.",
    description: `# The City Seen by Millions

## Historical Overview

Beginning in 2044, images of an unfamiliar city began spreading through social networks.

The city appeared futuristic.

Its architecture combined elements from numerous cultures and time periods.

At first the images were dismissed as digital artwork.

Then something unusual happened.

People began recognizing it.

## Shared Recognition

Surveys conducted over the following months produced astonishing results.

Millions claimed familiarity with the location.

Some insisted they had visited.

Others believed they had lived there.

A smaller group reported recurring dreams involving the city.

Despite this widespread recognition, no physical location matched the descriptions provided.

## Investigation Efforts

International mapping organizations conducted extensive reviews.

Satellite archives were searched.

Construction records were examined.

Urban historians investigated possible inspirations.

No evidence of the city could be found.

## Historical Significance

The City Seen by Millions remains one of the most famous unexplained memory phenomena of the twenty-first century.

Its origin remains unknown.`,
    category: MemoryCategory.EXPLORATION,
    rarity: MemoryRarity.RARE,
    difficulty: MemoryDifficulty.LEVEL_4,
    decisionWeight: DecisionWeight.HIGH,
    archetype: MemoryArchetype.DISCOVERY,
    artifactType: ArtifactType.PHOTOGRAPH,
    impact: {
      compassion: 0,
      progress: -2,
      truth: -4,
      freedom: -1,
      power: 0,
      legacy: -2
    },
    corruptionScore: 1,
    truthScore: 25,
    investigationCost: 25,
    evidenceIds: ["ev_arc1_003_maps", "ev_arc1_003_satellite", "ev_arc1_003_dreams", "ev_arc1_003_psychology", "ev_arc1_003_social", "ev_arc1_003_viral"],
    contradictionIds: [],
    corruptionIds: [],
    tags: ["phantom_city", "dreams", "collective_memory", "2044"],
    era: "2044",
    investigationPaths: [
      {
        id: 'government',
        name: 'Digital Investigation',
        description: 'Image analysis, satellite data, and viral content tracking',
        evidenceIds: arc1Evidence.filter(ev => ['ev_arc1_003_satellite', 'ev_arc1_003_social', 'ev_arc1_003_viral'].includes(ev.id)).map(ev => ev.id)
      },
      {
        id: 'testimony',
        name: 'Dream Research',
        description: 'School archives, sleep studies, and pattern analysis',
        evidenceIds: arc1Evidence.filter(ev => ['ev_arc1_003_dreams', 'ev_arc1_003_maps', 'ev_arc1_003_psychology'].includes(ev.id)).map(ev => ev.id)
      }
    ]
  }
];