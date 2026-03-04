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
  color: string;
  milestones: { period: string; items: string[] }[];
}

export const orgTimelines: OrgTimeline[] = [
  {
    org: 'Rules Foundation',
    color: colors.rulesBlue,
    milestones: [
      { period: 'LAUNCH', items: ['Incorporate'] },
      { period: 'GROW', items: ['First agency encodings'] },
      { period: 'SCALE', items: ['5+ agency partnerships'] },
      { period: 'SUSTAIN', items: ['Self-sustaining operations'] },
    ],
  },
  {
    org: 'Cosilico',
    color: colors.cosilicoCyan,
    milestones: [
      { period: 'LAUNCH', items: ['Beta launch', 'First certified partners'] },
      { period: 'GROW', items: ['First paying customers'] },
      { period: 'SCALE', items: ['$3M ARR'] },
      { period: 'SUSTAIN', items: ['$10M ARR'] },
    ],
  },
  {
    org: 'PolicyEngine',
    color: colors.peTeal,
    milestones: [
      { period: 'LAUNCH', items: ['Full TAXSIM → PolicyEngine transition'] },
      { period: 'GROW', items: ['Research partnerships live'] },
      { period: 'SCALE', items: ['10+ institutional partners'] },
      { period: 'SUSTAIN', items: ['40%+ earned revenue'] },
    ],
  },
];
