interface OrgBadgeProps {
  color: string;
  size?: number;
}

export function OrgBadge({ color, size = 10 }: OrgBadgeProps) {
  return (
    <div
      className="rounded-full shrink-0"
      style={{ backgroundColor: color, width: size, height: size }}
    />
  );
}
