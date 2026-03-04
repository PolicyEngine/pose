import { ScrollStory } from './components/presentation/ScrollStory';
import { createPlaceholder } from './components/slides/PlaceholderSection';
import { ColdOpenSlide } from './components/slides/ColdOpenSlide';
import { WhoWeAreSlide } from './components/slides/WhoWeAreSlide';
import { WhatWeDoSlide } from './components/slides/WhatWeDoSlide';
import { JourneyBeginsSlide } from './components/slides/JourneyBeginsSlide';
import { TensionBuildsSlide } from './components/slides/TensionBuildsSlide';
import { EcosystemEvolutionSlide } from './components/ecosystem/EcosystemEvolution';
import { colors } from './lib/colors';
import type { ScrollSection } from './lib/types';

// Sections 1-5: built components
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
  { id: 'cold-open', title: 'The question', tag: 'COLD OPEN', component: ColdOpenSlide },
  { id: 'who-we-are', title: 'Who we are', tag: 'THE TEAM', component: WhoWeAreSlide },
  { id: 'what-we-do', title: 'What we do', tag: 'THESIS + IMPACT', component: WhatWeDoSlide },
  { id: 'journey-begins', title: '100 conversations', tag: 'THE JOURNEY', component: JourneyBeginsSlide },
  { id: 'tension-builds', title: 'Tension builds', tag: 'TENSION', component: TensionBuildsSlide },
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
