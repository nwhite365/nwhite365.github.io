import React from 'react';
import { Mail, Github, Linkedin, FileText, ExternalLink } from 'lucide-react';
import { ScholarIcon, ResearchGateIcon } from './SocialIcons';
import { profileData } from '../../data/profile';

interface SocialLinkGroupProps {
  variant?: 'pills' | 'icons';
  className?: string;
}

export const SocialLinkGroup: React.FC<SocialLinkGroupProps> = ({ variant = 'pills', className = '' }) => {
  if (variant === 'icons') {
    return (
      <div className={`flex items-center gap-4 text-stone-600 dark:text-stone-400 text-sm ${className}`}>
        <a
          href={profileData.socialLinks.email}
          className="hover:text-amber-800 dark:hover:text-amber-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-700/60 rounded p-1 transition-colors"
          title="Email"
          aria-label="Email Nathan White"
        >
          <Mail className="w-4 h-4" />
        </a>
        <a
          href={profileData.socialLinks.github}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-slate-900 dark:hover:text-stone-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-700/60 rounded p-1 transition-colors"
          title="GitHub"
          aria-label="GitHub Profile"
        >
          <Github className="w-4 h-4" />
        </a>
        <a
          href={profileData.socialLinks.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-600 dark:hover:text-blue-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-700/60 rounded p-1 transition-colors"
          title="LinkedIn"
          aria-label="LinkedIn Profile"
        >
          <Linkedin className="w-4 h-4" />
        </a>
        <a
          href={profileData.socialLinks.googleScholar}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-sky-600 dark:hover:text-sky-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-700/60 rounded p-1 transition-colors"
          title="Google Scholar"
          aria-label="Google Scholar Profile"
        >
          <ScholarIcon className="w-4 h-4" />
        </a>
        <a
          href={profileData.socialLinks.researchGate}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-emerald-600 dark:hover:text-emerald-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-700/60 rounded p-1 transition-colors"
          title="ResearchGate"
          aria-label="ResearchGate Profile"
        >
          <ResearchGateIcon className="w-4 h-4" />
        </a>
      </div>
    );
  }

  return (
    <div className={`flex flex-wrap items-center justify-center md:justify-start gap-2.5 pt-2 text-xs font-medium ${className}`}>
      <a
        href={profileData.socialLinks.email}
        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-stone-200/70 dark:bg-stone-800 hover:bg-amber-800 hover:text-white dark:hover:bg-amber-400 dark:hover:text-slate-900 text-slate-800 dark:text-stone-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-700/60 transition-colors"
      >
        <Mail className="w-3.5 h-3.5" />
        <span>Email</span>
      </a>

      <a
        href={profileData.socialLinks.github}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-stone-200/70 dark:bg-stone-800 hover:bg-slate-900 hover:text-white dark:hover:bg-stone-100 dark:hover:text-slate-900 text-slate-800 dark:text-stone-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-700/60 transition-colors"
      >
        <Github className="w-3.5 h-3.5" />
        <span>GitHub</span>
      </a>

      <a
        href={profileData.socialLinks.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-stone-200/70 dark:bg-stone-800 hover:bg-blue-600 hover:text-white text-slate-800 dark:text-stone-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-700/60 transition-colors"
      >
        <Linkedin className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
        <span>LinkedIn</span>
      </a>

      <a
        href={profileData.socialLinks.googleScholar}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-stone-200/70 dark:bg-stone-800 hover:bg-sky-600 hover:text-white text-slate-800 dark:text-stone-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-700/60 transition-colors"
      >
        <ScholarIcon className="w-3.5 h-3.5 text-sky-700 dark:text-sky-400" />
        <span>Google Scholar</span>
      </a>

      <a
        href={profileData.socialLinks.researchGate}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-stone-200/70 dark:bg-stone-800 hover:bg-emerald-600 hover:text-white text-slate-800 dark:text-stone-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-700/60 transition-colors"
      >
        <ResearchGateIcon className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
        <span>ResearchGate</span>
      </a>

      <a
        href={profileData.socialLinks.cvUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-800 text-white dark:bg-amber-400 dark:text-slate-900 font-semibold hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-700/60 transition-opacity"
      >
        <FileText className="w-3.5 h-3.5" />
        <span>CV</span>
        <ExternalLink className="w-3 h-3" />
      </a>
    </div>
  );
};
