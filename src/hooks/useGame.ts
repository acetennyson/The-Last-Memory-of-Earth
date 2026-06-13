import { useState, useCallback } from 'react';
import type { GameContent, Memory, PlayerProfile, CivilizationResult, HistoryBook, Evidence, Contradiction } from '../engine';
import { GameEngine } from '../engine/GameEngine';
import { GameState } from '../engine/shared/enums';
import { sampleContent, memoryConnections } from '../data/sampleContent';

export function useGame() {
  const [engine] = useState(() => new GameEngine(sampleContent));
  const [stage, setStage] = useState(GameState.BOOT);
  const [memory, setMemory] = useState<Memory | null>(null);
  const [message, setMessage] = useState<string>('');
  const [power, setPower] = useState(100);
  
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
    setMemory(m);
    setStage(GameState.MEMORY);
    // Remove the engine.selectMemory call since it doesn't exist
  }, []);

  const investigateWithPath = useCallback((pathId: string) => {
    const result = engine.investigate() as any;
    if (result) {
      const records = result.revelations?.map((r: any) => r.evidence as Evidence) || [];
      setEvidenceRecords(records);
      setContradictions(result.contradictions || []);
      setInvestigationStep(0);
      setTotalInvestigationSteps(records.length);
      setStage(GameState.INVESTIGATION);
    } else {
      setMessage('Insufficient archive power.');
      setTimeout(() => setMessage(''), 1500);
    }
  }, [engine]);

  const backFromInvestigation = useCallback(() => {
    setStage(GameState.ARCHIVE);
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

  const preserve = useCallback(() => {
    if (memory) {
      setPreservedMemories(prev => new Set(prev).add(memory.id));
      setStage(GameState.ARCHIVE);
    }
  }, [memory]);

  const discard = useCallback(() => {
    if (memory) {
      setDiscardedMemories(prev => new Set(prev).add(memory.id));
      setStage(GameState.ARCHIVE);
    }
  }, [memory]);

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
    nextEvidenceStep,
    preserve,
    discard,
    continueFromCorruption,
    viewHistoryBook,
    restart,
  };
}

export type GameHook = ReturnType<typeof useGame>;