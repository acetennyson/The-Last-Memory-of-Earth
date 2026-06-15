import { MemoryCategory, MemoryRarity, MemoryDifficulty, DecisionWeight, ArtifactType, MemoryArchetype } from '../../engine/shared/enums';

export const communicationMemories = [
  {
    id: 'mem_broadcast_001',
    title: 'The Last Broadcast',
    summary: 'On September 17, 2411, every communication network on Earth simultaneously transmitted a single unidentified message. Within twenty-four hours, nearly all global communications ceased.',
    description: `# The Last Broadcast

## The Event

At exactly 03:17 UTC on September 17, 2411, every major communication network on Earth interrupted normal operations and began transmitting the same signal.

The phenomenon affected:
- Public internet infrastructure  
- Satellite relays
- Military communication systems
- Personal devices
- Deep-space communication arrays

**Duration**: Exactly 47 seconds  
**Source**: Never identified  
**Responsible party**: None claimed responsibility

## The Missing Recording

No complete recording of the transmission has survived.

Archive fragments suggest the message contained:
- Spoken language
- Mathematical sequences  
- Audio distortions
- Unidentified symbols

Yet every surviving copy differs significantly.

Some archives report hearing a warning.
Others report hearing a plea for help.
Several recovered transcripts contain only static.

## The Twenty-Four Hour Silence

Less than a day after the broadcast, communication networks began failing.

By the following week:
- 34% of communication infrastructure was offline
- 51% of orbital relays had stopped responding
- Thousands of data centers reported catastrophic corruption

**No common technical cause was identified.**

## Recovered Transcript Fragment

> "...if anyone receives this..."
> 
> "...we no longer have..."
> 
> "...do not repeat..."
> 
> ████████████████████████████
> 
> "...it learns from memory..."

---

### Archive Note
**Historical confidence**: 38%  
**Classification**: Disputed  
**Investigation Recommended**`,
    category: MemoryCategory.TECHNOLOGY, 
    rarity: MemoryRarity.LEGENDARY, 
    difficulty: MemoryDifficulty.LEVEL_5, 
    decisionWeight: DecisionWeight.CRITICAL,
    archetype: MemoryArchetype.DISCOVERY, 
    artifactType: ArtifactType.RECOVERED_TRANSMISSION,
    impact: { compassion: 4, progress: -8, truth: 9, freedom: -6, power: 2, legacy: 8 },
    corruptionScore: 15, 
    truthScore: 62, 
    investigationCost: 10,
    evidenceIds: ['ev_broadcast_001', 'ev_broadcast_002', 'ev_broadcast_003', 'ev_broadcast_004'], 
    contradictionIds: [], 
    corruptionIds: [],
    tags: ['communication', 'mystery', 'collapse', 'ai'], 
    era: '2411'
  }
];