import type { Session } from './types';
import { SessionStatus } from '../shared/enums';
import { POWER_COSTS, INITIAL_POWER } from '../shared/constants';

export class PowerService {
  canAfford(session: Session, action: keyof typeof POWER_COSTS): boolean {
    return session.powerRemaining >= POWER_COSTS[action];
  }

  consume(session: Session, action: keyof typeof POWER_COSTS): Session {
    const remaining = Math.max(0, session.powerRemaining - POWER_COSTS[action]);
    let status = session.status;
    if (remaining <= 0) status = SessionStatus.FINALIZING;
    else if (remaining <= INITIAL_POWER * 0.2) status = SessionStatus.LOW_POWER;
    return { ...session, powerRemaining: remaining, status };
  }
}
