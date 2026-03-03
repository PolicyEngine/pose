import { useCallback, useMemo } from 'react';
import { useFullscreen } from '../../hooks/useFullscreen';
import { useKeyboardNav } from '../../hooks/useKeyboardNav';
import { useScrollNavigation } from '../../hooks/useScrollNavigation';
import { ScrollSection } from './ScrollSection';
import { SideProgressNav } from './SideProgressNav';
import { FloatingControls } from './FloatingControls';
import { AppendixDivider } from './AppendixDivider';
import { exportPptx } from '../../lib/exportPptx';
import type { ScrollSection as ScrollSectionType } from '../../lib/types';

interface ScrollStoryProps {
  sections: ScrollSectionType[];
}

export function ScrollStory({ sections }: ScrollStoryProps) {
  const { isFullscreen, toggleFullscreen } = useFullscreen();

  const sectionIds = useMemo(() => sections.map((s) => s.id), [sections]);
  const { activeSection, scrollToSection } = useScrollNavigation(sectionIds);

  const handleDownload = useCallback(() => {
    exportPptx();
  }, []);

  useKeyboardNav({
    onFullscreen: toggleFullscreen,
    onDownload: handleDownload,
  });

  const firstAppendixIndex = sections.findIndex((s) => s.isAppendix);

  return (
    <div className="max-w-5xl mx-auto">
      <SideProgressNav
        sections={sections}
        activeSection={activeSection}
        onNavigate={scrollToSection}
      />

      {sections.map((section, i) => (
        <div key={section.id}>
          {i === firstAppendixIndex && <AppendixDivider />}
          {i > 0 && i !== firstAppendixIndex && (
            <div className="mx-8 border-t border-border-light" />
          )}
          <ScrollSection
            id={section.id}
            component={section.component}
            isSticky={!!section.stickyHeight}
          />
        </div>
      ))}

      <FloatingControls
        isFullscreen={isFullscreen}
        onFullscreen={toggleFullscreen}
        onDownload={handleDownload}
      />
    </div>
  );
}
