import type { SlideProps } from '@/lib/types';
import { colors } from '@/lib/colors';
import { SlideHeader } from '@/components/ui/SlideHeader';
import { Card } from '@/components/ui/Card';
import { partners } from '@/data/appendix';

export function PartnersSlide(_props: SlideProps) {
  return (
    <div className="px-8 md:px-16">
      <SlideHeader
        tag="STRATEGIC PARTNERS"
        tagColor={colors.accentPurple}
        title="Who we need and why"
        isAppendix
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        {partners.map((p, i) => (
          <Card key={p.name} borderColor={p.color} delay={i * 0.15}>
            <div className="h-1 rounded-t-lg" style={{ backgroundColor: p.color }} />
            <div className="p-5">
              <h3 className="text-base font-bold" style={{ color: p.color }}>
                {p.name}
              </h3>
              <p className="text-xs mt-1" style={{ color: colors.textTertiary }}>
                {p.type}
              </p>
              <p className="text-sm font-medium mt-3" style={{ color: colors.textPrimary }}>
                {p.orgs}
              </p>

              <div className="mt-4">
                <p className="text-[10px] font-semibold tracking-wider uppercase mb-2" style={{ color: colors.textTertiary }}>
                  Value
                </p>
                <ul className="space-y-1">
                  {p.value.map((v) => (
                    <li key={v} className="text-xs leading-relaxed" style={{ color: colors.textSecondary }}>
                      &bull; {v}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-4 p-2 rounded" style={{ backgroundColor: 'rgba(239, 68, 68, 0.08)' }}>
                <p className="text-[10px] font-semibold tracking-wider uppercase mb-1" style={{ color: colors.error }}>
                  Risk
                </p>
                <p className="text-xs" style={{ color: colors.textSecondary }}>
                  {p.risk}
                </p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
