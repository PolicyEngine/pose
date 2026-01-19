import { describe, it, expect, vi, beforeEach } from 'vitest'
import { renderHook, act, waitFor } from '@testing-library/react'
import { useInterviews } from './useInterviews'
import type { Interview } from '../types/database'

// Mock the supabase module to ensure localStorage fallback
vi.mock('../lib/supabase', () => ({
  supabase: null,
  isSupabaseConfigured: () => false,
}))

const LOCAL_STORAGE_KEY = 'pose_interviews'

const createMockInterview = (
  overrides: Partial<Interview> = {}
): Omit<Interview, 'id' | 'created_at' | 'updated_at'> => ({
  name: 'Test User',
  organization: 'Test Org',
  segment: 'user',
  status: 'completed',
  ...overrides,
})

describe('useInterviews', () => {
  beforeEach(() => {
    localStorage.clear()
    vi.clearAllMocks()
  })

  describe('initial state', () => {
    it('returns empty interviews array initially', async () => {
      const { result } = renderHook(() => useInterviews())

      await waitFor(() => {
        expect(result.current.loading).toBe(false)
      })

      expect(result.current.interviews).toEqual([])
    })

    it('sets loading to false after initialization', async () => {
      const { result } = renderHook(() => useInterviews())
      // Loading resolves to false after initial load completes
      await waitFor(() => {
        expect(result.current.loading).toBe(false)
      })
    })

    it('has no error initially', async () => {
      const { result } = renderHook(() => useInterviews())

      await waitFor(() => {
        expect(result.current.loading).toBe(false)
      })

      expect(result.current.error).toBeNull()
    })
  })

  describe('localStorage operations', () => {
    it('loads interviews from localStorage', async () => {
      const storedInterviews: Interview[] = [
        {
          id: 'int_1',
          name: 'Stored User',
          organization: 'Stored Org',
          segment: 'user',
          status: 'completed',
          created_at: '2024-01-01T00:00:00.000Z',
          updated_at: '2024-01-01T00:00:00.000Z',
        },
      ]
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(storedInterviews))

      const { result } = renderHook(() => useInterviews())

      await waitFor(() => {
        expect(result.current.loading).toBe(false)
      })

      expect(result.current.interviews).toHaveLength(1)
      expect(result.current.interviews[0].name).toBe('Stored User')
    })

    it('handles corrupted localStorage gracefully', async () => {
      localStorage.setItem(LOCAL_STORAGE_KEY, 'invalid json{')

      const { result } = renderHook(() => useInterviews())

      await waitFor(() => {
        expect(result.current.loading).toBe(false)
      })

      expect(result.current.interviews).toEqual([])
    })
  })

  describe('addInterview', () => {
    it('adds a new interview', async () => {
      const { result } = renderHook(() => useInterviews())

      await waitFor(() => {
        expect(result.current.loading).toBe(false)
      })

      const newInterview = createMockInterview()

      await act(async () => {
        await result.current.addInterview(newInterview)
      })

      expect(result.current.interviews).toHaveLength(1)
      expect(result.current.interviews[0].name).toBe('Test User')
    })

    it('generates unique id for new interview', async () => {
      const { result } = renderHook(() => useInterviews())

      await waitFor(() => {
        expect(result.current.loading).toBe(false)
      })

      await act(async () => {
        await result.current.addInterview(createMockInterview())
      })

      expect(result.current.interviews[0].id).toMatch(/^int_/)
    })

    it('sets created_at and updated_at timestamps', async () => {
      const { result } = renderHook(() => useInterviews())

      await waitFor(() => {
        expect(result.current.loading).toBe(false)
      })

      await act(async () => {
        await result.current.addInterview(createMockInterview())
      })

      const interview = result.current.interviews[0]
      expect(interview.created_at).toBeDefined()
      expect(interview.updated_at).toBeDefined()
      expect(interview.created_at).toBe(interview.updated_at)
    })

    it('saves to localStorage after adding', async () => {
      const { result } = renderHook(() => useInterviews())

      await waitFor(() => {
        expect(result.current.loading).toBe(false)
      })

      await act(async () => {
        await result.current.addInterview(createMockInterview())
      })

      const stored = localStorage.getItem(LOCAL_STORAGE_KEY)
      expect(stored).not.toBeNull()
      const parsed = JSON.parse(stored!)
      expect(parsed).toHaveLength(1)
    })

    it('prepends new interviews (newest first)', async () => {
      const { result } = renderHook(() => useInterviews())

      await waitFor(() => {
        expect(result.current.loading).toBe(false)
      })

      await act(async () => {
        await result.current.addInterview(
          createMockInterview({ name: 'First' })
        )
      })

      await act(async () => {
        await result.current.addInterview(
          createMockInterview({ name: 'Second' })
        )
      })

      expect(result.current.interviews[0].name).toBe('Second')
      expect(result.current.interviews[1].name).toBe('First')
    })
  })

  describe('updateInterview', () => {
    it('updates an existing interview', async () => {
      const storedInterviews: Interview[] = [
        {
          id: 'int_1',
          name: 'Original Name',
          organization: 'Org',
          segment: 'user',
          status: 'scheduled',
          created_at: '2024-01-01T00:00:00.000Z',
          updated_at: '2024-01-01T00:00:00.000Z',
        },
      ]
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(storedInterviews))

      const { result } = renderHook(() => useInterviews())

      await waitFor(() => {
        expect(result.current.loading).toBe(false)
      })

      await act(async () => {
        await result.current.updateInterview('int_1', { name: 'Updated Name' })
      })

      expect(result.current.interviews[0].name).toBe('Updated Name')
    })

    it('updates the updated_at timestamp', async () => {
      const originalDate = '2024-01-01T00:00:00.000Z'
      const storedInterviews: Interview[] = [
        {
          id: 'int_1',
          name: 'Test',
          organization: 'Org',
          segment: 'user',
          status: 'scheduled',
          created_at: originalDate,
          updated_at: originalDate,
        },
      ]
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(storedInterviews))

      const { result } = renderHook(() => useInterviews())

      await waitFor(() => {
        expect(result.current.loading).toBe(false)
      })

      await act(async () => {
        await result.current.updateInterview('int_1', {
          status: 'completed',
        })
      })

      expect(result.current.interviews[0].updated_at).not.toBe(originalDate)
      expect(result.current.interviews[0].created_at).toBe(originalDate)
    })

    it('saves updated interview to localStorage', async () => {
      const storedInterviews: Interview[] = [
        {
          id: 'int_1',
          name: 'Test',
          organization: 'Org',
          segment: 'user',
          status: 'scheduled',
          created_at: '2024-01-01T00:00:00.000Z',
          updated_at: '2024-01-01T00:00:00.000Z',
        },
      ]
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(storedInterviews))

      const { result } = renderHook(() => useInterviews())

      await waitFor(() => {
        expect(result.current.loading).toBe(false)
      })

      await act(async () => {
        await result.current.updateInterview('int_1', {
          status: 'completed',
        })
      })

      const stored = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)!)
      expect(stored[0].status).toBe('completed')
    })
  })

  describe('deleteInterview', () => {
    it('removes an interview by id', async () => {
      const storedInterviews: Interview[] = [
        {
          id: 'int_1',
          name: 'To Delete',
          organization: 'Org',
          segment: 'user',
          status: 'completed',
          created_at: '2024-01-01T00:00:00.000Z',
          updated_at: '2024-01-01T00:00:00.000Z',
        },
        {
          id: 'int_2',
          name: 'To Keep',
          organization: 'Org',
          segment: 'user',
          status: 'completed',
          created_at: '2024-01-01T00:00:00.000Z',
          updated_at: '2024-01-01T00:00:00.000Z',
        },
      ]
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(storedInterviews))

      const { result } = renderHook(() => useInterviews())

      await waitFor(() => {
        expect(result.current.loading).toBe(false)
      })

      await act(async () => {
        await result.current.deleteInterview('int_1')
      })

      expect(result.current.interviews).toHaveLength(1)
      expect(result.current.interviews[0].name).toBe('To Keep')
    })

    it('returns true after successful deletion', async () => {
      const storedInterviews: Interview[] = [
        {
          id: 'int_1',
          name: 'To Delete',
          organization: 'Org',
          segment: 'user',
          status: 'completed',
          created_at: '2024-01-01T00:00:00.000Z',
          updated_at: '2024-01-01T00:00:00.000Z',
        },
      ]
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(storedInterviews))

      const { result } = renderHook(() => useInterviews())

      await waitFor(() => {
        expect(result.current.loading).toBe(false)
      })

      let deleteResult: boolean | undefined
      await act(async () => {
        deleteResult = await result.current.deleteInterview('int_1')
      })

      expect(deleteResult).toBe(true)
    })

    it('updates localStorage after deletion', async () => {
      const storedInterviews: Interview[] = [
        {
          id: 'int_1',
          name: 'To Delete',
          organization: 'Org',
          segment: 'user',
          status: 'completed',
          created_at: '2024-01-01T00:00:00.000Z',
          updated_at: '2024-01-01T00:00:00.000Z',
        },
      ]
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(storedInterviews))

      const { result } = renderHook(() => useInterviews())

      await waitFor(() => {
        expect(result.current.loading).toBe(false)
      })

      await act(async () => {
        await result.current.deleteInterview('int_1')
      })

      const stored = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)!)
      expect(stored).toHaveLength(0)
    })
  })

  describe('computed values', () => {
    it('calculates completedCount correctly', async () => {
      const storedInterviews: Interview[] = [
        {
          id: 'int_1',
          name: 'Completed 1',
          organization: 'Org',
          segment: 'user',
          status: 'completed',
          created_at: '2024-01-01T00:00:00.000Z',
          updated_at: '2024-01-01T00:00:00.000Z',
        },
        {
          id: 'int_2',
          name: 'Scheduled 1',
          organization: 'Org',
          segment: 'user',
          status: 'scheduled',
          created_at: '2024-01-01T00:00:00.000Z',
          updated_at: '2024-01-01T00:00:00.000Z',
        },
        {
          id: 'int_3',
          name: 'Completed 2',
          organization: 'Org',
          segment: 'supporter',
          status: 'completed',
          created_at: '2024-01-01T00:00:00.000Z',
          updated_at: '2024-01-01T00:00:00.000Z',
        },
      ]
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(storedInterviews))

      const { result } = renderHook(() => useInterviews())

      await waitFor(() => {
        expect(result.current.loading).toBe(false)
      })

      expect(result.current.completedCount).toBe(2)
    })

    it('calculates scheduledCount correctly', async () => {
      const storedInterviews: Interview[] = [
        {
          id: 'int_1',
          name: 'Completed',
          organization: 'Org',
          segment: 'user',
          status: 'completed',
          created_at: '2024-01-01T00:00:00.000Z',
          updated_at: '2024-01-01T00:00:00.000Z',
        },
        {
          id: 'int_2',
          name: 'Scheduled 1',
          organization: 'Org',
          segment: 'user',
          status: 'scheduled',
          created_at: '2024-01-01T00:00:00.000Z',
          updated_at: '2024-01-01T00:00:00.000Z',
        },
        {
          id: 'int_3',
          name: 'Scheduled 2',
          organization: 'Org',
          segment: 'supporter',
          status: 'scheduled',
          created_at: '2024-01-01T00:00:00.000Z',
          updated_at: '2024-01-01T00:00:00.000Z',
        },
      ]
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(storedInterviews))

      const { result } = renderHook(() => useInterviews())

      await waitFor(() => {
        expect(result.current.loading).toBe(false)
      })

      expect(result.current.scheduledCount).toBe(2)
    })

    it('calculates segmentCounts correctly for completed interviews only', async () => {
      const storedInterviews: Interview[] = [
        {
          id: 'int_1',
          name: 'User 1',
          organization: 'Org',
          segment: 'user',
          status: 'completed',
          created_at: '2024-01-01T00:00:00.000Z',
          updated_at: '2024-01-01T00:00:00.000Z',
        },
        {
          id: 'int_2',
          name: 'User 2',
          organization: 'Org',
          segment: 'user',
          status: 'completed',
          created_at: '2024-01-01T00:00:00.000Z',
          updated_at: '2024-01-01T00:00:00.000Z',
        },
        {
          id: 'int_3',
          name: 'User Scheduled',
          organization: 'Org',
          segment: 'user',
          status: 'scheduled',
          created_at: '2024-01-01T00:00:00.000Z',
          updated_at: '2024-01-01T00:00:00.000Z',
        },
        {
          id: 'int_4',
          name: 'Supporter 1',
          organization: 'Org',
          segment: 'supporter',
          status: 'completed',
          created_at: '2024-01-01T00:00:00.000Z',
          updated_at: '2024-01-01T00:00:00.000Z',
        },
      ]
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(storedInterviews))

      const { result } = renderHook(() => useInterviews())

      await waitFor(() => {
        expect(result.current.loading).toBe(false)
      })

      expect(result.current.segmentCounts['user']).toBe(2)
      expect(result.current.segmentCounts['supporter']).toBe(1)
      expect(result.current.segmentCounts['contributor']).toBeUndefined()
    })
  })

  describe('refresh', () => {
    it('reloads data from localStorage', async () => {
      const { result } = renderHook(() => useInterviews())

      await waitFor(() => {
        expect(result.current.loading).toBe(false)
      })

      expect(result.current.interviews).toHaveLength(0)

      // Manually add to localStorage
      const newData: Interview[] = [
        {
          id: 'int_new',
          name: 'New Interview',
          organization: 'Org',
          segment: 'user',
          status: 'completed',
          created_at: '2024-01-01T00:00:00.000Z',
          updated_at: '2024-01-01T00:00:00.000Z',
        },
      ]
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newData))

      await act(async () => {
        await result.current.refresh()
      })

      await waitFor(() => {
        expect(result.current.loading).toBe(false)
      })

      expect(result.current.interviews).toHaveLength(1)
      expect(result.current.interviews[0].name).toBe('New Interview')
    })
  })
})
