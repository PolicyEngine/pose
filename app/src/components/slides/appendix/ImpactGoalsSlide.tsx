import type { SlideProps } from '../../../lib/types';
import { colors } from '../../../lib/colors';
import { SlideHeader } from '../../ui/SlideHeader';
import { Card } from '../../ui/Card';
import { OrgBadge } from '../../ui/OrgBadge';
import { impactGoalsEvolution, impactGoals } from '../../../data/appendix';

export function ImpactGoalsSlide(_props: SlideProps) {
  return (
    <div className="px-8 md:px-16 py-4">
      <SlideHeader tag={'IMPACT GOALS \u2014 "IF" STATEMENT EVOLUTION'} tagColor={colors.success} isAppendix />

      <div className="space-y-2 mt-2">
        <div className="flex items-center gap-3">
          <span className="text-xs text-text-tertiary font-bold w-14">WEEK 2</span>
          <Card className="flex-1 px-4 py-2"><p className="text-sm text-text-secondary">{impactGoalsEvolution.week2}</p></Card>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-xs text-text-tertiary font-bold w-14">WEEK 3</span>
          <Card className="flex-1 px-4 py-2"><p className="text-sm text-text-secondary">{impactGoalsEvolution.week3}</p></Card>
        </div>
      </div>

      <p className="text-3xl text-center mt-3" style={{ color: colors.highlight }}>{'\u2193'}</p>

      <div className="flex items-center gap-2 mt-2">
        <span className="text-sm font-bold w-14" style={{ color: colors.highlight }}>NOW</span>
      </div>

      <div className="grid grid-cols-3 gap-4 mt-2">
        {impactGoals.map((goal, i) => (
          <Card key={goal.name} borderColor={goal.color} className="p-4" delay={i * 0.1}>
            <div className="flex items-center gap-2">
              <OrgBadge color={goal.color} />
              <p className="text-sm font-bold text-text-primary">{goal.name}</p>
            </div>
            <p className="text-xs font-semibold mt-2" style={{ color: goal.color }}>{goal.condition}</p>
            <p className="text-xs text-text-secondary mt-2">{goal.impact}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}
