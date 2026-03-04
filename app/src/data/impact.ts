import type { StatItem } from '../lib/types';
import { colors } from '../lib/colors';

export const stats: StatItem[] = [
  { number: '1M+', label: 'Simulations run', color: colors.accentBlue },
  { number: '50+', label: 'State tax systems', color: colors.accentTeal },
  { number: '100+', label: 'Benefit programs', color: colors.accentGreen },
  { number: '50+', label: 'OSS contributors', color: colors.accentPurple },
];

export const trustedBy = {
  line1: 'UK Government (budget scoring)  \u00b7  US Congress (distributional analysis)',
  line2: 'Brookings  \u00b7  NBER  \u00b7  Atlanta Fed  \u00b7  CRFB  \u00b7  Niskanen Center  \u00b7  Yale Budget Lab  \u00b7  BPC',
};
