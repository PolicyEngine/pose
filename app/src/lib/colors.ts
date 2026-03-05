export const colors = {
  // Backgrounds (dark cinematic theme)
  pageBg: '#0A0F1C',
  cardBg: '#111827',
  cardBgAlt: '#1E293B',

  // Text
  textPrimary: '#F1F5F9',
  textSecondary: '#94A3B8',
  textTertiary: '#64748B',

  // Borders
  borderLight: '#1E293B',
  borderMedium: '#334155',

  // Primary accent (PolicyEngine teal)
  primary: '#319795',
  primaryLight: 'rgba(49, 151, 149, 0.2)',

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

  // Glow effects
  glowRules: 'rgba(59, 130, 246, 0.15)',
  glowCosilico: 'rgba(6, 182, 212, 0.15)',
  glowPE: 'rgba(49, 151, 149, 0.15)',
  glowHighlight: 'rgba(217, 119, 6, 0.15)',

  // Legacy aliases for data files that reference these
  white: '#F1F5F9',
  accentBlue: '#319795',
  accentTeal: '#2DD4BF',
  accentGreen: '#22C55E',
  lightGray: '#94A3B8',
  dimText: '#64748B',
  darkBg: '#0A0F1C',
  cardBgLegacy: '#111827',
} as const;

export type ColorKey = keyof typeof colors;
