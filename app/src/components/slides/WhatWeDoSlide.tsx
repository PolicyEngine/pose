import type { SlideProps } from '@/lib/types';
import { colors } from '@/lib/colors';
import { SlideHeader } from '@/components/ui/SlideHeader';
import { StatCard } from '@/components/ui/StatCard';
import { stats } from '@/data/impact';

const ORGANIZATIONS = [
  { name: '10 Downing Street', logo: '/assets/logos/organizations/10-downing-street.png' },
  { name: 'Joint Economic Committee', logo: '/assets/logos/organizations/jec.png' },
  { name: 'Bureau of Economic Analysis', logo: '/assets/logos/organizations/bea.png' },
  { name: 'Niskanen Center', logo: '/assets/logos/organizations/niskanen-center.png' },
  { name: 'American Enterprise Institute', logo: '/assets/logos/organizations/aei.png' },
  { name: 'NBER', logo: '/assets/logos/organizations/nber.png' },
  { name: 'Georgetown University', logo: '/assets/logos/organizations/georgetown.png' },
  { name: 'University of Michigan', logo: '/assets/logos/organizations/umich.png' },
  { name: 'USC', logo: '/assets/logos/organizations/usc.png' },
  { name: 'Prenatal-to-3 Policy Impact Center', logo: '/assets/logos/organizations/pn3policy.png' },
  { name: 'Colorado Fiscal Institute', logo: '/assets/logos/organizations/cfi.png' },
  { name: 'Gary Community Ventures', logo: '/assets/logos/organizations/gary-community-ventures.png' },
  { name: 'Mothers Outreach Network', logo: '/assets/logos/organizations/mothers-outreach-network.png' },
  { name: 'Atlanta Fed', logo: '/assets/logos/organizations/atlanta-fed.png' },
  { name: 'Living Wage Calculator', logo: '/assets/logos/organizations/living-wage-calculator.png' },
  { name: 'UHERO', logo: '/assets/logos/organizations/uhero.png' },
  { name: 'UBI Center', logo: '/assets/logos/organizations/ubicenter.png' },
  { name: 'MyFriendBen', logo: '/assets/logos/organizations/myfriendben.png' },
  { name: 'Amplifi', logo: '/assets/logos/organizations/amplifi.png' },
  { name: 'Mirza', logo: '/assets/logos/organizations/mirza.png' },
];

export function WhatWeDoSlide(_props: SlideProps) {
  return (
    <div className="px-8 md:px-16">
      <SlideHeader
        tag="IMPACT"
        tagColor={colors.accentOrange}
        title="PolicyEngine by the numbers"
      />

      {/* Stat cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
        {stats.map((stat, i) => (
          <StatCard
            key={stat.label}
            number={stat.number}
            label={stat.label}
            color={stat.color}
            delay={i * 0.1}
          />
        ))}
      </div>

      {/* Logo grid */}
      <div
        className="scroll-reveal mt-8"
        style={{ transitionDelay: '0.45s' }}
      >
        <p
          className="text-[10px] font-semibold tracking-[0.15em] uppercase mb-4 text-center"
          style={{ color: colors.textTertiary }}
        >
          Used by
        </p>
        <div className="grid grid-cols-5 md:grid-cols-10 gap-x-4 gap-y-5 items-center justify-items-center">
          {ORGANIZATIONS.map((org) => (
            <div
              key={org.name}
              className="flex items-center justify-center"
              style={{ height: '36px' }}
              title={org.name}
            >
              <img
                src={org.logo}
                alt={org.name}
                className="max-h-full max-w-[70px] object-contain brightness-0 invert opacity-60 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
