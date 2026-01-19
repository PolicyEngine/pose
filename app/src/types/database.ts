export type Segment = 'user' | 'supporter' | 'contributor' | 'competitor' | 'distributor' | 'partner'

export type InterviewStatus = 'scheduled' | 'completed' | 'cancelled' | 'no_show'

export interface Interview {
  id: string
  contact_id?: string
  name: string
  organization: string
  role?: string
  segment: Segment
  scheduled_date?: string
  completed_date?: string
  status: InterviewStatus
  notes?: string
  key_insights?: string[]
  referrals?: string[]
  created_at: string
  updated_at: string
}

export interface Milestone {
  id: string
  name: string
  target_count: number
  deadline: string
  description?: string
}

export interface Contact {
  id: string
  display_name: string
  email?: string
  organization?: string
  job_title?: string
  notes?: string
  contact_status?: string
}

// Supabase database types - using 'any' to simplify and avoid complex generic inference
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Database = any

// Milestones are fixed for the POSE program
export const POSE_MILESTONES: Milestone[] = [
  { id: '1', name: 'Kickoff Week', target_count: 10, deadline: '2026-01-23', description: 'End of 4-day kickoff' },
  { id: '2', name: 'Weekly Session 1', target_count: 25, deadline: '2026-01-28', description: 'First weekly check-in' },
  { id: '3', name: 'Weekly Session 2', target_count: 40, deadline: '2026-02-04', description: 'Sustainability focus' },
  { id: '4', name: 'Weekly Session 3', target_count: 55, deadline: '2026-02-11', description: 'Partnerships focus' },
  { id: '5', name: 'Weekly Session 4', target_count: 70, deadline: '2026-02-18', description: 'Governance focus' },
  { id: '6', name: 'Weekly Session 5', target_count: 85, deadline: '2026-02-25', description: 'Timeline focus' },
  { id: '7', name: 'Finale', target_count: 100, deadline: '2026-03-04', description: 'Final presentations' },
]

export const SEGMENTS: { value: Segment; label: string; color: string; description: string }[] = [
  { value: 'user', label: 'Users', color: '#319795', description: 'People who use PolicyEngine directly' },
  { value: 'supporter', label: 'Supporters', color: '#2563eb', description: 'Funders, advocates, policy champions' },
  { value: 'contributor', label: 'Contributors', color: '#7c3aed', description: 'Developers, data contributors' },
  { value: 'competitor', label: 'Competitors', color: '#dc2626', description: 'Alternative tools and approaches' },
  { value: 'distributor', label: 'Distributors', color: '#ea580c', description: 'Organizations that embed PolicyEngine' },
  { value: 'partner', label: 'Partners', color: '#16a34a', description: 'Integrations and complements' },
]

// Assignment types
export type AssignmentStatus = 'pending' | 'in_progress' | 'completed'
export type AssignmentCategory = 'prep' | 'presentation' | 'interview_milestone'

export interface Assignment {
  id: string
  title: string
  description: string
  due_date: string
  status: AssignmentStatus
  category: AssignmentCategory
}

// Pre-populated POSE program assignments
export const POSE_ASSIGNMENTS: Assignment[] = [
  // Pre-program
  {
    id: 'prep-1',
    title: 'Orientation prep',
    description: 'Watch orientation videos and read required materials before program start',
    due_date: '2026-01-06',
    status: 'pending',
    category: 'prep',
  },

  // Kickoff week (Jan 20-23, 2026)
  {
    id: 'kickoff-1',
    title: 'Team intro video + initial ecosystem canvas',
    description: 'Day 1: Record team introduction video and complete initial ecosystem canvas',
    due_date: '2026-01-20',
    status: 'pending',
    category: 'presentation',
  },
  {
    id: 'kickoff-2',
    title: 'Interview prep',
    description: 'Day 2: Prepare interview questions and outreach strategy',
    due_date: '2026-01-21',
    status: 'pending',
    category: 'prep',
  },
  {
    id: 'kickoff-3',
    title: 'Update slides with learnings',
    description: 'Day 3: Update presentation slides with initial interview learnings',
    due_date: '2026-01-22',
    status: 'pending',
    category: 'presentation',
  },
  {
    id: 'kickoff-4',
    title: 'Update slides',
    description: 'Day 4: Final kickoff week slide updates and presentation',
    due_date: '2026-01-23',
    status: 'pending',
    category: 'presentation',
  },
  {
    id: 'kickoff-interviews',
    title: 'Complete 10 interviews',
    description: 'Kickoff week interview target',
    due_date: '2026-01-23',
    status: 'pending',
    category: 'interview_milestone',
  },

  // Weekly sessions
  {
    id: 'weekly-1-slides',
    title: 'Session 1: Update slides',
    description: 'Update presentation with ecosystem discovery progress',
    due_date: '2026-01-28',
    status: 'pending',
    category: 'presentation',
  },
  {
    id: 'weekly-1-interviews',
    title: 'Complete 25 interviews',
    description: 'Session 1 cumulative interview target',
    due_date: '2026-01-28',
    status: 'pending',
    category: 'interview_milestone',
  },
  {
    id: 'weekly-2-slides',
    title: 'Session 2: Update slides',
    description: 'Update presentation with sustainability insights',
    due_date: '2026-02-04',
    status: 'pending',
    category: 'presentation',
  },
  {
    id: 'weekly-2-interviews',
    title: 'Complete 40 interviews',
    description: 'Session 2 cumulative interview target',
    due_date: '2026-02-04',
    status: 'pending',
    category: 'interview_milestone',
  },
  {
    id: 'weekly-3-slides',
    title: 'Session 3: Update slides',
    description: 'Update presentation with partnership learnings',
    due_date: '2026-02-11',
    status: 'pending',
    category: 'presentation',
  },
  {
    id: 'weekly-3-interviews',
    title: 'Complete 55 interviews',
    description: 'Session 3 cumulative interview target',
    due_date: '2026-02-11',
    status: 'pending',
    category: 'interview_milestone',
  },
  {
    id: 'weekly-4-slides',
    title: 'Session 4: Update slides',
    description: 'Update presentation with governance insights',
    due_date: '2026-02-18',
    status: 'pending',
    category: 'presentation',
  },
  {
    id: 'weekly-4-interviews',
    title: 'Complete 70 interviews',
    description: 'Session 4 cumulative interview target',
    due_date: '2026-02-18',
    status: 'pending',
    category: 'interview_milestone',
  },
  {
    id: 'weekly-5-slides',
    title: 'Session 5: Update slides',
    description: 'Update presentation with timeline and roadmap',
    due_date: '2026-02-25',
    status: 'pending',
    category: 'presentation',
  },
  {
    id: 'weekly-5-interviews',
    title: 'Complete 85 interviews',
    description: 'Session 5 cumulative interview target',
    due_date: '2026-02-25',
    status: 'pending',
    category: 'interview_milestone',
  },

  // Finale (Mar 4-5, 2026)
  {
    id: 'finale-prep',
    title: 'Final presentation prep',
    description: 'Prepare final presentation materials and practice',
    due_date: '2026-03-04',
    status: 'pending',
    category: 'prep',
  },
  {
    id: 'finale-presentation',
    title: 'Final presentation delivery',
    description: 'Deliver final POSE program presentation',
    due_date: '2026-03-05',
    status: 'pending',
    category: 'presentation',
  },
  {
    id: 'finale-interviews',
    title: 'Complete 100 interviews',
    description: 'Final program interview target',
    due_date: '2026-03-05',
    status: 'pending',
    category: 'interview_milestone',
  },
]
