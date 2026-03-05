import type { SlideProps } from '@/lib/types';
import { colors } from '@/lib/colors';
import { SlideHeader } from '@/components/ui/SlideHeader';
import { Card } from '@/components/ui/Card';
import { canvasMembers } from '@/data/appendix';

export function CanvasSlide(_props: SlideProps) {
  const sections = [canvasMembers.community, canvasMembers.stakeholders, canvasMembers.valueProps];

  return (
    <div className="px-8 md:px-16">
      <SlideHeader
        tag="ECOSYSTEM CANVAS"
        tagColor={colors.primary}
        title="Who we talked to and what they value"
        isAppendix
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        {sections.map((section, i) => (
          <Card key={section.title} borderColor={section.color} delay={i * 0.15}>
            <div className="h-1 rounded-t-lg" style={{ backgroundColor: section.color }} />
            <div className="p-5">
              <h3 className="text-sm font-bold" style={{ color: section.color }}>
                {section.title}
              </h3>
              <ul className="mt-4 space-y-2">
                {section.items.map((item) => {
                  const [label, detail] = item.split(' | ');
                  return (
                    <li key={item} className="text-sm leading-relaxed">
                      <span style={{ color: colors.textPrimary }}>{label}</span>
                      {detail && (
                        <span style={{ color: colors.textTertiary }}> &mdash; {detail}</span>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
