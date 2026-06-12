import React, { useState } from 'react';
import type { GameHook } from '../hooks/useGame';
import PowerMeter from '../components/PowerMeter';
import SignalReconstruction from '../components/SignalReconstruction';
import InvestigationPathSelection from '../components/InvestigationPathSelection';
import { CorruptionSystem } from '../utils/corruption';
import MatrixBackground from '../components/MatrixBackground';
import '../styles/cyber.css';

export default function MemoryScreen({ game }: { game: GameHook }) {
  const [showReconstruction, setShowReconstruction] = useState(false);
  const [showPathSelection, setShowPathSelection] = useState(false);
  
  const memory = game.memory;

  // If we're in investigation stage, don't render this screen
  if (game.stage === game.Stage.INVESTIGATION) {
    return null;
  }

  const handleInvestigateClick = () => {
    setShowReconstruction(true);
  };

  const handleReconstructionComplete = () => {
    setShowReconstruction(false);
    setShowPathSelection(true);
  };

  const handlePathSelected = (pathId: string) => {
    setShowPathSelection(false);
    // Don't render memory content, let the investigation start
    game.investigateWithPath(pathId);
  };

  const handleCancel = () => {
    setShowPathSelection(false);
    game.backFromInvestigation();
  };

  if (showReconstruction) {
    return <SignalReconstruction 
      memoryTitle={memory?.title || 'Unknown Memory'} 
      onComplete={handleReconstructionComplete} 
    />;
  }

  if (showPathSelection) {
    return (
      <InvestigationPathSelection
        memoryTitle={memory?.title || 'Unknown Memory'}
        onSelectPath={handlePathSelected}
        onCancel={handleCancel}
        currentPower={game.power}
      />
    );
  }

  if (!memory) {
    return (
      <div className="cyber-container">
        <MatrixBackground />
        <div style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <div className="cyber-screen" style={{ padding: 40, textAlign: 'center' }}>
            <div className="cyber-text--danger" style={{ fontSize: 18, marginBottom: 16 }}>
              MEMORY FRAGMENT NOT FOUND
            </div>
            <button className="cyber-button cyber-button--danger" onClick={game.backFromInvestigation}>
              RETURN TO ARCHIVE
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="cyber-container">
      <MatrixBackground />
      
      {/* Visual Novel Style Layout */}
      <div style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
      }}>
        
        {/* Top Status Bar - Like game UI */}
        <div style={{
          background: 'linear-gradient(90deg, rgba(0, 255, 159, 0.2) 0%, rgba(1, 180, 255, 0.1) 50%, rgba(255, 42, 109, 0.1) 100%)',
          borderBottom: '2px solid var(--cyber-primary)',
          padding: '12px 24px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          position: 'relative',
        }}>
          <button
            className="cyber-button cyber-button--danger"
            onClick={game.backToArchive}
            style={{ padding: '8px 16px', fontSize: 10 }}
          >
            ← EXIT TO ARCHIVE
          </button>
          
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: 16,
          }}>
            <div className="cyber-text--primary" style={{
              fontSize: 14,
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: 2,
            }}>
              MEMORY #{memory.id.slice(0, 8)}
            </div>
            <PowerMeter current={game.power} total={100} />
          </div>
        </div>

        {/* Main Content - Split like manga/novel */}
        <div style={{
          flex: 1,
          display: 'grid',
          gridTemplateColumns: '2fr 1fr',
          gap: 0,
        }}>
          
          {/* Left Panel - Story Content */}
          <div style={{
            background: 'linear-gradient(135deg, rgba(0, 0, 8, 0.9) 0%, rgba(10, 10, 20, 0.8) 100%)',
            padding: '32px',
            overflowY: 'auto',
            borderRight: '2px solid var(--cyber-border)',
            position: 'relative',
          }}>
            
            {/* Title Panel - Manga Style */}
            <div style={{
              background: 'linear-gradient(135deg, rgba(0, 255, 159, 0.1) 0%, transparent 70%)',
              padding: '24px',
              marginBottom: '32px',
              border: '2px solid var(--cyber-primary)',
              borderRadius: '8px',
              clipPath: 'polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))',
              position: 'relative',
            }}>
              
              {/* Category Badge */}
              <div style={{
                position: 'absolute',
                top: '-12px',
                left: '24px',
                background: 'var(--cyber-primary)',
                color: '#000',
                padding: '6px 16px',
                borderRadius: '20px',
                fontSize: '11px',
                fontWeight: 900,
                textTransform: 'uppercase',
                letterSpacing: 1,
                boxShadow: '0 0 20px var(--cyber-primary)',
              }}>
                {memory.category}
              </div>
              
              <h1 className="cyber-text--primary" style={{
                fontSize: 28,
                fontWeight: 900,
                marginBottom: 12,
                lineHeight: 1.2,
                textShadow: '0 0 20px currentColor',
              }}>
                {CorruptionSystem.corruptText(memory.title, 1)}
              </h1>
              
              <div style={{
                fontSize: 14,
                color: 'var(--cyber-accent)',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: 1,
              }}>
                ERA: {memory.era} • TRUTH LEVEL: {memory.truthScore}%
              </div>
            </div>

            {/* Story Content Panel */}
            <div className="cyber-screen" style={{
              padding: '32px',
              marginBottom: '32px',
              background: 'rgba(26, 35, 50, 0.8)',
            }}>
              <div style={{
                fontSize: 16,
                lineHeight: 1.8,
                color: 'var(--cyber-text)',
                fontFamily: '"Share Tech Mono", monospace',
              }}>
                {CorruptionSystem.corruptText(memory.summary, 1)}
              </div>
            </div>

            {/* Artifact Panel - Comic Book Style */}
            <div className="cyber-screen" style={{
              padding: '24px',
              background: 'linear-gradient(145deg, rgba(1, 180, 255, 0.1) 0%, rgba(0, 0, 8, 0.9) 100%)',
              border: '2px solid var(--cyber-accent)',
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: 12,
                marginBottom: 20,
              }}>
                <div style={{
                  width: 40,
                  height: 40,
                  background: 'var(--cyber-accent)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 18,
                  color: '#000',
                  boxShadow: '0 0 20px var(--cyber-accent)',
                }}>
                  {getArtifactIcon(memory.artifactType)}
                </div>
                <div>
                  <div className="cyber-text--accent" style={{
                    fontSize: 16,
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: 1,
                  }}>
                    RECOVERED ARTIFACT
                  </div>
                  <div style={{
                    fontSize: 12,
                    color: 'var(--cyber-text-dim)',
                  }}>
                    {(memory.artifactType || 'UNKNOWN').replace('_', ' ')}
                  </div>
                </div>
              </div>
              
              <div className="cyber-terminal" style={{
                fontSize: 12,
                lineHeight: 1.6,
                background: 'rgba(0, 0, 0, 0.6)',
                marginTop: 16,
              }}>
                {CorruptionSystem.corruptText(getArtifactContent(memory), memory.corruptionScore || 0)}
              </div>
            </div>
          </div>

          {/* Right Panel - Character/Action Panel */}
          <div style={{
            background: 'linear-gradient(180deg, rgba(26, 35, 50, 0.95) 0%, rgba(10, 10, 20, 0.9) 100%)',
            padding: '32px 24px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}>
            
            {/* Character Info Panel */}
            <div>
              <div style={{
                textAlign: 'center',
                marginBottom: 32,
              }}>
                {/* Character Avatar */}
                <div style={{
                  width: 120,
                  height: 120,
                  background: 'linear-gradient(135deg, var(--cyber-primary), var(--cyber-accent))',
                  borderRadius: '50%',
                  margin: '0 auto 16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 48,
                  boxShadow: '0 0 40px rgba(0, 255, 159, 0.4)',
                  border: '4px solid var(--cyber-primary)',
                }}>
                  🧠
                </div>
                
                <div className="cyber-text--primary" style={{
                  fontSize: 14,
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: 1,
                  marginBottom: 8,
                }}>
                  ARCHIVIST
                </div>
                
                <div style={{
                  fontSize: 11,
                  color: 'var(--cyber-text-dim)',
                }}>
                  Last Curator of Human Memory
                </div>
              </div>

              {/* Stats Panel */}
              <div className="cyber-screen" style={{
                padding: '20px',
                marginBottom: '24px',
                background: 'rgba(0, 0, 8, 0.8)',
              }}>
                <div style={{
                  fontSize: 12,
                  fontWeight: 700,
                  marginBottom: 16,
                  color: 'var(--cyber-accent)',
                  textTransform: 'uppercase',
                  letterSpacing: 1,
                }}>
                  FRAGMENT ANALYSIS
                </div>
                
                <div style={{ display: 'grid', gap: 12 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ fontSize: 11, color: 'var(--cyber-text-dim)' }}>Truth Score:</span>
                    <span style={{ 
                      fontSize: 11, 
                      fontWeight: 600,
                      color: memory.truthScore > 70 ? 'var(--cyber-primary)' : 
                             memory.truthScore > 40 ? 'var(--cyber-warning)' : 'var(--cyber-danger)'
                    }}>
                      {memory.truthScore}%
                    </span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ fontSize: 11, color: 'var(--cyber-text-dim)' }}>Corruption:</span>
                    <span style={{ 
                      fontSize: 11, 
                      fontWeight: 600,
                      color: memory.corruptionScore < 2 ? 'var(--cyber-primary)' : 
                             memory.corruptionScore < 4 ? 'var(--cyber-warning)' : 'var(--cyber-danger)'
                    }}>
                      {memory.corruptionScore}/5
                    </span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ fontSize: 11, color: 'var(--cyber-text-dim)' }}>Rarity:</span>
                    <span style={{ fontSize: 11, fontWeight: 600, color: 'var(--cyber-accent)' }}>
                      {memory.rarity}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Panel - Visual Novel Style */}
            <div>
              <div className="cyber-screen" style={{
                padding: '24px',
                background: 'linear-gradient(135deg, rgba(0, 255, 159, 0.1) 0%, rgba(0, 0, 8, 0.9) 100%)',
                border: '2px solid var(--cyber-primary)',
                textAlign: 'center',
              }}>
                <div className="cyber-text--primary" style={{
                  fontSize: 14,
                  fontWeight: 700,
                  marginBottom: 12,
                  textTransform: 'uppercase',
                  letterSpacing: 1,
                }}>
                  DEEP SCAN AVAILABLE
                </div>
                
                <div style={{
                  fontSize: 11,
                  marginBottom: 20,
                  lineHeight: 1.6,
                  color: 'var(--cyber-text)',
                }}>
                  Neural pattern analysis indicates recoverable data fragments.
                  <br />
                  <span className="cyber-text--warning">⚠ Investigation consumes power reserves</span>
                </div>
                
                <button
                  className="cyber-button"
                  onClick={handleInvestigateClick}
                  style={{
                    width: '100%',
                    padding: '16px',
                    fontSize: 12,
                    fontWeight: 900,
                    background: 'linear-gradient(135deg, rgba(0, 255, 159, 0.3) 0%, rgba(0, 255, 159, 0.1) 100%)',
                    boxShadow: '0 0 30px var(--cyber-primary)',
                    marginBottom: '16px',
                  }}
                >
                  🔍 INITIATE DEEP SCAN
                </button>

                {/* Memory Decision Buttons */}
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '12px',
                  marginTop: '16px',
                }}>
                  <button
                    className="cyber-button"
                    onClick={game.preserve}
                    style={{
                      padding: '12px',
                      fontSize: 10,
                      fontWeight: 700,
                      background: 'linear-gradient(135deg, rgba(0, 255, 159, 0.2) 0%, rgba(0, 255, 159, 0.1) 100%)',
                    }}
                  >
                    ✓ PRESERVE
                  </button>
                  <button
                    className="cyber-button cyber-button--danger"
                    onClick={game.discard}
                    style={{
                      padding: '12px',
                      fontSize: 10,
                      fontWeight: 700,
                    }}
                  >
                    ✗ DISCARD
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function getArtifactIcon(type?: string): string {
  switch (type) {
    case 'SCIENTIFIC_REPORT': return '📊';
    case 'GOVERNMENT_DOCUMENT': return '📋';
    case 'PERSONAL_DIARY': return '📖';
    case 'AUDIO_TRANSCRIPT': return '🎵';
    case 'CULTURAL_RECORD': return '🎭';
    case 'HISTORICAL_ARTICLE': return '📰';
    case 'RESEARCH_PAPER': return '🔬';
    case 'LETTER': return '✉️';
    case 'PHOTOGRAPH': return '📸';
    case 'RECOVERED_TRANSMISSION': return '📡';
    default: return '📄';
  }
}

