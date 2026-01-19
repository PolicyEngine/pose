import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  CheckCircle2,
  Circle,
  Clock,
  AlertTriangle,
  Calendar,
  BookOpen,
  Presentation,
  Target,
  ChevronDown,
  ChevronRight,
  Filter,
} from 'lucide-react'
import { useAssignments } from '../hooks/useAssignments'
import type { Assignment, AssignmentCategory } from '../types/database'

// Category metadata
const CATEGORY_INFO: Record<
  AssignmentCategory,
  { label: string; color: string; bgColor: string; Icon: React.ElementType }
> = {
  prep: {
    label: 'Preparation',
    color: 'text-blue-600',
    bgColor: 'bg-blue-100',
    Icon: BookOpen,
  },
  presentation: {
    label: 'Presentations',
    color: 'text-purple-600',
    bgColor: 'bg-purple-100',
    Icon: Presentation,
  },
  interview_milestone: {
    label: 'Interview milestones',
    color: 'text-teal-600',
    bgColor: 'bg-teal-100',
    Icon: Target,
  },
}

type ViewMode = 'chronological' | 'category'
type FilterMode = 'all' | 'pending' | 'completed'

interface AssignmentCardProps {
  assignment: Assignment
  dueStatus: 'overdue' | 'due_soon' | 'upcoming'
  onToggle: () => void
}

function AssignmentCard({ assignment, dueStatus, onToggle }: AssignmentCardProps) {
  const categoryInfo = CATEGORY_INFO[assignment.category]
  const isCompleted = assignment.status === 'completed'

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
    })
  }

  const getDueLabel = () => {
    if (isCompleted) return null
    switch (dueStatus) {
      case 'overdue':
        return (
          <span className="inline-flex items-center gap-1 text-xs font-medium text-red-600 bg-red-50 px-2 py-0.5 rounded-full">
            <AlertTriangle className="w-3 h-3" />
            Overdue
          </span>
        )
      case 'due_soon':
        return (
          <span className="inline-flex items-center gap-1 text-xs font-medium text-amber-600 bg-amber-50 px-2 py-0.5 rounded-full">
            <Clock className="w-3 h-3" />
            Due soon
          </span>
        )
      default:
        return null
    }
  }

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className={`bg-white rounded-lg border p-4 transition-all ${
        isCompleted
          ? 'border-gray-100 bg-gray-50'
          : dueStatus === 'overdue'
          ? 'border-red-200 shadow-sm'
          : dueStatus === 'due_soon'
          ? 'border-amber-200 shadow-sm'
          : 'border-gray-200 hover:border-teal-300 hover:shadow-sm'
      }`}
    >
      <div className="flex items-start gap-3">
        {/* Checkbox */}
        <button
          onClick={onToggle}
          className={`flex-shrink-0 mt-0.5 transition-colors ${
            isCompleted ? 'text-teal-500' : 'text-gray-300 hover:text-teal-400'
          }`}
        >
          {isCompleted ? (
            <CheckCircle2 className="w-6 h-6" />
          ) : (
            <Circle className="w-6 h-6" />
          )}
        </button>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2">
            <h3
              className={`font-medium ${
                isCompleted ? 'text-gray-400 line-through' : 'text-gray-900'
              }`}
            >
              {assignment.title}
            </h3>
            {getDueLabel()}
          </div>

          <p
            className={`text-sm mt-1 ${
              isCompleted ? 'text-gray-400' : 'text-gray-500'
            }`}
          >
            {assignment.description}
          </p>

          <div className="flex items-center gap-3 mt-3">
            {/* Category badge */}
            <span
              className={`inline-flex items-center gap-1.5 text-xs font-medium px-2 py-1 rounded-full ${categoryInfo.bgColor} ${categoryInfo.color}`}
            >
              <categoryInfo.Icon className="w-3 h-3" />
              {categoryInfo.label}
            </span>

            {/* Due date */}
            <span className="inline-flex items-center gap-1 text-xs text-gray-400">
              <Calendar className="w-3 h-3" />
              {formatDate(assignment.due_date)}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

