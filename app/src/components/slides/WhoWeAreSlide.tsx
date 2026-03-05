import type { SlideProps } from '../../lib/types';
import { colors } from '../../lib/colors';
import { SlideHeader } from '../ui/SlideHeader';
import { team } from '../../data/team';
import { trustedBy } from '../../data/impact';

export function WhoWeAreSlide(_props: SlideProps) {
  return (
    <div className="px-8 md:px-16">
      <img
        src="/assets/logos/pe-full-white.svg"
        alt="PolicyEngine"
        className="scroll-reveal h-8 md:h-10 mb-6"
        style={{ transitionDelay: '0s' }}
      />
      <SlideHeader tag="NSF POSE TEAM 4373" tagColor={colors.primary} title="Who we are" />

      {/* Key numbers */}
      <div className="scroll-reveal flex items-center gap-6 mt-4 mb-2" style={{ transitionDelay: '0.05s' }}>
        <div className="flex items-baseline gap-2">
          <span className="text-2xl font-bold" style={{ color: colors.highlight }}>100+</span>
          <span className="text-sm" style={{ color: colors.textSecondary }}>interviews conducted</span>
        </div>
      </div>

      {/* Team cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        {team.map((member, i) => (
          <div
            key={member.name}
            className="scroll-reveal bg-card-bg rounded-lg border overflow-hidden card-hover"
            style={{
              borderColor: colors.borderLight,
              boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.3)',
              transitionDelay: `${i * 0.12}s`,
            }}
          >
            {/* Color accent bar */}
            <div className="h-1" style={{ backgroundColor: member.color }} />

            {/* Photo */}
            <div className="flex justify-center pt-6">
              <img
                src={member.photo}
                alt={member.name}
                className="w-24 h-24 rounded-full object-cover border-2"
                style={{ borderColor: member.color }}
              />
            </div>

            {/* Info */}
            <div className="p-5 text-center">
              <h3
                className="text-lg font-bold"
                style={{ color: colors.textPrimary }}
              >
                {member.name}
              </h3>
              <p
                className="text-sm font-medium mt-1"
                style={{ color: member.color }}
              >
                {member.role}
              </p>
              <div className="mt-3 space-y-0.5">
                {member.bio.map((line) => (
                  <p
                    key={line}
                    className="text-xs"
                    style={{ color: colors.textSecondary }}
                  >
                    {line}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Summary line */}
      <p
        className="scroll-reveal text-base md:text-lg text-center mt-10 max-w-3xl mx-auto leading-relaxed"
        style={{ color: colors.textSecondary, transitionDelay: '0.4s' }}
      >
        Together we've built the most widely used open-source tax-benefit
        microsimulation platform in the US.
      </p>

      {/* Trusted by */}
      <div
        className="scroll-reveal mt-8 text-center"
        style={{ transitionDelay: '0.55s' }}
      >
        <p
          className="text-[10px] font-semibold tracking-[0.15em] uppercase mb-3"
          style={{ color: colors.textTertiary }}
        >
          Trusted by
        </p>
        <p className="text-sm font-medium" style={{ color: colors.textSecondary }}>
          {trustedBy.line1}
        </p>
        <p
          className="text-xs mt-1.5"
          style={{ color: colors.textTertiary }}
        >
          {trustedBy.line2}
        </p>
      </div>
    </div>
  );
}