function getArtifactContent(memory: any): string {
  const base = memory.summary || memory.description || 'Fragment data corrupted';
  
  const contentMap: Record<string, (summary: string) => string> = {
    SCIENTIFIC_REPORT: (s) => `Research File: ${memory.title}\\nClassification: Public Domain\\nSummary: ${s}`,
    GOVERNMENT_DOCUMENT: (s) => `CLASSIFIED DOCUMENT\\nProject: ${memory.title}\\nClearance Level: █████\\n\\n${s}`,
    PERSONAL_DIARY: (s) => `Entry #${Math.floor(Math.random() * 1000) + 1}\\n"${s}"\\n\\n[Personal thoughts partially illegible]`,
    AUDIO_TRANSCRIPT: (s) => `[AUDIO TRANSCRIPT - ${memory.era}]\\n[QUALITY: ${(memory.corruptionScore || 0) > 2 ? 'POOR' : 'GOOD'}]\\n\\n"${s}"\\n\\n[END TRANSMISSION]`,
    CULTURAL_RECORD: (s) => `Cultural Archive Entry\\nPeriod: ${memory.era}\\nSignificance: ${s}`,
    HISTORICAL_ARTICLE: (s) => `Historical Analysis: ${memory.title}\\nEra: ${memory.era}\\n\\n${s}`,
    RESEARCH_PAPER: (s) => `Research Abstract\\nTitle: ${memory.title}\\nConclusion: ${s}`,
    LETTER: (s) => `Personal Correspondence\\n\\nDear Archive,\\n\\n${s}\\n\\n[Signature corrupted]`,
    PHOTOGRAPH: (s) => `[PHOTOGRAPH]\\nLocation: Unknown\\nDate: ${memory.era}\\nDescription: ${s}`,
    RECOVERED_TRANSMISSION: (s) => `[SIGNAL RECOVERED]\\nOrigin: Unknown\\nTimestamp: ${memory.era}\\n\\nMessage: "${s}"\\n\\n[Signal lost]`,
  };
  
  const formatter = contentMap[memory.artifactType || 'UNKNOWN'];
  return formatter ? formatter(base) : base;
}