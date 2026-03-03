import type { SlideProps } from '../../../lib/types';
import { colors } from '../../../lib/colors';
import { SlideHeader } from '../../ui/SlideHeader';
import { interviewHighlights } from '../../../data/appendix';

export function HighlightsSlide(_props: SlideProps) {
  return (
    <div className="px-8 md:px-16 py-4">
      <SlideHeader tag="KEY INTERVIEW HIGHLIGHTS" tagColor={colors.primary} isAppendix />

      <div className="space-y-1.5 mt-4">
        {interviewHighlights.map((h, i) => (
          <p
            key={h.name}
            className="scroll-reveal-left text-xs text-text-secondary"
            style={{ transitionDelay: `${i * 0.04}s` }}
          >
            <span className="font-bold text-text-primary">{h.name}:</span> {h.insight}
          </p>
        ))}
      </div>
    </div>
  );
}
