import type { SlideProps } from '../../../lib/types';
import { colors } from '../../../lib/colors';
import { SlideHeader } from '../../ui/SlideHeader';
import { QuoteCard } from '../../ui/QuoteCard';
import { voicesQuotes } from '../../../data/appendix';

export function VoicesSlide(_props: SlideProps) {
  return (
    <div className="px-8 md:px-16">
      <SlideHeader
        tag="VOICES FROM THE FIELD"
        tagColor={colors.primary}
        title="What practitioners told us"
        isAppendix
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        {voicesQuotes.map((q, i) => (
          <QuoteCard
            key={q.name}
            quote={q.text}
            name={q.name}
            title={q.title}
            color={q.color}
            delay={i * 0.12}
          />
        ))}
      </div>
    </div>
  );
}
