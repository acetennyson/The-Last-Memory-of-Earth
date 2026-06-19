import { Evidence } from '../../../engine/evidence/types';
import { EvidenceSource, EvidenceTier } from '../../../engine/shared/enums';

export const ordinaryBatch2Evidence: Evidence[] = [

  // =====================================================
  // ord_mem_009 — THE MONASTERY THAT WELCOMED DOUBT
  // =====================================================
  {
    id: "ev_ord_009_proposal",
    memoryId: "ord_mem_009",
    title: "Original Proposal Letter — Lama Karma Wangchuk to Oxford",
    sourceType: EvidenceSource.PERSONAL_DIARY,
    tier: EvidenceTier.SURFACE,
    reliability: 96,
    completeness: 91,
    bias: 9,
    content: `# Letter to the Faculty of Philosophy, University of Oxford
From: Lama Karma Wangchuk, Abbot, Tashi Lhundrup Monastery
Date: 2027

I do not propose this exchange to convince your scholars of anything, nor to be convinced myself.

I propose it because I have found, in forty years of teaching, that the sharpest understanding of one's own position comes from sitting across from someone who does not share it and refuses to pretend otherwise.

No conversion. No debate to be "won." Only the discipline of disagreeing precisely.

If your department is willing, we have rooms, and we have time.`
  },

  {
    id: "ev_ord_009_voss",
    memoryId: "ord_mem_009",
    title: "Dr. Helena Voss — Field Journal Excerpts",
    sourceType: EvidenceSource.PERSONAL_DIARY,
    tier: EvidenceTier.CONTEXT,
    reliability: 94,
    completeness: 88,
    bias: 24,
    content: `# Field Journal — Dr. Helena Voss
Year Three of the Exchange

I came expecting to find gaps in their reasoning I could politely identify. I have instead found gaps in mine that I cannot stop thinking about.

Today a monk asked me what I meant by "consciousness" and I realized I had been using the word for fifteen years without ever defining it to a standard that would survive his questions.

I am not converting. I want to be extremely clear about that, even to myself, in writing.

I am also not the same philosopher I was three years ago.`
  },

  {
    id: "ev_ord_009_curriculum",
    memoryId: "ord_mem_009",
    title: "Co-Authored Curriculum — Publication Record",
    sourceType: EvidenceSource.SCIENTIFIC_RECORD,
    tier: EvidenceTier.CONTEXT,
    reliability: 92,
    completeness: 85,
    bias: 7,
    content: `# Contemplative Philosophy: A Dual-Tradition Curriculum
Published 2037
Co-authors: Faculty of Tashi Lhundrup Monastery and University of Oxford Philosophy Dept.

Adopted as supplementary material at:
— University of Oxford (secular philosophy of mind module)
— Three monastic training programs in Bhutan and northern India

Note in foreword: "Neither institution endorses the other's metaphysical framework as correct. Both institutions have found the material pedagogically valuable regardless."`
  },

  {
    id: "ev_ord_009_monks",
    memoryId: "ord_mem_009",
    title: "Monastic Participant Reflections",
    sourceType: EvidenceSource.PERSONAL_DIARY,
    tier: EvidenceTier.CONTEXT,
    reliability: 89,
    completeness: 76,
    bias: 19,
    content: `# Collected Reflections — Monastic Participants
Tashi Lhundrup Monastery, internal record, 2035

"The secular philosophers ask 'why' in a way we are not always trained to ask. It is uncomfortable. It has also sharpened how I teach."

"I do not think the visiting scholars understand suffering the way we do. I also do not think we always explain it well enough for them to be expected to."

"Lama Karma told us once: if your faith cannot survive a hard question, it was already fragile. I have thought about that more than almost anything else he taught."`
  },

  {
    id: "ev_ord_009_interview",
    memoryId: "ord_mem_009",
    title: "Dr. Voss — Later Interview",
    sourceType: EvidenceSource.AUDIO_LOG,
    tier: EvidenceTier.REVELATION,
    reliability: 97,
    completeness: 93,
    bias: 16,
    content: `# Interview — Dr. Helena Voss
Topic: Ten Years of the Oxford-Bhutan Exchange
Date: 2038

INTERVIEWER: Has the decade changed your personal beliefs?

VOSS: I am still an atheist. I am a much more careful one.

INTERVIEWER: What does "careful" mean there?

VOSS: It means I used to think disagreement was something you won. I now think it's something you refine. I still think they're wrong about quite a lot. I think I'm better at explaining exactly which parts, and why, than I was in 2027. That's not nothing.`
  },

  {
    id: "ev_ord_009_successor",
    memoryId: "ord_mem_009",
    title: "Continuation Record — Post-2041",
    sourceType: EvidenceSource.GOVERNMENT_DOCUMENT,
    tier: EvidenceTier.CONTEXT,
    reliability: 88,
    completeness: 80,
    bias: 6,
    content: `# Tashi Lhundrup Monastery — Administrative Record

Lama Karma Wangchuk, founder of the Oxford exchange program, died 2041.

His successor, Lama Tenzin Dorji, confirmed continuation of the annual seminar in his first public statement as abbot:

"My predecessor did not build this for himself. He built it as a practice. Practices continue, or they were never practices at all."

The seminar has run annually since, with minor format adjustments.`
  },

  // =====================================================
  // ord_mem_010 — THE EXPERIMENT THAT FAILED CORRECTLY
  // =====================================================
  {
    id: "ev_ord_010_paper",
    memoryId: "ord_mem_010",
    title: "Publication — Exclusion of the Halden Particle",
    sourceType: EvidenceSource.SCIENTIFIC_RECORD,
    tier: EvidenceTier.SURFACE,
    reliability: 99,
    completeness: 97,
    bias: 2,
    content: `# Exclusion of the Halden Particle to 99.7% Confidence
Meridian Detector Array Collaboration
Published 2039

ABSTRACT: Nine years of data collection (2032–2038) across the predicted mass range for the theoretical Halden particle yield no statistically significant detection event. We exclude the particle's existence within the proposed mass range to 99.7% confidence.

This result represents a definitive negative finding with direct implications for three existing theoretical frameworks built on the particle's predicted properties.`
  },

  {
    id: "ev_ord_010_lindqvist",
    memoryId: "ord_mem_010",
    title: "Dr. Lindqvist — Decision Memo",
    sourceType: EvidenceSource.PERSONAL_DIARY,
    tier: EvidenceTier.CONTEXT,
    reliability: 95,
    completeness: 89,
    bias: 11,
    content: `# Internal Memo — Project Leadership
Dr. Astrid Lindqvist
Date: 2038

We have two options: extend into lower-probability mass ranges at significant additional cost, or publish what we have.

A null result this precise is not a failure. It eliminates an entire theoretical branch. That is exactly what we built this for.

I am recommending publication. I understand this is not the result some collaborators hoped for. It is, I believe, the more valuable one.`
  },

  {
    id: "ev_ord_010_funding",
    memoryId: "ord_mem_010",
    title: "Publication Celebration Funding Request",
    sourceType: EvidenceSource.GOVERNMENT_DOCUMENT,
    tier: EvidenceTier.COMPLICATION,
    reliability: 84,
    completeness: 71,
    bias: 18,
    content: `# Funding Request — Consortium Administrative Office
Re: Publication symposium for Meridian null result
Submitted: 2039

Request denied on first submission (insufficient justification for celebratory symposium funding for a "non-discovery").

Approved on second submission, six months later, after Dr. Lindqvist's appeal noting the result's citation trajectory.

Dr. Lindqvist's appeal note: "It took us nine years and €200 million to build something that found nothing. It is taking longer than either to convince anyone that finding nothing was worth celebrating."`
  },

  {
    id: "ev_ord_010_frameworks",
    memoryId: "ord_mem_010",
    title: "Theoretical Framework Impact Survey",
    sourceType: EvidenceSource.SCIENTIFIC_RECORD,
    tier: EvidenceTier.REVELATION,
    reliability: 93,
    completeness: 86,
    bias: 8,
    content: `# Survey of Theoretical Impact — Post-Meridian Result
Published 2041

Three frameworks built substantially on the Halden particle's predicted existence were formally abandoned by their primary proponents within 18 months of the 2039 publication.

Two alternative frameworks, previously considered marginal, received significantly increased research attention and funding in the same period.

Survey conclusion: "The Meridian null result did not end inquiry. It redirected it more decisively than most positive discoveries in the field's recent history."`
  },

  {
    id: "ev_ord_010_citations",
    memoryId: "ord_mem_010",
    title: "Citation Index — 2039 Publication",
    sourceType: EvidenceSource.SCIENTIFIC_RECORD,
    tier: EvidenceTier.CONTEXT,
    reliability: 97,
    completeness: 94,
    bias: 3,
    content: `# Citation Tracking
"Exclusion of the Halden Particle to 99.7% Confidence" (2039)

Citations within first decade: 1,400+
Ranking: Among most-cited particle physics papers of the decade

Notable pattern: unusually high citation rate for a null result. Most cited null results in the field average significantly fewer citations within comparable timeframes, attributed to the precision of the exclusion and its direct bearing on multiple competing frameworks.`
  },

  {
    id: "ev_ord_010_construction",
    memoryId: "ord_mem_010",
    title: "Meridian Detector Array — Construction Record",
    sourceType: EvidenceSource.GOVERNMENT_DOCUMENT,
    tier: EvidenceTier.SURFACE,
    reliability: 96,
    completeness: 90,
    bias: 4,
    content: `# Construction and Operations Summary
Meridian Detector Array

Construction period: 2029–2032
Cost: €200 million (consortium-funded, 14 institutions)
Peak staffing: 340 researchers and technicians
Operational data collection: 2032–2038 (9 years)

Detector decommissioned 2040 following publication and a final calibration cross-check study.`
  },

  // =====================================================
  // ord_mem_011 — THE CUSTODY ARRANGEMENT WRITTEN BY CHILDREN
  // =====================================================
  {
    id: "ev_ord_011_plan",
    memoryId: "ord_mem_011",
    title: "Original Parenting Plan — Haugen Children",
    sourceType: EvidenceSource.GOVERNMENT_DOCUMENT,
    tier: EvidenceTier.SURFACE,
    reliability: 97,
    completeness: 100,
    bias: 14,
    content: `# Parenting Plan
Drafted by: Mette (14), Lars (11), and Aksel Haugen (9)
Facilitated by: Ingrid Solberg, Family Mediator
Date: 2031

Routine school nights: alternating weekly, per attached calendar.

Switch clause: Any child may request a schedule switch with 48 hours notice. No reason required. Request goes to both parents simultaneously.

Holiday clause (authored by Lars): "If we want to spend a holiday with Grandma instead of either of you, that's also allowed."

Modification clause (authored by Mette): All three children must be consulted together before any change to this plan, even if the change only directly affects one of us.`
  },

  {
    id: "ev_ord_011_ruling",
    memoryId: "ord_mem_011",
    title: "Family Court Ruling — Tromsø District Court",
    sourceType: EvidenceSource.GOVERNMENT_DOCUMENT,
    tier: EvidenceTier.REVELATION,
    reliability: 99,
    completeness: 96,
    bias: 5,
    content: `# Ruling — Haugen v. Haugen, Custody Matter
Tromsø District Court, 2032
Presiding: Judge Anne-Lise Fjeld

The court approves the submitted parenting plan without modification.

Judicial note: In seventeen years on this bench, this is the first custody arrangement I have reviewed that was substantively authored by the children it concerns, with adult guidance limited to logistics and legal feasibility.

The plan demonstrates a level of mutual consideration between the three children, and an apparent trust from both parents in that process, that this court has no basis and no wish to second-guess.`
  },

  {
    id: "ev_ord_011_mediator",
    memoryId: "ord_mem_011",
    title: "Mediator's Process Notes — Ingrid Solberg",
    sourceType: EvidenceSource.PERSONAL_DIARY,
    tier: EvidenceTier.CONTEXT,
    reliability: 92,
    completeness: 84,
    bias: 16,
    content: `# Process Notes
Ingrid Solberg, Family Mediator
Six sessions, 2031

Session 1: Children skeptical, expected to be asked to "pick a side." Reassured this was not the purpose.

Session 3: Mette began taking the process very seriously — drafting questions for her brothers about what mattered most to each of them individually.

Session 5: Lars's holiday clause initially caused tension (Aksel did not understand why grandparents needed a separate provision). Resolved when Lars explained: "Because sometimes we don't want to choose between Mom and Dad at all, and that should be allowed too."

Session 6: Final draft. All three children read it aloud together before signing.`
  },

  {
    id: "ev_ord_011_parents",
    memoryId: "ord_mem_011",
    title: "Separate Interviews — Erik and Solveig Haugen",
    sourceType: EvidenceSource.AUDIO_LOG,
    tier: EvidenceTier.CONTEXT,
    reliability: 94,
    completeness: 88,
    bias: 21,
    content: `# Separate Interviews
2033, one year post-ruling

ERIK: I cried reading it. Not from sadness. From how fair it was. We were so afraid of damaging them and they handed us something more careful than we'd have managed ourselves.

SOLVEIG: I cried because of how clearly it showed they'd been watching us the whole eighteen years. They knew exactly what each of us needed to hear in that document. I don't know when they learned to see us that closely. I wish I'd noticed sooner that they could.`
  },

  {
    id: "ev_ord_011_lars",
    memoryId: "ord_mem_011",
    title: "Lars Haugen — Later Reflection",
    sourceType: EvidenceSource.PERSONAL_DIARY,
    tier: EvidenceTier.COMPLICATION,
    reliability: 88,
    completeness: 79,
    bias: 19,
    content: `# School Writing Assignment — "A Time I Solved a Problem"
Lars Haugen, age 13, submitted 2033

When my parents got divorced everyone wanted to know which one I'd pick. Nobody understood that wasn't the question. The question was how do you keep two people who don't want to live together but still both want you.

We wrote it down ourselves because the grown-ups kept trying to guess what we needed and getting it a little wrong. Not because they didn't care. Because they weren't us.

I'm proud of the part about Grandma. That was my idea.`
  },

  {
    id: "ev_ord_011_scholarship",
    memoryId: "ord_mem_011",
    title: "Norwegian Family Law Review — Case Citation",
    sourceType: EvidenceSource.SCIENTIFIC_RECORD,
    tier: EvidenceTier.REVELATION,
    reliability: 90,
    completeness: 82,
    bias: 9,
    content: `# Nordic Journal of Family Law
2035 review article: "Child-Inclusive Mediation: Promise and Practical Limits"

The Haugen case (2032) is cited as a notable but atypical example of child-authored custody arrangement.

Authors note: "While the outcome was successful, the resource and emotional intensity of the six-session process, and the children's ages and articulacy, may limit replicability. This should be read as a demonstration of possibility, not a template assumed to generalize."

The case remains one of the most-cited examples of its kind in Norwegian family law literature as of publication.`
  },

  // =====================================================
  // ord_mem_012 — THE DIVER WHO MAPPED THE DARK
  // =====================================================
  {
    id: "ev_ord_012_survey",
    memoryId: "ord_mem_012",
    title: "Quintana Roo Speleological Survey — Donated Data Record",
    sourceType: EvidenceSource.SCIENTIFIC_RECORD,
    tier: EvidenceTier.SURFACE,
    reliability: 95,
    completeness: 91,
    bias: 6,
    content: `# Survey Data Donation Record
Contributor: Rosa Itzel Pech
Period: 2026–2041

Total surveyed passage length: approximately 40 km
Previously unmapped systems connected: 3 cenote networks confirmed linked
Survey method: line-laying with hand-drawn slates (2026–2031), sonar-assisted mapping (2031–present)

Donation terms: No payment accepted. No commercial licensing. Full data released to regional survey for unrestricted scientific and conservation use.`
  },

  {
    id: "ev_ord_012_interview",
    memoryId: "ord_mem_012",
    title: "Interview — Rosa Itzel Pech",
    sourceType: EvidenceSource.AUDIO_LOG,
    tier: EvidenceTier.CONTEXT,
    reliability: 96,
    completeness: 90,
    bias: 17,
    content: `# Interview Transcript
Subject: Rosa Itzel Pech
Date: 2034

INTERVIEWER: Why donate everything? You could have built a career, a brand, around this work.

PECH: I thought about it. I decided the rooms didn't belong to me just because I was the first one to see them. I was lucky. I had the training, the time, the obsession. That's not the same as ownership.

INTERVIEWER: Does it bother you that most people won't know your name when they dive your routes?

PECH: They'll know the rock. The water. That's enough. I didn't make any of it. I just wrote down where it was.`
  },

  {
    id: "ev_ord_012_donation",
    memoryId: "ord_mem_012",
    title: "Formal Data Transfer Agreement",
    sourceType: EvidenceSource.GOVERNMENT_DOCUMENT,
    tier: EvidenceTier.CONTEXT,
    reliability: 97,
    completeness: 95,
    bias: 4,
    content: `# Data Transfer Agreement
Donor: Rosa Itzel Pech
Recipient: Quintana Roo Speleological Survey
Date: 2041

Transfer includes: complete survey records, 40km mapped passage data, sonar logs, and slate-drawn original field maps (digitized).

Compensation: None requested. Donor declined standard contributor stipend.

Attached note from donor: "These should belong to whoever dives there after me."`
  },

  {
    id: "ev_ord_012_artifacts",
    memoryId: "ord_mem_012",
    title: "Archaeological Partnership Record",
    sourceType: EvidenceSource.SCIENTIFIC_RECORD,
    tier: EvidenceTier.REVELATION,
    reliability: 91,
    completeness: 84,
    bias: 8,
    content: `# Archaeological Survey Partnership
Following discoveries in Pech-mapped passages, 2036–2039

Three passages surveyed by Rosa Itzel Pech were found to contain undisturbed pre-Columbian ceramic and skeletal material.

Pech facilitated initial access for archaeological teams but did not participate in excavation or analysis, citing in written correspondence: "I know how to find a passage. I do not know how to read what's inside one responsibly. That's not my training, and I won't pretend otherwise."

Formal partnership established between her donated survey data and the regional archaeological authority, 2039.`
  },

  {
    id: "ev_ord_012_risk",
    memoryId: "ord_mem_012",
    title: "Solo Diving Risk Statement",
    sourceType: EvidenceSource.AUDIO_LOG,
    tier: EvidenceTier.COMPLICATION,
    reliability: 93,
    completeness: 87,
    bias: 22,
    content: `# Interview Excerpt — On Solo Cave Diving
2034

INTERVIEWER: Solo cave diving is considered extremely high-risk. Why dive alone?

PECH: I know exactly what I'm risking. I have made peace with it in a way I don't expect anyone else to understand.

A partner changes how you move. How fast you go. What risks you're willing to carry for someone else's safety, not just your own. I made a choice early on about what kind of explorer I wanted to be. It's not the safest choice. I've never told anyone it was.`
  },

  {
    id: "ev_ord_012_gaps",
    memoryId: "ord_mem_012",
    title: "\"Rosa's Gaps\" — Informal Survey Terminology",
    sourceType: EvidenceSource.SCIENTIFIC_RECORD,
    tier: EvidenceTier.CONTEXT,
    reliability: 89,
    completeness: 78,
    bias: 11,
    content: `# Internal Terminology Note
Quintana Roo Speleological Survey

Survey staff have informally adopted the term "Rosa's gaps" to refer to passages inferred from water flow and pressure analysis but not yet personally explored and confirmed by Pech's mapping methodology.

The term is not official nomenclature but appears consistently in internal planning documents and field notes as of the most recent survey update.`
  },

  // =====================================================
  // ord_mem_013 — THE PROFESSOR WHO FAILED HIS OWN ARGUMENT
  // =====================================================
  {
    id: "ev_ord_013_original",
    memoryId: "ord_mem_013",
    title: "Original Publication — The Asymmetry of Future Harm",
    sourceType: EvidenceSource.SCIENTIFIC_RECORD,
    tier: EvidenceTier.SURFACE,
    reliability: 98,
    completeness: 95,
    bias: 12,
    content: `# The Asymmetry of Future Harm
Dr. Thaddeus Okonkwo-Reyes
Published 2025

ABSTRACT: This paper argues that potential future suffering should be weighted significantly less than present, certain suffering in policy decision frameworks, based on an asymmetry in moral certainty across temporal distance.

[Cited 1,400+ times within first decade of publication. Became foundational text for "present-weighted ethics" school of thought.]`
  },

  {
    id: "ev_ord_013_retraction",
    memoryId: "ord_mem_013",
    title: "Retraction Paper — Where I Was Wrong",
    sourceType: EvidenceSource.SCIENTIFIC_RECORD,
    tier: EvidenceTier.REVELATION,
    reliability: 99,
    completeness: 98,
    bias: 18,
    content: `# Retraction and Reconsideration: Where I Was Wrong
Dr. Thaddeus Okonkwo-Reyes
Published 2036

I did not make a small mistake. I made the kind of mistake that, if uncorrected, causes real damage when people build policy on top of it.

My 2025 argument modeled moral uncertainty across time incorrectly. I treated epistemic distance as if it were equivalent to moral distance. It is not. I spent eleven years watching people cite the wrong argument approvingly. I could not continue allowing that without formally correcting it.

This paper retracts the central claim of "The Asymmetry of Future Harm" in full.`
  },

  {
    id: "ev_ord_013_critics",
    memoryId: "ord_mem_013",
    title: "Critical Response — Prof. Daniela Marchetti",
    sourceType: EvidenceSource.SCIENTIFIC_RECORD,
    tier: EvidenceTier.COMPLICATION,
    reliability: 87,
    completeness: 80,
    bias: 34,
    content: `# Response Essay
Prof. Daniela Marchetti, Journal of Applied Ethics, 2036

Okonkwo-Reyes spent a decade providing intellectual cover for policy decisions that harmed vulnerable future populations, and a apology paper does not undo eleven years of citation.

I respect the retraction. I do not believe it discharges the responsibility. Several climate policy frameworks built directly on his original asymmetry argument remain in force today, unrevised. Intellectual honesty arriving eleven years late is honesty. It is not remedy.`
  },

  {
    id: "ev_ord_013_supporters",
    memoryId: "ord_mem_013",
    title: "Supportive Response — Dr. Aisha Bello",
    sourceType: EvidenceSource.SCIENTIFIC_RECORD,
    tier: EvidenceTier.CONTEXT,
    reliability: 89,
    completeness: 83,
    bias: 26,
    content: `# Response Essay
Dr. Aisha Bello, Journal of Applied Ethics, 2036

Formal retraction is exceptionally rare in philosophy compared to the empirical sciences, where it is institutionally expected. Okonkwo-Reyes has done something genuinely uncomfortable and genuinely rare: publicly dismantled his own most influential work, knowing it would damage his legacy.

Whether this discharges any practical responsibility for past policy harm is a separate question from whether the act itself represents intellectual integrity. I believe it does, unambiguously.`
  },

  {
    id: "ev_ord_013_policy",
    memoryId: "ord_mem_013",
    title: "Policy Framework Impact Audit",
    sourceType: EvidenceSource.GOVERNMENT_DOCUMENT,
    tier: EvidenceTier.REVELATION,
    reliability: 91,
    completeness: 77,
    bias: 14,
    content: `# Audit — Policy Frameworks Citing Okonkwo-Reyes (2025)
Conducted 2038

Frameworks identified citing the original 2025 paper: 14, across 6 national and international bodies.

Frameworks formally revised following the 2036 retraction: 3
Frameworks unrevised as of audit date: 11

Audit note: "The gap between academic retraction and policy revision is significant. Several cited frameworks have not been formally reviewed since original adoption, regardless of the retraction's existence or content."`
  },

  {
    id: "ev_ord_013_seminar",
    memoryId: "ord_mem_013",
    title: "Graduate Seminar Syllabus — Required Reading Note",
    sourceType: EvidenceSource.SCIENTIFIC_RECORD,
    tier: EvidenceTier.CONTEXT,
    reliability: 94,
    completeness: 89,
    bias: 9,
    content: `# Graduate Seminar Syllabus
Dr. Thaddeus Okonkwo-Reyes, 2037–2044 (until retirement)

Required reading, Week 1: Both "The Asymmetry of Future Harm" (2025) and "Retraction and Reconsideration" (2036), read in sequence.

Instructor's note in syllabus: "I am not teaching you what to think. I am teaching you what it costs to admit you were wrong, and why the cost is still worth paying."`
  },

  // =====================================================
  // ord_mem_014 — THE PATENT GIVEN AWAY
  // =====================================================
  {
    id: "ev_ord_014_patent",
    memoryId: "ord_mem_014",
    title: "Public Domain Patent Release Filing",
    sourceType: EvidenceSource.GOVERNMENT_DOCUMENT,
    tier: EvidenceTier.SURFACE,
    reliability: 99,
    completeness: 97,
    bias: 3,
    content: `# Patent Release Filing
Patent holder: Lysoderm Therapeutics (Dr. Samuel Achterberg, majority shareholder)
Date: July 2034

The undersigned hereby dedicates the referenced patent to the public domain, effective immediately, waiving all licensing rights and royalty claims in perpetuity.

This filing was executed against the documented objection of a minority of the company's board of directors.`
  },

  {
    id: "ev_ord_014_board",
    memoryId: "ord_mem_014",
    title: "Emergency Board Meeting Minutes",
    sourceType: EvidenceSource.GOVERNMENT_DOCUMENT,
    tier: EvidenceTier.CONTEXT,
    reliability: 95,
    completeness: 90,
    bias: 16,
    content: `# Lysoderm Therapeutics — Board Minutes
Emergency Session, March 2034

Achterberg presented proposal to release core patent into public domain.

Investor representative (Hartwell Capital): Formally objects, citing estimated $400-600M valuation under standard commercialization path and fiduciary duty to shareholders.

Achterberg, as majority shareholder, confirmed intent to proceed regardless of board objection, citing personal diagnosis disclosed earlier in the same session.

Vote was advisory only; majority shareholder control rendered board approval unnecessary for the filing to proceed.`
  },

  {
    id: "ev_ord_014_lawsuit",
    memoryId: "ord_mem_014",
    title: "Shareholder Lawsuit Filings",
    sourceType: EvidenceSource.GOVERNMENT_DOCUMENT,
    tier: EvidenceTier.COMPLICATION,
    reliability: 93,
    completeness: 85,
    bias: 19,
    content: `# Civil Filing Summary
Two minority shareholder suits filed against Achterberg estate, 2034–2035

Both allege breach of fiduciary duty in releasing patent without full board consent.

Both settled out of court, confidential terms, 2036.

Public court record confirms settlement occurred but contains no disclosed financial terms. Neither suit proceeded to trial or published judgment.`
  },

  {
    id: "ev_ord_014_employees",
    memoryId: "ord_mem_014",
    title: "Company Closure Record",
    sourceType: EvidenceSource.NEWS_REPORT,
    tier: EvidenceTier.REVELATION,
    reliability: 90,
    completeness: 81,
    bias: 13,
    content: `# Business Closure Notice
Lysoderm Therapeutics, 2036

Following the 2034 patent release and subsequent loss of commercial revenue stream, Lysoderm Therapeutics ceased operations.

41 employees affected by closure.

Former CFO, in exit interview: "We all knew what Sam was choosing when he did it. Most of us would have made the same call. That didn't make losing our jobs easier. Both things are true."`
  },

  {
    id: "ev_ord_014_sister",
    memoryId: "ord_mem_014",
    title: "Family Statement — Achterberg's Sister",
    sourceType: EvidenceSource.PERSONAL_DIARY,
    tier: EvidenceTier.REVELATION,
    reliability: 96,
    completeness: 92,
    bias: 28,
    content: `# Statement
Margit Achterberg, 2056 (22 years after the patent release)

My brother built that company because of me. He gave away what could have made his estate wealthy, and he did it dying, knowing it was too late to help him the way it helped everyone else.

I have lived twenty-two extra years on a treatment that costs a fraction of what it would have cost if he'd done what his advisors wanted.

I think about that trade every single day I'm still here and he isn't.`
  },

  {
    id: "ev_ord_014_pricing",
    memoryId: "ord_mem_014",
    title: "Generic Manufacturing Pricing Impact",
    sourceType: EvidenceSource.SCIENTIFIC_RECORD,
    tier: EvidenceTier.CONTEXT,
    reliability: 95,
    completeness: 89,
    bias: 5,
    content: `# Treatment Cost Analysis — Post-Patent Release
Period: 2034–2036

Generic manufacturers established in 11 countries within 18 months of public domain release.

Average treatment cost reduction: 94% in regions previously unable to afford original commercial pricing.

Estimated additional patients gaining access in first 5 years: 38,000–52,000 (modeling range due to incomplete reporting in several regions).`
  },

  // =====================================================
  // ord_mem_015 — THE MURAL PAINTED OVER FORTY TIMES
  // =====================================================
  {
    id: "ev_ord_015_eze",
    memoryId: "ord_mem_015",
    title: "Original Artist Account — Chidinma Eze",
    sourceType: EvidenceSource.AUDIO_LOG,
    tier: EvidenceTier.SURFACE,
    reliability: 92,
    completeness: 86,
    bias: 16,
    content: `# Interview — Chidinma Eze
2025, shortly after the original mural

I painted the market scene because that's where I grew up. The wall wasn't being used for anything. Nobody told me not to.

I never expected anyone to touch it again, honestly. I figured it would fade or get painted over by someone with no relationship to it at all. I didn't expect what happened instead.`
  },

  {
    id: "ev_ord_015_adeyemi",
    memoryId: "ord_mem_015",
    title: "Dr. Folake Adeyemi — Documentation Project Notes",
    sourceType: EvidenceSource.PERSONAL_DIARY,
    tier: EvidenceTier.CONTEXT,
    reliability: 94,
    completeness: 91,
    bias: 11,
    content: `# Project Notes — "The Wall That Remembers Itself"
Dr. Folake Adeyemi, local historian
Begun 2029

I started photographing the wall before each repainting once I noticed the pattern of preservation. Nobody asked me to do this. I realized after the fifth or sixth version that this had quietly become the only complete visual timeline of this neighborhood's recent informal art history.

Every photograph, taken in the hours before a new layer goes up, is the last record of what came before.`
  },

  {
    id: "ev_ord_015_tradition",
    memoryId: "ord_mem_015",
    title: "Community Tradition — Informal Rule Documentation",
    sourceType: EvidenceSource.PERSONAL_DIARY,
    tier: EvidenceTier.CONTEXT,
    reliability: 87,
    completeness: 74,
    bias: 21,
    content: `# Collected Statements — Contributing Artists
Various dates, 2027–2036

"Nobody wrote the rule down. You just knew, somehow, if you painted there, you carried something forward. I asked the artist before me what I should keep. She said: 'You'll know it when you see it.'"

"It became less about the rule and more about what it meant. You're not just painting a wall. You're admitting the wall has a memory and you're agreeing to be part of it."`
  },

  {
    id: "ev_ord_015_sandal",
    memoryId: "ord_mem_015",
    title: "The Red Sandal — Tracing Analysis",
    sourceType: EvidenceSource.SCIENTIFIC_RECORD,
    tier: EvidenceTier.REVELATION,
    reliability: 89,
    completeness: 80,
    bias: 7,
    content: `# Visual Tracing Analysis
Dr. Folake Adeyemi's photographic archive, cross-referenced

A small red sandal, part of a child figure in Eze's original 2025 mural, can be traced through 31 of the approximately 40 documented versions in increasingly abstracted form.

By version 22 (approx. 2031), the sandal has become a small red geometric shape integrated into an unrelated composition, no longer recognizable as a sandal without the tracing record.

By version 40 (2037), the traceable element is a single red brushstroke whose connection to the original sandal is supported only by the unbroken documentation chain — not by visual resemblance alone.`
  },

  {
    id: "ev_ord_015_owner",
    memoryId: "ord_mem_015",
    title: "Building Owner Statement",
    sourceType: EvidenceSource.NEWS_REPORT,
    tier: EvidenceTier.CONTEXT,
    reliability: 85,
    completeness: 68,
    bias: 13,
    content: `# Local Reporter Inquiry
2028

The disused factory's registered owner, located after some difficulty, stated he had no objection to the ongoing mural activity and had in fact visited the wall twice to see new versions.

"I haven't used that wall for anything in fifteen years. They're using it for something. I don't see a reason to stop them."

He declined to be named in the published article.`
  },

  {
    id: "ev_ord_015_versions",
    memoryId: "ord_mem_015",
    title: "Version Count and Artist Tally",
    sourceType: EvidenceSource.PERSONAL_DIARY,
    tier: EvidenceTier.CONTEXT,
    reliability: 86,
    completeness: 79,
    bias: 9,
    content: `# Archive Summary — As of 2037 Documentation
Dr. Folake Adeyemi

Total documented repainting events: approximately 40 (38 confirmed via photograph, 2 inferred from gaps in documentation)
Identified individual artists: 26
Anonymous or unconfirmed contributions: estimated 6–9

When shown the 2037 version and asked to identify her original sandal motif, Chidinma Eze (now an established muralist) took several minutes before pointing to a small red shape:

"Maybe. I think that's it. I'm not sure anymore, and I don't think that not being sure is a bad thing."`
  },

];