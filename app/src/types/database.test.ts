import { describe, it, expect } from 'vitest'
import { SEGMENTS, POSE_MILESTONES, type Segment } from './database'

describe('SEGMENTS', () => {
  it('has exactly 6 segments', () => {
    expect(SEGMENTS).toHaveLength(6)
  })

  it('contains all expected segment values', () => {
    const segmentValues = SEGMENTS.map((s) => s.value)
    expect(segmentValues).toContain('user')
    expect(segmentValues).toContain('supporter')
    expect(segmentValues).toContain('contributor')
    expect(segmentValues).toContain('competitor')
    expect(segmentValues).toContain('distributor')
    expect(segmentValues).toContain('partner')
  })

  it('each segment has required properties', () => {
    for (const segment of SEGMENTS) {
      expect(segment).toHaveProperty('value')
      expect(segment).toHaveProperty('label')
      expect(segment).toHaveProperty('color')
      expect(segment).toHaveProperty('description')
      expect(typeof segment.value).toBe('string')
      expect(typeof segment.label).toBe('string')
      expect(typeof segment.color).toBe('string')
      expect(typeof segment.description).toBe('string')
    }
  })

  it('colors are valid hex codes', () => {
    const hexColorRegex = /^#[0-9a-fA-F]{6}$/
    for (const segment of SEGMENTS) {
      expect(segment.color).toMatch(hexColorRegex)
    }
  })

  it('user segment has teal color', () => {
    const userSegment = SEGMENTS.find((s) => s.value === 'user')
    expect(userSegment?.color).toBe('#319795')
  })
})

describe('POSE_MILESTONES', () => {
  it('has 7 milestones', () => {
    expect(POSE_MILESTONES).toHaveLength(7)
  })

  it('starts at 15 and ends at 100', () => {
    expect(POSE_MILESTONES[0].target_count).toBe(15)
    expect(POSE_MILESTONES[POSE_MILESTONES.length - 1].target_count).toBe(100)
  })

  it('milestones are in ascending order', () => {
    for (let i = 1; i < POSE_MILESTONES.length; i++) {
      expect(POSE_MILESTONES[i].target_count).toBeGreaterThan(
        POSE_MILESTONES[i - 1].target_count
      )
    }
  })

  it('deadlines are in ascending order', () => {
    for (let i = 1; i < POSE_MILESTONES.length; i++) {
      const prevDate = new Date(POSE_MILESTONES[i - 1].deadline)
      const currDate = new Date(POSE_MILESTONES[i].deadline)
      expect(currDate.getTime()).toBeGreaterThan(prevDate.getTime())
    }
  })

  it('each milestone has required properties', () => {
    for (const milestone of POSE_MILESTONES) {
      expect(milestone).toHaveProperty('id')
      expect(milestone).toHaveProperty('name')
      expect(milestone).toHaveProperty('target_count')
      expect(milestone).toHaveProperty('deadline')
      expect(typeof milestone.id).toBe('string')
      expect(typeof milestone.name).toBe('string')
      expect(typeof milestone.target_count).toBe('number')
      expect(typeof milestone.deadline).toBe('string')
    }
  })

  it('first milestone is Kickoff Week', () => {
    expect(POSE_MILESTONES[0].name).toBe('Kickoff Week')
  })

  it('last milestone is Finale', () => {
    expect(POSE_MILESTONES[POSE_MILESTONES.length - 1].name).toBe('Finale')
  })
})

describe('Segment type', () => {
  it('accepts valid segment values', () => {
    const validSegments: Segment[] = [
      'user',
      'supporter',
      'contributor',
      'competitor',
      'distributor',
      'partner',
    ]
    expect(validSegments).toHaveLength(6)
  })
})
