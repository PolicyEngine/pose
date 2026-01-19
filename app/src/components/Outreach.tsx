import { useState, useCallback } from 'react'
import { motion } from 'framer-motion'
import { Mail, Copy, Check, User, Building, Briefcase, RefreshCw } from 'lucide-react'
import type { Segment } from '../types/database'
import { SEGMENTS } from '../types/database'

interface OutreachFormData {
  recipientName: string
  recipientOrg: string
  recipientRole: string
  segment: Segment
  context: string // How you know them / why reaching out
  senderName: 'Max' | 'Pavel' | 'Dan'
}

const EMAIL_TEMPLATES: Record<Segment, { subject: string; body: string }> = {
  user: {
    subject: 'Quick chat about PolicyEngine? (30 min)',
    body: `Hi {{name}},

I'm reaching out because {{context}}.

We're part of an NSF program focused on building sustainable open-source policy tools, and we're talking with users to learn:
- How PolicyEngine fits into your work
- What's working well and what's frustrating
- Features or data that would help you most

Would you have 30 minutes for a conversation? We're genuinely trying to build tools that serve your needs.

Schedule a time: https://cal.com/policyengine/pose-interview

Or just reply and we'll find a time that works.

Best,
{{sender}}`,
  },
  supporter: {
    subject: 'PolicyEngine sustainability - would value your perspective',
    body: `Hi {{name}},

PolicyEngine is part of an NSF POSE program exploring sustainable models for open-source policy tools.

Given {{context}}, I'd love to hear your perspective on:
- What makes open-source policy tools valuable to funders
- Sustainability models you've seen work
- How we can demonstrate impact effectively

Would you have 30-45 minutes to chat? Your insights would be incredibly valuable.

Schedule a time: https://cal.com/policyengine/pose-interview

Best,
{{sender}}`,
  },
  contributor: {
    subject: 'Thanks for contributing to PolicyEngine - quick chat?',
    body: `Hi {{name}},

I wanted to reach out because {{context}}.

We're exploring how to build a sustainable contributor community for PolicyEngine as part of an NSF program. I'd love to hear:
- What motivated you to contribute
- What would make contributing easier or more rewarding
- Ideas for growing the contributor community

Would you have 30 minutes to chat? Your experience would be really valuable.

Schedule a time: https://cal.com/policyengine/pose-interview

Best,
{{sender}}`,
  },
  competitor: {
    subject: 'Learning from {{org}} - quick chat?',
    body: `Hi {{name}},

I'm {{sender}} from PolicyEngine. We're researching the landscape of policy analysis tools as part of an NSF program.

I've been following {{context}} and would love to understand:
- How you approach policy microsimulation
- What you've learned about user needs
- Where you see the field heading

This isn't a sales pitch - genuinely trying to learn from different approaches.

Would you have 30 minutes to chat?

Schedule a time: https://cal.com/policyengine/pose-interview

Best,
{{sender}}`,
  },
  distributor: {
    subject: 'Exploring collaboration - PolicyEngine + {{org}}',
    body: `Hi {{name}},

I'm {{sender}}, CEO of PolicyEngine. We build open-source microsimulation tools for tax and benefit policy analysis.

{{context}}

We're exploring partnerships with organizations who could benefit from embedded policy calculators or custom analysis tools.

Would you have 30 minutes to explore potential collaboration? I'd love to understand your needs and share what we're building.

Schedule a time: https://cal.com/policyengine/pose-interview

Best,
{{sender}}`,
  },
  partner: {
    subject: 'Integration opportunity - PolicyEngine + {{org}}',
    body: `Hi {{name}},

I'm {{sender}} from PolicyEngine. {{context}}

We're exploring integrations and partnerships that could benefit both our users. I'd love to discuss:
- How our tools might complement each other
- Potential integration points
- Joint opportunities to serve policy researchers

Would you have 30 minutes to explore this?

Schedule a time: https://cal.com/policyengine/pose-interview

Best,
{{sender}}`,
  },
}

