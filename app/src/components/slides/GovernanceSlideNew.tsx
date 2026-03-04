import { colors } from '../../lib/colors';
import { governanceBefore, governanceAfter, governanceQuote, governanceDetail } from '../../data/governance';
import type { SlideProps } from '../../lib/types';
import { SlideHeader } from '../ui/SlideHeader';
import { Card } from '../ui/Card';

export function GovernanceSlideNew(_props: SlideProps) {
  return (
    <div className="px-8 md:px-16">
      <SlideHeader tag="GOVERNANCE" tagColor={colors.accentPurple} title="How we'll govern it" />

      {/* Before / After comparison */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
        {/* Before */}
        <Card delay={0}>
          <div className="p-5">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-2 h-2 rounded-full bg-text-tertiary" />
              <p className="text-[10px] font-bold tracking-wider uppercase text-text-tertiary">
                Before
              </p>
            </div>
            <h3 className="text-base font-bold text-text-primary mb-3">{governanceBefore.title}</h3>
            <ul className="space-y-2">
              {governanceBefore.items.map((item) => (
                <li
                  key={item}
                  className="text-sm text-text-secondary flex items-start gap-2"
                >
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-text-tertiary shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Card>

        {/* After */}
        <Card delay={0.15}>
          <div className="p-5">
            <div className="flex items-center gap-2 mb-3">
              <div
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: colors.success }}
              />
              <p
                className="text-[10px] font-bold tracking-wider uppercase"
                style={{ color: colors.success }}
              >
                After
              </p>
            </div>
            <h3 className="text-base font-bold text-text-primary mb-3">
              {governanceAfter.title}
            </h3>
            <ul className="space-y-2">
              {governanceAfter.items.map((item) => (
                <li
                  key={item.text}
                  className="text-sm flex items-start gap-2"
                  style={{ color: colors.textSecondary }}
                >
                  <span
                    className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0"
                    style={{ backgroundColor: item.color }}
                  />
                  {item.text}
                </li>
              ))}
            </ul>
          </div>
        </Card>
      </div>

      {/* Detailed governance per org */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-5">
        {governanceDetail.map((org, i) => (
          <Card key={org.name} delay={0.3 + i * 0.1}>
            <div
              className="h-0.5"
              style={{ backgroundColor: org.color }}
            />
            <div className="p-4">
              <div className="flex items-center gap-2 mb-2">
                <div
                  className="w-2.5 h-2.5 rounded-full"
                  style={{ backgroundColor: org.color, boxShadow: `0 0 6px ${org.color}` }}
                />
                <h4 className="text-sm font-bold text-text-primary">{org.name}</h4>
              </div>
              <ul className="space-y-1.5">
                {org.details.map((detail) => (
                  <li key={detail} className="text-xs text-text-secondary flex items-start gap-1.5">
                    <span
                      className="mt-1 w-1 h-1 rounded-full shrink-0"
                      style={{ backgroundColor: org.color }}
                    />
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          </Card>
        ))}
      </div>

      {/* Key insight */}
      <p className="text-sm text-text-secondary italic text-center mt-5 scroll-reveal max-w-2xl mx-auto">
        Each org has governance designed for its mission. A standards body needs neutrality. A company needs speed. A research org needs independence.
      </p>

      {/* Quote */}
      <div
        className="scroll-reveal mt-4 bg-card-bg rounded-lg border-l-4 p-5 max-w-2xl mx-auto"
        style={{
          borderLeftColor: colors.accentPurple,
          borderTopColor: colors.borderLight,
          borderRightColor: colors.borderLight,
          borderBottomColor: colors.borderLight,
          boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.3)',
          transitionDelay: '0.5s',
        }}
      >
        <p className="text-[10px] font-bold tracking-wider uppercase mb-2" style={{ color: colors.accentPurple }}>
          {governanceQuote.label}
        </p>
        <p className="text-sm text-text-secondary italic leading-relaxed">
          {governanceQuote.quote}
        </p>
        <p className="text-sm font-semibold mt-2" style={{ color: colors.accentPurple }}>
          {governanceQuote.source}
        </p>
        <p className="text-xs text-text-tertiary mt-1">{governanceQuote.detail}</p>
      </div>
    </div>
  );
}
