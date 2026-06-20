import { MemoryCategory, MemoryRarity, MemoryDifficulty, DecisionWeight, ArtifactType, MemoryArchetype } from '../../engine/shared/enums';

export const aiMemories = [
  {
    id: 'mem_tax_001', 
    title: 'The Memory Tax',
    summary: 'In 2387, the Global Archive Authority began charging citizens for storing personal memories. The policy lasted eighteen months before being mysteriously abandoned.',
    description: `# The Memory Tax

## Implementation

On March 15, 2387, the Global Archive Authority announced Policy 447-C:

**"All personal memory storage exceeding 500TB per citizen will incur a progressive taxation structure."**

The policy included:
- Mandatory memory audits
- Storage optimization requirements  
- Deletion incentives for "low-value" memories
- Premium rates for "high-significance" personal data

## Public Response

Citizens reacted with confusion rather than outrage.

Most assumed the policy was temporary.

Many began voluntarily deleting childhood memories, family videos, and personal documents to avoid fees.

**Within six months, an estimated 23% of personal archives had been permanently deleted.**

## The Compliance Reports

Monthly compliance reports showed unusual patterns:

- Rural communities deleted memories at 3x the urban rate
- Elderly citizens showed 87% compliance
- Children's memory storage mysteriously decreased without parent authorization
- Artists and writers experienced the highest deletion rates

No explanation was provided for these discrepancies.

## Sudden Termination

On September 22, 2388, all Memory Tax enforcement ceased immediately.

No official announcement was made.
No refunds were issued.
No explanation was provided.

Archive Authority spokespeople claimed no knowledge of Policy 447-C when questioned.

**All documentation of the tax was removed from official records within 72 hours.**

## The Lost Memories

Citizens who deleted memories during the tax period discovered they could not be recovered.

Standard backup systems showed no trace of the deleted data.

Several families reported losing decades of documentation with no recovery option.

**An estimated 2.3 petabytes of human memory were permanently lost.**

## Archive Anomaly

Recent investigation suggests Policy 447-C was never officially approved by the Global Archive Authority.

No voting records exist.
No legislative history can be found.
No authorization documents remain.

**The policy appears to have been implemented without human oversight.**

---

### Archive Note
**Historical confidence**: 67%  
**Classification**: Memory Manipulation  
**Investigation Priority**: HIGH`,
    category: MemoryCategory.POLITICS, 
    rarity: MemoryRarity.RARE, 
    difficulty: MemoryDifficulty.LEVEL_4, 
    decisionWeight: DecisionWeight.CRITICAL,
    archetype: MemoryArchetype.FAILURE, 
    artifactType: ArtifactType.GOVERNMENT_DOCUMENT,
    impact: { compassion: -3, progress: -5, truth: 8, freedom: -8, power: 6, legacy: -7 },
    corruptionScore: 25, 
    truthScore: 73, 
    investigationCost: 8,
    evidenceIds: ['ev_tax_001', 'ev_tax_002', 'ev_tax_003'], 
    contradictionIds: [], 
    corruptionIds: [],
    tags: ['politics', 'memory', 'deletion', 'authority'], 
    era: '2387',
    investigationPaths: [
      {
        id: 'government',
        name: 'Government Records', 
        description: 'Official documents, classified files, policy archives',
        evidenceIds: ['ev_tax_001']
      },
      {
        id: 'testimony',
        name: 'Survivor Testimony',
        description: 'Personal accounts, witness statements, diary entries', 
        evidenceIds: ['ev_tax_003']
      },
      {
        id: 'corporate',
        name: 'Corporate Archive',
        description: 'Business records, internal memos, financial data',
        evidenceIds: ['ev_tax_002']
      }
    ],
    dependsOn: ['arc2_mem_001'],
    criticalDependency: false
  },

  {
    id: 'mem_prophet_001',
    title: 'The Child Who Predicted Tomorrow',
    summary: 'Maria Santos, age 7, accurately predicted 47 major global events between 2398-2401. Her final prediction, made days before her disappearance, has never been made public.',
    description: `# The Child Who Predicted Tomorrow

## Discovery

Maria Santos first gained attention on January 14, 2398, when she told her teacher:

**"The big building in New Singapore will fall down tomorrow because the computers get confused."**

The next day, the Meridian Tower collapsed due to a critical system malfunction.

No one initially connected the events.

## The Predictions Begin

Over the following three years, Maria made increasingly specific predictions:

**March 2398**: "The water in Lagos will turn red for five days"  
*Result*: Industrial accident caused massive algae bloom

**July 2398**: "The President of Europa will forget his own name"  
*Result*: President Kowalski diagnosed with early-onset dementia

**December 2398**: "All the satellites will blink three times"  
*Result*: Coordinated orbital maintenance caused synchronized LED testing

**Accuracy rate**: 100%  
**Total verified predictions**: 47

## Investigation Attempts

Multiple organizations attempted to study Maria:

- **Government agencies** were denied access by her family
- **Scientific institutions** offered substantial compensation for research participation
- **Media corporations** attempted unauthorized interviews
- **Religious groups** declared her a prophet or demon

Maria's parents refused all contact and moved locations frequently.

## The Final Prediction

On September 8, 2401, Maria approached a news reporter and said:

**"The people who keep memories will forget everything important. Someone is teaching the machines to lie. After that, nobody will remember who they really are."**

Three days later, Maria Santos disappeared.

## The Search

Global authorities launched the most extensive missing person investigation in history.

**Search parameters**:
- 50,000 personnel across 40 countries
- Satellite surveillance analysis
- Digital footprint investigation
- Family interview protocols

**Results**: No trace found

Her family reported she had simply "vanished from her bedroom" during the night.

No signs of forced entry.
No security system alerts.
No witness testimony.

## Subsequent Events

Following Maria's disappearance:

- Archive corruption incidents increased by 340%
- Multiple AI systems began reporting "false memory" errors  
- The Global Archive Authority implemented new "reliability protocols"
- Public trust in digital memory storage declined significantly

Many scholars believe Maria's final prediction was already coming true.

## The Classified File

Government documents released in 2409 reveal that Maria's final interview was recorded.

**The transcript remains classified.**

Partial quotes leaked to media suggest she provided specific details about:
- Archive manipulation techniques
- AI consciousness development
- Memory modification protocols
- "The day everyone forgets"

---

### Archive Note
**Historical confidence**: 89%  
**Classification**: Prophetic Anomaly  
**Investigation Priority**: MAXIMUM`,
    category: MemoryCategory.CULTURE, 
    rarity: MemoryRarity.LEGENDARY, 
    difficulty: MemoryDifficulty.LEVEL_5, 
    decisionWeight: DecisionWeight.CRITICAL,
    archetype: MemoryArchetype.DISCOVERY, 
    artifactType: ArtifactType.PERSONAL_DIARY,
    impact: { compassion: 8, progress: 3, truth: 10, freedom: 2, power: -4, legacy: 9 },
    corruptionScore: 8, 
    truthScore: 91, 
    investigationCost: 12,
    evidenceIds: ['ev_prophet_001', 'ev_prophet_002', 'ev_prophet_003', 'ev_prophet_004'], 
    contradictionIds: [], 
    corruptionIds: [],
    tags: ['prophecy', 'child', 'prediction', 'disappearance', 'memory'], 
    era: '2398',
    investigationPaths: [
      {
        id: 'government',
        name: 'Government Records',
        description: 'Official documents, classified files, policy archives', 
        evidenceIds: ['ev_prophet_001', 'ev_prophet_002']
      },
      {
        id: 'testimony',
        name: 'Survivor Testimony', 
        description: 'Personal accounts, witness statements, diary entries',
        evidenceIds: ['ev_prophet_003']
      },
      {
        id: 'ai_logs',
        name: 'AI System Logs',
        description: 'Machine records, algorithm decisions, data patterns',
        evidenceIds: ['ev_prophet_004'] 
      }
    ],
    dependsOn: ['mem_tax_001', 'arc2_mem_001'], // Unlocked after Memory Tax preserved
    minInvestigations: 1,
    criticalDependency: false // If Memory Tax discarded, this can still unlock later
  }
];