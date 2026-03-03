import type { SlideProps } from '../../../lib/types';
import { colors } from '../../../lib/colors';
import { SlideHeader } from '../../ui/SlideHeader';
import { competitors } from '../../../data/appendix';

export function CompetitiveSlide(_props: SlideProps) {
  return (
    <div className="px-8 md:px-16 py-4">
      <SlideHeader tag="COMPETITIVE LANDSCAPE" tagColor={colors.cosilicoCyan} isAppendix />

      <p className="text-sm font-semibold mt-2" style={{ color: colors.cosilicoCyan }}>
        Key gap: No one combines income tax + benefits + prediction + simulation in a single API
      </p>

      <div className="space-y-2 mt-4">
        {competitors.map((c, i) => (
          <div
            key={c.name}
            className="scroll-reveal-left bg-card-bg rounded-lg border border-border-light p-3 flex items-center gap-6"
            style={{
              boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.04)',
              transitionDelay: `${i * 0.08}s`,
            }}
          >
            <span className="text-base font-bold text-text-primary w-32">{c.name}</span>
            <span className="text-sm font-medium w-36" style={{ color: colors.accentOrange }}>{c.metric}</span>
            <span className="text-sm text-text-secondary">{c.focus}</span>
          </div>
        ))}
      </div>

      <p className="scroll-reveal text-xs text-text-tertiary text-center mt-6" style={{ transitionDelay: '0.5s' }}>
        GPT-4 achieves only 67% accuracy on SARA tax benchmark {'\u2014'} deterministic tools always win on statutory precision
      </p>
    </div>
  );
}
