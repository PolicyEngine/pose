import { ScrollStory } from './components/presentation/ScrollStory';
import type { ScrollSection } from './lib/types';

// Main slides
import { TitleSlide } from './components/slides/TitleSlide';
import { TeamSlide } from './components/slides/TeamSlide';
import { ThesisSlide } from './components/slides/ThesisSlide';
import { ImpactSlide } from './components/slides/ImpactSlide';
import { InterviewLogSlide } from './components/slides/InterviewLogSlide';
import { AssumptionsSlide } from './components/slides/AssumptionsSlide';
import { AhaMomentSlide } from './components/slides/AhaMomentSlide';
import { RulesEcosystemSlide, CosilicoEcosystemSlide, PEEcosystemSlide } from './components/slides/EcosystemSlide';
import { GovernanceSlide } from './components/slides/GovernanceSlide';
import { SustainabilitySlide } from './components/slides/SustainabilitySlide';
import { TimelineSlide } from './components/slides/TimelineSlide';
import { CloseSlide } from './components/slides/CloseSlide';

// Ecosystem Evolution (interactive)
import { EcosystemEvolutionSlide } from './components/ecosystem/EcosystemEvolution';

// Appendix slides
import { VoicesSlide } from './components/slides/appendix/VoicesSlide';
import { ImpactGoalsSlide } from './components/slides/appendix/ImpactGoalsSlide';
import { PartnersSlide } from './components/slides/appendix/PartnersSlide';
import { CanvasSlide } from './components/slides/appendix/CanvasSlide';
import { CanvasDetailSlide } from './components/slides/appendix/CanvasDetailSlide';
import { GovernanceDetailSlide } from './components/slides/appendix/GovernanceDetailSlide';
import { CompetitiveSlide } from './components/slides/appendix/CompetitiveSlide';
import { HighlightsSlide } from './components/slides/appendix/HighlightsSlide';
import { MarketSlide } from './components/slides/appendix/MarketSlide';

const sections: ScrollSection[] = [
  // Main presentation (15 sections)
  { id: 'title', title: 'Title', component: TitleSlide },
  { id: 'team', title: 'Team', component: TeamSlide },
  { id: 'thesis', title: 'Thesis', component: ThesisSlide },
  { id: 'impact', title: 'Impact', component: ImpactSlide },
  { id: 'interviews', title: 'Interviews', component: InterviewLogSlide },
  { id: 'assumptions', title: 'Assumptions', component: AssumptionsSlide },
  { id: 'aha', title: 'A-ha Moment', component: AhaMomentSlide },
  { id: 'eco-evolution', title: 'Ecosystem Evolution', component: EcosystemEvolutionSlide, stickyHeight: 3 },
  { id: 'eco-rules', title: 'Rules Foundation', component: RulesEcosystemSlide },
  { id: 'eco-cosilico', title: 'Cosilico', component: CosilicoEcosystemSlide },
  { id: 'eco-pe', title: 'PolicyEngine', component: PEEcosystemSlide },
  { id: 'governance', title: 'Governance', component: GovernanceSlide },
  { id: 'sustainability', title: 'Sustainability', component: SustainabilitySlide },
  { id: 'timeline', title: 'Timeline', component: TimelineSlide },
  { id: 'close', title: 'Close', component: CloseSlide },

  // Appendix (9 sections)
  { id: 'voices', title: 'Voices', component: VoicesSlide, isAppendix: true },
  { id: 'impact-goals', title: 'Impact Goals', component: ImpactGoalsSlide, isAppendix: true },
  { id: 'partners', title: 'Partners', component: PartnersSlide, isAppendix: true },
  { id: 'canvas', title: 'Canvas', component: CanvasSlide, isAppendix: true },
  { id: 'canvas-detail', title: 'Canvas Detail', component: CanvasDetailSlide, isAppendix: true },
  { id: 'gov-detail', title: 'Gov Detail', component: GovernanceDetailSlide, isAppendix: true },
  { id: 'competitive', title: 'Competitive', component: CompetitiveSlide, isAppendix: true },
  { id: 'highlights', title: 'Highlights', component: HighlightsSlide, isAppendix: true },
  { id: 'market', title: 'Market', component: MarketSlide, isAppendix: true },
];

function App() {
  return <ScrollStory sections={sections} />;
}

export default App;
