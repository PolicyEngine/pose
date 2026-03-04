import { ScrollStory } from './components/presentation/ScrollStory';
import { ColdOpenSlide } from './components/slides/ColdOpenSlide';
import { WhoWeAreSlide } from './components/slides/WhoWeAreSlide';
import { WhatWeDoSlide } from './components/slides/WhatWeDoSlide';
import { JourneyBeginsSlide } from './components/slides/JourneyBeginsSlide';
import { TensionBuildsWeek4Slide, TensionBuildsWeek5Slide } from './components/slides/TensionBuildsSlide';
import { EcosystemEvolutionSlide } from './components/ecosystem/EcosystemEvolution';
import { MeetTheThreeSlide } from './components/slides/MeetTheThreeSlide';
import { GovernanceSlideNew } from './components/slides/GovernanceSlideNew';
import { RoadAheadSlide } from './components/slides/RoadAheadSlide';
import { TheCloseSlide } from './components/slides/TheCloseSlide';
import { VoicesSlide } from './components/slides/appendix/VoicesSlide';
import { ImpactGoalsSlide } from './components/slides/appendix/ImpactGoalsSlide';
import { PartnersSlide } from './components/slides/appendix/PartnersSlide';
import { CanvasSlide } from './components/slides/appendix/CanvasSlide';
import { CanvasDetailSlide } from './components/slides/appendix/CanvasDetailSlide';
import { GovernanceDetailSlide } from './components/slides/appendix/GovernanceDetailSlide';
import { CompetitiveSlide } from './components/slides/appendix/CompetitiveSlide';
import { HighlightsSlide } from './components/slides/appendix/HighlightsSlide';
import { MarketSlide } from './components/slides/appendix/MarketSlide';
import type { ScrollSection } from './lib/types';

const sections: ScrollSection[] = [
  // Main presentation (10 sections matching narrative arc)
  { id: 'cold-open', title: 'The question', tag: 'COLD OPEN', component: ColdOpenSlide },
  { id: 'who-we-are', title: 'Who we are', tag: 'THE TEAM', component: WhoWeAreSlide },
  { id: 'what-we-do', title: 'What we do', tag: 'THESIS + IMPACT', component: WhatWeDoSlide },
  { id: 'journey-begins', title: '100 conversations', tag: 'THE JOURNEY', component: JourneyBeginsSlide },
  { id: 'tension-week4', title: 'Week 4', tag: 'VALIDATION', component: TensionBuildsWeek4Slide },
  { id: 'tension-week5', title: 'Week 5', tag: 'VALIDATION', component: TensionBuildsWeek5Slide },
  { id: 'aha-moment', title: 'One became three', tag: 'THE ECOSYSTEM', component: EcosystemEvolutionSlide, stickyHeight: 3 },
  { id: 'meet-the-three', title: 'Meet the three', tag: 'THREE ORGS', component: MeetTheThreeSlide },
  { id: 'governance', title: 'Governance', tag: 'GOVERNANCE', component: GovernanceSlideNew },
  { id: 'road-ahead', title: 'Road ahead', tag: 'TIMELINE', component: RoadAheadSlide },
  { id: 'the-close', title: 'The close', tag: 'THE CLOSE', component: TheCloseSlide },

  // Appendix (9 sections)
  { id: 'voices', title: 'Voices', component: VoicesSlide, isAppendix: true },
  { id: 'impact-goals', title: 'Impact goals', component: ImpactGoalsSlide, isAppendix: true },
  { id: 'partners', title: 'Partners', component: PartnersSlide, isAppendix: true },
  { id: 'canvas', title: 'Canvas', component: CanvasSlide, isAppendix: true },
  { id: 'canvas-detail', title: 'Canvas detail', component: CanvasDetailSlide, isAppendix: true },
  { id: 'gov-detail', title: 'Gov detail', component: GovernanceDetailSlide, isAppendix: true },
  { id: 'competitive', title: 'Competitive', component: CompetitiveSlide, isAppendix: true },
  { id: 'highlights', title: 'Highlights', component: HighlightsSlide, isAppendix: true },
  { id: 'market', title: 'Market', component: MarketSlide, isAppendix: true },
];

function App() {
  return <ScrollStory sections={sections} />;
}

export default App;
