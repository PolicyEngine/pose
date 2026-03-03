import type { SustainabilityOrg } from '../lib/types';
import { colors } from '../lib/colors';

export const sustainability: SustainabilityOrg[] = [
  {
    name: 'Rules Foundation',
    color: colors.rulesBlue,
    budget: '~$300K/year',
    items: [
      'Government grants: 40%',
      'Foundation grants: 30%',
      'AI lab in-kind (compute): 20%',
      'Downstream contributions: 10%',
    ],
  },
  {
    name: 'Cosilico',
    color: colors.cosilicoCyan,
    budget: '$500K \u2192 $75M ARR (5yr)',
    items: [
      'Open source (free, Apache 2.0)',
      'API: $0.001\u20130.01/call',
      'Data enrichment: $0.10\u20131.00/record',
      'Enterprise: $100K\u20131M+/year',
    ],
  },
  {
    name: 'PolicyEngine',
    color: colors.peTeal,
    budget: '~$500K/year',
    items: [
      'Foundation grants: 60%',
      'Government grants (NSF): 20%',
      'Earned revenue: 20%',
      'Path to 40%+ earned revenue',
    ],
  },
];
