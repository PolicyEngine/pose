import type { SlideProps } from '../../lib/types';
import { colors } from '../../lib/colors';

export function TitleSlide(_props: SlideProps) {
  return (
    <div className="flex flex-col items-center justify-center relative px-8 min-h-screen">
      <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ backgroundColor: colors.primary }} />

      <h1 className="scroll-reveal font-bold text-text-primary text-center text-4xl md:text-5xl tracking-tight">
        One Ecosystem Became Three
      </h1>

      <p
        className="scroll-reveal text-center mt-4 text-lg md:text-xl font-medium"
        style={{ color: colors.primary, transitionDelay: '0.1s' }}
      >
        How 100+ interviews reshaped our open-source strategy
      </p>

      <div
        className="scroll-reveal-width w-24 h-[2px] rounded-full mt-8"
        style={{ backgroundColor: colors.primary, transitionDelay: '0.3s' }}
      />

      <p
        className="scroll-reveal text-text-tertiary text-center mt-6 text-base font-medium"
        style={{ transitionDelay: '0.4s' }}
      >
        NSF POSE  |  Award #4373  |  Winter 2026
      </p>

      <div className="flex gap-3 mt-6">
        {[colors.rulesBlue, colors.cosilicoCyan, colors.peTeal].map((c, i) => (
          <div
            key={i}
            className="scroll-reveal-scale w-6 h-6 rounded-full"
            style={{ backgroundColor: c, transitionDelay: `${0.5 + i * 0.1}s` }}
          />
        ))}
      </div>

      <p
        className="scroll-reveal text-text-tertiary text-sm mt-8"
        style={{ transitionDelay: '0.7s' }}
      >
        pose-ecosystem.vercel.app
      </p>
    </div>
  );
}
