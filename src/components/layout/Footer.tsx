import React from 'react';
import { ArrowUp } from 'lucide-react';
import { SocialLinkGroup } from '../ui/SocialLinkGroup';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full border-t border-stone-200 dark:border-stone-800 bg-[#faf8f5]/60 dark:bg-[#11161d]/60 py-10 mt-16 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
        
        <div className="space-y-1 text-center sm:text-left">
          <p className="font-serif font-bold text-base text-slate-900 dark:text-stone-100">
            Nathan Thomas White, Ph.D.
          </p>
          <p className="text-xs font-sans text-stone-500 dark:text-stone-400">
            Research Software Engineer at Intrinsic
          </p>
        </div>

        {/* Social Bar + Back to Top */}
        <div className="flex items-center gap-4">
          <SocialLinkGroup variant="icons" />

          <div className="h-3 w-[1px] bg-stone-300 dark:bg-stone-800" />

          <button
            onClick={scrollToTop}
            aria-label="Back to top of page"
            className="p-1.5 rounded-lg text-stone-500 hover:text-slate-900 dark:hover:text-stone-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-700/60 transition-colors"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
};
