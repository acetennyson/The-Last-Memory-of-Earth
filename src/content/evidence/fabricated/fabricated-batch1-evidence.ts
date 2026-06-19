import { Evidence } from '../../../engine/evidence/types';
import { EvidenceSource, EvidenceTier } from '../../../engine/shared/enums';

// ═══════════════════════════════════════════════════════════════
// FABRICATED HISTORY — EARLY PHASE EVIDENCE
// These memories did not happen as described. At this phase the
// fabrication is NOT exposed by any evidence tier — even REVELATION.
// The only trace is a quiet corruption record (see corruptions export
// below) logged under mundane categories (MISSING_DATA / SOURCE_LOSS).
// A player reading only the evidence will have no reason to doubt
// these. That is intentional.
// ═══════════════════════════════════════════════════════════════

export const fabricatedBatch1Evidence: Evidence[] = [

  // =====================================================
  // fab_mem_001 — THE GLACIER KEEPER
  // =====================================================
  {
    id: "ev_fab_001_dataset",
    memoryId: "fab_mem_001",
    title: "Voss Ice-Core Dataset — Summary Catalogue",
    sourceType: EvidenceSource.SCIENTIFIC_RECORD,
    tier: EvidenceTier.SURFACE,
    reliability: 95,
    completeness: 88,
    bias: 4,
    content: `# Outpost Kjeldsen Ice-Core Catalogue
Researcher: Dr. Hannelore Voss
Period: 2026–2037

Total cores extracted: 340
Depth range: 40m – 2,840m
Continuous record span: 11,400 years (estimated)

Quarterly transmission log shows consistent submission to Nordic Climate Consortium throughout tenure, with two minor gaps (equipment failure, logged separately).

Dataset remains in active use for Arctic paleoclimate modeling as of most recent citation index.`
  },

  {
    id: "ev_fab_001_verification",
    memoryId: "fab_mem_001",
    title: "Nordic Climate Consortium — Independent Verification",
    sourceType: EvidenceSource.SCIENTIFIC_RECORD,
    tier: EvidenceTier.CONTEXT,
    reliability: 96,
    completeness: 91,
    bias: 3,
    content: `# Verification Report
Nordic Climate Consortium, Cross-Reference Division

Voss dataset cross-checked against satellite radiometry, n=14 sampling points.

Result: Consistent in all 14 instances, within expected measurement tolerance.

2029 warming pulse anomaly independently confirmed via three separate paleoclimate methods (borehole thermometry, isotope ratio analysis, and accumulation rate modeling) by separate research teams in 2031, 2033, and 2035.

No discrepancies flagged.`
  },

  {
    id: "ev_fab_001_transfer",
    memoryId: "fab_mem_001",
    title: "Personnel Transfer Request",
    sourceType: EvidenceSource.PERSONAL_DIARY,
    tier: EvidenceTier.CONTEXT,
    reliability: 90,
    completeness: 85,
    bias: 14,
    content: `# Transfer Request Form
Submitted by: Dr. H. Voss
Date: March 2037

Requested action: Permanent reassignment, non-field position.

Reason for request (optional field): "Eleven winters is enough for one person to give a place."

Approved without further inquiry. Standard processing.`
  },

  {
    id: "ev_fab_001_supply",
    memoryId: "fab_mem_001",
    title: "Outpost Kjeldsen Supply Flight Log",
    sourceType: EvidenceSource.GOVERNMENT_DOCUMENT,
    tier: EvidenceTier.SURFACE,
    reliability: 93,
    completeness: 80,
    bias: 5,
    content: `# Supply Flight Records — Outpost Kjeldsen
2026–2037

Scheduled flights: 22 (biannual)
Completed: 20
Weather-cancelled and rescheduled: 2

Cargo manifests consistent with single-occupant resupply throughout period.

No anomalies logged.`
  },

  {
    id: "ev_fab_001_consortium",
    memoryId: "fab_mem_001",
    title: "Consortium Citation Index",
    sourceType: EvidenceSource.SCIENTIFIC_RECORD,
    tier: EvidenceTier.CONTEXT,
    reliability: 92,
    completeness: 84,
    bias: 6,
    content: `# Citation Index — Voss Ice-Core Dataset

Academic citations (2037–present): 412
Used as reference dataset in: 38 published climate models
Institutional endorsements: Nordic Climate Consortium, 3 university paleoclimate departments

The dataset is treated as a standard reference in Arctic climate literature with no recorded disputes regarding its provenance or accuracy.`
  },

  // =====================================================
  // fab_mem_002 — THE BRIDGE AT CALLE VERDE
  // =====================================================
  {
    id: "ev_fab_002_petitions",
    memoryId: "fab_mem_002",
    title: "Municipal Petition Archive — Calle Verde Bridge Requests",
    sourceType: EvidenceSource.GOVERNMENT_DOCUMENT,
    tier: EvidenceTier.SURFACE,
    reliability: 91,
    completeness: 87,
    bias: 9,
    content: `# Petition Log — Lima Municipal Records
Subject: Pedestrian bridge, Calle Verde ravine crossing

Petitions filed: 7 (2024–2031)
Status: All "Acknowledged — Under Review"
Funding allocated: None

Final petition (2031) includes annotation from reviewing clerk: "Recommend prioritization given seasonal access disruption." No further action recorded.`
  },

  {
    id: "ev_fab_002_ferreyra",
    memoryId: "fab_mem_002",
    title: "Interview — Tomás Ferreyra",
    sourceType: EvidenceSource.AUDIO_LOG,
    tier: EvidenceTier.CONTEXT,
    reliability: 88,
    completeness: 92,
    bias: 12,
    content: `# Interview Transcript
Subject: Tomás Ferreyra, retired structural engineer
Date: 2040 (dedication ceremony)

"I designed bridges for thirty years before I retired. I knew what we needed wasn't complicated. It was just unfunded.

So I asked the neighborhood: if I design it, will you help build it? Everyone said yes.

Four months. Donated cable, donated lumber, a lot of weekends.

I'm not surprised it held. I checked my own math twice."`
  },

  {
    id: "ev_fab_002_adoption",
    memoryId: "fab_mem_002",
    title: "Municipal Adoption Certificate",
    sourceType: EvidenceSource.GOVERNMENT_DOCUMENT,
    tier: EvidenceTier.REVELATION,
    reliability: 95,
    completeness: 96,
    bias: 4,
    content: `# Certificate of Municipal Adoption
Structure: Calle Verde Pedestrian Bridge
Date: 2040

Following formal structural assessment, the City of Lima hereby adopts the Calle Verde pedestrian bridge into the municipal infrastructure registry.

Assessment findings: Structure meets current safety code with minor reinforcement recommendations (completed).

Plaque text approved: "Built by the residents of Calle Verde, 2031."`
  },

  {
    id: "ev_fab_002_inspection",
    memoryId: "fab_mem_002",
    title: "Informal Engineering Note",
    sourceType: EvidenceSource.PERSONAL_DIARY,
    tier: EvidenceTier.COMPLICATION,
    reliability: 76,
    completeness: 65,
    bias: 18,
    content: `# Handwritten Note
Found among Ferreyra's papers, undated

Checked the load calculations again tonight. Within tolerance, comfortably.

Talked to Raúl from the city — he came by off the clock, walked the whole span, said it looked better than half the "official" footbridges he inspects for work.

No paperwork from him. He wasn't supposed to be here in any official capacity. But I trust his eye more than most permits I've seen.`
  },

  {
    id: "ev_fab_002_usage",
    memoryId: "fab_mem_002",
    title: "Community Usage Estimate",
    sourceType: EvidenceSource.NEWS_REPORT,
    tier: EvidenceTier.CONTEXT,
    reliability: 81,
    completeness: 73,
    bias: 19,
    content: `# Local Coverage — El Comercio (regional edition)
2035

"The unofficial bridge at Calle Verde has become, by informal count, one of the most heavily used pieces of infrastructure in the district during flood season — an estimated 4,000 daily crossings, all without a single recorded structural incident in four years.

Residents describe it less as a shortcut and more as a restored connection to the rest of the city."`
  },

  // =====================================================
  // fab_mem_003 — LETTERS TO A FUTURE DOCTOR
  // =====================================================
  {
    id: "ev_fab_003_letters",
    memoryId: "fab_mem_003",
    title: "Excerpt — Letter 47",
    sourceType: EvidenceSource.PERSONAL_DIARY,
    tier: EvidenceTier.SURFACE,
    reliability: 97,
    completeness: 100,
    bias: 22,
    content: `# Letter 47 (excerpt)
Margaret Oyelaran, undated, believed written early 2028

You will lose a patient you were sure you could save. It will happen earlier in your career than you expect, and it will not get easier the way people promise you it will.

What gets easier is knowing what to do with your hands in the five minutes after. Find something useful. Restock something. Write something down. The grief will still be there when the task is done. But you will have done something true with the time in between.

I wish someone had told me this on a Tuesday in 1998. I am telling you now.`
  },

  {
    id: "ev_fab_003_discovery",
    memoryId: "fab_mem_003",
    title: "Archivist's Discovery Memo",
    sourceType: EvidenceSource.GOVERNMENT_DOCUMENT,
    tier: EvidenceTier.CONTEXT,
    reliability: 90,
    completeness: 84,
    bias: 8,
    content: `# Internal Memo — Hospital Archives
Date: 2035

While preparing materials for the facility centennial history, archivist J. J. Reyes located an uncatalogued box (Storage Unit 14, Shelf C) containing 203 handwritten letters attributed to former hospice nurse Margaret Oyelaran (d. 2029).

Letters appear complete and consistently authored. Recommend cataloguing and review for potential publication, pending family consent.`
  },

  {
    id: "ev_fab_003_survey",
    memoryId: "fab_mem_003",
    title: "Nursing Education Impact Survey",
    sourceType: EvidenceSource.SCIENTIFIC_RECORD,
    tier: EvidenceTier.CONTEXT,
    reliability: 87,
    completeness: 79,
    bias: 11,
    content: `# Survey Results — Nursing Preparedness Study
Period: 2041
Sample: 412 nursing students, 3 institutions

Group A (read "Letters to a Future Doctor" as part of curriculum): Self-assessed preparedness for difficult patient interactions — significantly higher than Group B.

Group B (control, standard curriculum only): Baseline preparedness scores.

Effect size: Moderate to large (Cohen's d = 0.61)

Researchers note self-report limitations but consider the result notable enough to recommend further controlled study.`
  },

  {
    id: "ev_fab_003_family",
    memoryId: "fab_mem_003",
    title: "Family Statement on Publication",
    sourceType: EvidenceSource.PERSONAL_DIARY,
    tier: EvidenceTier.CONTEXT,
    reliability: 93,
    completeness: 88,
    bias: 15,
    content: `# Statement from the Oyelaran Family
Provided to publisher, 2036

"Our mother never wrote those letters for an audience. She wrote them because she had thirty-one years of things she'd never said out loud, and she ran out of time to say them in person.

We believe she would be glad they helped someone. We also believe she would be a little embarrassed by all this attention.

All proceeds go to the scholarship fund, as she would have wanted, even though she never asked for one."`
  },

  {
    id: "ev_fab_003_publication",
    memoryId: "fab_mem_003",
    title: "Publication Record",
    sourceType: EvidenceSource.NEWS_REPORT,
    tier: EvidenceTier.SURFACE,
    reliability: 89,
    completeness: 82,
    bias: 10,
    content: `# Publisher's Note
"Letters to a Future Doctor" — Published 2036

Edited from the original 203 letters with family permission. Twelve letters omitted at family request for personal content unrelated to clinical practice.

Adopted into nursing curricula at institutions in three countries within five years of publication.

Royalties directed to the Margaret Oyelaran Hospice Care Scholarship Fund.`
  },

  // =====================================================
  // fab_mem_004 — THE CARTOGRAPHER OF EMPTY PLACES
  // =====================================================
  {
    id: "ev_fab_004_dataset",
    memoryId: "fab_mem_004",
    title: "Kovač Open Geographic Dataset — Summary",
    sourceType: EvidenceSource.SCIENTIFIC_RECORD,
    tier: EvidenceTier.SURFACE,
    reliability: 94,
    completeness: 89,
    bias: 5,
    content: `# Dataset Summary
Contributor: Janez Kovač
Period: 2022–2034

Total mapped distance: 14,000 km
Coverage: Slovenia, Croatia, Austria (rural and border regions)
Licensing: Open, non-commercial and commercial use permitted without fee

Method: Handheld GPS logging, cross-referenced with resident interviews for historical road usage context.`
  },

  {
    id: "ev_fab_004_agency",
    memoryId: "fab_mem_004",
    title: "National Mapping Agency Integration Notice",
    sourceType: EvidenceSource.GOVERNMENT_DOCUMENT,
    tier: EvidenceTier.REVELATION,
    reliability: 96,
    completeness: 93,
    bias: 3,
    content: `# Integration Notice
Slovenian National Mapping Agency
Date: 2036

Following accuracy review, 60% of the Kovač open dataset (8,400 km of previously unmapped routes) has been formally integrated into the national cartographic database.

Accuracy assessment: 97.2% positional accuracy against ground-truth resurvey sample (n=120 segments).

Austria (2038) and Croatia (2039) subsequently completed similar integration reviews with comparable results.`
  },

  {
    id: "ev_fab_004_ceremony",
    memoryId: "fab_mem_004",
    title: "Recognition Ceremony — Attendance Note",
    sourceType: EvidenceSource.NEWS_REPORT,
    tier: EvidenceTier.CONTEXT,
    reliability: 85,
    completeness: 77,
    bias: 14,
    content: `# Local Press Note
2036

The Slovenian Geographic Society's recognition ceremony for citizen contributions to national cartography went ahead without its primary honoree.

Janez Kovač, 71, sent his regrets: "I have a road near Tolmin I haven't finished yet. The weather window is short this time of year."

The Society awarded the recognition in absentia.`
  },

  {
    id: "ev_fab_004_method",
    memoryId: "fab_mem_004",
    title: "Kovač's Field Notebook — Sample Entry",
    sourceType: EvidenceSource.PERSONAL_DIARY,
    tier: EvidenceTier.CONTEXT,
    reliability: 91,
    completeness: 95,
    bias: 7,
    content: `# Field Notebook Entry
Undated, estimated 2029

Talked to old Anže today, 84, who's walked the path behind his father's farm his whole life. Told me three generations have used it as a shortcut to the mill road. No map has ever shown it.

Logged 1.4km. Confirmed with two more residents independently before recording.

This is the thing the maps miss. Not that the roads aren't real. That nobody asked the people who use them.`
  },

  {
    id: "ev_fab_004_obituary",
    memoryId: "fab_mem_004",
    title: "Obituary — Janez Kovač",
    sourceType: EvidenceSource.NEWS_REPORT,
    tier: EvidenceTier.CONTEXT,
    reliability: 92,
    completeness: 88,
    bias: 9,
    content: `# Obituary
Janez Kovač, 1953–2044

Retired postal worker turned citizen cartographer. His "Kovač correction" remains integrated into official maps of three countries.

He is remembered by neighbors less for the recognition his work received and more for being, as one resident put it, "the only person who ever wrote down that our road existed."

He was mapping until the final months of his life.`
  },

  // =====================================================
  // fab_mem_005 — THE TRANSLATOR WHO STAYED
  // =====================================================
  {
    id: "ev_fab_005_debrief",
    memoryId: "fab_mem_005",
    title: "UN Field Debrief — B. Fonseca",
    sourceType: EvidenceSource.GOVERNMENT_DOCUMENT,
    tier: EvidenceTier.SURFACE,
    reliability: 92,
    completeness: 86,
    bias: 6,
    content: `# Field Debrief Summary
Subject: Beatriz Fonseca, Field Interpreter
Date: 2033

Subject requested and was granted exception to standard evacuation protocol to complete translation of evacuation materials into four minority languages (estimated combined speaker population: 60,000).

Subject evacuated on final scheduled transport after confirming material distribution to community liaisons in all four target groups.

Subject statement: "My job was to make sure people understood. People still needed to understand. I left when that job was finished."`
  },

  {
    id: "ev_fab_005_protocol",
    memoryId: "fab_mem_005",
    title: "2040 Field Interpreter Protocol Review",
    sourceType: EvidenceSource.GOVERNMENT_DOCUMENT,
    tier: EvidenceTier.CONTEXT,
    reliability: 90,
    completeness: 81,
    bias: 9,
    content: `# Protocol Review — UN Field Interpretation Services
Date: 2040

Section 4.2 cites an anonymized 2033 case in which a field interpreter's exception request during a crisis evacuation resulted in significantly improved information access for minority language populations.

Recommendation: Formalize exception procedure for similar future scenarios rather than requiring ad hoc approval under time pressure.

Adopted: Yes, effective 2041.`
  },

  {
    id: "ev_fab_005_leaders",
    memoryId: "fab_mem_005",
    title: "Community Liaison Statements",
    sourceType: EvidenceSource.PERSONAL_DIARY,
    tier: EvidenceTier.CONTEXT,
    reliability: 84,
    completeness: 75,
    bias: 17,
    content: `# Collected Statements
Community liaisons, four language groups, 2033 evacuation

"She came to each of us personally. Not a broadcast. Not a flyer. She made sure each group's leader understood, and trusted us to pass it on correctly."

"I did not know her name until after. I knew her voice, and that she didn't leave until we told her we understood."

"There were people working that crisis whose names I'll never know. Hers I remember, because she made sure we could ask her things."`
  },

  {
    id: "ev_fab_005_transport",
    memoryId: "fab_mem_005",
    title: "Evacuation Transport Manifest — Final Transport",
    sourceType: EvidenceSource.GOVERNMENT_DOCUMENT,
    tier: EvidenceTier.CONTEXT,
    reliability: 95,
    completeness: 90,
    bias: 4,
    content: `# Transport Manifest
Final scheduled evacuation transport, Day 3
2033

Passenger list includes B. Fonseca, Field Interpreter, listed as final confirmed boarding among international staff.

Departure log timestamp confirms boarding occurred after the final scheduled material distribution window per field debrief.`
  },

  {
    id: "ev_fab_005_retirement",
    memoryId: "fab_mem_005",
    title: "Career Summary — Retirement Notice",
    sourceType: EvidenceSource.NEWS_REPORT,
    tier: EvidenceTier.CONTEXT,
    reliability: 88,
    completeness: 80,
    bias: 8,
    content: `# UN Field Services Internal Bulletin
2045

Beatriz Fonseca retires this month after a 23-year career as a field interpreter across eleven deployments.

Colleagues describe her as someone who "treated translation as a duty of care, not just a technical task."

She has requested no formal recognition ceremony.`
  },

];

