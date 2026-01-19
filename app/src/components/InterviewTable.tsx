import { useState } from 'react'
import { format } from 'date-fns'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ChevronDown,
  ChevronUp,
  MoreHorizontal,
  Pencil,
  Trash2,
  CheckCircle,
  Clock,
  XCircle,
  AlertCircle
} from 'lucide-react'
import type { Interview, Segment } from '../types/database'
import { SEGMENTS } from '../types/database'

interface InterviewTableProps {
  interviews: Interview[]
  onEdit: (interview: Interview) => void
  onDelete: (id: string) => void
  onStatusChange: (id: string, status: Interview['status']) => void
}

const statusConfig = {
  completed: { icon: CheckCircle, color: 'text-green-600', bg: 'bg-green-50', label: 'Completed' },
  scheduled: { icon: Clock, color: 'text-blue-600', bg: 'bg-blue-50', label: 'Scheduled' },
  cancelled: { icon: XCircle, color: 'text-gray-500', bg: 'bg-gray-50', label: 'Cancelled' },
  no_show: { icon: AlertCircle, color: 'text-red-500', bg: 'bg-red-50', label: 'No show' },
}

export function InterviewTable({ interviews, onEdit, onDelete, onStatusChange }: InterviewTableProps) {
  const [sortField, setSortField] = useState<'name' | 'organization' | 'segment' | 'scheduled_date'>('scheduled_date')
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('desc')
  const [expandedId, setExpandedId] = useState<string | null>(null)
  const [menuOpenId, setMenuOpenId] = useState<string | null>(null)

  const handleSort = (field: typeof sortField) => {
    if (field === sortField) {
      setSortDirection(d => d === 'asc' ? 'desc' : 'asc')
    } else {
      setSortField(field)
      setSortDirection('asc')
    }
  }

  const sortedInterviews = [...interviews].sort((a, b) => {
    let aVal = a[sortField] || ''
    let bVal = b[sortField] || ''
    if (sortField === 'scheduled_date') {
      aVal = a.scheduled_date || a.completed_date || ''
      bVal = b.scheduled_date || b.completed_date || ''
    }
    const cmp = aVal < bVal ? -1 : aVal > bVal ? 1 : 0
    return sortDirection === 'asc' ? cmp : -cmp
  })

  const SortIcon = ({ field }: { field: typeof sortField }) => {
    if (field !== sortField) return <ChevronDown className="w-4 h-4 opacity-30" />
    return sortDirection === 'asc'
      ? <ChevronUp className="w-4 h-4 text-teal-600" />
      : <ChevronDown className="w-4 h-4 text-teal-600" />
  }

  const getSegmentColor = (segment: Segment) => {
    return SEGMENTS.find(s => s.value === segment)?.color || '#6b7280'
  }

  if (interviews.length === 0) {
    return (
      <div className="bg-white rounded-xl border border-gray-200 p-12 text-center">
        <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <Clock className="w-8 h-8 text-gray-400" />
        </div>
        <h3 className="text-lg font-medium text-gray-900 mb-1">No interviews yet</h3>
        <p className="text-gray-500">Add your first interview to start tracking progress</p>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200 bg-gray-50">
              <th className="px-4 py-3 text-left">
                <button
                  onClick={() => handleSort('name')}
                  className="flex items-center gap-1 text-xs font-semibold text-gray-600 uppercase tracking-wide hover:text-gray-900"
                >
                  Name <SortIcon field="name" />
                </button>
              </th>
              <th className="px-4 py-3 text-left">
                <button
                  onClick={() => handleSort('organization')}
                  className="flex items-center gap-1 text-xs font-semibold text-gray-600 uppercase tracking-wide hover:text-gray-900"
                >
                  Organization <SortIcon field="organization" />
                </button>
              </th>
              <th className="px-4 py-3 text-left">
                <button
                  onClick={() => handleSort('segment')}
                  className="flex items-center gap-1 text-xs font-semibold text-gray-600 uppercase tracking-wide hover:text-gray-900"
                >
                  Segment <SortIcon field="segment" />
                </button>
              </th>
              <th className="px-4 py-3 text-left">
                <button
                  onClick={() => handleSort('scheduled_date')}
                  className="flex items-center gap-1 text-xs font-semibold text-gray-600 uppercase tracking-wide hover:text-gray-900"
                >
                  Date <SortIcon field="scheduled_date" />
                </button>
              </th>
              <th className="px-4 py-3 text-left">
                <span className="text-xs font-semibold text-gray-600 uppercase tracking-wide">Status</span>
              </th>
              <th className="px-4 py-3 w-10"></th>
            </tr>
          </thead>
          <tbody>
            <AnimatePresence>
              {sortedInterviews.map((interview) => {
                const status = statusConfig[interview.status]
                const StatusIcon = status.icon
                const isExpanded = expandedId === interview.id
                const isMenuOpen = menuOpenId === interview.id

                return (
                  <motion.tr
                    key={interview.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className={`border-b border-gray-100 hover:bg-gray-50 transition-colors ${
                      isExpanded ? 'bg-gray-50' : ''
                    }`}
                  >
                    <td className="px-4 py-3">
                      <button
                        onClick={() => setExpandedId(isExpanded ? null : interview.id)}
                        className="text-left"
                      >
                        <span className="font-medium text-gray-900">{interview.name}</span>
                        {interview.role && (
                          <span className="block text-sm text-gray-500">{interview.role}</span>
                        )}
                      </button>
                    </td>
                    <td className="px-4 py-3 text-gray-600">{interview.organization}</td>
                    <td className="px-4 py-3">
                      <span
                        className="inline-flex items-center gap-1.5 px-2 py-1 rounded-full text-xs font-medium"
                        style={{
                          backgroundColor: `${getSegmentColor(interview.segment)}15`,
                          color: getSegmentColor(interview.segment)
                        }}
                      >
                        <span
                          className="w-1.5 h-1.5 rounded-full"
                          style={{ backgroundColor: getSegmentColor(interview.segment) }}
                        />
                        {SEGMENTS.find(s => s.value === interview.segment)?.label}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-gray-600">
                      {interview.completed_date
                        ? format(new Date(interview.completed_date), 'MMM d, yyyy')
                        : interview.scheduled_date
                        ? format(new Date(interview.scheduled_date), 'MMM d, yyyy')
                        : '—'}
                    </td>
                    <td className="px-4 py-3">
                      <span className={`inline-flex items-center gap-1.5 px-2 py-1 rounded-full text-xs font-medium ${status.bg} ${status.color}`}>
                        <StatusIcon className="w-3.5 h-3.5" />
                        {status.label}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <div className="relative">
                        <button
                          onClick={() => setMenuOpenId(isMenuOpen ? null : interview.id)}
                          className="p-1 rounded hover:bg-gray-100"
                        >
                          <MoreHorizontal className="w-5 h-5 text-gray-400" />
                        </button>

                        {isMenuOpen && (
                          <>
                            <div
                              className="fixed inset-0 z-10"
                              onClick={() => setMenuOpenId(null)}
                            />
                            <div className="absolute right-0 top-8 z-20 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-1">
                              {interview.status === 'scheduled' && (
                                <button
                                  onClick={() => {
                                    onStatusChange(interview.id, 'completed')
                                    setMenuOpenId(null)
                                  }}
                                  className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 flex items-center gap-2"
                                >
                                  <CheckCircle className="w-4 h-4 text-green-600" />
                                  Mark completed
                                </button>
                              )}
                              <button
                                onClick={() => {
                                  onEdit(interview)
                                  setMenuOpenId(null)
                                }}
                                className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 flex items-center gap-2"
                              >
                                <Pencil className="w-4 h-4" />
                                Edit
                              </button>
                              <button
                                onClick={() => {
                                  onDelete(interview.id)
                                  setMenuOpenId(null)
                                }}
                                className="w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-red-50 flex items-center gap-2"
                              >
                                <Trash2 className="w-4 h-4" />
                                Delete
                              </button>
                            </div>
                          </>
                        )}
                      </div>
                    </td>
                  </motion.tr>
                )
              })}
            </AnimatePresence>
          </tbody>
        </table>
      </div>
    </div>
  )
}
