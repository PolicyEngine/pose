import type { WeekProgress, Segment } from '../lib/types';
import { colors } from '../lib/colors';

export const weeklyProgress: WeekProgress[] = [
  { week: 'Week 1 (Jan 23)', count: 8 },
  { week: 'Week 2 (Jan 30)', count: 28 },
  { week: 'Week 3 (Feb 6)', count: 44 },
  { week: 'Week 4 (Feb 13)', count: 62 },
  { week: 'Week 5 (Feb 20)', count: 75 },
  { week: 'Week 6 (Feb 27)', count: 87 },
  { week: 'Final (Mar 6)', count: 100 },
];

export const segments: Segment[] = [
  { name: 'Academic Researchers', count: 18, color: colors.accentBlue },
  { name: 'Think Tank Analysts', count: 12, color: colors.accentTeal },
  { name: 'AI + Econ Researchers', count: 10, color: colors.cosilicoCyan },
  { name: 'PE Team', count: 10, color: colors.peTeal },
  { name: 'Funders', count: 10, color: colors.accentOrange },
  { name: 'Non-Users', count: 8, color: colors.highlight },
  { name: 'Gov Standards Bodies', count: 7, color: colors.rulesBlue },
  { name: 'Government Economists', count: 7, color: colors.accentGreen },
  { name: 'Policy Advocates', count: 6, color: colors.accentPurple },
  { name: 'Data Journalists', count: 5, color: colors.lightGray },
  { name: 'OSS Contributors', count: 4, color: colors.accentGreen },
  { name: 'Competitors', count: 3, color: colors.dimText },
];
