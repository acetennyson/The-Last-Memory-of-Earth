// Utility for adding corruption effects throughout the game
export class CorruptionSystem {
  private static readonly CORRUPTION_CHARS = ['█', '░', '▓', '▒', '■', '▪', '▫'];
  private static readonly CORRUPTION_WORDS = ['[CORRUPTED]', '[DATA LOST]', '[REDACTED]', '[ERROR]', '[DAMAGED]'];

  // Apply corruption to any text based on corruption level (0-10)
  static corruptText(text: string, corruptionLevel: number = 1): string {
    if (corruptionLevel === 0) return text;
    
    const words = text.split(' ');
    const corruptionRate = Math.min(corruptionLevel / 10, 0.4); // Max 40% corruption
    
    return words.map(word => {
      if (Math.random() < corruptionRate) {
        return this.corruptWord(word);
      }
      return word;
    }).join(' ');
  }

  // Corrupt individual word
  private static corruptWord(word: string): string {
    const corruptionType = Math.random();
    
    if (corruptionType < 0.6) {
      // Replace with █████ blocks
      const blockLength = Math.min(word.length, Math.max(1, Math.floor(Math.random() * 8) + 1));
      return '█'.repeat(blockLength);
    } else if (corruptionType < 0.8) {
      // Partial corruption - replace some characters
      return word.split('').map(char => 
        Math.random() < 0.7 ? char : this.CORRUPTION_CHARS[Math.floor(Math.random() * this.CORRUPTION_CHARS.length)]
      ).join('');
    } else {
      // Replace with corruption words
      return this.CORRUPTION_WORDS[Math.floor(Math.random() * this.CORRUPTION_WORDS.length)];
    }
  }

  // Add corruption fragments to titles
  static corruptTitle(title: string, corruptionLevel: number = 1): string {
    if (corruptionLevel < 2) return title;
    
    if (Math.random() < 0.3) {
      const words = title.split(' ');
      const corruptIndex = Math.floor(Math.random() * words.length);
      words[corruptIndex] = '█████';
      return words.join(' ');
    }
    
    return title;
  }

  // Add random corruption fragments for atmosphere
  static getRandomFragment(): string {
    const fragments = [
      '████ ██ ███████ ████',
      '[DATA CORRUPTED]',
      '▓▓▓▓▓▓▓▓▓▓▓▓',
      '[SIGNAL LOST]',
      '█████████████',
      '[ARCHIVE DAMAGED]',
      '░░░░░░░░░░░░░░░░',
      '[MEMORY FRAGMENTED]',
      '■■■■■■■■■■■■■■■',
      '[CONNECTION SEVERED]'
    ];
    return fragments[Math.floor(Math.random() * fragments.length)];
  }

  // Corrupt evidence content
  static corruptEvidence(content: string, reliability: number): string {
    // Lower reliability = more corruption
    const corruptionLevel = Math.max(0, 10 - (reliability / 10));
    return this.corruptText(content, corruptionLevel);
  }

  // Add glitch effects to UI text
  static addGlitchEffects(text: string, intensity: number = 1): string {
    if (intensity === 0) return text;
    
    const glitchChance = intensity * 0.1;
    if (Math.random() < glitchChance) {
      return text.split('').map(char => {
        if (Math.random() < 0.2) {
          return this.CORRUPTION_CHARS[Math.floor(Math.random() * this.CORRUPTION_CHARS.length)];
        }
        return char;
      }).join('');
    }
    
    return text;
  }
}