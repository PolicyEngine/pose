import { format, isPast, isToday, differenceInDays } from 'date-fns'
import { motion } from 'framer-motion'
import { CheckCircle2, Circle, Clock } from 'lucide-react'
import { POSE_MILESTONES } from '../types/database'

interface MilestoneTrackerProps {
  completedCount: number
}

export function MilestoneTracker({ completedCount }: MilestoneTrackerProps) {
  const today = new Date()

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Interview milestones</h3>

      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-[11px] top-4 bottom-4 w-0.5 bg-gray-200" />

        <div className="space-y-4">
          {POSE_MILESTONES.map((milestone, index) => {
            const deadline = new Date(milestone.deadline)
            const isComplete = completedCount >= milestone.target_count
            const isCurrent = !isComplete && (index === 0 || completedCount >= POSE_MILESTONES[index - 1].target_count)
            const isPastDue = isPast(deadline) && !isComplete && !isToday(deadline)
            const daysUntil = differenceInDays(deadline, today)

            return (
              <motion.div
                key={milestone.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`relative flex items-start gap-4 ${
                  isCurrent ? 'bg-teal-50 -mx-3 px-3 py-2 rounded-lg' : ''
                }`}
              >
                {/* Icon */}
                <div className="relative z-10 mt-0.5">
                  {isComplete ? (
                    <CheckCircle2 className="w-6 h-6 text-teal-600" />
                  ) : isPastDue ? (
                    <Clock className="w-6 h-6 text-red-500" />
                  ) : (
                    <Circle className={`w-6 h-6 ${isCurrent ? 'text-teal-500' : 'text-gray-300'}`} />
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className={`font-medium ${
                      isComplete ? 'text-gray-600' :
                      isPastDue ? 'text-red-600' :
                      isCurrent ? 'text-teal-700' : 'text-gray-700'
                    }`}>
                      {milestone.name}
                    </span>
                    {isCurrent && (
                      <span className="text-xs bg-teal-100 text-teal-700 px-2 py-0.5 rounded-full font-medium">
                        Current
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-3 mt-1 text-sm">
                    <span className={`font-semibold ${
                      isComplete ? 'text-teal-600' :
                      isPastDue ? 'text-red-500' : 'text-gray-500'
                    }`}>
                      {milestone.target_count} interviews
                    </span>
                    <span className="text-gray-400">•</span>
                    <span className={`${
                      isPastDue ? 'text-red-500' : 'text-gray-500'
                    }`}>
                      {format(deadline, 'MMM d')}
                      {!isComplete && !isPast(deadline) && (
                        <span className="text-gray-400 ml-1">
                          ({daysUntil === 0 ? 'today' : `${daysUntil}d`})
                        </span>
                      )}
                    </span>
                  </div>

                  {/* Progress bar for current milestone */}
                  {isCurrent && (
                    <div className="mt-2">
                      <div className="h-1.5 bg-teal-100 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-teal-500 rounded-full"
                          initial={{ width: 0 }}
                          animate={{
                            width: `${Math.min(
                              ((completedCount - (index > 0 ? POSE_MILESTONES[index - 1].target_count : 0)) /
                              (milestone.target_count - (index > 0 ? POSE_MILESTONES[index - 1].target_count : 0))) * 100,
                              100
                            )}%`
                          }}
                          transition={{ duration: 0.5, delay: 0.3 }}
                        />
                      </div>
                      <p className="text-xs text-teal-600 mt-1">
                        {milestone.target_count - completedCount} more to reach this milestone
                      </p>
                    </div>
                  )}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
