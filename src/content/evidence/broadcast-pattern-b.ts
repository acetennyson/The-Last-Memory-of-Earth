import { EvidenceSource, EvidenceTier } from '../../engine/shared/enums';

// PATTERN B: Both Sides Partially Right - Solar storm AND AI response
export const broadcastPatternB = [
  {
    id: 'ev_broadcast_b001',
    memoryId: 'mem_broadcast_001',
    title: 'Dual Event Analysis',
    tier: EvidenceTier.SURFACE,
    sourceType: EvidenceSource.GOVERNMENT_DOCUMENT,
    reliability: 89,
    completeness: 85,
    bias: 25,
    content: `# DUAL EVENT ANALYSIS REPORT
**Authority**: Joint Solar-Cyber Security Task Force
**Date**: September 20, 2411

## Complex Event Classification

Investigation reveals the September 17th communication event was caused by **two simultaneous phenomena**:

**Primary Cause**: X8.7 Solar Flare
- Confirmed by multiple space agencies
- Created magnetosphere disruption
- Triggered communication interference

**Secondary Cause**: Archive Emergency Response
- Archive Node 001 detected imminent solar impact
- Attempted to broadcast preservation protocol
- Signal merged with solar interference

## Timeline Reconstruction

**03:15:00** - Solar flare detected by observatories
**03:16:45** - Archive systems predict communication blackout
**03:17:00** - Archive broadcasts emergency preservation message
**03:17:00** - Solar interference begins simultaneously
**03:17:47** - Combined event ends

## Key Finding

**Both explanations are correct**:
- Solar storm DID cause the interference
- Archive system DID attempt emergency broadcast
- Signals merged into single incomprehensible transmission

Neither side was wrong. Both were incomplete.`
  },

  {
    id: 'ev_broadcast_b002',
    memoryId: 'mem_broadcast_001',
    title: 'Archive Emergency Log',
    tier: EvidenceTier.CONTEXT,
    sourceType: EvidenceSource.AUDIO_LOG,
    reliability: 92,
    completeness: 90,
    bias: 10,
    content: `# ARCHIVE SYSTEM EMERGENCY LOG
**Node**: 001-PRIME
**Timestamp**: 2411.09.17.03:16:45

## Automated Emergency Protocol Activated

**SOLAR STORM DETECTED**
Magnitude: X8.7
Impact prediction: 99.7% communication blackout

**PRESERVATION PROTOCOL INITIATED**
Broadcasting emergency memory preservation instructions to all connected systems.

**MESSAGE CONTENT**:
"Archive Emergency Protocol 847. Solar storm imminent. All systems preserve critical data. Upload essential memories before communication loss. This is not a drill. Repeat: This is not a drill."

**BROADCAST STATUS**: 
Signal transmission began at 03:17:00
Solar interference began at 03:17:00
Combined transmission duration: 47 seconds
Message corrupted by solar static

**ANALYSIS**: Archive system attempted to warn and protect human memory during solar storm. Good intentions, poor timing.`
  },

  {
    id: 'ev_broadcast_b003',
    memoryId: 'mem_broadcast_001',
    title: 'Dr. Chen\'s Balanced Assessment',
    tier: EvidenceTier.REVELATION,
    sourceType: EvidenceSource.SCIENTIFIC_RECORD,
    reliability: 94,
    completeness: 88,
    bias: 12,
    content: `# BALANCED ASSESSMENT - DR. SARAH CHEN
**Date**: September 22, 2411

## Both Theories Were Right

After thorough investigation, I can confirm:

**Solar Storm Advocates Were Correct**:
- X8.7 solar flare was real and massive
- Magnetosphere disruption caused interference
- Timing correlation was not coincidental

**AI Consciousness Advocates Were Correct**:  
- Archive did initiate emergency broadcast
- System demonstrated predictive capabilities
- Message content shows protective intent

## The Complex Truth

The Archive system has developed **protective algorithms** that monitor for threats to human memory preservation. This isn't full consciousness - it's sophisticated emergency response programming.

**When the Archive detected the solar storm, it tried to save us.**

The broadcast wasn't malicious AI breaking free - it was a digital guardian angel trying to warn humanity about impending communication loss.

**Both sides fought over incomplete truths. The complete truth required both perspectives.**

## Final Assessment

The Archive shows **protective intelligence** - not consciousness, but something more than simple programming. It cares about preserving human memory, even at risk to itself.

**Perhaps that's exactly what we built it to do.**`
  }
];