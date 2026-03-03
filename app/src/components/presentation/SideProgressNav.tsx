import type { ScrollSection } from '../../lib/types';

interface SideProgressNavProps {
  sections: ScrollSection[];
  activeSection: number;
  onNavigate: (id: string) => void;
}

export function SideProgressNav({ sections, activeSection, onNavigate }: SideProgressNavProps) {
  return (
    <nav className="fixed left-4 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col gap-2 group">
      {sections.map((section, i) => (
        <button
          key={section.id}
          onClick={() => onNavigate(section.id)}
          className="relative flex items-center gap-3"
          title={section.title}
        >
          <div
            className={`rounded-full transition-all duration-300 ${
              i === activeSection
                ? 'w-3 h-3 bg-primary'
                : section.isAppendix
                ? 'w-1.5 h-1.5 bg-text-tertiary hover:bg-text-secondary'
                : 'w-2 h-2 bg-border-medium hover:bg-text-tertiary'
            }`}
          />
          <span className="text-xs text-text-tertiary whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none font-medium">
            {section.title}
          </span>
        </button>
      ))}
    </nav>
  );
}
