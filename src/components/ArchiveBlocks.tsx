import React from 'react';

// Simple parser for :::blocks in markdown text
export const parseArchiveBlocks = (content: string): string => {
  return content
    .replace(/:::confidence (\d+):::/g, '<div class="archive-confidence">ARCHIVE: Historical confidence: $1%</div>')
    .replace(/:::corruption\n(.*?)\n:::/gs, '<div class="archive-corruption">$1</div>')
    .replace(/:::inconsistency\n(.*?)\n:::/gs, '<div class="archive-inconsistency">WARNING: $1</div>');
};