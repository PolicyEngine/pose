import type { EcosystemNode, EcosystemEdge } from '../lib/types';
import { colors } from '../lib/colors';

// Ring radii (used in the SVG viewBox 1800x900)
export const RING_RADII = [0, 200, 330, 440, 540];
export const RING_LABELS = ['Core', 'Direct Users', 'Channel Partners', 'Capabilities', 'Revenue'];
export const CENTER = { x: 900, y: 470 };

export const ecosystemNodes: EcosystemNode[] = [
  // Ring 0: Core orgs
  { id: 'pe-unified', label: 'PolicyEngine', ring: 0, angle: 270, color: colors.peTeal, org: 'all', description: 'Unified organization', visibleAtStep: 1 },
  { id: 'rules', label: 'Rules\nFoundation', ring: 0, angle: 150, color: colors.rulesBlue, org: 'rules', description: '501(c)(3) - Encode the law', visibleAtStep: 2 },
  { id: 'cosilico', label: 'Cosilico', ring: 0, angle: 270, color: colors.cosilicoCyan, org: 'cosilico', description: 'PBC - Run the infrastructure', visibleAtStep: 2 },
  { id: 'pe', label: 'PolicyEngine', ring: 0, angle: 30, color: colors.peTeal, org: 'pe', description: '501(c)(3) - Tell the story', visibleAtStep: 2 },

  // Ring 1: Direct users
  { id: 'researchers', label: 'Academic\nResearchers', ring: 1, angle: 355, color: colors.accentBlue, org: 'pe', count: 18, description: 'Empirical policy questions', visibleAtStep: 1 },
  { id: 'think-tanks', label: 'Think Tank\nAnalysts', ring: 1, angle: 50, color: colors.accentTeal, org: 'pe', count: 12, description: 'Policy reports & analysis', visibleAtStep: 1 },
  { id: 'gov-econ', label: 'Government\nEconomists', ring: 1, angle: 105, color: colors.accentGreen, org: 'rules', count: 7, description: 'Validate estimates', visibleAtStep: 1 },
  { id: 'journalists', label: 'Data\nJournalists', ring: 1, angle: 155, color: colors.lightGray, org: 'pe', count: 5, description: 'Fact-check & interactives', visibleAtStep: 1 },
  { id: 'advocates', label: 'Policy\nAdvocates', ring: 1, angle: 205, color: colors.accentPurple, org: 'pe', count: 6, description: 'Shape policy narrative', visibleAtStep: 1 },
  { id: 'contributors', label: 'OSS\nContributors', ring: 1, angle: 255, color: colors.accentGreen, org: 'rules', count: 4, description: 'Code & fix bugs', visibleAtStep: 1 },
  { id: 'pe-team', label: 'PE Team', ring: 1, angle: 310, color: colors.peTeal, org: 'all', count: 10, description: 'Build core models', visibleAtStep: 1 },

  // Ring 2: Channel partners
  { id: 'ai-labs', label: 'AI Labs', ring: 2, angle: 20, color: colors.cosilicoCyan, org: 'cosilico', count: 10, description: 'AI + policy research', visibleAtStep: 1 },
  { id: 'gov-standards', label: 'Gov Standards\nBodies', ring: 2, angle: 92, color: colors.rulesBlue, org: 'rules', count: 7, description: 'Interoperability', visibleAtStep: 1 },
  { id: 'funders', label: 'Funders', ring: 2, angle: 164, color: colors.accentOrange, org: 'all', count: 10, description: 'Fund development', visibleAtStep: 1 },
  { id: 'non-users', label: 'Non-Users', ring: 2, angle: 236, color: colors.highlight, org: 'all', count: 8, description: 'Understand barriers', visibleAtStep: 1 },
  { id: 'competitors', label: 'Competitors', ring: 2, angle: 308, color: colors.dimText, org: 'all', count: 3, description: 'Ecosystem mapping', visibleAtStep: 1 },

  // Ring 3: Capabilities
  { id: 'tax-calc', label: 'Tax\nCalculation', ring: 3, angle: 5, color: colors.cosilicoCyan, org: 'cosilico', description: 'API endpoints', visibleAtStep: 3 },
  { id: 'benefit-sim', label: 'Benefit\nSimulation', ring: 3, angle: 65, color: colors.cosilicoCyan, org: 'cosilico', description: 'Household analysis', visibleAtStep: 3 },
  { id: 'law-encoding', label: 'Law\nEncoding', ring: 3, angle: 125, color: colors.rulesBlue, org: 'rules', description: 'Open statute code', visibleAtStep: 3 },
  { id: 'research-tools', label: 'Research\nTools', ring: 3, angle: 185, color: colors.peTeal, org: 'pe', description: 'Analysis platform', visibleAtStep: 3 },
  { id: 'ai-training', label: 'AI Training\nData', ring: 3, angle: 245, color: colors.cosilicoCyan, org: 'cosilico', description: 'RLVR benchmarks', visibleAtStep: 3 },
  { id: 'data-enrichment', label: 'Data\nEnrichment', ring: 3, angle: 305, color: colors.cosilicoCyan, org: 'cosilico', description: '$0.10-1.00/record', visibleAtStep: 3 },

  // Ring 4: Revenue
  { id: 'state-rev', label: 'State Revenue\nDepts', ring: 4, angle: 35, color: colors.cosilicoCyan, org: 'cosilico', description: '$1B+ TAM', visibleAtStep: 3 },
  { id: 'tax-software', label: 'Tax Software\nVendors', ring: 4, angle: 95, color: colors.cosilicoCyan, org: 'cosilico', description: '$90B+ TAM', visibleAtStep: 3 },
  { id: 'fin-planners', label: 'Financial\nPlanners', ring: 4, angle: 155, color: colors.cosilicoCyan, org: 'cosilico', description: '$5B+ TAM', visibleAtStep: 3 },
  { id: 'enterprise', label: 'Enterprise\nClients', ring: 4, angle: 215, color: colors.cosilicoCyan, org: 'cosilico', description: '$100K-1M+/year', visibleAtStep: 3 },
  { id: 'nsf-grants', label: 'NSF &\nGrants', ring: 4, angle: 275, color: colors.accentOrange, org: 'all', description: 'Government funding', visibleAtStep: 3 },
  { id: 'foundation-grants', label: 'Foundation\nGrants', ring: 4, angle: 335, color: colors.accentOrange, org: 'pe', description: 'Arnold, Pritzker, etc.', visibleAtStep: 3 },
];

