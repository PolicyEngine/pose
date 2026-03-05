import type { SlideProps } from '@/lib/types';
import { colors } from '@/lib/colors';
import { SlideHeader } from '@/components/ui/SlideHeader';

const ROWS = [
  { income: '$100,000', kids: '0', baseTax: '$21,000', reformTax: '$20,000', dEarnings: '+$700', taxBehavior: '$20,150', dTax: '-$850', weight: '500k' },
  { income: '$100,000', kids: '2', baseTax: '$12,000', reformTax: '$10,000', dEarnings: '+$1,000', taxBehavior: '$10,300', dTax: '-$1,700', weight: '700k' },
  { income: '$25,000', kids: '1', baseTax: '-$3,000', reformTax: '-$3,000', dEarnings: '$0', taxBehavior: '-$3,000', dTax: '$0', weight: '100k' },
];

const TOTAL = { baseTax: '$960B', reformTax: '$930B', dEarnings: '+$10B', taxBehavior: '$935B', dTax: '-$25B', weight: '170M' };

const STEPS = [
  { label: 'Policies', color: colors.peTeal, text: 'Apply tax & benefit rules under baseline and reform' },
  { label: 'Dynamics', color: colors.highlight, text: 'Model how people change behavior in response to new incentives' },
  { label: 'Households', color: colors.primary, text: 'Scale to millions of representative households \u2192 national estimates' },
];

const thStyle = { color: colors.textTertiary, borderBottom: `1px solid ${colors.borderMedium}` };
const tdStyle = { color: colors.textSecondary };
const tdInputStyle = { color: colors.textPrimary, fontWeight: 600 as const };

export function HowMicrosimSlide(_props: SlideProps) {
  return (
    <div className="px-8 md:px-16">
      <SlideHeader
        tag="HOW IT WORKS"
        tagColor={colors.primary}
        title="How microsimulation works"
      />

      <div className="scroll-reveal mt-6 overflow-x-auto" style={{ transitionDelay: '0.1s' }}>
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr>
              <th className="px-3 py-1.5 text-left text-[10px] font-bold tracking-wider uppercase" style={thStyle} colSpan={2} />
              <th className="px-3 py-1.5 text-center text-[10px] font-bold tracking-wider uppercase" style={{ ...thStyle, color: colors.textSecondary }}>Baseline</th>
              <th className="px-3 py-1.5 text-center text-[10px] font-bold tracking-wider uppercase" style={{ ...thStyle, color: colors.peTeal }} colSpan={5}>Reform</th>
            </tr>
            <tr>
              <th className="px-3 py-2 text-left text-xs font-semibold" style={thStyle}>Gross income</th>
              <th className="px-3 py-2 text-left text-xs font-semibold" style={thStyle}># kids</th>
              <th className="px-3 py-2 text-right text-xs font-semibold" style={thStyle}>Taxes</th>
              <th className="px-3 py-2 text-right text-xs font-semibold" style={thStyle}>Taxes</th>
              <th className="px-3 py-2 text-right text-xs font-semibold" style={thStyle}>&Delta; earnings</th>
              <th className="px-3 py-2 text-right text-xs font-semibold" style={thStyle}>Tax w/ behavior</th>
              <th className="px-3 py-2 text-right text-xs font-semibold" style={thStyle}>&Delta; tax</th>
              <th className="px-3 py-2 text-right text-xs font-semibold" style={thStyle}>Weight</th>
            </tr>
          </thead>
          <tbody>
            {ROWS.map((row, i) => (
              <tr
                key={i}
                className="scroll-reveal"
                style={{
                  transitionDelay: `${0.2 + i * 0.08}s`,
                  borderBottom: `1px solid ${colors.borderLight}`,
                }}
              >
                <td className="px-3 py-2 text-left" style={tdInputStyle}>{row.income}</td>
                <td className="px-3 py-2 text-left" style={tdInputStyle}>{row.kids}</td>
                <td className="px-3 py-2 text-right" style={tdStyle}>{row.baseTax}</td>
                <td className="px-3 py-2 text-right" style={{ color: colors.peTeal }}>{row.reformTax}</td>
                <td className="px-3 py-2 text-right" style={{ color: colors.highlight }}>{row.dEarnings}</td>
                <td className="px-3 py-2 text-right" style={{ color: colors.highlight }}>{row.taxBehavior}</td>
                <td className="px-3 py-2 text-right font-semibold" style={{ color: row.dTax.startsWith('-') ? colors.success : colors.textSecondary }}>{row.dTax}</td>
                <td className="px-3 py-2 text-right" style={{ color: colors.textTertiary }}>{row.weight}</td>
              </tr>
            ))}
            {/* Ellipsis row */}
            <tr className="scroll-reveal" style={{ transitionDelay: '0.5s', borderBottom: `1px solid ${colors.borderLight}` }}>
              {Array.from({ length: 8 }).map((_, i) => (
                <td key={i} className="px-3 py-1 text-center" style={{ color: colors.textTertiary }}>&hellip;</td>
              ))}
            </tr>
            {/* Total row */}
            <tr
              className="scroll-reveal"
              style={{
                transitionDelay: '0.6s',
                backgroundColor: colors.cardBgAlt,
                borderTop: `2px solid ${colors.borderMedium}`,
              }}
            >
              <td className="px-3 py-2 text-left font-bold" style={{ color: colors.textPrimary }} colSpan={2}>TOTAL</td>
              <td className="px-3 py-2 text-right font-bold" style={{ color: colors.textPrimary }}>{TOTAL.baseTax}</td>
              <td className="px-3 py-2 text-right font-bold" style={{ color: colors.peTeal }}>{TOTAL.reformTax}</td>
              <td className="px-3 py-2 text-right font-bold" style={{ color: colors.highlight }}>{TOTAL.dEarnings}</td>
              <td className="px-3 py-2 text-right font-bold" style={{ color: colors.highlight }}>{TOTAL.taxBehavior}</td>
              <td className="px-3 py-2 text-right font-bold" style={{ color: colors.success }}>{TOTAL.dTax}</td>
              <td className="px-3 py-2 text-right font-bold" style={{ color: colors.textSecondary }}>{TOTAL.weight}</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Step pills */}
      <div className="scroll-reveal flex flex-wrap justify-center gap-3 mt-8" style={{ transitionDelay: '0.7s' }}>
        {STEPS.map((step) => (
          <span
            key={step.label}
            className="text-sm px-4 py-1.5 rounded-full font-semibold"
            style={{
              color: step.color,
              backgroundColor: `${step.color}15`,
              border: `1px solid ${step.color}30`,
            }}
          >
            {step.label}
          </span>
        ))}
      </div>

      {/* Summary */}
      <p
        className="scroll-reveal text-base md:text-lg text-center mt-6 max-w-3xl mx-auto leading-relaxed"
        style={{ color: colors.textSecondary, transitionDelay: '0.8s' }}
      >
        Start with one household. Apply policy rules. Model behavioral responses.
        Scale to 170M+ representative households.{' '}
        <span className="font-semibold" style={{ color: colors.textPrimary }}>
          That&apos;s microsimulation.
        </span>
      </p>
    </div>
  );
}
