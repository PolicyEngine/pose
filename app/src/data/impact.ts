import type { StatItem } from '../lib/types';
import { colors } from '../lib/colors';

export const stats: StatItem[] = [
  { number: '75K+', label: 'API calls in 2025', color: colors.accentBlue },
  { number: 'Complete', label: 'Federal + 50 state income tax model', color: colors.accentTeal },
  { number: '100+', label: 'Benefit programs', color: colors.accentGreen },
  { number: '50+', label: 'OSS contributors', color: colors.accentPurple },
];

export const trustedBy = {
  line1: '10 Downing Street (policy analysis)  \u00b7  US Congress (distributional analysis)',
  line2: 'Brookings  \u00b7  NBER  \u00b7  Atlanta Fed  \u00b7  CRFB  \u00b7  Niskanen Center  \u00b7  Yale Budget Lab  \u00b7  BPC',
};
