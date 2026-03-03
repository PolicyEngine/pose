import type { SlideProps } from '../../lib/types';
import { colors } from '../../lib/colors';
import { SlideHeader } from '../ui/SlideHeader';
import { ProgressBar } from '../ui/ProgressBar';
import { weeklyProgress, segments } from '../../data/interviews';

export function InterviewLogSlide(_props: SlideProps) {
  const maxSeg = Math.max(...segments.map(s => s.count));

  return (
    <div className="px-8 md:px-16 py-4">
      <SlideHeader tag="INTERVIEW LOG" tagColor={colors.primary} />

      <div className="grid grid-cols-2 gap-8">
        <div>
          <h2 className="scroll-reveal font-bold text-text-primary text-3xl tracking-tight">
            100+ interviews
          </h2>
          <p className="scroll-reveal text-lg mt-1 font-medium" style={{ color: colors.primary, transitionDelay: '0.1s' }}>
            across 12 segments in 7 weeks
          </p>

          <p className="text-text-tertiary text-xs font-bold mt-6 mb-2 uppercase tracking-wider">Weekly progress:</p>
          <div className="space-y-1.5">
            {weeklyProgress.map((w, i) => (
              <ProgressBar
                key={w.week}
                value={w.count}
                max={100}
                color={colors.primary}
                label={w.week}
                count={w.count}
                delay={0.2 + i * 0.05}
              />
            ))}
          </div>
        </div>

        <div className="space-y-1">
          {segments.map((seg, i) => (
            <ProgressBar
              key={seg.name}
              value={seg.count}
              max={maxSeg}
              color={seg.color}
              label={seg.name}
              count={seg.count}
              delay={0.1 + i * 0.04}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
