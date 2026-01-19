import { motion, AnimatePresence } from 'framer-motion'
import {
  Lightbulb,
  MessageSquare,
  Target,
  ChevronDown,
  ChevronUp,
  Users,
  Heart,
  Code,
  Swords,
  Building,
  Handshake
} from 'lucide-react'
import { useState } from 'react'
import type { Segment } from '../types/database'

interface InterviewGuidanceProps {
  segment: Segment
  collapsed?: boolean
}

interface GuidanceContent {
  icon: React.ElementType
  questions: string[]
  tips: string[]
  topics: string[]
}

// Segment-specific guidance content for PolicyEngine POSE interviews
const GUIDANCE_BY_SEGMENT: Record<Segment, GuidanceContent> = {
  user: {
    icon: Users,
    questions: [
      "How did you first discover PolicyEngine, and what prompted you to try it?",
      "Walk me through a recent policy analysis you conducted with PolicyEngine.",
      "What's the most valuable insight PolicyEngine has helped you uncover?",
      "What tasks do you wish PolicyEngine could do that it can't today?",
      "How does PolicyEngine compare to your previous approach to policy analysis?",
      "Who else at your organization uses PolicyEngine, and how do you share findings?",
      "What would make you recommend PolicyEngine to a colleague?",
      "If PolicyEngine disappeared tomorrow, what would you use instead?",
    ],
    tips: [
      "Focus on specific use cases and real projects, not hypotheticals",
      "Ask for screen sharing to see their actual workflow",
      "Probe on pain points - what's frustrating, confusing, or missing?",
      "Understand their policy expertise level vs. technical comfort",
      "Ask about the decision-making context: who receives their analysis?",
    ],
    topics: [
      "Current workflow and frequency of use",
      "Primary policy areas of interest (tax, benefits, etc.)",
      "Technical skill level and data literacy",
      "Organizational context and stakeholder needs",
      "Alternative tools considered or previously used",
    ],
  },
  supporter: {
    icon: Heart,
    questions: [
      "What originally drew you to support PolicyEngine's mission?",
      "How do you measure the impact of tools like PolicyEngine in the policy space?",
      "What would make you increase your investment or advocacy for PolicyEngine?",
      "Who else in your network should know about PolicyEngine?",
      "What concerns, if any, do you have about PolicyEngine's sustainability?",
      "How does PolicyEngine fit into the broader ecosystem of policy analysis tools you fund/support?",
      "What would success look like for PolicyEngine in 3-5 years?",
      "What risks do you see to PolicyEngine achieving its potential impact?",
    ],
    tips: [
      "Understand their theory of change and how PE fits in",
      "Learn about their other investments in the policy tech space",
      "Explore what metrics matter most to them",
      "Ask about their network and potential introductions",
      "Be transparent about sustainability challenges and plans",
    ],
    topics: [
      "Funding priorities and decision criteria",
      "Impact measurement frameworks",
      "Policy reform priorities they care about",
      "Other organizations in their portfolio",
      "Long-term vision for evidence-based policy",
    ],
  },
  contributor: {
    icon: Code,
    questions: [
      "What motivated you to contribute to PolicyEngine?",
      "What's been the most rewarding part of contributing? The most frustrating?",
      "How did you learn the codebase? What documentation helped (or was missing)?",
      "What features or improvements would you like to work on next?",
      "How does contributing to PolicyEngine fit into your broader career goals?",
      "What would help you contribute more frequently or effectively?",
      "How do you explain PolicyEngine to other developers?",
      "What's your experience with the community and code review process?",
    ],
    tips: [
      "Distinguish between code contributors vs. data/parameter contributors",
      "Understand their technical background and interests",
      "Explore both intrinsic motivation and practical benefits",
      "Ask about onboarding experience and documentation gaps",
      "Discuss what recognition or support would be meaningful",
    ],
    topics: [
      "Technical skills and areas of expertise",
      "Time availability and contribution patterns",
      "Experience with open source communities",
      "Interest in governance and decision-making",
      "Career stage and professional context",
    ],
  },
  competitor: {
    icon: Swords,
    questions: [
      "How do you see PolicyEngine positioning in the policy analysis market?",
      "What do you think PolicyEngine does particularly well? Where does it fall short?",
      "How do users typically choose between your tool and PolicyEngine?",
      "What trends do you see in policy analysis and microsimulation?",
      "Where do you see potential for collaboration rather than competition?",
      "What user needs do you think are underserved in this space?",
      "How do you approach sustainability as an organization?",
      "What would the ideal policy analysis ecosystem look like?",
    ],
    tips: [
      "Frame as ecosystem mapping, not competitive intelligence",
      "Be genuinely curious about their approach and innovations",
      "Explore potential partnerships and complementary strengths",
      "Understand their funding model and sustainability approach",
      "Ask what they've learned from their users",
    ],
    topics: [
      "Market positioning and target users",
      "Technical approaches and differentiators",
      "Business model and sustainability strategy",
      "Potential collaboration opportunities",
      "Shared challenges in the policy tech space",
    ],
  },
  distributor: {
    icon: Building,
    questions: [
      "How did you discover PolicyEngine, and what led you to embed it?",
      "Walk me through your integration: what worked well and what was challenging?",
      "How do your users interact with PolicyEngine features? What feedback do you hear?",
      "What PolicyEngine improvements would most benefit your users?",
      "How does PolicyEngine fit into your broader product strategy?",
      "What would make you expand or deepen your PolicyEngine integration?",
      "How do you handle updates and changes to PolicyEngine?",
      "What concerns do you have about depending on PolicyEngine?",
    ],
    tips: [
      "Understand their business model and how PE creates value for them",
      "Explore technical integration challenges and API needs",
      "Learn about their end users and use cases",
      "Discuss what stability and support they need",
      "Ask about white-labeling, customization, or premium needs",
    ],
    topics: [
      "Integration architecture and technical requirements",
      "End user profiles and use cases",
      "Business model and value proposition",
      "Support and SLA expectations",
      "Roadmap alignment and feature priorities",
    ],
  },
  partner: {
    icon: Handshake,
    questions: [
      "How did the partnership with PolicyEngine come about?",
      "What value does the integration create for your users?",
      "What's been most successful about the partnership? What could improve?",
      "How do your users discover and use the PolicyEngine integration?",
      "What features or data would make the integration more valuable?",
      "How do you see the partnership evolving over time?",
      "What other integrations or partnerships inform how you think about this one?",
      "What would a deeper partnership with PolicyEngine look like?",
    ],
    tips: [
      "Map the data flows and touchpoints between systems",
      "Understand mutual benefits and value creation",
      "Explore both technical and business relationship aspects",
      "Ask about their other partnerships for comparison",
      "Discuss governance and decision-making on joint features",
    ],
    topics: [
      "Integration points and data exchange",
      "Mutual user base and use cases",
      "Joint go-to-market opportunities",
      "Technical roadmap alignment",
      "Partnership governance and communication",
    ],
  },
}

