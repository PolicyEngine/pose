import type { SlideProps } from '../../../lib/types';
import { colors } from '../../../lib/colors';
import { SlideHeader } from '../../ui/SlideHeader';
import { markets } from '../../../data/appendix';

export function MarketSlide(_props: SlideProps) {
  return (
    <div className="px-8 md:px-16 py-4">
      <SlideHeader tag="COSILICO: 12 MARKET SEGMENTS, $250B+ TAM" tagColor={colors.cosilicoCyan} isAppendix />

      <div className="grid grid-cols-3 gap-3 mt-4">
        {markets.map((m, i) => (
          <div
            key={m.name}
            className="scroll-reveal-scale bg-card-bg rounded-lg border border-border-light p-3 card-hover"
            style={{
              boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.04)',
              transitionDelay: `${i * 0.04}s`,
            }}
          >
            <p className="text-sm font-bold text-text-primary">{m.name}</p>
            <p className="text-xs font-medium mt-1" style={{ color: colors.cosilicoCyan }}>TAM: {m.tam}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
