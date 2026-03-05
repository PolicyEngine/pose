import type { SlideProps } from '@/lib/types';
import { colors } from '@/lib/colors';
import { SlideHeader } from '@/components/ui/SlideHeader';
import { LAYER_COLORS } from '@/data/layers';

const LAYERS = [
  {
    layer: 'Foundation',
    subtitle: 'Encode the raw material',
    color: LAYER_COLORS.foundation,
    org: 'Rules Foundation',
    logo: '/assets/logos/rf-full.svg',
    description: 'A nonprofit dedicated to encoding tax and benefit rules into open, machine-readable code.',
    detail: 'Focused governance for government partnerships, standards bodies, and legislative drafters.',
  },
  {
    layer: 'Computation',
    subtitle: 'Build models on the data',
    color: LAYER_COLORS.computation,
    org: 'Cosilico',
    logo: '/assets/logos/cosilico-full.svg',
    description: 'A commercial platform building simulation APIs on open rule encodings.',
    detail: 'Revenue-generating model enabling enterprise customers, certified partners, and SaaS products.',
  },
  {
    layer: 'Application',
    subtitle: 'Bring it to people',
    color: LAYER_COLORS.application,
    org: 'PolicyEngine',
    logo: '/assets/logos/pe-full-white.svg',
    description: 'The research and public-facing layer — bringing policy to life for individuals and society.',
    detail: 'Continues the mission: free, open analysis for policymakers, journalists, and researchers.',
  },
];

export function ThreeOrgStackSlide(_props: SlideProps) {
  return (
    <div className="px-8 md:px-16">
      <SlideHeader
        tag="THE INSIGHT"
        tagColor={colors.highlight}
        title="Each layer needs a dedicated organization"
      />

      <p
        className="scroll-reveal text-sm md:text-base max-w-3xl mt-2 leading-relaxed"
        style={{ color: colors.textSecondary, transitionDelay: '0.05s' }}
      >
        100 conversations confirmed it: different audiences need different governance,
        funding models, and technical architecture. One organization genuinely cannot serve
        all three layers well.
      </p>

      <div className="mt-6 space-y-3">
        {LAYERS.map((layer, li) => (
          <div
            key={layer.org}
            className="scroll-reveal"
            style={{ transitionDelay: `${0.1 + li * 0.15}s` }}
          >
            <div className="flex items-start gap-3">
              {/* Layer label — identical style to HGP and PE slides */}
              <div
                className="w-28 shrink-0 py-3 px-3 rounded-lg text-center flex flex-col justify-center"
                style={{
                  color: layer.color,
                  backgroundColor: `${layer.color}10`,
                  border: `1.5px solid ${layer.color}25`,
                }}
              >
                <p className="text-xs font-bold uppercase tracking-wider">{layer.layer}</p>
                <p className="text-[9px] mt-0.5 opacity-60">{layer.subtitle}</p>
              </div>

              {/* Org card */}
              <div
                className="flex-1 rounded-lg border p-4 flex gap-4 items-center"
                style={{
                  borderColor: `${layer.color}50`,
                  backgroundColor: `${layer.color}10`,
                  boxShadow: `0 0 20px ${layer.color}12`,
                }}
              >
                <img src={layer.logo} alt={layer.org} className="h-8 shrink-0" />
                <div className="flex-1">
                  <p className="text-sm leading-relaxed" style={{ color: colors.textPrimary }}>
                    {layer.description}
                  </p>
                  <p className="text-xs mt-1 leading-relaxed" style={{ color: colors.textTertiary }}>
                    {layer.detail}
                  </p>
                </div>
              </div>
            </div>

            {/* Connector — same as other slides */}
            {li < LAYERS.length - 1 && (
              <div className="flex justify-center ml-28 my-1">
                <svg width="20" height="16" viewBox="0 0 20 16">
                  <path d="M10 0 L10 12 M5 8 L10 14 L15 8" stroke={colors.textTertiary} strokeWidth="1.5" fill="none" strokeLinecap="round" />
                </svg>
              </div>
            )}
          </div>
        ))}
      </div>

      <p
        className="scroll-reveal text-sm text-center mt-5 italic"
        style={{ color: colors.textTertiary, transitionDelay: '0.6s' }}
      >
        Three organizations. Each specialized. Each stronger for the separation.{' '}
        <span className="not-italic font-medium" style={{ color: colors.primary }}>
          Connected by shared open-source code.
        </span>
      </p>
    </div>
  );
}