const SEGMENT_LABELS: Record<Segment, string> = {
  user: 'Users',
  supporter: 'Supporters',
  contributor: 'Contributors',
  competitor: 'Competitors',
  distributor: 'Distributors',
  partner: 'Partners',
}

export function InterviewGuidance({ segment, collapsed: initialCollapsed = false }: InterviewGuidanceProps) {
  const [isExpanded, setIsExpanded] = useState(!initialCollapsed)
  const [activeTab, setActiveTab] = useState<'questions' | 'tips' | 'topics'>('questions')

  const guidance = GUIDANCE_BY_SEGMENT[segment]
  const Icon = guidance.icon

  return (
    <div className="bg-gradient-to-br from-teal-50 to-white border border-teal-200 rounded-xl overflow-hidden">
      {/* Header */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex items-center justify-between px-4 py-3 hover:bg-teal-50/50 transition-colors"
      >
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-teal-500 rounded-lg flex items-center justify-center">
            <Lightbulb className="w-4 h-4 text-white" />
          </div>
          <div className="text-left">
            <h3 className="text-sm font-semibold text-gray-900">Interview guidance</h3>
            <p className="text-xs text-gray-500">
              {SEGMENT_LABELS[segment]} interview prep
            </p>
          </div>
        </div>
        {isExpanded ? (
          <ChevronUp className="w-5 h-5 text-gray-400" />
        ) : (
          <ChevronDown className="w-5 h-5 text-gray-400" />
        )}
      </button>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {/* Segment indicator */}
            <div className="px-4 pb-3">
              <div className="flex items-center gap-2 px-3 py-2 bg-white rounded-lg border border-gray-200">
                <Icon className="w-4 h-4 text-teal-600" />
                <span className="text-sm font-medium text-gray-700">{SEGMENT_LABELS[segment]}</span>
                <span className="text-xs text-gray-500">segment</span>
              </div>
            </div>

            {/* Tabs */}
            <div className="px-4 flex gap-1 border-b border-teal-200">
              <button
                onClick={() => setActiveTab('questions')}
                className={`flex items-center gap-1.5 px-3 py-2 text-sm font-medium rounded-t-lg transition-colors ${
                  activeTab === 'questions'
                    ? 'bg-white text-teal-700 border border-teal-200 border-b-white -mb-px'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                <MessageSquare className="w-3.5 h-3.5" />
                Questions
              </button>
              <button
                onClick={() => setActiveTab('tips')}
                className={`flex items-center gap-1.5 px-3 py-2 text-sm font-medium rounded-t-lg transition-colors ${
                  activeTab === 'tips'
                    ? 'bg-white text-teal-700 border border-teal-200 border-b-white -mb-px'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                <Lightbulb className="w-3.5 h-3.5" />
                Tips
              </button>
              <button
                onClick={() => setActiveTab('topics')}
                className={`flex items-center gap-1.5 px-3 py-2 text-sm font-medium rounded-t-lg transition-colors ${
                  activeTab === 'topics'
                    ? 'bg-white text-teal-700 border border-teal-200 border-b-white -mb-px'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                <Target className="w-3.5 h-3.5" />
                Topics
              </button>
            </div>

            {/* Content */}
            <div className="p-4 bg-white">
              <AnimatePresence mode="wait">
                {activeTab === 'questions' && (
                  <motion.div
                    key="questions"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.15 }}
                  >
                    <p className="text-xs text-gray-500 mb-3">
                      Discovery questions for {SEGMENT_LABELS[segment].toLowerCase()}:
                    </p>
                    <ul className="space-y-2">
                      {guidance.questions.map((question, index) => (
                        <li key={index} className="flex gap-2 text-sm text-gray-700">
                          <span className="flex-shrink-0 w-5 h-5 bg-teal-100 text-teal-700 rounded-full flex items-center justify-center text-xs font-medium">
                            {index + 1}
                          </span>
                          <span>{question}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}

                {activeTab === 'tips' && (
                  <motion.div
                    key="tips"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.15 }}
                  >
                    <p className="text-xs text-gray-500 mb-3">
                      Interview approach for {SEGMENT_LABELS[segment].toLowerCase()}:
                    </p>
                    <ul className="space-y-2">
                      {guidance.tips.map((tip, index) => (
                        <li key={index} className="flex gap-2 text-sm text-gray-700">
                          <Lightbulb className="flex-shrink-0 w-4 h-4 text-amber-500 mt-0.5" />
                          <span>{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}

                {activeTab === 'topics' && (
                  <motion.div
                    key="topics"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.15 }}
                  >
                    <p className="text-xs text-gray-500 mb-3">
                      Key areas to explore with {SEGMENT_LABELS[segment].toLowerCase()}:
                    </p>
                    <ul className="space-y-2">
                      {guidance.topics.map((topic, index) => (
                        <li key={index} className="flex gap-2 text-sm text-gray-700">
                          <Target className="flex-shrink-0 w-4 h-4 text-teal-500 mt-0.5" />
                          <span>{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Footer */}
            <div className="px-4 py-3 bg-gray-50 border-t border-gray-200">
              <p className="text-xs text-gray-500 text-center">
                Customize questions based on the specific context and relationship
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
