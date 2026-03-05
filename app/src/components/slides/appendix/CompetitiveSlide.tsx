import type { SlideProps } from '@/lib/types';
import { colors } from '@/lib/colors';
import { SlideHeader } from '@/components/ui/SlideHeader';
import { competitors } from '@/data/appendix';

export function CompetitiveSlide(_props: SlideProps) {
  return (
    <div className="px-8 md:px-16">
      <SlideHeader
        tag="COMPETITIVE LANDSCAPE"
        tagColor={colors.accentOrange}
        title="How we compare"
        isAppendix
      />

      {/* Competitor table */}
      <div
        className="scroll-reveal mt-8 rounded-lg border overflow-hidden"
        style={{
          borderColor: colors.borderLight,
          boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.3)',
          transitionDelay: '0s',
        }}
      >
        <table className="w-full">
          <thead>
            <tr style={{ backgroundColor: colors.cardBgAlt }}>
              <th className="text-left text-xs font-semibold tracking-wider uppercase px-5 py-3" style={{ color: colors.textTertiary }}>
                Competitor
              </th>
              <th className="text-left text-xs font-semibold tracking-wider uppercase px-5 py-3" style={{ color: colors.textTertiary }}>
                Key metric
              </th>
              <th className="text-left text-xs font-semibold tracking-wider uppercase px-5 py-3" style={{ color: colors.textTertiary }}>
                Limitation
              </th>
            </tr>
          </thead>
          <tbody>
            {competitors.map((c, i) => (
              <tr
                key={c.name}
                className="scroll-reveal"
                style={{
                  backgroundColor: i % 2 === 0 ? colors.cardBg : colors.cardBgAlt,
                  transitionDelay: `${(i + 1) * 0.08}s`,
                }}
              >
                <td className="px-5 py-3 text-sm font-semibold" style={{ color: colors.textPrimary }}>
                  {c.name}
                </td>
                <td className="px-5 py-3 text-sm" style={{ color: colors.accentOrange }}>
                  {c.metric}
                </td>
                <td className="px-5 py-3 text-sm" style={{ color: colors.textSecondary }}>
                  {c.focus}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* PolicyEngine differentiation */}
      <div
        className="scroll-reveal mt-6 p-5 rounded-lg border-l-4"
        style={{
          backgroundColor: colors.cardBg,
          borderLeftColor: colors.peTeal,
          borderTopColor: colors.borderLight,
          borderRightColor: colors.borderLight,
          borderBottomColor: colors.borderLight,
          boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.3)',
          transitionDelay: '0.5s',
        }}
      >
        <h3 className="text-sm font-bold" style={{ color: colors.peTeal }}>
          PolicyEngine's differentiation
        </h3>
        <div className="flex flex-wrap gap-4 mt-3">
          {['Open-source', 'Comprehensive (taxes + benefits)', 'Free for researchers', '50+ state systems', '100+ benefit programs'].map((d) => (
            <span
              key={d}
              className="text-xs font-medium px-3 py-1.5 rounded-full"
              style={{
                backgroundColor: 'rgba(49, 151, 149, 0.12)',
                color: colors.peTeal,
              }}
            >
              {d}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
