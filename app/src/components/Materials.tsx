import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Search,
  BookOpen,
  Video,
  FileText,
  Calendar,
  ExternalLink,
  ChevronDown,
  ChevronRight,
  Download,
  Presentation,
  Table2,
} from 'lucide-react'

// Types for materials
interface Material {
  id: string
  title: string
  description?: string
  type: 'document' | 'video' | 'pdf' | 'slides' | 'spreadsheet' | 'guide'
  category: string
  url?: string
  localPath?: string
  duration?: string
}

interface MaterialCategory {
  id: string
  name: string
  description: string
  materials: Material[]
}

// Material data based on the NovoEd course content
const materialCategories: MaterialCategory[] = [
  {
    id: 'overview',
    name: 'Program overview',
    description: 'Introduction and course structure',
    materials: [
      {
        id: 'program-overview',
        title: 'Program overview',
        description: 'Course structure, requirements, and deliverables',
        type: 'document',
        category: 'overview',
        url: 'https://venturewell.novoed.com/#!/courses/i-corps_pose_winter_2026/lecture_pages/3858780',
      },
      {
        id: 'schedule',
        title: 'Course schedule',
        description: 'Complete timeline from January to March 2026',
        type: 'document',
        category: 'overview',
        url: 'https://venturewell.novoed.com/#!/courses/i-corps_pose_winter_2026/lecture_pages/3858780',
      },
      {
        id: 'interview-guide',
        title: 'Interview guide',
        description: 'Best practices for ecosystem discovery interviews',
        type: 'guide',
        category: 'overview',
      },
    ],
  },
  {
    id: 'sessions',
    name: 'Session materials',
    description: 'Kickoff, weekly sessions, and finale content',
    materials: [
      {
        id: 'pre-program',
        title: 'Pre-program orientation',
        description: 'January 6, 2026 - Program introduction and expectations',
        type: 'document',
        category: 'sessions',
        url: 'https://venturewell.novoed.com/#!/courses/i-corps_pose_winter_2026/lecture_pages/3858789',
      },
      {
        id: 'kickoff-day-1',
        title: 'Kickoff Day 1',
        description: 'January 20 - Introductions and ecosystem discovery lecture',
        type: 'document',
        category: 'sessions',
        url: 'https://venturewell.novoed.com/#!/courses/i-corps_pose_winter_2026/lecture_pages/3858791',
      },
      {
        id: 'kickoff-day-2',
        title: 'Kickoff Day 2',
        description: 'January 21 - Panel discussion and ecosystem canvas',
        type: 'document',
        category: 'sessions',
        url: 'https://venturewell.novoed.com/#!/courses/i-corps_pose_winter_2026/lecture_pages/3858794',
      },
      {
        id: 'kickoff-day-3',
        title: 'Kickoff Day 3',
        description: 'January 22 - Value propositions and ecosystem mapping',
        type: 'document',
        category: 'sessions',
        url: 'https://venturewell.novoed.com/#!/courses/i-corps_pose_winter_2026/lecture_pages/3858797',
      },
      {
        id: 'kickoff-day-4',
        title: 'Kickoff Day 4',
        description: 'January 23 - Team presentations and impact metrics',
        type: 'document',
        category: 'sessions',
        url: 'https://venturewell.novoed.com/#!/courses/i-corps_pose_winter_2026/lecture_pages/3858800',
      },
      {
        id: 'weekly-1',
        title: 'Weekly session 1',
        description: 'January 28 - First progress presentations',
        type: 'document',
        category: 'sessions',
        url: 'https://venturewell.novoed.com/#!/courses/i-corps_pose_winter_2026/lecture_pages/3858803',
      },
      {
        id: 'weekly-2',
        title: 'Weekly session 2',
        description: 'February 4 - Continued ecosystem discovery',
        type: 'document',
        category: 'sessions',
        url: 'https://venturewell.novoed.com/#!/courses/i-corps_pose_winter_2026/lecture_pages/3858806',
      },
      {
        id: 'weekly-3',
        title: 'Weekly session 3',
        description: 'February 11 - Mid-program check-in',
        type: 'document',
        category: 'sessions',
        url: 'https://venturewell.novoed.com/#!/courses/i-corps_pose_winter_2026/lecture_pages/3858809',
      },
      {
        id: 'weekly-4',
        title: 'Weekly session 4',
        description: 'February 18 - Advanced ecosystem insights',
        type: 'document',
        category: 'sessions',
        url: 'https://venturewell.novoed.com/#!/courses/i-corps_pose_winter_2026/lecture_pages/3858812',
      },
      {
        id: 'weekly-5',
        title: 'Weekly session 5',
        description: 'February 25 - Final preparation',
        type: 'document',
        category: 'sessions',
        url: 'https://venturewell.novoed.com/#!/courses/i-corps_pose_winter_2026/lecture_pages/3858815',
      },
      {
        id: 'finale-1',
        title: 'Finale session 1',
        description: 'March 4 - Final presentations and discussions',
        type: 'document',
        category: 'sessions',
        url: 'https://venturewell.novoed.com/#!/courses/i-corps_pose_winter_2026/lecture_pages/3858818',
      },
      {
        id: 'finale-2',
        title: 'Finale session 2',
        description: 'March 5 - Closing presentations and next steps',
        type: 'document',
        category: 'sessions',
        url: 'https://venturewell.novoed.com/#!/courses/i-corps_pose_winter_2026/lecture_pages/3858820',
      },
    ],
  },
  {
    id: 'templates',
    name: 'Templates',
    description: 'Slide decks and spreadsheet templates',
    materials: [
      {
        id: 'team-template',
        title: 'Team slide template',
        description: 'Introduce your team and roles',
        type: 'slides',
        category: 'templates',
        url: 'https://docs.google.com/presentation/d/1mYxhA_6Ff8NRVDxER-IBLxP897-Oq5uzwL8iO05K6pQ',
      },
      {
        id: 'thesis-template',
        title: 'Thesis template',
        description: 'Document your ecosystem thesis',
        type: 'slides',
        category: 'templates',
        url: 'https://docs.google.com/presentation/d/1WIlRJgz7WC6i6zhIa0BjL9P_MyGiWyHNS3ZcQBvaH2o',
      },
      {
        id: 'assumptions-template',
        title: 'Assumptions template',
        description: 'Track and test your assumptions',
        type: 'slides',
        category: 'templates',
        url: 'https://docs.google.com/presentation/d/1yz5t5B6GxPQlvY-idIQuFsbkv9i2CvAcJyxxDIi44IE',
      },
      {
        id: 'interview-records-template',
        title: 'Interview records template',
        description: 'Document individual interviews',
        type: 'slides',
        category: 'templates',
        url: 'https://docs.google.com/presentation/d/1nKPCgZ8B0Sg1SJpvoc5DZJY6WBRiKZkzp6A1oKDOi08',
      },
      {
        id: 'interview-summary-template',
        title: 'Interview summary template',
        description: 'Summarize interview insights',
        type: 'slides',
        category: 'templates',
        url: 'https://docs.google.com/presentation/d/1SEPSsrLJNZkW_SOYC_DKYR0uZzKGiwVJoyy2LTN711k',
      },
      {
        id: 'ecosystem-template',
        title: 'Ecosystem template',
        description: 'Map your ecosystem components',
        type: 'slides',
        category: 'templates',
        url: 'https://docs.google.com/presentation/d/1_S9FLohf7JqoeBfrpB3UIgLraAckxAsy9ia0Mp8xVhM',
      },
      {
        id: 'canvas-template',
        title: 'Open source ecosystem canvas',
        description: 'Visual framework for ecosystem strategy',
        type: 'slides',
        category: 'templates',
        url: 'https://docs.google.com/presentation/d/1B5x6T1_uZiyMU4_NvEh1r6ykfSJddBgtN9dKZXoKdo8',
      },
      {
        id: 'impact-template',
        title: 'Impact template',
        description: 'Define and measure impact metrics',
        type: 'slides',
        category: 'templates',
        url: 'https://docs.google.com/presentation/d/1Gym5ZTMYpj6Sp4SiCxrTrj9mI_y4xJiHb7wzTcQeLnE',
      },
      {
        id: 'governance-template',
        title: 'Governance template',
        description: 'Document governance structure',
        type: 'slides',
        category: 'templates',
        url: 'https://docs.google.com/presentation/d/1jiHABTcFV-yh3YhiwKoyVTsaVTkNLcV8oydcKULyofY',
      },
      {
        id: 'sustainability-template',
        title: 'Sustainability template',
        description: 'Plan for long-term sustainability',
        type: 'slides',
        category: 'templates',
        url: 'https://docs.google.com/presentation/d/12ZJRQLM1ur3cuLa_R-D-ehOpdKCy-7LKngyj4yH5AyU',
      },
      {
        id: 'partnerships-template',
        title: 'Partnerships template',
        description: 'Track potential partnerships',
        type: 'slides',
        category: 'templates',
        url: 'https://docs.google.com/presentation/d/1PUcYvlRcdyaciDVl-7ij0hUtD54D3XFTS03hsvPy9Rs',
      },
      {
        id: 'interview-log-sheet',
        title: 'Interview log spreadsheet',
        description: 'Track all interviews in a spreadsheet',
        type: 'spreadsheet',
        category: 'templates',
        url: 'https://docs.google.com/spreadsheets/d/14SS1vWtQD2htIDg24idy4p6XpTmtsMnA7Pv0dE5-IRI',
      },
      {
        id: 'timeline-sheet',
        title: 'Timeline spreadsheet',
        description: 'Plan your interview schedule',
        type: 'spreadsheet',
        category: 'templates',
        url: 'https://docs.google.com/spreadsheets/d/1NTkBzpVktIxrezeuob9mR49v_DLfKaffSFHPaPjF5-U',
      },
    ],
  },
  {
    id: 'videos',
    name: 'Training videos',
    description: 'I-Corps methodology and business model canvas',
    materials: [
      {
        id: 'entrepreneurship-1',
        title: 'Entrepreneurship - Part 1',
        type: 'video',
        category: 'videos',
        duration: '12 mins',
        url: 'https://venturewell.novoed.com/#!/courses/i-corps_pose_winter_2026/lecture_pages/3858788',
      },
      {
        id: 'entrepreneurship-2',
        title: 'Entrepreneurship - Part 2',
        type: 'video',
        category: 'videos',
        duration: '10 mins',
        url: 'https://venturewell.novoed.com/#!/courses/i-corps_pose_winter_2026/lecture_pages/3858788',
      },
      {
        id: 'canvas-right',
        title: 'The right side of the canvas',
        type: 'video',
        category: 'videos',
        duration: '4 mins',
        url: 'https://venturewell.novoed.com/#!/courses/i-corps_pose_winter_2026/lecture_pages/3858788',
      },
      {
        id: 'canvas-left',
        title: 'The left side of the canvas',
        type: 'video',
        category: 'videos',
        duration: '2 mins',
        url: 'https://venturewell.novoed.com/#!/courses/i-corps_pose_winter_2026/lecture_pages/3858788',
      },
      {
        id: 'market-sizing',
        title: 'Market sizing',
        type: 'video',
        category: 'videos',
        duration: '6 mins',
        url: 'https://venturewell.novoed.com/#!/courses/i-corps_pose_winter_2026/lecture_pages/3858788',
      },
      {
        id: 'customer-discovery-intro',
        title: 'Customer discovery - Introduction',
        type: 'video',
        category: 'videos',
        duration: '11 mins',
        url: 'https://venturewell.novoed.com/#!/courses/i-corps_pose_winter_2026/lecture_pages/3858788',
      },
      {
        id: 'customer-discovery-strategies',
        title: 'Customer discovery - Interview strategies',
        type: 'video',
        category: 'videos',
        duration: '10 mins',
        url: 'https://venturewell.novoed.com/#!/courses/i-corps_pose_winter_2026/lecture_pages/3858788',
      },
      {
        id: 'customer-discovery-tactics',
        title: 'Customer discovery - Interview tactics',
        type: 'video',
        category: 'videos',
        duration: '10 mins',
        url: 'https://venturewell.novoed.com/#!/courses/i-corps_pose_winter_2026/lecture_pages/3858788',
      },
      {
        id: 'customer-discovery-outreach',
        title: 'Customer discovery - Outreach',
        type: 'video',
        category: 'videos',
        duration: '7 mins',
        url: 'https://venturewell.novoed.com/#!/courses/i-corps_pose_winter_2026/lecture_pages/3858788',
      },
      {
        id: 'customer-discovery-analysis',
        title: 'Customer discovery - Analysis and evaluation',
        type: 'video',
        category: 'videos',
        duration: '10 mins',
        url: 'https://venturewell.novoed.com/#!/courses/i-corps_pose_winter_2026/lecture_pages/3858788',
      },
      {
        id: 'value-props-needs',
        title: 'Value propositions - Customer needs and jobs',
        type: 'video',
        category: 'videos',
        duration: '9 mins',
        url: 'https://venturewell.novoed.com/#!/courses/i-corps_pose_winter_2026/lecture_pages/3858788',
      },
      {
        id: 'value-props-context',
        title: 'Value propositions - Context drives criteria',
        type: 'video',
        category: 'videos',
        duration: '3 mins',
        url: 'https://venturewell.novoed.com/#!/courses/i-corps_pose_winter_2026/lecture_pages/3858788',
      },
      {
        id: 'value-props-testing',
        title: 'Value propositions - Testing propositions',
        type: 'video',
        category: 'videos',
        duration: '13 mins',
        url: 'https://venturewell.novoed.com/#!/courses/i-corps_pose_winter_2026/lecture_pages/3858788',
      },
      {
        id: 'customer-segments-1',
        title: 'Customer segments - Part 1',
        type: 'video',
        category: 'videos',
        duration: '14 mins',
        url: 'https://venturewell.novoed.com/#!/courses/i-corps_pose_winter_2026/lecture_pages/3858788',
      },
      {
        id: 'customer-segments-2',
        title: 'Customer segments - Part 2',
        type: 'video',
        category: 'videos',
        duration: '8 mins',
        url: 'https://venturewell.novoed.com/#!/courses/i-corps_pose_winter_2026/lecture_pages/3858788',
      },
      {
        id: 'customer-segments-3',
        title: 'Customer segments - Part 3',
        type: 'video',
        category: 'videos',
        duration: '8 mins',
        url: 'https://venturewell.novoed.com/#!/courses/i-corps_pose_winter_2026/lecture_pages/3858788',
      },
      {
        id: 'channels-intro',
        title: 'Channels - Introduction',
        type: 'video',
        category: 'videos',
        duration: '10 mins',
        url: 'https://venturewell.novoed.com/#!/courses/i-corps_pose_winter_2026/lecture_pages/3858788',
      },
      {
        id: 'channels-economics',
        title: 'Channels - Channel economics',
        type: 'video',
        category: 'videos',
        duration: '8 mins',
        url: 'https://venturewell.novoed.com/#!/courses/i-corps_pose_winter_2026/lecture_pages/3858788',
      },
      {
        id: 'relationships-intro',
        title: 'Customer relationships - Introduction',
        type: 'video',
        category: 'videos',
        duration: '5 mins',
        url: 'https://venturewell.novoed.com/#!/courses/i-corps_pose_winter_2026/lecture_pages/3858788',
      },
      {
        id: 'relationships-get',
        title: 'Customer relationships - "Get" activities',
        type: 'video',
        category: 'videos',
        duration: '12 mins',
        url: 'https://venturewell.novoed.com/#!/courses/i-corps_pose_winter_2026/lecture_pages/3858788',
      },
      {
        id: 'relationships-keep-grow',
        title: 'Customer relationships - "Keep" and "Grow" activities',
        type: 'video',
        category: 'videos',
        duration: '5 mins',
        url: 'https://venturewell.novoed.com/#!/courses/i-corps_pose_winter_2026/lecture_pages/3858788',
      },
      {
        id: 'relationships-economics',
        title: 'Customer relationships - Economics CAC and LTV',
        type: 'video',
        category: 'videos',
        duration: '7 mins',
        url: 'https://venturewell.novoed.com/#!/courses/i-corps_pose_winter_2026/lecture_pages/3858788',
      },
      {
        id: 'revenue-pricing',
        title: 'Revenue streams - Pricing models',
        type: 'video',
        category: 'videos',
        duration: '12 mins',
        url: 'https://venturewell.novoed.com/#!/courses/i-corps_pose_winter_2026/lecture_pages/3858788',
      },
      {
        id: 'revenue-models',
        title: 'Revenue streams - Revenue models',
        type: 'video',
        category: 'videos',
        duration: '6 mins',
        url: 'https://venturewell.novoed.com/#!/courses/i-corps_pose_winter_2026/lecture_pages/3858788',
      },
      {
        id: 'partners-intro',
        title: 'Partners - Introduction',
        type: 'video',
        category: 'videos',
        duration: '7 mins',
        url: 'https://venturewell.novoed.com/#!/courses/i-corps_pose_winter_2026/lecture_pages/3858788',
      },
      {
        id: 'partners-types',
        title: 'Partners - Partnership types',
        type: 'video',
        category: 'videos',
        duration: '10 mins',
        url: 'https://venturewell.novoed.com/#!/courses/i-corps_pose_winter_2026/lecture_pages/3858788',
      },
      {
        id: 'partners-risks',
        title: 'Partners - Partnership risks',
        type: 'video',
        category: 'videos',
        duration: '8 mins',
        url: 'https://venturewell.novoed.com/#!/courses/i-corps_pose_winter_2026/lecture_pages/3858788',
      },
      {
        id: 'key-activities',
        title: 'Key activities',
        type: 'video',
        category: 'videos',
        duration: '15 mins',
        url: 'https://venturewell.novoed.com/#!/courses/i-corps_pose_winter_2026/lecture_pages/3858788',
      },
      {
        id: 'cost-structure',
        title: 'Cost structure',
        type: 'video',
        category: 'videos',
        duration: '8 mins',
        url: 'https://venturewell.novoed.com/#!/courses/i-corps_pose_winter_2026/lecture_pages/3858788',
      },
      {
        id: 'key-resources',
        title: 'Key resources',
        type: 'video',
        category: 'videos',
        duration: '10 mins',
        url: 'https://venturewell.novoed.com/#!/courses/i-corps_pose_winter_2026/lecture_pages/3858788',
      },
      {
        id: 'discovery-tools',
        title: 'Discovery tools',
        type: 'video',
        category: 'videos',
        duration: '7 mins',
        url: 'https://venturewell.novoed.com/#!/courses/i-corps_pose_winter_2026/lecture_pages/3858788',
      },
      {
        id: 'the-pivot',
        title: 'The pivot',
        type: 'video',
        category: 'videos',
        duration: '3 mins',
        url: 'https://venturewell.novoed.com/#!/courses/i-corps_pose_winter_2026/lecture_pages/3858788',
      },
    ],
  },
  {
    id: 'readings',
    name: 'Readings',
    description: 'Required books and supplementary resources',
    materials: [
      {
        id: 'book-talking-to-humans',
        title: 'Talking to Humans',
        description: 'Giff Constable and Frank Rimalovski - Required reading',
        type: 'document',
        category: 'readings',
      },
      {
        id: 'book-value-prop',
        title: 'Value Proposition Design',
        description: 'Osterwalder et al. - Required reading',
        type: 'document',
        category: 'readings',
      },
      {
        id: 'book-belonging',
        title: 'The Business of Belonging',
        description: 'David Spinks - Required reading',
        type: 'document',
        category: 'readings',
      },
      {
        id: 'pdf-harvard-governance',
        title: 'OSS Governance (Harvard)',
        description: 'Organization & structure of open source development initiatives',
        type: 'pdf',
        category: 'readings',
        localPath: '/materials/readings/harvard-oss-governance.pdf',
      },
      {
        id: 'pdf-mozilla-archetypes-v1',
        title: 'Open Source Archetypes v1',
        description: 'Mozilla & Open Tech Strategies report',
        type: 'pdf',
        category: 'readings',
        localPath: '/materials/readings/mozilla-oss-archetypes-v1.pdf',
      },
      {
        id: 'pdf-mozilla-archetypes-v2',
        title: 'Open Source Archetypes v2',
        description: 'Updated Mozilla archetypes report',
        type: 'pdf',
        category: 'readings',
        localPath: '/materials/readings/mozilla-oss-archetypes-v2.pdf',
      },
      {
        id: 'link-transaction-cost',
        title: 'Transaction cost perspective on open source',
        description: 'Baldwin & von Hippel (HBS)',
        type: 'document',
        category: 'readings',
        url: 'https://www.hbs.edu/faculty/Pages/item.aspx?num=36972',
      },
      {
        id: 'link-open-innovation',
        title: 'Open innovation, open data and new business models',
        description: 'ResearchGate publication',
        type: 'document',
        category: 'readings',
        url: 'https://www.researchgate.net/publication/280554903_Open_Innovation_Open_Data_and_new_Business_Models',
      },
      {
        id: 'link-scikit-governance',
        title: 'Scikit-image governance documentation',
        description: 'Example of project governance',
        type: 'document',
        category: 'readings',
        url: 'https://scikit-image.org/docs/stable/skips/1-governance.html',
      },
      {
        id: 'link-pysal-governance',
        title: 'PySAL governance',
        description: 'GitHub governance repository',
        type: 'document',
        category: 'readings',
        url: 'https://github.com/pysal/governance',
      },
      {
        id: 'link-community-rule',
        title: 'CommunityRule',
        description: 'Governance templates from CU Boulder',
        type: 'document',
        category: 'readings',
        url: 'https://communityrule.info/templates/',
      },
      {
        id: 'link-pyopensci',
        title: 'PyOpenSci',
        description: 'Open source for scientific software',
        type: 'document',
        category: 'readings',
        url: 'https://www.pyopensci.org/',
      },
    ],
  },
  {
    id: 'guides',
    name: 'Guides and references',
    description: 'Practical guides for the program',
    materials: [
      {
        id: 'team-charter',
        title: 'Team charter guide',
        description: 'Define team agreements and working norms',
        type: 'guide',
        category: 'guides',
      },
      {
        id: 'final-presentation',
        title: 'Final presentation guide',
        description: 'Guidelines for your finale presentation',
        type: 'guide',
        category: 'guides',
      },
    ],
  },
]

