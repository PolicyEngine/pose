export function AppendixDivider() {
  return (
    <div className="flex items-center justify-center py-16">
      <div className="flex items-center gap-4 w-full max-w-2xl mx-auto px-8">
        <div className="flex-1 h-px bg-border-light" />
        <span className="text-[10px] font-bold tracking-[0.15em] text-text-tertiary uppercase">
          Appendix
        </span>
        <div className="flex-1 h-px bg-border-light" />
      </div>
    </div>
  );
}