interface CategoryGroupProps {
  category: AssignmentCategory
  assignments: Assignment[]
  getDueStatus: (date: string) => 'overdue' | 'due_soon' | 'upcoming'
  onToggle: (id: string) => void
  isExpanded: boolean
  onExpandToggle: () => void
}

function CategoryGroup({
  category,
  assignments,
  getDueStatus,
  onToggle,
  isExpanded,
  onExpandToggle,
}: CategoryGroupProps) {
  const categoryInfo = CATEGORY_INFO[category]
  const completedCount = assignments.filter((a) => a.status === 'completed').length

  return (
    <div className="mb-6">
      <button
        onClick={onExpandToggle}
        className="w-full flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors mb-3"
      >
        <div className="flex items-center gap-3">
          {isExpanded ? (
            <ChevronDown className="w-5 h-5 text-gray-400" />
          ) : (
            <ChevronRight className="w-5 h-5 text-gray-400" />
          )}
          <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${categoryInfo.bgColor}`}>
            <categoryInfo.Icon className={`w-4 h-4 ${categoryInfo.color}`} />
          </div>
          <div className="text-left">
            <h2 className="font-semibold text-gray-900">{categoryInfo.label}</h2>
            <p className="text-sm text-gray-500">
              {completedCount} of {assignments.length} completed
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-teal-500 rounded-full transition-all duration-300"
              style={{ width: `${(completedCount / assignments.length) * 100}%` }}
            />
          </div>
          <span className="text-sm text-gray-500 w-12 text-right">
            {Math.round((completedCount / assignments.length) * 100)}%
          </span>
        </div>
      </button>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="space-y-3 pl-8 overflow-hidden"
          >
            {assignments.map((assignment) => (
              <AssignmentCard
                key={assignment.id}
                assignment={assignment}
                dueStatus={getDueStatus(assignment.due_date)}
                onToggle={() => onToggle(assignment.id)}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export function Assignments() {
  const {
    assignments,
    loading,
    toggleComplete,
    completedCount,
    totalCount,
    getDueStatus,
  } = useAssignments()

  const [viewMode, setViewMode] = useState<ViewMode>('chronological')
  const [filterMode, setFilterMode] = useState<FilterMode>('all')
  const [expandedCategories, setExpandedCategories] = useState<Set<AssignmentCategory>>(
    new Set(['prep', 'presentation', 'interview_milestone'])
  )

  // Filter assignments
  const filteredAssignments = useMemo(() => {
    return assignments.filter((a) => {
      if (filterMode === 'pending') return a.status !== 'completed'
      if (filterMode === 'completed') return a.status === 'completed'
      return true
    })
  }, [assignments, filterMode])

  // Group by category
  const assignmentsByCategory = useMemo(() => {
    const grouped: Record<AssignmentCategory, Assignment[]> = {
      prep: [],
      presentation: [],
      interview_milestone: [],
    }
    filteredAssignments.forEach((a) => {
      grouped[a.category].push(a)
    })
    return grouped
  }, [filteredAssignments])

  // Sort chronologically
  const chronologicalAssignments = useMemo(() => {
    return [...filteredAssignments].sort(
      (a, b) => new Date(a.due_date).getTime() - new Date(b.due_date).getTime()
    )
  }, [filteredAssignments])

  const toggleCategoryExpand = (category: AssignmentCategory) => {
    setExpandedCategories((prev) => {
      const next = new Set(prev)
      if (next.has(category)) {
        next.delete(category)
      } else {
        next.add(category)
      }
      return next
    })
  }

  // Count overdue and due soon
  const urgentCount = useMemo(() => {
    return assignments.filter((a) => {
      if (a.status === 'completed') return false
      const status = getDueStatus(a.due_date)
      return status === 'overdue' || status === 'due_soon'
    }).length
  }, [assignments, getDueStatus])

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-teal-600" />
      </div>
    )
  }

  return (
    <div>
      {/* Summary stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-xl border border-gray-200 p-6"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500 mb-1">Progress</p>
              <p className="text-3xl font-bold text-gray-900">
                {completedCount}
                <span className="text-lg font-normal text-gray-400"> / {totalCount}</span>
              </p>
            </div>
            <div className="w-16 h-16 relative">
              <svg className="w-16 h-16 transform -rotate-90">
                <circle
                  cx="32"
                  cy="32"
                  r="28"
                  fill="none"
                  stroke="#e5e7eb"
                  strokeWidth="6"
                />
                <circle
                  cx="32"
                  cy="32"
                  r="28"
                  fill="none"
                  stroke="#319795"
                  strokeWidth="6"
                  strokeLinecap="round"
                  strokeDasharray={`${(completedCount / totalCount) * 176} 176`}
                />
              </svg>
              <span className="absolute inset-0 flex items-center justify-center text-sm font-semibold text-gray-700">
                {Math.round((completedCount / totalCount) * 100)}%
              </span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-xl border border-gray-200 p-6"
        >
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
              <Clock className="w-5 h-5 text-amber-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Needs attention</p>
              <p className="text-2xl font-bold text-gray-900">{urgentCount}</p>
            </div>
          </div>
          <p className="text-sm text-gray-500">
            {urgentCount > 0
              ? `${urgentCount} assignment${urgentCount === 1 ? '' : 's'} overdue or due soon`
              : 'All caught up!'}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-xl border border-gray-200 p-6"
        >
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
              <CheckCircle2 className="w-5 h-5 text-green-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Completed</p>
              <p className="text-2xl font-bold text-gray-900">{completedCount}</p>
            </div>
          </div>
          <p className="text-sm text-gray-500">
            {totalCount - completedCount} remaining
          </p>
        </motion.div>
      </div>

      {/* Filters and view toggle */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
        <div className="flex items-center gap-2">
          <Filter className="w-4 h-4 text-gray-400" />
          <div className="flex gap-1">
            {[
              { value: 'all', label: 'All' },
              { value: 'pending', label: 'Pending' },
              { value: 'completed', label: 'Completed' },
            ].map(({ value, label }) => (
              <button
                key={value}
                onClick={() => setFilterMode(value as FilterMode)}
                className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
                  filterMode === value
                    ? 'bg-teal-600 text-white'
                    : 'bg-white text-gray-600 border border-gray-200 hover:border-teal-300'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        <div className="flex gap-1 bg-gray-100 p-1 rounded-lg">
          <button
            onClick={() => setViewMode('chronological')}
            className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
              viewMode === 'chronological'
                ? 'bg-white text-gray-900 shadow-sm'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Timeline
          </button>
          <button
            onClick={() => setViewMode('category')}
            className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
              viewMode === 'category'
                ? 'bg-white text-gray-900 shadow-sm'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            By category
          </button>
        </div>
      </div>

      {/* Assignment list */}
      <AnimatePresence mode="wait">
        {viewMode === 'category' ? (
          <motion.div
            key="category"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {(['prep', 'presentation', 'interview_milestone'] as AssignmentCategory[]).map(
              (category) =>
                assignmentsByCategory[category].length > 0 && (
                  <CategoryGroup
                    key={category}
                    category={category}
                    assignments={assignmentsByCategory[category]}
                    getDueStatus={getDueStatus}
                    onToggle={toggleComplete}
                    isExpanded={expandedCategories.has(category)}
                    onExpandToggle={() => toggleCategoryExpand(category)}
                  />
                )
            )}
          </motion.div>
        ) : (
          <motion.div
            key="chronological"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="space-y-3"
          >
            {chronologicalAssignments.map((assignment) => (
              <AssignmentCard
                key={assignment.id}
                assignment={assignment}
                dueStatus={getDueStatus(assignment.due_date)}
                onToggle={() => toggleComplete(assignment.id)}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {filteredAssignments.length === 0 && (
        <div className="text-center py-12">
          <CheckCircle2 className="w-12 h-12 text-gray-300 mx-auto mb-4" />
          <p className="text-gray-500">
            {filterMode === 'pending'
              ? 'All assignments completed!'
              : filterMode === 'completed'
              ? 'No completed assignments yet.'
              : 'No assignments found.'}
          </p>
        </div>
      )}
    </div>
  )
}
