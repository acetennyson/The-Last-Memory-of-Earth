import { Evidence } from '../../../engine/evidence/types';
import { EvidenceSource, EvidenceTier } from '../../../engine/shared/enums';

export const ordinaryBatch3Evidence: Evidence[] = [

  // =====================================================
  // ord_mem_016 — THE DOG WHO WAITED AT GATE 14
  // =====================================================
  {
    id: "ev_ord_016_ingrid",
    memoryId: "ord_mem_016",
    title: "Interview — Ingrid Bauer",
    sourceType: EvidenceSource.AUDIO_LOG,
    tier: EvidenceTier.SURFACE,
    reliability: 96,
    completeness: 91,
    bias: 14,
    content: `# Interview — Ingrid Bauer
2026, six months after

I redirected him the first day. I thought it was confusion, or habit, since I'd walked him to that bus stop with Hans a few times before for other reasons.

The second day he pulled harder. The third day I just let him go where he wanted to go.

I sat with him at Gate 14 for an hour. I didn't know what else to do. I didn't have a manual for this.

I am not a sentimental person normally. I cried the whole bus ride home.`
  },

  {
    id: "ev_ord_016_eklund",
    memoryId: "ord_mem_016",
    title: "Statement — Pernilla Eklund, Gate Agent",
    sourceType: EvidenceSource.PERSONAL_DIARY,
    tier: EvidenceTier.CONTEXT,
    reliability: 90,
    completeness: 84,
    bias: 19,
    content: `# Statement — Pernilla Eklund

I work Gate 14 most weekday evenings. After the second week I started saving my break for whoever brought him.

Nobody told him Hans wasn't coming back through that door. I don't think there was a way to tell him that would have meant anything. So we just let him wait where he needed to wait.

I never met Hans. I feel like I knew something about him anyway, just from how his dog waited.`
  },

  {
    id: "ev_ord_016_rotation",
    memoryId: "ord_mem_016",
    title: "Building Resident Accounts — Informal Rotation",
    sourceType: EvidenceSource.PERSONAL_DIARY,
    tier: EvidenceTier.CONTEXT,
    reliability: 87,
    completeness: 76,
    bias: 21,
    content: `# Collected Accounts — Building Residents

"Nobody organized it. Someone just texted the building group: 'taking Biscuit today if anyone wants to come.' Then it was just what we did."

"I took him twice. Both times I just sat with him and let him decide when he was done. It felt like the least complicated thing I could do for Hans, even though Hans wasn't there to see it."

"Six weeks doesn't sound long until you've personally taken an old dog on two buses to sit at an airport gate. It felt very long and also like nothing we'd consider not doing."`
  },

  {
    id: "ev_ord_016_obituary",
    memoryId: "ord_mem_016",
    title: "Obituary — Hans Lindqvist",
    sourceType: EvidenceSource.NEWS_REPORT,
    tier: EvidenceTier.CONTEXT,
    reliability: 92,
    completeness: 85,
    bias: 8,
    content: `# Obituary
Hans Lindqvist, 1958–2026

Survived by his sister in Bergen and his dog, Biscuit, age 12.

Hans worked thirty-one years as a postal sorter and was known in his building for organizing an annual midsummer gathering attended by most residents regardless of age.

Funeral arrangements handled by family. Donations suggested to the local animal shelter, "in recognition," the family noted, "of how much his dog meant to him."`
  },

  {
    id: "ev_ord_016_adoption",
    memoryId: "ord_mem_016",
    title: "Adoption Record — Biscuit to Ingrid Bauer",
    sourceType: EvidenceSource.GOVERNMENT_DOCUMENT,
    tier: EvidenceTier.CONTEXT,
    reliability: 95,
    completeness: 90,
    bias: 4,
    content: `# Pet Ownership Transfer Record
Subject: Biscuit (golden retriever, age 12)
New owner: Ingrid Bauer
Date: 2026

Transfer approved. No objections from family. Veterinary records transferred.

Note from receiving veterinarian: "Owner reports dog's behavior pattern (repeated travel to a specific location) has substantially decreased over the prior month. Consistent with grief-related behavior resolution in companion animals, though documentation in this specific pattern (location-fixation following sudden owner loss) remains limited."`
  },

  {
    id: "ev_ord_016_grave",
    memoryId: "ord_mem_016",
    title: "Ingrid's Later Reflection",
    sourceType: EvidenceSource.PERSONAL_DIARY,
    tier: EvidenceTier.REVELATION,
    reliability: 94,
    completeness: 88,
    bias: 23,
    content: `# Personal Journal — Ingrid Bauer
2034, after Biscuit's death

He's buried in the garden, facing east. I don't have a good reason for that. I just felt strongly it should be that direction and didn't examine it further.

I never decided he had "gotten over" Hans. I think that's the wrong way to describe what happened. I think he finished something. I don't know what to call it besides that.

Four good years. I'm grateful for every one of them, and for whatever it was he was looking for at that gate that eventually let him stop looking.`
  },

  // =====================================================
  // ord_mem_017 — MARRIED AT EIGHTY-FOUR
  // =====================================================
  {
    id: "ev_ord_017_meeting",
    memoryId: "ord_mem_017",
    title: "Eleanor's Account — The Pharmacy",
    sourceType: EvidenceSource.AUDIO_LOG,
    tier: EvidenceTier.SURFACE,
    reliability: 95,
    completeness: 89,
    bias: 16,
    content: `# Interview — Eleanor Whitfield
2032, ahead of the wedding

I heard a voice ask the pharmacist about blood pressure medication and I knew it before I'd even turned around. Sixty-one years and I knew it instantly.

I don't actually remember who spoke first. He says it was me. I say it was him. We've had this argument fondly for over a year now and I don't think either of us wants it resolved.

I was picking up a prescription for my late husband's old medication that I hadn't gotten around to returning. Robert says that's a very on-the-nose detail and I should leave it out of any story. I'm including it anyway.`
  },

  {
    id: "ev_ord_017_ring",
    memoryId: "ord_mem_017",
    title: "Robert's Account — The Ring",
    sourceType: EvidenceSource.AUDIO_LOG,
    tier: EvidenceTier.REVELATION,
    reliability: 96,
    completeness: 92,
    bias: 19,
    content: `# Interview — Robert Kessler
2032

I kept the ring through two house moves and forty-four years because I didn't know what else to do with it and I couldn't throw it away.

I'm not a sentimental man in most respects. Ask anyone. But every time I almost got rid of it, I put it back in the drawer.

When I proposed at the fairground — it's a park now, the fair's long gone — I didn't plan the speech. I just took it out of my pocket and she made a sound I'd genuinely never heard a person make before. I'll remember that sound for whatever time I have left.`
  },

  {
    id: "ev_ord_017_carol",
    memoryId: "ord_mem_017",
    title: "Interview — Carol, Eleanor's Daughter",
    sourceType: EvidenceSource.AUDIO_LOG,
    tier: EvidenceTier.COMPLICATION,
    reliability: 90,
    completeness: 81,
    bias: 27,
    content: `# Interview — Carol Whitfield-Ames
2032

It was the most disorienting wonderful thing I have ever watched happen to a person. My mother, eighty-two, calling me to say she'd run into someone from 1968 at a pharmacy, in a voice I hadn't heard from her since before my father died.

I don't think this is a story about love conquering everything. I think it's a story about two people who were given an unbelievable, undeserved second chance very late, and who were wise enough at eighty-three to not ask too many questions about why.

I asked my mother once if she was scared to risk grief again at her age. She said: "I've done grief plenty of times by now. I know I can do it again if I have to. What I wasn't sure I could do anymore was this part." She meant the hoping part.`
  },

  {
    id: "ev_ord_017_wedding",
    memoryId: "ord_mem_017",
    title: "Wedding Record — June 2032",
    sourceType: EvidenceSource.GOVERNMENT_DOCUMENT,
    tier: EvidenceTier.CONTEXT,
    reliability: 99,
    completeness: 96,
    bias: 2,
    content: `# Marriage Certificate
Eleanor Whitfield and Robert Kessler
Date: June 2032
Location: Indiana, USA

Witnesses: 3 (named, all confirmed attendees of the couple's original 1968 engagement)

Officiant's note (informal, attached to file copy): "In thirty years performing ceremonies I have never had three guests who could legitimately say they'd been waiting sixty-four years for this particular wedding to happen. All three cried before the vows even started."`
  },

  {
    id: "ev_ord_017_press",
    memoryId: "ord_mem_017",
    title: "Local Press Coverage",
    sourceType: EvidenceSource.NEWS_REPORT,
    tier: EvidenceTier.CONTEXT,
    reliability: 84,
    completeness: 73,
    bias: 26,
    content: `# Regional Human Interest Feature
2032

EIGHTY-FOUR AND ENGAGED: COUPLE REUNITES SIXTY-ONE YEARS LATER

When asked what happened in 1987 to end their original engagement, both gave the same answer, separately, without coordinating beforehand:

"It doesn't matter anymore. It mattered for a long time. It doesn't now."

Neither offered further detail. The reporter noted this was the only question in the interview both visibly, briefly, stopped smiling to answer — before resuming, almost in unison, a few seconds later.`
  },

  {
    id: "ev_ord_017_later",
    memoryId: "ord_mem_017",
    title: "Eleanor's Reflection — After Robert's Death",
    sourceType: EvidenceSource.PERSONAL_DIARY,
    tier: EvidenceTier.REVELATION,
    reliability: 97,
    completeness: 94,
    bias: 31,
    content: `# Personal Journal — Eleanor Whitfield
2038, shortly after Robert's death

Six years. I wanted more, obviously I wanted more, but I think six years is the correct amount of time, because I got the part I thought I'd lost completely.

I spent decades thinking the 1968 version of us was the only version that ever could have existed, and that I'd lost my chance at it. I was wrong about that, just very late in learning I was wrong.

I'm not sorry for any of it. Not the sixty-one years apart. Not the six years we got. People want this to be a story about how love always finds a way. I don't think that's true for most people, most of the time. I think we were lucky, very late, and I am trying to just be grateful instead of asking why it took so long.`
  },

  // =====================================================
  // ord_mem_018 — THE PARROT WHO CARRIED FOUR NAMES
  // =====================================================
  {
    id: "ev_ord_018_dorothy",
    memoryId: "ord_mem_018",
    title: "Original Acquisition Record — Dorothy Hartley",
    sourceType: EvidenceSource.GOVERNMENT_DOCUMENT,
    tier: EvidenceTier.SURFACE,
    reliability: 92,
    completeness: 84,
    bias: 6,
    content: `# Exotic Pet Registration
Owner: Dorothy Hartley
Species: African Grey Parrot ("Atlas")
Date acquired: 1968
Age at acquisition: 6 months

Registered address: Adelaide, South Australia

[Registration renewed annually through 1991, owner's death. Transferred to next-of-kin per standard procedure.]`
  },

  {
    id: "ev_ord_018_marisol",
    memoryId: "ord_mem_018",
    title: "Interview — Marisol Hartley",
    sourceType: EvidenceSource.AUDIO_LOG,
    tier: EvidenceTier.REVELATION,
    reliability: 93,
    completeness: 88,
    bias: 21,
    content: `# Interview — Marisol Hartley
2015

He said things in a voice that wasn't anyone living. Phrases. "Time for tea, love." Things my grandmother apparently used to say — I never knew her, she died before I was old enough to remember her voice. My father confirmed it. That was her exact phrase. The bird had no reason to know it except that he'd heard it for twenty-three years before any of us existed to him.

It's strange to feel haunted by something so gentle. That's the only word I have for it. Haunted, but gently.`
  },

  {
    id: "ev_ord_018_radio",
    memoryId: "ord_mem_018",
    title: "Local Radio Segment Transcript",
    sourceType: EvidenceSource.AUDIO_LOG,
    tier: EvidenceTier.CONTEXT,
    reliability: 86,
    completeness: 77,
    bias: 18,
    content: `# Radio Segment Transcript — Exotic Pet Longevity
2015

HOST: So your father confirmed this was actually a phrase your grandmother used?

MARISOL: Word for word. "Time for tea, love." He hadn't heard the bird say it in years — Atlas goes through phases where certain phrases go quiet for a long time and then resurface. My father just went very still when he heard it again that visit.

HOST: How did that feel for you, never having known her?

MARISOL: Like meeting someone secondhand, through an unreliable but very devoted narrator.`
  },

  {
    id: "ev_ord_018_sanctuary",
    memoryId: "ord_mem_018",
    title: "Sanctuary Intake Record",
    sourceType: EvidenceSource.GOVERNMENT_DOCUMENT,
    tier: EvidenceTier.CONTEXT,
    reliability: 95,
    completeness: 90,
    bias: 5,
    content: `# Intake Record — Queensland Avian Longevity Sanctuary
Subject: Atlas (African Grey, age 51 at intake)
Date: 2019
Transferring owner: Marisol Hartley

Reason for surrender: Owner relocation, housing incompatible with species needs.

Intake notes: Bird in excellent health for age. Owner provided extensive vocal history documentation, including known phrases attributed to three prior owners across 51 years. Sanctuary staff noted this level of documented vocal provenance is unusually thorough.`
  },

  {
    id: "ev_ord_018_research",
    memoryId: "ord_mem_018",
    title: "Research Note — Vocal Retention in African Greys",
    sourceType: EvidenceSource.SCIENTIFIC_RECORD,
    tier: EvidenceTier.CONTEXT,
    reliability: 91,
    completeness: 83,
    bias: 7,
    content: `# Research Summary — Long-Term Vocal Memory in Psittacus erithacus
Avian Cognition Quarterly, 2018

African grey parrots demonstrate documented capacity to retain learned vocalizations across decades, with resurfacing of "dormant" phrases following years of non-use being a recognized, if understudied, phenomenon.

Case studies involving multi-generational human ownership (i.e., a single bird outliving multiple human caretakers) remain rare in formal literature due to the species' long lifespan relative to typical research study duration.

The Atlas case (informally referenced by several sanctuary networks) is notable for its documented span: vocal fragments attributable to an owner deceased for over two decades, resurfacing reliably in a household with no living connection to that owner beyond genealogy.`
  },

  {
    id: "ev_ord_018_update",
    memoryId: "ord_mem_018",
    title: "Sanctuary Update — 2024",
    sourceType: EvidenceSource.SCIENTIFIC_RECORD,
    tier: EvidenceTier.REVELATION,
    reliability: 94,
    completeness: 86,
    bias: 4,
    content: `# Annual Welfare Update — Atlas
Queensland Avian Longevity Sanctuary, 2024

Subject (age 56) remains in good health. Continues to occasionally produce "time for tea, love" phrase, along with at least four other phrases not traceable to documented owners 2 through 4.

Staff hypothesis: remaining unidentified phrases likely originate from original owner Dorothy Hartley (deceased 33 years), based on speech pattern and contextual usage consistent with mid-20th-century Australian English idiom not present in any subsequent owner's documented speech.

Subject is, per staff records, the longest continuously vocal-tracked parrot in sanctuary history.`
  },

  // =====================================================
  // ord_mem_019 — PEN PALS ON OPPOSITE SIDES
  // =====================================================
  {
    id: "ev_ord_019_letters",
    memoryId: "ord_mem_019",
    title: "Correspondence Archive — Selected Early Letters",
    sourceType: EvidenceSource.LETTER,
    tier: EvidenceTier.SURFACE,
    reliability: 96,
    completeness: 91,
    bias: 9,
    content: `# Selected Correspondence, 2019–2021
Yulia Sereda (Kyiv) and Nastya Volkova (Voronezh region)

Letter 3 (Yulia, 2019): "My horse drawing did not win the contest but the teacher put it on the wall anyway which I think means something."

Letter 11 (Nastya, 2020): "We have a dog now. He is bad at every trick except sitting, which he does even when nobody asks him to, all the time, for no reason."

Letter 19 (Yulia, 2021): "Do you think horses understand when you talk to them or do they just like the sound. I think they understand. My mom thinks I'm being silly."

[41 total letters archived 2019–2025, used with both families' permission]`
  },

  {
    id: "ev_ord_019_yulia",
    memoryId: "ord_mem_019",
    title: "Yulia's Letter, 2022 (4-month delay)",
    sourceType: EvidenceSource.LETTER,
    tier: EvidenceTier.REVELATION,
    reliability: 98,
    completeness: 95,
    bias: 24,
    content: `# Letter 34 — Yulia Sereda to Nastya Volkova
Written 2022, delayed approximately 4 months in transit

I am not mad at you. My mother says I am not allowed to be mad at you specifically, only mad at the war, because you didn't do this. I believe her most days.

We moved again. I have a new room but I don't really live in it yet, if that makes sense. I brought your letters in a folder. I didn't bring much else that wasn't clothes.

I hope your dog is still bad at every trick except sitting.`
  },

  {
    id: "ev_ord_019_nastya",
    memoryId: "ord_mem_019",
    title: "Nastya's Letter, 2023 (via Kazakhstan)",
    sourceType: EvidenceSource.LETTER,
    tier: EvidenceTier.REVELATION,
    reliability: 95,
    completeness: 89,
    bias: 22,
    content: `# Letter 37 — Nastya Volkova to Yulia Sereda
Sent via relative in Kazakhstan, 2023

I don't understand the news and I don't want to ask my parents because I don't like their faces when they explain it. I would rather know if your horse picture won the school contest.

My dog is still bad at every trick except sitting. He is now also bad at "stay" which he used to be okay at. I don't know what changed.

I hope this gets to you. I hope you are somewhere with your own room that feels like yours again soon.`
  },

  {
    id: "ev_ord_019_parents",
    memoryId: "ord_mem_019",
    title: "Parents' Decision — Later Account",
    sourceType: EvidenceSource.AUDIO_LOG,
    tier: EvidenceTier.CONTEXT,
    reliability: 89,
    completeness: 80,
    bias: 19,
    content: `# Interview — Yulia's mother (anonymized per family preference initially, later permitted)
2027, for the academic study

We never discussed it with each other — Nastya's parents and us, I mean, we had no way to. But independently, we both made the same choice. We did not tell our daughters to stop writing.

I think we both understood, without ever saying it to anyone, that the friendship wasn't the thing that needed to be corrected. Whatever else was happening, that wasn't.

It was one of the only things I felt completely certain about during that entire period.`
  },

  {
    id: "ev_ord_019_study",
    memoryId: "ord_mem_019",
    title: "Academic Study — Researcher's Note",
    sourceType: EvidenceSource.SCIENTIFIC_RECORD,
    tier: EvidenceTier.CONTEXT,
    reliability: 92,
    completeness: 86,
    bias: 11,
    content: `# Research Note — Childhood Resilience During Conflict Study
Published 2027

Neither child ever stopped distinguishing the other from the conflict. This is not naivety. In our assessment, it may be one of the more sophisticated moral distinctions present anywhere in the adult discourse surrounding this war.

The correspondence demonstrates a consistent pattern: both children processed adult catastrophe through specific, concrete, child-scaled concerns — a dog's bad tricks, a drawing contest, a new room — while maintaining clear-eyed, age-appropriate acknowledgment that something serious and frightening was occurring around them.

We did not find this dissonant. We found it remarkably well-calibrated.`
  },

  {
    id: "ev_ord_019_interview",
    memoryId: "ord_mem_019",
    title: "Yulia — Later Interview, Age 17",
    sourceType: EvidenceSource.AUDIO_LOG,
    tier: EvidenceTier.REVELATION,
    reliability: 94,
    completeness: 90,
    bias: 26,
    content: `# Interview — Yulia Sereda, age 17
2028

Every time someone says her name is a "Russian name" like it's a bad word. I think: no, it's Nastya's name. She liked horses too much for her own good and she drew terrible self-portraits and she's twelve forever in my head, the way I'm probably twelve forever in hers, if she still has any of my letters.

I haven't heard from her since the Poland letter. I don't know if mail ever worked from there to her. I think about her more than I expected I still would, this many years on.

I kept all forty-one letters. I'll keep them as long as I'm alive to keep anything.`
  },

  // =====================================================
  // ord_mem_020 — THE MAN WHO LEARNED TO BRAID
  // =====================================================
  {
    id: "ev_ord_020_joseph",
    memoryId: "ord_mem_020",
    title: "Interview — Joseph Mbeki",
    sourceType: EvidenceSource.AUDIO_LOG,
    tier: EvidenceTier.SURFACE,
    reliability: 95,
    completeness: 90,
    bias: 17,
    content: `# Interview — Joseph Mbeki
2032, two years after Teresa's death

I adapted to most of it within weeks. The school pickup, the cooking, all of it. I did not see the hair thing coming, and when it came, it hit me harder than almost anything else in that whole period — this sense that I was failing her in a way that was small, visible to every other parent at pickup, and entirely within my power to fix if I simply learned.

So I learned. It took longer than I expected and I felt ridiculous for most of it, practicing on a foam head in my truck cab between shifts. I didn't care how ridiculous it looked. I cared about getting it right for her.`
  },

  {
    id: "ev_ord_020_patience",
    memoryId: "ord_mem_020",
    title: "Interview — Patience Dlamini",
    sourceType: EvidenceSource.AUDIO_LOG,
    tier: EvidenceTier.CONTEXT,
    reliability: 92,
    completeness: 85,
    bias: 14,
    content: `# Interview — Patience Dlamini, hairdresser
2032

Most fathers who come in just want me to do it. He wanted to be able to do it himself, every day, for as long as she needed it. I taught a lot of mothers over the years. I don't think I'd taught a father who wanted the actual skill before.

By month six his technique had genuinely become competent. I told him at month eight he didn't need to keep coming. He kept coming anyway, monthly, just to check in, for two more years. I never charged him for those. Some things you don't charge for.`
  },

  {
    id: "ev_ord_020_naledi",
    memoryId: "ord_mem_020",
    title: "Interview — Naledi Mbeki, Age 17",
    sourceType: EvidenceSource.AUDIO_LOG,
    tier: EvidenceTier.REVELATION,
    reliability: 96,
    completeness: 93,
    bias: 21,
    content: `# Interview — Naledi Mbeki
2041, community profile on single fatherhood

I don't actually remember the bad braids as bad. I remember every Sunday night, before school, him sitting on the floor behind me with the comb, concentrating so hard, asking if it hurt, genuinely terrified of hurting me. I think I understood, even at six, that he was doing something difficult because he loved me. Six-year-olds understand more about love than people give them credit for.

I have photos of some of the early ones. They are objectively terrible. I would not change a single one.`
  },

  {
    id: "ev_ord_020_teacher",
    memoryId: "ord_mem_020",
    title: "Teacher's Account — The Initial Concern",
    sourceType: EvidenceSource.PERSONAL_DIARY,
    tier: EvidenceTier.CONTEXT,
    reliability: 88,
    completeness: 76,
    bias: 18,
    content: `# Teacher's Note (shared with permission for later profile)

I raised it as gently as I could. I'd seen plenty of grieving families and I wasn't trying to add to his burden. I just mentioned, quietly, at pickup, that Naledi's hair seemed like it could use some care, in case it was something he hadn't had a chance to think about yet with everything else going on.

He thanked me. He looked stricken in a way that worried me slightly — I hoped I hadn't made things worse. A few months later her hair was beautifully done, every single day. I never found out exactly what happened in between, but I had my guesses.`
  },

  {
    id: "ev_ord_020_photos",
    memoryId: "ord_mem_020",
    title: "Photo Collection — Naledi's Personal Archive",
    sourceType: EvidenceSource.PERSONAL_DIARY,
    tier: EvidenceTier.CONTEXT,
    reliability: 91,
    completeness: 84,
    bias: 9,
    content: `# Personal Photo Archive Notes
Compiled by Naledi Mbeki, later years

Photos dated 2030–2031 show clear technical progression: early images show asymmetric, loose braiding with visible frustration evident in styling; by mid-2031, braids are consistently neat, even, and varied in style.

Naledi's own caption, added later: "Exhibit A through Exhibit Way Too Many: my dad learning to braid hair in real time, documented because I thought it was funny then and I think it's something else entirely now."`
  },

  {
    id: "ev_ord_020_profile",
    memoryId: "ord_mem_020",
    title: "Community Profile — Single Fatherhood Feature",
    sourceType: EvidenceSource.NEWS_REPORT,
    tier: EvidenceTier.CONTEXT,
    reliability: 87,
    completeness: 79,
    bias: 22,
    content: `# Community Feature — Local Publication
2041

Joseph's story circulated locally and was later picked up in broader discussions about single fathers and culturally specific caregiving skills not traditionally taught to men.

Joseph, asked for comment on the wider attention: "I don't think what I did was remarkable. I think what was remarkable is that nobody had ever told me I was allowed to learn it. I just decided I was."

The feature notes Naledi, now an adult, still occasionally asks her father to braid her hair "for old times' sake," which he does, she reports, "exactly as carefully as he did the first time."`
  },

  // =====================================================
  // ord_mem_021 — THE CAT WHO WORKED THE NIGHT SHIFT
  // =====================================================
  {
    id: "ev_ord_021_arrival",
    memoryId: "ord_mem_021",
    title: "Hospice Staff Log — Tobias's Arrival",
    sourceType: EvidenceSource.PERSONAL_DIARY,
    tier: EvidenceTier.SURFACE,
    reliability: 88,
    completeness: 80,
    bias: 13,
    content: `# Informal Staff Log — Holloway Hospice
Autumn 2024

A thin grey cat has been hanging around the loading dock for two weeks. Kitchen staff have been feeding him. He's made his way into the building proper as of this week — found him in the long-term corridor twice now.

No one has formally decided to keep him. He seems to have decided for us.

Patient Mr. Aldous Webb has taken to calling him "Tobias." It's stuck, mostly because nobody's proposed anything better.`
  },

  {
    id: "ev_ord_021_owusu",
    memoryId: "ord_mem_021",
    title: "Interview — Patricia Owusu",
    sourceType: EvidenceSource.AUDIO_LOG,
    tier: EvidenceTier.CONTEXT,
    reliability: 93,
    completeness: 87,
    bias: 15,
    content: `# Interview — Patricia Owusu, senior palliative nurse
2027

I wasn't trying to prove anything supernatural. I was trying to figure out if he was picking up something clinical that we weren't — some scent, some change in breathing pattern, body temperature, something animals can detect that our instruments measure less directly.

Nineteen years in palliative care and I'd never seen anything quite like the consistency of it. I started writing it down mostly to satisfy my own skepticism. The pattern held up better than I expected it to.`
  },

  {
    id: "ev_ord_021_log",
    memoryId: "ord_mem_021",
    title: "Owusu's Eighteen-Month Tracking Log — Summary",
    sourceType: EvidenceSource.SCIENTIFIC_RECORD,
    tier: EvidenceTier.REVELATION,
    reliability: 89,
    completeness: 81,
    bias: 12,
    content: `# Informal Tracking Summary
Compiled by P. Owusu, 2025–2026 (18 months)

Total documented instances of Tobias selecting and remaining with a patient for extended period: 71

Patient death within 48 hours of Tobias's extended visit: 63 of 71 (88.7%)

Patient recovery/stabilization despite visit: 8 of 71
— Of these 8, Tobias left partway through visit, before condition change, in 6 cases

No clinical mechanism confirmed. Leading informal hypothesis: detection of metabolic or thermal changes associated with dying process, a sensory capacity documented in limited other animal contexts but not rigorously studied in domestic cats.

Note: This log was not peer-reviewed and was not intended for publication. It was kept for personal clinical curiosity and shared later, with hospice permission, for community interest pieces.`
  },

  {
    id: "ev_ord_021_holt",
    memoryId: "ord_mem_021",
    title: "Family Note — Margaret Holt",
    sourceType: EvidenceSource.PERSONAL_DIARY,
    tier: EvidenceTier.CONTEXT,
    reliability: 95,
    completeness: 91,
    bias: 24,
    content: `# Card left for hospice staff
2026

I was so afraid of her dying alone in the hours I couldn't be there. The cat was there. I know that sounds strange to put on the same level as a person, and I don't mean it that way. I mean: she wasn't alone. Something warm was choosing to be near her. I needed that more than I expected to.

Thank you for letting him do whatever it is he does. I don't need it explained. I just needed it to happen, and it happened.`
  },

  {
    id: "ev_ord_021_unsettled",
    memoryId: "ord_mem_021",
    title: "Family Accounts — Alternative Reactions",
    sourceType: EvidenceSource.PERSONAL_DIARY,
    tier: EvidenceTier.COMPLICATION,
    reliability: 84,
    completeness: 71,
    bias: 26,
    content: `# Collected Family Feedback — Mixed Reactions

"I asked them to move him. I know it's not his fault, I know he doesn't mean anything by it, but I could not be in that room with my father knowing what it might mean every time the cat came near."

"We didn't want him there. The staff were lovely about it — moved him without making us feel bad for asking. I appreciated that more than I can say."

Hospice policy (informal, established by staff consensus 2025): ask family preference upon Tobias's first approach; relocate gently and without comment if requested.`
  },

  {
    id: "ev_ord_021_marker",
    memoryId: "ord_mem_021",
    title: "Garden Marker — Tobias",
    sourceType: EvidenceSource.PERSONAL_DIARY,
    tier: EvidenceTier.REVELATION,
    reliability: 97,
    completeness: 100,
    bias: 9,
    content: `# Memorial Marker
Holloway Hospice Garden
2031

Small stone marker, hospice-funded by staff donation:

"TOBIAS
He sat with people.
2024–2031"

Staff statement at installation: "We didn't replace him with another cat. Several of us said we wouldn't mind if one wandered in on its own terms, the way he did. We just didn't think it was ours to go looking for."`
  },

  // =====================================================
  // ord_mem_022 — THE RECIPE BOX WITH NO MEASUREMENTS
  // =====================================================
  {
    id: "ev_ord_022_box",
    memoryId: "ord_mem_022",
    title: "The Original Recipe Box — Inventory",
    sourceType: EvidenceSource.PERSONAL_DIARY,
    tier: EvidenceTier.SURFACE,
    reliability: 96,
    completeness: 93,
    bias: 6,
    content: `# Inventory — Ji-woo Han Recipe Box
Compiled by family, 2028

64 handwritten cards. All list ingredients. 61 of 64 list no quantities. None list cooking times or temperatures.

Sample card (doenjang stew): "Doenjang. Tofu. Zucchini, when good. Pepper, the green ones not the red. Until it smells right."

Sample card (kimchi stew): "Old kimchi, the older the better honestly. Pork if we have it. Gochugaru, longer than you think."

No instructions beyond ingredient lists and the occasional sensory note.`
  },

  {
    id: "ev_ord_022_pact",
    memoryId: "ord_mem_022",
    title: "The Sisters' Pact — Family Gathering Account",
    sourceType: EvidenceSource.PERSONAL_DIARY,
    tier: EvidenceTier.CONTEXT,
    reliability: 90,
    completeness: 84,
    bias: 17,
    content: `# Account — Mira Han (eldest sister)
Six months after the funeral, 2028

We were going to just photograph the cards and divide them up, sentimentally, the way you do.

Then Areum, of all of us, the youngest, said: "She never wrote it down for us to look at. She wrote it down so it would still exist. We should make it exist properly."

We agreed without much discussion. I don't think any of us fully understood what we were committing to. Eleven years and forty thousand messages later, I still think it was the right thing to commit to.`
  },

  {
    id: "ev_ord_022_dispute",
    memoryId: "ord_mem_022",
    title: "The Gochugaru Dispute — Message Thread Excerpt",
    sourceType: EvidenceSource.PERSONAL_DIARY,
    tier: EvidenceTier.COMPLICATION,
    reliability: 87,
    completeness: 70,
    bias: 29,
    content: `# Family Group Message Excerpt
2031

MIRA: It's too much. Grandma's was never this spicy.
SOO-JIN: It's not too much, you've just gotten used to mild food.
MIRA: I lived with her for SEVEN YEARS, Soo-jin.
SOO-JIN: I cooked beside her every Sunday for a DECADE.

[Three weeks of reduced communication between Mira and Soo-jin followed]

[Resolution, weeks later]: Mother consulted. Mother's verdict, relayed by Hana: "Soo-jin is closer. Mira, I'm sorry, but she's closer." Mira's response: "Fine. FINE. But I want it on record I think it's still too much."`
  },

  {
    id: "ev_ord_022_areum",
    memoryId: "ord_mem_022",
    title: "Areum's Breakthrough — The Doenjang Stew",
    sourceType: EvidenceSource.PERSONAL_DIARY,
    tier: EvidenceTier.REVELATION,
    reliability: 93,
    completeness: 88,
    bias: 22,
    content: `# Account — Areum Han
2032

We'd been stuck on the doenjang stew for almost four years. Close, never right. I kept thinking about the market that used to be three blocks from her old apartment, the one that closed in like 2015. She always bought a specific brand there I hadn't thought about in years.

I found a place that still imports something close. Had to add an extra fermentation step to get the depth right, since the commercial version wasn't quite as developed as what she'd have been buying decades ago.

First bite, my mother started crying before she even finished swallowing. I knew we'd gotten it. You don't need a panel of judges when you have a mother crying into a bowl of stew.`
  },

  {
    id: "ev_ord_022_foreword",
    memoryId: "ord_mem_022",
    title: "Cookbook Foreword — Final Text",
    sourceType: EvidenceSource.PERSONAL_DIARY,
    tier: EvidenceTier.CONTEXT,
    reliability: 95,
    completeness: 97,
    bias: 13,
    content: `# Foreword — "The Han Family Recipe Project" (private printing)
Written by Areum Han, 2039

She never wrote down the amounts because she never measured. We had to learn to taste the way she tasted, which took eleven years and forty thousand text messages and one very long argument about red pepper flakes. I don't think she would have found this funny. I think she would have found it exactly right.

This book is for anyone who has ever tried to recreate something a person made by feel, with their hands, their whole life, and never thought to write down — because it never occurred to them that one day it would need to be found again.`
  },

  {
    id: "ev_ord_022_completion",
    memoryId: "ord_mem_022",
    title: "Completion Record — 2039",
    sourceType: EvidenceSource.PERSONAL_DIARY,
    tier: EvidenceTier.CONTEXT,
    reliability: 94,
    completeness: 90,
    bias: 8,
    content: `# Project Completion Note
Han family recipe standardization project
2039

All 64 recipes tested, standardized, and compiled. Self-published privately, limited print run for family and close friends.

Each card includes: standardized modern measurements, the original handwritten note preserved in facsimile, and a short attribution noting which sister led testing and how long it took to finalize.

Total project duration: 11 years (2028–2039).
Total documented testing-related family correspondence: approximately 40,000 messages.
Recipes requiring more than 2 years to finalize: 3.
Recipes finalized within first attempt: 9.`
  },

];