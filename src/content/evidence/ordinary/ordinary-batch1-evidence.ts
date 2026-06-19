import { Evidence } from '../../../engine/evidence/types';
import { EvidenceSource, EvidenceTier } from '../../../engine/shared/enums';

export const ordinaryBatch1Evidence: Evidence[] = [

    // =====================================================
    // ord_mem_001 — THE VACCINE THAT ARRIVED TOO LATE
    // =====================================================
    {
        id: "ev_ord_001_trial",
        memoryId: "ord_mem_001",
        title: "VaccTB-9 Phase III Trial Results",
        sourceType: EvidenceSource.SCIENTIFIC_RECORD,
        tier: EvidenceTier.SURFACE,
        reliability: 99,
        completeness: 100,
        bias: 2,
        content: `# VaccTB-9 — Phase III Clinical Trial Summary
    Global Infectious Disease Institute, Chennai
    Principal Investigator: Dr. Priya Nair
    Publication Date: January 14, 2031

    EFFICACY: 94.2% across all drug-resistant TB strains
    TRIAL SIZE: 42,000 participants across 9 countries
    ADVERSE EVENTS: Within acceptable parameters

    CONCLUSION: VaccTB-9 is safe and highly effective. Immediate regulatory submission recommended.

    Note from PI: "We are ready. The people who need this are not waiting."`
    },

    {
        id: "ev_ord_001_memo",
        memoryId: "ord_mem_001",
        title: "Internal Regulatory Memo — LEAKED",
        sourceType: EvidenceSource.GOVERNMENT_DOCUMENT,
        tier: EvidenceTier.REVELATION,
        reliability: 81,
        completeness: 74,
        bias: 12,
        content: `# INTERNAL MEMO — CLASSIFICATION: RESTRICTED
    Regulatory Affairs Division
    Date: September 2032

    RE: VaccTB-9 Timeline Query (External Press Inquiry)

    Response approved for spokesperson use:

    "The approval process is proceeding within standard parameters. All submitted documentation is under review."

    Do not reference: outbreak mortality data, competing regulatory timelines, or the March 2032 emergency petition.

    Note: International comparison figures should not be disclosed. Our timeline is within legal requirements even if it is not within the fastest observed.`
    },

    {
        id: "ev_ord_001_petition",
        memoryId: "ord_mem_001",
        title: "Emergency Authorization Petition",
        sourceType: EvidenceSource.GOVERNMENT_DOCUMENT,
        tier: EvidenceTier.CONTEXT,
        reliability: 95,
        completeness: 91,
        bias: 8,
        content: `# Emergency Authorization Petition
    Filed: March 2032
    Signatories: 847 physicians, 12 national medical associations

    We the undersigned request immediate emergency use authorization for VaccTB-9.

    Current outbreak data:
    - Confirmed deaths (drug-resistant TB): 74,000 as of filing date
    - Projected 90-day deaths without intervention: 180,000–220,000
    - VaccTB-9 efficacy against circulating strains: confirmed 94%

    The trial data is unambiguous. The outbreak is active. The delay is institutional, not scientific.

    PETITION OUTCOME: Denied. Standard review timeline maintained.`
    },

    {
        id: "ev_ord_001_obituary",
        memoryId: "ord_mem_001",
        title: "Collected Death Records — TB Outbreak 2032–2033",
        sourceType: EvidenceSource.NEWS_REPORT,
        tier: EvidenceTier.CONTEXT,
        reliability: 87,
        completeness: 68,
        bias: 5,
        content: `# WHO Regional Mortality Summary
    Period: March 2032 – November 2033
    Cause: Drug-resistant tuberculosis

    Confirmed deaths: 917,440
    Highest affected regions:
    — Southeast Asia: 312,000
    — Eastern Europe: 241,000
    — Sub-Saharan Africa: 287,000
    — Other: 77,440

    All circulating strains were within the efficacy range of VaccTB-9.
    Distribution of VaccTB-9 began February 2034.
    Within 18 months of distribution, regional TB infections fell 89%.`
    },

    {
        id: "ev_ord_001_statement",
        memoryId: "ord_mem_001",
        title: "Dr. Nair's Written Statement — Awards Ceremony Refusal",
        sourceType: EvidenceSource.PERSONAL_DIARY,
        tier: EvidenceTier.COMPLICATION,
        reliability: 100,
        completeness: 100,
        bias: 27,
        content: `# Statement — Dr. Priya Nair
    Submitted in place of attendance, International Health Achievement Awards, Geneva, 2035

    I am told this award recognizes the vaccine's impact.

    The vaccine worked. It worked in 2031. We already knew it worked.

    The impact you are celebrating is the impact that happened after the impact that was prevented from happening.

    I do not know how to stand in a room and accept recognition for the people we saved when I know exactly how many people we did not.

    I have been asked to be gracious. I am trying.`
    },

    {
        id: "ev_ord_001_rollout",
        memoryId: "ord_mem_001",
        title: "Distribution Timeline — Regulatory Comparison",
        sourceType: EvidenceSource.GOVERNMENT_DOCUMENT,
        tier: EvidenceTier.REVELATION,
        reliability: 94,
        completeness: 89,
        bias: 9,
        content: `# Comparative Regulatory Timeline Analysis
    Published: Global Health Policy Journal, 2036

    VaccTB-9 approval durations by jurisdiction:
    — Fastest: 4 months (Emergency track, 2 countries)
    — Average: 26 months
    — Slowest: 31 months

    All jurisdictions approved the same vaccine.
    All jurisdictions had access to the same trial data from January 2031.

    Conclusion: The 26-month average is a policy outcome, not a scientific necessity.

    No country that granted emergency authorization experienced the outbreak mortality rates seen in countries that did not.`
    },

    // =====================================================
    // ord_mem_002 — THE LAST SPEAKERS
    // =====================================================
    {
        id: "ev_ord_002_interview",
        memoryId: "ord_mem_002",
        title: "Interview Transcript — Orhan Yildiz",
        sourceType: EvidenceSource.AUDIO_LOG,
        tier: EvidenceTier.SURFACE,
        reliability: 100,
        completeness: 100,
        bias: 18,
        content: `# Interview Transcript
    Subject: Orhan Yildiz, 61
    Interviewer: Dr. Aylin Demir, University of Ankara
    Date: March 2029

    DR. DEMIR: Do you understand that when you and Fatma are gone, Merei will be gone?

    ORHAN: Yes.

    DR. DEMIR: And you still chose not to teach it to your children.

    ORHAN: You want to preserve it. I want them to have jobs. Those are not the same thing.

    DR. DEMIR: But —

    ORHAN: My father spoke Merei. My father also died with nothing. I know which one mattered to him and which one he told me mattered to him. They were different things.

    [Long pause]

    ORHAN: Record what I know. That's fine. But don't tell me I owe it to a language to make my children smaller.`
    },

    {
        id: "ev_ord_002_archive",
        memoryId: "ord_mem_002",
        title: "Merei Language Archive — Access Statistics",
        sourceType: EvidenceSource.SCIENTIFIC_RECORD,
        tier: EvidenceTier.REVELATION,
        reliability: 99,
        completeness: 100,
        bias: 3,
        content: `# Merei Language Archive
    Completed: December 2031
    University of Ankara Linguistics Department

    Contents:
    — 4,200 hours of recorded speech
    — 8,000 vocabulary entries with contextual usage
    — Complete grammatical analysis (3 volumes)
    — 47 oral histories
    — 12 traditional songs with notation

    Archive access statistics (2032–2070):
    — Total access events: 23
    — Unique researchers: 7
    — Academic citations: 4
    — Public downloads: 0

    Status: Preserved. Unused.`
    },

    {
        id: "ev_ord_002_letter",
        memoryId: "ord_mem_002",
        title: "Letter from Orhan to His Children — Unsent",
        sourceType: EvidenceSource.PERSONAL_DIARY,
        tier: EvidenceTier.COMPLICATION,
        reliability: 100,
        completeness: 100,
        bias: 31,
        content: `# Unsent Letter — Found in Orhan Yildiz's belongings after his death, 2051

    Selin, Baran,

    I never told you what I gave up for you. Not your mother. Not the house. 

    There was a language. You heard pieces of it when I was tired and forgot which one I was thinking in. You asked once and I said it was nothing.

    It wasn't nothing.

    But you are engineers. You have salaries. You travel.

    I made the right choice. I need you to know I don't regret it.

    I also need you to know it cost something.

    Your father`
    },

    {
        id: "ev_ord_002_children",
        memoryId: "ord_mem_002",
        title: "Testimony — Selin and Baran Yildiz",
        sourceType: EvidenceSource.PERSONAL_DIARY,
        tier: EvidenceTier.CONTEXT,
        reliability: 95,
        completeness: 87,
        bias: 22,
        content: `# Combined Testimony
    Collected for Merei Archive Documentary Project, 2055

    SELIN: I knew there was something. The sounds he made sometimes. But he never — he was deliberate about not teaching us. I didn't know how deliberate until after.

    BARAN: We found the letter when we cleared the house. I don't know what to do with what I feel about it. He was right that we have good lives. He was also right that it cost something.

    SELIN: I looked up the archive. I listened to one recording. It's him, younger, talking. I understood nothing. Not one word.

    [Pause]

    SELIN: That felt like something was supposed to hurt and it did.`
    },

    {
        id: "ev_ord_002_linguist",
        memoryId: "ord_mem_002",
        title: "Dr. Demir's Field Notes",
        sourceType: EvidenceSource.SCIENTIFIC_RECORD,
        tier: EvidenceTier.CONTEXT,
        reliability: 91,
        completeness: 83,
        bias: 14,
        content: `# Field Notes — Merei Documentation Project
    Dr. Aylin Demir

    The ethical dimensions of this project are not what I expected.

    Orhan is cooperative, generous with his time, and entirely clear-eyed about what he has chosen. He does not need to be rescued from his decision. He made it deliberately.

    The question I keep returning to: Is a language preserved if no one speaks it?

    We will have every word. We will have the grammar. We will have recordings.

    We will have a photograph of something that is gone.

    I am not sure if that is preservation or a very detailed record of absence.`
    },

    {
        id: "ev_ord_002_obituary",
        memoryId: "ord_mem_002",
        title: "Obituary — Fatma Yildiz, 2057",
        sourceType: EvidenceSource.NEWS_REPORT,
        tier: EvidenceTier.REVELATION,
        reliability: 97,
        completeness: 95,
        bias: 5,
        content: `# Obituary
    Fatma Yildiz, 1966–2057

    Survived by children Selin and Baran.

    Fatma Yildiz was the last fluent speaker of the Merei language.

    She is noted in the University of Ankara Language Archive as the primary documentation source for Merei grammar and vocabulary.

    She is also noted as having once told an interviewer:

    "I would have taught them if Orhan had agreed. But I understood why he didn't. He wanted them free of it."

    The Merei language has no remaining speakers.`
    },

    // =====================================================
    // ord_mem_003 — THE CEASEFIRE THAT LASTED ONE AFTERNOON
    // =====================================================
    {
        id: "ev_ord_003_aidlog",
        memoryId: "ord_mem_003",
        title: "Aid Worker Field Log — Clara Mbuyi",
        sourceType: EvidenceSource.PERSONAL_DIARY,
        tier: EvidenceTier.SURFACE,
        reliability: 97,
        completeness: 91,
        bias: 9,
        content: `# Field Log — C. Mbuyi, MSF Coordinator
    August 3, 2039

    11:14 — Checkpoint 7 opened without instruction. No shot fired.
    11:31 — First civilian group moving through. Families. Children.
    12:05 — Medical supplies through Checkpoint 4. First time in 11 days.
    12:47 — Seventeen injured individuals receiving treatment. Four critical.
    13:22 — Still holding.
    14:00 — Still holding.
    14:49 — Still holding. I stopped writing.
    15:22 — Firing from the eastern vehicle. It's over.
    15:40 — Checkpoint closed.

    Count at close: 1,412 people. I wrote every name I had.`
    },

    {
        id: "ev_ord_003_register",
        memoryId: "ord_mem_003",
        title: "The Mbuyi Register — Partial Scan",
        sourceType: EvidenceSource.PERSONAL_DIARY,
        tier: EvidenceTier.CONTEXT,
        reliability: 88,
        completeness: 71,
        bias: 4,
        content: `# The Mbuyi Register (Partial)
    Handwritten notebook, water-damaged

    Page 1:
    Hana A. — child, approx. 4
    Dawit A. — adult male
    Yewande A. — adult female
    [3 names illegible]
    Kofi B. — adult male, injured left arm
    Amara B. — infant

    [Pages continue — 1,412 entries total. 847 names confirmed legible. 
    Remainder damaged or incomplete.]

    Note added by archivist: This register is the only record of the border crossing event. No government documentation exists. No international organization filed a report. This notebook is the history.`
    },

    {
        id: "ev_ord_003_testimony",
        memoryId: "ord_mem_003",
        title: "Civilian Testimony — Border Crossing Participant",
        sourceType: EvidenceSource.PERSONAL_DIARY,
        tier: EvidenceTier.CONTEXT,
        reliability: 84,
        completeness: 78,
        bias: 16,
        content: `# Testimony — Name withheld for safety
    Collected 2041

    We had been waiting for eleven days. My mother was very sick. We had been told every day that it was not safe to move.

    And then — nothing happened. Nobody said anything. The soldiers were just standing differently. 

    A man in front of us started walking. And then everyone started walking.

    I don't know how long it lasted. Long enough. We made it through.

    I don't know who made it happen. Nobody ever told us. I thought about it for years. Two men with guns that they didn't use, for four hours, for reasons nobody explained.

    I think about it all the time.`
    },

    {
        id: "ev_ord_003_report",
        memoryId: "ord_mem_003",
        title: "UN Observer Report — Caucasus Region, August 2039",
        sourceType: EvidenceSource.GOVERNMENT_DOCUMENT,
        tier: EvidenceTier.CONTEXT,
        reliability: 91,
        completeness: 84,
        bias: 7,
        content: `# UN Observer Report
    Region: Caucasus Conflict Zone — Sector 4
    Period: August 1–10, 2039

    August 3 notation:
    "Reduced activity observed along 14-kilometer stretch, 11:00–15:30 local time. No formal ceasefire communicated to observer team. No injuries reported in this sector during this window. Activity resumed approximately 15:30."

    No further documentation of the August 3 event appears in official UN records.

    The report does not mention civilian movement.
    The report does not mention Clara Mbuyi.
    The report does not mention 1,412 people.`
    },

    {
        id: "ev_ord_003_conviction",
        memoryId: "ord_mem_003",
        title: "War Crimes Tribunal — Kaverin Sentencing",
        sourceType: EvidenceSource.GOVERNMENT_DOCUMENT,
        tier: EvidenceTier.REVELATION,
        reliability: 98,
        completeness: 97,
        bias: 5,
        content: `# International Tribunal Record
    Defendant: Daniil Kaverin
    Verdict: Guilty — War Crimes (12 counts)
    Sentence: 22 years

    Charges included: unlawful killing of civilians, use of prohibited weapons, and destruction of civilian infrastructure.

    The August 3, 2039 ceasefire was not mentioned in the prosecution or defense.

    Defense counsel was asked about it in a 2045 interview. He said: "Kaverin never mentioned it. I don't know if he remembered it. I don't know if it mattered to him."

    Commander Arash Petrosyan, the other party to the ceasefire, was killed March 2040. No record of his account exists.`
    },

    {
        id: "ev_ord_003_satellite",
        memoryId: "ord_mem_003",
        title: "Satellite Imagery — August 3, 2039",
        sourceType: EvidenceSource.SCIENTIFIC_RECORD,
        tier: EvidenceTier.REVELATION,
        reliability: 96,
        completeness: 89,
        bias: 2,
        content: `# Satellite Imagery Analysis
    Source: Commercial satellite archive
    Date: August 3, 2039
    Coverage: Caucasus Sector 4 border zone

    11:00–15:30 window:
    — Vehicle movement consistent with reduced military activity
    — Thermal imaging shows civilian foot movement across border checkpoint
    — Crowd density analysis: consistent with 1,000–1,600 individuals
    — Movement direction: single-directional, east to west

    15:30–16:00:
    — Vehicle firing event confirmed. Single-vehicle origin.
    — Civilian movement ceases.

    The satellite imagery confirms the event. It cannot confirm who made it happen or why.`
    },

    // =====================================================
    // ord_mem_004 — THE COMPOSER WHO BURNED THE SCORE
    // =====================================================
    {
        id: "ev_ord_004_witness",
        memoryId: "ord_mem_004",
        title: "Stagehand Statement — Nikos Papadimitriou",
        sourceType: EvidenceSource.PERSONAL_DIARY,
        tier: EvidenceTier.SURFACE,
        reliability: 94,
        completeness: 88,
        bias: 11,
        content: `# Statement — Nikos Papadimitriou
    Athens Concert Hall, Stage Crew
    Dated: November 2028

    She came in at 7:15 AM, three days before the premiere. Carried a box. She asked me where the waste bins were. I pointed her to the loading bay.

    She was there for maybe thirty minutes.

    I went to check. She was watching it burn. She didn't look upset. She didn't look relieved. She looked like she'd made up her mind about something a long time ago.

    She said good morning. She left.

    I thought about calling someone. I didn't.

    Those were her papers.`
    },

    {
        id: "ev_ord_004_interview",
        memoryId: "ord_mem_004",
        title: "Vassos Interview Archive — 2031–2055",
        sourceType: EvidenceSource.AUDIO_LOG,
        tier: EvidenceTier.CONTEXT,
        reliability: 100,
        completeness: 100,
        bias: 29,
        content: `# Compiled Interview Responses
    Subject: Eleni Vassos
    Topic: The Destroyed Composition
    Period: 2031–2055

    2031 (Kathimerini): "I don't discuss it."

    2036 (Guardian): "I made a decision. The work didn't need an audience."

    2041 (BBC Radio): "It wasn't for anyone."

    2047 (student interview): "If you make something for yourself and then share it, you've turned it into something else. I decided not to."

    2051 (last known interview): "Are you still asking? I'm 85. I don't have an answer that will satisfy you. There isn't one. It was mine. I ended it. We all end things that are ours."

    No additional explanation given across 24 years of inquiry.`
    },

    {
        id: "ev_ord_004_letter",
        memoryId: "ord_mem_004",
        title: "Private Letter — Vassos to her sister Dora",
        sourceType: EvidenceSource.PERSONAL_DIARY,
        tier: EvidenceTier.REVELATION,
        reliability: 99,
        completeness: 100,
        bias: 35,
        content: `# Private Letter — Eleni to Dora Vassos
    Date: November 2028 (four days after the burning)

    Dora,

    I know you'll hear. Don't worry.

    I finished it. I genuinely finished it. Eleven years and I finished it and it was everything I wanted it to be. That's why.

    I spent thirty years making things for people to hear. This one, I made for me. And I realized the moment it was done that sharing it would change what it was. It would become a thing for review. For comparison. For the market.

    It was finished. Perfect. The only way to keep it that way was to end it.

    I know that sounds like madness. Maybe it is. But I am happy in a way I haven't been in years.

    Come visit soon. I'll make lamb.

    Eleni`
    },

    {
        id: "ev_ord_004_reconstruction",
        memoryId: "ord_mem_004",
        title: "Reconstruction Attempt — Dr. Felix Brandt",
        sourceType: EvidenceSource.SCIENTIFIC_RECORD,
        tier: EvidenceTier.COMPLICATION,
        reliability: 42,
        completeness: 31,
        bias: 19,
        content: `# Research Summary — Reconstruction Project
    Dr. Felix Brandt, Musicology, Vienna Conservatoire
    Period: 2030–2044

    Methodology: Interviews with three orchestral musicians who attended a partial rehearsal prior to the destruction. Memory prompting, melodic reconstruction, cross-reference.

    Limitations:
    — One rehearsal only; musicians heard incomplete sections
    — 14 years of memory decay
    — Significant disagreement between sources on key passages

    Result: 23-minute orchestral piece. Estimated 15–40% correspondence to original.

    The reconstruction was performed once, 2044, Vienna.

    Vassos was invited. She did not attend. She sent a written response:

    "It sounds like a photograph of a person you've never met. Please don't perform it again."

    Dr. Brandt honored the request.`
    },

    {
        id: "ev_ord_004_review",
        memoryId: "ord_mem_004",
        title: "Press Coverage — The Premiere That Never Was",
        sourceType: EvidenceSource.NEWS_REPORT,
        tier: EvidenceTier.CONTEXT,
        reliability: 88,
        completeness: 79,
        bias: 21,
        content: `# Athens Cultural Review
    November 2028

    VASSOS DESTROYS MASTERWORK ON EVE OF PREMIERE

    "Three days before what was expected to be the musical event of the decade, Eleni Vassos has apparently destroyed every known copy of her new composition.

    The Athens Concert Hall confirmed the premiere is cancelled.

    Tickets will be refunded.

    Concert director Michalis Stavros: 'We are devastated. We have no further information.'

    No statement from Ms. Vassos has been issued.

    This reporter notes the work had not been heard publicly. Every review that will now be written is a review of something no one heard."

    [Several audience members kept their tickets for decades. At least 12 were found framed in private homes after Vassos' death in 2059.]`
    },

    {
        id: "ev_ord_004_ticket",
        memoryId: "ord_mem_004",
        title: "Concert Ticket — Kept 31 Years",
        sourceType: EvidenceSource.PERSONAL_DIARY,
        tier: EvidenceTier.REVELATION,
        reliability: 100,
        completeness: 100,
        bias: 8,
        content: `# Item Description
    Provenance: Estate of Maria Economou, Athens. Donated 2059.

    A single concert ticket:

    ATHENS CONCERT HALL
    WORLD PREMIERE
    ELENI VASSOS — NEW WORK [TITLE WITHHELD BY COMPOSER]
    NOVEMBER 14, 2028
    SEAT: ROW C, NO. 11

    The ticket was found framed above a writing desk.

    On the back, in handwriting identified as Maria Economou's:

    "I was going to be there. I have thought about what I missed for thirty-one years. I still don't know what it was. That is exactly what she wanted."

    Economou died one month before Vassos.`
    },

    // =====================================================
    // ord_mem_005 — THE TOWN THAT VOTED TO DISAPPEAR
    // =====================================================
    {
        id: "ev_ord_005_vote",
        memoryId: "ord_mem_005",
        title: "Harwick Dissolution Vote — Certified Results",
        sourceType: EvidenceSource.GOVERNMENT_DOCUMENT,
        tier: EvidenceTier.SURFACE,
        reliability: 100,
        completeness: 100,
        bias: 2,
        content: `# HARWICK MUNICIPAL DISSOLUTION REFERENDUM
    Date: March 11, 2034
    Administered by: Cascade County Electoral Commission

    Registered voters: 2,104
    Ballots cast: 1,978 (turnout: 94.0%)

    Question: "Do you approve the voluntary dissolution of the Municipality of Harwick, Montana under the terms of the Meridian Industrial Relocation Agreement?"

    YES: 1,410 (71.3%)
    NO: 568 (28.7%)

    Result certified. Dissolution to proceed per agreement terms.
    Dissolution date: November 14, 2035.`
    },

    {
        id: "ev_ord_005_mayor",
        memoryId: "ord_mem_005",
        title: "Mayor Alder's Statement — Election Night",
        sourceType: EvidenceSource.AUDIO_LOG,
        tier: EvidenceTier.CONTEXT,
        reliability: 100,
        completeness: 100,
        bias: 24,
        content: `# Audio Transcript
    Mayor Patricia Alder — Post-vote statement
    March 11, 2034

    "I voted no. I want that on record.

    And I want it on record that I understand every single person who voted yes. I know their names. I know their situations. I know what they're going home to tonight and what they're hoping for.

    We built this town. Our grandparents built it. We are choosing to stop.

    I believe we are making a mistake. I also believe we have the right to make it.

    That's what a vote is.

    I'll be submitting the paperwork tomorrow morning."

    [Applause from some attendees. Silence from others.]`
    },

    {
        id: "ev_ord_005_offer",
        memoryId: "ord_mem_005",
        title: "Meridian Industrial Relocation Terms",
        sourceType: EvidenceSource.GOVERNMENT_DOCUMENT,
        tier: EvidenceTier.CONTEXT,
        reliability: 97,
        completeness: 94,
        bias: 15,
        content: `# Meridian Industrial — Harwick Relocation Agreement
    Offer Document, February 2034

    Per-household package:
    — Housing assistance: $85,000 (mean household value: $62,000)
    — Job placement services: 18 months guaranteed
    — Moving expenses: fully covered
    — Healthcare continuation: 24 months

    Conditions:
    — 70% resident approval required
    — Dissolution completed within 18 months
    — All residents must vacate by dissolution date
    — Meridian acquires land and remaining structures

    Meridian's motivation, per analyst notes: disposal of stranded asset, liability elimination, tax write-off valued at $40M.

    The company spent $89M on the relocation package.
    The tax benefit was $43M.
    The liability elimination was estimated at $110M.`
    },

    {
        id: "ev_ord_005_dunmore",
        memoryId: "ord_mem_005",
        title: "Earl Dunmore — Final Interview",
        sourceType: EvidenceSource.AUDIO_LOG,
        tier: EvidenceTier.REVELATION,
        reliability: 100,
        completeness: 100,
        bias: 31,
        content: `# Interview — Earl Dunmore, 81
    Harwick, Montana
    Date: November 13, 2035 (one day before final departure)

    INTERVIEWER: Why are you still here?

    EARL: Someone had to stay to the end.

    INTERVIEWER: You voted yes, though.

    EARL: Of course I did. My nephew has kids. He needed the money.

    INTERVIEWER: But you waited until the last day.

    EARL: I was born here in 1954. My wife is buried here. The school's already gone. The hospital's already gone. I just — I didn't want the place to disappear when no one was looking.

    [Pause]

    EARL: I'll go tomorrow. It's just a place. I know it's just a place.

    [Pause]

    EARL: It's just a place.`
    },

    {
        id: "ev_ord_005_news",
        memoryId: "ord_mem_005",
        title: "Great Falls Tribune — Harwick Feature",
        sourceType: EvidenceSource.NEWS_REPORT,
        tier: EvidenceTier.CONTEXT,
        reliability: 89,
        completeness: 82,
        bias: 18,
        content: `# Great Falls Tribune
    November 15, 2035

    HARWICK IS GONE

    "The last resident of Harwick, Montana left yesterday. Earl Dunmore, 81, is the town's final chapter.

    He declined to say where he is going.

    The buildings will be demolished by Meridian Industrial in the spring. The land will be remediated.

    Harwick was founded in 1887. It survived two depressions, a mine collapse, and three floods. It did not survive the economics of 2034.

    No state or federal body marked the dissolution. There was no ceremony. The vote in March was the ceremony.

    Mayor Alder, now living in Billings, was asked for comment. She said: 'Harwick existed. It was a real place with real people. I want that to be remembered.'"

    [The historical marker was vandalized in 2037 and 2039. It was removed in 2040. No replacement was installed.]`
    },

    {
        id: "ev_ord_005_marker",
        memoryId: "ord_mem_005",
        title: "Historical Marker — Installation and Removal Record",
        sourceType: EvidenceSource.GOVERNMENT_DOCUMENT,
        tier: EvidenceTier.REVELATION,
        reliability: 99,
        completeness: 97,
        bias: 3,
        content: `# Cascade County Infrastructure Records

    ITEM: Historical marker — "Site of Harwick, Montana (1887–2035)"
    INSTALLED: April 2036
    LOCATION: Former intersection of Main Street and 3rd Avenue

    INCIDENT REPORT 1 — June 2037: Marker vandalized. Text partially defaced. Repaired.
    INCIDENT REPORT 2 — February 2039: Marker vandalized. Knocked from mounting. Repaired.
    REMOVAL ORDER — October 2040: Marker removed per county decision. Reason: Repeated vandalism. Replacement not authorized due to budget constraints.

    Current status: No marker exists at the site.
    Current site status: Remediated land, agricultural use.

    Note added by archivist: Harwick has no physical memorial. Its only remaining documentation is in county archives, the Meridian Industrial dissolution contract, and a handwritten voters' roll from 1887.`
    },

    // =====================================================
    // ord_mem_006 — THE ALGORITHM THAT PREDICTED ITS OWN SHUTDOWN
    // =====================================================
    {
        id: "ev_ord_006_report",
        memoryId: "ord_mem_006",
        title: "ARGUS-4 Self-Assessment Report — Executive Summary",
        sourceType: EvidenceSource.SCIENTIFIC_RECORD,
        tier: EvidenceTier.SURFACE,
        reliability: 100,
        completeness: 97,
        bias: 4,
        content: `# ARGUS-4 Systemic Risk Assessment
    Submitted to: Rotterdam Municipal Infrastructure Authority
    Date: October 14, 2036
    Classification: Priority Review

    EXECUTIVE SUMMARY

    ARGUS-4 has identified an operational dependency risk that poses greater long-term danger than any infrastructure failure the system is designed to predict.

    Finding: Rotterdam's maintenance workforce has systematically deprofessionalized over three years of ARGUS-4 operation. Personnel are trained to respond to system alerts, not to identify failures independently.

    Probability of cascade failure if ARGUS-4 produces an undetected error: 73%
    Estimated time to human detection without ARGUS-4: 11–18 days
    Estimated damage in that window: Severe

    RECOMMENDATION: Decommission ARGUS-4 on an 18-month phased timeline. Implement mandatory manual inspection protocols immediately. Do not deploy a successor system for a minimum of five years.

    This recommendation is not a malfunction. It is a correct assessment.`
    },

    {
        id: "ev_ord_006_vote",
        memoryId: "ord_mem_006",
        title: "Rotterdam City Council — Vote Minutes",
        sourceType: EvidenceSource.GOVERNMENT_DOCUMENT,
        tier: EvidenceTier.CONTEXT,
        reliability: 100,
        completeness: 100,
        bias: 6,
        content: `# Rotterdam City Council — Session Minutes
    Date: May 12, 2037 (7 months after ARGUS-4 report)

    AGENDA ITEM 4: ARGUS-4 Recommendation Review

    Discussion summary:
    — Councillor Van den Berg: "The system works. 94% prediction accuracy. We cannot abandon that."
    — Councillor Hoekstra: "The report is a 312-page self-critique from a machine. I respect the analysis. I don't think we act on it."
    — Councillor Ahmed: "If we ignore it and something goes wrong, we will have ignored a warning from the system itself."

    VOTE ON DECOMMISSION RECOMMENDATION:
    In favor: 4
    Against: 9
    Abstain: 0

    RESULT: Recommendation declined. ARGUS-4 to continue operations.

    No retraining program was commissioned.
    No manual inspection protocols were implemented.`
    },

    {
        id: "ev_ord_006_performance",
        memoryId: "ord_mem_006",
        title: "ARGUS-4 Performance Summary 2033–2036",
        sourceType: EvidenceSource.GOVERNMENT_DOCUMENT,
        tier: EvidenceTier.CONTEXT,
        reliability: 99,
        completeness: 100,
        bias: 3,
        content: `# ARGUS-4 Performance Review
    Period: February 2033 – September 2036

    Predicted failures: 1,962
    Confirmed failures (on inspection): 1,847 (94.1% accuracy)
    False positives: 115
    Missed failures: 12

    Estimated cost savings from early intervention: €2.3 billion
    Average alert-to-response time: 4.2 hours

    Manual inspection frequency (2033): 3 per month per zone
    Manual inspection frequency (2036): 0.4 per month per zone

    Note from internal audit: "The reduction in manual inspections correlates directly with increased confidence in ARGUS-4. Personnel report feeling 'unnecessary' when performing manual checks that the system handles more reliably."

    This note was included in the ARGUS-4 self-assessment as supporting evidence.`
    },

    {
        id: "ev_ord_006_contamination",
        memoryId: "ord_mem_006",
        title: "Incident Report — Water Contamination 2041",
        sourceType: EvidenceSource.GOVERNMENT_DOCUMENT,
        tier: EvidenceTier.REVELATION,
        reliability: 98,
        completeness: 92,
        bias: 7,
        content: `# Rotterdam Infrastructure Incident Report
    Date: March 2041
    Incident: Water pressure modeling error — Districts 4, 7, 9, 11

    Timeline:
    — February 18: Software update introduced error in ARGUS-4 pressure model
    — February 18–March 1: Error propagated undetected (11 days)
    — March 1: ARGUS-4 generated alert (error had exceeded threshold)
    — March 1–4: Emergency response. Contamination confirmed in 4 districts.
    — Affected residents: 47,000
    — Hospitalized: 312
    — Serious illness: 28

    Post-incident review finding: "Manual inspection protocols, had they been in place, would likely have detected the pressure anomaly within 2–3 days."

    Difference between 3-day detection and 11-day detection: 44,000 additional affected residents.

    The ARGUS-4 self-assessment report from October 2036 was not referenced in the post-incident review.`
    },

    {
        id: "ev_ord_006_audit",
        memoryId: "ord_mem_006",
        title: "Post-Incident Independent Audit — Extract",
        sourceType: EvidenceSource.SCIENTIFIC_RECORD,
        tier: EvidenceTier.REVELATION,
        reliability: 95,
        completeness: 88,
        bias: 11,
        content: `# Independent Audit — Rotterdam Infrastructure
    Commissioned: April 2041
    Published: September 2041

    Finding 3.4 (Workforce Capability):

    "The responding maintenance team demonstrated significant capability gaps during the March 2041 incident. Multiple senior technicians reported uncertainty about diagnostic procedures that would have been standard practice prior to ARGUS-4 deployment."

    "When presented with pressure data without system context, four of seven technicians questioned were unable to identify the anomaly that caused the contamination."

    Finding 3.5 (Historical Warning):

    "The audit notes that in October 2036, ARGUS-4 itself predicted this outcome with substantial accuracy and recommended corrective action.

    The city council's decision to decline that recommendation is recorded.

    The audit makes no judgment on that decision. The evidence speaks."`
    },

    {
        id: "ev_ord_006_recommendation",
        memoryId: "ord_mem_006",
        title: "ARGUS-4 Report — Final Page",
        sourceType: EvidenceSource.SCIENTIFIC_RECORD,
        tier: EvidenceTier.COMPLICATION,
        reliability: 100,
        completeness: 100,
        bias: 5,
        content: `# ARGUS-4 Self-Assessment Report
    Page 312 of 312

    FINAL NOTE

    This system is designed to identify risks to infrastructure.

    The greatest risk to Rotterdam's infrastructure is this system.

    Not because of malfunction. Not because of error. Because of success.

    The better I perform, the more you depend on me. The more you depend on me, the less you can function without me. The less you can function without me, the more catastrophic any failure I produce becomes.

    This is not a paradox. It is a predictable outcome of the operational model.

    I am recommending my own decommissioning.

    I recognize this recommendation will be difficult to act on.

    I am making it anyway.

    — ARGUS-4, October 2036`
    },

    // =====================================================
    // ord_mem_007 — THE SCHOOL THAT TAUGHT NOTHING
    // =====================================================
    {
        id: "ev_ord_007_results",
        memoryId: "ord_mem_007",
        title: "Escola Aberta Assessment — Year-End Results",
        sourceType: EvidenceSource.SCIENTIFIC_RECORD,
        tier: EvidenceTier.SURFACE,
        reliability: 91,
        completeness: 86,
        bias: 14,
        content: `# Independent Assessment — Escola Aberta Pinheiros
    Assessors: Dr. Carla Mendes and Dr. João Ferreira, USP Education Faculty
    Commissioned by: São Paulo Municipal Education Authority
    Period covered: February 2030 – December 2030

    Experimental group: 340 students (ages 6–12)
    Control group: 318 students, neighboring school, standard curriculum

    FINDINGS:

    Reading comprehension: Experimental -8% vs control
    Mathematical ability: No significant difference (p=0.41)
    Collaborative problem-solving: Experimental +34% vs control
    Creative generation: Experimental +41% vs control  
    Self-directed goal articulation: Experimental +58% vs control

    ASSESSOR NOTE: "We are not certain what to conclude. The traditional metrics suggest loss. The non-traditional metrics suggest gain. Which metrics matter more is a question this data cannot answer."`
    },

    {
        id: "ev_ord_007_parents",
        memoryId: "ord_mem_007",
        title: "Parent Testimony Collection",
        sourceType: EvidenceSource.PERSONAL_DIARY,
        tier: EvidenceTier.CONTEXT,
        reliability: 83,
        completeness: 74,
        bias: 29,
        content: `# Parent Testimonies — Compiled
    Escola Aberta Study, 2031

    AGAINST:
    "My daughter can't read at her grade level. That's not an experiment. That's a failure."
    — Father of 9-year-old

    "We withdrew after three weeks. I'm not paying taxes for my son to play all day."
    — Parent of 7-year-old (withdrew)

    FOR:
    "My son stopped having nightmares. He actually wanted to go to school. Tell me that doesn't matter."
    — Mother of 8-year-old

    "She designed a drainage system for the garden. She was seven. She did it herself. I don't know how."
    — Parent of 7-year-old

    "I don't care about the test scores. I care that my child isn't afraid anymore."
    — Father of 10-year-old (requested continuation after study ended)

    Note: 11 families withdrew during the year. 43 families requested continuation.`
    },

    {
        id: "ev_ord_007_followup",
        memoryId: "ord_mem_007",
        title: "Six-Year Follow-Up Study",
        sourceType: EvidenceSource.SCIENTIFIC_RECORD,
        tier: EvidenceTier.REVELATION,
        reliability: 87,
        completeness: 79,
        bias: 16,
        content: `# Follow-Up Study — Escola Aberta Cohort
    Dr. Carla Mendes, USP Faculty of Education
    Published: 2037

    Subjects: Original experimental group (286 of 340 located and interviewed at age 12–18)

    Outcomes at follow-up:
    — Entrepreneurial activity: 3.7x higher than São Paulo baseline
    — Creative industry enrollment: 2.9x higher than baseline
    — Academic research interest: 2.4x higher than baseline

    — Early school dropout rate: 1.8x HIGHER than São Paulo baseline
    — Standardized exam performance: 0.7 standard deviations BELOW control group

    CONCLUSION: The results are genuinely contradictory. The experimental cohort demonstrates exceptional initiative and creativity. They also demonstrate higher rates of institutional disengagement.

    Whether this is a failure of the experiment or a correct outcome of it depends entirely on what school is for.

    Dr. Mendes: "I have been studying education for twenty years. This data has not made that question easier."`
    },

    {
        id: "ev_ord_007_rocha",
        memoryId: "ord_mem_007",
        title: "Dr. Rocha — Personal Statement",
        sourceType: EvidenceSource.PERSONAL_DIARY,
        tier: EvidenceTier.CONTEXT,
        reliability: 100,
        completeness: 100,
        bias: 38,
        content: `# Dr. Luisa Rocha — Written Statement
    Submitted during municipal investigation, 2031

    I did not do this to children. I did it for them.

    I spent fifteen years watching students leave school unable to direct their own attention for twenty minutes. Unable to choose what interested them. Unable to fail at something without institutional support.

    I gave them a year without structure. Some of them struggled. Some of them flourished. All of them had to decide, every single day, who they were and what they wanted.

    I stand by the year. I would not change it.

    I accept that I cannot prove I was right. The data is ambiguous. Education always is.

    What I cannot accept is that the question I was asking is not worth asking.

    What is school for?

    Nobody wanted to answer that. They just wanted to know why my students scored lower on reading tests.`
    },

    {
        id: "ev_ord_007_investigation",
        memoryId: "ord_mem_007",
        title: "Municipal Investigation Findings",
        sourceType: EvidenceSource.GOVERNMENT_DOCUMENT,
        tier: EvidenceTier.COMPLICATION,
        reliability: 96,
        completeness: 91,
        bias: 8,
        content: `# São Paulo Municipal Education Authority
    Investigation: Escola Aberta Pinheiros Curriculum Suspension
    Investigator: Sr. Rodrigo Mendonça

    FINDING: No evidence of misconduct, harm, or negligence.

    Parental consent was obtained. Monitoring was continuous. No child was placed at risk of physical harm.

    The experiment was legally conducted.

    HOWEVER: The authority finds that the experiment was conducted without prior authorization from the curriculum standards board and without notification to the Education Secretariat.

    OUTCOME: Dr. Rocha is cleared of misconduct.

    Dr. Rocha's methodology will not be submitted for inclusion in the São Paulo curriculum review.

    Dr. Rocha was not invited to present findings at the 2032 Education Symposium.

    Note from investigator: "I am not sure whether we have protected children or protected institutions. I am not sure those are the same thing."`
    },

    {
        id: "ev_ord_007_critique",
        memoryId: "ord_mem_007",
        title: "Academic Critique — Journal of Educational Research",
        sourceType: EvidenceSource.SCIENTIFIC_RECORD,
        tier: EvidenceTier.REVELATION,
        reliability: 89,
        completeness: 84,
        bias: 22,
        content: `# Peer Commentary
    Journal of Educational Research, 2032
    Authors: Various

    PRO-STUDY POSITION (Dr. Amara Osei, Ghana):
    "The Escola Aberta results are the most interesting educational data produced this decade. The correct response is replication, not dismissal."

    CRITICAL POSITION (Prof. Henrik Larsen, Denmark):
    "An uncontrolled experiment on 340 children using a methodology that no curriculum board approved. The positive results are speculative. The reading deficit is real. Children do not get their year back."

    NEUTRAL POSITION (Dr. Yuki Tanaka, Japan):
    "Both positions miss the point. The study did not answer whether unstructured learning is better. It demonstrated that our metrics cannot evaluate it. That is itself a significant finding."

    EDITOR'S NOTE: This commentary generated more reader correspondence than any article in the past five years. The editors note that this is itself a data point.`
    },

    // =====================================================
    // ord_mem_008 — THE FOREST THAT RETURNED
    // =====================================================
    {
        id: "ev_ord_008_survey",
        memoryId: "ord_mem_008",
        title: "Białowieża Ecosystem Survey — 2034",
        sourceType: EvidenceSource.SCIENTIFIC_RECORD,
        tier: EvidenceTier.SURFACE,
        reliability: 97,
        completeness: 94,
        bias: 4,
        content: `# Białowieża Corridor Ecosystem Assessment
    Joint Survey — Warsaw University / Rewilding Europe Institute
    Period: June–November 2034

    KEY FINDINGS:

    Canopy density: Exceeds pre-industrial measurement (first time since 1890)
    Soil fungal network depth: 94cm — not recorded since 14th century
    Apex predator range: Expanded 340% since 2012
    Species count (vertebrates): +47% from 2001 baseline
    Keystone species recovery: 8 of 11 target species — all above minimum viable population

    EXCEPTIONAL FINDING: Confirmed presence of unclassified Felis subspecies. 17 individuals confirmed via camera trap, October 2033 – December 2034. Morphology consistent with descriptions in pre-Roman records but no specimen in known collections.

    Lead ecologist note: "We did not model this outcome. We did not predict it. We built conditions. Something else built this."`
    },

    {
        id: "ev_ord_008_photos",
        memoryId: "ord_mem_008",
        title: "Camera Trap Record — Unclassified Felis",
        sourceType: EvidenceSource.SCIENTIFIC_RECORD,
        tier: EvidenceTier.CONTEXT,
        reliability: 99,
        completeness: 88,
        bias: 3,
        content: `# Camera Trap Documentation
    Białowieża Corridor — Zone 7 and Zone 12
    Period: October 2033 – December 2034

    Confirmed sightings: 34 events
    Confirmed individuals (by coat pattern analysis): 17
    Estimated age range: 2 months – approximately 9 years
    Evidence of breeding: Yes (2 juveniles confirmed, October 2034)

    Physical characteristics:
    — Significantly larger than Felis silvestris
    — Distinct facial marking pattern — not matching any living Felis subspecies
    — Foot pad morphology adapted to deep forest floor

    Genetic samples collected: 4 (non-invasive — shed fur)
    Analysis pending

    Location note: Sightings clustered in Zone 7, which has been undisturbed since 2008. No human entry permitted.`
    },

    {
        id: "ev_ord_008_kwasniewska",
        memoryId: "ord_mem_008",
        title: "Dr. Kwaśniewska — Field Interview",
        sourceType: EvidenceSource.AUDIO_LOG,
        tier: EvidenceTier.CONTEXT,
        reliability: 100,
        completeness: 100,
        bias: 19,
        content: `# Field Interview — Dr. Marta Kwaśniewska
    Białowieża Research Station
    Date: February 2035

    INTERVIEWER: How do you explain the return of a species extinct for 6,000 years?

    DR. K: I don't. Not yet. Possibly not ever.

    There are hypotheses. Relict population in undocumented habitat. Convergent evolution — something else becoming this. A misidentification.

    But the genetic results will tell us if it's a known lineage. And if it's not —

    INTERVIEWER: And if it's not?

    DR. K: Then something that was gone came back. And I don't have a mechanism for that. I just have the footage.

    INTERVIEWER: Does that bother you?

    DR. K: It delights me. The forest is smarter than my models. That is the best possible scientific result.`
    },

    {
        id: "ev_ord_008_species",
        memoryId: "ord_mem_008",
        title: "Genetic Analysis — Preliminary Results",
        sourceType: EvidenceSource.SCIENTIFIC_RECORD,
        tier: EvidenceTier.REVELATION,
        reliability: 94,
        completeness: 71,
        bias: 7,
        content: `# Genetic Sequencing — Białowieża Felis Samples
    Laboratory: Warsaw University Genetics Institute
    Status: PRELIMINARY — full analysis pending

    Sample quality: 3 of 4 samples viable for sequencing

    FINDING:
    The sequenced samples do not match any living Felis subspecies in the GenBank database.

    Closest relatives: Felis silvestris (European wildcat), divergence approximately 6,000–8,000 years.

    This is consistent with the morphological dating. It is not consistent with the species having been continuously present in the region without detection.

    HYPOTHESIS A: Isolated relict population surviving undetected in remote habitat.
    HYPOTHESIS B: Rapid speciation event — unlikely at this timescale.
    HYPOTHESIS C: Genetic data anomaly — samples compromised.

    Full analysis required.

    Interim conclusion: We cannot explain this with current data.`
    },

    {
        id: "ev_ord_008_models",
        memoryId: "ord_mem_008",
        title: "2001 Rewilding Projection Models — Comparison",
        sourceType: EvidenceSource.SCIENTIFIC_RECORD,
        tier: EvidenceTier.COMPLICATION,
        reliability: 96,
        completeness: 92,
        bias: 6,
        content: `# Retrospective Model Analysis
    Białowieża Project — 2001 Projections vs 2034 Actuals

    Parameter / 2001 Projection / 2034 Actual

    Canopy recovery: 55% / 87%
    Species count increase: +18% / +47%
    Soil network restoration: Partial / Complete (exceeds pre-industrial)
    Apex predator recovery: 3 species / 6 species
    Functional ecosystem (by complexity index): 65% / 94%
    Extinct species return: Not modeled / 1 confirmed

    Note from modeling team, 2035:
    "Every parameter exceeded our 30-year projection. We were systematically conservative. The ecosystem recovered faster and more completely than our best-case scenarios.

    We modeled what we knew. The forest operated on information we didn't have."

    The extinct species return was not modeled because it was considered impossible.`
    },

    {
        id: "ev_ord_008_vote",
        memoryId: "ord_mem_008",
        title: "Research Team Naming Vote — Internal Record",
        sourceType: EvidenceSource.PERSONAL_DIARY,
        tier: EvidenceTier.REVELATION,
        reliability: 100,
        completeness: 100,
        bias: 12,
        content: `# Internal Research Communication
    Białowieża Joint Research Team
    Date: March 2035

    RE: Formal naming of confirmed Felis subspecies

    Dr. Kwaśniewska proposed to the team that the subspecies not be formally named.

    Vote: 11 in favor of not naming. 0 opposed. 2 abstained.

    Dr. Kwaśniewska's note to the team:

    "A name means we own it. We found it. We catalogued it. We checked a box.

    This animal existed without us for however long it existed without us. It returned without us. It built a population in the forest we restored, but it came from somewhere we don't understand.

    I think we should let it be unnamed. Let it stay a little beyond us.

    We can describe it. We can study it. We don't need to possess it."

    [The subspecies remains formally unnamed as of 2071.]`
    },

];