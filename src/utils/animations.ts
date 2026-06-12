// Utility for adding enhanced button animations
export const buttonAnimations = {
  // Standard button with subtle glow
  standard: {
    transition: 'all 0.3s ease',
    position: 'relative' as const,
    overflow: 'hidden' as const,
  },

  // Glitch button for corruption/critical states
  glitch: {
    transition: 'all 0.2s ease',
    position: 'relative' as const,
    overflow: 'hidden' as const,
    animation: 'glitchPulse 3s infinite',
  },

  // Investigation button with scanning effect
  investigate: {
    transition: 'all 0.3s ease',
    position: 'relative' as const,
    overflow: 'hidden' as const,
    '&:hover': {
      transform: 'translateY(-1px)',
      boxShadow: '0 4px 12px rgba(108,203,255,0.3)',
    }
  },

  // Power critical button
  critical: {
    transition: 'all 0.2s ease',
    animation: 'pulse 1.5s infinite',
  }
};

// CSS animations for buttons
export const buttonStyles = `
  @keyframes glitchPulse {
    0%, 98% { 
      box-shadow: none;
      transform: translateX(0);
    }
    99% { 
      box-shadow: 0 0 8px rgba(214,40,57,0.5);
      transform: translateX(1px);
    }
    100% { 
      transform: translateX(-1px);
    }
  }
  
  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.7; }
  }
  
  @keyframes slideIn {
    from { 
      opacity: 0; 
      transform: translateY(20px); 
    }
    to { 
      opacity: 1; 
      transform: translateY(0); 
    }
  }
`;

// Enhanced hover handlers
export const createHoverHandlers = (
  color: string, 
  type: 'standard' | 'investigate' | 'critical' = 'standard'
) => ({
  onMouseEnter: (e: React.MouseEvent<HTMLButtonElement>) => {
    const button = e.currentTarget;
    button.style.background = `${color}15`;
    button.style.borderColor = `${color}60`;
    button.style.transform = type === 'investigate' ? 'translateY(-1px)' : 'scale(1.02)';
    button.style.boxShadow = type === 'investigate' ? `0 4px 12px ${color}30` : `0 2px 8px ${color}20`;
  },
  
  onMouseLeave: (e: React.MouseEvent<HTMLButtonElement>) => {
    const button = e.currentTarget;
    button.style.background = 'transparent';
    button.style.borderColor = `${color}25`;
    button.style.transform = 'none';
    button.style.boxShadow = 'none';
  }
});