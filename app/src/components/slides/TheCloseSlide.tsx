import { colors } from '../../lib/colors';
import type { SlideProps } from '../../lib/types';

const ORGS = [
  { name: 'Rules Foundation', tagline: 'Encode the law', color: colors.rulesBlue },
  { name: 'Cosilico', tagline: 'Run the infrastructure', color: colors.cosilicoCyan },
  { name: 'PolicyEngine', tagline: 'Tell the story', color: colors.peTeal },
];

const CTA_ITEMS = [
  'Foundation partners',
  'Agency pilot programs',
  'Investor conversations underway',
];

const LINKS = [
  { label: 'pose-ecosystem.vercel.app', url: 'https://pose-ecosystem.vercel.app' },
  { label: 'github.com/PolicyEngine/pose', url: 'https://github.com/PolicyEngine/pose' },
  { label: 'policyengine.org', url: 'https://policyengine.org' },
];

export function TheCloseSlide(_props: SlideProps) {
  return (
    <div className="px-8 md:px-16 flex flex-col items-center justify-center min-h-[80vh] text-center">
      {/* HGP callback */}
      <p className="scroll-reveal text-base md:text-lg text-text-secondary italic leading-relaxed max-w-3xl">
        The Human Genome Project didn't just map DNA. It created an ecosystem: sequencing companies, biotech startups, research institutions, clinical tools. No single organization could have done it all.
      </p>

      <p className="scroll-reveal text-base md:text-lg text-text-secondary italic leading-relaxed max-w-3xl mt-4" style={{ transitionDelay: '0.15s' }}>
        We're building the same thing for the rules that govern American life.
        Our technology is already in use at 10 Downing Street. Major foundations
        are engaging. 100 interviews confirmed the vision. Now we're ready to build.
      </p>

      {/* Three org circles with connections */}
      <div className="scroll-reveal mt-10 flex items-center justify-center gap-6 md:gap-10" style={{ transitionDelay: '0.3s' }}>
        {ORGS.map((org, i) => (
          <div key={org.name} className="flex flex-col items-center">
            {/* Glowing circle */}
            <div className="relative">
              <div
                className="w-20 h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center"
                style={{
                  backgroundColor: `${org.color}15`,
                  border: `2px solid ${org.color}`,
                  boxShadow: `0 0 24px ${org.color}30, 0 0 48px ${org.color}15`,
                }}
              >
                <div
                  className="w-6 h-6 md:w-8 md:h-8 rounded-full"
                  style={{ backgroundColor: org.color, boxShadow: `0 0 12px ${org.color}` }}
                />
              </div>
              {/* Connection line to next org */}
              {i < ORGS.length - 1 && (
                <div
                  className="hidden md:block absolute top-1/2 -right-6 md:-right-10 w-6 md:w-10 h-0.5"
                  style={{
                    background: `linear-gradient(90deg, ${org.color}, ${ORGS[i + 1].color})`,
                    boxShadow: `0 0 8px ${colors.highlight}40`,
                  }}
                />
              )}
            </div>
            <p className="text-sm font-bold text-text-primary mt-3">{org.name}</p>
            <p className="text-xs italic" style={{ color: org.color }}>{org.tagline}</p>
          </div>
        ))}
      </div>

      {/* Final bold line */}
      <h2
        className="scroll-reveal text-2xl md:text-4xl font-bold mt-10 tracking-tight"
        style={{
          color: colors.textPrimary,
          transitionDelay: '0.45s',
        }}
      >
        We hypothesized an ecosystem. 100 interviews proved it.{' '}
        <span style={{ color: colors.highlight }}>Now we're building it.</span>
      </h2>

      {/* CTA */}
      <div
        className="scroll-reveal mt-10 flex flex-col items-center gap-3"
        style={{ transitionDelay: '0.6s' }}
      >
        <p className="text-[10px] font-bold tracking-wider uppercase text-text-tertiary">
          Looking for
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          {CTA_ITEMS.map((item) => (
            <span
              key={item}
              className="text-sm px-4 py-1.5 rounded-full font-medium"
              style={{
                color: colors.primary,
                backgroundColor: colors.primaryLight,
                border: `1px solid ${colors.primary}30`,
              }}
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Links */}
      <div
        className="scroll-reveal mt-6 flex flex-wrap justify-center gap-4"
        style={{ transitionDelay: '0.7s' }}
      >
        {LINKS.map((link) => (
          <a
            key={link.label}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-text-tertiary hover:text-text-secondary transition-colors"
          >
            {link.label}
          </a>
        ))}
      </div>
    </div>
  );
}