// ═══════════════════════════════════════════════════════════════
// CORRUPTION RECORDS — mundane archival gaps only.
// These are intentionally unremarkable. Nothing here should read
// as evidence of intentional fabrication. Each ties to ONE quiet
// gap that, much later in the corpus, attentive players may learn
// to recognize as a recurring shape.
// ═══════════════════════════════════════════════════════════════

export const fabricatedBatch1Corruptions = [
  {
    id: "cor_fab_001_gap",
    memoryId: "fab_mem_001",
    corruptionType: "MISSING_DATA",
    intensity: 2,
    description: "Two quarterly transmission gaps in the Voss dataset, both attributed to routine equipment failure. No raw field notes survive from either gap period — only the post-failure summary reports. Unremarkable in isolation."
  },
  {
    id: "cor_fab_003_gap",
    memoryId: "fab_mem_003",
    corruptionType: "SOURCE_LOSS",
    intensity: 2,
    description: "Twelve of the original 203 letters were withheld from publication at family request and are not retained in any archival copy. The withheld letters' content is not described anywhere in the surviving record."
  },
  {
    id: "cor_fab_005_gap",
    memoryId: "fab_mem_005",
    corruptionType: "MISSING_DATA",
    intensity: 1,
    description: "No audio or video record of Fonseca's translation work during the 72-hour period survives — only the written debrief and secondhand liaison statements. Standard for the era and security context; not flagged at the time."
  },
];