import React from 'react';

interface AmbientBackgroundProps {
  intensity?: number;
  corruption?: boolean;
}

export default function AmbientBackground({ intensity = 1, corruption = false }: AmbientBackgroundProps) {
  const particles = Array.from({ length: Math.floor(intensity * 5) }, (_, i) => i);
  
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      pointerEvents: 'none',
      zIndex: -1,
      overflow: 'hidden'
    }}>
      {/* Subtle particle effect */}
      {particles.map(i => (
        <div
          key={i}
          style={{
            position: 'absolute',
            width: Math.random() * 2 + 1,
            height: Math.random() * 2 + 1,
            backgroundColor: corruption ? '#D62839' : '#6CCBFF',
            opacity: Math.random() * 0.3 + 0.1,
            left: Math.random() * 100 + '%',
            top: Math.random() * 100 + '%',
            animation: `float ${Math.random() * 10 + 10}s infinite linear`,
            borderRadius: '50%'
          }}
        />
      ))}
      
      {/* Subtle scanning lines */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: `repeating-linear-gradient(
          0deg,
          transparent,
          transparent 2px,
          rgba(108,203,255,0.01) 2px,
          rgba(108,203,255,0.01) 4px
        )`,
        animation: corruption ? 'scanCorrupt 2s infinite' : 'scan 8s infinite linear'
      }} />
      
      <style>{`
        @keyframes float {
          0% { transform: translateY(100vh) translateX(0px); }
          100% { transform: translateY(-100vh) translateX(100px); }
        }
        @keyframes scan {
          0% { transform: translateY(-10px); }
          100% { transform: translateY(10px); }
        }
        @keyframes scanCorrupt {
          0%, 90% { transform: translateY(0px); opacity: 1; }
          95% { transform: translateY(-2px); opacity: 0.5; }
          100% { transform: translateY(0px); opacity: 1; }
        }
      `}</style>
    </div>
  );
}