const SENDER_SIGNATURES: Record<string, string> = {
  Max: `Max Ghenis
CEO, PolicyEngine
max@policyengine.org`,
  Pavel: `Pavel Makarchuk
Chief of Staff, PolicyEngine
pavel@policyengine.org`,
  Dan: `Daniel Feenberg
+1 617-682-6204`,
}

export function Outreach() {
  const [formData, setFormData] = useState<OutreachFormData>({
    recipientName: '',
    recipientOrg: '',
    recipientRole: '',
    segment: 'user',
    context: '',
    senderName: 'Max',
  })
  const [copied, setCopied] = useState<'subject' | 'body' | null>(null)

  const generateEmail = useCallback(() => {
    const template = EMAIL_TEMPLATES[formData.segment]
    const firstName = formData.recipientName.split(' ')[0] || formData.recipientName

    let subject = template.subject
      .replace('{{name}}', firstName)
      .replace('{{org}}', formData.recipientOrg || 'your organization')

    let body = template.body
      .replace(/\{\{name\}\}/g, firstName)
      .replace(/\{\{org\}\}/g, formData.recipientOrg || 'your organization')
      .replace(/\{\{context\}\}/g, formData.context || 'your work in this area')
      .replace(/\{\{sender\}\}/g, SENDER_SIGNATURES[formData.senderName])

    return { subject, body }
  }, [formData])

  const { subject, body } = generateEmail()

  const copyToClipboard = async (text: string, type: 'subject' | 'body') => {
    await navigator.clipboard.writeText(text)
    setCopied(type)
    setTimeout(() => setCopied(null), 2000)
  }

  const handleInputChange = (field: keyof OutreachFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold text-gray-900">Email outreach generator</h2>
          <p className="text-sm text-gray-500 mt-1">
            Generate personalized interview request emails
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Input Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-xl border border-gray-200 p-6"
        >
          <h3 className="font-medium text-gray-900 mb-4">Recipient details</h3>

          <div className="space-y-4">
            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                <User className="w-4 h-4 inline mr-1" />
                Name
              </label>
              <input
                type="text"
                value={formData.recipientName}
                onChange={(e) => handleInputChange('recipientName', e.target.value)}
                placeholder="Jane Smith"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
              />
            </div>

            {/* Organization */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                <Building className="w-4 h-4 inline mr-1" />
                Organization
              </label>
              <input
                type="text"
                value={formData.recipientOrg}
                onChange={(e) => handleInputChange('recipientOrg', e.target.value)}
                placeholder="Tax Policy Center"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
              />
            </div>

            {/* Role */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                <Briefcase className="w-4 h-4 inline mr-1" />
                Role (optional)
              </label>
              <input
                type="text"
                value={formData.recipientRole}
                onChange={(e) => handleInputChange('recipientRole', e.target.value)}
                placeholder="Senior Fellow"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
              />
            </div>

            {/* Segment */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Segment
              </label>
              <div className="grid grid-cols-2 gap-2">
                {SEGMENTS.map((seg) => (
                  <button
                    key={seg.value}
                    onClick={() => handleInputChange('segment', seg.value)}
                    className={`px-3 py-2 text-sm rounded-lg border transition-all ${
                      formData.segment === seg.value
                        ? 'border-teal-500 bg-teal-50 text-teal-700'
                        : 'border-gray-200 text-gray-600 hover:border-gray-300'
                    }`}
                  >
                    {seg.label}
                  </button>
                ))}
              </div>
              <p className="text-xs text-gray-500 mt-1">
                {SEGMENTS.find((s) => s.value === formData.segment)?.description}
              </p>
            </div>

            {/* Context */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Context / connection
              </label>
              <textarea
                value={formData.context}
                onChange={(e) => handleInputChange('context', e.target.value)}
                placeholder="you've used PolicyEngine to analyze child tax credit proposals"
                rows={2}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
              />
              <p className="text-xs text-gray-500 mt-1">
                How do you know them? Why are you reaching out?
              </p>
            </div>

            {/* Sender */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Send as
              </label>
              <div className="flex gap-2">
                {(['Max', 'Pavel', 'Dan'] as const).map((name) => (
                  <button
                    key={name}
                    onClick={() => handleInputChange('senderName', name)}
                    className={`px-4 py-2 text-sm rounded-lg border transition-all ${
                      formData.senderName === name
                        ? 'border-teal-500 bg-teal-50 text-teal-700'
                        : 'border-gray-200 text-gray-600 hover:border-gray-300'
                    }`}
                  >
                    {name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Generated Email */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-xl border border-gray-200 p-6"
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-medium text-gray-900 flex items-center gap-2">
              <Mail className="w-5 h-5 text-teal-600" />
              Generated email
            </h3>
            <button
              onClick={() => setFormData({ ...formData })}
              className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg"
              title="Regenerate"
            >
              <RefreshCw className="w-4 h-4" />
            </button>
          </div>

          {/* Subject */}
          <div className="mb-4">
            <div className="flex items-center justify-between mb-1">
              <label className="text-sm font-medium text-gray-500">Subject</label>
              <button
                onClick={() => copyToClipboard(subject, 'subject')}
                className="text-xs text-teal-600 hover:text-teal-700 flex items-center gap-1"
              >
                {copied === 'subject' ? (
                  <>
                    <Check className="w-3 h-3" /> Copied
                  </>
                ) : (
                  <>
                    <Copy className="w-3 h-3" /> Copy
                  </>
                )}
              </button>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-900">
              {subject}
            </div>
          </div>

          {/* Body */}
          <div>
            <div className="flex items-center justify-between mb-1">
              <label className="text-sm font-medium text-gray-500">Body</label>
              <button
                onClick={() => copyToClipboard(body, 'body')}
                className="text-xs text-teal-600 hover:text-teal-700 flex items-center gap-1"
              >
                {copied === 'body' ? (
                  <>
                    <Check className="w-3 h-3" /> Copied
                  </>
                ) : (
                  <>
                    <Copy className="w-3 h-3" /> Copy
                  </>
                )}
              </button>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-lg px-3 py-3 text-sm text-gray-900 whitespace-pre-wrap max-h-96 overflow-y-auto font-mono text-xs">
              {body}
            </div>
          </div>

          {/* Quick actions */}
          <div className="mt-4 pt-4 border-t border-gray-200">
            <p className="text-xs text-gray-500 mb-2">Quick actions</p>
            <div className="flex gap-2">
              <a
                href={`mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`}
                className="flex-1 px-4 py-2 bg-teal-600 text-white text-sm font-medium rounded-lg hover:bg-teal-700 transition-colors text-center"
              >
                Open in email client
              </a>
              <button
                onClick={() => {
                  copyToClipboard(subject + '\n\n' + body, 'body')
                }}
                className="px-4 py-2 border border-gray-300 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-50 transition-colors"
              >
                Copy all
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Tips */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-teal-50 border border-teal-200 rounded-xl p-4"
      >
        <h4 className="font-medium text-teal-800 mb-2">Outreach tips</h4>
        <ul className="text-sm text-teal-700 space-y-1">
          <li>• <strong>Personalize the context</strong> - Reference their specific work or how you found them</li>
          <li>• <strong>Send Tuesday-Thursday</strong> - Best response rates</li>
          <li>• <strong>Follow up once</strong> after 5 days if no response</li>
          <li>• <strong>Log in Interviews tab</strong> as "scheduled" once they respond</li>
          <li>• <strong>Ask for referrals</strong> at the end of each interview: "Who else should we talk to?"</li>
        </ul>
      </motion.div>
    </div>
  )
}
