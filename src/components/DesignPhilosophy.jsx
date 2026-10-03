import React from 'react';
import { Layers, Sliders, ShieldCheck, Eye } from 'lucide-react';

export function DesignPhilosophy() {
  const tenets = [
    {
      title: 'Eliminate Context Switching',
      desc: 'Every second spent hunting across 20 browser tabs, disconnected Jira issues, and buried Google Drive specs is product focus destroyed. PM Tool unifies your entire context in one native desktop frame.',
      icon: Layers,
    },
    {
      title: 'Useful Complexity Over Shallow Simplicity',
      desc: 'Toy task apps hide all necessary controls behind vast empty white space. We believe professional product software must be information-dense, keyboard-navigable, and packed with deterministic utility.',
      icon: Sliders,
    },
    {
      title: 'Air-Gapped Security as a Non-Negotiable',
      desc: 'Data privacy is not an enterprise upcharge. We architected PM Tool so that all indexing, AI reasoning, and decision tracking execute natively on your machine without requiring remote authorization.',
      icon: ShieldCheck,
    },
    {
      title: 'Sovereign Aesthetic Craft',
      desc: 'Software you inspect for 8 hours a day should honor your attention. Deep obsidian palettes, offline IBM Plex typography, and tactile micro-interactions preserve flow and prevent visual fatigue.',
      icon: Eye,
    },
  ];

  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/[0.08]">
      <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
        <span className="text-xs font-mono uppercase tracking-widest text-gold-bright px-3 py-1 rounded-full bg-gold/10 border border-gold/20 inline-block mb-3">
          Product Tenets
        </span>
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
          Software Should Feel Like an Environment, Not a Collection of Tabs.
        </h2>
        <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
          When software feels like a cohesive operating environment, cognitive friction evaporates and high-leverage product work can finally happen.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {tenets.map((tenet, idx) => {
          const Icon = tenet.icon;
          return (
            <div
              key={idx}
              className="spotlight-card rounded-2xl p-7 sm:p-8 bg-surface/60 border border-white/[0.08] hover:border-gold/40 flex flex-col justify-between group transition-all duration-300"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-gold/10 border border-gold/25 flex items-center justify-center text-gold-bright mb-6 group-hover:scale-105 transition-transform">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 tracking-tight group-hover:text-gold-bright transition-colors">
                  {tenet.title}
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  {tenet.desc}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-white/[0.06] text-xs font-mono text-zinc-500 flex items-center justify-between">
                <span>Pillar 0{idx + 1}</span>
                <span className="text-gold font-semibold">&bull;&bull;&bull;</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
