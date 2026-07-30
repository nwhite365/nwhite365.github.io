import React, { useState } from 'react';
import { ExternalLink, Play, ChevronDown, ChevronUp } from 'lucide-react';
import { Publication } from '../../data/publications';

interface PublicationCardProps {
  publication: Publication;
  onSelectVideo: (url: string, title: string) => void;
}

export const PublicationCard: React.FC<PublicationCardProps> = ({ publication, onSelectVideo }) => {
  const [isAbstractOpen, setIsAbstractOpen] = useState(false);

  // Helper function to bold Nathan White's name variants in authors list
  const renderAuthors = (authorsStr: string) => {
    const regex = /(NT White|N White|Nathan Thomas White|Nathan White)/g;
    const parts = authorsStr.split(regex);
    return parts.map((part, idx) => {
      if (['NT White', 'N White', 'Nathan Thomas White', 'Nathan White'].includes(part)) {
        return (
          <strong key={idx} className="font-semibold text-slate-900 dark:text-stone-100 underline decoration-amber-800/40 dark:decoration-amber-400/40">
            {part}
          </strong>
        );
      }
      return part;
    });
  };

  return (
    <article className="p-6 rounded-2xl bg-white/60 dark:bg-stone-900/60 border border-stone-200/80 dark:border-stone-800 shadow-sm space-y-4 transition-colors hover:border-amber-800/30 dark:hover:border-amber-400/30">
      <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
        
        <div className="space-y-2 flex-1">
          
          {/* Venue Badge & Date */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-2.5 py-0.5 rounded text-xs font-mono font-bold bg-amber-900/10 text-amber-900 dark:bg-amber-400/10 dark:text-amber-300">
              {publication.venueShort}
            </span>
            <span className="text-xs font-mono text-stone-500">
              {publication.date}
            </span>
          </div>

          {/* Paper Title */}
          <h2 className="font-serif font-bold text-xl text-slate-900 dark:text-stone-100 leading-snug">
            {publication.title}
          </h2>

          {/* Authors Line */}
          <p className="text-xs font-sans text-stone-600 dark:text-stone-300 font-medium">
            {renderAuthors(publication.authors)}
          </p>

          {/* Full Venue */}
          <p className="text-xs font-sans text-stone-500 dark:text-stone-400 italic">
            {publication.venue}
          </p>

          {/* Keywords Tag Pills */}
          <div className="flex flex-wrap gap-1.5 pt-1">
            {publication.keywords.map((kw) => (
              <span
                key={kw}
                className="px-2 py-0.5 rounded text-[11px] font-mono bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-400"
              >
                #{kw}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-2 self-start">
          {publication.videourl && (
            <button
              onClick={() => onSelectVideo(publication.videourl!, publication.title)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-red-50 dark:bg-red-950/40 hover:bg-red-100 dark:hover:bg-red-900/60 text-red-700 dark:text-red-300 border border-red-200 dark:border-red-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-700/60 transition-colors"
            >
              <Play className="w-3.5 h-3.5 fill-current" />
              <span>Watch Video</span>
            </button>
          )}

          <a
            href={publication.paperurl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-amber-800 hover:bg-amber-900 text-white dark:bg-amber-400 dark:hover:bg-amber-300 dark:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-700/60 transition-colors shadow-sm"
          >
            <span>PDF / Link</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>

      {/* Abstract Accordion */}
      <div className="pt-2 border-t border-stone-100 dark:border-stone-800/80">
        <button
          onClick={() => setIsAbstractOpen(!isAbstractOpen)}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-stone-500 hover:text-amber-800 dark:hover:text-amber-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-700/60 rounded transition-colors"
        >
          <span>{isAbstractOpen ? 'Hide Abstract' : 'Show Abstract'}</span>
          {isAbstractOpen ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
        </button>

        {isAbstractOpen && (
          <div className="mt-3 p-4 rounded-xl bg-stone-50 dark:bg-stone-950/60 border border-stone-200/60 dark:border-stone-800 text-xs text-stone-600 dark:text-stone-300 leading-relaxed font-sans animate-fadeIn">
            <p>{publication.abstract}</p>
          </div>
        )}
      </div>

    </article>
  );
};
