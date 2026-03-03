import type { SlideProps } from '../../../lib/types';
import { colors } from '../../../lib/colors';
import { SlideHeader } from '../../ui/SlideHeader';
import { QuoteCard } from '../../ui/QuoteCard';
import { voicesQuotes } from '../../../data/appendix';

export function VoicesSlide(_props: SlideProps) {
  return (
    <div className="px-8 md:px-16 py-4">
      <SlideHeader tag="VOICES FROM THE FIELD" tagColor={colors.primary} isAppendix />
      <div className="grid grid-cols-2 gap-4 mt-4">
        {voicesQuotes.map((q, i) => (
          <QuoteCard key={q.name} quote={q.text} name={q.name} title={q.title} color={q.color} delay={i * 0.1} />
        ))}
      </div>
    </div>
  );
}
