import { useEffect, useState } from 'react';

interface Props {
  onComplete: () => void;
}

const dot: React.CSSProperties = {
  display: 'inline-block',
  width: 6,
  height: 6,
  borderRadius: '50%',
  background: '#6CCBFF',
  margin: '0 2px',
};

export default function BootScreen({ onComplete }: Props) {
  const [step, setStep] = useState(0);
  const [dots, setDots] = useState('');

  useEffect(() => {
    if (step >= 3) { const t = setTimeout(onComplete, 800); return () => clearTimeout(t); }
    const t = setTimeout(() => setStep(s => s + 1), step === 1 ? 600 : 400);
    return () => clearTimeout(t);
  }, [step, onComplete]);

  useEffect(() => {
    const interval = setInterval(() => setDots(d => d.length >= 3 ? '' : d + '.'), 300);
    return () => clearInterval(interval);
  }, []);

  const lines = [
    'ARCHIVE UNIT A-01 INITIALIZING...',
    'MEMORY CORES OFFLINE — REBOOTING',
    'CONTENT INTEGRITY CHECK IN PROGRESS',
    'ARCHIVE UNIT READY. WELCOME, CURATOR.',
  ];

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh', background: '#080B14' }}>
      <div>
        {lines.map((line, i) => (
          <div
            key={i}
            style={{
              fontFamily: "'SF Mono','Fira Code','Cascadia Code',monospace",
              fontSize: 13,
              color: i < step ? '#6CCBFF' : '#080B14',
              marginBottom: 12,
              letterSpacing: 1,
              opacity: i === step ? 0.9 : 1,
              transition: 'color 0.3s',
            }}
          >
            {'> '}{line}
            {i === step && i < 3 && (
              <span style={{ color: '#6CCBFF' }}>{dots}</span>
            )}
          </div>
        ))}

        {step >= 3 && (
          <div style={{
            display: 'flex', gap: 8, marginTop: 40,
            justifyContent: 'center',
          }}>
            <span style={dot} />
            <span style={{ ...dot, animation: 'pulse 1s ease-in-out infinite' }} />
            <span style={dot} />
          </div>
        )}
      </div>
    </div>
  );
}
