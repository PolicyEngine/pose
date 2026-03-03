import { AccentLine } from './AccentLine';

interface SlideHeaderProps {
  tag: string;
  tagColor: string;
  title?: string;
  isAppendix?: boolean;
}

export function SlideHeader({ tag, tagColor, title, isAppendix }: SlideHeaderProps) {
  return (
    <div className="mb-5">
      {isAppendix && (
        <p className="text-[10px] font-semibold tracking-[0.15em] text-text-tertiary mb-1.5 uppercase">
          Appendix
        </p>
      )}
      <p
        className="text-[11px] font-bold tracking-[0.12em] uppercase mb-2"
        style={{ color: tagColor }}
      >
        {tag}
      </p>
      <AccentLine color={tagColor} />
      {title && (
        <h2 className="text-2xl md:text-3xl font-bold text-text-primary mt-3 tracking-tight">
          {title}
        </h2>
      )}
    </div>
  );
}
