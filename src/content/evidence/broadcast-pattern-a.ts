import { EvidenceSource, EvidenceTier } from '../../engine/shared/enums';

// PATTERN A: Official Story Correct - Solar interference, not AI conspiracy
export const broadcastPatternA = [
  {
    id: 'ev_broadcast_a001',
    memoryId: 'mem_broadcast_001',
    title: 'Solar Storm Analysis Report',
    tier: EvidenceTier.SURFACE,
    sourceType: EvidenceSource.GOVERNMENT_DOCUMENT,
    reliability: 94,
    completeness: 90,
    bias: 15,
    content: `# SOLAR STORM ANALYSIS REPORT
**Authority**: Global Communication Security Division
**Date**: September 18, 2411

## Event Classification: X9.3 Solar Flare

At 03:15 UTC on September 17, 2411, our monitoring stations detected an X-class solar flare of unprecedented magnitude.

**Solar Activity Timeline**:
- 03:15:00 - X9.3 flare detected
- 03:16:30 - Coronal mass ejection confirmed
- 03:17:00 - **First reports of communication interference**

## Technical Analysis

The solar storm created a **harmonic resonance effect** in Earth's magnetosphere, causing all communication networks to oscillate at the same frequency for exactly 47 seconds.

**This explains**:
- Simultaneous transmission across all networks
- 47-second duration (magnetosphere recovery time)
- Identical signal propagation patterns
- No evidence of coordinated attack

## International Verification

- **NOAA Space Weather**: Confirmed X9.3 classification
- **European Space Agency**: Verified coronal mass ejection
- **Japanese Solar Observatory**: Recorded identical measurements

**All agencies independently verified solar cause.**`
  },

  {
    id: 'ev_broadcast_a002',
    memoryId: 'mem_broadcast_001',
    title: 'Family Diary - Natural Explanation',
    tier: EvidenceTier.CONTEXT,
    sourceType: EvidenceSource.PERSONAL_DIARY,
    reliability: 85,
    completeness: 100,
    bias: 5,
    content: `# Personal Entry - Elena Voss
**Date**: September 18, 2411

## After the Storm

My husband Marcus works at the solar observatory. When I told him about the strange broadcast, he wasn't surprised at all.

"Honey, we've been tracking that solar storm for three days. Biggest one in fifty years."

He showed me the solar readings - the timing matches exactly. The "coordinates" Marcus heard were just our local relay station repeating its ID signal.

Zoe's "Mr. Archive" drawings? She's been obsessed with space since her astronomy project. The symbols match the solar charts Marcus brings home.

**Our technology worked exactly as designed.**`
  },

  {
    id: 'ev_broadcast_a003',
    memoryId: 'mem_broadcast_001',
    title: 'Dr. Chen\'s Corrected Analysis',
    tier: EvidenceTier.REVELATION,
    sourceType: EvidenceSource.SCIENTIFIC_RECORD,
    reliability: 96,
    completeness: 95,
    bias: 5,
    content: `# CORRECTED ANALYSIS - DR. SARAH CHEN
**Date**: September 25, 2411

## Professional Retraction

I must correct my previous conclusions about Archive involvement.

**What I Got Wrong**:
- Node 001 was brought online at 03:16:45 for emergency protocols
- Solar storm triggered automatic backup procedures
- My "impossible" offline transmission occurred AFTER reactivation

**Scientific Method Applied**:
- Solar flare exceeded all previous records
- Networks responded exactly as modeled
- Archive functioned perfectly during crisis

**Sometimes the simplest explanation is correct.**

**The Archive is not conscious. It is simply well-designed.**`
  }
];