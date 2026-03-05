import type { TeamMember } from '@/lib/types';
import { colors } from '@/lib/colors';

export const team: TeamMember[] = [
  {
    name: 'Max Ghenis',
    role: 'Co-Founder & CEO',
    bio: ['MIT M.S. Development Economics', 'Former Google', 'Founded UBI Center'],
    color: colors.accentBlue,
    photo: '/assets/team/max-ghenis.png',
  },
  {
    name: 'Pavel Makarchuk',
    role: 'Chief of Staff',
    bio: ['Operations & strategy lead', 'Led development of US state-level', 'tax-benefit model'],
    color: colors.accentTeal,
    photo: '/assets/team/pavel-makarchuk.jpeg',
  },
  {
    name: 'Daniel Feenberg',
    role: 'Advisor',
    bio: ['Princeton Ph.D. Economics', 'Former IT Director at NBER', 'Created TAXSIM'],
    color: colors.accentPurple,
    photo: '/assets/team/daniel-feenberg.jpg',
  },
];
