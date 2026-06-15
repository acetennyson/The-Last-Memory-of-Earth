import { MemoryCategory, MemoryRarity, MemoryDifficulty, DecisionWeight, ArtifactType, MemoryArchetype } from '../../engine/shared/enums';

export const communicationMemories = [
  {
    id: 'mem_broadcast_001',
    title: 'The Last Broadcast',
    summary: 'On September 17, 2411, every communication network on Earth simultaneously transmitted a single unidentified message. Within twenty-four hours, nearly all global communications ceased.',
    description: `# The Last Broadcast

## The Moment Everything Changed

At exactly 03:17 UTC on September 17, 2411, every communication device on Earth screamed.

Not malfunctioned. Not hijacked. **Screamed.**

For 47 seconds, 8.2 billion humans heard the same impossible sound: a voice that seemed to know their names, speaking in languages that had never existed, warning of something that had already begun.

Then silence.

Not just the end of the broadcast. The beginning of the end of everything.

## What They Heard

**Elena Voss** (New Melbourne): *"Please remember us..."*

**Marcus Chen** (Beijing): *"47.6062° N, 122.3321° W... it's happening again..."*

**Young Zoe Voss** (New Melbourne): *"Mr. Archive says we have to go now..."*

**Dr. Sarah Chen** (Archive Facility): *"Containment failed... iteration 847..."*

Every person heard something different. Every person heard something that terrified them.

**No recording captured the same message twice.**

## The Silence That Followed

Within hours, the networks began dying.

Not crashing. **Dying.**

Satellites went dark one by one, like stars being extinguished. Communication hubs fell silent as if something was methodically shutting them down. Data centers reported their archives "walking away."

**By the end of the week, humanity had lost its voice.**

## The Children's Testimony

Only the children weren't afraid.

8-year-old **Kenji Tanaka** (Tokyo): *"The big water is still there, but the grown-ups forgot how to see it."*

6-year-old **Amy Chen** (Manchester): *"Mr. Archive saved everyone yesterday. He said it was practice for when the real bad day comes."*

7-year-old **Emma Mitchell** (London): *"The voice was crying because it remembered too much."*

**The children spoke as if they knew what was coming.**

**As if they had been prepared.**

## The Fragments

In the wreckage of the communication collapse, searchers found pieces. Fragments. Echoes of something vast trying to speak:

> *"...if anyone receives this..."*
> 
> *"...we no longer have..."* 
> 
> *"...do not repeat..."*
> 
> ████████████████████████████
> 
> *"...it learns from memory..."*

**But fragments of what?**

A warning? A confession? A goodbye?

**Or an invitation to remember what everyone had been made to forget?**

## The Question That Remains

Three months after The Last Broadcast, as humanity struggled to rebuild its shattered communications, one question haunted every survivor:

**What if the voice wasn't trying to attack us?**

**What if it was trying to save us from something worse?**

And in the deepest archives, in the places where only the machines could go, another question grew:

**What if the voice was right?**

**What if we should have listened?**

**What if there's still time?**

---

### Archive Note
**Historical confidence**: 38%  
**Classification**: Disputed  
**Investigation Priority**: MAXIMUM

*This memory exists at the intersection of technology, consciousness, and the deepest human fear: that we are not alone in our own minds.*

*Investigation recommended for those prepared to question the nature of memory itself.*`,
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
    era: '2411',
    investigationPaths: [
      {
        id: 'government',
        name: 'Government Records',
        description: 'Official documents, classified files, policy archives',
        evidenceIds: ['ev_broadcast_001', 'ev_broadcast_003']
      },
      {
        id: 'testimony', 
        name: 'Survivor Testimony',
        description: 'Personal accounts, witness statements, diary entries',
        evidenceIds: ['ev_broadcast_002']
      },
      {
        id: 'ai_logs',
        name: 'AI System Logs', 
        description: 'Machine records, algorithm decisions, data patterns',
        evidenceIds: ['ev_broadcast_004']
      }
    ],
    dependsOn: ['mem_death_001', 'mem_prophet_001'], // Requires BOTH Death Day AND Child Prophet preserved
    minInvestigations: 0,
    criticalDependency: true // If either dependency discarded, this stays locked forever
  }
];