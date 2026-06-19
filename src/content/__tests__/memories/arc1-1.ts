import {
  Memory,
  MemoryCategory,
  MemoryRarity,
  ArtifactType,
} from "../../../engine/shared/enums";

export const arc1Memories: Memory[] = [
  {
    id: "ARC1-MEM-001",

    title: "The Day the President Never Spoke",

    summary:
      "A synthetic video of a world leader announcing military action triggered global panic despite the speech never having occurred.",

    description: `
# The Day the President Never Spoke

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

Future generations would question whether the problem had been much deeper.
`,

    category: MemoryCategory.POLITICS,

    rarity: MemoryRarity.UNCOMMON,

    investigationPaths: [
      {
        id: "ARC1-PATH-001-A",
        name: "Government Records",
        description:
          "Investigate official responses and classified communications.",
        type: ArtifactType.GOVERNMENT_DOCUMENT,
        evidenceIds: [],
      },
      {
        id: "ARC1-PATH-001-B",
        name: "Witness Accounts",
        description:
          "Review testimonies from citizens who viewed the broadcast.",
        type: ArtifactType.TESTIMONY,
        evidenceIds: [],
      },
      {
        id: "ARC1-PATH-001-C",
        name: "Media Analysis",
        description:
          "Analyze forensic reports regarding the recording.",
        type: ArtifactType.TECHNICAL,
        evidenceIds: [],
      },
    ],
  },

  {
    id: "ARC1-MEM-002",

    title: "The Funeral That Never Happened",

    summary:
      "Millions remember attending the public funeral of a beloved musician despite a lack of evidence that the event ever occurred.",

    description: `
# The Funeral That Never Happened

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

Whether the funeral occurred, was misremembered, or represented something else entirely remains unresolved.
`,

    category: MemoryCategory.CULTURE,

    rarity: MemoryRarity.RARE,

    investigationPaths: [
      {
        id: "ARC1-PATH-002-A",
        name: "Family Archives",
        description:
          "Examine personal collections and preserved photographs.",
        type: ArtifactType.PERSONAL,
        evidenceIds: [],
      },
      {
        id: "ARC1-PATH-002-B",
        name: "Municipal Records",
        description:
          "Search city permits and event registrations.",
        type: ArtifactType.GOVERNMENT,
        evidenceIds: [],
      },
      {
        id: "ARC1-PATH-002-C",
        name: "Attendee Interviews",
        description:
          "Review statements from individuals claiming attendance.",
        type: ArtifactType.TESTIMONY,
        evidenceIds: [],
      },
    ],
  },

  {
    id: "ARC1-MEM-003",

    title: "The City Seen by Millions",

    summary:
      "A city with no known location became one of the most recognizable places on Earth.",

    description: `
# The City Seen by Millions

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

Its origin remains unknown.
`,

    category: MemoryCategory.URBAN_LEGEND,

    rarity: MemoryRarity.RARE,

    investigationPaths: [
      {
        id: "ARC1-PATH-003-A",
        name: "Cartographic Analysis",
        description:
          "Compare maps and urban planning records.",
        type: ArtifactType.TECHNICAL,
        evidenceIds: [],
      },
      {
        id: "ARC1-PATH-003-B",
        name: "Dream Reports",
        description:
          "Review accounts from individuals reporting recurring dreams.",
        type: ArtifactType.TESTIMONY,
        evidenceIds: [],
      },
      {
        id: "ARC1-PATH-003-C",
        name: "Social Archives",
        description:
          "Analyze the spread of the phenomenon across networks.",
        type: ArtifactType.CORPORATE,
        evidenceIds: [],
      },
    ],
  },
];