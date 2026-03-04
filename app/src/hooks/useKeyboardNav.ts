import { useEffect } from 'react';

interface UseKeyboardNavProps {
  onFullscreen: () => void;
  onDownload: () => void;
}

export function useKeyboardNav({ onFullscreen, onDownload }: UseKeyboardNavProps) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;

      switch (e.key) {
        case 'f':
        case 'F':
          e.preventDefault();
          onFullscreen();
          break;
        case 'd':
        case 'D':
          e.preventDefault();
          onDownload();
          break;
        case 'Escape':
          if (document.fullscreenElement) {
            document.exitFullscreen();
          }
          break;
      }
    };

    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onFullscreen, onDownload]);
}
