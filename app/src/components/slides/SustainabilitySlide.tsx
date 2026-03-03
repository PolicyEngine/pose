import type { SlideProps } from '../../lib/types';
import { colors } from '../../lib/colors';
import { SlideHeader } from '../ui/SlideHeader';
import { OrgBadge } from '../ui/OrgBadge';
import { sustainability } from '../../data/sustainability';

export function SustainabilitySlide(_props: SlideProps) {
  return (
    <div className="px-8 md:px-16 py-4">
      <SlideHeader tag="SUSTAINABILITY" tagColor={colors.success} title="Three models, each self-sustaining" />

      <div className="grid grid-cols-3 gap-6 mt-6">
        {sustainability.map((org, i) => (
          <div
            key={org.name}
            className="scroll-reveal bg-card-bg rounded-lg border-t-4 border p-5 card-hover"
            style={{
              borderTopColor: org.color,
              borderLeftColor: '#E2E8F0',
              borderRightColor: '#E2E8F0',
              borderBottomColor: '#E2E8F0',
              boxShadow: '0px 1px 3px rgba(16, 24, 40, 0.06), 0px 1px 2px rgba(16, 24, 40, 0.04)',
              transitionDelay: `${i * 0.15}s`,
            }}
          >
            <div className="flex items-center gap-2">
              <OrgBadge color={org.color} />
              <h3 className="text-lg font-bold text-text-primary">{org.name}</h3>
            </div>
            <p className="text-base font-bold mt-2" style={{ color: org.color }}>{org.budget}</p>
            <div className="mt-4 space-y-2">
              {org.items.map((item, j) => (
                <p key={j} className="text-xs text-text-secondary">{'\u2022'}  {item}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
