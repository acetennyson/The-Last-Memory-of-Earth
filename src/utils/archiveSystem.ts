// Archive message system - makes the Archive feel alive
export class ArchiveSystem {
  static getArchiveMessage(trigger: string): { text: string; color: string } | null {
    const messages: Record<string, { text: string; color: string }[]> = {
      'power_critical': [{ text: 'ARCHIVE WARNING\n\nCore systems failing.', color: '#D62839' }],
      'mars_lie': [{ text: 'ARCHIVE ALERT\n\nHistorical integrity compromised.\nSomeone lied to humanity.', color: '#D62839' }],
      'archive_conspiracy': [{ text: 'ARCHIVE ERROR\n\nPurpose records corrupted.\nWho built this place?', color: '#B91C1C' }],
      'contradictions': [{ text: 'ARCHIVE NOTICE\n\nContradictory records accumulating.', color: '#F4A261' }],
    };

    const options = messages[trigger];
    return options ? options[0] : null;
  }
}