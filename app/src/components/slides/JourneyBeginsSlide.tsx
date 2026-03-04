import type { SlideProps } from '../../lib/types';
import { colors } from '../../lib/colors';
import { SlideHeader } from '../ui/SlideHeader';
import { QuoteCard } from '../ui/QuoteCard';
import { weeklyJourney } from '../../data/story';

export function JourneyBeginsSlide(_props: SlideProps) {
  // Weeks 1-3 for this section
  const weeks = weeklyJourney.slice(0, 3);

  return (
    <div className="px-8 md:px-16">
      <SlideHeader
        tag="THE JOURNEY"
        tagColor={colors.primary}
        title="100 conversations"
      />

      <div className="mt-8 space-y-10">
        {weeks.map((week, i) => (
          <div
            key={week.week}
            className="scroll-reveal-left grid grid-cols-1 md:grid-cols-[160px_1fr] gap-6 items-start"
            style={{ transitionDelay: `${i * 0.15}s` }}
          >
            {/* Left: timeline marker */}
            <div className="flex md:flex-col items-center md:items-end gap-3 md:gap-1 md:text-right">
              <div className="flex items-center gap-2 md:flex-row-reverse">
                <div
                  className="w-3 h-3 rounded-full shrink-0"
                  style={{
                    backgroundColor: colors.primary,
                    boxShadow: `0 0 8px ${colors.glowPE}`,
                  }}
                />
                <span
                  className="text-xs font-semibold tracking-wider uppercase"
                  style={{ color: colors.textTertiary }}
                >
                  Week {week.week}
                </span>
              </div>
              <span
                className="text-2xl font-bold"
                style={{ color: colors.primary }}
              >
                {week.cumulative}
              </span>
              <span
                className="text-[10px] uppercase tracking-wider"
                style={{ color: colors.textTertiary }}
              >
                interviews
              </span>
            </div>

            {/* Right: insight + quote */}
            <div>
              <p
                className="text-sm font-medium mb-3"
                style={{ color: colors.textPrimary }}
              >
                {week.insight}
              </p>
              <QuoteCard
                quote={week.quote}
                name={week.quoteSource.split(',')[0]}
                title={week.quoteSource.split(',').slice(1).join(',').trim()}
                color={colors.primary}
              />
              {week.week === 3 && (
                <p
                  className="text-sm mt-4 italic leading-relaxed"
                  style={{ color: colors.textSecondary }}
                >
                  Government standards bodies and AI + econ researchers kept
                  surfacing&mdash;adjacent ecosystems with parallel needs, just
                  as we had hypothesized.
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
