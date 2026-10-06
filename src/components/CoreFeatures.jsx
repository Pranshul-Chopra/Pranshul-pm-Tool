import React, { useState } from 'react';
import { 
  GitBranch, 
  FileText, 
  Database, 
  Search, 
  FileCode, 
  Layers, 
  Cpu, 
  Lock, 
  Terminal, 
  Sparkles,
  BarChart3,
  ShieldCheck,
  Download
} from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export function CoreFeatures() {
  const [filter, setFilter] = useState('all');

  const getFeatureIcon = (id) => {
    switch (id) {
      case 'pm-doc-generator': return FileText;
      case 'multi-export-docx-md': return Download;
      case 'response-action-toolbar': return Sparkles;
      case 'zero-crash-hardening': return ShieldCheck;
      case 'data-studio-engine': return BarChart3;
      case 'sql-sandbox-safety': return Terminal;
      case 'guarded-ai-data': return ShieldCheck;
      case 'sprint-kanban-board': return Layers;
      case 'story-breakdown-tool': return Sparkles;
      case 'doc-summarizer-tool': return FileText;
      case 'command-pills': return Terminal;
      case 'dual-db-v6': return Database;
      case 'bm25-search': return Search;
      case 'parsers-dual-scroll': return FileCode;
      case 'electron-updater-pipe': return GitBranch;
      case 'port-collision-shield': return Terminal;
      default: return Sparkles;
    }
  };

  const categories = siteConfig.featureCategories;
  const features = siteConfig.features;

  const filteredFeatures =
    filter === 'all'
      ? features
      : features.filter((f) => f.category === filter);

  return (
    <section id="features" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/[0.08]">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
        <span className="text-xs font-mono uppercase tracking-widest text-gold-bright px-3 py-1 rounded-full bg-gold/10 border border-gold/20 inline-block mb-3">
          Comprehensive Feature Matrix
        </span>
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
          Engineered for Deep Product Output
        </h2>
        <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
          Every tool inside {siteConfig.name} was crafted to eliminate context switching, prevent cloud data leaks, and turn messy organizational documents into structured execution.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setFilter(cat.id)}
            className={`px-4 py-2 rounded-xl text-xs font-mono font-medium transition-all ${
              filter === cat.id
                ? 'bg-gold/20 text-gold-bright border border-gold/40 shadow-sm'
                : 'bg-surface/80 text-zinc-400 hover:text-white hover:bg-surface border border-white/[0.08]'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* 3x3 Feature Grid with Spotlight Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredFeatures.map((feat) => {
          const Icon = getFeatureIcon(feat.id);
          return (
            <div
              key={feat.id}
              className="spotlight-card rounded-2xl p-7 bg-surface/70 border border-white/[0.08] hover:border-gold/40 flex flex-col justify-between group transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-10 h-10 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center group-hover:bg-gold/20 transition-all">
                    <Icon className="w-5 h-5 text-gold-bright" />
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.04] text-zinc-300 border border-white/10">
                    {feat.highlight}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-1.5 group-hover:text-gold-bright transition-colors">
                  {feat.title}
                </h3>
                <div className="text-xs font-mono text-gold mb-3">
                  {feat.tagline}
                </div>

                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                  {feat.description}
                </p>
              </div>

              <div className="pt-5 mt-5 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-zinc-500">
                <span className="uppercase text-[10px] tracking-wider text-zinc-400">{feat.category}</span>
                <span className="text-gold-bright font-semibold group-hover:translate-x-0.5 transition-transform flex items-center gap-1">
                  Verified Primitive
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
