import type { SlideProps } from '../../../lib/types';
import { colors } from '../../../lib/colors';
import { SlideHeader } from '../../ui/SlideHeader';
import { interviewHighlights } from '../../../data/appendix';

export function HighlightsSlide(_props: SlideProps) {
  return (
    <div className="px-8 md:px-16">
      <SlideHeader
        tag="INTERVIEW HIGHLIGHTS"
        tagColor={colors.primary}
        title="Key insights from 100+ conversations"
        isAppendix
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
        {interviewHighlights.map((h, i) => {
          const [name, ...rest] = h.name.split(', ');
          const org = rest.join(', ');
          return (
            <div
              key={h.name}
              className="scroll-reveal bg-card-bg rounded-lg border p-4 card-hover"
              style={{
                borderColor: colors.borderLight,
                boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.3)',
                transitionDelay: `${(i % 6) * 0.08}s`,
              }}
            >
              <p className="text-sm font-semibold" style={{ color: colors.textPrimary }}>
                {name}
              </p>
              {org && (
                <p className="text-xs mt-0.5" style={{ color: colors.textTertiary }}>
                  {org}
                </p>
              )}
              <p className="text-xs mt-2 leading-relaxed" style={{ color: colors.textSecondary }}>
                {h.insight}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
