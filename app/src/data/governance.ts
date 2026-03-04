import type { GovernanceOrg } from '../lib/types';
import { colors } from '../lib/colors';

export const governanceBefore = {
  title: 'BDFL model',
  items: [
    'Founder makes all strategic decisions',
    'Single 501(c)(3) owns everything',
    'AGPL-3.0 license, informal governance',
  ],
};

export const governanceAfter = {
  title: 'Three orgs, tailored governance',
  items: [
    { text: 'Rules Foundation: multi-stakeholder 501(c)(3)', color: colors.rulesBlue },
    { text: 'Cosilico: Public Benefit Corp, board mandate', color: colors.cosilicoCyan },
    { text: 'PolicyEngine: 501(c)(3) + advisory board', color: colors.peTeal },
  ],
};

export const governanceQuote = {
  label: 'WHAT INTERVIEWS TOLD US',
  quote: '\u201CFresh entity strongly recommended \u2014 you want this fresh start with clean governance from day one.\u201D',
  source: '\u2014 Foundation governance advisor',
  detail: 'Jason Morris, Martin Perron, and foundation advisors all pointed to separation of concerns.',
};

export const governanceNextSteps = [
  'Incorporate Rules Foundation as fresh 501(c)(3)',
  'Register Cosilico as Public Benefit Corp',
  'Recruit advisory board from interview network',
  'Open RFC process for governance docs',
];

export const governanceDetail: GovernanceOrg[] = [
  {
    name: 'Rules Foundation',
    color: colors.rulesBlue,
    details: [
      'Multi-stakeholder 501(c)(3)',
      'Technical steering committee + encoding standards board',
      'Partisan neutrality \u00b7 Mandatory statute citations \u00b7 Multi-reviewer validation',
      'Historical versioning of all encodings',
    ],
  },
  {
    name: 'Cosilico',
    color: colors.cosilicoCyan,
    details: [
      'Public Benefit Corp (mission-locked by charter)',
      'Board with public benefit mandate',
      'Open-source core (Apache 2.0) \u00b7 Enterprise services layer',
      'Certified partner program (Salesforce model)',
    ],
  },
  {
    name: 'PolicyEngine',
    color: colors.peTeal,
    details: [
      '501(c)(3) / UK Charity (AGPL licensed)',
      'Founder-led \u2192 Technical steering committee + Advisory board',
      'Contributor guidelines \u00b7 Formal research partnership agreements',
      'Open roadmap with community input',
    ],
  },
];
