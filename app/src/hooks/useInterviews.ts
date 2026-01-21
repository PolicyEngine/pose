import { useState, useEffect, useCallback } from 'react'
import { supabase, isSupabaseConfigured } from '../lib/supabase'
import type { Interview, Segment } from '../types/database'

const LOCAL_STORAGE_KEY = 'pose_interviews'

// Generate a simple unique ID
const generateId = () => `int_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`

export function useInterviews() {
  const [interviews, setInterviews] = useState<Interview[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // Load interviews
  const loadInterviews = useCallback(async () => {
    setLoading(true)
    setError(null)

    if (isSupabaseConfigured() && supabase) {
      try {
        const { data, error: fetchError } = await supabase
          .from('pose_interviews')
          .select('*')
          .order('created_at', { ascending: false })

        if (fetchError) throw fetchError
        setInterviews(data || [])
      } catch (err) {
        console.error('Supabase fetch error:', err)
        setError('Failed to load from Supabase, using local storage')
        loadFromLocalStorage()
      }
    } else {
      loadFromLocalStorage()
    }

    setLoading(false)
  }, [])

  const loadFromLocalStorage = () => {
    try {
      const stored = localStorage.getItem(LOCAL_STORAGE_KEY)
      if (stored) {
        setInterviews(JSON.parse(stored))
      }
    } catch (err) {
      console.error('LocalStorage error:', err)
      setInterviews([])
    }
  }

  const saveToLocalStorage = (data: Interview[]) => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data))
  }

  // Add interview
  const addInterview = async (interview: Omit<Interview, 'id' | 'created_at' | 'updated_at'>) => {
    const now = new Date().toISOString()
    const newInterview: Interview = {
      ...interview,
      id: generateId(),
      created_at: now,
      updated_at: now,
    }

    if (isSupabaseConfigured() && supabase) {
      try {
        const { data, error: insertError } = await supabase
          .from('pose_interviews')
          .insert(newInterview)
          .select()
          .single()

        if (insertError) throw insertError
        setInterviews(prev => [data, ...prev])
        return data
      } catch (err) {
        console.error('Supabase insert error:', err)
        // Fall back to local storage
      }
    }

    const updated = [newInterview, ...interviews]
    setInterviews(updated)
    saveToLocalStorage(updated)
    return newInterview
  }

  // Update interview
  const updateInterview = async (id: string, updates: Partial<Interview>) => {
    const now = new Date().toISOString()

    if (isSupabaseConfigured() && supabase) {
      try {
        const { data, error: updateError } = await supabase
          .from('pose_interviews')
          .update({ ...updates, updated_at: now })
          .eq('id', id)
          .select()
          .single()

        if (updateError) throw updateError
        setInterviews(prev => prev.map(i => i.id === id ? data : i))
        return data
      } catch (err) {
        console.error('Supabase update error:', err)
      }
    }

    const updated = interviews.map(i =>
      i.id === id ? { ...i, ...updates, updated_at: now } : i
    )
    setInterviews(updated)
    saveToLocalStorage(updated)
    return updated.find(i => i.id === id)
  }

  // Delete interview
  const deleteInterview = async (id: string) => {
    if (isSupabaseConfigured() && supabase) {
      try {
        const { error: deleteError } = await supabase
          .from('pose_interviews')
          .delete()
          .eq('id', id)

        if (deleteError) throw deleteError
        setInterviews(prev => prev.filter(i => i.id !== id))
        return true
      } catch (err) {
        console.error('Supabase delete error:', err)
      }
    }

    const updated = interviews.filter(i => i.id !== id)
    setInterviews(updated)
    saveToLocalStorage(updated)
    return true
  }

  // Computed values
  const completedCount = interviews.filter(i => i.status === 'completed').length
  const scheduledCount = interviews.filter(i => i.status === 'scheduled').length

  const segmentCounts = interviews
    .filter(i => i.status === 'completed')
    .reduce((acc, i) => {
      acc[i.segment] = (acc[i.segment] || 0) + 1
      return acc
    }, {} as Record<Segment, number>)

  useEffect(() => {
    loadInterviews()
  }, [loadInterviews])

  return {
    interviews,
    loading,
    error,
    addInterview,
    updateInterview,
    deleteInterview,
    refresh: loadInterviews,
    completedCount,
    scheduledCount,
    segmentCounts,
  }
}
