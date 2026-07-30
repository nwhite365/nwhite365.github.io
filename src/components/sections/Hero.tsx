import React, { useState } from 'react';
import { profileData } from '../../data/profile';
import { ArrowRight, Play } from 'lucide-react';
import { researchDomains, researchOverviewStatement } from '../../data/research';
import { VideoModal } from '../ui/VideoModal';
import { SocialLinkGroup } from '../ui/SocialLinkGroup';

interface HeroProps {
  onNavigateToPublications: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigateToPublications }) => {
  const [selectedVideo, setSelectedVideo] = useState<{ url: string; title: string } | null>(null);

  return (
    <div className="max-w-4xl mx-auto px-6 py-12 md:py-16 space-y-16 animate-fadeIn">
      
      {/* Hero Section: Headshot + Bio */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
        
        {/* Profile Headshot */}
        <div className="w-48 sm:w-56 md:w-64 flex-shrink-0">
          <div className="rounded-2xl overflow-hidden shadow-md border border-stone-200 dark:border-stone-800 bg-stone-100 dark:bg-stone-900">
            <img
              src="/assets/images/nate-apollo-profile.jpg"
              alt="Nathan Thomas White"
              className="w-full aspect-[4/5] object-cover"
            />
          </div>
        </div>

        {/* Bio & Intro Details */}
        <div className="space-y-5 text-center md:text-left flex-1">
          
          <div>
            <h1 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 dark:text-stone-100">
              Nathan Thomas White, Ph.D.
            </h1>
            
            <p className="mt-2 text-lg text-stone-600 dark:text-stone-300 font-medium">
              Research Software Engineer at{' '}
              <a
                href={profileData.company.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-800 dark:text-amber-400 hover:underline font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-700/60 rounded"
              >
                Intrinsic
              </a>
            </p>
          </div>

          {/* Research Tagline */}
          <p className="text-base text-slate-700 dark:text-stone-300 leading-relaxed font-sans">
            I design intuitive systems at the intersection of <strong className="font-semibold text-slate-900 dark:text-stone-100">Robotics</strong>, <strong className="font-semibold text-slate-900 dark:text-stone-100">AI</strong>, and <strong className="font-semibold text-slate-900 dark:text-stone-100">Agentic LLMs</strong>, bridging technical complexity and user understanding.
          </p>

          <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed font-sans">
            I completed my Ph.D. in Computer Science at the{' '}
            <strong className="font-medium text-slate-900 dark:text-stone-200">University of Wisconsin–Madison</strong> in the{' '}
            <a
              href={profileData.education.phd.labUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-800 dark:text-amber-400 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-700/60 rounded"
            >
              People and Robots Lab
            </a>{' '}
            advised by{' '}
            <a
              href={profileData.education.phd.advisorUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-800 dark:text-amber-400 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-700/60 rounded"
            >
              Dr. Bilge Mutlu
            </a>.
          </p>

          {/* Complete Social Links Bar */}
          <SocialLinkGroup variant="pills" />

        </div>

      </div>

      <div className="border-t border-stone-200 dark:border-stone-800" />

      {/* Research Areas Overview Section */}
      <div className="space-y-6">
        <div>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 dark:text-stone-100">
            Research Focus
          </h2>

          <p className="mt-2 text-base text-slate-700 dark:text-stone-300 leading-relaxed font-sans">
            {researchOverviewStatement}
          </p>
        </div>

        {/* 3 Domain Cards Breakdown */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
          {researchDomains.map((domain) => (
            <div
              key={domain.id}
              className="p-6 rounded-2xl border border-stone-200/80 dark:border-stone-800 bg-white/60 dark:bg-stone-900/60 flex flex-col justify-between space-y-4 shadow-sm"
            >
              <div className="space-y-2">
                <h3 className="font-serif font-bold text-lg text-slate-900 dark:text-stone-100">
                  {domain.title}
                </h3>
                <p className="text-xs font-mono text-amber-800 dark:text-amber-400 font-medium">
                  {domain.subtitle}
                </p>
                <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed font-sans">
                  {domain.description}
                </p>
              </div>

              {/* Showcase Video Launcher Button */}
              {domain.featuredVideo && (
                <div className="pt-2 border-t border-stone-100 dark:border-stone-800/80">
                  <button
                    onClick={() => setSelectedVideo({ url: domain.featuredVideo!.url, title: domain.featuredVideo!.title })}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-red-50 dark:bg-red-950/40 hover:bg-red-100 dark:hover:bg-red-900/60 text-red-700 dark:text-red-300 border border-red-200 dark:border-red-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-700/60 transition-colors w-full justify-center"
                  >
                    <Play className="w-3.5 h-3.5 fill-current" />
                    <span>Watch Showcase Video</span>
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* General Link to Publications */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-6 rounded-2xl bg-white/60 dark:bg-stone-900/60 border border-stone-200/80 dark:border-stone-800 shadow-sm">
        <div>
          <h3 className="font-serif font-bold text-lg text-slate-900 dark:text-stone-100">
            Peer-Reviewed Publications
          </h3>
          <p className="text-stone-600 dark:text-stone-400 text-xs mt-0.5 font-sans">
            Explore publications, paper PDFs, BibTeX citations, and video demonstrations.
          </p>
        </div>

        <button
          onClick={onNavigateToPublications}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amber-800 hover:bg-amber-900 text-white dark:bg-amber-400 dark:hover:bg-amber-300 dark:text-slate-900 font-semibold text-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-700/60 transition-colors whitespace-nowrap shadow-sm"
        >
          <span>Explore Publications</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Showcase Video Modal Overlay */}
      <VideoModal
        isOpen={!!selectedVideo}
        onClose={() => setSelectedVideo(null)}
        videoUrl={selectedVideo?.url || ''}
        title={selectedVideo?.title || ''}
      />

    </div>
  );
};
