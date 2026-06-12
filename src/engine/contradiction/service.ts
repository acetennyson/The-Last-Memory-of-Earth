import { Contradiction, ActiveContradiction } from './types';

export class ContradictionService {
  findByMemory(memoryId: string, all: Contradiction[]): Contradiction[] {
    return all.filter(c => c.memoryA === memoryId || c.memoryB === memoryId);
  }

  findActive(processedIds: string[], all: Contradiction[]): ActiveContradiction[] {
    const active: ActiveContradiction[] = [];
    for (const c of all) {
      if (processedIds.includes(c.memoryA) && processedIds.includes(c.memoryB)) {
        active.push({ id: c.id, severity: c.severity, discovered: true, resolved: false });
      }
    }
    return active;
  }

  tension(active: ActiveContradiction[]): number {
    return Math.min(100, active.reduce((sum, c) => sum + (c.discovered ? c.severity : 0), 0) * 10);
  }
}
