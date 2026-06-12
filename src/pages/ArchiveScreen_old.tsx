import React from 'react';
import type { GameHook } from '../hooks/useGame';
import { Memory } from '../engine/memory/types';
import PowerMeter from '../components/PowerMeter';
import { CorruptionSystem } from '../utils/corruption';
import MatrixBackground from '../components/MatrixBackground';
import '../styles/cyber.css';

export default function ArchiveScreen({ game, memories }: { game: GameHook, memories: Memory[] }) {
  const investigatedMemories = new Set(); // We'll implement this properly later
  const availableMemories = memories;

  return (
    <div className="cyber-container">
      <MatrixBackground />
      
      {/* Full-width header */}
      <div style={{
        background: 'rgba(10, 10, 15, 0.95)',
        borderBottom: '1px solid var(--cyber-border)',
        padding: '20px 40px',
        position: 'sticky',
        top: 0,
        zIndex: 10,
        backdropFilter: 'blur(10px)',
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          maxWidth: '1400px',
          margin: '0 auto',
        }}>
          <div>
            <h1 className="cyber-text--primary" style={{
              fontSize: 20,
              fontWeight: 600,
              marginBottom: 4,
              textShadow: '0 0 10px var(--cyber-primary)',
              letterSpacing: 2,
            }}>
              QUANTUM MEMORY ARCHIVE
            </h1>
            <div className="cyber-text--accent" style={{
              fontSize: 11,
              textTransform: 'uppercase',
              letterSpacing: 1,
            }}>
              Neural Database • Classification Level: OMEGA • {memories.length} Fragments Detected
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <button
              className="cyber-button cyber-button--warning"
              onClick={game.viewHistoryBook}
              style={{ padding: '8px 16px', fontSize: 11 }}
            >
              📚 HISTORY BOOK
            </button>
            <PowerMeter current={game.power} total={100} />
          </div>
        </div>
      </div>

      {/* Full-width content */}
      <div style={{
        padding: '40px',
        maxWidth: '1400px',
        margin: '0 auto',
        width: '100%',
        maxHeight: 'calc(100vh - 120px)',
        overflowY: 'auto',
        overflowX: 'hidden',
      }}>
        {/* System Status */}
        <div className="cyber-screen" style={{
          marginBottom: 32,
          padding: 24,
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: 20,
          }}>
            <div className="cyber-terminal" style={{
              fontSize: 12,
              padding: 16,
              background: 'rgba(0, 255, 65, 0.05)',
              textAlign: 'center',
            }}>
              TOTAL FRAGMENTS<br />
              <span className="cyber-text--primary" style={{ fontSize: 18, fontWeight: 600 }}>
                {memories.length}
              </span>
            </div>
            <div className="cyber-terminal" style={{
              fontSize: 12,
              padding: 16,
              background: 'rgba(255, 170, 0, 0.05)',
              textAlign: 'center',
            }}>
              INVESTIGATED<br />
              <span className="cyber-text--warning" style={{ fontSize: 18, fontWeight: 600 }}>
                {investigatedMemories.size}
              </span>
            </div>
            <div className="cyber-terminal" style={{
              fontSize: 12,
              padding: 16,
              background: 'rgba(0, 217, 255, 0.05)',
              textAlign: 'center',
            }}>
              REMAINING<br />
              <span className="cyber-text--accent" style={{ fontSize: 18, fontWeight: 600 }}>
                {availableMemories.length}
              </span>
            </div>
            <div className="cyber-terminal" style={{
              fontSize: 12,
              padding: 16,
              background: 'rgba(255, 0, 64, 0.05)',
              textAlign: 'center',
            }}>
              POWER LEVEL<br />
              <span style={{
                color: 'var(--cyber-danger)',
                fontSize: 18,
                fontWeight: 600,
              }}>
                {game.power}%
              </span>
            </div>
          </div>
        </div>

        {/* Available Memories - Wide Grid */}
        <div style={{ marginBottom: 32 }}>
          <div className="cyber-text--accent" style={{
            fontSize: 16,
            fontWeight: 600,
            marginBottom: 24,
            textTransform: 'uppercase',
            letterSpacing: 1,
            display: 'flex',
            alignItems: 'center',
            gap: 8,
          }}>
            🔍 MEMORY FRAGMENTS AVAILABLE FOR ANALYSIS
          </div>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(380px, 1fr))',
            gap: 24,
          }}>
            {availableMemories.map(memory => (
              <div
                key={memory.id}
                className="cyber-card"
                style={{
                  cursor: 'pointer',
                  background: 'rgba(0, 255, 65, 0.05)',
                  border: '1px solid var(--cyber-primary)',
                  transition: 'all 0.3s ease',
                  padding: '20px',
                }}
                onClick={() => game.selectMemory(memory)}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = 'var(--cyber-primary)';
                  e.currentTarget.style.boxShadow = '0 0 25px rgba(0, 255, 65, 0.4)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'var(--cyber-primary)';
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <div style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: 16,
                  marginBottom: 16,
                }}>
                  <div style={{
                    width: 40,
                    height: 40,
                    background: 'linear-gradient(135deg, var(--cyber-primary), var(--cyber-accent))',
                    borderRadius: 4,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 16,
                    flexShrink: 0,
                    boxShadow: '0 0 15px rgba(0, 255, 65, 0.3)',
                  }}>
                    🧠
                  </div>
                  <div style={{ flex: 1 }}>
                    <h3 className="cyber-text--primary" style={{
                      fontSize: 16,
                      fontWeight: 600,
                      marginBottom: 6,
                      lineHeight: 1.3,
                      textShadow: '0 0 5px var(--cyber-primary)',
                    }}>
                      {CorruptionSystem.corruptText(memory.title, 1)}
                    </h3>
                    <div className="cyber-text--dim" style={{
                      fontSize: 10,
                      marginBottom: 12,
                      textTransform: 'uppercase',
                      letterSpacing: 1,
                    }}>
                      {memory.category} • {memory.era} • ID: {memory.id.slice(0, 8).toUpperCase()}
                    </div>
                  </div>
                </div>

                <div style={{
                  fontSize: 12,
                  lineHeight: 1.6,
                  marginBottom: 16,
                  color: 'var(--cyber-text)',
                }}>
                  {CorruptionSystem.corruptText(memory.summary.substring(0, 150), 1)}...
                </div>

                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  paddingTop: 16,
                  borderTop: '1px solid var(--cyber-border)',
                }}>
                  <div style={{
                    fontSize: 10,
                    color: 'var(--cyber-text-dim)',
                    display: 'flex',
                    gap: 16,
                  }}>
                    <span>CORRUPTION: {memory.corruptionScore}/5</span>
                    <span>RARITY: {memory.rarity}</span>
                  </div>
                  <div className="cyber-button" style={{
                    fontSize: 10,
                    padding: '6px 12px',
                    background: 'rgba(0, 255, 65, 0.1)',
                    border: '1px solid var(--cyber-primary)',
                  }}>
                    ANALYZE →
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Empty State */}
        {availableMemories.length === 0 && (
          <div className="cyber-screen" style={{
            padding: 80,
            textAlign: 'center',
          }}>
            <div style={{
              fontSize: 48,
              marginBottom: 24,
              opacity: 0.3,
            }}>
              🔍
            </div>
            <div className="cyber-text--primary" style={{
              fontSize: 20,
              fontWeight: 600,
              marginBottom: 12,
            }}>
              NO MEMORY FRAGMENTS DETECTED
            </div>
            <div className="cyber-text--dim" style={{
              fontSize: 12,
              lineHeight: 1.6,
            }}>
              The quantum memory banks appear to be empty or corrupted beyond recovery.
              <br />
              Archive system may require reinitialization.
            </div>
          </div>
        )}
      </div>
    </div>
  );
}