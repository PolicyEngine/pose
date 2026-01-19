import { useState, useEffect, useCallback, useMemo } from 'react'
import type { Assignment, AssignmentStatus, AssignmentCategory } from '../types/database'
import { POSE_ASSIGNMENTS } from '../types/database'

const LOCAL_STORAGE_KEY = 'pose_assignments'

export function useAssignments() {
  const [assignments, setAssignments] = useState<Assignment[]>([])
  const [loading, setLoading] = useState(true)

  // Load assignments from localStorage, merging with default assignments
  const loadAssignments = useCallback(() => {
    setLoading(true)
    try {
      const stored = localStorage.getItem(LOCAL_STORAGE_KEY)
      if (stored) {
        const storedAssignments: Assignment[] = JSON.parse(stored)
        // Merge stored statuses with default assignments
        // This ensures new assignments are added if the list is updated
        const merged = POSE_ASSIGNMENTS.map((defaultAssignment) => {
          const stored = storedAssignments.find((a) => a.id === defaultAssignment.id)
          return stored ? { ...defaultAssignment, status: stored.status } : defaultAssignment
        })
        setAssignments(merged)
      } else {
        setAssignments(POSE_ASSIGNMENTS)
      }
    } catch (err) {
      console.error('LocalStorage error:', err)
      setAssignments(POSE_ASSIGNMENTS)
    }
    setLoading(false)
  }, [])

  // Save assignments to localStorage
  const saveToLocalStorage = (data: Assignment[]) => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data))
  }

  // Update assignment status
  const updateStatus = useCallback((id: string, status: AssignmentStatus) => {
    setAssignments((prev) => {
      const updated = prev.map((a) => (a.id === id ? { ...a, status } : a))
      saveToLocalStorage(updated)
      return updated
    })
  }, [])

  // Toggle assignment completion
  const toggleComplete = useCallback((id: string) => {
    setAssignments((prev) => {
      const assignment = prev.find((a) => a.id === id)
      if (!assignment) return prev
      const newStatus: AssignmentStatus = assignment.status === 'completed' ? 'pending' : 'completed'
      const updated = prev.map((a) => (a.id === id ? { ...a, status: newStatus } : a))
      saveToLocalStorage(updated)
      return updated
    })
  }, [])

  // Computed values
  const completedCount = useMemo(
    () => assignments.filter((a) => a.status === 'completed').length,
    [assignments]
  )

  const pendingCount = useMemo(
    () => assignments.filter((a) => a.status !== 'completed').length,
    [assignments]
  )

  const categoryCounts = useMemo(() => {
    const counts: Record<AssignmentCategory, { total: number; completed: number }> = {
      prep: { total: 0, completed: 0 },
      presentation: { total: 0, completed: 0 },
      interview_milestone: { total: 0, completed: 0 },
    }
    assignments.forEach((a) => {
      counts[a.category].total++
      if (a.status === 'completed') {
        counts[a.category].completed++
      }
    })
    return counts
  }, [assignments])

  // Get assignments due soon (within 7 days)
  const getDueStatus = useCallback((dueDate: string): 'overdue' | 'due_soon' | 'upcoming' => {
    const now = new Date()
    const due = new Date(dueDate)
    const diffDays = Math.ceil((due.getTime() - now.getTime()) / (1000 * 60 * 60 * 24))

    if (diffDays < 0) return 'overdue'
    if (diffDays <= 3) return 'due_soon'
    return 'upcoming'
  }, [])

  useEffect(() => {
    loadAssignments()
  }, [loadAssignments])

  return {
    assignments,
    loading,
    updateStatus,
    toggleComplete,
    completedCount,
    pendingCount,
    categoryCounts,
    getDueStatus,
    refresh: loadAssignments,
    totalCount: assignments.length,
  }
}
