import { Download, Maximize, Minimize } from 'lucide-react';

interface FloatingControlsProps {
  isFullscreen: boolean;
  onFullscreen: () => void;
  onDownload: () => void;
}

export function FloatingControls({ isFullscreen, onFullscreen, onDownload }: FloatingControlsProps) {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex gap-2">
      <button
        onClick={onDownload}
        title="Download PPTX (D)"
        className="p-2.5 rounded-lg bg-white/90 backdrop-blur-sm border border-border-light hover:bg-card-bg transition-colors text-text-tertiary hover:text-primary"
        style={{ boxShadow: '0px 4px 6px -1px rgba(16, 24, 40, 0.08), 0px 2px 4px -1px rgba(16, 24, 40, 0.04)' }}
      >
        <Download size={18} />
      </button>
      <button
        onClick={onFullscreen}
        title="Fullscreen (F)"
        className="p-2.5 rounded-lg bg-white/90 backdrop-blur-sm border border-border-light hover:bg-card-bg transition-colors text-text-tertiary hover:text-primary"
        style={{ boxShadow: '0px 4px 6px -1px rgba(16, 24, 40, 0.08), 0px 2px 4px -1px rgba(16, 24, 40, 0.04)' }}
      >
        {isFullscreen ? <Minimize size={18} /> : <Maximize size={18} />}
      </button>
    </div>
  );
}