export const ecosystemEdges: EcosystemEdge[] = [
  // Step 1: unified relationships
  { from: 'pe-unified', to: 'researchers', label: 'serves', color: colors.accentBlue, type: 'solid', visibleAtStep: 1 },
  { from: 'pe-unified', to: 'think-tanks', label: 'serves', color: colors.accentTeal, type: 'solid', visibleAtStep: 1 },
  { from: 'pe-unified', to: 'gov-econ', label: 'serves', color: colors.accentGreen, type: 'solid', visibleAtStep: 1 },
  { from: 'pe-unified', to: 'journalists', color: colors.lightGray, type: 'solid', visibleAtStep: 1 },
  { from: 'pe-unified', to: 'advocates', color: colors.accentPurple, type: 'solid', visibleAtStep: 1 },
  { from: 'pe-unified', to: 'ai-labs', label: 'partners', color: colors.cosilicoCyan, type: 'dashed', visibleAtStep: 1 },
  { from: 'funders', to: 'pe-unified', label: 'funds', color: colors.accentOrange, type: 'solid', visibleAtStep: 1 },
  { from: 'contributors', to: 'pe-unified', label: 'contributes', color: colors.accentGreen, type: 'solid', visibleAtStep: 1 },

  // Step 3: split relationships
  { from: 'rules', to: 'gov-standards', label: 'standards', color: colors.rulesBlue, type: 'solid', visibleAtStep: 3 },
  { from: 'rules', to: 'contributors', label: 'open code', color: colors.rulesBlue, type: 'solid', visibleAtStep: 3 },
  { from: 'rules', to: 'gov-econ', label: 'validates', color: colors.rulesBlue, type: 'solid', visibleAtStep: 3 },
  { from: 'rules', to: 'law-encoding', color: colors.rulesBlue, type: 'solid', visibleAtStep: 3 },
  { from: 'cosilico', to: 'ai-labs', label: 'API', color: colors.cosilicoCyan, type: 'solid', visibleAtStep: 3 },
  { from: 'cosilico', to: 'tax-calc', color: colors.cosilicoCyan, type: 'solid', visibleAtStep: 3 },
  { from: 'cosilico', to: 'benefit-sim', color: colors.cosilicoCyan, type: 'solid', visibleAtStep: 3 },
  { from: 'cosilico', to: 'ai-training', color: colors.cosilicoCyan, type: 'solid', visibleAtStep: 3 },
  { from: 'cosilico', to: 'data-enrichment', color: colors.cosilicoCyan, type: 'solid', visibleAtStep: 3 },
  { from: 'cosilico', to: 'state-rev', color: colors.cosilicoCyan, type: 'dashed', visibleAtStep: 3 },
  { from: 'cosilico', to: 'tax-software', color: colors.cosilicoCyan, type: 'dashed', visibleAtStep: 3 },
  { from: 'cosilico', to: 'fin-planners', color: colors.cosilicoCyan, type: 'dashed', visibleAtStep: 3 },
  { from: 'cosilico', to: 'enterprise', color: colors.cosilicoCyan, type: 'dashed', visibleAtStep: 3 },
  { from: 'pe', to: 'researchers', label: 'research', color: colors.peTeal, type: 'solid', visibleAtStep: 3 },
  { from: 'pe', to: 'think-tanks', label: 'analysis', color: colors.peTeal, type: 'solid', visibleAtStep: 3 },
  { from: 'pe', to: 'journalists', color: colors.peTeal, type: 'solid', visibleAtStep: 3 },
  { from: 'pe', to: 'advocates', color: colors.peTeal, type: 'solid', visibleAtStep: 3 },
  { from: 'pe', to: 'research-tools', color: colors.peTeal, type: 'solid', visibleAtStep: 3 },
  { from: 'pe', to: 'foundation-grants', color: colors.accentOrange, type: 'dashed', visibleAtStep: 3 },
  { from: 'nsf-grants', to: 'rules', color: colors.accentOrange, type: 'dashed', visibleAtStep: 3 },
  { from: 'nsf-grants', to: 'pe', color: colors.accentOrange, type: 'dashed', visibleAtStep: 3 },
  { from: 'rules', to: 'cosilico', label: 'code feeds\ninfra', color: colors.highlight, type: 'solid', visibleAtStep: 3 },
  { from: 'cosilico', to: 'pe', label: 'API powers\nresearch', color: colors.highlight, type: 'solid', visibleAtStep: 3 },
];

export const EVOLUTION_STEPS = [
  { step: 1, title: 'Unified Ecosystem', description: 'PolicyEngine serves all user segments as one organization' },
  { step: 2, title: 'The Split', description: 'Three specialized organizations with distinct missions' },
  { step: 3, title: 'Full Ecosystem', description: 'Three orgs with capabilities and revenue streams' },
];
