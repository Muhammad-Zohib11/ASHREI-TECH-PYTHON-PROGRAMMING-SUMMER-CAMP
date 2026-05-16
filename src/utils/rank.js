import { RANKS } from '../data/ranks.js';

/**
 * Returns rank info for a given XP value.
 * @param {number} xp
 * @returns {{ current: object, next: object|null, pct: number }}
 */
export function getRankInfo(xp) {
  let current = RANKS[0];
  for (const r of RANKS) {
    if (xp >= r.minXP) current = r;
  }
  const nextIdx = RANKS.indexOf(current) + 1;
  const next    = RANKS[nextIdx] || null;
  const min     = current.minXP;
  const max     = next ? next.minXP : current.minXP + 500;
  const pct     = Math.min(100, Math.round(((xp - min) / (max - min)) * 100));
  return { current, next, pct };
}
