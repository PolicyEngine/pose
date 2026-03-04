import type { SlideProps } from '../../lib/types';
import { colors } from '../../lib/colors';
import { SlideHeader } from '../ui/SlideHeader';
import { StatCard } from '../ui/StatCard';
import { stats } from '../../data/impact';

export function WhatWeDoSlide(_props: SlideProps) {
  return (
    <div className="px-8 md:px-16">
      <SlideHeader
        tag="THESIS + IMPACT"
        tagColor={colors.accentOrange}
        title="What we do"
      />

      {/* Stat cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
        {stats.map((stat, i) => (
          <StatCard
            key={stat.label}
            number={stat.number}
            label={stat.label}
            color={stat.color}
            delay={i * 0.1}
          />
        ))}
      </div>

      {/* Thesis narrative */}
      <div
        className="scroll-reveal mt-10 max-w-3xl mx-auto"
        style={{ transitionDelay: '0.45s' }}
      >
        <p
          className="text-base md:text-lg leading-relaxed"
          style={{ color: colors.textSecondary }}
        >
          Policy decisions affecting millions of people are made using black-box
          models that cost{' '}
          <span className="font-semibold" style={{ color: colors.highlight }}>
            $10K+ per license
          </span>
          , take weeks to run, and can't be audited.
        </p>
        <p
          className="text-base md:text-lg leading-relaxed mt-4 font-medium"
          style={{ color: colors.textPrimary }}
        >
          We believe every citizen deserves transparent, instant policy
          analysis.{' '}
          <span style={{ color: colors.primary }}>Free and open.</span>
        </p>
      </div>
    </div>
  );
}
