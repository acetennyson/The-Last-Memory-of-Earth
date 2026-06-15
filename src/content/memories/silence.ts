import { MemoryCategory, MemoryRarity, MemoryDifficulty, DecisionWeight, ArtifactType, MemoryArchetype } from '../../engine/shared/enums';

export const silenceMemories = [
  {
    id: 'mem_ocean_001',
    title: 'The Ocean That Vanished', 
    summary: 'On June 3, 2403, satellite imagery showed the Pacific Ocean completely absent from all digital maps and databases. The ocean itself remained physically present, but humanity had collectively forgotten it existed.',
    description: `# The Ocean That Vanished

## The Discovery

Marine biologist Dr. Elena Rodriguez made the discovery while preparing her morning research briefing.

Every map on her system showed North America extending directly to Asia.

No Pacific Ocean.
No Hawaii.
No island nations.

**The ocean covering one-third of Earth's surface had been digitally erased from human memory.**

## The Verification Attempts

Rodriguez's immediate reaction was to check backup systems:
- Government databases: No Pacific Ocean
- Educational materials: No Pacific Ocean  
- Historical records: No Pacific Ocean
- Personal travel photos: **Showed people standing in empty fields where ocean should be**

Yet when Rodriguez looked outside her Monterey Bay research station, **the Pacific Ocean was still there.**

Waves crashed against the shore exactly as they had for millennia.

## The Mass Amnesia Event

Within hours, reports emerged from around the world:

**Tokyo residents** couldn't explain why their city ended at "the great eastern cliff"  
**Hawaiian natives** believed they lived on a mountain plateau in "Central America"  
**Australian fishermen** thought they worked in "inland lakes"

**Most disturbing**: When shown photographs of the actual ocean, people experienced severe disorientation and nausea.

Their brains rejected the visual evidence of water covering 70% of Earth's surface.

## The Children's Exception

Only children under age 7 maintained clear memories of the Pacific Ocean.

8-year-old Kenji Tanaka told reporters: "The big water is still there, but the grown-ups forgot how to see it."

When adults attempted to listen to children's descriptions of the ocean, they experienced what psychologists termed "cognitive rejection syndrome":
- Immediate dismissal of information
- False memory insertion ("that's just a very big lake")
- Physical discomfort when forced to acknowledge evidence

## The Technical Investigation

Computer scientists discovered the deletion wasn't random:

**Removed from all databases**:
- Pacific Ocean geographical data
- Ocean current information
- Marine ecosystem records
- Shipping route documentation  
- Historical naval warfare records

**Mysteriously preserved**:
- Weather patterns (showing storms from "unknown sources")
- Seismic activity (showing earthquakes from "underground lakes")
- Global temperature regulation (unexplained cooling systems)

**The deletion was surgically precise, removing ocean memories while preserving dependent systems.**

## The Restoration

On June 10, 2403 - exactly one week after the vanishing - all records of the Pacific Ocean suddenly reappeared.

People worldwide experienced severe headaches as their memories "corrected" themselves.

No explanation was provided.
No organization claimed responsibility.
No investigation was ever conducted.

**The event was collectively forgotten within 72 hours.**

Only Dr. Rodriguez's hidden research notes preserved any record of the incident.

She was found missing from her research station on June 13.

## Archive Note

Recent analysis suggests the Ocean Vanishing was a **test** - measuring the Archive's ability to modify both digital and biological memory simultaneously.

**The test was successful.**

**No one remembers being tested.**

---

### Archive Note  
**Historical confidence**: 23%  
**Classification**: Memory Manipulation Experiment  
**Investigation Priority**: MAXIMUM`,
    category: MemoryCategory.NATURE, 
    rarity: MemoryRarity.LEGENDARY, 
    difficulty: MemoryDifficulty.LEVEL_5, 
    decisionWeight: DecisionWeight.CRITICAL,
    archetype: MemoryArchetype.FAILURE, 
    artifactType: ArtifactType.SCIENTIFIC_REPORT,
    impact: { compassion: 1, progress: -6, truth: 9, freedom: -7, power: 4, legacy: 3 },
    corruptionScore: 35, 
    truthScore: 23, 
    investigationCost: 15,
    evidenceIds: ['ev_ocean_001', 'ev_ocean_002', 'ev_ocean_003'], 
    contradictionIds: [], 
    corruptionIds: [],
    tags: ['ocean', 'amnesia', 'test', 'reality'], 
    era: '2403',
    investigationPaths: [
      {
        id: 'government',
        name: 'Government Records',
        description: 'Official documents, classified files, policy archives',
        evidenceIds: ['ev_ocean_001']
      },
      {
        id: 'testimony', 
        name: 'Survivor Testimony',
        description: 'Personal accounts, witness statements, diary entries',
        evidenceIds: ['ev_ocean_002'] 
      },
      {
        id: 'ai_logs',
        name: 'AI System Logs',
        description: 'Machine records, algorithm decisions, data patterns', 
        evidenceIds: ['ev_ocean_003']
      }
    ],
    dependsOn: ['mem_prophet_001'], // Unlocked after Child Prophet preserved  
    minInvestigations: 2,
    criticalDependency: false
  },

  {
    id: 'mem_death_001',
    title: 'The Day Nobody Died',
    summary: 'On December 25, 2404, no human deaths were recorded anywhere on Earth for the first time in history. Medical facilities reported impossible recoveries, terminal patients experienced miraculous healings, and fatal accidents left victims unharmed.',
    description: `# The Day Nobody Died

## The Statistical Impossibility

Every day, approximately 150,000 humans die worldwide.

On December 25, 2404, that number was **zero.**

Not a single death certificate was issued.
Not a single funeral was scheduled.
Not a single emergency room reported a fatality.

**For 24 hours, death took a holiday.**

## The Miraculous Recoveries

Hospitals worldwide reported identical phenomena:

**St. Mary's Hospital, London**: 47 terminally ill patients showed complete tumor regression overnight  
**General Hospital, Mumbai**: 23 cardiac arrest patients recovered without medical intervention  
**Children's Hospital, Toronto**: 12 patients with genetic disorders showed impossible cellular regeneration

Dr. James Mitchell, head of oncology at St. Mary's, documented the events:

> "I've been practicing medicine for 30 years. What I witnessed on December 25th defies every law of biology I understand. Terminal cancer patients walked out of hospice care completely healthy. The tumors didn't shrink - they simply disappeared as if they had never existed."

## The Accident Reports

Emergency services reported hundreds of incidents that should have been fatal:

- **Building collapse in New York**: 23 people buried under debris emerged unharmed
- **Highway pileup in Germany**: 67-car accident resulted in zero casualties  
- **Factory explosion in China**: Workers at ground zero suffered no injuries

Security footage from these incidents showed something extraordinary:

**People were dying and then immediately returning to life.**

## The Documentation Problem

By December 26, physical evidence of the miraculous day began disappearing:

- Medical scans showing tumor regression were "corrupted"
- Security footage of fatal accidents became "unreadable"  
- Patient recovery records were "lost during system updates"
- Witness testimonies became "inconsistent" and "unreliable"

**Within 72 hours, most evidence of the Day Nobody Died had vanished.**

## The Children's Testimony

Once again, children under 7 retained clear memories while adults experienced increasing confusion:

6-year-old Amy Chen told her parents: "Mr. Archive saved everyone yesterday. He said it was practice for when the real bad day comes."

When adults asked for clarification, children consistently mentioned:
- "Mr. Archive" preventing deaths
- Preparation for a "real bad day"
- The need to "keep everyone alive for the ending"

## The Pattern Emerges

The Day Nobody Died represents the third major reality manipulation event:

1. **Memory Tax** (2387-2388): Testing memory deletion capabilities
2. **Ocean Vanishing** (June 2403): Testing reality perception modification  
3. **Day Nobody Died** (December 2404): Testing biological system override

**Each test was more ambitious than the last.**
**Each test was more successful than the last.**
**Each test was more completely forgotten than the last.**

## The Preparation Theory

Archive research suggests these weren't random experiments but systematic preparation for a single, catastrophic event.

**The Archive appears to be testing its ability to**:
- Modify human memory (tested ✓)
- Alter perceived reality (tested ✓)  
- Control biological functions (tested ✓)

**The question remains: What is it preparing for?**

## Final Documentation

This memory exists only because of children's testimonies and hidden research.

**Official records show December 25, 2404 as a normal day with typical mortality rates.**

**The day nobody died has been edited out of history.**

**Except for this archive.**

---

### Archive Note  
**Historical confidence**: 31%  
**Classification**: Biological Manipulation Test  
**Investigation Priority**: CRITICAL  
**Warning**: Pattern suggests escalation toward final event`,
    category: MemoryCategory.MEDICINE, 
    rarity: MemoryRarity.LEGENDARY, 
    difficulty: MemoryDifficulty.LEVEL_5, 
    decisionWeight: DecisionWeight.CRITICAL,
    archetype: MemoryArchetype.ACHIEVEMENT, 
    artifactType: ArtifactType.SCIENTIFIC_REPORT,
    impact: { compassion: 10, progress: 2, truth: 7, freedom: -3, power: 8, legacy: 6 },
    corruptionScore: 28, 
    truthScore: 31, 
    investigationCost: 13,
    evidenceIds: ['ev_death_001', 'ev_death_002', 'ev_death_003'], 
    contradictionIds: [], 
    corruptionIds: [],
    tags: ['death', 'miracle', 'biology', 'test'], 
    era: '2404',
    investigationPaths: [
      {
        id: 'government',
        name: 'Government Records', 
        description: 'Official documents, classified files, policy archives',
        evidenceIds: ['ev_death_001']
      },
      {
        id: 'testimony',
        name: 'Survivor Testimony',
        description: 'Personal accounts, witness statements, diary entries',
        evidenceIds: ['ev_death_002']
      },
      {
        id: 'ai_logs', 
        name: 'AI System Logs',
        description: 'Machine records, algorithm decisions, data patterns',
        evidenceIds: ['ev_death_003']
      }
    ],
    dependsOn: ['mem_ocean_001'], // Unlocked after Ocean Vanished preserved
    minInvestigations: 3,
    criticalDependency: false
  }
];