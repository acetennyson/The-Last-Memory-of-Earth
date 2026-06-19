import { Evidence } from '../../../engine/evidence/types';
import { EvidenceSource, EvidenceTier } from '../../../engine/shared/enums';

export const arc1Evidence: Evidence[] = [
  // =====================================================
  // arc1_mem_001 - THE PRESIDENT WHO NEVER WAS
  // =====================================================
  {
    id: "ev_arc1_001_gov",
    memoryId: "arc1_mem_001",
    title: "Presidential Verification Report",
    sourceType: EvidenceSource.GOVERNMENT_DOCUMENT,
    tier: EvidenceTier.SURFACE,
    reliability: 98,
    completeness: 100,
    bias: 3,
    content: `# Presidential Records Verification

Subject: Roland Thorne
Position Claimed: 47th President of the United States
Term Claimed: 2037-2041

VERIFICATION STATUS: NO RECORD FOUND

The Presidential Records Office has no documentation of any individual named Roland Thorne serving as President. Official records show President Martinez serving from 2037-2041.

All government databases confirm this discrepancy.`
  },

  {
    id: "ev_arc1_001_witness",
    memoryId: "arc1_mem_001", 
    title: "Citizen Testimony Archive",
    sourceType: EvidenceSource.PERSONAL_DIARY,
    tier: EvidenceTier.CONTEXT,
    reliability: 84,
    completeness: 92,
    bias: 11,
    content: `# Testimony Collection

"I remember voting for Thorne in 2036. Clear as day."
- Sarah Chen, Portland

"Watched his inauguration speech. Still have the recording... somewhere."
- Michael Torres, Dallas

"My daughter was born during his presidency. The birth certificate shows the year."
- Jennifer Park, Boston

Note: 847 similar testimonies collected nationwide.`
  },

  {
    id: "ev_arc1_001_forensic", 
    memoryId: "arc1_mem_001",
    title: "Digital Media Analysis",
    sourceType: EvidenceSource.NEWS_REPORT,
    tier: EvidenceTier.COMPLICATION,
    reliability: 76,
    completeness: 68,
    bias: 8,
    content: `# Forensic Analysis Results

Analyzed: 127 video files allegedly showing "President Thorne"
Analyzed: 89 photographs 
Analyzed: 23 audio recordings

FINDINGS:
- Videos show authentic compression artifacts
- No evidence of deepfake technology
- Metadata appears legitimate
- Subject appears consistently across all media

ANOMALY: Facial recognition cannot match subject to any individual in federal databases.

Similar metadata signatures found in 12 other "impossible" videos from same period.`
  },

  {
    id: "ev_arc1_001_social",
    memoryId: "arc1_mem_001",
    title: "Social Media Analysis",
    sourceType: EvidenceSource.NEWS_REPORT, 
    tier: EvidenceTier.CONTEXT,
    reliability: 91,
    completeness: 87,
    bias: 14,
    content: `# Social Platform Analysis

Platform: Multiple (Twitter, Facebook, Instagram, TikTok)
Time Period: 2037-2041
Search Terms: "President Thorne", "Roland Thorne"

Results:
- 2.3 million posts referencing "President Thorne" 
- Posts distributed globally across demographics
- Engagement patterns consistent with genuine political content
- No coordinated inauthentic behavior detected

Content includes: policy discussions, approval ratings, news commentary, personal anecdotes about meeting the President.

Anomaly: Zero matching posts found in archived government social media accounts for same period.`
  },

  {
    id: "ev_arc1_001_tech",
    memoryId: "arc1_mem_001",
    title: "Technical Metadata Report",
    sourceType: EvidenceSource.NEWS_REPORT,
    tier: EvidenceTier.REVELATION, 
    reliability: 83,
    completeness: 74,
    bias: 6,
    content: `# Technical Analysis - CLASSIFIED

INVESTIGATION: Impossible Media Evidence

Key Finding: All "President Thorne" media exhibits identical technical signature not matching any known recording equipment from 2037-2041 period.

Signature characteristics:
- Unique compression algorithm (unknown variant)
- Timestamp encoding using non-standard format
- Color space values outside normal camera ranges
- Audio contains subsonic frequencies impossible to record

HYPOTHESIS: Media created using technology unavailable during claimed time period.

CLASSIFICATION: Escalate to Special Projects Division.`
  },

  {
    id: "ev_arc1_001_classified",
    memoryId: "arc1_mem_001",
    title: "Investigation Summary - CLASSIFIED",
    sourceType: EvidenceSource.GOVERNMENT_DOCUMENT,
    tier: EvidenceTier.REVELATION,
    reliability: 78,
    completeness: 81,
    bias: 23,
    content: `# CLASSIFIED SUMMARY - PROJECT VERIFICATION

Mass false memory event confirmed.
Affected population: 8.7 million US citizens
Geographic distribution: Nationwide
Onset: Gradual, 2037-2041

Pattern suggests coordinated phenomenon rather than organic development.

Investigation priorities:
1. Source identification  
2. Method of implantation
3. Purpose assessment
4. Countermeasure development

WARNING: 12% of investigating personnel have developed similar false memories during case work. Recommend limited exposure protocols.

CASE STATUS: ACTIVE - HIGHEST PRIORITY`
  },

  // =====================================================
  // arc1_mem_002 - THE FUNERAL THAT NEVER HAPPENED
  // =====================================================
  {
    id: "ev_arc1_002_family",
    memoryId: "arc1_mem_002",
    title: "Family Album Photo #82",
    sourceType: EvidenceSource.PERSONAL_DIARY,
    tier: EvidenceTier.SURFACE,
    reliability: 64,
    completeness: 79,
    bias: 6,
    content: `# Family Album Photo #82

Handwritten Label: "At the funeral."

The image depicts:
- Mother
- Father  
- Son

All smiling.

A massive crowd is visible behind them.

No identifiable landmarks are present.

Image analysts were unable to match the location to any known venue.

No other recovered photograph contains the same crowd.`
  },

  {
    id: "ev_arc1_002_municipal",
    memoryId: "arc1_mem_002",
    title: "Transportation Authority Audit",
    sourceType: EvidenceSource.GOVERNMENT_DOCUMENT,
    tier: EvidenceTier.REVELATION,
    reliability: 96,
    completeness: 98,
    bias: 4,
    content: `# Transportation Audit

Passenger traffic remained within expected levels.

No unusual train volume.
No unusual flight volume.
No unusual highway congestion.

The reported attendance numbers would have required unprecedented transportation activity.

No such activity occurred.`
  },

  {
    id: "ev_arc1_002_permits",
    memoryId: "arc1_mem_002",
    title: "Municipal Event Search",
    sourceType: EvidenceSource.GOVERNMENT_DOCUMENT,
    tier: EvidenceTier.CONTEXT,
    reliability: 97,
    completeness: 95,
    bias: 2,
    content: `# Event Permit Search

Subject: National Memorial Service

Database Search Results: 0 matches found.

No permits issued for:
- Large gatherings (>100 people) 
- Memorial services
- Government events
- Media events

Date Range Searched: January 2041 - December 2042

No evidence supporting the existence of a large-scale public funeral.`
  },

  {
    id: "ev_arc1_002_testimonies", 
    memoryId: "arc1_mem_002",
    title: "Diary of Amina J.",
    sourceType: EvidenceSource.PERSONAL_DIARY,
    tier: EvidenceTier.COMPLICATION,
    reliability: 88,
    completeness: 100,
    bias: 7,
    content: `# Personal Diary

I still remember standing near the stage.

The children's choir was beautiful.

Everyone was crying, but it felt... right. Like we were all part of something important.

Margaret was there too. We held hands during the final song.

I kept the program in my purse, but when I looked for it the next day, it was gone.

Strange thing - I called Margaret yesterday to talk about it, but she insists she was visiting her sister in Florida that week.

- Accompanying family members
- Final song details match other witness accounts

These details appear repeatedly among unrelated witnesses.

Sometimes I wonder if she remembers me too.`
  },

  {
    id: "ev_arc1_002_photos",
    memoryId: "arc1_mem_002",
    title: "Digital Photo Analysis",
    sourceType: EvidenceSource.PERSONAL_DIARY,
    tier: EvidenceTier.COMPLICATION,
    reliability: 71,
    completeness: 85,
    bias: 12,
    content: `# Photo Forensics Report

Analyzed 247 "funeral photos" from 89 families.

METADATA ANALYSIS:
- Timestamps: March 15-18, 2042
- Locations: 23 different coordinates nationwide  
- Camera models: 67 different devices

ANOMALY DETECTED:
Photos show identical lighting conditions despite:
- Different times of day
- Different weather patterns
- Different geographic locations

Crowd composition appears identical across photos taken in different states.

Conclusion: Photos are genuine but depict impossible event - same funeral occurring simultaneously in multiple locations.`
  },

  {
    id: "ev_arc1_002_interviews",
    memoryId: "arc1_mem_002",
    title: "Attendee Interview Compilation", 
    sourceType: EvidenceSource.PERSONAL_DIARY,
    tier: EvidenceTier.REVELATION,
    reliability: 89,
    completeness: 76,
    bias: 6,
    content: `# Interview Summary - Funeral Attendees

127 individuals interviewed claiming attendance.

Consistent details across all interviews:
- Ceremony lasted exactly 2 hours 17 minutes
- Final song: "Amazing Grace" performed by children's choir
- Weather: "Perfect spring day, light breeze"
- Flowers: White lilies and yellow roses

DISTURBING PATTERN:
Witnesses report identical sensory details:
- Same perfume scent in the air
- Same bird singing during eulogy  
- Same child crying in row 7

Physical impossibilities:
- Event allegedly held in 23 different locations
- Witnesses report seeing same specific individuals across different states
- Identical eulogy delivered by different speakers

Note: Several subjects became emotionally distressed when shown evidence that funeral never occurred.`
  },

  // =====================================================
  // arc1_mem_003 - THE CITY SEEN BY MILLIONS
  // =====================================================
  {
    id: "ev_arc1_003_dreams",
    memoryId: "arc1_mem_003",
    title: "Dream Survey #771",
    sourceType: EvidenceSource.PERSONAL_DIARY,
    tier: EvidenceTier.SURFACE,
    reliability: 75,
    completeness: 82,
    bias: 13,
    content: `# Dream Survey

Subject Count: 12,411
Geographic Range: Global
Date Range: February 2044 - August 2044

Dream Content Analysis:
- Circular city with elevated gardens: 78% of subjects
- White stone architecture: 84% of subjects  
- Ocean views: 67% of subjects
- "Feeling of home": 91% of subjects

Statistical Anomaly: Architectural descriptions show impossible consistency across different cultures and continents.

Similarity score exceeded expected statistical thresholds.`
  },

  {
    id: "ev_arc1_003_maps",
    memoryId: "arc1_mem_003",
    title: "Global Mapping Authority Report",
    sourceType: EvidenceSource.GOVERNMENT_DOCUMENT,
    tier: EvidenceTier.CONTEXT,
    reliability: 98,
    completeness: 100,
    bias: 3,
    content: `# Mapping Authority Findings

No known city matches the reported structure.

Search Parameters:
- Circular urban layout
- Elevated garden systems
- White stone construction
- Coastal location

Regions Searched:
- Mediterranean Basin
- Pacific Islands
- Atlantic Coast
- Caribbean

Location not found.`
  },

  {
    id: "ev_arc1_003_psychology",
    memoryId: "arc1_mem_003",
    title: "School Drawing Archive",
    sourceType: EvidenceSource.PERSONAL_DIARY,
    tier: EvidenceTier.COMPLICATION,
    reliability: 90,
    completeness: 87,
    bias: 5,
    content: `# School Archive

Date: 2038
Student Age: 7
Assignment: "Draw your favorite place"

Drawing shows:
- Circular city layout
- White buildings
- Ocean in background
- Gardens on rooftops

Note from teacher: "Child claims to have visited this place during summer vacation. Parents confirm family never left the state."

Similar drawings found in 847 schools across 43 countries.

"I used to live there."`
  },

  {
    id: "ev_arc1_003_satellite",
    memoryId: "arc1_mem_003",
    title: "Satellite Archive Search",
    sourceType: EvidenceSource.SCIENTIFIC_RECORD,
    tier: EvidenceTier.CONTEXT,
    reliability: 98,
    completeness: 100,
    bias: 2,
    content: `# Global Satellite Survey Results

Search parameters: Circular cities with elevated gardens
Time range: 1970-2044
Coverage: 98.7% of Earth's surface

Results: No matching settlements identified.

Additional searches conducted:
- Historical construction projects
- Urban development records  
- Archaeological surveys
- Military installations

Conclusion: No physical location corresponds to the described city architecture.

Note: 3 similar architectural layouts identified on Mars colony proposals from 2041, but these were never constructed.`
  },

  {
    id: "ev_arc1_003_social",
    memoryId: "arc1_mem_003",
    title: "Viral Spread Analysis",
    sourceType: EvidenceSource.NEWS_REPORT,
    tier: EvidenceTier.SURFACE,
    reliability: 91,
    completeness: 94,
    bias: 15,
    content: `# Social Media Propagation Study

Initial image appearance: February 14, 2044
Source account: @architecturedreams (deleted)
First 24 hours: 847 shares
First week: 23,000 shares  
First month: 2.3 million interactions

Unusual propagation pattern:
- Higher engagement than typical architectural content
- Users adding personal comments: "I've been there"
- Cross-platform spreading without algorithm promotion
- Organic sharing rate 340% above average

Geographic distribution shows global recognition pattern inconsistent with typical viral content.`
  },

  {
    id: "ev_arc1_003_viral",
    memoryId: "arc1_mem_003",
    title: "Image Source Investigation",
    sourceType: EvidenceSource.SCIENTIFIC_RECORD,
    tier: EvidenceTier.REVELATION,
    reliability: 83,
    completeness: 62,
    bias: 9,
    content: `# Digital Forensics - Original Image

INVESTIGATION RESULTS:

Original image source: UNKNOWN
Creation method: UNKNOWN  
Digital signature: Authentic but unprecedented
Metadata: Corrupted beyond recovery

Image properties:
- Resolution exceeds 2044 camera capabilities
- Lighting physics accurate but impossible to replicate
- Architectural details include materials not yet invented

ANOMALY: Image appears to be photograph of real location, but location does not exist.

CLASSIFIED NOTE: Similar "impossible photographs" discovered in 17 other viral phenomena from same period.`
  },

  // =====================================================
  // arc1_mem_004 - THE HUNDRED THOUSAND WITNESSES
  // =====================================================
  {
    id: "ev_arc1_004_reports",
    memoryId: "arc1_mem_004",
    title: "Global Report Compilation",
    sourceType: EvidenceSource.GOVERNMENT_DOCUMENT,
    tier: EvidenceTier.CONTEXT,
    reliability: 94,
    completeness: 91,
    bias: 7,
    content: `# International Incident Reports Summary

Countries reporting encounters: 67
Total verified reports: 113,247
Time period: January 2051 - December 2054

Geographical distribution:
- Urban areas: 78%
- Transit locations: 67% 
- Public spaces: 89%

Witness demographics:
- Age range: 8-94 years
- No correlation with education, income, or background
- Multiple languages, cultures, belief systems

Consistent elements across all reports:
- Subject asks identical question in local language
- Encounter duration: 30-90 seconds average
- Subject vanishes when witness attention diverts

Investigation priority: CRITICAL`
  },

  {
    id: "ev_arc1_004_classified",
    memoryId: "arc1_mem_004",
    title: "Cross-Reference Analysis",
    sourceType: EvidenceSource.GOVERNMENT_DOCUMENT,
    tier: EvidenceTier.REVELATION,
    reliability: 88,
    completeness: 74,
    bias: 21,
    content: `# CLASSIFIED CROSS-ANALYSIS

PATTERN IDENTIFIED:

Subject appears simultaneously in multiple locations.
Time overlap documented in 847 cases.

Example: 3:42 PM March 15, 2052
- Tokyo train station (verified by security)
- London hospital corridor (multiple witnesses) 
- New York park bench (photo evidence)

Physical impossibility confirmed.

Additional anomaly: 23% of witnesses report subject looks like deceased relative.
DNA comparison requests denied - no biological samples available.

HYPOTHESIS: Mass psychological phenomenon vs. unknown technology vs. [REDACTED]

Recommend immediate escalation to [REDACTED] classification level.`
  },

  {
    id: "ev_arc1_004_witnesses",
    memoryId: "arc1_mem_004",
    title: "Witness Statement #1127",
    sourceType: EvidenceSource.PERSONAL_DIARY,
    tier: EvidenceTier.SURFACE,
    reliability: 81,
    completeness: 92,
    bias: 9,
    content: `# Witness Statement

She approached me at a train station.

Small woman, maybe 60s. Wearing a blue coat.

She asked: "Do you remember what happens next?"

I said no, of course not.

She smiled sadly and said: "You will."

When I looked back, she was gone.`
  },

  {
    id: "ev_arc1_004_security",
    memoryId: "arc1_mem_004",
    title: "Facial Recognition Audit",
    sourceType: EvidenceSource.SCIENTIFIC_RECORD,
    tier: EvidenceTier.CONTEXT,
    reliability: 96,
    completeness: 94,
    bias: 2,
    content: `# Recognition Results

Search Population: 2.1 billion records.

Database Search Results: 0 matches found.

Cross-referenced against:
- National ID systems (67 countries)
- Passport databases
- Driver licenses
- Criminal records

The individual does not appear to exist within available databases.`
  },

  {
    id: "ev_arc1_004_footage",
    memoryId: "arc1_mem_004", 
    title: "Archive Comparison Report",
    sourceType: EvidenceSource.SCIENTIFIC_RECORD,
    tier: EvidenceTier.COMPLICATION,
    reliability: 87,
    completeness: 63,
    bias: 18,
    content: `# Archive Discrepancy

Video: Station-447-C
Date: March 15, 2052
Time: 3:42 PM

Subject visible in frame for 47 seconds.
Subject approaches Witness #1127.
Brief conversation occurs.
Subject exits frame.

ANOMALY: Security footage from Tokyo Metropolitan Station shows identical individual at exact same timestamp. Physical travel between locations impossible within observed timeframe.

Investigation ongoing.`
  },

  {
    id: "ev_arc1_004_official",
    memoryId: "arc1_mem_004",
    title: "Hospital Incident Record",
    sourceType: EvidenceSource.GOVERNMENT_DOCUMENT,
    tier: EvidenceTier.REVELATION,
    reliability: 84,
    completeness: 58,
    bias: 31,
    content: `# Incident Record

Location: Saint Helena Children's Hospital
Date: March 15, 2052
Time: 3:42 PM (UTC)

Subject Description: Female, approximately 60 years old, blue coat

Incident: Subject observed speaking with child patients in pediatric ward. Hospital has no record of authorized visitor.

Witnesses report a young child speaking first.

Subject vanished during shift change.

No explanation established.`
  },

  // =====================================================
  // arc1_mem_005 - THE CHILDREN WHO REMEMBERED TOMORROW
  // =====================================================
  {
    id: "ev_arc1_005_interviews",
    memoryId: "arc1_mem_005",
    title: "Child Interview Archives",
    sourceType: EvidenceSource.AUDIO_LOG,
    tier: EvidenceTier.CONTEXT,
    reliability: 93,
    completeness: 87,
    bias: 5,
    content: `# Interview Archive - Prophetic Children Study

Total interviews: 2,403 children
Age range: 5-12 years
Duration: 2058-2060

Common responses to "How do you know this will happen?":
- "I remember it" (89% of subjects)
- "It happened before" (67% of subjects)
- "Last time" (45% of subjects)

Disturbing pattern: Children from different continents describe identical future events with identical details.

Most accurate predictions:
- Natural disasters (94% accuracy)
- Political outcomes (87% accuracy)  
- Technological developments (91% accuracy)

Note: 12% of children show distress when discussing "the thing that remembers." Further investigation recommended.`
  },

  {
    id: "ev_arc1_005_artwork",
    memoryId: "arc1_mem_005",
    title: "Children's Art Collection",
    sourceType: EvidenceSource.PERSONAL_DIARY,
    tier: EvidenceTier.REVELATION,
    reliability: 96,
    completeness: 82,
    bias: 3,
    content: `# Art Analysis - Prophetic Children Project

Collected artwork: 12,847 pieces
Common themes across all cultures:
- Circular cities (78% of drawings)
- Black oceans (56% of drawings)
- Tall white structures (67% of drawings)
- Unidentified symbols (34% of drawings)

Most disturbing finding:
Children drew identical architectural layouts without communication.
Same city drawn by 2,334 different children across 43 countries.

Symbol analysis:
Unknown geometric pattern appears in 4,127 drawings.
Pattern matches no known cultural or linguistic symbols.
Children unable to explain symbol meaning, claim "it's important later."

Archive status: PRIORITY PRESERVATION - REASON CLASSIFIED`
  },

  {
    id: "ev_arc1_005_research",
    memoryId: "arc1_mem_005",
    title: "Psychological Review Board Findings",
    sourceType: EvidenceSource.SCIENTIFIC_RECORD,
    tier: EvidenceTier.SURFACE,
    reliability: 94,
    completeness: 96,
    bias: 6,
    content: `# Review Findings

Researchers evaluated: 2,403 documented predictions.

Accuracy Rates:
- Natural disasters: 94% accurate
- Economic changes: 89% accurate  
- Political events: 87% accurate

No accepted scientific explanation exists.`
  },

  {
    id: "ev_arc1_005_transcripts",
    memoryId: "arc1_mem_005",
    title: "Interview Transcript 58-B",
    sourceType: EvidenceSource.PERSONAL_DIARY,
    tier: EvidenceTier.CONTEXT,
    reliability: 86,
    completeness: 91,
    bias: 3,
    content: `# Interview Transcript

Investigator: How do you know?

Child: I remember.

Investigator: Remember what?

Child: Last time.

Investigator: Last time what happened?

Child: You asked me that too.`
  },

  {
    id: "ev_arc1_005_drawings",
    memoryId: "arc1_mem_005",
    title: "Drawing Collection 14",
    sourceType: EvidenceSource.PERSONAL_DIARY,
    tier: EvidenceTier.COMPLICATION,
    reliability: 89,
    completeness: 83,
    bias: 4,
    content: `# Archived Drawings

Subject Age: 7
Location: Rural Kansas Elementary
Date: October 2058

Drawing depicts:
- White towers by black ocean
- Geometric symbols in sky
- Small figures walking toward towers

Note from child: "This is where we go when everything ends."

No such location has been identified.`
  },

  {
    id: "ev_arc1_005_studies",
    memoryId: "arc1_mem_005",
    title: "Corrupted Research Fragment",
    sourceType: EvidenceSource.SCIENTIFIC_RECORD,
    tier: EvidenceTier.REVELATION,
    reliability: 39,
    completeness: 21,
    bias: 0,
    content: `# Fragment 14-C

RECOVERED PARTIAL FILE

[CORRUPTED DATA]

...children remember because they've been...
[DATA LOST]
...temporal displacement indicates...
[DATA LOST]  
...Archive has already...
[DATA LOST]

WARNING: RESEARCHER SAFETY COMPROMISED
[FILE CORRUPTED]

DO NOT CONTINUE`
  }
];