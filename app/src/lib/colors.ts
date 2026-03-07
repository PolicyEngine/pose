import { colors as dsColors } from '@policyengine/design-system/tokens/colors';

export const colors = {
  // Backgrounds (dark cinematic theme — app-specific, no design-system equivalent)
  pageBg: '#0A0F1C',
  cardBg: dsColors.gray[800],        // #1F2937
  cardBgAlt: dsColors.secondary[800], // #1E293B

  // Text (dark-theme text — lighter shades from design-system)
  textPrimary: dsColors.background.tertiary, // #F1F5F9
  textSecondary: dsColors.secondary[400],    // #94A3B8
  textTertiary: dsColors.secondary[500],     // #64748B

  // Borders (dark-theme borders)
  borderLight: dsColors.secondary[800], // #1E293B
  borderMedium: '#334155',              // app-specific dark border

  // Primary accent (PolicyEngine teal)
  primary: dsColors.primary[500],            // #319795
  primaryLight: dsColors.primary.alpha[40],  // rgba(49, 151, 149, 0.4) — closest alpha

  // Semantic
  success: dsColors.success,   // #22C55E
  warning: dsColors.warning,   // #FEC601
  error: dsColors.error,       // #EF4444
  info: dsColors.info,         // #1890FF

  // Organization colors
  rulesBlue: '#3B82F6',        // Rules Foundation blue — no design-system equivalent
  cosilicoCyan: '#06B6D4',     // Cosilico cyan — no design-system equivalent
  peTeal: dsColors.primary[500], // #319795

  // Chart / accent
  accentPurple: '#7C3AED',     // app-specific
  accentOrange: '#EA580C',     // app-specific
  highlight: '#D97706',        // app-specific

  // Glow effects
  glowRules: 'rgba(59, 130, 246, 0.15)',
  glowCosilico: 'rgba(6, 182, 212, 0.15)',
  glowPE: 'rgba(49, 151, 149, 0.15)',
  glowHighlight: 'rgba(217, 119, 6, 0.15)',

  // Legacy aliases for data files that reference these
  white: dsColors.background.tertiary,  // #F1F5F9
  accentBlue: dsColors.primary[500],    // #319795
  accentTeal: '#2DD4BF',                // app-specific teal accent
  accentGreen: dsColors.success,        // #22C55E
  lightGray: dsColors.secondary[400],   // #94A3B8
  dimText: dsColors.secondary[500],     // #64748B
  darkBg: '#0A0F1C',
  cardBgLegacy: dsColors.gray[800],     // #1F2937
} as const;

export type ColorKey = keyof typeof colors;
