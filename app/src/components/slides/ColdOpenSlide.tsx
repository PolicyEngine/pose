import type { SlideProps } from '../../lib/types';
import { colors } from '../../lib/colors';

export function ColdOpenSlide(_props: SlideProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] px-8 md:px-16 text-center">
      {/* Three org circles */}
      <div className="scroll-reveal flex gap-3 mb-12" style={{ transitionDelay: '0s' }}>
        <div
          className="w-3 h-3 rounded-full"
          style={{ backgroundColor: colors.rulesBlue, boxShadow: `0 0 12px ${colors.glowRules}` }}
        />
        <div
          className="w-3 h-3 rounded-full"
          style={{ backgroundColor: colors.cosilicoCyan, boxShadow: `0 0 12px ${colors.glowCosilico}` }}
        />
        <div
          className="w-3 h-3 rounded-full"
          style={{ backgroundColor: colors.peTeal, boxShadow: `0 0 12px ${colors.glowPE}` }}
        />
      </div>

      {/* The question */}
      <h1
        className="scroll-reveal text-3xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight max-w-4xl"
        style={{ color: colors.textPrimary, transitionDelay: '0.15s' }}
      >
        What would it take to encode every rule that governs American life?
      </h1>

      {/* HGP analogy */}
      <p
        className="scroll-reveal text-base md:text-lg max-w-2xl mt-8 leading-relaxed"
        style={{ color: colors.textSecondary, transitionDelay: '0.35s' }}
      >
        The Human Genome Project cost $3B and generated $800B+ in economic value.
        The rules governing taxes, benefits, and regulations are at least as
        complex&mdash;and no one has mapped them.
      </p>

      {/* Animated counter line */}
      <p
        className="scroll-reveal text-sm md:text-base font-medium tracking-wide mt-10"
        style={{ color: colors.primary, transitionDelay: '0.55s' }}
      >
        160,000+ pages of federal tax code&ensp;&middot;&ensp;50 state
        systems&ensp;&middot;&ensp;100+ benefit programs
      </p>

      {/* The hook */}
      <p
        className="scroll-reveal text-lg md:text-xl font-semibold mt-12 max-w-2xl"
        style={{ color: colors.textPrimary, transitionDelay: '0.75s' }}
      >
        We thought we were building one tool to do this.{' '}
        <span style={{ color: colors.highlight }}>We were wrong.</span>
      </p>
    </div>
  );
}
