import type { Milestone } from '@/lib/types';
import { colors } from '@/lib/colors';

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
  logo?: string;
  milestones: { period: string; items: string[] }[];
}

export const orgTimelines: OrgTimeline[] = [
  {
    org: 'Rules Foundation',
    color: colors.rulesBlue,
    logo: '/assets/logos/rf-full.svg',
    milestones: [
      { period: 'Q2-Q3 2026', items: ['Incorporate', 'Begin US tax encodings'] },
      { period: 'Q4 2026', items: ['Complete US tax & benefit encodings'] },
      { period: '2027', items: ['UK encodings', '5+ agency partnerships'] },
      { period: '2028', items: ['Self-sustaining operations'] },
    ],
  },
  {
    org: 'Cosilico',
    color: colors.cosilicoCyan,
    logo: '/assets/logos/cosilico-full.svg',
    milestones: [
      { period: 'Q2-Q3 2026', items: ['Incorporate'] },
      { period: 'Q4 2026', items: ['Rules API launch atop RF'] },
      { period: '2027', items: ['Simulation API launch', 'First paying customers'] },
      { period: '2028', items: ['$3M ARR'] },
    ],
  },
  {
    org: 'PolicyEngine',
    color: colors.peTeal,
    logo: '/assets/logos/pe-full-white.svg',
    milestones: [
      { period: 'Q2-Q3 2026', items: ['50+ media citations', '5 published reports'] },
      { period: 'Q4 2026', items: ['100+ citations', '3 research partnerships'] },
      { period: '2027', items: ['500+ citations', '10+ institutional partners'] },
      { period: '2028', items: ['Authoritative source for policy analysis'] },
    ],
  },
];
