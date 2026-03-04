import type { Quote, Partner, Competitor, MarketSegment, ImpactGoal, InterviewHighlight } from '../lib/types';
import { colors } from '../lib/colors';

export const voicesQuotes: Quote[] = [
  {
    text: 'Institutions like the Fed face strong IT/security barriers to external APIs \u2014 installable, low-dependency tools fit much better than cloud services.',
    name: 'Jacob Walker',
    title: 'Sr. Research Analyst, Atlanta Fed',
    color: colors.rulesBlue,
  },
  {
    text: 'PolicyEngine-style tools are ready for deployment; the blocker is institutional slowness, not technology.',
    name: 'Martin Perron',
    title: 'Rules as Code, Canadian Digital Services',
    color: colors.cosilicoCyan,
  },
  {
    text: 'Programs and tax rules in silos create severe unintended consequences \u2014 cliffs, penalties. Modeling these is influencing legislators.',
    name: 'Ray Packer',
    title: 'Georgia Center for Opportunity',
    color: colors.peTeal,
  },
  {
    text: 'Data and rules complexity create big gaps where better microsim tools and infrastructure are still missing.',
    name: 'Jack Landry',
    title: 'Jane Family Institute',
    color: colors.accentOrange,
  },
];

export const impactGoalsEvolution = {
  week2: 'If this 1 Senate Bill cites PolicyEngine \u2192 unlock direct government contracting',
  week3: 'If 10 congressional bills cite PolicyEngine \u2192 public deserves open policy estimates',
};

export const impactGoals: ImpactGoal[] = [
  {
    name: 'Rules Foundation',
    color: colors.rulesBlue,
    condition: 'If one AI lab evaluates its models against Rules Foundation benchmarks',
    impact: 'It will provide society a shared, verifiable standard for legal code interpretation',
  },
  {
    name: 'Cosilico',
    color: colors.cosilicoCyan,
    condition: 'If one state agency replaces a proprietary vendor with Cosilico Rules',
    impact: 'It will prove that government will invest in open-source rules infrastructure',
  },
  {
    name: 'PolicyEngine',
    color: colors.peTeal,
    condition: 'If 20 researchers use PolicyEngine in published papers',
    impact: 'It will prove that open-source tools can replace proprietary licenses in policy research',
  },
];

export const partners: Partner[] = [
  {
    name: 'AI Labs',
    orgs: 'Anthropic, OpenAI, Google DeepMind',
    type: 'Tech Development + Funding',
    value: ['Verifiable ground truth for RLVR training'],
    risk: 'Labs may build policy reasoning internally',
    color: colors.accentBlue,
  },
  {
    name: 'Policy Foundations',
    orgs: 'Arnold Ventures, Pritzker',
    type: 'Funding + Community Support',
    value: ['Higher-quality policy research', 'Full transparency', 'One grant funds infra used by many orgs'],
    risk: 'Foundation priorities shift with leadership cycles',
    color: colors.accentGreen,
  },
  {
    name: 'Major Think Tanks',
    orgs: 'Brookings, CRFB, Niskanen, Urban',
    type: 'Distribution + Funding',
    value: ['Expert modeling without internal capacity', 'Auditable methodology for publications', 'Fast turnaround'],
    risk: 'Could build in-house from open-source',
    color: colors.accentPurple,
  },
];

export const canvasMembers = {
  community: {
    title: 'Community Members (56 interviews)',
    color: colors.accentBlue,
    items: [
      'PE Team: 10 | Build core models',
      'Academic Researchers: 18 | Empirical questions',
      'Government Economists: 7 | Validate estimates',
      'Think Tank Analysts: 12 | Policy reports',
      'OSS Contributors: 4 | Code, fix bugs',
      'Data Journalists: 5 | Fact-check, interactives',
    ],
  },
  stakeholders: {
    title: 'Other Stakeholders (44 interviews)',
    color: colors.accentTeal,
    items: [
      'AI Labs: 10 | AI + policy research',
      'Funders: 10 | Fund development',
      'Non-Users: 8 | Understand barriers',
      'Gov Standards Bodies: 7 | Interoperability',
      'Policy Advocates: 6 | Shape narrative',
      'Competitors: 3 | Ecosystem mapping',
    ],
  },
  valueProps: {
    title: 'Value Propositions',
    color: colors.accentGreen,
    items: [
      'Transparency: Audit every calculation',
      'Speed: Seconds vs. weeks',
      'Cost: Free vs. $10K+ licenses',
      'Integration: API for existing workflows',
      'Credibility: Validated vs. IRS, SSA, CBO',
    ],
  },
};

export const competitors: Competitor[] = [
  { name: 'Column Tax', metric: '$26.8M raised', focus: 'Filing, not calculation' },
  { name: 'Symmetry', metric: '64M+ employees/yr', focus: 'Payroll tax only' },
  { name: 'Benefit Kitchen', metric: '7 states', focus: '18 programs, healthcare focus' },
  { name: 'Avalara', metric: 'Acquired $8.4B', focus: 'Sales tax only' },
  { name: 'IMPLAN', metric: 'Acquired $100M+', focus: 'I-O multipliers, no household rules' },
];

export const markets: MarketSegment[] = [
  { name: 'State Revenue Depts', tam: '$1B+' },
  { name: 'Benefits Agencies', tam: '$500M+' },
  { name: 'Tax Software Vendors', tam: '$90B+' },
  { name: 'Financial Planners', tam: '$5B+' },
  { name: 'Banks & Lenders', tam: '$100B+' },
  { name: 'Insurance/Actuaries', tam: '$50B+' },
  { name: 'AI Labs', tam: 'Strategic' },
  { name: 'AI Agent Builders', tam: '$10B+' },
  { name: 'Marketing/Data', tam: '$2.4B+' },
  { name: 'Economic Analysts', tam: '$50-100M+' },
  { name: 'Quant Finance', tam: '$500B+' },
  { name: 'VC/Impact', tam: 'Growing' },
];

export const interviewHighlights: InterviewHighlight[] = [
  { name: 'Nikhil Woodruff, CTO, PE', insight: 'Speed + open source + prototyping; encoding fast but review/debugging bottleneck' },
  { name: 'Jason Morris, Thomson Reuters', insight: 'Most leverage is upstream: getting legislative drafters to author executable rules early' },
  { name: 'Jacob Walker, Atlanta Fed', insight: 'Fed faces IT/security barriers to external APIs; installable tools fit better' },
  { name: 'Martin Perron, Canadian Digital Services', insight: 'PE-style tools ready for deployment; blocker is institutional slowness' },
  { name: 'Ray Packer, GA Center for Opportunity', insight: 'Programs in silos create cliffs/penalties; modeling these influences legislators' },
  { name: 'Paul Huntsberger, Amplifi', insight: 'DMN-style rule engines were overkill; PE needs faster staged responses' },
  { name: 'Andrew Lautz, BPC', insight: 'Fast open tools especially valuable vs. slow official scores; state-level data priority' },
  { name: 'Kavya Vaghul, Living Wage Calculator', insight: 'Users want more granular local data; demand for \'thriving wage\' concept' },
  { name: 'John Ricco, Yale Budget Lab', insight: 'Strong demand for AI research; humans no longer writing code; tariffs + childcare focus' },
  { name: 'Alejandro Basalo, MSNBC', insight: 'Timing and momentum matter; household examples anchor reporting' },
  { name: 'Jack Landry, Jane Family Institute', insight: 'Custom microsims for deep accuracy; PE for quick first-pass analyses' },
  { name: 'Thomas Cintra, Outtake', insight: 'AI compresses dev cycles; ship to learn, not to perfect' },
];
