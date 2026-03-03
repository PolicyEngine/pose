import type { SlideProps } from '../../lib/types';
import { colors } from '../../lib/colors';
import { SlideHeader } from '../ui/SlideHeader';
import { orgs } from '../../data/orgs';

export function AhaMomentSlide(_props: SlideProps) {
  return (
    <div className="px-8 md:px-16 py-4">
      <SlideHeader tag="THE A-HA MOMENT" tagColor={colors.highlight} title="One ecosystem became three" />

      <p className="text-text-secondary text-sm text-center mt-1">
        Interviews revealed that serving everyone from one organization creates governance, funding, and mission conflicts.
      </p>

      <div className="flex items-center justify-center gap-6 mt-6">
        <div className="scroll-reveal-scale w-36 h-36 rounded-full bg-card-bg-alt border border-border-light flex items-center justify-center">
          <div className="text-center">
            <p className="text-base font-semibold text-text-secondary">PolicyEngine</p>
            <p className="text-xs text-text-tertiary">(Unified)</p>
          </div>
        </div>

        <span
          className="scroll-reveal text-5xl font-light"
          style={{ color: colors.highlight, transitionDelay: '0.3s' }}
        >
          {'\u2192'}
        </span>

        <div className="flex gap-4">
          {orgs.map((org, i) => (
            <div
              key={org.name}
              className="scroll-reveal bg-card-bg rounded-lg border-t-4 border p-4 w-40 card-hover"
              style={{
                borderTopColor: org.color,
                borderLeftColor: '#E2E8F0',
                borderRightColor: '#E2E8F0',
                borderBottomColor: '#E2E8F0',
                boxShadow: '0px 1px 3px rgba(16, 24, 40, 0.06), 0px 1px 2px rgba(16, 24, 40, 0.04)',
                transitionDelay: `${0.4 + i * 0.15}s`,
              }}
            >
              <div className="flex justify-center mb-2">
                <div className="w-8 h-8 rounded-full" style={{ backgroundColor: org.color }} />
              </div>
              <p className="text-sm font-bold text-text-primary text-center whitespace-pre-line">{org.name}</p>
              <p className="text-xs text-center mt-1 font-medium" style={{ color: org.color }}>"{org.tagline}"</p>
              <p className="text-[10px] text-text-secondary text-center mt-1">{org.entity}</p>
              <p className="text-[10px] text-text-tertiary text-center mt-1 whitespace-pre-line">{org.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
