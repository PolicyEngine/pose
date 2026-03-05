import type { SlideProps } from '@/lib/types';
import { colors } from '@/lib/colors';
import { SlideHeader } from '@/components/ui/SlideHeader';
import { Card } from '@/components/ui/Card';

const revenueModels = [
  {
    name: 'Rules Foundation',
    logo: '/assets/logos/rf-full.svg',
    color: colors.rulesBlue,
    entity: '501(c)(3)',
    budget: '~$300K/year',
    streams: [
      { label: 'Government grants', pct: '40%' },
      { label: 'Foundation grants', pct: '30%' },
      { label: 'AI lab in-kind (compute)', pct: '20%' },
      { label: 'Downstream contributions', pct: '10%' },
    ],
  },
  {
    name: 'Cosilico',
    logo: '/assets/logos/cosilico-full.svg',
    color: colors.cosilicoCyan,
    entity: 'Public Benefit Corp',
    budget: '$500K \u2192 $75M ARR over 5yr',
    streams: [
      { label: 'Open source (free, Apache 2.0)', pct: 'Free' },
      { label: 'API calls', pct: '$0.001\u20130.01/call' },
      { label: 'Data enrichment', pct: '$0.10\u20131.00/record' },
      { label: 'Enterprise', pct: '$100K\u20131M+/yr' },
    ],
  },
  {
    name: 'PolicyEngine',
    logo: '/assets/logos/pe-full-white.svg',
    color: colors.peTeal,
    entity: '501(c)(3) / Charity',
    budget: '~$500K/year',
    streams: [
      { label: 'Foundation grants', pct: '60%' },
      { label: 'Government grants (NSF)', pct: '20%' },
      { label: 'Earned revenue', pct: '20%' },
      { label: 'Path to 40%+ earned', pct: 'Goal' },
    ],
  },
];

export function CanvasDetailSlide(_props: SlideProps) {
  return (
    <div className="px-8 md:px-16">
      <SlideHeader
        tag="BUSINESS MODEL"
        tagColor={colors.cosilicoCyan}
        title="Revenue models per organization"
        isAppendix
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        {revenueModels.map((org, i) => (
          <Card key={org.name} borderColor={org.color} delay={i * 0.15}>
            <div className="h-1 rounded-t-lg" style={{ backgroundColor: org.color }} />
            <div className="p-5">
              <img src={org.logo} alt={org.name} className="h-5" />
              <p className="text-xs mt-1" style={{ color: colors.textTertiary }}>
                {org.entity}
              </p>
              <p className="text-sm font-medium mt-2" style={{ color: colors.textPrimary }}>
                {org.budget}
              </p>
              <div className="mt-4 space-y-2">
                {org.streams.map((s) => (
                  <div key={s.label} className="flex justify-between items-baseline">
                    <span className="text-xs" style={{ color: colors.textSecondary }}>
                      {s.label}
                    </span>
                    <span className="text-xs font-semibold ml-2 shrink-0" style={{ color: org.color }}>
                      {s.pct}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
