export const colors = {
  // Backgrounds (light theme)
  pageBg: '#FFFFFF',
  cardBg: '#F5F9FF',
  cardBgAlt: '#F1F5F9',

  // Text
  textPrimary: '#000000',
  textSecondary: '#5A5A5A',
  textTertiary: '#9CA3AF',

  // Borders
  borderLight: '#E2E8F0',
  borderMedium: '#CBD5E1',

  // Primary accent (PolicyEngine teal)
  primary: '#319795',
  primaryLight: '#319795CC',

  // Semantic
  success: '#22C55E',
  warning: '#FEC601',
  error: '#EF4444',
  info: '#1890FF',

  // Organization colors
  rulesBlue: '#3B82F6',
  cosilicoCyan: '#06B6D4',
  peTeal: '#319795',

  // Chart / accent
  accentPurple: '#7C3AED',
  accentOrange: '#EA580C',
  highlight: '#D97706',

  // Legacy aliases for data files that reference these
  white: '#FFFFFF',
  accentBlue: '#319795',
  accentTeal: '#2DD4BF',
  accentGreen: '#22C55E',
  lightGray: '#5A5A5A',
  dimText: '#9CA3AF',
  darkBg: '#FFFFFF',
  cardBgLegacy: '#F5F9FF',
} as const;

export type ColorKey = keyof typeof colors;
