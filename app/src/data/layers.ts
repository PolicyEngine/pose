import { colors } from '@/lib/colors';

export const LAYER_COLORS = {
  foundation: colors.highlight,
  computation: colors.cosilicoCyan,
  application: colors.peTeal,
} as const;

export const LAYER_META = [
  { key: 'foundation' as const, layer: 'Foundation', subtitle: 'Encode the raw material' },
  { key: 'computation' as const, layer: 'Computation', subtitle: 'Build models on the data' },
  { key: 'application' as const, layer: 'Application', subtitle: 'Bring it to people' },
] as const;