// Icon mapping
const typeIcons: Record<Material['type'], React.ElementType> = {
  document: FileText,
  video: Video,
  pdf: Download,
  slides: Presentation,
  spreadsheet: Table2,
  guide: BookOpen,
}

const typeColors: Record<Material['type'], string> = {
  document: 'bg-blue-100 text-blue-600',
  video: 'bg-red-100 text-red-600',
  pdf: 'bg-orange-100 text-orange-600',
  slides: 'bg-purple-100 text-purple-600',
  spreadsheet: 'bg-green-100 text-green-600',
  guide: 'bg-teal-100 text-teal-600',
}

interface MaterialCardProps {
  material: Material
}

function MaterialCard({ material }: MaterialCardProps) {
  const Icon = typeIcons[material.type]
  const colorClass = typeColors[material.type]

  return (
    <motion.a
      href={material.url || material.localPath || '#'}
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-white rounded-lg border border-gray-200 p-4 hover:border-teal-300 hover:shadow-md transition-all group"
      whileHover={{ y: -2 }}
    >
      <div className="flex items-start gap-3">
        <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${colorClass}`}>
          <Icon className="w-5 h-5" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <h3 className="font-medium text-gray-900 truncate group-hover:text-teal-600 transition-colors">
              {material.title}
            </h3>
            {(material.url || material.localPath) && (
              <ExternalLink className="w-4 h-4 text-gray-400 flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
            )}
          </div>
          {material.description && (
            <p className="text-sm text-gray-500 mt-1 line-clamp-2">{material.description}</p>
          )}
          {material.duration && (
            <p className="text-xs text-gray-400 mt-2 flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              {material.duration}
            </p>
          )}
        </div>
      </div>
    </motion.a>
  )
}

interface CategorySectionProps {
  category: MaterialCategory
  searchQuery: string
  expandedCategories: Set<string>
  onToggle: (id: string) => void
}

function CategorySection({ category, searchQuery, expandedCategories, onToggle }: CategorySectionProps) {
  const isExpanded = expandedCategories.has(category.id)

  const filteredMaterials = useMemo(() => {
    if (!searchQuery) return category.materials
    const query = searchQuery.toLowerCase()
    return category.materials.filter(
      (m) =>
        m.title.toLowerCase().includes(query) ||
        m.description?.toLowerCase().includes(query) ||
        m.type.toLowerCase().includes(query)
    )
  }, [category.materials, searchQuery])

  if (filteredMaterials.length === 0) return null

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="mb-6"
    >
      <button
        onClick={() => onToggle(category.id)}
        className="w-full flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors mb-3"
      >
        <div className="flex items-center gap-3">
          {isExpanded ? (
            <ChevronDown className="w-5 h-5 text-gray-400" />
          ) : (
            <ChevronRight className="w-5 h-5 text-gray-400" />
          )}
          <div className="text-left">
            <h2 className="font-semibold text-gray-900">{category.name}</h2>
            <p className="text-sm text-gray-500">{category.description}</p>
          </div>
        </div>
        <span className="text-sm text-gray-400 bg-white px-2 py-1 rounded-full">
          {filteredMaterials.length} item{filteredMaterials.length !== 1 ? 's' : ''}
        </span>
      </button>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pl-8">
              {filteredMaterials.map((material) => (
                <MaterialCard key={material.id} material={material} />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export function Materials() {
  const [searchQuery, setSearchQuery] = useState('')
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(
    new Set(materialCategories.map((c) => c.id))
  )
  const [selectedType, setSelectedType] = useState<Material['type'] | 'all'>('all')

  const toggleCategory = (id: string) => {
    setExpandedCategories((prev) => {
      const next = new Set(prev)
      if (next.has(id)) {
        next.delete(id)
      } else {
        next.add(id)
      }
      return next
    })
  }

  const filteredCategories = useMemo(() => {
    return materialCategories.map((category) => ({
      ...category,
      materials: category.materials.filter((m) => {
        if (selectedType !== 'all' && m.type !== selectedType) return false
        if (!searchQuery) return true
        const query = searchQuery.toLowerCase()
        return (
          m.title.toLowerCase().includes(query) ||
          m.description?.toLowerCase().includes(query)
        )
      }),
    })).filter((c) => c.materials.length > 0)
  }, [searchQuery, selectedType])

  const totalMaterials = materialCategories.reduce((acc, c) => acc + c.materials.length, 0)
  const filteredCount = filteredCategories.reduce((acc, c) => acc + c.materials.length, 0)

  const typeFilters: { value: Material['type'] | 'all'; label: string; Icon: React.ElementType }[] = [
    { value: 'all', label: 'All', Icon: BookOpen },
    { value: 'document', label: 'Documents', Icon: FileText },
    { value: 'video', label: 'Videos', Icon: Video },
    { value: 'slides', label: 'Slides', Icon: Presentation },
    { value: 'pdf', label: 'PDFs', Icon: Download },
    { value: 'spreadsheet', label: 'Spreadsheets', Icon: Table2 },
    { value: 'guide', label: 'Guides', Icon: BookOpen },
  ]

  return (
    <div>
      {/* Search and filters */}
      <div className="mb-6 space-y-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search materials..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
          />
        </div>

        <div className="flex flex-wrap gap-2">
          {typeFilters.map(({ value, label, Icon }) => (
            <button
              key={value}
              onClick={() => setSelectedType(value)}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
                selectedType === value
                  ? 'bg-teal-600 text-white'
                  : 'bg-white text-gray-600 border border-gray-200 hover:border-teal-300'
              }`}
            >
              <Icon className="w-4 h-4" />
              {label}
            </button>
          ))}
        </div>

        {searchQuery && (
          <p className="text-sm text-gray-500">
            Showing {filteredCount} of {totalMaterials} materials
          </p>
        )}
      </div>

      {/* Categories */}
      <div>
        {filteredCategories.map((category) => (
          <CategorySection
            key={category.id}
            category={category}
            searchQuery={searchQuery}
            expandedCategories={expandedCategories}
            onToggle={toggleCategory}
          />
        ))}

        {filteredCategories.length === 0 && (
          <div className="text-center py-12">
            <BookOpen className="w-12 h-12 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-500">No materials found matching your search.</p>
            <button
              onClick={() => {
                setSearchQuery('')
                setSelectedType('all')
              }}
              className="mt-2 text-teal-600 hover:text-teal-700 text-sm font-medium"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>

      {/* Course link */}
      <div className="mt-8 p-4 bg-teal-50 rounded-lg border border-teal-200">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center">
            <ExternalLink className="w-5 h-5 text-teal-600" />
          </div>
          <div className="flex-1">
            <h3 className="font-medium text-teal-900">NovoEd course portal</h3>
            <p className="text-sm text-teal-700">
              Access all session recordings, slides, and live materials on NovoEd.
            </p>
          </div>
          <a
            href="https://venturewell.novoed.com/#!/courses/i-corps_pose_winter_2026"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors font-medium text-sm"
          >
            Open NovoEd
          </a>
        </div>
      </div>
    </div>
  )
}
