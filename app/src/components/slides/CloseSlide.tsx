import type { SlideProps } from '../../lib/types';
import { colors } from '../../lib/colors';

const closeOrgs = [
  { name: 'Rules Foundation', tagline: 'Encode the law', color: colors.rulesBlue },
  { name: 'Cosilico', tagline: 'Run the infrastructure', color: colors.cosilicoCyan },
  { name: 'PolicyEngine', tagline: 'Tell the story', color: colors.peTeal },
];

export function CloseSlide(_props: SlideProps) {
  return (
    <div className="flex flex-col items-center justify-center px-8 relative min-h-screen">
      <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ backgroundColor: colors.primary }} />

      <h1 className="scroll-reveal font-bold text-text-primary text-center text-4xl tracking-tight">
        One ecosystem became three.
      </h1>
      <p
        className="scroll-reveal font-bold text-center mt-2 text-2xl tracking-tight"
        style={{ color: colors.primary, transitionDelay: '0.1s' }}
      >
        Each stronger for it.
      </p>

      <div
        className="scroll-reveal-width w-24 h-[2px] rounded-full mt-6"
        style={{ backgroundColor: colors.primary, transitionDelay: '0.3s' }}
      />

      <div className="flex gap-12 mt-8">
        {closeOrgs.map((org, i) => (
          <div
            key={org.name}
            className="scroll-reveal flex flex-col items-center"
            style={{ transitionDelay: `${0.4 + i * 0.1}s` }}
          >
            <div className="w-8 h-8 rounded-full" style={{ backgroundColor: org.color }} />
            <p className="text-base font-bold text-text-primary mt-3">{org.name}</p>
            <p className="text-sm font-medium" style={{ color: org.color }}>{org.tagline}</p>
          </div>
        ))}
      </div>

      <div
        className="scroll-reveal bg-card-bg rounded-lg border px-8 py-3 mt-8"
        style={{
          borderColor: colors.primary,
          boxShadow: '0px 1px 3px rgba(16, 24, 40, 0.06)',
          transitionDelay: '0.7s',
        }}
      >
        <p className="text-sm font-semibold text-center" style={{ color: colors.primary }}>
          Looking for:  foundation partners  ·  agency pilot programs  ·  AI lab collaborations
        </p>
      </div>

      <p
        className="scroll-reveal text-text-tertiary text-xs mt-6"
        style={{ transitionDelay: '0.9s' }}
      >
        pose-ecosystem.vercel.app  |  github.com/PolicyEngine/pose  |  policyengine.org
      </p>
    </div>
  );
}
