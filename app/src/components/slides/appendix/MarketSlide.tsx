import type { SlideProps } from '../../../lib/types';
import { colors } from '../../../lib/colors';
import { SlideHeader } from '../../ui/SlideHeader';
import { markets } from '../../../data/appendix';

// Parse TAM string to a numeric value for bar sizing
function tamToValue(tam: string): number {
  if (tam === 'Strategic' || tam === 'Growing') return 5;
  const match = tam.match(/([\d.]+)/);
  if (!match) return 5;
  const num = parseFloat(match[1]);
  if (tam.includes('B')) return num;
  if (tam.includes('M')) return num / 1000;
  return num;
}

export function MarketSlide(_props: SlideProps) {
  const maxVal = Math.max(...markets.map((m) => tamToValue(m.tam)));

  return (
    <div className="px-8 md:px-16">
      <SlideHeader
        tag="MARKET SEGMENTS"
        tagColor={colors.cosilicoCyan}
        title="$250B+ total addressable market"
        isAppendix
      />

      <div className="mt-8 space-y-2">
        {markets.map((m, i) => {
          const val = tamToValue(m.tam);
          const pct = Math.max((val / maxVal) * 100, 4);
          const isStrategic = m.tam === 'Strategic' || m.tam === 'Growing';
          return (
            <div
              key={m.name}
              className="scroll-reveal flex items-center gap-4"
              style={{ transitionDelay: `${i * 0.06}s` }}
            >
              <span
                className="text-xs font-medium w-40 shrink-0 text-right"
                style={{ color: colors.textSecondary }}
              >
                {m.name}
              </span>
              <div className="flex-1 h-7 rounded-md overflow-hidden" style={{ backgroundColor: colors.cardBgAlt }}>
                <div
                  className="h-full rounded-md flex items-center pl-3 transition-all duration-700"
                  style={{
                    width: `${pct}%`,
                    backgroundColor: isStrategic
                      ? 'rgba(6, 182, 212, 0.3)'
                      : 'rgba(6, 182, 212, 0.6)',
                    minWidth: '3rem',
                  }}
                >
                  <span
                    className="text-xs font-bold whitespace-nowrap"
                    style={{ color: colors.textPrimary }}
                  >
                    {m.tam}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Total */}
      <div
        className="scroll-reveal mt-8 text-center"
        style={{ transitionDelay: '0.8s' }}
      >
        <p className="text-3xl font-bold" style={{ color: colors.cosilicoCyan }}>
          $250B+
        </p>
        <p className="text-sm mt-1" style={{ color: colors.textTertiary }}>
          Total addressable market (Cosilico)
        </p>
      </div>
    </div>
  );
}
