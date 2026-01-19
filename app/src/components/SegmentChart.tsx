import { motion } from 'framer-motion'
import { SEGMENTS, type Segment } from '../types/database'

interface SegmentChartProps {
  segmentCounts: Record<Segment, number>
  totalCompleted: number
}

export function SegmentChart({ segmentCounts, totalCompleted }: SegmentChartProps) {
  const maxCount = Math.max(...Object.values(segmentCounts), 1)

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-1">Stakeholder segments</h3>
      <p className="text-sm text-gray-500 mb-6">
        Interview coverage across ecosystem segments
      </p>

      <div className="space-y-4">
        {SEGMENTS.map((segment, index) => {
          const count = segmentCounts[segment.value] || 0
          const percentage = totalCompleted > 0 ? Math.round((count / totalCompleted) * 100) : 0
          const barWidth = maxCount > 0 ? (count / maxCount) * 100 : 0

          return (
            <motion.div
              key={segment.value}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <div className="flex items-center justify-between mb-1.5">
                <div className="flex items-center gap-2">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: segment.color }}
                  />
                  <span className="text-sm font-medium text-gray-700">{segment.label}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-semibold text-gray-900">{count}</span>
                  <span className="text-xs text-gray-400">({percentage}%)</span>
                </div>
              </div>

              <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                <motion.div
                  className="h-full rounded-full"
                  style={{ backgroundColor: segment.color }}
                  initial={{ width: 0 }}
                  animate={{ width: `${barWidth}%` }}
                  transition={{ duration: 0.5, delay: index * 0.05 + 0.2 }}
                />
              </div>

              <p className="text-xs text-gray-400 mt-1">{segment.description}</p>
            </motion.div>
          )
        })}
      </div>

      {totalCompleted === 0 && (
        <p className="text-center text-gray-400 text-sm mt-6">
          Complete interviews to see segment distribution
        </p>
      )}
    </div>
  )
}
