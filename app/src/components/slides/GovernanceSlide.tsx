import type { SlideProps } from '../../lib/types';
import { colors } from '../../lib/colors';
import { SlideHeader } from '../ui/SlideHeader';
import { Card } from '../ui/Card';
import { governanceBefore, governanceAfter, governanceQuote, governanceNextSteps } from '../../data/governance';

export function GovernanceSlide(_props: SlideProps) {
  return (
    <div className="px-8 md:px-16 py-4">
      <SlideHeader tag="GOVERNANCE" tagColor={colors.accentPurple} title="From founder-led to multi-stakeholder" />

      <div className="flex items-center gap-4 mt-4">
        <Card borderColor={colors.accentOrange} className="flex-1 p-4" delay={0.1}>
          <p className="text-xs font-bold uppercase tracking-wider" style={{ color: colors.accentOrange }}>Before</p>
          <p className="text-lg font-bold text-text-primary mt-2">{governanceBefore.title}</p>
          {governanceBefore.items.map((item, i) => (
            <p key={i} className="text-xs text-text-secondary mt-1">{'\u2022'}  {item}</p>
          ))}
        </Card>

        <span
          className="scroll-reveal text-4xl font-light"
          style={{ color: colors.highlight, transitionDelay: '0.3s' }}
        >
          {'\u2192'}
        </span>

        <Card borderColor={colors.success} className="flex-1 p-4" delay={0.2}>
          <p className="text-xs font-bold uppercase tracking-wider" style={{ color: colors.success }}>After (informed by 100+ interviews)</p>
          <p className="text-lg font-bold text-text-primary mt-2">{governanceAfter.title}</p>
          {governanceAfter.items.map((item, i) => (
            <p key={i} className="text-xs mt-1 font-medium" style={{ color: item.color }}>{'\u2022'}  {item.text}</p>
          ))}
        </Card>
      </div>

      <div className="grid grid-cols-2 gap-4 mt-4">
        <Card borderColor={colors.primary} className="p-4" delay={0.3}>
          <p className="text-xs font-bold uppercase tracking-wider" style={{ color: colors.primary }}>{governanceQuote.label}</p>
          <p className="text-sm text-text-secondary mt-2 italic">{governanceQuote.quote}</p>
          <p className="text-xs font-medium mt-2" style={{ color: colors.primary }}>{governanceQuote.source}</p>
          <p className="text-[10px] text-text-tertiary mt-1">{governanceQuote.detail}</p>
        </Card>

        <Card borderColor={colors.highlight} className="p-4" delay={0.4}>
          <p className="text-xs font-bold uppercase tracking-wider" style={{ color: colors.highlight }}>Next Steps</p>
          {governanceNextSteps.map((step, i) => (
            <p key={i} className="text-xs text-text-secondary mt-2">{'\u2022'}  {step}</p>
          ))}
        </Card>
      </div>
    </div>
  );
}
