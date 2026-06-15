import { MemoryCategory, MemoryRarity, MemoryDifficulty, DecisionWeight, ArtifactType, MemoryArchetype } from '../../engine/shared/enums';

// PATTERN A: Official Story Correct - Conspiracy theories debunked
export const patternAMemories = [
  {
    id: 'mem_meteor_001',
    title: 'The New Zealand Impact',
    summary: 'On March 12, 2389, a massive explosion devastated Auckland. Government reported a meteor impact. Conspiracy theorists claimed it was a weapons test or alien attack.',
    description: `# The New Zealand Impact

## Official Report

At 14:23 local time on March 12, 2389, a meteorite estimated at 50 meters in diameter struck the outskirts of Auckland, New Zealand.

The impact created a crater 2.1 kilometers wide and registered 6.8 on the Richter scale.

**Government Response:**
- Immediate evacuation of 200,000 residents
- International astronomical verification requested
- Debris samples shared with global research institutions
- Full transparency with impact data

**Casualties:** 127 confirmed dead, 2,847 injured

## Conspiracy Theories Emerge

Within hours, alternative theories spread across global networks:

**Theory 1**: "Kinetic weapons test by rival nations"
**Theory 2**: "Alien spacecraft crash-landing"  
**Theory 3**: "Cover-up for underground facility explosion"
**Theory 4**: "Government false flag operation"

Social media analysis showed 89% of posts within 24 hours questioned the official meteor explanation.

## International Verification

The New Zealand government invited unprecedented international oversight:

- **NASA**: Confirmed meteorite composition and trajectory
- **European Space Agency**: Verified pre-impact tracking data
- **Chinese National Space Administration**: Confirmed radar detection
- **Russian Academy of Sciences**: Verified impact physics models

**All agencies independently confirmed meteorite impact.**

## The Debris Analysis

Physical evidence collected from the impact site:

- **Composition**: 94% iron-nickel, 6% trace minerals
- **Age**: 4.6 billion years (consistent with solar system formation)
- **Isotopic signature**: Matches known asteroid belt composition
- **Trajectory analysis**: Originated from asteroid belt region

**No evidence of artificial construction or unusual materials.**

## Conspiracy Theory Collapse

Over six months of investigation:

**Weapons Test Theory**: No nation possessed kinetic weapons of required scale
**Alien Crash Theory**: No exotic materials or technology recovered
**Underground Facility Theory**: Geological surveys found no pre-existing structures
**False Flag Theory**: Economic impact contradicted any government benefit

**Result**: All conspiracy theories systematically debunked by evidence.

## Archive Assessment

This represents a rare case where:

1. **Government told the complete truth**
2. **International verification was genuine**
3. **Conspiracy theories were unfounded**
4. **Evidence supported official explanation**

Sometimes the official story is simply correct.

---

### Archive Note
**Historical confidence**: 96%  
**Classification**: Verified Natural Event  
**Investigation Recommended**: Low Priority`,
    category: MemoryCategory.NATURE,
    rarity: MemoryRarity.UNCOMMON,
    difficulty: MemoryDifficulty.LEVEL_2,
    decisionWeight: DecisionWeight.MEDIUM,
    archetype: MemoryArchetype.DISCOVERY,
    artifactType: ArtifactType.SCIENTIFIC_REPORT,
    impact: { compassion: 3, progress: 1, truth: 9, freedom: 2, power: 1, legacy: 4 },
    corruptionScore: 2,
    truthScore: 96,
    investigationCost: 5,
    evidenceIds: ['ev_meteor_001', 'ev_meteor_002', 'ev_meteor_003'],
    contradictionIds: [],
    corruptionIds: [],
    tags: ['meteor', 'truth', 'verification', 'conspiracy-debunked'],
    era: '2389'
  }
];