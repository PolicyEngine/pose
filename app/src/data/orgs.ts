import type { OrgInfo } from '@/lib/types';
import { colors } from '@/lib/colors';

export const orgs: OrgInfo[] = [
  {
    name: 'Rules\nFoundation',
    tagline: 'Encoding the world\u2019s rules',
    entity: '501(c)(3)',
    description: 'The HGP for rules\nOpen reference layer',
    color: colors.rulesBlue,
  },
  {
    name: 'Cosilico',
    tagline: 'Society in silico',
    entity: 'Public Benefit Corp',
    description: 'Society in silico\nLike Schr\u00f6dinger for policy',
    color: colors.cosilicoCyan,
  },
  {
    name: 'PolicyEngine',
    tagline: 'Policy meets evidence',
    entity: '501(c)(3) / Charity',
    description: 'Like IHME for economic policy\nOpen source',
    color: colors.peTeal,
  },
];
