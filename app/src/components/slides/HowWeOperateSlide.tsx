import type { SlideProps } from '@/lib/types';
import { colors } from '@/lib/colors';
import { SlideHeader } from '@/components/ui/SlideHeader';
import { LAYER_COLORS } from '@/data/layers';

const LAYERS = [
  {
    layer: 'Foundation',
    subtitle: 'Encode the raw material',
    label: 'Encode',
    title: 'We encode public policy',
    color: LAYER_COLORS.foundation,
    description: '160,000+ pages of federal tax code, 50 state systems, and 100+ benefit programs — translated into open-source, machine-readable rules.',
    examples: ['Federal income tax', 'SNAP & Medicaid', 'State credits & deductions', 'Child Tax Credit'],
  },
  {
    layer: 'Computation',
    subtitle: 'Build models on the data',
    label: 'Simulate',
    title: 'We develop simulation models',
    color: LAYER_COLORS.computation,
    description: 'Run encoded rules against representative survey data to model how policy changes affect every household in the country.',
    examples: ['Household calculators', 'Budget scoring', 'Distributional analysis', 'Poverty impact'],
  },
  {
    layer: 'Application',
    subtitle: 'Bring it to people',
    label: 'Research & tools',
    title: 'We conduct research and build tools',
    color: LAYER_COLORS.application,
    description: 'Produce reports, analysis, and applications that bring policy to life — used by policymakers, journalists, and researchers.',
    examples: ['Policy reports', 'Media analysis', 'Academic partnerships', 'Congressional briefings'],
  },
];

export function HowWeOperateSlide(_props: SlideProps) {
  return (
    <div className="px-8 md:px-16">
      <SlideHeader
        tag="OUR WORK"
        tagColor={colors.primary}
        title="PolicyEngine across the policy stack"
      />

      <p
        className="scroll-reveal text-sm md:text-base max-w-3xl mt-2 leading-relaxed"
        style={{ color: colors.textSecondary, transitionDelay: '0.05s' }}
      >
        When we started PolicyEngine, the goal was to provide the{' '}
        <span className="font-semibold" style={{ color: LAYER_COLORS.computation }}>computational layer</span>
        . Over time we found ourselves expanding into encoding the rules themselves and
        building the research and tools that bring policy to life.
      </p>

      <div className="mt-6 space-y-3">
        {LAYERS.map((layer, li) => (
          <div
            key={layer.label}
            className="scroll-reveal"
            style={{ transitionDelay: `${0.1 + li * 0.15}s` }}
          >
            <div className="flex items-start gap-3">
              {/* Layer label — same style as HGP slide */}
              <div
                className="w-32 shrink-0 py-3 px-3 rounded-lg text-center flex flex-col justify-center"
                style={{
                  color: layer.color,
                  backgroundColor: `${layer.color}10`,
                  border: `1.5px solid ${layer.color}25`,
                }}
              >
                <p className="text-xs font-bold uppercase tracking-wider">{layer.layer}</p>
                <p className="text-[9px] mt-0.5 opacity-60">{layer.subtitle}</p>
              </div>

              {/* Content card — single full-width card with PE logo */}
              <div
                className="flex-1 rounded-lg border p-4 flex gap-4 items-start"
                style={{
                  borderColor: `${layer.color}35`,
                  backgroundColor: `${layer.color}08`,
                }}
              >
                <div className="flex-1">
                  <h3 className="text-[15px] font-semibold" style={{ color: colors.textPrimary }}>
                    {layer.title}
                  </h3>
                  <p className="text-xs mt-1.5 leading-relaxed" style={{ color: colors.textSecondary }}>
                    {layer.description}
                  </p>
                </div>
                <div className="shrink-0 flex flex-col gap-1.5 items-stretch">
                  {layer.examples.map((ex) => (
                    <span
                      key={ex}
                      className="text-[11px] px-2 py-0.5 rounded-md whitespace-nowrap text-left"
                      style={{
                        color: layer.color,
                        backgroundColor: `${layer.color}10`,
                        border: `1px solid ${layer.color}15`,
                      }}
                    >
                      {ex}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Connector — same as HGP slide */}
            {li < LAYERS.length - 1 && (
              <div className="flex justify-center ml-32 my-1">
                <svg width="20" height="16" viewBox="0 0 20 16">
                  <path d="M10 0 L10 12 M5 8 L10 14 L15 8" stroke={colors.textTertiary} strokeWidth="1.5" fill="none" strokeLinecap="round" />
                </svg>
              </div>
            )}
          </div>
        ))}
      </div>

      <p
        className="scroll-reveal text-sm text-center mt-5"
        style={{ color: colors.textTertiary, transitionDelay: '0.6s' }}
      >
        Today the alternatives cost $10K+ per license, take weeks, and can&apos;t be audited.{' '}
        <span className="font-medium" style={{ color: colors.primary }}>PolicyEngine is free and open.</span>
      </p>
    </div>
  );
}
