import type { SlideProps } from '../../../lib/types';
import { colors } from '../../../lib/colors';
import { SlideHeader } from '../../ui/SlideHeader';

export function CanvasSlide(_props: SlideProps) {
  return (
    <div className="px-8 md:px-16 py-4">
      <SlideHeader tag="OPEN SOURCE ECOSYSTEM CANVAS" tagColor={colors.highlight} isAppendix />
      <div className="flex items-center justify-center">
        <img
          src="/assets/ecosystem/canvas.png"
          alt="OSE Canvas"
          className="max-h-[50vh] max-w-full object-contain rounded-lg border border-border-light"
          style={{ boxShadow: '0px 4px 6px -1px rgba(16, 24, 40, 0.08)' }}
          onError={(e) => {
            (e.target as HTMLImageElement).style.display = 'none';
          }}
        />
        <p className="text-text-tertiary text-sm italic">Canvas image (see extracted_images/)</p>
      </div>
    </div>
  );
}
