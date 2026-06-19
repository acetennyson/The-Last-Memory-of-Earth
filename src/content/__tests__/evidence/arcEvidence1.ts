import {
  Evidence,
  EvidenceSource,
  EvidenceTier,
} from "../../types";

export const arc1Evidence: Evidence[] = [
  // =====================================================
  // ARC1-MEM-001
  // THE DAY THE PRESIDENT NEVER SPOKE
  // =====================================================

  {
    id: "ARC1-EVD-001",
    memoryId: "ARC1-MEM-001",
    title: "Emergency Presidential Statement",
    sourceType: EvidenceSource.GOVERNMENT,
    tier: EvidenceTier.PRIMARY,
    reliability: 95,
    completeness: 88,
    bias: 42,
    content: `
# Emergency Presidential Statement

Issued: March 18, 2037

The Office of the President confirms that no military declaration was made today.

The circulating video is fraudulent.

The President was not present at any recording session during the time in question.

Citizens are advised to disregard all copies.

A criminal investigation has been opened.

---

Official Position:

The recording is a synthetic fabrication.
`,
  },

  {
    id: "ARC1-EVD-002",
    memoryId: "ARC1-MEM-001",
    title: "Citizen Testimony #4471",
    sourceType: EvidenceSource.TESTIMONY,
    tier: EvidenceTier.SECONDARY,
    reliability: 71,
    completeness: 76,
    bias: 11,
    content: `
# Witness Statement

I know everyone says the speech was fake.

I understand that.

But I didn't watch it online.

I watched it live.

The television switched automatically.

My wife saw it too.

We both remember the President coughing before reading the statement.

The strange thing?

The cough isn't in any copy I've seen since.
`,
  },

  {
    id: "ARC1-EVD-003",
    memoryId: "ARC1-MEM-001",
    title: "Broadcast Forensics Report",
    sourceType: EvidenceSource.TECHNICAL,
    tier: EvidenceTier.PRIMARY,
    reliability: 93,
    completeness: 91,
    bias: 4,
    content: `
# Technical Analysis

The video displays all known indicators of synthetic generation.

Facial reconstruction confidence:
99.2%

Voice synthesis confidence:
98.8%

Environmental generation confidence:
97.6%

Conclusion:

The recording was artificially generated.

No evidence of an authentic source has been identified.

---

Investigator Note:

Timestamp metadata appears inconsistent with the generation model used.

Cause unknown.
`,
  },

  {
    id: "ARC1-EVD-004",
    memoryId: "ARC1-MEM-001",
    title: "Internal Security Memo",
    sourceType: EvidenceSource.GOVERNMENT,
    tier: EvidenceTier.RESTRICTED,
    reliability: 83,
    completeness: 51,
    bias: 78,
    content: `
# Internal Communication

Distribution Restricted

Several witness accounts describe details absent from recovered recordings.

Examples:

- A coughing fit
- A broken microphone
- Background movement near stage entrance

These details appear repeatedly among unrelated witnesses.

Recommend minimizing public discussion.

No explanation currently available.
`,
  },

  // =====================================================
  // ARC1-MEM-002
  // THE FUNERAL THAT NEVER HAPPENED
  // =====================================================

  {
    id: "ARC1-EVD-005",
    memoryId: "ARC1-MEM-002",
    title: "Family Album Photo #82",
    sourceType: EvidenceSource.PHOTOGRAPH,
    tier: EvidenceTier.PRIMARY,
    reliability: 64,
    completeness: 79,
    bias: 6,
    content: `
# Family Album Photo #82

Handwritten Label:

"At the funeral."

The image depicts:

- Mother
- Father
- Son

All smiling.

A massive crowd is visible behind them.

No identifiable landmarks are present.

Image analysts were unable to match the location to any known venue.

No other recovered photograph contains the same crowd.
`,
  },

  {
    id: "ARC1-EVD-006",
    memoryId: "ARC1-MEM-002",
    title: "Municipal Event Search",
    sourceType: EvidenceSource.GOVERNMENT,
    tier: EvidenceTier.PRIMARY,
    reliability: 97,
    completeness: 95,
    bias: 2,
    content: `
# Event Permit Search

Subject:
National Memorial Service

Result:

No permits located.

No venue reservation located.

No emergency service deployment recorded.

No crowd-control measures requested.

No evidence supporting the existence of a large-scale public funeral.
`,
  },

  {
    id: "ARC1-EVD-007",
    memoryId: "ARC1-MEM-002",
    title: "Diary of Amina J.",
    sourceType: EvidenceSource.PERSONAL,
    tier: EvidenceTier.PRIMARY,
    reliability: 88,
    completeness: 100,
    bias: 7,
    content: `
# Personal Diary

I still remember standing near the stage.

The choir sang one final song.

Everyone cried.

I met a woman from another city.

We talked for almost an hour.

I cannot remember her name.

But I remember her face perfectly.

Sometimes I wonder if she remembers me too.
`,
  },

  {
    id: "ARC1-EVD-008",
    memoryId: "ARC1-MEM-002",
    title: "Transportation Authority Audit",
    sourceType: EvidenceSource.GOVERNMENT,
    tier: EvidenceTier.PRIMARY,
    reliability: 96,
    completeness: 98,
    bias: 4,
    content: `
# Transportation Audit

Passenger traffic remained within expected levels.

No unusual train volume.

No unusual flight volume.

No unusual highway congestion.

The reported attendance numbers would have required unprecedented transportation activity.

No such activity occurred.
`,
  },

  // =====================================================
  // ARC1-MEM-003
  // THE CITY SEEN BY MILLIONS
  // =====================================================

  {
    id: "ARC1-EVD-009",
    memoryId: "ARC1-MEM-003",
    title: "Dream Survey #771",
    sourceType: EvidenceSource.TESTIMONY,
    tier: EvidenceTier.SECONDARY,
    reliability: 75,
    completeness: 82,
    bias: 13,
    content: `
# Dream Survey

Subject Count:
12,411

Many participants independently described:

- White towers
- Elevated gardens
- A circular central plaza
- A river running beneath the city

Participants had no known connection to one another.

Similarity score exceeded expected statistical thresholds.
`,
  },

  {
    id: "ARC1-EVD-010",
    memoryId: "ARC1-MEM-003",
    title: "Global Mapping Authority Report",
    sourceType: EvidenceSource.GOVERNMENT,
    tier: EvidenceTier.PRIMARY,
    reliability: 98,
    completeness: 100,
    bias: 3,
    content: `
# Mapping Authority Findings

No known city matches the reported structure.

Satellite archives reviewed.

Urban development records reviewed.

Historical maps reviewed.

Result:

Location not found.
`,
  },

  {
    id: "ARC1-EVD-011",
    memoryId: "ARC1-MEM-003",
    title: "School Drawing Archive",
    sourceType: EvidenceSource.PERSONAL,
    tier: EvidenceTier.PRIMARY,
    reliability: 90,
    completeness: 87,
    bias: 5,
    content: `
# School Archive

Date:
2038

Student Age:
7

Drawing Description:

A city with circular architecture and elevated gardens.

The drawing predates the first public appearance of the city phenomenon by six years.

No explanation provided by the child.

When asked where the city was located, the student answered:

"I used to live there."
`,
  },

  // =====================================================
  // ARC1-MEM-004
  // THE HUNDRED THOUSAND WITNESSES
  // =====================================================

  {
    id: "ARC1-EVD-012",
    memoryId: "ARC1-MEM-004",
    title: "Witness Statement #1127",
    sourceType: EvidenceSource.TESTIMONY,
    tier: EvidenceTier.PRIMARY,
    reliability: 81,
    completeness: 92,
    bias: 9,
    content: `
# Witness Statement

She approached me at a train station.

Asked:

"Do you remember me?"

I said no.

She looked disappointed.

Then she smiled.

I turned around for a moment.

When I looked back, she was gone.
`,
  },

  {
    id: "ARC1-EVD-013",
    memoryId: "ARC1-MEM-004",
    title: "Facial Recognition Audit",
    sourceType: EvidenceSource.TECHNICAL,
    tier: EvidenceTier.PRIMARY,
    reliability: 96,
    completeness: 94,
    bias: 2,
    content: `
# Recognition Results

Search Population:

2.1 billion records.

Result:

No match found.

Confidence:
99.998%

The individual does not appear to exist within available databases.
`,
  },

  {
    id: "ARC1-EVD-014",
    memoryId: "ARC1-MEM-004",
    title: "Archive Comparison Report",
    sourceType: EvidenceSource.TECHNICAL,
    tier: EvidenceTier.RESTRICTED,
    reliability: 87,
    completeness: 63,
    bias: 18,
    content: `
# Archive Discrepancy

Video:
Station-447-C

Comparison between backups revealed inconsistencies.

Observed Changes:

- Different clothing colors.
- Different crowd density.
- Different weather conditions.

Source footage should be identical.

Investigation ongoing.
`,
  },

  {
    id: "ARC1-EVD-015",
    memoryId: "ARC1-MEM-004",
    title: "Hospital Incident Record",
    sourceType: EvidenceSource.GOVERNMENT,
    tier: EvidenceTier.RESTRICTED,
    reliability: 84,
    completeness: 58,
    bias: 31,
    content: `
# Incident Record

Location:
Saint Helena Children's Hospital

Witnesses report a young child speaking first.

Reported Statement:

"You're not supposed to be here yet."

Audio recording unavailable.

Video corrupted shortly afterward.

No explanation established.
`,
  },

  // =====================================================
  // ARC1-MEM-005
  // THE CHILDREN WHO REMEMBERED TOMORROW
  // =====================================================

  {
    id: "ARC1-EVD-016",
    memoryId: "ARC1-MEM-005",
    title: "Psychological Review Board Findings",
    sourceType: EvidenceSource.SCIENTIFIC,
    tier: EvidenceTier.PRIMARY,
    reliability: 94,
    completeness: 96,
    bias: 6,
    content: `
# Review Findings

Researchers evaluated:

2,403 documented predictions.

Results exceeded statistical expectations.

No evidence of fraud was discovered.

No accepted scientific explanation exists.
`,
  },

  {
    id: "ARC1-EVD-017",
    memoryId: "ARC1-MEM-005",
    title: "Interview Transcript 58-B",
    sourceType: EvidenceSource.TESTIMONY,
    tier: EvidenceTier.PRIMARY,
    reliability: 86,
    completeness: 91,
    bias: 3,
    content: `
# Interview Transcript

Investigator:
How do you know?

Child:
Because I remember.

Investigator:
Remember what?

Child:
Last time.

Investigator:
What happened last time?

Child:
You asked me that too.
`,
  },

  {
    id: "ARC1-EVD-018",
    memoryId: "ARC1-MEM-005",
    title: "Drawing Collection 14",
    sourceType: EvidenceSource.PERSONAL,
    tier: EvidenceTier.PRIMARY,
    reliability: 89,
    completeness: 83,
    bias: 4,
    content: `
# Archived Drawings

Subject Age:
7

Recurring Themes:

- Circular city
- White towers
- Black ocean
- Unidentified symbol

The child repeatedly claimed:

"I miss this place."

No such location has been identified.
`,
  },

  {
    id: "ARC1-EVD-019",
    memoryId: "ARC1-MEM-005",
    title: "Corrupted Research Fragment",
    sourceType: EvidenceSource.SCIENTIFIC,
    tier: EvidenceTier.RESTRICTED,
    reliability: 39,
    completeness: 21,
    bias: 0,
    content: `
# Fragment 14-C

RECOVERED PARTIAL FILE

THEY DO NOT SEE THE FUTURE

THEY REMEMBER IT

██████████████████

ITERATION UNKNOWN

██████████████████

DO NOT CONTINUE
`,
  },
];