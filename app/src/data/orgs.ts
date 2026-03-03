import type { OrgInfo } from '../lib/types';
import { colors } from '../lib/colors';

export const orgs: OrgInfo[] = [
  {
    name: 'Rules\nFoundation',
    tagline: 'Encode the law',
    entity: '501(c)(3)',
    description: 'Like OpenStreetMap\nfor law',
    color: colors.rulesBlue,
  },
  {
    name: 'Cosilico',
    tagline: 'Run the infrastructure',
    entity: 'Public Benefit Corp',
    description: 'Society, in silico\n$250B+ TAM',
    color: colors.cosilicoCyan,
  },
  {
    name: 'PolicyEngine',
    tagline: 'Tell the story',
    entity: '501(c)(3) / Charity',
    description: 'Like Urban/Mathematica\nbut open source',
    color: colors.peTeal,
  },
];
