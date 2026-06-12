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

  const handleInvestigateClick = () => {
    setShowReconstruction(true);
  };

  const handleReconstructionComplete = () => {
    setShowReconstruction(false);
    setShowPathSelection(true);
  };

  const handlePathSelected = (pathId: string) => {
    setShowPathSelection(false);
    // Ensure the investigation actually happens
    setTimeout(() => {
      game.investigateWithPath(pathId);
    }, 100);
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
      
      {/* Header */}
      <div style={{
        background: 'rgba(10, 10, 15, 0.95)',
        borderBottom: '1px solid var(--cyber-border)',
        padding: '16px 24px',
        position: 'sticky',
        top: 0,
        zIndex: 10,
        backdropFilter: 'blur(10px)',
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: 16,
          }}>
            <button
              className="cyber-button cyber-button--danger"
              onClick={game.backFromInvestigation}
              style={{ padding: '8px 16px', fontSize: 11 }}
            >
              ← EXIT ARCHIVE
            </button>
            <div className="cyber-text--primary" style={{
              fontSize: 12,
              fontWeight: 600,
              letterSpacing: 1,
              textTransform: 'uppercase',
            }}>
              MEMORY FRAGMENT {memory.id.toUpperCase()}
            </div>
          </div>
          <PowerMeter current={game.power} total={100} />
        </div>
      </div>

      <div style={{
        padding: 24,
        maxWidth: 900,
        margin: '0 auto',
        maxHeight: 'calc(100vh - 100px)',
        overflowY: 'auto',
        overflowX: 'hidden',
      }}>
        {/* Memory Header */}
        <div className="cyber-screen cyber-scanlines" style={{
          padding: 32,
          marginBottom: 24,
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: 16,
            marginBottom: 24,
          }}>
            <div style={{
              width: 48,
              height: 48,
              background: 'linear-gradient(135deg, var(--cyber-primary), var(--cyber-accent))',
              borderRadius: 4,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 20,
              boxShadow: '0 0 20px rgba(0, 255, 65, 0.3)',
            }}>
              🧠
            </div>
            <div>
              <h1 className="cyber-text--primary" style={{
                fontSize: 20,
                fontWeight: 600,
                marginBottom: 4,
                textShadow: '0 0 10px var(--cyber-primary)',
              }}>
                {CorruptionSystem.corruptText(memory.title, 1)}
              </h1>
              <div className="cyber-text--accent" style={{
                fontSize: 12,
                textTransform: 'uppercase',
                letterSpacing: 1,
              }}>
                CLASSIFICATION: {memory.category || 'UNKNOWN'}
              </div>
            </div>
          </div>

          <div className="cyber-terminal" style={{
            fontSize: 13,
            lineHeight: 1.8,
            marginBottom: 24,
            background: 'rgba(0, 255, 65, 0.05)',
          }}>
            {CorruptionSystem.corruptText(memory.summary || memory.description || 'Fragment data corrupted', 1)}
          </div>

          {/* Memory Metadata */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: 16,
            marginBottom: 24,
          }}>
            <div className="cyber-card" style={{ padding: 12 }}>
              <div className="cyber-text--accent" style={{ fontSize: 10, marginBottom: 4 }}>
                TEMPORAL REFERENCE
              </div>
              <div className="cyber-text" style={{ fontSize: 12 }}>
                {memory.era || 'Unknown'}
              </div>
            </div>
            <div className="cyber-card" style={{ padding: 12 }}>
              <div className="cyber-text--accent" style={{ fontSize: 10, marginBottom: 4 }}>
                ERA
              </div>
              <div className="cyber-text" style={{ fontSize: 12 }}>
                {memory.era || 'Unspecified'}
              </div>
            </div>
            <div className="cyber-card" style={{ padding: 12 }}>
              <div className="cyber-text--accent" style={{ fontSize: 10, marginBottom: 4 }}>
                TRUTH SCORE
              </div>
              <div style={{ 
                fontSize: 12,
                color: (memory.truthScore || 0) > 70 ? 'var(--cyber-primary)' : 
                       (memory.truthScore || 0) > 40 ? 'var(--cyber-warning)' : 'var(--cyber-danger)'
              }}>
                {memory.truthScore || 0}%
              </div>
            </div>
          </div>

          {/* Investigation CTA */}
          <div style={{
            background: 'rgba(0, 255, 65, 0.1)',
            border: '1px solid var(--cyber-primary)',
            borderRadius: 4,
            padding: 20,
            textAlign: 'center',
          }}>
            <div className="cyber-text--primary" style={{
              fontSize: 14,
              fontWeight: 600,
              marginBottom: 12,
              textTransform: 'uppercase',
              letterSpacing: 1,
            }}>
              DEEP SCAN AVAILABLE
            </div>
            <div style={{
              fontSize: 12,
              marginBottom: 20,
              lineHeight: 1.6,
            }}>
              Neural pattern analysis indicates additional data fragments may be recoverable.
              <br />
              <span className="cyber-text--warning">Warning: Investigation will consume power reserves.</span>
            </div>
            <button
              className="cyber-button"
              onClick={handleInvestigateClick}
              style={{
                fontSize: 13,
                padding: '12px 24px',
                background: 'linear-gradient(135deg, rgba(0, 255, 65, 0.3) 0%, rgba(0, 255, 65, 0.1) 100%)',
                animation: 'pulse 2s infinite',
              }}
            >
              🔍 INITIATE DEEP SCAN
            </button>
          </div>
        </div>

        {/* Artifact Display */}
        <div className="cyber-screen" style={{
          padding: 32,
        }}>
          <div className="cyber-text--accent" style={{
            fontSize: 14,
            fontWeight: 600,
            marginBottom: 24,
            textTransform: 'uppercase',
            letterSpacing: 1,
            display: 'flex',
            alignItems: 'center',
            gap: 8,
          }}>
            📡 RECOVERED ARTIFACT
          </div>

          <div className="cyber-card" style={{
            background: 'rgba(0, 217, 255, 0.05)',
            border: '1px solid var(--cyber-accent)',
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              marginBottom: 12,
            }}>
              <div style={{
                fontSize: 16,
                color: 'var(--cyber-accent)',
              }}>
                {getArtifactIcon(memory.artifactType)}
              </div>
              <div>
                <div className="cyber-text--accent" style={{
                  fontSize: 12,
                  fontWeight: 600,
                  textTransform: 'uppercase',
                }}>
                  {(memory.artifactType || 'UNKNOWN').replace('_', ' ')}
                </div>
                <div className="cyber-text--dim" style={{ fontSize: 10 }}>
                  Integrity: {(memory.corruptionScore || 0) > 2 ? '█████' : 'VERIFIED'}
                </div>
              </div>
            </div>
            <div className="cyber-terminal" style={{
              fontSize: 11,
              lineHeight: 1.6,
              background: 'rgba(0, 0, 0, 0.3)',
            }}>
              {CorruptionSystem.corruptText(getArtifactContent(memory), memory.corruptionScore || 0)}
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
    SCIENTIFIC_REPORT: (s) => `Research File: ${memory.title}\nClassification: Public Domain\nSummary: ${s}`,
    GOVERNMENT_DOCUMENT: (s) => `CLASSIFIED DOCUMENT\nProject: ${memory.title}\nClearance Level: █████\n\n${s}`,
    PERSONAL_DIARY: (s) => `Entry #${Math.floor(Math.random() * 1000) + 1}\n"${s}"\n\n[Personal thoughts partially illegible]`,
    AUDIO_TRANSCRIPT: (s) => `[AUDIO TRANSCRIPT - ${memory.era}]\n[QUALITY: ${(memory.corruptionScore || 0) > 2 ? 'POOR' : 'GOOD'}]\n\n"${s}"\n\n[END TRANSMISSION]`,
    CULTURAL_RECORD: (s) => `Cultural Archive Entry\nPeriod: ${memory.era}\nSignificance: ${s}`,
    HISTORICAL_ARTICLE: (s) => `Historical Analysis: ${memory.title}\nEra: ${memory.era}\n\n${s}`,
    RESEARCH_PAPER: (s) => `Research Abstract\nTitle: ${memory.title}\nConclusion: ${s}`,
    LETTER: (s) => `Personal Correspondence\n\nDear Archive,\n\n${s}\n\n[Signature corrupted]`,
    PHOTOGRAPH: (s) => `[PHOTOGRAPH]\nLocation: Unknown\nDate: ${memory.era}\nDescription: ${s}`,
    RECOVERED_TRANSMISSION: (s) => `[SIGNAL RECOVERED]\nOrigin: Unknown\nTimestamp: ${memory.era}\n\nMessage: "${s}"\n\n[Signal lost]`,
  };
  
  const formatter = contentMap[memory.artifactType || 'UNKNOWN'];
  return formatter ? formatter(base) : base;
}