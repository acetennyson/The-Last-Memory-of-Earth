export const POWER_COSTS = {
  VIEW_MEMORY: 1,
  INVESTIGATE: 5,
  DEEP_INVESTIGATION: 10,
  CONTRADICTION_SCAN: 8,
} as const;

export const INITIAL_POWER = 100;
export const INITIAL_CAPACITY = 100;
export const INITIAL_INVESTIGATIONS = 20;
export const MIN_POWER_FOR_ENDING = 10;
export const MAX_VALUE = 100;
export const MIN_VALUE = 0;
export const DEFAULT_VALUE = 50;
export const MIN_MEMORIES_FOR_ENDING = 15;
export const MIN_CONTRADICTIONS_FOR_ENDING = 3;
export const MIN_INVESTIGATIONS_FOR_ENDING = 5;

export const RARITY_WEIGHTS: Record<string, number> = {
  COMMON: 1,
  UNCOMMON: 2,
  RARE: 4,
  LEGENDARY: 8,
};
