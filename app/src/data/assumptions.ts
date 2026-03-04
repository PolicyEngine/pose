import type { Assumption } from '../lib/types';
import { colors } from '../lib/colors';

export const assumptions: Assumption[] = [
  {
    status: '\u2713 CONFIRMED',
    statusType: 'confirmed',
    title: 'Researchers adopt OSS\nif accessible',
    learning: 'But they also need validation against official sources before they\'ll cite it.',
    quote: '\u201CFast, open tools are especially valuable for quick turnaround vs. slow official scores.\u201D',
    source: '\u2014 Andrew Lautz, BPC',
    color: colors.accentGreen,
  },
  {
    status: '\u2713 CONFIRMED',
    statusType: 'confirmed',
    title: 'Funders value transparency\nenough to fund OSS',
    learning: 'One grant funds infrastructure used by multiple orgs \u2014 leverage argument works.',
    quote: '\u201CThink tanks want auditable methodology they can cite in publications.\u201D',
    source: '\u2014 Think tank interviewees',
    color: colors.accentGreen,
  },
  {
    status: '\u2261 PARTIALLY',
    statusType: 'partial',
    title: 'Developers contribute for\npolicy impact alone',
    learning: 'They also need portfolio value, learning opportunities, and community.',
    quote: '\u201CAI is transforming developer onboarding, enabling faster ramp-up.\u201D',
    source: '\u2014 Anthony Volk, PolicyEngine',
    color: colors.accentOrange,
  },
  {
    status: '\u2713 VALIDATED',
    statusType: 'rejected',
    title: 'One organization cannot\nserve all segments',
    learning: 'Our pre-POSE hypothesis confirmed: infrastructure, standards, and research need different governance and funding.',
    quote: '\u201CYou want this fresh start with clean governance from day one.\u201D',
    source: '\u2014 Foundation governance advisor',
    color: colors.highlight,
  },
];
