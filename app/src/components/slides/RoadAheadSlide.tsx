import { colors } from '../../lib/colors';
import { milestones } from '../../data/timeline';
import type { SlideProps } from '../../lib/types';
import { SlideHeader } from '../ui/SlideHeader';

export function RoadAheadSlide(_props: SlideProps) {
  return (
    <div className="px-8 md:px-16">
      <SlideHeader tag="TIMELINE" tagColor={colors.primary} title="The road ahead" />

      {/* Horizontal timeline */}
      <div className="mt-8 relative">
        {/* Timeline connector line */}
        <div className="hidden md:block absolute top-5 left-0 right-0 h-0.5" style={{ backgroundColor: colors.borderMedium }}>
          <div
            className="h-full rounded-full"
            style={{
              background: `linear-gradient(90deg, ${colors.highlight}, ${colors.primary}, ${colors.accentPurple})`,
              boxShadow: `0 0 12px ${colors.primary}40`,
            }}
          />
        </div>

        {/* Milestone cards - horizontal on desktop, vertical on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-3 relative">
          {milestones.map((milestone, i) => (
            <div
              key={milestone.period}
              className="scroll-reveal flex flex-col items-center"
              style={{ transitionDelay: `${i * 0.12}s` }}
            >
              {/* Glowing dot */}
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center relative z-10 mb-4"
                style={{
                  backgroundColor: `${milestone.color}20`,
                  border: `2px solid ${milestone.color}`,
                  boxShadow: `0 0 16px ${milestone.color}40`,
                }}
              >
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: milestone.color }}
                />
              </div>

              {/* Card */}
              <div
                className="bg-card-bg rounded-lg border p-4 w-full card-hover"
                style={{
                  borderColor: `${milestone.color}30`,
                  boxShadow: `0px 1px 3px rgba(0, 0, 0, 0.3), 0 0 8px ${milestone.color}10`,
                }}
              >
                <p
                  className="text-[10px] font-bold tracking-wider uppercase"
                  style={{ color: milestone.color }}
                >
                  {milestone.label}
                </p>
                <p className="text-sm font-semibold text-text-primary mt-0.5">
                  {milestone.period}
                </p>
                <ul className="mt-2 space-y-1">
                  {milestone.description.map((item) => (
                    <li key={item} className="text-xs text-text-secondary flex items-start gap-1.5">
                      <span
                        className="mt-1 w-1 h-1 rounded-full shrink-0"
                        style={{ backgroundColor: milestone.color }}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
