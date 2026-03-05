import type { SlideProps } from '@/lib/types';
import { colors } from '@/lib/colors';
import { SlideHeader } from '@/components/ui/SlideHeader';

const INTERFACES = [
  { label: 'Web app', desc: 'Interactive calculators at policyengine.org' },
  { label: 'Python package', desc: 'Full programmatic access for researchers' },
  { label: 'REST API', desc: 'Integrate into any application' },
  { label: 'AI interfaces', desc: 'Natural language via Claude' },
];

export function FourthOptionSlide(_props: SlideProps) {
  return (
    <div className="px-8 md:px-16">
      <SlideHeader
        tag="THE OPPORTUNITY"
        tagColor={colors.primary}
        title="What if there was a fourth option?"
      />

      <div className="flex gap-6 mt-4 items-start">
        {/* Left: screenshot */}
        <div
          className="scroll-reveal shrink-0"
          style={{ transitionDelay: '0.1s' }}
        >
          <img
            src="/assets/pe-winners-losers.png"
            alt="PolicyEngine analyzing Nebraska EITC"
            className="rounded-lg shadow-lg"
            style={{ width: '380px', border: `1px solid ${colors.borderMedium}` }}
          />

          {/* Terminal prompt */}
          <div
            className="scroll-reveal mt-3 rounded-lg overflow-hidden"
            style={{
              transitionDelay: '0.15s',
              width: '380px',
              backgroundColor: '#1a1a2e',
              border: `1px solid ${colors.borderMedium}`,
            }}
          >
            <div className="flex items-center gap-1.5 px-3 py-2">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
            </div>
            <div className="px-4 pb-3">
              <p className="font-mono text-xs leading-relaxed" style={{ color: colors.textPrimary }}>
                &gt; What if we raised the standard deduction to $20,000?
              </p>
              <p className="font-mono text-xs leading-relaxed mt-1" style={{ color: colors.textTertiary }}>
                &nbsp;&nbsp;Running microsimulation on 2024 Enhanced CPS...
              </p>
              <p className="font-mono text-xs leading-relaxed mt-1" style={{ color: colors.accentGreen }}>
                &nbsp;&nbsp;Cost: $80B &middot; Winners: 62% &middot; Gini: &minus;0.001
              </p>
            </div>
          </div>
        </div>

        {/* Right: text + interface cards */}
        <div className="flex-1 flex flex-col">
          <div
            className="scroll-reveal"
            style={{ transitionDelay: '0.15s' }}
          >
            <h3 className="text-xl font-bold" style={{ color: colors.textPrimary }}>
              Use PolicyEngine &mdash; free and instant
            </h3>
            <p className="text-sm mt-2 leading-relaxed" style={{ color: colors.textSecondary }}>
              Microsimulation models for the US and the UK that anyone can run &mdash; no gatekeepers,
              no wait, fully auditable.
            </p>
          </div>

          <div className="scroll-reveal grid grid-cols-2 gap-2.5 mt-4" style={{ transitionDelay: '0.25s' }}>
            {INTERFACES.map((iface) => (
              <div
                key={iface.label}
                className="rounded-lg border p-3"
                style={{
                  borderColor: `${colors.primary}30`,
                  backgroundColor: `${colors.primary}06`,
                }}
              >
                <p className="text-sm font-semibold" style={{ color: colors.textPrimary }}>
                  {iface.label}
                </p>
                <p className="text-[11px] mt-0.5 leading-relaxed" style={{ color: colors.textSecondary }}>
                  {iface.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}
