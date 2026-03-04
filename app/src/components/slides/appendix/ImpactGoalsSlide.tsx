import type { SlideProps } from '../../../lib/types';
import { colors } from '../../../lib/colors';
import { SlideHeader } from '../../ui/SlideHeader';
import { Card } from '../../ui/Card';
import { impactGoals, impactGoalsEvolution } from '../../../data/appendix';

export function ImpactGoalsSlide(_props: SlideProps) {
  return (
    <div className="px-8 md:px-16">
      <SlideHeader
        tag="IMPACT GOALS"
        tagColor={colors.highlight}
        title="IF/THEN: how we'll know it's working"
        isAppendix
      />

      {/* Evolution context */}
      <div
        className="scroll-reveal mb-8 p-4 rounded-lg border"
        style={{
          backgroundColor: colors.cardBgAlt,
          borderColor: colors.borderLight,
          transitionDelay: '0s',
        }}
      >
        <p className="text-xs font-semibold tracking-wider uppercase mb-2" style={{ color: colors.textTertiary }}>
          How our thesis evolved
        </p>
        <p className="text-sm" style={{ color: colors.textSecondary }}>
          <span className="font-medium" style={{ color: colors.highlight }}>Week 2:</span>{' '}
          {impactGoalsEvolution.week2}
        </p>
        <p className="text-sm mt-1" style={{ color: colors.textSecondary }}>
          <span className="font-medium" style={{ color: colors.highlight }}>Week 3:</span>{' '}
          {impactGoalsEvolution.week3}
        </p>
      </div>

      {/* Per-org IF/THEN cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {impactGoals.map((goal, i) => (
          <Card key={goal.name} borderColor={goal.color} delay={i * 0.15}>
            <div className="h-1 rounded-t-lg" style={{ backgroundColor: goal.color }} />
            <div className="p-5">
              <h3 className="text-sm font-bold" style={{ color: goal.color }}>
                {goal.name}
              </h3>
              <div className="mt-4">
                <p className="text-[10px] font-semibold tracking-wider uppercase" style={{ color: colors.textTertiary }}>
                  IF
                </p>
                <p className="text-sm mt-1 leading-relaxed" style={{ color: colors.textPrimary }}>
                  {goal.condition}
                </p>
              </div>
              <div className="mt-4">
                <p className="text-[10px] font-semibold tracking-wider uppercase" style={{ color: colors.textTertiary }}>
                  THEN
                </p>
                <p className="text-sm mt-1 leading-relaxed" style={{ color: colors.textSecondary }}>
                  {goal.impact}
                </p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
