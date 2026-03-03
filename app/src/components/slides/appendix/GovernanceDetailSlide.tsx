import type { SlideProps } from '../../../lib/types';
import { colors } from '../../../lib/colors';
import { SlideHeader } from '../../ui/SlideHeader';
import { OrgBadge } from '../../ui/OrgBadge';
import { governanceDetail } from '../../../data/governance';

export function GovernanceDetailSlide(_props: SlideProps) {
  return (
    <div className="px-8 md:px-16 py-4">
      <SlideHeader tag="GOVERNANCE DETAIL" tagColor={colors.accentPurple} isAppendix />

      <div className="space-y-4 mt-4">
        {governanceDetail.map((org, i) => (
          <div
            key={org.name}
            className="scroll-reveal bg-card-bg rounded-lg border-l-4 border p-4 card-hover"
            style={{
              borderLeftColor: org.color,
              borderTopColor: '#E2E8F0',
              borderRightColor: '#E2E8F0',
              borderBottomColor: '#E2E8F0',
              boxShadow: '0px 1px 3px rgba(16, 24, 40, 0.06), 0px 1px 2px rgba(16, 24, 40, 0.04)',
              transitionDelay: `${i * 0.1}s`,
            }}
          >
            <div className="flex items-center gap-2">
              <OrgBadge color={org.color} size={12} />
              <h3 className="text-lg font-bold text-text-primary">{org.name}</h3>
            </div>
            <div className="mt-2 space-y-1">
              {org.details.map((d, j) => (
                <p key={j} className="text-xs text-text-secondary">{d}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
