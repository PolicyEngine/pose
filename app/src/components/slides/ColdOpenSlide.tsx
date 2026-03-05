import type { SlideProps } from '@/lib/types';
import { colors } from '@/lib/colors';
import { SlideHeader } from '@/components/ui/SlideHeader';

const LAYERS = [
  {
    layer: 'Foundation',
    subtitle: 'Encode the raw material',
    color: colors.highlight,
    items: [
      { name: 'Human Genome Project', desc: 'Sequenced all 3 billion base pairs of human DNA into an open, machine-readable reference genome', highlight: true },
    ],
  },
  {
    layer: 'Computation',
    subtitle: 'Build models on the data',
    color: colors.cosilicoCyan,
    items: [
      { name: 'DeepMind / AlphaFold', desc: 'Predicted 3D structures for the entire human proteome cataloged by HGP', highlight: true },
      { name: 'Schrödinger', desc: 'Molecular simulation on open structural data', highlight: false },
      { name: 'Broad Institute', desc: 'Open-source genomic analysis tools (GATK, Terra)', highlight: false },
    ],
  },
  {
    layer: 'Application',
    subtitle: 'Bring it to people',
    color: colors.peTeal,
    items: [
      { name: '23andMe', desc: 'Made genomics personal — millions of consumers explore their own DNA using open genome data', highlight: true },
      { name: 'Moderna', desc: 'mRNA therapeutics from genomic insights', highlight: false },
      { name: 'Illumina', desc: 'Sequencing hardware', highlight: false },
    ],
  },
];

export function ColdOpenSlide(_props: SlideProps) {
  return (
    <div className="px-8 md:px-16">
      <SlideHeader
        tag="INSPIRATION"
        tagColor={colors.highlight}
        title="The Human Genome Project created an ecosystem"
      />

      <p
        className="scroll-reveal text-sm md:text-base max-w-3xl mt-2 leading-relaxed"
        style={{ color: colors.textSecondary, transitionDelay: '0.05s' }}
      >
        One foundational investment — sequencing the human genome — unlocked an entire ecosystem
        of computation and application that generated{' '}
        <span className="font-semibold" style={{ color: colors.accentGreen }}>$796B in economic value</span>
        {' '}from a{' '}
        <span className="font-semibold" style={{ color: colors.highlight }}>$3.8B investment</span>.
      </p>

      <div className="mt-6 space-y-3">
        {LAYERS.map((layer, li) => (
          <div
            key={layer.layer}
            className="scroll-reveal"
            style={{ transitionDelay: `${0.1 + li * 0.15}s` }}
          >
            <div className="flex items-start gap-3">
              {/* Layer label */}
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

              {/* Items */}
              <div className="flex-1 flex gap-2">
                {layer.items.map((item) => (
                  <div
                    key={item.name}
                    className="rounded-lg border p-3"
                    style={{
                      flex: item.highlight ? 2 : 1,
                      borderColor: item.highlight ? `${layer.color}50` : `${layer.color}15`,
                      backgroundColor: item.highlight ? `${layer.color}12` : `${layer.color}04`,
                      boxShadow: item.highlight ? `0 0 20px ${layer.color}12` : 'none',
                    }}
                  >
                    <p
                      className="font-semibold"
                      style={{
                        color: item.highlight ? colors.textPrimary : colors.textTertiary,
                        fontSize: item.highlight ? '15px' : '13px',
                      }}
                    >
                      {item.name}
                    </p>
                    <p
                      className="mt-1 leading-relaxed"
                      style={{
                        color: item.highlight ? colors.textSecondary : colors.textTertiary,
                        fontSize: item.highlight ? '12px' : '11px',
                      }}
                    >
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Connector */}
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

      {/* Footnote */}
      <p
        className="scroll-reveal text-[10px] mt-6 opacity-50"
        style={{ color: colors.textTertiary, transitionDelay: '0.7s' }}
      >
        Source: Battelle Technology Partnership Practice, &ldquo;Economic Impact of the Human Genome Project&rdquo; (2011).
        Figures represent 1988&ndash;2010 federal genomic research investment and resulting economic activity.
      </p>
    </div>
  );
}
