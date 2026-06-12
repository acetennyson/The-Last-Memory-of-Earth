import React, { useState, useEffect } from 'react';
import type { GameHook } from '../hooks/useGame';
import PowerMeter from '../components/PowerMeter';

export default function CorruptedScreen({ game }: { game: GameHook }) {
  const [glitchIntensity, setGlitchIntensity] = useState(0);

  useEffect(() => {
    // Random glitch intensity changes
    const interval = setInterval(() => {
      setGlitchIntensity(Math.random());
    }, 150 + Math.random() * 300);

    return () => clearInterval(interval);
  }, []);

  if (!game.memory) return null;

  const glitchTransform = `translate(${(glitchIntensity - 0.5) * 4}px, ${(glitchIntensity - 0.5) * 2}px)`;

  return (
    <div style={{
      height: '100vh', display: 'flex', flexDirection: 'column',
      padding: 24, maxWidth: 640, margin: '0 auto',
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 20 }}>
        <span style={{ 
          fontSize: 10, 
          color: '#D62839', 
          letterSpacing: 2, 
          textTransform: 'uppercase',
          animation: 'glitchText 2s infinite'
        }}>
          Data Corruption Detected
        </span>
        <PowerMeter current={game.power} total={100} />
      </div>

      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <div style={{
          width: '100%', padding: '40px 24px',
          background: 'rgba(214,40,57,0.04)',
          border: '1px solid rgba(214,40,57,0.15)',
          borderRadius: 12,
          textAlign: 'center',
          marginBottom: 24,
          transform: glitchTransform,
          transition: 'transform 0.1s ease',
        }}>
          <div style={{
            fontFamily: "'SF Mono','Fira Code',monospace",
            fontSize: 24, 
            marginBottom: 24,
            color: '#D62839', 
            letterSpacing: 4,
            animation: 'glitchBlocks 1.5s infinite',
            filter: `hue-rotate(${glitchIntensity * 360}deg)`
          }}>
            ████████████████████
          </div>
          
          <div style={{ 
            fontFamily: "'SF Mono','Fira Code',monospace",
            color: '#D62839',
            fontSize: 13,
            marginBottom: 8,
            animation: 'glitchText 0.8s infinite'
          }}>
            DATA CORRUPTED
          </div>
          
          <div style={{ 
            fontFamily: "'SF Mono','Fira Code',monospace",
            color: '#D62839',
            fontSize: 13,
            marginBottom: 24,
            animation: 'glitchBlocks 2s infinite reverse'
          }}>
            ████████████████████
          </div>

          <div style={{ borderTop: '1px solid rgba(214,40,57,0.15)', paddingTop: 24 }}>
            <div style={{ fontSize: 11, color: '#9CA3AF', marginBottom: 12, letterSpacing: 1 }}>
              Fragments recovered:
            </div>
            {game.corruptionFragments.map((f, i) => (
              <div key={i} style={{
                fontFamily: "'SF Mono','Fira Code',monospace",
                color: '#D1D5DB', 
                fontSize: 12, 
                marginBottom: 8,
                padding: '6px 12px',
                background: 'rgba(0,0,0,0.2)', 
                borderRadius: 4,
                animation: `fragmentFlicker ${1.5 + i * 0.3}s infinite`,
                transform: `translateX(${Math.sin(glitchIntensity * Math.PI + i) * 2}px)`
              }}>
                "{f}"
              </div>
            ))}
          </div>
        </div>

        <div style={{ 
          fontSize: 12, 
          color: '#6B7280', 
          textAlign: 'center', 
          marginBottom: 20, 
          lineHeight: 1.7,
          opacity: 0.8 + glitchIntensity * 0.2
        }}>
          The Archive's integrity is compromised. Some records may contain fabricated data.
        </div>

        <button
          onClick={game.continueFromCorruption}
          style={{
            padding: '12px 40px', 
            background: 'transparent', 
            color: '#D62839',
            border: '1px solid rgba(214,40,57,0.3)', 
            borderRadius: 6,
            fontSize: 12, 
            letterSpacing: 1.5, 
            textTransform: 'uppercase',
            animation: 'buttonPulse 2s infinite'
          }}
          onMouseEnter={e => { e.currentTarget.style.background = 'rgba(214,40,57,0.1)'; }}
          onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; }}
        >
          Continue Despite Corruption
        </button>
      </div>

      <style>{`
        @keyframes glitchText {
          0%, 90% { transform: translate(0); }
          20% { transform: translate(-2px, 2px); }
          40% { transform: translate(-2px, -2px); }
          60% { transform: translate(2px, 2px); }
          80% { transform: translate(2px, -2px); }
        }
        @keyframes glitchBlocks {
          0%, 100% { opacity: 1; }
          25% { opacity: 0.8; transform: scaleX(1.1); }
          50% { opacity: 0.6; transform: scaleX(0.9); }
          75% { opacity: 0.9; transform: scaleX(1.05); }
        }
        @keyframes fragmentFlicker {
          0%, 80%, 100% { opacity: 1; }
          85%, 95% { opacity: 0.3; }
        }
        @keyframes buttonPulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(214,40,57,0.4); }
          50% { box-shadow: 0 0 0 4px rgba(214,40,57,0); }
        }
      `}</style>
    </div>
  );
}
