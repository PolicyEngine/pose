import type { SlideProps } from '../../lib/types';
import { team } from '../../data/team';
import { SlideHeader } from '../ui/SlideHeader';
import { colors } from '../../lib/colors';

export function TeamSlide(_props: SlideProps) {
  return (
    <div className="px-8 md:px-16 py-4">
      <SlideHeader tag="THE TEAM" tagColor={colors.primary} title="PolicyEngine POSE Team" />

      <div className="grid grid-cols-3 gap-8 mt-8">
        {team.map((member, i) => (
          <div
            key={member.name}
            className="scroll-reveal flex flex-col items-center text-center"
            style={{ transitionDelay: `${i * 0.15}s` }}
          >
            <img
              src={member.photo}
              alt={member.name}
              className="w-28 h-28 rounded-full object-cover border-2"
              style={{ borderColor: member.color }}
            />
            <h3 className="font-bold text-text-primary mt-4 text-xl tracking-tight">
              {member.name}
            </h3>
            <p className="font-semibold text-sm mt-1" style={{ color: member.color }}>
              {member.role}
            </p>
            <div className="mt-2 space-y-0.5">
              {member.bio.map((line, j) => (
                <p key={j} className="text-xs text-text-secondary">{line}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
