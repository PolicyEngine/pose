import type { SlideProps } from '../../lib/types';
import { colors } from '../../lib/colors';
import { SlideHeader } from '../ui/SlideHeader';

interface EcosystemSlideProps extends SlideProps {
  orgIndex: number;
}

const ecosystemOrgs = [
  {
    tag: 'ECOSYSTEM 1 OF 3',
    title: 'Rules Foundation \u2014 "Encode the law"',
    color: colors.rulesBlue,
    image: '/assets/ecosystem/rules-foundation.png',
  },
  {
    tag: 'ECOSYSTEM 2 OF 3',
    title: 'Cosilico \u2014 "Run the infrastructure"',
    color: colors.cosilicoCyan,
    image: '/assets/ecosystem/cosilico.png',
  },
  {
    tag: 'ECOSYSTEM 3 OF 3',
    title: 'PolicyEngine \u2014 "Tell the story"',
    color: colors.peTeal,
    image: '/assets/ecosystem/policyengine.png',
  },
];

export function EcosystemSlide({ orgIndex }: EcosystemSlideProps) {
  const org = ecosystemOrgs[orgIndex];

  return (
    <div className="px-8 md:px-16 py-4">
      <SlideHeader tag={org.tag} tagColor={org.color} title={org.title} />
      <div className="flex items-center justify-center mt-2">
        <img
          src={org.image}
          alt={org.title}
          className="max-h-[50vh] max-w-full object-contain rounded-lg border border-border-light"
          style={{ boxShadow: '0px 4px 6px -1px rgba(16, 24, 40, 0.08)' }}
        />
      </div>
    </div>
  );
}

export function RulesEcosystemSlide(props: SlideProps) {
  return <EcosystemSlide {...props} orgIndex={0} />;
}

export function CosilicoEcosystemSlide(props: SlideProps) {
  return <EcosystemSlide {...props} orgIndex={1} />;
}

export function PEEcosystemSlide(props: SlideProps) {
  return <EcosystemSlide {...props} orgIndex={2} />;
}
