interface AccentLineProps {
  color: string;
  width?: string;
}

export function AccentLine({ color, width = 'w-16' }: AccentLineProps) {
  return <div className={`h-[2px] ${width} rounded-full`} style={{ backgroundColor: color }} />;
}
