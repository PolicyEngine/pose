import type { SlideProps } from '../../lib/types';
import { colors } from '../../lib/colors';
import { SlideHeader } from '../ui/SlideHeader';
import { milestones } from '../../data/timeline';

export function TimelineSlide(_props: SlideProps) {
  return (
    <div className="px-8 md:px-16 py-4">
      <SlideHeader tag="TIMELINE" tagColor={colors.primary} title="Next 24 months" />

      <div className="relative mt-16 mx-4">
        <div className="absolute left-0 right-0 top-1/2 h-[2px] bg-border-light -translate-y-1/2" />

        <div className="flex justify-between relative">
          {milestones.map((m, i) => (
            <div
              key={m.period}
              className="scroll-reveal flex flex-col items-center w-1/5"
              style={{ transitionDelay: `${i * 0.12}s` }}
            >
              <p className="text-xs font-bold mb-1" style={{ color: m.color }}>{m.period}</p>
              <p className="text-xs font-bold text-text-primary mb-3">{m.label}</p>
              <div
                className="w-5 h-5 rounded-full z-10 border-2 border-white"
                style={{
                  backgroundColor: m.color,
                  boxShadow: '0px 1px 3px rgba(16, 24, 40, 0.15)',
                }}
              />
              <div className="mt-4 text-center">
                {m.description.map((d, j) => (
                  <p key={j} className="text-[10px] text-text-secondary">{d}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <p
        className="scroll-reveal text-sm text-center mt-12 font-medium"
        style={{ color: colors.highlight, transitionDelay: '0.7s' }}
      >
        Impact goals evolved: from "1 bill cites PolicyEngine" {'\u2192'} 3 org-specific milestones (see appendix)
      </p>
    </div>
  );
}
