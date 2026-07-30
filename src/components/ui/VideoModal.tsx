import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { X, Play } from 'lucide-react';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl: string;
  title: string;
}

export const VideoModal: React.FC<VideoModalProps> = ({ isOpen, onClose, videoUrl, title }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !videoUrl) return null;

  // Convert normal YouTube URL (https://www.youtube.com/watch?v=qpr57pWMeOc) to embed URL
  const getEmbedUrl = (url: string) => {
    try {
      const parsed = new URL(url);
      if (parsed.hostname.includes('youtube.com')) {
        const v = parsed.searchParams.get('v');
        if (v) return `https://www.youtube.com/embed/${v}?autoplay=1`;
      } else if (parsed.hostname.includes('youtu.be')) {
        const v = parsed.pathname.replace('/', '');
        if (v) return `https://www.youtube.com/embed/${v}?autoplay=1`;
      }
    } catch {
      // Fallback if parsing fails
    }
    return url;
  };

  const embedUrl = getEmbedUrl(videoUrl);

  const modalContent = (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="video-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-stone-950/80 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl rounded-2xl bg-[#faf8f5] dark:bg-[#11161d] border border-stone-200 dark:border-stone-800 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Editorial Header bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-stone-200 dark:border-stone-800 bg-[#faf8f5] dark:bg-[#11161d]">
          <div id="video-modal-title" className="flex items-center gap-2.5 text-slate-900 dark:text-stone-100 font-serif font-bold text-base sm:text-lg">
            <Play className="w-4 h-4 text-amber-800 dark:text-amber-400 fill-current flex-shrink-0" />
            <span className="truncate">{title}</span>
          </div>
          <button
            onClick={onClose}
            aria-label="Close Video"
            className="p-1.5 rounded-lg text-stone-500 hover:text-slate-900 dark:hover:text-stone-100 hover:bg-stone-200/60 dark:hover:bg-stone-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-700/60 transition-colors flex-shrink-0"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Player Frame */}
        <div className="relative w-full aspect-video bg-black">
          <iframe
            src={embedUrl}
            title={title}
            className="w-full h-full border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );

  return ReactDOM.createPortal(modalContent, document.body);
};
