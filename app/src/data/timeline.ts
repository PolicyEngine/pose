import type { Milestone } from '../lib/types';
import { colors } from '../lib/colors';

export const milestones: Milestone[] = [
  {
    period: 'Q1 2026',
    label: 'NOW',
    description: ['POSE complete', '100 interviews validated 3-org structure', 'Ballmer Group engaged'],
    color: colors.highlight,
  },
  {
    period: 'Q2-Q3 2026',
    label: 'LAUNCH',
    description: [],
    color: colors.accentBlue,
  },
  {
    period: 'Q4 2026',
    label: 'GROW',
    description: [],
    color: colors.accentTeal,
  },
  {
    period: '2027',
    label: 'SCALE',
    description: [],
    color: colors.accentGreen,
  },
  {
    period: '2028',
    label: 'SUSTAIN',
    description: [],
    color: colors.accentPurple,
  },
];

export interface OrgTimeline {
  org: string;
  subtitle?: string;
  color: string;
  milestones: { period: string; items: string[] }[];
}

export const orgTimelines: OrgTimeline[] = [
  {
    org: 'Rules Foundation',
    color: colors.rulesBlue,
    milestones: [
      { period: 'Q2-Q3 2026', items: ['Incorporate'] },
      { period: 'Q4 2026', items: ['First agency encodings'] },
      { period: '2027', items: ['5+ agency partnerships'] },
      { period: '2028', items: ['Self-sustaining operations'] },
    ],
  },
  {
    org: 'Cosilico',
    color: colors.cosilicoCyan,
    milestones: [
      { period: 'Q4 2026', items: ['Beta launch', 'First certified partners'] },
      { period: '2027', items: ['First paying customers'] },
      { period: '2028', items: ['$3M ARR'] },
    ],
  },
  {
    org: 'PolicyEngine',
    subtitle: '(continuation of existing operations)',
    color: colors.peTeal,
    milestones: [
      { period: 'Q2-Q3 2026', items: ['Full TAXSIM → PolicyEngine transition'] },
      { period: 'Q4 2026', items: ['Research partnerships live'] },
      { period: '2027', items: ['10+ institutional partners'] },
      { period: '2028', items: ['40%+ earned revenue'] },
    ],
  },
];
