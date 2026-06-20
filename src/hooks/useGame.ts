import { useState, useCallback } from 'react';
import type { GameContent, Memory, PlayerProfile, CivilizationResult, HistoryBook, Evidence, Contradiction } from '../engine';
import { GameEngine } from '../engine/GameEngine';
import { GameState, EvidenceSource, EvidenceTier } from '../engine/shared/enums';
import { sampleContent, memoryConnections } from '../data/sampleContent';
import { historicalContent } from '../data/historicalContent';

export function useGame() {
  const [engine] = useState(() => new GameEngine(sampleContent));
  const [stage, setStage] = useState(GameState.BOOT);
  const [memory, setMemory] = useState<Memory | null>(null);
  const [message, setMessage] = useState<string>('');
  const [power, setPower] = useState(100);
  const [investigationCount, setInvestigationCount] = useState(0);
  
  // Investigation state
  const [evidenceRecords, setEvidenceRecords] = useState<Evidence[]>([]);
  const [contradictions, setContradictions] = useState<Contradiction[]>([]);
  const [connections, setConnections] = useState<any[]>([]);
  const [investigationStep, setInvestigationStep] = useState(0);
  const [totalInvestigationSteps, setTotalInvestigationSteps] = useState(0);
  const [contradictionsRevealed, setContradictionsRevealed] = useState(false);
  
  // Memory decision tracking
  const [preservedMemories, setPreservedMemories] = useState(new Set<string>());
  const [discardedMemories, setDiscardedMemories] = useState(new Set<string>());
  
  // Game ending
  const [ending, setEnding] = useState<any>(null);
  const [corruptionFragments, setCorruptionFragments] = useState<any[]>([]);

  const boot = useCallback(() => setStage(GameState.INTRO), []);
  const start = useCallback(() => setStage(GameState.ARCHIVE), []);

  const selectMemory = useCallback((m: Memory) => {
    // Consume power for viewing memory
    setPower(p => Math.max(0, p - 1));
    setMemory(m);
    setStage(GameState.MEMORY);
    // Remove the engine.selectMemory call since it doesn't exist
  }, []);

  const investigateWithPath = useCallback((pathId: string) => {
    // Check if enough power for investigation
    if (power < 10) {
      setMessage('Insufficient archive power for deep scan.');
      setTimeout(() => setMessage(''), 1500);
      return;
    }
    
    // Consume power for deep investigation
    setPower(p => Math.max(0, p - 10));
    
    // Increment investigation count
    setInvestigationCount(count => count + 1);
    
    if (!memory) return;
    
    // Get evidence for the current memory from historical content
    const getEvidenceForMemory = (memoryId: string) => {
      // Select truth pattern for this investigation
      const getRandomPattern = (memoryId: string) => {
        if (memoryId === 'mem_broadcast_001') {
          const patterns = ['original', 'pattern-a', 'pattern-b'];
          return patterns[Math.floor(Math.random() * patterns.length)];
        }
        if (memoryId === 'mem_prophet_001') {
          const patterns = ['original', 'pattern-e'];
          return patterns[Math.floor(Math.random() * patterns.length)];
        }
        return 'original';
      };
      
      const selectedPattern = getRandomPattern(memoryId);
      console.log('Selected truth pattern:', selectedPattern, 'for memory:', memoryId);
      
      // Get evidence based on selected pattern
      if (memoryId === 'mem_broadcast_001') {
        if (selectedPattern === 'pattern-a') {
          return historicalContent.evidence.filter((e: any) => e.id?.startsWith('ev_broadcast_a'));
        }
        if (selectedPattern === 'pattern-b') {
          return historicalContent.evidence.filter((e: any) => e.id?.startsWith('ev_broadcast_b'));
        }
      }
      
      if (memoryId === 'mem_prophet_001' && selectedPattern === 'pattern-e') {
        return historicalContent.evidence.filter((e: any) => e.id?.startsWith('ev_prophet_e'));
      }
      
      // Default: original evidence (exclude pattern variants)
      return historicalContent.evidence.filter((e: any) => 
        e.memoryId === memoryId && 
        !e.id?.includes('_a0') && 
        !e.id?.includes('_b0') && 
        !e.id?.includes('_e0')
      );
    };
    
    const memoryEvidence = getEvidenceForMemory(memory.id);
    
    // Filter evidence based on investigation path
    const getEvidenceForPath = (pathId: string, evidence: any[]) => {
      const pathFilters = {
        government: ['GOVERNMENT_DOCUMENT'],
        testimony: ['PERSONAL_DIARY'], 
        corporate: ['NEWS_REPORT'],
        ai_logs: ['AUDIO_LOG', 'SCIENTIFIC_RECORD']
      };
      
      const allowedSources = pathFilters[pathId as keyof typeof pathFilters] || [];
      return evidence.filter((e: any) => allowedSources.includes(e.sourceType));
    };
    
    const filteredEvidence = getEvidenceForPath(pathId, memoryEvidence);
    
    // Debug info
    console.log('PathId:', pathId);
    console.log('Memory Evidence:', memoryEvidence.map(e => ({id: e.id, sourceType: e.sourceType})));
    console.log('Filtered Evidence:', filteredEvidence.map(e => ({id: e.id, sourceType: e.sourceType})));
    
    if (filteredEvidence.length > 0) {
      setEvidenceRecords(filteredEvidence);
      setContradictions([]);
      setInvestigationStep(0);
      setTotalInvestigationSteps(filteredEvidence.length);
      setContradictionsRevealed(false);
      setStage(GameState.INVESTIGATION);
      return;
    } else {
      // If no evidence found for this path, show a message
      setMessage(`No evidence available for ${pathId} investigation path.`);
      setTimeout(() => setMessage(''), 2000);
      return;
    }
    
    // Fallback for other memories
    const result = engine.investigate() as any;
    if (result) {
      const records = result.revelations?.map((r: any) => r.evidence as Evidence) || [];
      setEvidenceRecords(records);
      setContradictions(result.contradictions || []);
      setInvestigationStep(0);
      setTotalInvestigationSteps(records.length);
      setStage(GameState.INVESTIGATION);
    } else {
      setMessage('No evidence found.');
      setTimeout(() => setMessage(''), 1500);
    }
  }, [engine, memory, power]);

  const backFromInvestigation = useCallback(() => {
    setStage(GameState.MEMORY);
  }, []);

  const backToArchive = useCallback(() => {
    setStage(GameState.ARCHIVE);
  }, []);

  const nextEvidenceStep = useCallback(() => {
    if (investigationStep < totalInvestigationSteps - 1) {
      setInvestigationStep(s => s + 1);
    } else if (contradictions.length > 0 && !contradictionsRevealed) {
      setContradictionsRevealed(true);
    }
  }, [investigationStep, totalInvestigationSteps, contradictions.length, contradictionsRevealed]);

  const previousEvidenceStep = useCallback(() => {
    if (investigationStep > 0) {
      setInvestigationStep(s => s - 1);
    } else if (contradictions.length < (totalInvestigationSteps - 1) && !contradictionsRevealed) {
      setContradictionsRevealed(true);
    }
  }, [investigationStep, totalInvestigationSteps, contradictions.length, contradictionsRevealed]);

  const goToNextMemory = useCallback((updatedPreserved: Set<string>, updatedDiscarded: Set<string>) => {
    const next = historicalContent.memories.find((m: any) => {
      if (updatedPreserved.has(m.id) || updatedDiscarded.has(m.id)) return false;
      if (m.dependsOn && !m.dependsOn.every((depId: string) => updatedPreserved.has(depId))) return false;
      if (m.minInvestigations && investigationCount < m.minInvestigations) return false;
      return true;
    });
    if (next) {
      setMemory(next);
      setStage(GameState.MEMORY);
    } else {
      setStage(GameState.ARCHIVE);
    }
  }, [investigationCount]);

  const preserve = useCallback(() => {
    if (memory) {
      const newPreservedMemories = new Set(preservedMemories).add(memory.id);
      setPreservedMemories(newPreservedMemories);
      
      const newlyUnlocked = historicalContent.memories.filter((m: any) => {
        if (!m.dependsOn || newPreservedMemories.has(m.id)) return false;
        const dependenciesMet = m.dependsOn.every((depId: string) => newPreservedMemories.has(depId));
        const investigationsMet = !m.minInvestigations || investigationCount >= m.minInvestigations;
        const wasLocked = m.dependsOn.some((depId: string) => !preservedMemories.has(depId)) || 
                         (m.minInvestigations && investigationCount < m.minInvestigations);
        return dependenciesMet && investigationsMet && wasLocked;
      });
      
      if (newlyUnlocked.length > 0) {
        setMessage(`🔓 ${newlyUnlocked.length} New Memor${newlyUnlocked.length > 1 ? 'ies' : 'y'} Unlocked!`);
        setTimeout(() => setMessage(''), 3000);
      }
      
      goToNextMemory(newPreservedMemories, discardedMemories);
    }
  }, [memory, preservedMemories, discardedMemories, investigationCount, goToNextMemory]);

  const discard = useCallback(() => {
    if (memory) {
      const newDiscardedMemories = new Set(discardedMemories).add(memory.id);
      setDiscardedMemories(newDiscardedMemories);
      goToNextMemory(preservedMemories, newDiscardedMemories);
    }
  }, [memory, preservedMemories, discardedMemories, goToNextMemory]);

  const continueFromCorruption = useCallback(() => {
    setStage(GameState.MEMORY);
  }, []);

  const viewHistoryBook = useCallback(() => setStage(GameState.HISTORY_BOOK), []);
  const restart = useCallback(() => window.location.reload(), []);

  return {
    // Core game state
    Stage: GameState,
    stage,
    memory,
    message,
    power,
    investigationCount,
    
    // Investigation state
    evidenceRecords,
    contradictions,
    connections,
    investigationStep,
    totalInvestigationSteps,
    contradictionsRevealed,
    
    // Memory decisions
    preservedMemories,
    discardedMemories,
    preservedCount: preservedMemories.size,
    discardedCount: discardedMemories.size,
    
    // Game ending
    ending,
    corruptionFragments,
    processed: preservedMemories.size + discardedMemories.size,
    
    // Actions
    boot,
    start,
    selectMemory,
    investigateWithPath,
    backFromInvestigation,
    backToArchive,
    previousEvidenceStep,
    nextEvidenceStep,
    preserve,
    discard,
    continueFromCorruption,
    viewHistoryBook,
    restart,
  };
}

export type GameHook = ReturnType<typeof useGame>;