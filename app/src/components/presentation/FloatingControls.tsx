import { Maximize, Minimize } from 'lucide-react';

interface FloatingControlsProps {
  isFullscreen: boolean;
  onFullscreen: () => void;
  onDownload: () => void;
}

export function FloatingControls({ isFullscreen, onFullscreen }: FloatingControlsProps) {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex gap-2">
      <button
        onClick={onFullscreen}
        title="Fullscreen (F)"
        className="p-2.5 rounded-lg bg-card-bg/90 backdrop-blur-sm border border-border-medium hover:bg-card-bg-alt transition-colors text-text-tertiary hover:text-primary"
        style={{ boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.4)' }}
      >
        {isFullscreen ? <Minimize size={18} /> : <Maximize size={18} />}
      </button>
    </div>
  );
}
