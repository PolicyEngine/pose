import type { SlideProps } from '../../lib/types';
import { colors } from '../../lib/colors';
import { SlideHeader } from '../ui/SlideHeader';
import { QuoteCard } from '../ui/QuoteCard';
import { weeklyJourney } from '../../data/story';
import { assumptions } from '../../data/assumptions';

export function TensionBuildsSlide(_props: SlideProps) {
  const week4 = weeklyJourney[3]; // Week 4
  const week5 = weeklyJourney[4]; // Week 5

  return (
    <div className="px-8 md:px-16">
      <SlideHeader
        tag="VALIDATION"
        tagColor={colors.error}
        title="Testing the hypothesis"
      />

      {/* Week 4 */}
      <div className="mt-8">
        <div className="scroll-reveal-left flex items-center gap-3 mb-4">
          <div
            className="w-3 h-3 rounded-full shrink-0"
            style={{
              backgroundColor: colors.error,
              boxShadow: '0 0 8px rgba(239, 68, 68, 0.3)',
            }}
          />
          <span
            className="text-xs font-semibold tracking-wider uppercase"
            style={{ color: colors.textTertiary }}
          >
            Week 4
          </span>
          <span
            className="text-xl font-bold"
            style={{ color: colors.error }}
          >
            {week4.cumulative}
          </span>
          <span
            className="text-[10px] uppercase tracking-wider"
            style={{ color: colors.textTertiary }}
          >
            interviews
          </span>
        </div>

        <p
          className="scroll-reveal text-sm font-medium mb-4"
          style={{ color: colors.textPrimary, transitionDelay: '0.1s' }}
        >
          {week4.insight}
        </p>

        {/* Two contrasting quotes side by side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <QuoteCard
            quote="Institutions like the Fed face strong IT/security barriers to external APIs — installable, low-dependency tools fit much better than cloud services."
            name="Jacob Walker"
            title="Sr. Research Analyst, Atlanta Fed"
            color={colors.rulesBlue}
            delay={0.2}
          />
          <QuoteCard
            quote="PE-style tools are ready for deployment; the blocker is institutional slowness, not technology."
            name="Martin Perron"
            title="Rules as Code, Canadian Digital Services"
            color={colors.cosilicoCyan}
            delay={0.3}
          />
        </div>

        <p
          className="scroll-reveal text-sm italic mt-4 leading-relaxed max-w-2xl"
          style={{ color: colors.textSecondary, transitionDelay: '0.4s' }}
        >
          Government agencies needed one thing. AI + econ researchers needed another.
          Funders wanted a third. Every interview confirmed the pattern we hypothesized.
        </p>
      </div>

      {/* Week 5 */}
      <div className="mt-12">
        <div className="scroll-reveal-left flex items-center gap-3 mb-4" style={{ transitionDelay: '0.5s' }}>
          <div
            className="w-3 h-3 rounded-full shrink-0"
            style={{
              backgroundColor: colors.highlight,
              boxShadow: '0 0 8px rgba(217, 119, 6, 0.3)',
            }}
          />
          <span
            className="text-xs font-semibold tracking-wider uppercase"
            style={{ color: colors.textTertiary }}
          >
            Week 5
          </span>
          <span
            className="text-xl font-bold"
            style={{ color: colors.highlight }}
          >
            {week5.cumulative}
          </span>
          <span
            className="text-[10px] uppercase tracking-wider"
            style={{ color: colors.textTertiary }}
          >
            interviews
          </span>
        </div>

        <p
          className="scroll-reveal text-sm font-medium mb-5"
          style={{ color: colors.textPrimary, transitionDelay: '0.55s' }}
        >
          {week5.insight}
        </p>

        {/* Assumption cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {assumptions.map((a, i) => {
            const isRejected = a.statusType === 'rejected';
            return (
              <div
                key={a.title}
                className={`scroll-reveal bg-card-bg rounded-lg border p-5 ${isRejected ? 'glow-highlight' : ''}`}
                style={{
                  borderColor: isRejected ? colors.highlight : colors.borderLight,
                  borderWidth: isRejected ? '2px' : '1px',
                  boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.3)',
                  transitionDelay: `${0.6 + i * 0.1}s`,
                }}
              >
                {/* Status badge */}
                <span
                  className="inline-block text-[10px] font-bold tracking-wider uppercase px-2 py-0.5 rounded"
                  style={{
                    color: a.color,
                    backgroundColor:
                      a.statusType === 'confirmed'
                        ? 'rgba(34, 197, 94, 0.12)'
                        : a.statusType === 'partial'
                          ? 'rgba(234, 88, 12, 0.12)'
                          : 'rgba(217, 119, 6, 0.15)',
                  }}
                >
                  {a.status}
                </span>

                <p
                  className="text-sm font-semibold mt-2 whitespace-pre-line"
                  style={{ color: colors.textPrimary }}
                >
                  {a.title}
                </p>

                <p
                  className="text-xs mt-2 leading-relaxed"
                  style={{ color: colors.textSecondary }}
                >
                  {a.learning}
                </p>
              </div>
            );
          })}
        </div>

        {/* Week 5 quote */}
        <div className="mt-6">
          <QuoteCard
            quote={week5.quote}
            name={week5.quoteSource.split(',')[0]}
            title={week5.quoteSource.split(',').slice(1).join(',').trim() || ''}
            color={colors.highlight}
            delay={1}
          />
        </div>
      </div>
    </div>
  );
}
