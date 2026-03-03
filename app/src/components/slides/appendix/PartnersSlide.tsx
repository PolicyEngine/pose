import type { SlideProps } from '../../../lib/types';
import { colors } from '../../../lib/colors';
import { SlideHeader } from '../../ui/SlideHeader';
import { partners } from '../../../data/appendix';

export function PartnersSlide(_props: SlideProps) {
  return (
    <div className="px-8 md:px-16 py-4">
      <SlideHeader tag="STRATEGIC PARTNERS" tagColor={colors.accentPurple} isAppendix />

      <div className="grid grid-cols-3 gap-4 mt-4">
        {partners.map((p, i) => (
          <div
            key={p.name}
            className="scroll-reveal bg-card-bg rounded-lg border-t-4 border p-4 card-hover"
            style={{
              borderTopColor: p.color,
              borderLeftColor: '#E2E8F0',
              borderRightColor: '#E2E8F0',
              borderBottomColor: '#E2E8F0',
              boxShadow: '0px 1px 3px rgba(16, 24, 40, 0.06), 0px 1px 2px rgba(16, 24, 40, 0.04)',
              transitionDelay: `${i * 0.1}s`,
            }}
          >
            <h3 className="text-base font-bold text-text-primary">{p.name}</h3>
            <p className="text-xs font-medium mt-1" style={{ color: p.color }}>{p.orgs}</p>
            <p className="text-xs text-text-tertiary font-bold mt-2 uppercase tracking-wider">{p.type}</p>

            <p className="text-xs font-bold mt-3" style={{ color: colors.success }}>What's in it for them:</p>
            {p.value.map((v, j) => (
              <p key={j} className="text-xs text-text-secondary mt-0.5">{v}</p>
            ))}

            <p className="text-xs font-bold mt-3" style={{ color: colors.accentOrange }}>Risk:</p>
            <p className="text-xs text-text-tertiary mt-0.5">{p.risk}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
