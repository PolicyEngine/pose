import type { SlideProps } from '@/lib/types';
import { SlideHeader } from '@/components/ui/SlideHeader';

export function createPlaceholder(tag: string, tagColor: string, title: string, subtitle?: string, isAppendix?: boolean) {
  return function PlaceholderSlide(_props: SlideProps) {
    return (
      <div className="px-8 md:px-16">
        <SlideHeader tag={tag} tagColor={tagColor} title={title} isAppendix={isAppendix} />
        {subtitle && (
          <p className="text-text-secondary text-sm mt-2 scroll-reveal">{subtitle}</p>
        )}
        <div className="mt-8 flex items-center justify-center min-h-[200px] rounded-lg border border-border-medium bg-card-bg/50 scroll-reveal">
          <p className="text-text-tertiary text-sm italic">Section content coming soon</p>
        </div>
      </div>
    );
  };
}
