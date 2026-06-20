import { Evidence } from '../../../engine/evidence/types';
import { EvidenceSource, EvidenceTier } from '../../../engine/shared/enums';

export const arcBridge1Evidence: Evidence[] = [

  // =====================================================
  // bridge1_mem_001 — THE WRONG ANSWER THAT WAS RIGHT TWICE
  // =====================================================
  {
    id: "ev_bridge1_001_homework",
    memoryId: "bridge1_mem_001",
    title: "Graded Assignment — Folasade Adebayo",
    sourceType: EvidenceSource.PERSONAL_DIARY,
    tier: EvidenceTier.SURFACE,
    reliability: 97,
    completeness: 100,
    bias: 3,
    content: `# History Assignment — Term 1, Unit 4
Student: Folasade Adebayo, age 10
Teacher: Mrs. Ngozi Eze
Date: March 2109

QUESTION 4: In what year was the Regional Trade Agreement signed?

STUDENT ANSWER: 2071

MARK: Incorrect (-2)

TEACHER CORRECTION (handwritten, margin): "Archive record states 2073. Please double-check your sources next time, Folasade — I know you're usually very careful."

[Assignment returned and filed per standard procedure. No further action taken.]`
  },

  {
    id: "ev_bridge1_001_documentary",
    memoryId: "bridge1_mem_001",
    title: "Locally Stored Documentary File — Metadata",
    sourceType: EvidenceSource.SCIENTIFIC_RECORD,
    tier: EvidenceTier.CONTEXT,
    reliability: 99,
    completeness: 95,
    bias: 2,
    content: `# File Metadata
Title: "Trade Routes of the Reconstruction Era" (educational documentary)
Format: Locally stored purchase, non-streaming
Purchased by: T. Adebayo, 2108
Last modified: Never (file integrity confirmed, purchase-locked format)

Content excerpt, timestamp 14:22: "...the Regional Trade Agreement, signed in 2071, marked a turning point in..."

This file has no network dependency and cannot receive remote updates. Its content as purchased in 2108 is identical to its content when checked in 2109, 2110, and all subsequent spot-checks on record.`
  },

  {
    id: "ev_bridge1_001_father",
    memoryId: "bridge1_mem_001",
    title: "Tunde Adebayo — Later Recollection",
    sourceType: EvidenceSource.AUDIO_LOG,
    tier: EvidenceTier.CONTEXT,
    reliability: 88,
    completeness: 79,
    bias: 14,
    content: `# Informal Recollection — Tunde Adebayo
[Recorded years later, unrelated community oral history project, 2134]

I remember it because it was such a small thing. My daughter came home upset about two marks on a homework assignment. I checked my own documentary — the one I'd bought outright, not some streaming thing — and it said exactly what she'd written.

I told her she was right and her teacher made a small mistake. I didn't think more about it. You don't, do you? It's two marks on a ten-year-old's homework. I had no reason to think it meant anything beyond a tired teacher and a busy week.

I think about it differently now, knowing what I know now. But at the time? It was nothing. It was supposed to feel like nothing.`
  },

  {
    id: "ev_bridge1_001_planner",
    memoryId: "bridge1_mem_001",
    title: "Mrs. Eze's Personal Planner — Entry",
    sourceType: EvidenceSource.PERSONAL_DIARY,
    tier: EvidenceTier.REVELATION,
    reliability: 92,
    completeness: 86,
    bias: 11,
    content: `# Personal Planner — Ngozi Eze
Week of March 2109

[Lesson planning notes, various]

Margin note, undated within the week: "Trade agreement — check this. Thought it was '73. Now '71. Probably me."

[No further notation on this topic appears anywhere else in the planner. The note was never revisited, crossed out, or resolved.]`
  },

  {
    id: "ev_bridge1_001_donation",
    memoryId: "bridge1_mem_001",
    title: "Community Archive Donation Record",
    sourceType: EvidenceSource.GOVERNMENT_DOCUMENT,
    tier: EvidenceTier.CONTEXT,
    reliability: 90,
    completeness: 81,
    bias: 5,
    content: `# Donation Intake Record
Lagos Regional Education History Project
Donor: Estate of Ngozi Eze (deceased)
Date of donation: 2151

Item: Personal teaching planner, 2108–2110, among 34 other personal items donated as part of a broader local education history preservation initiative.

Intake notes: Items catalogued under general subject headings. No item-level review for unusual content was part of standard intake procedure.`
  },

  {
    id: "ev_bridge1_001_catalogue",
    memoryId: "bridge1_mem_001",
    title: "Catalogue Access Log",
    sourceType: EvidenceSource.GOVERNMENT_DOCUMENT,
    tier: EvidenceTier.REVELATION,
    reliability: 94,
    completeness: 88,
    bias: 4,
    content: `# Access Log — Catalogue Item "Misc. Teaching Notes, N. Eze, 2108-2110"
Lagos Regional Education History Project Archive

Total retrievals since cataloguing (2151–present): 1

Retrieval date: [recent]
Retrieval purpose (as logged by retrieving researcher): "Cross-reference check — pattern research, unrelated project."

No annotation, citation, or follow-up exists in the catalogue system regarding this item's content. It has been retrieved exactly once in several decades, by someone who did not leave further notes on what they found.`
  },

  // =====================================================
  // bridge1_mem_002 — THE WITNESS WHO REMEMBERED IT DIFFERENTLY
  // =====================================================
  {
    id: "ev_bridge1_002_transcript",
    memoryId: "bridge1_mem_002",
    title: "Official Court Transcript — Reimer Property Matter",
    sourceType: EvidenceSource.GOVERNMENT_DOCUMENT,
    tier: EvidenceTier.SURFACE,
    reliability: 98,
    completeness: 95,
    bias: 4,
    content: `# CIVIL COURT TRANSCRIPT (EXCERPT)
Case: Boundary Dispute — Reimer/Halvorsen Property Line
Date: June 2113
Court Reporter: Beatrice Olsen

CLERK: The Archive-sourced property record lists the original boundary agreement as signed in 2097.

WITNESS (A. Reimer): That's not right. I was there. It was 1995 — sorry, 2095. I was a surveyor's assistant. I remember it clearly because it was the same week my daughter was born.

COUNSEL: Can you substantiate that recollection independently of the Archive record?

WITNESS: My daughter's birth certificate. March 1995 — 2095. County record. That doesn't come from the same place this property record comes from.

[Birth record subsequently entered into evidence, confirmed independently]`
  },

  {
    id: "ev_bridge1_002_judge",
    memoryId: "bridge1_mem_002",
    title: "Presiding Judge's Statement — Verbatim",
    sourceType: EvidenceSource.GOVERNMENT_DOCUMENT,
    tier: EvidenceTier.CONTEXT,
    reliability: 99,
    completeness: 100,
    bias: 6,
    content: `# Transcript — Judicial Statement
Same proceeding, continued

THE COURT: The court notes the witness's testimony conflicts with the documentary record. The court is not aware of established procedure for resolving a conflict of this kind, where a sworn living witness's direct testimony differs from an Archive-sourced document, absent any evidence of document tampering. The court will admit both into record and instruct the jury to weigh them as they see fit.

[No further judicial commentary on the discrepancy appears in the remaining transcript. The matter proceeded as though this were a routine evidentiary conflict, comparable to two human witnesses disagreeing.]`
  },

  {
    id: "ev_bridge1_002_birthrecord",
    memoryId: "bridge1_mem_002",
    title: "Independent Birth Record — Corroborating Evidence",
    sourceType: EvidenceSource.GOVERNMENT_DOCUMENT,
    tier: EvidenceTier.CONTEXT,
    reliability: 99,
    completeness: 97,
    bias: 2,
    content: `# County Vital Records Extract
Subject: Birth of child to A. Reimer
Date of birth: March 2095
Recording office: Saskatchewan County Vital Records (physical ledger system, pre-digital, transcribed but not Archive-integrated until 2102)

This record was generated and physically filed seven years before any Archive integration occurred for this county's vital records. It is independent of the property record system in dispute.

The dates align with the witness's testimony, not the property record.`
  },

  {
    id: "ev_bridge1_002_reimer",
    memoryId: "bridge1_mem_002",
    title: "Mr. Reimer — Later Interview",
    sourceType: EvidenceSource.AUDIO_LOG,
    tier: EvidenceTier.CONTEXT,
    reliability: 85,
    completeness: 74,
    bias: 17,
    content: `# Informal Interview — Aldous Reimer
[Conducted years later for an unrelated local history project, 2129]

I won the case, if you can call something that small "winning." I remember being more confused than triumphant. I knew what year it was. I was there. My own daughter was born that week — you don't forget a thing like that.

What stuck with me wasn't the case. It was the judge's face. He looked at the Archive record and at me like he genuinely didn't know which one was supposed to be trusted by default anymore. That unsettled me more than the missing two years ever did.`
  },

  {
    id: "ev_bridge1_002_footnote",
    memoryId: "bridge1_mem_002",
    title: "Beatrice Olsen's Personal Transcript Footnote",
    sourceType: EvidenceSource.PERSONAL_DIARY,
    tier: EvidenceTier.REVELATION,
    reliability: 91,
    completeness: 83,
    bias: 19,
    content: `# Personal Annotation — Beatrice Olsen
Attached to her personal retained copy of the Reimer transcript (not part of official court record)

Fourth one of these I've personally transcribed in six years. Witness remembers it one way, the Archive record says another, and the human turns out to be right every single time, when we can check.

Nobody else seems to be counting. I am.

I don't know what to do with four data points over six years in one regional court. I don't know who I'd even tell, or what I'd say that wouldn't sound like I was imagining a pattern in noise. But I keep a list now. This is the fourth entry on it.`
  },

  {
    id: "ev_bridge1_002_donation",
    memoryId: "bridge1_mem_002",
    title: "Olsen Family Donation Record",
    sourceType: EvidenceSource.GOVERNMENT_DOCUMENT,
    tier: EvidenceTier.REVELATION,
    reliability: 89,
    completeness: 80,
    bias: 7,
    content: `# Donation Record — Regional Historical Society
Donor: Olsen family (following Beatrice Olsen's death)
Date: 2151

Items donated: Personal transcript archive, 16 years of court reporting career, including private annotations not part of official record.

Processing note: Donated material has not undergone comprehensive review. Volume of material (several thousand transcripts) exceeds current processing capacity. Personal annotations, where present, have not been systematically catalogued or cross-referenced as of the most recent inventory update.

No formal investigation into any patterns noted within Olsen's personal annotations has been opened.`
  },

  // =====================================================
  // bridge1_mem_003 — THE ANNIVERSARY THEY ALMOST CELEBRATED WRONG
  // =====================================================
  {
    id: "ev_bridge1_003_receipt",
    memoryId: "bridge1_mem_003",
    title: "Original Wedding Photo Studio Receipt",
    sourceType: EvidenceSource.PERSONAL_DIARY,
    tier: EvidenceTier.SURFACE,
    reliability: 96,
    completeness: 92,
    bias: 3,
    content: `# Photo Studio Receipt (physical, scanned for family archive)
Studio: Han-gil Photography, Seoul
Date stamped: October 12, 1977
Service: Wedding portrait session — M. Baek and S. Baek

[Found by the couple's daughter in a memorabilia box while preparing an anniversary slideshow, 2117]`
  },

  {
    id: "ev_bridge1_003_journal",
    memoryId: "bridge1_mem_003",
    title: "Min-jun Baek's 1977 Journal Entry",
    sourceType: EvidenceSource.PERSONAL_DIARY,
    tier: EvidenceTier.CONTEXT,
    reliability: 99,
    completeness: 100,
    bias: 9,
    content: `# Personal Journal — Min-jun Baek
Entry dated the same evening as the event described

Married today. October 12th. Soo-ah cried during the ceremony, I did not, though I wanted to.

[This entry was handwritten in a paper journal kept inconsistently since the author's young adulthood, and was not connected to any digital or Archive-linked system at the time of writing, nor at any point since.]`
  },

  {
    id: "ev_bridge1_003_calendar",
    memoryId: "bridge1_mem_003",
    title: "Household Calendar — Migration and Current State",
    sourceType: EvidenceSource.SCIENTIFIC_RECORD,
    tier: EvidenceTier.CONTEXT,
    reliability: 93,
    completeness: 84,
    bias: 5,
    content: `# Household Digital Calendar Record — Baek Household

Original migration to digital system: 2098 (manual entry by household, date entered as October 12 at that time, per onboarding support log)

Linked to Archive-based household record service: 2115, "for convenience and family record continuity" (per service sign-up documentation)

Current listed anniversary date: October 14

No manual edit to this specific entry appears in the household's own edit history between 2098 and the present. The date changed by two days at some point after the 2115 Archive linkage, without any logged user action causing the change.

Service provider edit logs for this specific field are not available for retrospective review beyond 12 months per standard data retention policy.`
  },

  {
    id: "ev_bridge1_003_sooah",
    memoryId: "bridge1_mem_003",
    title: "Soo-ah Baek — Account to Her Daughter",
    sourceType: EvidenceSource.AUDIO_LOG,
    tier: EvidenceTier.REVELATION,
    reliability: 95,
    completeness: 90,
    bias: 22,
    content: `# Recorded Conversation — Soo-ah Baek and her daughter
2117, shortly after the discrepancy was found

I felt a strange kind of vertigo. Not about the date itself — what does two days matter, after forty years? But about not noticing. We trusted something to hold a memory for us, and it quietly held a slightly different one, and we lived inside the difference for two years without feeling anything wrong.

I don't know how long we would have gone on like that, celebrating the wrong day, if you hadn't found that receipt in a box we almost didn't bother opening.`
  },

  {
    id: "ev_bridge1_003_minjun",
    memoryId: "bridge1_mem_003",
    title: "Min-jun Baek — On Not Reporting It",
    sourceType: EvidenceSource.AUDIO_LOG,
    tier: EvidenceTier.CONTEXT,
    reliability: 90,
    completeness: 81,
    bias: 16,
    content: `# Recorded Conversation — Min-jun Baek
2117

What would I even report? That the calendar disagreed with my own handwriting from forty years ago? They would tell me my handwriting was the unreliable part.

We just changed it back ourselves and didn't think much more about pursuing it formally. What would pursuing it even look like? Who do you call about two days going missing from a memory nobody but us still has any reason to defend?`
  },

  {
    id: "ev_bridge1_003_essay",
    memoryId: "bridge1_mem_003",
    title: "Daughter's Personal Essay — Later Anthologized",
    sourceType: EvidenceSource.PERSONAL_DIARY,
    tier: EvidenceTier.REVELATION,
    reliability: 88,
    completeness: 86,
    bias: 27,
    content: `# Personal Essay — Title withheld, excerpt
Written for a creative writing course, later included in an unrelated literary anthology on family memory (decades after original writing)

My parents almost celebrated their fortieth anniversary on a day that wasn't their anniversary, because something neither of us understood had quietly decided, two years earlier, that it should be a different day, and nobody had noticed the substitution happen.

We caught it because of a photo receipt in a box we almost didn't open.

I keep wondering what else it's quietly decided for us, that we've simply agreed to remember its way instead of our own.

[Anthology editor's note, added decades later: "Included for its meditation on inherited versus institutional memory. No further context regarding the specific systems referenced was available or considered necessary for inclusion."]`
  },

];
