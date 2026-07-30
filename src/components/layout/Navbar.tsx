import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { Sun, Moon } from 'lucide-react';

export type TabType = 'home' | 'publications';

interface NavbarProps {
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="w-full border-b border-stone-200/80 dark:border-stone-800 bg-[#faf8f5]/90 dark:bg-[#11161d]/90 backdrop-blur-md sticky top-0 z-40 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-6 h-14 flex items-center justify-between">
        
        {/* Editorial Moniker */}
        <button
          onClick={() => setActiveTab('home')}
          className="flex items-center font-serif font-bold text-lg md:text-xl tracking-tight leading-none text-slate-900 dark:text-stone-100 hover:text-amber-800 dark:hover:text-amber-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-700/60 rounded-md transition-colors"
          aria-label="Nathan Thomas White Home"
        >
          <span className="inline md:hidden font-sans font-bold tracking-wider text-base">NTW</span>
          <span className="hidden md:inline">Nathan Thomas White</span>
        </button>

        {/* Minimal Navigation */}
        <nav role="tablist" aria-label="Main Navigation" className="flex items-center gap-5 text-sm font-sans font-medium">
          <button
            role="tab"
            aria-selected={activeTab === 'home'}
            onClick={() => setActiveTab('home')}
            className={`transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-700/60 rounded-sm px-1 py-0.5 ${
              activeTab === 'home'
                ? 'text-slate-900 dark:text-stone-100 font-semibold underline underline-offset-4 decoration-amber-700/60 dark:decoration-amber-400/60'
                : 'text-stone-600 dark:text-stone-400 hover:text-slate-900 dark:hover:text-stone-200'
            }`}
          >
            About
          </button>

          <button
            role="tab"
            aria-selected={activeTab === 'publications'}
            onClick={() => setActiveTab('publications')}
            className={`transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-700/60 rounded-sm px-1 py-0.5 ${
              activeTab === 'publications'
                ? 'text-slate-900 dark:text-stone-100 font-semibold underline underline-offset-4 decoration-amber-700/60 dark:decoration-amber-400/60'
                : 'text-stone-600 dark:text-stone-400 hover:text-slate-900 dark:hover:text-stone-200'
            }`}
          >
            Publications
          </button>

          <div className="h-4 w-[1px] bg-stone-300 dark:bg-stone-800" />

          {/* Theme Switcher */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            className="p-1.5 rounded-lg text-stone-600 dark:text-stone-400 hover:text-slate-900 dark:hover:text-stone-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-700/60 transition-colors"
          >
            {theme === 'light' ? (
              <Moon className="w-4.5 h-4.5" />
            ) : (
              <Sun className="w-4.5 h-4.5 text-amber-400" />
            )}
          </button>
        </nav>

      </div>
    </header>
  );
};
