import React, { useState, useEffect } from 'react';

interface TypewriterTextProps {
  text: string;
  speed?: number;
  delay?: number;
  onComplete?: () => void;
  glitch?: boolean;
}

export default function TypewriterText({ 
  text, 
  speed = 50, 
  delay = 0,
  onComplete,
  glitch = false 
}: TypewriterTextProps) {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (delay > 0 && currentIndex === 0) {
      const delayTimer = setTimeout(() => {
        setCurrentIndex(1);
      }, delay);
      return () => clearTimeout(delayTimer);
    }
    
    if ((delay === 0 && currentIndex < text.length) || (delay > 0 && currentIndex > 0 && currentIndex <= text.length)) {
      const timer = setTimeout(() => {
        const charIndex = delay === 0 ? currentIndex : currentIndex - 1;
        setDisplayText(prev => prev + text[charIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);
      return () => clearTimeout(timer);
    } else if (((delay === 0 && currentIndex >= text.length) || (delay > 0 && currentIndex > text.length)) && !isComplete) {
      setIsComplete(true);
      onComplete?.();
    }
  }, [currentIndex, text, speed, delay, onComplete, isComplete]);

  return (
    <span style={{
      position: 'relative',
      display: 'inline-block',
    }}>
      {displayText}
      {!isComplete && (
        <span style={{
          opacity: 1,
          animation: 'blink 1s infinite',
          color: '#6CCBFF'
        }}>|</span>
      )}
      {glitch && isComplete && (
        <span style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'rgba(214,40,57,0.1)',
          animation: 'glitch 3s infinite',
          pointerEvents: 'none'
        }} />
      )}
      
      <style>{`
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
        @keyframes glitch {
          0%, 98% { opacity: 0; }
          99%, 100% { opacity: 1; }
        }
      `}</style>
    </span>
  );
}