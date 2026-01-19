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
