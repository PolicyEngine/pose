import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Minimize2,
  Users,
  Lightbulb,
  HelpCircle,
  ClipboardList,
  Target,
  Download,
} from 'lucide-react'
import pptxgen from 'pptxgenjs'

// Types
interface SlideProps {
  isFullscreen: boolean
}

interface TeamMember {
  name: string
  role: string
  photo: string
  bio: string
}

// Team data
const teamMembers: TeamMember[] = [
  {
    name: 'Max Ghenis',
    role: 'CEO',
    photo: '/assets/team/max-ghenis.png',
    bio: 'Founded UBI Center, MIT M.S. Development Economics, former Google',
  },
  {
    name: 'Pavel Makarchuk',
    role: 'Chief of Staff',
    photo: '/assets/team/pavel-makarchuk.jpeg',
    bio: 'Operations and strategy lead',
  },
  {
    name: 'Daniel Feenberg',
    role: 'Advisor',
    photo: '/assets/team/daniel-feenberg.jpg',
    bio: 'Former IT Director at NBER, created TAXSIM, Princeton Ph.D.',
  },
]

// Slide components
function TeamSlide({ isFullscreen }: SlideProps) {
  return (
    <div className={`flex flex-col h-full ${isFullscreen ? 'p-12' : 'p-8'}`}>
      <div className="flex items-center gap-3 mb-8">
        <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center">
          <Users className="w-6 h-6 text-teal-600" />
        </div>
        <div>
          <h1 className={`font-bold text-gray-900 ${isFullscreen ? 'text-4xl' : 'text-2xl'}`}>
            PolicyEngine POSE Team
          </h1>
        </div>
      </div>

      <div className="flex-1 grid grid-cols-3 gap-8">
        {teamMembers.map((member) => (
          <motion.div
            key={member.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center text-center"
          >
            <div className={`rounded-full overflow-hidden border-4 border-teal-200 shadow-lg mb-4 ${isFullscreen ? 'w-48 h-48' : 'w-32 h-32'}`}>
              <img
                src={member.photo}
                alt={member.name}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className={`font-semibold text-gray-900 ${isFullscreen ? 'text-2xl' : 'text-lg'}`}>
              {member.name}
            </h3>
            <p className={`text-teal-600 font-medium mb-2 ${isFullscreen ? 'text-lg' : 'text-sm'}`}>
              {member.role}
            </p>
            <p className={`text-gray-500 ${isFullscreen ? 'text-base' : 'text-xs'}`}>
              {member.bio}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

function ThesisSlide({ isFullscreen }: SlideProps) {
  return (
    <div className={`flex flex-col h-full ${isFullscreen ? 'p-12' : 'p-8'}`}>
      <div className="flex items-center gap-3 mb-8">
        <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
          <Lightbulb className="w-6 h-6 text-purple-600" />
        </div>
        <h1 className={`font-bold text-gray-900 ${isFullscreen ? 'text-4xl' : 'text-2xl'}`}>
          Thesis
        </h1>
      </div>

      <div className="flex-1 flex items-center justify-center">
        <div className={`max-w-4xl ${isFullscreen ? 'text-2xl' : 'text-lg'} leading-relaxed`}>
          <p className="text-gray-700">
            We believe that{' '}
            <span className="text-teal-600 font-semibold bg-teal-50 px-2 py-1 rounded">
              policy researchers, journalists, and advocates
            </span>{' '}
            will{' '}
            <span className="text-purple-600 font-semibold bg-purple-50 px-2 py-1 rounded">
              use PolicyEngine's open-source microsimulation tools
            </span>{' '}
            to{' '}
            <span className="text-blue-600 font-semibold bg-blue-50 px-2 py-1 rounded">
              analyze tax and benefit policy impacts
            </span>{' '}
            because{' '}
            <span className="text-orange-600 font-semibold bg-orange-50 px-2 py-1 rounded">
              it democratizes access to rigorous economic modeling previously available only to government agencies and elite institutions
            </span>.
          </p>
        </div>
      </div>

      <div className={`mt-8 grid grid-cols-4 gap-4 ${isFullscreen ? 'text-sm' : 'text-xs'}`}>
        <div className="bg-teal-50 border border-teal-200 rounded-lg p-3">
          <p className="font-semibold text-teal-700 mb-1">Target stakeholders</p>
          <p className="text-teal-600">Researchers, journalists, advocates</p>
        </div>
        <div className="bg-purple-50 border border-purple-200 rounded-lg p-3">
          <p className="font-semibold text-purple-700 mb-1">Product/service</p>
          <p className="text-purple-600">Open-source microsimulation tools</p>
        </div>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
          <p className="font-semibold text-blue-700 mb-1">Goal</p>
          <p className="text-blue-600">Analyze policy impacts</p>
        </div>
        <div className="bg-orange-50 border border-orange-200 rounded-lg p-3">
          <p className="font-semibold text-orange-700 mb-1">Value proposition</p>
          <p className="text-orange-600">Democratized economic modeling</p>
        </div>
      </div>
    </div>
  )
}

function AssumptionsSlide({ isFullscreen }: SlideProps) {
  const assumptions = [
    {
      segment: 'Users',
      icon: '👥',
      assumption: 'Policy researchers want accessible tools that don\'t require programming expertise to run sophisticated microsimulations',
      color: 'teal',
    },
    {
      segment: 'Supporters',
      icon: '💰',
      assumption: 'Funders (foundations, governments) value transparency and reproducibility enough to fund open-source policy tools over proprietary alternatives',
      color: 'purple',
    },
    {
      segment: 'Contributors',
      icon: '👨‍💻',
      assumption: 'The open-source model can attract and retain technical talent who want policy impact without requiring competitive salaries',
      color: 'blue',
    },
  ]

  const colorClasses: Record<string, { bg: string; border: string; text: string; iconBg: string }> = {
    teal: { bg: 'bg-teal-50', border: 'border-teal-200', text: 'text-teal-700', iconBg: 'bg-teal-100' },
    purple: { bg: 'bg-purple-50', border: 'border-purple-200', text: 'text-purple-700', iconBg: 'bg-purple-100' },
    blue: { bg: 'bg-blue-50', border: 'border-blue-200', text: 'text-blue-700', iconBg: 'bg-blue-100' },
  }

  return (
    <div className={`flex flex-col h-full ${isFullscreen ? 'p-12' : 'p-8'}`}>
      <div className="flex items-center gap-3 mb-8">
        <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
          <HelpCircle className="w-6 h-6 text-blue-600" />
        </div>
        <h1 className={`font-bold text-gray-900 ${isFullscreen ? 'text-4xl' : 'text-2xl'}`}>
          Assumptions
        </h1>
      </div>

      <div className="flex-1 flex flex-col justify-center gap-6">
        {assumptions.map((item, index) => {
          const colors = colorClasses[item.color]
          return (
            <motion.div
              key={item.segment}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`${colors.bg} ${colors.border} border rounded-xl ${isFullscreen ? 'p-6' : 'p-4'} flex items-center gap-4`}
            >
              <div className={`${colors.iconBg} rounded-lg flex items-center justify-center ${isFullscreen ? 'w-16 h-16 text-3xl' : 'w-12 h-12 text-xl'}`}>
                {item.icon}
              </div>
              <div>
                <h3 className={`font-semibold ${colors.text} ${isFullscreen ? 'text-xl' : 'text-base'}`}>
                  {item.segment}
                </h3>
                <p className={`${colors.text} opacity-80 ${isFullscreen ? 'text-lg' : 'text-sm'}`}>
                  {item.assumption}
                </p>
              </div>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}

function InterviewLogSlide({ isFullscreen }: SlideProps) {
  return (
    <div className={`flex flex-col h-full ${isFullscreen ? 'p-12' : 'p-8'}`}>
      <div className="flex items-center gap-3 mb-8">
        <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
          <ClipboardList className="w-6 h-6 text-orange-600" />
        </div>
        <h1 className={`font-bold text-gray-900 ${isFullscreen ? 'text-4xl' : 'text-2xl'}`}>
          Interview log
        </h1>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center">
        <div className={`text-center ${isFullscreen ? 'max-w-2xl' : 'max-w-lg'}`}>
          <div className={`bg-orange-50 border-2 border-orange-200 border-dashed rounded-2xl ${isFullscreen ? 'p-12' : 'p-8'} mb-6`}>
            <ClipboardList className={`mx-auto text-orange-400 mb-4 ${isFullscreen ? 'w-24 h-24' : 'w-16 h-16'}`} />
            <h3 className={`font-semibold text-gray-900 mb-2 ${isFullscreen ? 'text-2xl' : 'text-lg'}`}>
              View full interview tracker
            </h3>
            <p className={`text-gray-500 mb-4 ${isFullscreen ? 'text-lg' : 'text-sm'}`}>
              Track all ecosystem discovery interviews, progress toward 100 interviews, and segment coverage.
            </p>
          </div>
          <p className={`text-gray-500 ${isFullscreen ? 'text-lg' : 'text-sm'}`}>
            Navigate to the <span className="font-semibold text-teal-600">Interviews tab</span> to access the full interview tracker with search, filtering, and analytics.
          </p>
        </div>
      </div>
    </div>
  )
}

function GoalsCharterSlide({ isFullscreen }: SlideProps) {
  const goals = [
    'Complete 100 ecosystem discovery interviews across all 6 stakeholder segments',
    'Identify 3+ sustainable funding models beyond traditional grants',
    'Establish partnerships with 5+ policy think tanks and media organizations',
    'Develop community governance structure with clear decision rights',
  ]

  const agreements = [
    'Weekly team sync (Mondays)',
    '24-hour response time on Slack',
    'Share interview notes within 24 hours',
    'Consensus on strategic decisions, CEO decides operational matters',
  ]

  return (
    <div className={`flex flex-col h-full ${isFullscreen ? 'p-12' : 'p-8'}`}>
      <div className="flex items-center gap-3 mb-8">
        <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
          <Target className="w-6 h-6 text-green-600" />
        </div>
        <h1 className={`font-bold text-gray-900 ${isFullscreen ? 'text-4xl' : 'text-2xl'}`}>
          Team goals and charter
        </h1>
      </div>

      <div className="flex-1 grid grid-cols-2 gap-8">
        {/* Goals */}
        <div>
          <h2 className={`font-semibold text-gray-900 mb-4 ${isFullscreen ? 'text-2xl' : 'text-lg'}`}>
            Goals
          </h2>
          <div className="space-y-3">
            {goals.map((goal, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`bg-green-50 border border-green-200 rounded-lg ${isFullscreen ? 'p-4' : 'p-3'} flex items-start gap-3`}
              >
                <div className={`bg-green-500 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold ${isFullscreen ? 'w-8 h-8 text-lg' : 'w-6 h-6 text-sm'}`}>
                  {index + 1}
                </div>
                <p className={`text-green-800 ${isFullscreen ? 'text-lg' : 'text-sm'}`}>{goal}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Working Agreements */}
        <div>
          <h2 className={`font-semibold text-gray-900 mb-4 ${isFullscreen ? 'text-2xl' : 'text-lg'}`}>
            Working agreements
          </h2>
          <div className="space-y-3">
            {agreements.map((agreement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 + 0.4 }}
                className={`bg-teal-50 border border-teal-200 rounded-lg ${isFullscreen ? 'p-4' : 'p-3'} flex items-center gap-3`}
              >
                <div className={`bg-teal-500 rounded-full flex items-center justify-center flex-shrink-0 ${isFullscreen ? 'w-4 h-4' : 'w-3 h-3'}`} />
                <p className={`text-teal-800 ${isFullscreen ? 'text-lg' : 'text-sm'}`}>{agreement}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

// Slide configuration
interface SlideConfig {
  id: string
  title: string
  component: React.FC<SlideProps>
}

const slides: SlideConfig[] = [
  { id: 'team', title: 'Team', component: TeamSlide },
  { id: 'thesis', title: 'Thesis', component: ThesisSlide },
  { id: 'assumptions', title: 'Assumptions', component: AssumptionsSlide },
  { id: 'interview-log', title: 'Interview log', component: InterviewLogSlide },
  { id: 'goals-charter', title: 'Goals and charter', component: GoalsCharterSlide },
]

export function Slides() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isFullscreen, setIsFullscreen] = useState(false)

  const goToSlide = useCallback((index: number) => {
    if (index >= 0 && index < slides.length) {
      setCurrentSlide(index)
    }
  }, [])

  const nextSlide = useCallback(() => {
    goToSlide(currentSlide + 1)
  }, [currentSlide, goToSlide])

  const prevSlide = useCallback(() => {
    goToSlide(currentSlide - 1)
  }, [currentSlide, goToSlide])

  const toggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen()
      setIsFullscreen(true)
    } else {
      document.exitFullscreen()
      setIsFullscreen(false)
    }
  }, [])

  const handleExportPPT = useCallback(async () => {
    const pptx = new pptxgen()
    pptx.layout = 'LAYOUT_16x9'
    pptx.title = 'PolicyEngine POSE Presentation'
    pptx.author = 'PolicyEngine'

    // Colors
    const teal = '319795'
    const purple = '7C3AED'
    const blue = '2563EB'
    const orange = 'EA580C'
    const green = '16A34A'

    // Slide 1: Team
    const slide1 = pptx.addSlide()
    slide1.addText('PolicyEngine POSE Team', {
      x: 0.5,
      y: 0.5,
      w: '90%',
      fontSize: 36,
      bold: true,
      color: '1F2937',
    })

    const teamData = [
      { name: 'Max Ghenis', role: 'CEO', bio: 'Founded UBI Center, MIT M.S. Development Economics, former Google' },
      { name: 'Pavel Makarchuk', role: 'Chief of Staff', bio: 'Operations and strategy lead' },
      { name: 'Daniel Feenberg', role: 'Advisor', bio: 'Former IT Director at NBER, created TAXSIM, Princeton Ph.D.' },
    ]

    teamData.forEach((member, i) => {
      const xPos = 0.5 + i * 3.3
      slide1.addText(member.name, { x: xPos, y: 2.0, w: 3, fontSize: 18, bold: true, color: '1F2937', align: 'center' })
      slide1.addText(member.role, { x: xPos, y: 2.5, w: 3, fontSize: 14, color: teal, align: 'center' })
      slide1.addText(member.bio, { x: xPos, y: 3.0, w: 3, fontSize: 10, color: '6B7280', align: 'center' })
    })

    // Slide 2: Thesis
    const slide2 = pptx.addSlide()
    slide2.addText('Thesis', { x: 0.5, y: 0.5, w: '90%', fontSize: 36, bold: true, color: '1F2937' })
    slide2.addText(
      'We believe that policy researchers, journalists, and advocates will use PolicyEngine\'s open-source microsimulation tools to analyze tax and benefit policy impacts because it democratizes access to rigorous economic modeling previously available only to government agencies and elite institutions.',
      { x: 0.5, y: 1.5, w: 9, h: 2, fontSize: 18, color: '374151', valign: 'middle' }
    )

    const thesisBoxes = [
      { label: 'Target stakeholders', value: 'Researchers, journalists, advocates', color: teal },
      { label: 'Product/service', value: 'Open-source microsimulation tools', color: purple },
      { label: 'Goal', value: 'Analyze policy impacts', color: blue },
      { label: 'Value proposition', value: 'Democratized economic modeling', color: orange },
    ]
    thesisBoxes.forEach((box, i) => {
      const xPos = 0.5 + i * 2.4
      slide2.addShape('rect', { x: xPos, y: 4, w: 2.2, h: 1, fill: { color: box.color, transparency: 90 }, line: { color: box.color } })
      slide2.addText(box.label, { x: xPos, y: 4.1, w: 2.2, fontSize: 10, bold: true, color: box.color, align: 'center' })
      slide2.addText(box.value, { x: xPos, y: 4.4, w: 2.2, fontSize: 9, color: box.color, align: 'center' })
    })

    // Slide 3: Assumptions
    const slide3 = pptx.addSlide()
    slide3.addText('Assumptions', { x: 0.5, y: 0.5, w: '90%', fontSize: 36, bold: true, color: '1F2937' })

    const assumptions = [
      { segment: 'Users', assumption: 'Policy researchers want accessible tools that don\'t require programming expertise to run sophisticated microsimulations', color: teal },
      { segment: 'Supporters', assumption: 'Funders value transparency and reproducibility enough to fund open-source policy tools over proprietary alternatives', color: purple },
      { segment: 'Contributors', assumption: 'The open-source model can attract and retain technical talent who want policy impact without requiring competitive salaries', color: blue },
    ]
    assumptions.forEach((item, i) => {
      const yPos = 1.5 + i * 1.4
      slide3.addShape('rect', { x: 0.5, y: yPos, w: 9, h: 1.2, fill: { color: item.color, transparency: 90 }, line: { color: item.color } })
      slide3.addText(item.segment, { x: 0.7, y: yPos + 0.1, w: 2, fontSize: 14, bold: true, color: item.color })
      slide3.addText(item.assumption, { x: 0.7, y: yPos + 0.5, w: 8.5, fontSize: 11, color: item.color })
    })

    // Slide 4: Interview Log
    const slide4 = pptx.addSlide()
    slide4.addText('Interview log', { x: 0.5, y: 0.5, w: '90%', fontSize: 36, bold: true, color: '1F2937' })
    slide4.addText('View full interview tracker', { x: 0.5, y: 2, w: 9, fontSize: 24, bold: true, color: '1F2937', align: 'center' })
    slide4.addText(
      'Track all ecosystem discovery interviews, progress toward 100 interviews, and segment coverage.\n\nNavigate to the Interviews tab to access the full interview tracker with search, filtering, and analytics.',
      { x: 1, y: 2.8, w: 8, fontSize: 14, color: '6B7280', align: 'center' }
    )

    // Slide 5: Goals and Charter
    const slide5 = pptx.addSlide()
    slide5.addText('Team goals and charter', { x: 0.5, y: 0.5, w: '90%', fontSize: 36, bold: true, color: '1F2937' })

    slide5.addText('Goals', { x: 0.5, y: 1.2, w: 4, fontSize: 18, bold: true, color: '1F2937' })
    const goals = [
      'Complete 100 ecosystem discovery interviews across all 6 stakeholder segments',
      'Identify 3+ sustainable funding models beyond traditional grants',
      'Establish partnerships with 5+ policy think tanks and media organizations',
      'Develop community governance structure with clear decision rights',
    ]
    goals.forEach((goal, i) => {
      slide5.addShape('rect', { x: 0.5, y: 1.7 + i * 0.7, w: 4.5, h: 0.6, fill: { color: green, transparency: 90 }, line: { color: green } })
      slide5.addText(`${i + 1}. ${goal}`, { x: 0.6, y: 1.8 + i * 0.7, w: 4.3, fontSize: 9, color: green })
    })

    slide5.addText('Working agreements', { x: 5.2, y: 1.2, w: 4, fontSize: 18, bold: true, color: '1F2937' })
    const agreements = [
      'Weekly team sync (Mondays)',
      '24-hour response time on Slack',
      'Share interview notes within 24 hours',
      'Consensus on strategic decisions, CEO decides operational matters',
    ]
    agreements.forEach((agreement, i) => {
      slide5.addShape('rect', { x: 5.2, y: 1.7 + i * 0.7, w: 4.5, h: 0.6, fill: { color: teal, transparency: 90 }, line: { color: teal } })
      slide5.addText(`• ${agreement}`, { x: 5.3, y: 1.8 + i * 0.7, w: 4.3, fontSize: 9, color: teal })
    })

    // Generate and download
    await pptx.writeFile({ fileName: 'PolicyEngine_POSE_Presentation.pptx' })
  }, [])

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault()
        nextSlide()
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault()
        prevSlide()
      } else if (e.key === 'Escape' && isFullscreen) {
        setIsFullscreen(false)
      } else if (e.key === 'f' || e.key === 'F') {
        toggleFullscreen()
      } else if (e.key === 'd' || e.key === 'D') {
        handleExportPPT()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [nextSlide, prevSlide, isFullscreen, toggleFullscreen, handleExportPPT])

  // Listen for fullscreen changes
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement)
    }

    document.addEventListener('fullscreenchange', handleFullscreenChange)
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange)
  }, [])

  const CurrentSlideComponent = slides[currentSlide].component

  return (
    <div className={`${isFullscreen ? 'fixed inset-0 z-50 bg-white' : ''}`}>
      {/* Slide thumbnail navigation */}
      {!isFullscreen && (
        <div className="mb-4 flex gap-2 overflow-x-auto pb-2">
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              onClick={() => goToSlide(index)}
              className={`flex-shrink-0 px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                currentSlide === index
                  ? 'bg-teal-600 text-white shadow-md'
                  : 'bg-white text-gray-600 border border-gray-200 hover:border-teal-300 hover:text-teal-600'
              }`}
            >
              {index + 1}. {slide.title}
            </button>
          ))}
        </div>
      )}

      {/* Main slide area */}
      <div
        className={`bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden ${
          isFullscreen ? 'h-screen' : 'aspect-[16/9]'
        }`}
      >
        <div className="h-full flex flex-col">
          {/* Slide content */}
          <div className="flex-1 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.2 }}
                className="h-full"
              >
                <CurrentSlideComponent isFullscreen={isFullscreen} />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className={`border-t border-gray-200 bg-gray-50 flex items-center justify-between ${isFullscreen ? 'px-8 py-4' : 'px-4 py-3'}`}>
            <div className="flex items-center gap-2">
              <button
                onClick={prevSlide}
                disabled={currentSlide === 0}
                className={`p-2 rounded-lg transition-colors ${
                  currentSlide === 0
                    ? 'text-gray-300 cursor-not-allowed'
                    : 'text-gray-600 hover:bg-gray-200 hover:text-gray-900'
                }`}
              >
                <ChevronLeft className={isFullscreen ? 'w-8 h-8' : 'w-5 h-5'} />
              </button>
              <span className={`text-gray-600 font-medium ${isFullscreen ? 'text-xl' : 'text-sm'}`}>
                {currentSlide + 1} / {slides.length}
              </span>
              <button
                onClick={nextSlide}
                disabled={currentSlide === slides.length - 1}
                className={`p-2 rounded-lg transition-colors ${
                  currentSlide === slides.length - 1
                    ? 'text-gray-300 cursor-not-allowed'
                    : 'text-gray-600 hover:bg-gray-200 hover:text-gray-900'
                }`}
              >
                <ChevronRight className={isFullscreen ? 'w-8 h-8' : 'w-5 h-5'} />
              </button>
            </div>

            <div className="flex items-center gap-2">
              {/* Slide dots */}
              <div className="flex items-center gap-1 mr-4">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`rounded-full transition-all ${
                      currentSlide === index
                        ? 'bg-teal-500 w-3 h-3'
                        : 'bg-gray-300 hover:bg-gray-400 w-2 h-2'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={handleExportPPT}
                className={`p-2 rounded-lg text-gray-600 hover:bg-gray-200 hover:text-gray-900 transition-colors`}
                title="Download PPT (D)"
              >
                <Download className={isFullscreen ? 'w-6 h-6' : 'w-5 h-5'} />
              </button>

              <button
                onClick={toggleFullscreen}
                className={`p-2 rounded-lg text-gray-600 hover:bg-gray-200 hover:text-gray-900 transition-colors ${isFullscreen ? 'text-lg' : ''}`}
                title={isFullscreen ? 'Exit fullscreen (F)' : 'Enter fullscreen (F)'}
              >
                {isFullscreen ? (
                  <Minimize2 className={isFullscreen ? 'w-6 h-6' : 'w-5 h-5'} />
                ) : (
                  <Maximize2 className={isFullscreen ? 'w-6 h-6' : 'w-5 h-5'} />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Keyboard hints */}
      {!isFullscreen && (
        <p className="mt-3 text-center text-xs text-gray-400">
          Use arrow keys to navigate, F for fullscreen, D to download PPT
        </p>
      )}
    </div>
  )
}
