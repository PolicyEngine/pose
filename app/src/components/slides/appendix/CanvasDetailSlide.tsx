import type { SlideProps } from '../../../lib/types';
import { colors } from '../../../lib/colors';
import { SlideHeader } from '../../ui/SlideHeader';
import { canvasMembers } from '../../../data/appendix';

export function CanvasDetailSlide(_props: SlideProps) {
  return (
    <div className="px-8 md:px-16 py-4">
      <SlideHeader tag="OSE CANVAS (DETAIL)" tagColor={colors.primary} isAppendix />

      <div className="grid grid-cols-2 gap-8 mt-4">
        <div>
          <p className="text-base font-bold mb-3" style={{ color: canvasMembers.community.color }}>
            {canvasMembers.community.title}
          </p>
          {canvasMembers.community.items.map((item, i) => (
            <p key={i} className="text-xs text-text-secondary mt-1">{'\u2022'}  {item}</p>
          ))}
        </div>
        <div>
          <p className="text-base font-bold mb-3" style={{ color: canvasMembers.stakeholders.color }}>
            {canvasMembers.stakeholders.title}
          </p>
          {canvasMembers.stakeholders.items.map((item, i) => (
            <p key={i} className="text-xs text-text-secondary mt-1">{'\u2022'}  {item}</p>
          ))}

          <p className="text-base font-bold mt-6 mb-3" style={{ color: canvasMembers.valueProps.color }}>
            {canvasMembers.valueProps.title}
          </p>
          {canvasMembers.valueProps.items.map((item, i) => (
            <p key={i} className="text-xs text-text-secondary mt-1">{'\u2022'}  {item}</p>
          ))}
        </div>
      </div>
    </div>
  );
}
