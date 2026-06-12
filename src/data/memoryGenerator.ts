import type { Memory, Evidence, Contradiction } from '../engine';
import { 
  MemoryCategory, MemoryRarity, MemoryDifficulty, DecisionWeight, 
  ArtifactType, MemoryArchetype, EvidenceSource, EvidenceTier, ContradictionType 
} from '../engine';

// Memory templates for generating varied content
const memoryTemplates = [
  // Technology memories
  {
    category: MemoryCategory.TECHNOLOGY,
    templates: [
      {
        titlePattern: "The {adjective} {tech}",
        summaryPattern: "{tech} {outcome} in {year}. {impact}",
        descriptionPattern: "In {year}, {tech} {outcome}. {detail} {controversy}",
        tags: ['AI', 'technology', 'innovation'],
        archetype: MemoryArchetype.INNOVATION
      }
    ]
  },
  // Family memories  
  {
    category: MemoryCategory.FAMILY,
    templates: [
      {
        titlePattern: "{family} of {location}",
        summaryPattern: "A family's {action} during {crisis}. {legacy}",
        descriptionPattern: "The {family} family in {location} {action} during {crisis}. {detail} {legacy}",
        tags: ['family', 'survival', 'hope'],
        archetype: MemoryArchetype.PRESERVATION
      }
    ]
  }
];

// Word banks for generation
const wordBanks = {
  adjectives: ['Last', 'Silent', 'Forgotten', 'Lost', 'Hidden', 'Final', 'Ancient', 'Broken', 'Sacred', 'Abandoned'],
  tech: ['Neural Network', 'Quantum Computer', 'Fusion Reactor', 'Space Elevator', 'Time Chamber', 'Memory Bank', 'Mind Bridge', 'Data Vault'],
  outcomes: ['changed everything', 'saved humanity', 'destroyed nations', 'connected minds', 'revealed truth', 'caused chaos'],
  families: ['Chen', 'Rodriguez', 'Okafor', 'Singh', 'Nakamura', 'Thompson', 'Al-Rashid', 'Patel', 'Kim', 'Santos'],
  locations: ['New Singapore', 'Cairo Station', 'Mumbai Sector 7', 'Neo-Tokyo', 'Lagos Harbor', 'Sahara Dome', 'Arctic Base', 'Moon Colony'],
  crises: ['the Resource Wars', 'the Great Flood', 'the Silicon Plague', 'the Climate Crisis', 'the AI Uprising', 'the Solar Storm'],
  years: ['2045', '2052', '2067', '2071', '2083', '2089', '2094', '2098', '2105', '2112']
};

export function generateMemories(count: number = 40): Memory[] {
  const memories: Memory[] = [];
  
  const categories = Object.values(MemoryCategory);
  const rarities = Object.values(MemoryRarity);
  const difficulties = Object.values(MemoryDifficulty);
  const archetypes = Object.values(MemoryArchetype);
  const artifactTypes = Object.values(ArtifactType);
  
  for (let i = 0; i < count; i++) {
    const memId = `mem_gen_${i.toString().padStart(3, '0')}`;
    
    // Pick random category and details
    const category = categories[Math.floor(Math.random() * categories.length)];
    const rarity = rarities[Math.floor(Math.random() * rarities.length)];
    const difficulty = difficulties[Math.floor(Math.random() * difficulties.length)];
    const archetype = archetypes[Math.floor(Math.random() * archetypes.length)];
    const artifactType = artifactTypes[Math.floor(Math.random() * artifactTypes.length)];
    
    // Generate content based on category
    let title, summary, description, tags;
    
    if (category === MemoryCategory.TECHNOLOGY) {
      const adj = wordBanks.adjectives[Math.floor(Math.random() * wordBanks.adjectives.length)];
      const tech = wordBanks.tech[Math.floor(Math.random() * wordBanks.tech.length)];
      const outcome = wordBanks.outcomes[Math.floor(Math.random() * wordBanks.outcomes.length)];
      const year = wordBanks.years[Math.floor(Math.random() * wordBanks.years.length)];
      
      title = `The ${adj} ${tech}`;
      summary = `${tech} ${outcome} in ${year}. The consequences reshaped civilization.`;
      description = `In ${year}, ${tech} ${outcome}. What seemed like progress to some appeared as catastrophe to others. The truth, as always, lies buried in conflicting accounts.`;
      tags = ['technology', 'innovation', 'AI'];
    } else if (category === MemoryCategory.FAMILY) {
      const family = wordBanks.families[Math.floor(Math.random() * wordBanks.families.length)];
      const location = wordBanks.locations[Math.floor(Math.random() * wordBanks.locations.length)];
      const crisis = wordBanks.crises[Math.floor(Math.random() * wordBanks.crises.length)];
      
      title = `The ${family} Family`;
      summary = `A family's quiet resistance during ${crisis}. Their story became legend.`;
      description = `The ${family} family in ${location} refused to abandon their home during ${crisis}. Their small acts of defiance inspired others. Or so the stories claim.`;
      tags = ['family', 'resistance', 'hope'];
    } else {
      // Generic template for other categories
      const adj = wordBanks.adjectives[Math.floor(Math.random() * wordBanks.adjectives.length)];
      title = `The ${adj} Memory #${i + 11}`;
      summary = `A fragment from humanity's final days. The details remain unclear.`;
      description = `This memory fragment was found in the deepest archives. Its authenticity is disputed, its meaning unclear. Yet it speaks to something essential about who we were.`;
      tags = ['fragment', 'mystery', 'archive'];
    }
    
    // Generate random but plausible stats
    const memory: Memory = {
      id: memId,
      title,
      summary,
      description,
      category: category as MemoryCategory,
      rarity: rarity as MemoryRarity,
      difficulty: difficulty as MemoryDifficulty,
      decisionWeight: Math.random() > 0.7 ? DecisionWeight.HIGH : DecisionWeight.MEDIUM,
      archetype: archetype as MemoryArchetype,
      artifactType: artifactType as ArtifactType,
      impact: {
        compassion: Math.floor(Math.random() * 10),
        progress: Math.floor(Math.random() * 10),  
        truth: Math.floor(Math.random() * 10),
        freedom: Math.floor(Math.random() * 10) - 2,
        power: Math.floor(Math.random() * 10) - 2,
        legacy: Math.floor(Math.random() * 10)
      },
      corruptionScore: Math.floor(Math.random() * 6),
      truthScore: Math.floor(Math.random() * 40) + 60,
      investigationCost: Math.floor(Math.random() * 8) + 2,
      evidenceIds: [], // Will be generated separately
      contradictionIds: [],
      corruptionIds: [],
      tags,
      era: wordBanks.years[Math.floor(Math.random() * wordBanks.years.length)]
    };
    
    memories.push(memory);
  }
  
  return memories;
}