import type { SlideProps } from '../../../lib/types';
import { colors } from '../../../lib/colors';
import { SlideHeader } from '../../ui/SlideHeader';
import { Card } from '../../ui/Card';

const governanceOrgs = [
  {
    name: 'Rules Foundation',
    logo: '/assets/logos/rf-full.svg',
    color: colors.rulesBlue,
    entity: 'Multi-stakeholder 501(c)(3)',
    details: [
      'Technical steering committee',
      'Encoding standards board',
      'Partisan neutrality requirement',
      'Mandatory statute citations',
      'Multi-reviewer validation',
      'Historical versioning of all encodings',
    ],
  },
  {
    name: 'Cosilico',
    logo: '/assets/logos/cosilico-full.svg',
    color: colors.cosilicoCyan,
    entity: 'Public Benefit Corp (mission-locked)',
    details: [
      'Board with public benefit mandate',
      'Open-source core (Apache 2.0)',
      'Enterprise services layer',
      'Certified partner program (Salesforce model)',
      'Mission locked by charter',
    ],
  },
  {
    name: 'PolicyEngine',
    logo: '/assets/logos/pe-full-white.svg',
    color: colors.peTeal,
    entity: '501(c)(3) / UK Charity (AGPL)',
    details: [
      'Founder-led \u2192 Technical steering committee',
      'Advisory board from interview network',
      'Contributor guidelines',
      'Formal research partnership agreements',
      'Open roadmap with community input',
    ],
  },
];

export function GovernanceDetailSlide(_props: SlideProps) {
  return (
    <div className="px-8 md:px-16">
      <SlideHeader
        tag="GOVERNANCE DETAIL"
        tagColor={colors.rulesBlue}
        title="How each organization is governed"
        isAppendix
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        {governanceOrgs.map((org, i) => (
          <Card key={org.name} borderColor={org.color} delay={i * 0.15}>
            <div className="h-1 rounded-t-lg" style={{ backgroundColor: org.color }} />
            <div className="p-5">
              <img src={org.logo} alt={org.name} className="h-5" />
              <p className="text-xs font-medium mt-1" style={{ color: colors.textTertiary }}>
                {org.entity}
              </p>
              <ul className="mt-4 space-y-2">
                {org.details.map((detail) => (
                  <li key={detail} className="flex items-start gap-2">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: org.color }} />
                    <span className="text-sm leading-relaxed" style={{ color: colors.textSecondary }}>
                      {detail}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
