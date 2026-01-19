import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, RefreshCw, Calendar, Users, Target, ExternalLink, BookOpen, ClipboardList, ListChecks } from 'lucide-react'
import { useInterviews } from './hooks/useInterviews'
import { ProgressRing } from './components/ProgressRing'
import { MilestoneTracker } from './components/MilestoneTracker'
import { SegmentChart } from './components/SegmentChart'
import { InterviewTable } from './components/InterviewTable'
import { AddInterviewModal } from './components/AddInterviewModal'
import { Materials } from './components/Materials'
import { Assignments } from './components/Assignments'
import type { Interview } from './types/database'
import { isSupabaseConfigured } from './lib/supabase'

type Tab = 'interviews' | 'assignments' | 'materials'

function App() {
  const {
    interviews,
    loading,
    error,
    addInterview,
    updateInterview,
    deleteInterview,
    refresh,
    completedCount,
    scheduledCount,
    segmentCounts,
  } = useInterviews()

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editingInterview, setEditingInterview] = useState<Interview | null>(null)
  const [activeTab, setActiveTab] = useState<Tab>('interviews')

  const handleSave = async (interview: Omit<Interview, 'id' | 'created_at' | 'updated_at'>) => {
    if (editingInterview) {
      await updateInterview(editingInterview.id, interview)
    } else {
      await addInterview(interview)
    }
    setEditingInterview(null)
  }

  const handleEdit = (interview: Interview) => {
    setEditingInterview(interview)
    setIsModalOpen(true)
  }

  const handleStatusChange = async (id: string, status: Interview['status']) => {
    const updates: Partial<Interview> = { status }
    if (status === 'completed') {
      updates.completed_date = new Date().toISOString().split('T')[0]
    }
    await updateInterview(id, updates)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setEditingInterview(null)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-teal-500 rounded-lg flex items-center justify-center">
                  <Target className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h1 className="text-lg font-semibold text-gray-900">POSE Tracker</h1>
                  <p className="text-xs text-gray-500">Ecosystem discovery</p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              {!isSupabaseConfigured() && (
                <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full">
                  Local mode
                </span>
              )}
              {activeTab === 'interviews' && (
                <>
                  <button
                    onClick={refresh}
                    disabled={loading}
                    className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    <RefreshCw className={`w-5 h-5 ${loading ? 'animate-spin' : ''}`} />
                  </button>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setIsModalOpen(true)}
                    className="flex items-center gap-2 px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors font-medium shadow-sm"
                  >
                    <Plus className="w-5 h-5" />
                    <span className="hidden sm:inline">Add interview</span>
                  </motion.button>
                </>
              )}
            </div>
          </div>

          {/* Tab Navigation */}
          <div className="flex gap-1 -mb-px">
            <button
              onClick={() => setActiveTab('interviews')}
              className={`flex items-center gap-2 px-4 py-3 text-sm font-medium border-b-2 transition-colors ${
                activeTab === 'interviews'
                  ? 'border-teal-500 text-teal-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <ClipboardList className="w-4 h-4" />
              Interviews
              <span className={`text-xs px-2 py-0.5 rounded-full ${
                activeTab === 'interviews'
                  ? 'bg-teal-100 text-teal-700'
                  : 'bg-gray-100 text-gray-600'
              }`}>
                {completedCount}/100
              </span>
            </button>
            <button
              onClick={() => setActiveTab('assignments')}
              className={`flex items-center gap-2 px-4 py-3 text-sm font-medium border-b-2 transition-colors ${
                activeTab === 'assignments'
                  ? 'border-teal-500 text-teal-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <ListChecks className="w-4 h-4" />
              Assignments
            </button>
            <button
              onClick={() => setActiveTab('materials')}
              className={`flex items-center gap-2 px-4 py-3 text-sm font-medium border-b-2 transition-colors ${
                activeTab === 'materials'
                  ? 'border-teal-500 text-teal-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <BookOpen className="w-4 h-4" />
              Materials
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <AnimatePresence mode="wait">
          {activeTab === 'interviews' ? (
            <motion.div
              key="interviews"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 px-4 py-3 bg-yellow-50 border border-yellow-200 rounded-lg text-yellow-800 text-sm"
                >
                  {error}
                </motion.div>
              )}

              {/* Stats Overview */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white rounded-xl border border-gray-200 p-6 flex items-center justify-between"
                >
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Total progress</p>
                    <p className="text-3xl font-bold text-gray-900">
                      {completedCount}
                      <span className="text-lg font-normal text-gray-400"> / 100</span>
                    </p>
                    <p className="text-sm text-teal-600 font-medium mt-1">
                      {100 - completedCount} remaining
                    </p>
                  </div>
                  <ProgressRing current={completedCount} target={100} size={100} strokeWidth={8} label="" />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="bg-white rounded-xl border border-gray-200 p-6"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Calendar className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Scheduled</p>
                      <p className="text-2xl font-bold text-gray-900">{scheduledCount}</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-500">
                    {scheduledCount > 0
                      ? `${scheduledCount} interview${scheduledCount === 1 ? '' : 's'} coming up`
                      : 'No interviews scheduled'}
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="bg-white rounded-xl border border-gray-200 p-6"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                      <Users className="w-5 h-5 text-purple-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Segments covered</p>
                      <p className="text-2xl font-bold text-gray-900">
                        {Object.keys(segmentCounts).length}
                        <span className="text-lg font-normal text-gray-400"> / 6</span>
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-500">
                    {6 - Object.keys(segmentCounts).length > 0
                      ? `${6 - Object.keys(segmentCounts).length} segment${6 - Object.keys(segmentCounts).length === 1 ? '' : 's'} to explore`
                      : 'All segments covered!'}
                  </p>
                </motion.div>
              </div>

              {/* Main Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                <div className="lg:col-span-1">
                  <MilestoneTracker completedCount={completedCount} />
                </div>
                <div className="lg:col-span-2">
                  <SegmentChart segmentCounts={segmentCounts} totalCompleted={completedCount} />
                </div>
              </div>

              {/* Interview Log */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-semibold text-gray-900">Interview log</h2>
                  <span className="text-sm text-gray-500">{interviews.length} total</span>
                </div>
                <InterviewTable
                  interviews={interviews}
                  onEdit={handleEdit}
                  onDelete={deleteInterview}
                  onStatusChange={handleStatusChange}
                />
              </div>
            </motion.div>
          ) : activeTab === 'assignments' ? (
            <motion.div
              key="assignments"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              <Assignments />
            </motion.div>
          ) : (
            <motion.div
              key="materials"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              <Materials />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Footer */}
        <footer className="text-center py-8 border-t border-gray-200 mt-8">
          <p className="text-sm text-gray-500 mb-2">
            Built for the{' '}
            <a
              href="https://new.nsf.gov/funding/initiatives/pose"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-600 hover:text-teal-700"
            >
              NSF POSE program
            </a>
          </p>
          <p className="text-xs text-gray-400 flex items-center justify-center gap-1">
            Created by the{' '}
            <a
              href="https://policyengine.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-600 hover:text-teal-700 inline-flex items-center gap-1"
            >
              PolicyEngine team
              <ExternalLink className="w-3 h-3" />
            </a>
          </p>
        </footer>
      </main>

      {/* Modal */}
      <AddInterviewModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSave={handleSave}
        editInterview={editingInterview}
      />
    </div>
  )
}

export default App
