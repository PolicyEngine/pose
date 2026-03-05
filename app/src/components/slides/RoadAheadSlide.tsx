import { colors } from '@/lib/colors';
import { milestones, orgTimelines } from '@/data/timeline';
import type { SlideProps } from '@/lib/types';
import { SlideHeader } from '@/components/ui/SlideHeader';

const ALL_LABELS = ['Q1 2026', 'Q2-Q3 2026', 'Q4 2026', '2027', '2028'];
const ALL_COLORS = [colors.highlight, colors.accentBlue, colors.accentTeal, colors.accentGreen, colors.accentPurple];

const PHASE_LABELS = ALL_LABELS.slice(1);

export function RoadAheadSlide(_props: SlideProps) {
  const now = milestones[0];

  return (
    <div className="px-8 md:px-16">
      <SlideHeader tag="TIMELINE" tagColor={colors.primary} title="The road ahead" />

      {/* Everything in one grid so dots align with cells */}
      <div className="mt-8 grid gap-x-3 gap-y-3" style={{ gridTemplateColumns: 'auto repeat(5, 1fr)', gridTemplateRows: 'auto auto 1fr 1fr 1fr' }}>

        {/* Row 1: Timeline connector line spanning cols 2-6, with dots placed per-column */}
        <div style={{ gridColumn: '1', gridRow: '1' }} />
        {/* Gradient line behind dots */}
        <div className="relative" style={{ gridColumn: '2 / 7', gridRow: '1', pointerEvents: 'none' }}>
          <div className="absolute top-5 left-0 right-0 h-0.5" style={{ backgroundColor: colors.borderMedium }}>
            <div
              className="h-full rounded-full"
              style={{
                background: `linear-gradient(90deg, ${colors.highlight}, ${colors.accentBlue}, ${colors.accentTeal}, ${colors.accentGreen}, ${colors.accentPurple})`,
                boxShadow: `0 0 12px ${colors.primary}40`,
              }}
            />
          </div>
        </div>
        {/* Individual dots in each column */}
        {ALL_LABELS.map((_, i) => (
          <div key={`dot-${i}`} className="flex justify-center relative z-10" style={{ gridColumn: i + 2, gridRow: '1' }}>
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center"
              style={{
                backgroundColor: `${ALL_COLORS[i]}20`,
                border: `2px solid ${ALL_COLORS[i]}`,
                boxShadow: `0 0 16px ${ALL_COLORS[i]}40`,
              }}
            >
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: ALL_COLORS[i] }} />
            </div>
          </div>
        ))}

        {/* Row 2: Time period labels per-column */}
        <div style={{ gridColumn: '1', gridRow: '2' }} />
        {ALL_LABELS.map((label, i) => (
          <div key={label} className="scroll-reveal text-center" style={{ gridColumn: i + 2, gridRow: '2', transitionDelay: `${i * 0.1}s` }}>
            <p className="text-xs font-bold" style={{ color: ALL_COLORS[i] }}>
              {label}
            </p>
          </div>
        ))}
        {/* Org labels column — rows 3-5 */}
        {orgTimelines.map((org, oi) => (
          <div
            key={`label-${org.org}`}
            className="scroll-reveal flex items-center pr-3"
            style={{ gridColumn: 1, gridRow: oi + 3, transitionDelay: `${oi * 0.1}s` }}
          >
            <div>
              {org.logo ? (
                <img src={org.logo} alt={org.org} style={{ width: '120px' }} className="object-contain object-left" />
              ) : (
                <p className="text-xs font-bold tracking-wider uppercase whitespace-nowrap" style={{ color: org.color }}>
                  {org.org}
                </p>
              )}
              {org.subtitle && (
                <p className="text-[9px] text-text-tertiary whitespace-nowrap">{org.subtitle}</p>
              )}
            </div>
          </div>
        ))}

        {/* NOW — single merged box spanning all 3 org rows */}
        <div
          className="scroll-reveal rounded-lg border p-3 flex flex-col justify-center"
          style={{
            gridColumn: 2,
            gridRow: '3 / 6',
            borderColor: `${now.color}50`,
            backgroundColor: `${now.color}10`,
            boxShadow: `0 0 20px ${now.color}15`,
          }}
        >
          <ul className="space-y-2">
            {now.description.map((item) => (
              <li key={item} className="text-xs text-text-secondary flex items-start gap-2">
                <span
                  className="mt-[5px] w-1.5 h-1.5 rounded-full shrink-0"
                  style={{ backgroundColor: now.color }}
                />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Swim lane cells for each org × each phase (LAUNCH–SUSTAIN) */}
        {orgTimelines.map((org, oi) => (
          PHASE_LABELS.map((phase, pi) => {
            const match = org.milestones.find((m) => m.period === phase);
            return (
              <div
                key={`${org.org}-${phase}`}
                className="scroll-reveal rounded-md border p-2.5 flex items-start"
                style={{
                  gridColumn: pi + 3,
                  gridRow: oi + 3,
                  transitionDelay: `${(oi * 4 + pi) * 0.05}s`,
                  borderColor: match ? `${org.color}30` : colors.borderLight,
                  backgroundColor: match ? `${org.color}08` : 'transparent',
                }}
              >
                {match && (
                  <ul className="space-y-2">
                    {match.items.map((item) => (
                      <li key={item} className="text-xs text-text-secondary flex items-start gap-2">
                        <span
                          className="mt-[5px] w-1.5 h-1.5 rounded-full shrink-0"
                          style={{ backgroundColor: org.color }}
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            );
          })
        ))}
      </div>
    </div>
  );
}
