import { colors } from '../../lib/colors';
import { sustainability } from '../../data/sustainability';
import type { SlideProps } from '../../lib/types';
import { SlideHeader } from '../ui/SlideHeader';
import { Card } from '../ui/Card';

interface OrgPanel {
  name: string;
  tagline: string;
  entity: string;
  analogy: string;
  color: string;
  glow: string;
  budget: string;
  revenueItems: string[];
  quote: string;
  quoteName: string;
  quoteTitle: string;
}

const ORG_PANELS: OrgPanel[] = [
  {
    name: 'Rules Foundation',
    tagline: 'Encode the law',
    entity: '501(c)(3)',
    analogy: 'Like OpenStreetMap for law',
    color: colors.rulesBlue,
    glow: colors.glowRules,
    budget: sustainability[0].budget,
    revenueItems: sustainability[0].items,
    quote: 'Programs and tax rules in silos create severe unintended consequences \u2014 cliffs, penalties. Modeling these is influencing legislators.',
    quoteName: 'Ray Packer',
    quoteTitle: 'Georgia Center for Opportunity',
  },
  {
    name: 'Cosilico',
    tagline: 'Run the infrastructure',
    entity: 'Public Benefit Corp',
    analogy: 'Society, in silico \u00b7 $250B+ TAM',
    color: colors.cosilicoCyan,
    glow: colors.glowCosilico,
    budget: sustainability[1].budget,
    revenueItems: sustainability[1].items,
    quote: 'Data and rules complexity create big gaps where better microsim tools and infrastructure are still missing.',
    quoteName: 'Jack Landry',
    quoteTitle: 'Jane Family Institute',
  },
  {
    name: 'PolicyEngine',
    tagline: 'Tell the story',
    entity: '501(c)(3) / UK Charity',
    analogy: 'Like Urban/Mathematica but open source',
    color: colors.peTeal,
    glow: colors.glowPE,
    budget: sustainability[2].budget,
    revenueItems: sustainability[2].items,
    quote: 'Think tanks want auditable methodology they can cite in publications.',
    quoteName: 'Think tank interviewees',
    quoteTitle: '',
  },
];

export function MeetTheThreeSlide(_props: SlideProps) {
  return (
    <div className="px-8 md:px-16">
      <SlideHeader tag="THE THREE ORGS" tagColor={colors.peTeal} title="Meet the three" />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
        {ORG_PANELS.map((org, i) => (
          <Card key={org.name} delay={i * 0.15}>
            <div
              className="h-1 rounded-t-lg"
              style={{ backgroundColor: org.color }}
            />
            <div className="p-5">
              {/* Header */}
              <div className="flex items-center gap-2 mb-1">
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: org.color, boxShadow: `0 0 8px ${org.color}` }}
                />
                <h3 className="text-lg font-bold text-text-primary">{org.name}</h3>
              </div>
              <p className="text-sm font-semibold italic" style={{ color: org.color }}>
                {org.tagline}
              </p>

              {/* Entity + analogy */}
              <div className="mt-3 flex flex-col gap-1">
                <span
                  className="inline-block text-[10px] font-bold tracking-wider uppercase px-2 py-0.5 rounded-full w-fit"
                  style={{
                    color: org.color,
                    backgroundColor: `${org.color}15`,
                    border: `1px solid ${org.color}30`,
                  }}
                >
                  {org.entity}
                </span>
                <p className="text-xs text-text-tertiary italic">{org.analogy}</p>
              </div>

              {/* Revenue breakdown */}
              <div className="mt-4">
                <p className="text-[10px] font-bold tracking-wider uppercase text-text-tertiary mb-1">
                  Revenue
                </p>
                <ul className="mt-1.5 space-y-0.5">
                  {org.revenueItems.map((item) => (
                    <li key={item} className="text-xs text-text-secondary flex items-start gap-1.5">
                      <span className="mt-1.5 w-1 h-1 rounded-full shrink-0" style={{ backgroundColor: org.color }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Quote */}
              <div
                className="mt-4 pt-3"
                style={{ borderTop: `1px solid ${org.color}20` }}
              >
                <span className="text-lg font-bold leading-none" style={{ color: org.color }}>{'\u201C'}</span>
                <p className="text-xs text-text-secondary italic leading-relaxed">
                  {org.quote}
                </p>
                <p className="text-xs font-semibold mt-2" style={{ color: org.color }}>
                  {'\u2014'} {org.quoteName}
                </p>
                {org.quoteTitle && (
                  <p className="text-[10px] text-text-tertiary">{org.quoteTitle}</p>
                )}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
