import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import type { Interview, Segment } from '../types/database'
import { SEGMENTS } from '../types/database'
import { InterviewGuidance } from './InterviewGuidance'

interface AddInterviewModalProps {
  isOpen: boolean
  onClose: () => void
  onSave: (interview: Omit<Interview, 'id' | 'created_at' | 'updated_at'>) => void
  editInterview?: Interview | null
}

const initialFormData = {
  name: '',
  organization: '',
  role: '',
  segment: 'user' as Segment,
  scheduled_date: '',
  completed_date: '',
  status: 'scheduled' as Interview['status'],
  notes: '',
  key_insights: [] as string[],
}

export function AddInterviewModal({ isOpen, onClose, onSave, editInterview }: AddInterviewModalProps) {
  const [formData, setFormData] = useState(initialFormData)
  const [insightInput, setInsightInput] = useState('')

  useEffect(() => {
    if (editInterview) {
      setFormData({
        name: editInterview.name,
        organization: editInterview.organization,
        role: editInterview.role || '',
        segment: editInterview.segment,
        scheduled_date: editInterview.scheduled_date || '',
        completed_date: editInterview.completed_date || '',
        status: editInterview.status,
        notes: editInterview.notes || '',
        key_insights: editInterview.key_insights || [],
      })
    } else {
      setFormData(initialFormData)
    }
  }, [editInterview, isOpen])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSave(formData)
    onClose()
    setFormData(initialFormData)
  }

  const addInsight = () => {
    if (insightInput.trim()) {
      setFormData(prev => ({
        ...prev,
        key_insights: [...prev.key_insights, insightInput.trim()]
      }))
      setInsightInput('')
    }
  }

  const removeInsight = (index: number) => {
    setFormData(prev => ({
      ...prev,
      key_insights: prev.key_insights.filter((_, i) => i !== index)
    }))
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-40"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed inset-4 md:inset-auto md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:w-full md:max-w-2xl bg-white rounded-xl shadow-2xl z-50 overflow-hidden flex flex-col max-h-[90vh]"
          >
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900">
                {editInterview ? 'Edit interview' : 'Add interview'}
              </h2>
              <button
                onClick={onClose}
                className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto">
              <div className="p-6 space-y-5">
                {/* Basic Info */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={e => setFormData(prev => ({ ...prev, name: e.target.value }))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                      placeholder="Contact name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Organization *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.organization}
                      onChange={e => setFormData(prev => ({ ...prev, organization: e.target.value }))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                      placeholder="Company or organization"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Role
                    </label>
                    <input
                      type="text"
                      value={formData.role}
                      onChange={e => setFormData(prev => ({ ...prev, role: e.target.value }))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                      placeholder="Job title or role"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Segment *
                    </label>
                    <select
                      required
                      value={formData.segment}
                      onChange={e => setFormData(prev => ({ ...prev, segment: e.target.value as Segment }))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                    >
                      {SEGMENTS.map(segment => (
                        <option key={segment.value} value={segment.value}>
                          {segment.label} - {segment.description}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Interview Guidance */}
                <InterviewGuidance segment={formData.segment} collapsed={!!editInterview} />

                {/* Dates & Status */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Scheduled date
                    </label>
                    <input
                      type="date"
                      value={formData.scheduled_date}
                      onChange={e => setFormData(prev => ({ ...prev, scheduled_date: e.target.value }))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Completed date
                    </label>
                    <input
                      type="date"
                      value={formData.completed_date}
                      onChange={e => setFormData(prev => ({ ...prev, completed_date: e.target.value }))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Status
                    </label>
                    <select
                      value={formData.status}
                      onChange={e => setFormData(prev => ({ ...prev, status: e.target.value as Interview['status'] }))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                    >
                      <option value="scheduled">Scheduled</option>
                      <option value="completed">Completed</option>
                      <option value="cancelled">Cancelled</option>
                      <option value="no_show">No Show</option>
                    </select>
                  </div>
                </div>

                {/* Notes */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Notes
                  </label>
                  <textarea
                    value={formData.notes}
                    onChange={e => setFormData(prev => ({ ...prev, notes: e.target.value }))}
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                    placeholder="Interview notes, key quotes, observations..."
                  />
                </div>

                {/* Key Insights */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Key insights
                  </label>
                  <div className="flex gap-2 mb-2">
                    <input
                      type="text"
                      value={insightInput}
                      onChange={e => setInsightInput(e.target.value)}
                      onKeyDown={e => e.key === 'Enter' && (e.preventDefault(), addInsight())}
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                      placeholder="Add an insight and press Enter"
                    />
                    <button
                      type="button"
                      onClick={addInsight}
                      className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
                    >
                      Add
                    </button>
                  </div>
                  {formData.key_insights.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {formData.key_insights.map((insight, index) => (
                        <span
                          key={index}
                          className="inline-flex items-center gap-1 px-3 py-1 bg-teal-50 text-teal-700 rounded-full text-sm"
                        >
                          {insight}
                          <button
                            type="button"
                            onClick={() => removeInsight(index)}
                            className="hover:text-teal-900"
                          >
                            <X className="w-3.5 h-3.5" />
                          </button>
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <div className="px-6 py-4 border-t border-gray-200 bg-gray-50 flex justify-end gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors font-medium"
                >
                  {editInterview ? 'Save changes' : 'Add interview'}
                </button>
              </div>
            </form>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
