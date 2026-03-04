import { ScrollStory } from './components/presentation/ScrollStory';
import { createPlaceholder } from './components/slides/PlaceholderSection';
import { EcosystemEvolutionSlide } from './components/ecosystem/EcosystemEvolution';
import { colors } from './lib/colors';
import type { ScrollSection } from './lib/types';

// Main story sections (10) - placeholders for now, will be replaced by section-building agents
const ColdOpen = createPlaceholder('COLD OPEN', colors.highlight, 'The question', '"What would it take to encode every rule that governs American life?"');
const WhoWeAre = createPlaceholder('THE TEAM', colors.primary, 'Who we are', 'Three people. One mission. 1M+ simulations.');
const WhatWeDo = createPlaceholder('THESIS + IMPACT', colors.accentOrange, 'What we do', 'Open-source policy simulation for everyone.');
const JourneyBegins = createPlaceholder('THE JOURNEY BEGINS', colors.primary, '100 conversations', 'Week by week, the ecosystem revealed itself.');
const TensionBuilds = createPlaceholder('TENSION', colors.error, 'The tension builds', 'The contradictions started piling up.');
// AhaMoment uses the EcosystemEvolution component directly
const MeetTheThree = createPlaceholder('THE THREE ORGS', colors.peTeal, 'Meet the three', 'Rules Foundation. Cosilico. PolicyEngine.');
const Governance = createPlaceholder('GOVERNANCE', colors.accentPurple, 'How we\'ll govern it', 'From founder-led to multi-stakeholder.');
const RoadAhead = createPlaceholder('TIMELINE', colors.primary, 'The road ahead', 'Q1 2026 through 2028.');
const TheClose = createPlaceholder('THE CLOSE', colors.highlight, 'The genome project for rules', 'One ecosystem became three. Each stronger for it.');

// Appendix sections (9)
const Voices = createPlaceholder('VOICES FROM THE FIELD', colors.primary, 'Voices from the field', undefined, true);
const ImpactGoals = createPlaceholder('IMPACT GOALS', colors.success, 'Impact goals', undefined, true);
const Partners = createPlaceholder('STRATEGIC PARTNERS', colors.accentPurple, 'Strategic partners', undefined, true);
const Canvas = createPlaceholder('OSE CANVAS', colors.highlight, 'OSE Canvas', undefined, true);
const CanvasDetail = createPlaceholder('CANVAS DETAIL', colors.primary, 'Canvas detail', undefined, true);
const GovDetail = createPlaceholder('GOVERNANCE DETAIL', colors.accentPurple, 'Governance detail', undefined, true);
const Competitive = createPlaceholder('COMPETITIVE LANDSCAPE', colors.cosilicoCyan, 'Competitive landscape', undefined, true);
const Highlights = createPlaceholder('INTERVIEW HIGHLIGHTS', colors.primary, 'Interview highlights', undefined, true);
const Market = createPlaceholder('MARKET SEGMENTS', colors.cosilicoCyan, 'Market segments', undefined, true);

const sections: ScrollSection[] = [
  // Main presentation (10 sections matching narrative arc)
  { id: 'cold-open', title: 'The question', tag: 'COLD OPEN', component: ColdOpen },
  { id: 'who-we-are', title: 'Who we are', tag: 'THE TEAM', component: WhoWeAre },
  { id: 'what-we-do', title: 'What we do', tag: 'THESIS + IMPACT', component: WhatWeDo },
  { id: 'journey-begins', title: '100 conversations', tag: 'THE JOURNEY', component: JourneyBegins },
  { id: 'tension-builds', title: 'Tension builds', tag: 'TENSION', component: TensionBuilds },
  { id: 'aha-moment', title: 'One became three', tag: 'A-HA MOMENT', component: EcosystemEvolutionSlide, stickyHeight: 3 },
  { id: 'meet-the-three', title: 'Meet the three', tag: 'THREE ORGS', component: MeetTheThree },
  { id: 'governance', title: 'Governance', tag: 'GOVERNANCE', component: Governance },
  { id: 'road-ahead', title: 'Road ahead', tag: 'TIMELINE', component: RoadAhead },
  { id: 'the-close', title: 'The close', tag: 'THE CLOSE', component: TheClose },

  // Appendix (9 sections)
  { id: 'voices', title: 'Voices', component: Voices, isAppendix: true },
  { id: 'impact-goals', title: 'Impact goals', component: ImpactGoals, isAppendix: true },
  { id: 'partners', title: 'Partners', component: Partners, isAppendix: true },
  { id: 'canvas', title: 'Canvas', component: Canvas, isAppendix: true },
  { id: 'canvas-detail', title: 'Canvas detail', component: CanvasDetail, isAppendix: true },
  { id: 'gov-detail', title: 'Gov detail', component: GovDetail, isAppendix: true },
  { id: 'competitive', title: 'Competitive', component: Competitive, isAppendix: true },
  { id: 'highlights', title: 'Highlights', component: Highlights, isAppendix: true },
  { id: 'market', title: 'Market', component: Market, isAppendix: true },
];

function App() {
  return <ScrollStory sections={sections} />;
}

export default App;
