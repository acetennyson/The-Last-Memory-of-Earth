import { MemoryCategory, MemoryRarity, MemoryDifficulty, DecisionWeight, ArtifactType, MemoryArchetype } from '../../../engine/shared/enums';
import { ordinaryBatch3Evidence } from '../../evidence/ordinary/ordinary-batch3-evidence';

export const ordinaryBatch3Memories = [

  // ─────────────────────────────────────────────────────────────
  // ord_mem_016 — FAMILY / LOVE — the dog who waited
  // ─────────────────────────────────────────────────────────────
  {
    id: "ord_mem_016",
    title: "The Dog Who Waited at Gate 14",
    summary: "After his owner died suddenly while traveling, an elderly retriever named Biscuit returned to the same airport gate every day for six weeks, walked there by neighbors who took turns, until the household finally understood he wasn't going to stop on his own.",
    description: `# The Dog Who Waited at Gate 14

## Historical Overview

Hans Lindqvist was 68 when he collapsed of a sudden cardiac event in the international terminal of Malmö Airport, three hours before a flight he had taken twice a year for a decade to visit his sister in Bergen.

His dog, Biscuit, a twelve-year-old golden retriever, was not with him. Hans's neighbor, Ingrid Bauer, was watching Biscuit that week, as she always did during his trips.

Hans did not come home.

## What Biscuit Did

Three days after the funeral, Ingrid took Biscuit for his usual evening walk. Without any signal she understood, he pulled toward the bus stop that led, after two transfers, to the airport.

She assumed it was coincidence and redirected him.

The next day, he did it again. And the next.

On the fourth day, she let him lead. Two buses, forty minutes, and he walked — calm, certain, not frantic — directly to Gate 14, the gate Hans had always departed from for his Bergen flights. He lay down facing the boarding doors and did not move for an hour.

## The Six Weeks

Word spread through the small apartment building where Hans had lived for thirty years. A rotation formed without anyone organizing it formally — whoever had time that day took Biscuit to the airport, let him lie at Gate 14 for however long he wanted, and brought him home.

Airport staff began to recognize them. A gate agent named Pernilla Eklund started saving her break time to sit with whoever had brought him.

"Nobody told him Hans wasn't coming back through that door," she said. "I don't think there was a way to tell him that would have meant anything. So we just let him wait where he needed to wait."

## The End of the Waiting

After six weeks, Biscuit's visits grew shorter. Then less frequent. By the tenth week, he no longer pulled toward the bus stop.

Ingrid, who eventually adopted him permanently, said she never decided he had "gotten over it." She said it differently:

"I think he finished something. I don't know what to call it besides that."

## Historical Significance

The story circulated locally for years, retold at the building's small gatherings, by people who had taken their turn walking an old dog to an airport gate for reasons that made complete sense to all of them and very little sense to anyone trying to explain it from outside.

Biscuit lived another four years with Ingrid. He is buried in her garden, facing east, for no reason she has ever explained to anyone who asked.`,
    category: MemoryCategory.FAMILY,
    rarity: MemoryRarity.UNCOMMON,
    difficulty: MemoryDifficulty.LEVEL_1,
    decisionWeight: DecisionWeight.LOW,
    archetype: MemoryArchetype.SACRIFICE,
    artifactType: ArtifactType.PERSONAL_DIARY,
    impact: {
      compassion: 5,
      progress: 0,
      truth: 0,
      freedom: 1,
      power: 0,
      legacy: 2
    },
    corruptionScore: 0,
    truthScore: 93,
    investigationCost: 6,
    evidenceIds: ["ev_ord_016_ingrid", "ev_ord_016_eklund", "ev_ord_016_rotation", "ev_ord_016_obituary", "ev_ord_016_adoption", "ev_ord_016_grave"],
    contradictionIds: [],
    corruptionIds: [],
    tags: ["dog", "grief", "love", "community", "2026"],
    era: "2026",
    investigationPaths: [
      {
        id: 'testimony',
        name: "Ingrid's Account",
        description: "The neighbor who walked him, and the eventual end of the waiting",
        evidenceIds: ordinaryBatch3Evidence.filter((ev: any) => ['ev_ord_016_ingrid', 'ev_ord_016_adoption', 'ev_ord_016_grave'].includes(ev.id)).map((ev: any) => ev.id)
      },
      {
        id: 'corporate',
        name: 'The Airport',
        description: "Staff recollections and the building's informal rotation",
        evidenceIds: ordinaryBatch3Evidence.filter((ev: any) => ['ev_ord_016_eklund', 'ev_ord_016_rotation', 'ev_ord_016_obituary'].includes(ev.id)).map((ev: any) => ev.id)
      }
    ]
  },

  // ─────────────────────────────────────────────────────────────
  // ord_mem_017 — FAMILY / LOVE — the proposal at 84
  // ─────────────────────────────────────────────────────────────
  {
    id: "ord_mem_017",
    title: "Married at Eighty-Four, After Sixty Years of Almost",
    summary: "Two childhood sweethearts who separated in 1987 over a misunderstanding neither ever fully explained reconnected by accident at a pharmacy counter in 2031, and married eight months later — sixty-one years after their first date.",
    description: `# Married at Eighty-Four, After Sixty Years of Almost

## The First Time

Eleanor Whitfield and Robert Kessler met in 1968 at a county fair in rural Indiana, both nineteen, both there with other people they were not particularly attached to. They were engaged within a year and spent the next nineteen years together.

In 1987, they ended their engagement. Neither has ever fully explained why, even to their respective families. Eleanor married someone else in 1989. Robert never married.

## Sixty-One Years Later

In March 2031, Eleanor — recently widowed, 82 years old — was standing at a pharmacy counter in the same Indiana county, picking up a prescription, when she heard a voice behind her ask the pharmacist a question in a tone she recognized before she recognized the face.

Robert was 83. He had moved back to the county two years earlier to be near his late brother's family.

Neither has given a fully consistent account of who spoke first.

## What Happened After

They began having coffee weekly. Then twice weekly. Eleanor's daughter, Carol, described the change in her mother as "the most disorienting wonderful thing I have ever watched happen to a person."

In November 2031, Robert proposed at the same county fairground where they had met in 1968 — the fair itself long since relocated, the field now part of a community park. He had, Eleanor later discovered, kept the original engagement ring from 1968 in a drawer for forty-four years, through two house moves, "because I didn't know what else to do with it and I couldn't throw it away."

## The Wedding

They married in June 2032 in a small ceremony attended by what remained of both their original 1968 wedding parties — three people, all in their eighties, all of whom Eleanor described as "in disbelief in the most delighted possible way."

When asked by a local reporter what had happened in 1987, both gave the same answer, separately, without coordinating:

> "It doesn't matter anymore. It mattered for a long time. It doesn't now."

## Historical Significance

The story received modest regional press attention, framed predictably as a feel-good piece about lasting love.

Eleanor's daughter, in a later interview, offered a more complicated reflection:

> "I don't think this is a story about love conquering everything. I think it's a story about two people who were given an unbelievable, undeserved second chance very late, and who were wise enough at eighty-three to not ask too many questions about why."

Eleanor and Robert were married for six years before Robert's death in 2038. Eleanor, in her own words, considers it "the correct amount of time, even though I wanted more, because I got the part I thought I'd lost completely."`,
    category: MemoryCategory.FAMILY,
    rarity: MemoryRarity.UNCOMMON,
    difficulty: MemoryDifficulty.LEVEL_1,
    decisionWeight: DecisionWeight.LOW,
    archetype: MemoryArchetype.ACHIEVEMENT,
    artifactType: ArtifactType.PERSONAL_DIARY,
    impact: {
      compassion: 4,
      progress: 0,
      truth: 1,
      freedom: 2,
      power: 0,
      legacy: 3
    },
    corruptionScore: 0,
    truthScore: 90,
    investigationCost: 6,
    evidenceIds: ["ev_ord_017_meeting", "ev_ord_017_ring", "ev_ord_017_carol", "ev_ord_017_wedding", "ev_ord_017_press", "ev_ord_017_later"],
    contradictionIds: [],
    corruptionIds: [],
    tags: ["love", "marriage", "second-chance", "family", "2031"],
    era: "2031",
    investigationPaths: [
      {
        id: 'testimony',
        name: 'Eleanor and Robert',
        description: "Their own accounts of meeting again, and the kept ring",
        evidenceIds: ordinaryBatch3Evidence.filter((ev: any) => ['ev_ord_017_meeting', 'ev_ord_017_ring', 'ev_ord_017_later'].includes(ev.id)).map((ev: any) => ev.id)
      },
      {
        id: 'testimony',
        name: "Carol's Perspective",
        description: "The daughter's more complicated reading of the story, and press coverage",
        evidenceIds: ordinaryBatch3Evidence.filter((ev: any) => ['ev_ord_017_carol', 'ev_ord_017_wedding', 'ev_ord_017_press'].includes(ev.id)).map((ev: any) => ev.id)
      }
    ]
  },

  // ─────────────────────────────────────────────────────────────
  // ord_mem_018 — NATURE / FAMILY — the parrot who outlived three owners
  // ─────────────────────────────────────────────────────────────
  {
    id: "ord_mem_018",
    title: "The Parrot Who Carried Four Names",
    summary: "An African grey parrot named Atlas passed through four families over 67 years after his original owner's death, and was documented speaking, unprompted, in the voices and phrases of owners who had died decades before later family members were even born.",
    description: `# The Parrot Who Carried Four Names

## The First Owner

Atlas, an African grey parrot, was acquired in 1968 by Dorothy Hartley, a widow in Adelaide, Australia. African greys can live sixty to eighty years in captivity, a fact Dorothy did not fully consider when she bought a six-month-old bird at age 61.

Dorothy died in 1991, at which point Atlas — 23 years old, fully capable of decades more life — passed to her son's family.

## The Inheritance Problem No One Plans For

Atlas outlived Dorothy's son too, who died in 2009. He then passed to a granddaughter, Marisol, who had never met Dorothy and had only vague childhood memories of the bird at all.

Marisol, in a 2015 interview for a local radio segment about exotic pet longevity, described an experience that unsettled her for years:

> "He said things in a voice that wasn't anyone living. Phrases. 'Time for tea, love.' Things my grandmother apparently used to say — I never knew her, she died before I was old enough to remember her voice. My father confirmed it. That was her exact phrase. The bird had no reason to know it except that he'd heard it for twenty-three years before any of us existed to him."

## What Atlas Carried

Over the decades, researchers studying long-lived companion parrots have documented this phenomenon as unremarkable from a behavioral standpoint — African greys have excellent long-term vocal memory and can retain learned phrases for the duration of their lives, resurfacing them unpredictably, sometimes after years of silence on a given phrase.

What made Atlas's case notable was the sheer span: by 2015, he carried vocal fragments from a person two human generations removed from anyone currently caring for him.

Marisol's daughter, born 2012, grew up hearing her great-great-grandmother's verbal mannerisms from a bird, despite no human in the household ever having met the woman.

## The Fourth Family

Marisol, unable to continue caring for Atlas due to a move that didn't accommodate him, transferred him in 2019 to a specialist avian sanctuary in Queensland that specifically takes in elderly long-lived parrots whose human families can no longer manage their lifespan.

Sanctuary staff confirmed in a 2024 update that Atlas, now 56, still occasionally produces the "time for tea, love" phrase, along with several others not traceable to any of his subsequent three families — phrases sanctuary staff believe originate from Dorothy Hartley, who has now been dead for 33 years.

## Historical Significance

Atlas's case is frequently cited in companion animal welfare discussions about the responsibility of acquiring long-lived species, but Marisol, reflecting on it years later, offered a different framing:

> "Everyone talks about it like a cautionary tale about not buying a bird that'll outlive you. I think about it as: my grandmother is still, in some very small specific way, present in the world, in a voice, saying the thing she used to say. I don't know how to feel about that except moved."`,
    category: MemoryCategory.NATURE,
    rarity: MemoryRarity.RARE,
    difficulty: MemoryDifficulty.LEVEL_1,
    decisionWeight: DecisionWeight.LOW,
    archetype: MemoryArchetype.PRESERVATION,
    artifactType: ArtifactType.PERSONAL_DIARY,
    impact: {
      compassion: 3,
      progress: 0,
      truth: 1,
      freedom: 1,
      power: 0,
      legacy: 4
    },
    corruptionScore: 0,
    truthScore: 91,
    investigationCost: 8,
    evidenceIds: ["ev_ord_018_dorothy", "ev_ord_018_marisol", "ev_ord_018_radio", "ev_ord_018_sanctuary", "ev_ord_018_research", "ev_ord_018_update"],
    contradictionIds: [],
    corruptionIds: [],
    tags: ["parrot", "memory", "generations", "pets", "1968"],
    era: "1968-2024",
    investigationPaths: [
      {
        id: 'testimony',
        name: "Marisol's Account",
        description: "What it was like inheriting a voice she'd never met",
        evidenceIds: ordinaryBatch3Evidence.filter((ev: any) => ['ev_ord_018_marisol', 'ev_ord_018_radio'].includes(ev.id)).map((ev: any) => ev.id)
      },
      {
        id: 'ai_logs',
        name: 'The Record',
        description: "Dorothy's original ownership, the research on vocal retention, and the sanctuary's confirmation",
        evidenceIds: ordinaryBatch3Evidence.filter((ev: any) => ['ev_ord_018_dorothy', 'ev_ord_018_research', 'ev_ord_018_sanctuary', 'ev_ord_018_update'].includes(ev.id)).map((ev: any) => ev.id)
      }
    ]
  },

  // ─────────────────────────────────────────────────────────────
  // ord_mem_019 — FAMILY / FRIENDSHIP — the friendship that crossed a war
  // ─────────────────────────────────────────────────────────────
  {
    id: "ord_mem_019",
    title: "Pen Pals on Opposite Sides",
    summary: "Two twelve-year-old girls, one in Kyiv and one in a small Russian town, had been pen pals for three years through a children's letter exchange program when the war between their countries began. They kept writing anyway, for as long as the mail could still find a way through.",
    description: `# Pen Pals on Opposite Sides

## How It Started

In 2019, a children's international correspondence program matched Yulia Sereda, age nine, in Kyiv, with Nastya Volkova, age nine, in a small town outside Voronezh, Russia. The program, run through their respective schools, paired children to exchange letters about ordinary life — pets, school, favorite foods, drawings.

Over three years, the girls exchanged 41 letters. They discussed a shared interest in horses, traded drawings, and developed the specific shorthand and inside jokes that long correspondences between children tend to produce.

## When the War Began

In early 2022, postal connections between Ukraine and Russia became severely disrupted. Yulia's family relocated twice within Ukraine during the early months of the conflict. Nastya's letters, when they could be sent at all, took unpredictable and circuitous routes — sometimes through third countries, sometimes simply lost.

Both sets of parents, separately and without coordinating, made the same decision: they did not tell their daughters to stop writing.

## What They Wrote

The surviving correspondence from this period, later collected with both families' permission for a 2027 academic study on childhood resilience during conflict, shows children grappling with an adult catastrophe in distinctly child terms.

Yulia, in a letter that took four months to arrive, written from a relocated apartment in Lviv:

> "I am not mad at you. My mother says I am not allowed to be mad at you specifically, only mad at the war, because you didn't do this. I believe her most days."

Nastya, in a letter sent through a relative in Kazakhstan:

> "I don't understand the news and I don't want to ask my parents because I don't like their faces when they explain it. I would rather know if your horse picture won the school contest."

## The Last Letter

The correspondence continued, with increasing gaps, until 2025, when Yulia's letter — the last confirmed exchange — arrived describing her family's permanent resettlement in Poland.

> "I don't know if mail works from there to you. I am going to write this anyway and see."

No further letters from Nastya have been confirmed received as of the most recent documentation.

## Historical Significance

The Sereda-Volkova correspondence was included, with names changed at the families' initial request and later restored with permission, in research on how children maintain individual relationships across collective conflict.

The researchers' note accompanying the published letters states plainly what the letters themselves never directly address:

> "Neither child ever stopped distinguishing the other from the conflict. This is not naivety. In our assessment, it may be one of the more sophisticated moral distinctions present anywhere in the adult discourse surrounding this war."

Yulia, interviewed for the study at age 17, was asked if she still thought about Nastya.

> "Every time someone says her name is a 'Russian name' like it's a bad word. I think: no, it's Nastya's name. She liked horses too much for her own good and she drew terrible self-portraits and she's twelve forever in my head, the way I'm probably twelve forever in hers, if she still has any of my letters."`,
    category: MemoryCategory.WAR,
    rarity: MemoryRarity.RARE,
    difficulty: MemoryDifficulty.LEVEL_2,
    decisionWeight: DecisionWeight.MEDIUM,
    archetype: MemoryArchetype.PRESERVATION,
    artifactType: ArtifactType.LETTER,
    impact: {
      compassion: 6,
      progress: 0,
      truth: 1,
      freedom: 2,
      power: -1,
      legacy: 3
    },
    corruptionScore: 0,
    truthScore: 92,
    investigationCost: 10,
    evidenceIds: ["ev_ord_019_letters", "ev_ord_019_yulia", "ev_ord_019_nastya", "ev_ord_019_parents", "ev_ord_019_study", "ev_ord_019_interview"],
    contradictionIds: [],
    corruptionIds: [],
    tags: ["friendship", "war", "children", "letters", "2019"],
    era: "2019-2025",
    investigationPaths: [
      {
        id: 'testimony',
        name: 'The Letters',
        description: "Yulia and Nastya's own words across the years",
        evidenceIds: ordinaryBatch3Evidence.filter((ev: any) => ['ev_ord_019_letters', 'ev_ord_019_yulia', 'ev_ord_019_nastya'].includes(ev.id)).map((ev: any) => ev.id)
      },
      {
        id: 'ai_logs',
        name: 'The Study',
        description: "The parents' decision, the academic research, and the later interview",
        evidenceIds: ordinaryBatch3Evidence.filter((ev: any) => ['ev_ord_019_parents', 'ev_ord_019_study', 'ev_ord_019_interview'].includes(ev.id)).map((ev: any) => ev.id)
      }
    ]
  },

  // ─────────────────────────────────────────────────────────────
  // ord_mem_020 — FAMILY — the father who learned to braid hair
  // ─────────────────────────────────────────────────────────────
  {
    id: "ord_mem_020",
    title: "The Man Who Learned to Braid",
    summary: "After his wife's death left him a widower raising a six-year-old daughter alone, a long-haul truck driver spent eight months learning hair braiding from instructional videos and a patient hairdresser, determined his daughter would never feel her mother's absence in something as small as getting ready for school.",
    description: `# The Man Who Learned to Braid

## The Problem He Didn't Expect

When Teresa Mbeki died in a car accident in 2030, her husband Joseph was left raising their daughter Naledi, six, largely alone — his work as a long-haul truck driver having previously been balanced against Teresa's role managing the household's daily rhythms.

Joseph adapted to most of it within weeks: school pickup arrangements with a neighbor, cooking, the logistics of a single working parent.

He had not anticipated his daughter's hair.

Naledi's hair required regular, careful braiding — a skill Teresa had performed daily and that Joseph had never needed to learn. In the weeks after the funeral, Naledi began arriving at school with her hair simply tied back, loose, or — on harder days — uncombed.

A teacher gently raised it with him. Joseph, by his own later account, felt a specific shame distinct from his grief: a sense that he was failing his daughter in a way that was small, visible to every other parent at pickup, and entirely within his power to fix if he simply learned.

## How He Learned

Joseph began watching online braiding tutorials between long-haul shifts, practicing on a foam mannequin head he bought and kept in his truck's sleeper cab.

He sought out Patience Dlamini, a hairdresser in his neighborhood who specialized in children's natural hair care, and asked — somewhat sheepishly, by his own account — if she would teach him directly rather than simply do Naledi's hair for him.

Patience, by her own account, found the request unusual but readily agreed, giving him a standing Sunday appointment for eight months.

> "Most fathers who come in just want me to do it. He wanted to be able to do it himself, every day, for as long as she needed it. I taught a lot of mothers over the years. I don't think I'd taught a father who wanted the actual skill before."

## The Eight Months

Joseph's early attempts, by his own description and confirmed by photographs Naledi kept, were "structurally ambitious and aesthetically chaotic." Naledi, for her part, never once complained about an early braid, even ones that came visibly undone by midday.

By month six, Patience confirmed his technique had become genuinely competent. By month eight, she told him he no longer needed the Sunday sessions.

He kept coming anyway, monthly, "just to check in," for two more years.

## What Naledi Said

Naledi, interviewed years later at age 17 for a community profile on single fatherhood, was asked what she remembered about that period.

> "I don't actually remember the bad braids as bad. I remember every Sunday night, before school, him sitting on the floor behind me with the comb, concentrating so hard, asking if it hurt, genuinely terrified of hurting me. I think I understood, even at six, that he was doing something difficult because he loved me. Six-year-olds understand more about love than people give them credit for."

## Historical Significance

Joseph's story circulated locally and was later picked up in broader discussions about single fathers and culturally specific caregiving skills not traditionally taught to men.

Joseph, asked for comment on the wider attention, offered a characteristically understated response:

> "I don't think what I did was remarkable. I think what was remarkable is that nobody had ever told me I was allowed to learn it. I just decided I was."`,
    category: MemoryCategory.FAMILY,
    rarity: MemoryRarity.UNCOMMON,
    difficulty: MemoryDifficulty.LEVEL_1,
    decisionWeight: DecisionWeight.LOW,
    archetype: MemoryArchetype.SACRIFICE,
    artifactType: ArtifactType.PERSONAL_DIARY,
    impact: {
      compassion: 6,
      progress: 0,
      truth: 0,
      freedom: 1,
      power: 0,
      legacy: 2
    },
    corruptionScore: 0,
    truthScore: 94,
    investigationCost: 6,
    evidenceIds: ["ev_ord_020_joseph", "ev_ord_020_patience", "ev_ord_020_naledi", "ev_ord_020_teacher", "ev_ord_020_photos", "ev_ord_020_profile"],
    contradictionIds: [],
    corruptionIds: [],
    tags: ["father", "grief", "love", "family", "2030"],
    era: "2030",
    investigationPaths: [
      {
        id: 'testimony',
        name: "Joseph's Account",
        description: "Why he learned, and what the early attempts looked like",
        evidenceIds: ordinaryBatch3Evidence.filter((ev: any) => ['ev_ord_020_joseph', 'ev_ord_020_teacher', 'ev_ord_020_photos'].includes(ev.id)).map((ev: any) => ev.id)
      },
      {
        id: 'testimony',
        name: 'Patience and Naledi',
        description: "The hairdresser who taught him, and his daughter's memory of it",
        evidenceIds: ordinaryBatch3Evidence.filter((ev: any) => ['ev_ord_020_patience', 'ev_ord_020_naledi', 'ev_ord_020_profile'].includes(ev.id)).map((ev: any) => ev.id)
      }
    ]
  },

  // ─────────────────────────────────────────────────────────────
  // ord_mem_021 — NATURE / FAMILY — the cat that adopted a hospital ward
  // ─────────────────────────────────────────────────────────────
  {
    id: "ord_mem_021",
    title: "The Cat Who Worked the Night Shift",
    summary: "A stray cat that wandered into a hospice ward in 2024 and was never removed developed an uncanny, well-documented pattern of curling up beside patients in their final hours — arriving, nurses noted, hours before any clinical sign suggested the end was near.",
    description: `# The Cat Who Worked the Night Shift

## How He Arrived

In autumn 2024, a thin grey cat wandered into the loading dock of Holloway Hospice in Manchester, England, and was fed by a kitchen porter who assumed he'd leave on his own.

He didn't.

Over several weeks, he made his way from the loading dock to the wards, eventually settling, without any staff decision to allow it, into the long-term patient corridor. Staff began calling him Tobias, after a patient who had nicknamed him first and died before a formal name was ever agreed on.

## The Pattern

Within a year, multiple nurses independently noted the same thing: Tobias would select a patient's room, enter, and stay — sometimes for hours, sometimes overnight — and that patient would typically die within the following 24 to 48 hours.

This was initially dismissed as confirmation bias; a cat who liked sitting in patient rooms would, in a hospice, inevitably "predict" death simply by being present often enough.

Senior nurse Patricia Owusu, who had worked palliative care for nineteen years, began informally tracking it in 2025.

> "I wasn't trying to prove anything supernatural. I was trying to figure out if he was picking up something clinical that we weren't — some scent, some change in breathing pattern, body temperature, something animals can detect that our instruments measure less directly."

## What the Tracking Showed

Over eighteen months, Owusu's informal log recorded 71 instances of Tobias selecting and remaining with a patient for an extended period. In 63 of those 71 cases, the patient died within 48 hours of Tobias's arrival.

In the remaining 8 cases, patients recovered or stabilized — and notably, in 6 of those 8 cases, Tobias left partway through his visit, before the patient's condition changed.

No clinical staff have offered a confirmed mechanism. The leading hypothesis among the few researchers who later took informal interest is that cats can detect specific changes in metabolic byproducts or body temperature distribution associated with the dying process — a sensory capacity documented in some other animal species but not rigorously studied in domestic cats specifically.

## What Families Said

Families' reactions to Tobias's presence varied. Most found comfort in it.

Margaret Holt, whose mother died with Tobias curled at her feet in 2026, wrote in a card later left for hospice staff:

> "I was so afraid of her dying alone in the hours I couldn't be there. The cat was there. I know that sounds strange to put on the same level as a person, and I don't mean it that way. I mean: she wasn't alone. Something warm was choosing to be near her. I needed that more than I expected to."

A smaller number of families found Tobias's presence unsettling, understandably reading his arrival as an omen rather than a comfort. Hospice staff developed a quiet, informal practice of asking families' preference and, when requested, gently relocating him.

## Historical Significance

Tobias died in 2031, at an estimated age of nine or ten. He was buried in the hospice garden under a small marker that reads only: "He sat with people."

Holloway Hospice has, since his death, not sought to replace him, though several staff have noted, half-jokingly and half not, that they would not object if another cat decided to wander in on its own terms, the way he did.`,
    category: MemoryCategory.NATURE,
    rarity: MemoryRarity.RARE,
    difficulty: MemoryDifficulty.LEVEL_2,
    decisionWeight: DecisionWeight.LOW,
    archetype: MemoryArchetype.PRESERVATION,
    artifactType: ArtifactType.PERSONAL_DIARY,
    impact: {
      compassion: 5,
      progress: 1,
      truth: 1,
      freedom: 1,
      power: 0,
      legacy: 3
    },
    corruptionScore: 0,
    truthScore: 89,
    investigationCost: 9,
    evidenceIds: ["ev_ord_021_arrival", "ev_ord_021_owusu", "ev_ord_021_log", "ev_ord_021_holt", "ev_ord_021_unsettled", "ev_ord_021_marker"],
    contradictionIds: [],
    corruptionIds: [],
    tags: ["cat", "hospice", "death", "comfort", "2024"],
    era: "2024-2031",
    investigationPaths: [
      {
        id: 'testimony',
        name: 'The Families',
        description: "What Tobias's presence meant to the people sitting with the dying",
        evidenceIds: ordinaryBatch3Evidence.filter((ev: any) => ['ev_ord_021_holt', 'ev_ord_021_unsettled'].includes(ev.id)).map((ev: any) => ev.id)
      },
      {
        id: 'ai_logs',
        name: "Owusu's Records",
        description: "How he arrived, the informal eighteen-month tracking log, and his final marker",
        evidenceIds: ordinaryBatch3Evidence.filter((ev: any) => ['ev_ord_021_arrival', 'ev_ord_021_owusu', 'ev_ord_021_log', 'ev_ord_021_marker'].includes(ev.id)).map((ev: any) => ev.id)
      }
    ]
  },

  // ─────────────────────────────────────────────────────────────
  // ord_mem_022 — FAMILY / CULTURE — the recipe box
  // ─────────────────────────────────────────────────────────────
  {
    id: "ord_mem_022",
    title: "The Recipe Box With No Measurements",
    summary: "Five sisters spent eleven years collectively reverse-engineering their late grandmother's recipes from a box of cards that listed ingredients but no quantities or instructions, treating the project as both a culinary and emotional inheritance none of them were willing to let go uncompleted.",
    description: `# The Recipe Box With No Measurements

## What Was Left Behind

When Ji-woo Han died in 2028 at age 89, she left her five granddaughters a small wooden recipe box containing 64 handwritten cards — dishes she had cooked for the family for decades, never formally taught to anyone, written down at some point in a habit none of them had known she kept.

Every card listed ingredients.

Almost none listed quantities.

None listed cooking times, temperatures, or steps beyond the occasional cryptic note like "until it smells right" or "longer than you think."

## The Decision

The five sisters — Mira, Soo-jin, Hana, Yuna, and the youngest, Areum, then 22 — initially treated the box as a sentimental keepsake to be divided or photographed and shared.

Instead, at a family gathering six months after the funeral, they made an informal pact: they would not simply preserve the cards. They would cook every single recipe until each one tasted, as closely as memory and consensus could determine, like their grandmother's version.

No sister had been taught any of these dishes directly. All five had eaten them for decades.

## The Method

The sisters split recipes among themselves based loosely on geography — whoever lived closest to the others took the lead on testing, with photos, tasting notes, and arguments conducted over a shared messaging group that, by year three, contained over 40,000 messages.

Disagreements were common and occasionally serious. Mira and Soo-jin did not speak for several weeks in 2031 over a dispute regarding the correct ratio of gochugaru in their grandmother's kimchi stew — a dispute resolved only when their mother, Ji-woo's daughter, was consulted and sided, somewhat apologetically, with Soo-jin.

## The Hardest Recipe

The project's most difficult dish was a doenjang-based stew that none of the sisters could replicate to general family satisfaction for nearly four years. Areum, the youngest, eventually solved it in 2032 by recalling a specific detail — that their grandmother had always used a particular brand of doenjang sold only at one now-closed market, and that the closest commercial approximation required a specific additional fermentation step to match the depth of flavor.

When she served the corrected version at a family dinner, her mother reportedly began crying before finishing the first bite.

## Completion

The sisters finished testing and standardizing all 64 recipes in 2039 — eleven years after their grandmother's death. They self-published the results as a private family cookbook, with full measurements, steps, and a note on each card's original cryptic instruction preserved alongside the standardized version.

Areum, writing the book's foreword, included a line the other sisters specifically asked her to keep unedited:

> "She never wrote down the amounts because she never measured. We had to learn to taste the way she tasted, which took eleven years and forty thousand text messages and one very long argument about red pepper flakes. I don't think she would have found this funny. I think she would have found it exactly right."

## Historical Significance

The Han family cookbook remains private, printed only for family members and a small circle of friends, but has been referenced in several articles about food, memory, and inherited domestic knowledge as an example of culinary inheritance reconstructed entirely through collective, sustained effort rather than direct teaching.`,
    category: MemoryCategory.FAMILY,
    rarity: MemoryRarity.UNCOMMON,
    difficulty: MemoryDifficulty.LEVEL_2,
    decisionWeight: DecisionWeight.LOW,
    archetype: MemoryArchetype.PRESERVATION,
    artifactType: ArtifactType.PERSONAL_DIARY,
    impact: {
      compassion: 4,
      progress: 1,
      truth: 1,
      freedom: 1,
      power: 0,
      legacy: 5
    },
    corruptionScore: 0,
    truthScore: 95,
    investigationCost: 8,
    evidenceIds: ["ev_ord_022_box", "ev_ord_022_pact", "ev_ord_022_dispute", "ev_ord_022_areum", "ev_ord_022_foreword", "ev_ord_022_completion"],
    contradictionIds: [],
    corruptionIds: [],
    tags: ["family", "grandmother", "food", "memory", "2028"],
    era: "2028-2039",
    investigationPaths: [
      {
        id: 'testimony',
        name: 'The Sisters',
        description: "The original pact, the gochugaru dispute, and Areum's breakthrough",
        evidenceIds: ordinaryBatch3Evidence.filter((ev: any) => ['ev_ord_022_pact', 'ev_ord_022_dispute', 'ev_ord_022_areum'].includes(ev.id)).map((ev: any) => ev.id)
      },
      {
        id: 'corporate',
        name: 'The Box and the Book',
        description: "What was originally left behind, and what it became",
        evidenceIds: ordinaryBatch3Evidence.filter((ev: any) => ['ev_ord_022_box', 'ev_ord_022_foreword', 'ev_ord_022_completion'].includes(ev.id)).map((ev: any) => ev.id)
      }
    ]
  },

];