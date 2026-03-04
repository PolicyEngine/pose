import type { ComponentType } from 'react';

export interface SlideProps {
  isVisible: boolean;
}

export interface ScrollSection {
  id: string;
  title: string;
  tag?: string;
  component: ComponentType<SlideProps>;
  isAppendix?: boolean;
  stickyHeight?: number;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string[];
  color: string;
  photo: string;
}

export interface StatItem {
  number: string;
  label: string;
  color: string;
}

export interface WeekProgress {
  week: string;
  count: number;
}

export interface Segment {
  name: string;
  count: number;
  color: string;
}

export interface Assumption {
  status: string;
  statusType: 'confirmed' | 'partial' | 'rejected';
  title: string;
  learning: string;
  quote: string;
  source: string;
  color: string;
}

export interface OrgInfo {
  name: string;
  tagline: string;
  entity: string;
  description: string;
  color: string;
}

export interface SustainabilityOrg {
  name: string;
  color: string;
  budget: string;
  items: string[];
}

export interface Milestone {
  period: string;
  label: string;
  description: string[];
  color: string;
}

export interface Quote {
  text: string;
  name: string;
  title: string;
  color: string;
}

export interface Partner {
  name: string;
  orgs: string;
  type: string;
  value: string[];
  risk: string;
  color: string;
}

export interface GovernanceOrg {
  name: string;
  color: string;
  details: string[];
}

export interface Competitor {
  name: string;
  metric: string;
  focus: string;
}

export interface MarketSegment {
  name: string;
  tam: string;
}

export interface ImpactGoal {
  name: string;
  color: string;
  condition: string;
  impact: string;
}

export interface InterviewHighlight {
  name: string;
  insight: string;
}

export interface EcosystemNode {
  id: string;
  label: string;
  ring: number;
  angle: number;
  color: string;
  org: 'all' | 'rules' | 'cosilico' | 'pe';
  description?: string;
  count?: number;
  visibleAtStep: number;
}

export interface EcosystemEdge {
  from: string;
  to: string;
  label?: string;
  color: string;
  type: 'solid' | 'dashed';
  visibleAtStep: number;
}

// New story-specific types
export interface StorySection {
  id: string;
  title: string;
  tag: string;
  duration: string;
  isAppendix?: boolean;
  stickyHeight?: number;
}

export interface WeekJourney {
  week: number;
  date: string;
  cumulative: number;
  quote: string;
  quoteSource: string;
  insight: string;
  ecosystemPhase: string;
}
