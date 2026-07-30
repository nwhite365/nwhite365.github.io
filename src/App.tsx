import React, { useState, useEffect } from 'react';
import { Navbar, TabType } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { Publications } from './components/sections/Publications';
import { Footer } from './components/layout/Footer';

export const App: React.FC = () => {
  // Read initial tab from URL hash (e.g. #publications)
  const getTabFromHash = (): TabType => {
    const hash = window.location.hash.toLowerCase();
    if (hash === '#publications' || hash === '#pub') {
      return 'publications';
    }
    return 'home';
  };

  const [activeTab, setActiveTabState] = useState<TabType>(getTabFromHash);

  const setActiveTab = (tab: TabType) => {
    setActiveTabState(tab);
    if (tab === 'publications') {
      window.history.pushState(null, '', '#publications');
    } else {
      window.history.pushState(null, '', window.location.pathname);
    }
  };

  // Dynamic Document Title based on active tab for SEO
  useEffect(() => {
    const titles: Record<TabType, string> = {
      home: 'Nathan Thomas White, Ph.D. — Robotics & AI Research',
      publications: 'Publications — Nathan Thomas White, Ph.D.',
    };
    document.title = titles[activeTab];
  }, [activeTab]);

  // Sync tab state on browser back/forward buttons or hash changes
  useEffect(() => {
    const handleHashChange = () => {
      setActiveTabState(getTabFromHash());
    };

    window.addEventListener('hashchange', handleHashChange);
    window.addEventListener('popstate', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      window.removeEventListener('popstate', handleHashChange);
    };
  }, []);

  const handleNavigateToPublications = () => {
    setActiveTab('publications');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col font-sans bg-[#faf8f5] text-slate-900 dark:bg-[#11161d] dark:text-stone-100 transition-colors duration-300">
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <main className="flex-grow">
        {activeTab === 'home' ? (
          <Hero onNavigateToPublications={handleNavigateToPublications} />
        ) : (
          <Publications />
        )}
      </main>

      <Footer />
    </div>
  );
};
