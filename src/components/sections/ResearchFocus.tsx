import React from 'react';
import { researchDomains } from '../../data/research';
import { BrainCircuit, Bot, Sparkles, Cpu, Layers } from 'lucide-react';

const iconMap: Record<string, React.FC<{ className?: string }>> = {
  BrainCircuit: BrainCircuit,
  Bot: Bot,
  Sparkles: Sparkles,
  Cpu: Cpu,
};

export const ResearchFocus: React.FC = () => {
  return (
    <section id="research" className="py-16 max-w-6xl mx-auto px-6">
      
      {/* Section Header */}
      <div className="flex items-center gap-3 mb-2">
        <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-600 dark:text-cyan-400">
          <Layers className="w-5 h-5" />
        </div>
        <h2 className="text-xs font-bold font-mono uppercase tracking-widest text-cyan-600 dark:text-cyan-400">
          Research Focus & Domains
        </h2>
      </div>

      <h3 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white font-sans mb-4">
        Robotics, Agentic LLMs & Human-Centered AI
      </h3>

      <p className="text-slate-600 dark:text-slate-300 max-w-3xl mb-12 text-base leading-relaxed">
        My work explores how intelligent agents, generative models, and physical robots can be integrated into real-world environments to assist humans safely and intuitively.
      </p>

      {/* Grid of 4 Core Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {researchDomains.map((domain) => {
          const IconComponent = iconMap[domain.iconName] || Bot;

          return (
            <div
              key={domain.id}
              className="group relative rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 p-8 shadow-sm hover:shadow-xl hover:border-cyan-500/50 dark:hover:border-cyan-500/50 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Header Icon + Subtitle */}
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-cyan-500/10 dark:bg-cyan-500/20 text-cyan-600 dark:text-cyan-400 flex items-center justify-center group-hover:scale-110 group-hover:bg-cyan-500 group-hover:text-white transition-all duration-300 shadow-sm">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono font-semibold text-slate-400 dark:text-slate-500">
                    FOCUS AREA
                  </span>
                </div>

                <h4 className="text-xl font-bold text-slate-900 dark:text-white font-sans group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                  {domain.title}
                </h4>

                <p className="text-xs font-mono font-medium text-cyan-600 dark:text-cyan-400 mt-1 mb-3">
                  {domain.subtitle}
                </p>

                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-sans mb-6">
                  {domain.description}
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-100 dark:border-slate-800/80">
                {domain.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-md text-xs font-mono font-medium bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>

    </section>
  );
};
