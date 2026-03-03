import type { SlideProps } from '../../lib/types';
import { colors } from '../../lib/colors';
import { SlideHeader } from '../ui/SlideHeader';
import { assumptions } from '../../data/assumptions';

export function AssumptionsSlide(_props: SlideProps) {
  return (
    <div className="px-8 md:px-16 py-4">
      <SlideHeader tag="ASSUMPTIONS" tagColor={colors.accentOrange} title="What we assumed vs. what we learned" />

      <div className="grid grid-cols-2 gap-4 mt-4">
        {assumptions.map((a, i) => (
          <div
            key={i}
            className="scroll-reveal bg-card-bg rounded-lg border-l-4 border p-4 card-hover"
            style={{
              borderLeftColor: a.color,
              borderTopColor: '#E2E8F0',
              borderRightColor: '#E2E8F0',
              borderBottomColor: '#E2E8F0',
              boxShadow: '0px 1px 3px rgba(16, 24, 40, 0.06), 0px 1px 2px rgba(16, 24, 40, 0.04)',
              transitionDelay: `${i * 0.1}s`,
            }}
          >
            <div className="flex gap-4">
              <div className="flex-1">
                <p className="text-xs font-bold uppercase tracking-wider" style={{ color: a.color }}>{a.status}</p>
                <p className="text-sm font-semibold text-text-primary mt-1 whitespace-pre-line">{a.title}</p>
                <p className="text-xs text-text-secondary mt-2">{a.learning}</p>
              </div>
              <div className="flex-1">
                <p className="text-xs text-text-secondary italic mt-2">{a.quote}</p>
                <p className="text-xs font-medium mt-2" style={{ color: a.color }}>{a.source}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
