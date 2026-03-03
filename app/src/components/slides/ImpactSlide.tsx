import type { SlideProps } from '../../lib/types';
import { colors } from '../../lib/colors';
import { SlideHeader } from '../ui/SlideHeader';
import { StatCard } from '../ui/StatCard';
import { stats, trustedBy } from '../../data/impact';

export function ImpactSlide(_props: SlideProps) {
  return (
    <div className="px-8 md:px-16 py-4">
      <SlideHeader tag="IMPACT" tagColor={colors.success} title={"What we've built \u2014 and who's using it"} />

      <div className="grid grid-cols-4 gap-4 mt-6">
        {stats.map((stat, i) => (
          <StatCard key={stat.label} {...stat} delay={i * 0.1} />
        ))}
      </div>

      <div className="scroll-reveal mt-8" style={{ transitionDelay: '0.5s' }}>
        <p className="text-text-tertiary text-sm mb-2 font-medium">Trusted by:</p>
        <p className="text-text-primary font-semibold text-center text-base">
          {trustedBy.line1}
        </p>
        <p className="text-center text-sm mt-1 font-medium" style={{ color: colors.primary }}>
          {trustedBy.line2}
        </p>
      </div>
    </div>
  );
}
