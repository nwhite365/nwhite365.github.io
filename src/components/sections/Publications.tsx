import React, { useState, useMemo } from 'react';
import { publicationsData } from '../../data/publications';
import { ExternalLink, Search, ArrowUpDown, RotateCcw } from 'lucide-react';
import { ScholarIcon } from '../ui/SocialIcons';
import { profileData } from '../../data/profile';
import { VideoModal } from '../ui/VideoModal';
import { PublicationCard } from './PublicationCard';

type SortOption = 'newest' | 'oldest' | 'title';

export const Publications: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<SortOption>('newest');
  const [selectedVideo, setSelectedVideo] = useState<{ url: string; title: string } | null>(null);

  const handleResetSearch = () => {
    setSearchQuery('');
    setSortBy('newest');
  };

  const processedPublications = useMemo(() => {
    return publicationsData
      .filter((pub) => {
        const q = searchQuery.trim().toLowerCase();
        if (!q) return true;

        return (
          pub.title.toLowerCase().includes(q) ||
          pub.authors.toLowerCase().includes(q) ||
          pub.abstract.toLowerCase().includes(q) ||
          pub.venue.toLowerCase().includes(q) ||
          pub.keywords.some((k) => k.toLowerCase().includes(q))
        );
      })
      .sort((a, b) => {
        if (sortBy === 'newest') {
          const dateDiff = parseInt(b.date) - parseInt(a.date);
          if (dateDiff !== 0) return dateDiff;
          return a.title.localeCompare(b.title);
        }
        if (sortBy === 'oldest') {
          const dateDiff = parseInt(a.date) - parseInt(b.date);
          if (dateDiff !== 0) return dateDiff;
          return a.title.localeCompare(b.title);
        }
        if (sortBy === 'title') {
          return a.title.localeCompare(b.title);
        }
        return 0;
      });
  }, [searchQuery, sortBy]);

  return (
    <section className="max-w-4xl mx-auto px-6 py-12 space-y-8 animate-fadeIn">
      
      {/* Header Bar */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-stone-200 dark:border-stone-800 pb-6">
        <div>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-stone-100">
            Publications
          </h1>
          <p className="text-stone-600 dark:text-stone-400 text-sm mt-1 font-sans">
            Peer-reviewed papers and research in human-robot interaction, end-user interfaces, and generative AI.
          </p>
        </div>

        <a
          href={profileData.socialLinks.googleScholar}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-stone-200/70 dark:bg-stone-800 hover:bg-sky-600 hover:text-white text-slate-800 dark:text-stone-200 text-xs font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-700/60 transition-colors self-start md:self-auto"
        >
          <ScholarIcon className="w-3.5 h-3.5 text-sky-700 dark:text-sky-400" />
          <span>Google Scholar</span>
          <ExternalLink className="w-3 h-3 opacity-70" />
        </a>
      </div>

      {/* Search Bar & Sort Dropdown */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
        
        {/* Search Input */}
        <div className="relative flex-1">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by title, author, keyword, or venue..."
            aria-label="Search publications"
            className="w-full pl-10 pr-4 py-2 rounded-lg bg-stone-200/50 dark:bg-stone-900/60 border border-stone-300/80 dark:border-stone-800 text-slate-900 dark:text-stone-100 text-xs font-sans placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-amber-700/60 dark:focus:ring-amber-400/60 transition-colors"
          />
        </div>

        {/* Sort Selector */}
        <div className="flex items-center gap-2 self-end sm:self-auto">
          <ArrowUpDown className="w-4 h-4 text-stone-500 flex-shrink-0" />
          <label htmlFor="sort-publications" className="text-xs font-sans font-medium text-stone-500">Sort:</label>
          <select
            id="sort-publications"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as SortOption)}
            className="px-3 py-2 rounded-lg bg-stone-200/50 dark:bg-stone-900/60 border border-stone-300/80 dark:border-stone-800 text-slate-900 dark:text-stone-100 text-xs font-sans font-medium focus:outline-none focus:ring-2 focus:ring-amber-700/60 dark:focus:ring-amber-400/60 transition-colors cursor-pointer"
          >
            <option value="newest">Newest First</option>
            <option value="oldest">Oldest First</option>
            <option value="title">Title (A-Z)</option>
          </select>
        </div>

      </div>

      {/* Results Count Summary & Clear Search */}
      <div className="text-xs font-mono text-stone-500 flex items-center justify-between pt-1">
        <span>Showing {processedPublications.length} of {publicationsData.length} papers</span>
        {searchQuery && (
          <button
            onClick={handleResetSearch}
            className="inline-flex items-center gap-1 text-amber-800 dark:text-amber-400 hover:underline text-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-700/60 rounded"
          >
            <RotateCcw className="w-3 h-3" />
            <span>Clear Search</span>
          </button>
        )}
      </div>

      {/* Publications List */}
      <div className="space-y-6">
        {processedPublications.map((pub) => (
          <PublicationCard
            key={pub.id}
            publication={pub}
            onSelectVideo={(url, title) => setSelectedVideo({ url, title })}
          />
        ))}
      </div>

      {/* Embedded Video Player Overlay */}
      <VideoModal
        isOpen={!!selectedVideo}
        onClose={() => setSelectedVideo(null)}
        videoUrl={selectedVideo?.url || ''}
        title={selectedVideo?.title || ''}
      />

    </section>
  );
};
