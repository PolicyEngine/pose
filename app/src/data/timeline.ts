import type { Milestone } from '../lib/types';
import { colors } from '../lib/colors';

export const milestones: Milestone[] = [
  {
    period: 'Q1 2026',
    label: 'NOW',
    description: ['POSE complete', '100 interviews', '3-org structure defined'],
    color: colors.highlight,
  },
  {
    period: 'Q2-Q3 2026',
    label: 'LAUNCH',
    description: ['Rules Foundation incorporates', 'Cosilico beta launch', 'First certified partners'],
    color: colors.accentBlue,
  },
  {
    period: 'Q4 2026',
    label: 'GROW',
    description: ['First paying customers', 'First agency encodings', 'Research partnerships live'],
    color: colors.accentTeal,
  },
  {
    period: '2027',
    label: 'SCALE',
    description: ['Cosilico $3M ARR', '5+ agency partnerships', '10+ institutional partners'],
    color: colors.accentGreen,
  },
  {
    period: '2028',
    label: 'SUSTAIN',
    description: ['Cosilico $10M ARR', 'Self-sustaining operations', '40%+ earned revenue (PE)'],
    color: colors.accentPurple,
  },
];
