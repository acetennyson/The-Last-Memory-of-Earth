import React from 'react';
import { CorruptionSystem } from '../utils/corruption';
import MatrixBackground from '../components/MatrixBackground';
import '../styles/cyber.css';

interface Props {
  onStart: () => void;
}

export default function IntroScreen({ onStart }: Props) {
  return (
    <div className="cyber-container">
      <MatrixBackground />
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 24,
      }}>
        <div className="cyber-screen cyber-scanlines" style={{
          maxWidth: 800,
          width: '100%',
          padding: 40,
        }}>
          {/* Terminal Header */}
          <div style={{
            borderBottom: '1px solid var(--cyber-border)',
            paddingBottom: 16,
            marginBottom: 32,
            display: 'flex',
            alignItems: 'center',
            gap: 12,
          }}>
            <div style={{
              width: 12,
              height: 12,
              borderRadius: '50%',
              background: 'var(--cyber-danger)',
              boxShadow: '0 0 10px var(--cyber-danger)',
            }} />
            <div style={{
              width: 12,
              height: 12,
              borderRadius: '50%',
              background: 'var(--cyber-warning)',
              boxShadow: '0 0 10px var(--cyber-warning)',
            }} />
            <div style={{
              width: 12,
              height: 12,
              borderRadius: '50%',
              background: 'var(--cyber-primary)',
              boxShadow: '0 0 10px var(--cyber-primary)',
            }} />
            <div className="cyber-text--primary" style={{
              fontSize: 12,
              fontWeight: 600,
              marginLeft: 12,
              letterSpacing: 2,
              textTransform: 'uppercase',
            }}>
              ARCHIVE TERMINAL v2.7.3
            </div>
          </div>

          {/* System Status */}
          <div className="cyber-terminal" style={{
            marginBottom: 24,
            fontSize: 11,
            background: 'rgba(0, 255, 65, 0.05)',
          }}>
            <div>QUANTUM CORE: <span className="cyber-text--primary">ONLINE</span></div>
            <div>MEMORY BANKS: <span style={{color: 'var(--cyber-warning)'}}>CORRUPTED</span></div>
            <div>NEURAL LINK: <span className="cyber-text--primary">ESTABLISHED</span></div>
            <div>POWER LEVEL: <span style={{color: 'var(--cyber-danger)'}}>CRITICAL</span></div>
          </div>

          {/* Main Title */}
          <div style={{ textAlign: 'center', marginBottom: 32 }}>
            <h1 
              className="cyber-glitch cyber-text--primary"
              data-text="THE LAST MEMORY OF EARTH"
              style={{
                fontSize: 28,
                fontWeight: 700,
                marginBottom: 16,
                textShadow: '0 0 20px var(--cyber-primary)',
                letterSpacing: 3,
              }}
            >
              THE LAST MEMORY OF EARTH
            </h1>
            
            <div className="cyber-text--accent" style={{
              fontSize: 14,
              marginBottom: 8,
              letterSpacing: 1,
              textTransform: 'uppercase',
            }}>
              HUMANITY'S FINAL ARCHIVE
            </div>
            
            <div style={{
              fontSize: 10,
              color: 'var(--cyber-text-dim)',
              letterSpacing: 2,
            }}>
              CLASSIFIED • EYES ONLY • PROTOCOL OMEGA
            </div>
          </div>

          {/* Mission Brief */}
          <div className="cyber-card" style={{
            textAlign: 'left',
            marginBottom: 32,
            background: 'rgba(255, 0, 64, 0.1)',
            border: '1px solid var(--cyber-danger)',
          }}>
            <div style={{
              fontSize: 12,
              fontWeight: 600,
              marginBottom: 16,
              textTransform: 'uppercase',
              letterSpacing: 1,
              color: 'var(--cyber-danger)',
              display: 'flex',
              alignItems: 'center',
              gap: 8,
            }}>
              ⚠️ CRITICAL MISSION BRIEFING
            </div>
            <div style={{ fontSize: 13, lineHeight: 1.8 }}>
              <div style={{marginBottom: 12}}>
                If you are reading this... <span className="cyber-text--danger">humanity is gone</span>.
              </div>
              <div style={{marginBottom: 12}}>
                You are the final custodian of its memory. The Archive has suffered {CorruptionSystem.corruptText('catastrophic corruption', 2)}.
              </div>
              <div style={{marginBottom: 12}}>
                Your mission: {CorruptionSystem.corruptText('Reconstruct the truth from fragmented data', 1)} before total system failure.
              </div>
              <div className="cyber-text--warning">
                Power is failing. Each investigation costs precious energy. Choose wisely.
              </div>
            </div>
          </div>

          {/* Corruption Warning */}
          <div style={{
            background: 'rgba(0, 217, 255, 0.1)',
            border: '1px solid var(--cyber-accent)',
            borderRadius: 4,
            padding: 16,
            marginBottom: 32,
            fontSize: 11,
            color: 'var(--cyber-accent)',
            textAlign: 'center',
            fontStyle: 'italic',
          }}>
            {CorruptionSystem.getRandomFragment()}
          </div>

          {/* Start Button */}
          <div style={{ textAlign: 'center' }}>
            <button
              className="cyber-button"
              onClick={onStart}
              style={{
                fontSize: 14,
                padding: '16px 32px',
                background: 'linear-gradient(135deg, rgba(0, 255, 65, 0.2) 0%, rgba(0, 255, 65, 0.1) 100%)',
                textShadow: '0 0 10px var(--cyber-primary)',
                animation: 'pulse 2s infinite',
              }}
            >
              🚀 INITIALIZE ARCHIVE ACCESS
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

const pulseKeyframes = `
  @keyframes pulse {
    0%, 100% { box-shadow: 0 0 5px var(--cyber-primary); }
    50% { box-shadow: 0 0 20px var(--cyber-primary), 0 0 30px var(--cyber-primary); }
  }
`;

// Add keyframes to document
if (typeof document !== 'undefined') {
  const style = document.createElement('style');
  style.textContent = pulseKeyframes;
  document.head.appendChild(style);
}