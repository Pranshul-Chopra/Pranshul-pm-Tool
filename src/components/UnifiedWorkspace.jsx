import React, { useState } from 'react';
import { 
  FileUp, 
  Search, 
  Bot, 
  FileText, 
  Layers, 
  ArrowRight,
} from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export function UnifiedWorkspace() {
  const [activeStep, setActiveStep] = useState(0);

  const getStepIcon = (idx) => {
    switch (idx) {
      case 0: return FileUp;
      case 1: return Search;
      case 2: return Bot;
      case 3: return FileText;
      case 4: return Layers;
      default: return FileUp;
    }
  };

  const steps = siteConfig.executionSteps;

  return (
    <section id="pipelines" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/[0.08]">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
        <span className="text-xs font-mono uppercase tracking-widest text-gold-bright px-3 py-1 rounded-full bg-gold/10 border border-gold/20 inline-block mb-3">
          The Cohesive Execution Loop
        </span>
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
          From Raw Company Specs to Shipped Software
        </h2>
        <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
          The true power of {siteConfig.name} is not isolated features — it is the seamless pipeline connecting file ingestion, AI synthesis, Word generation, and SQLite backlog execution in a single local desktop frame.
        </p>
      </div>

      {/* Steps Grid / Accordion */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
        {steps.map((st, idx) => {
          const Icon = getStepIcon(idx);
          const isSelected = activeStep === idx;
          return (
            <div
              key={st.step}
              onClick={() => setActiveStep(idx)}
              className={`spotlight-card rounded-2xl p-6 border transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                isSelected
                  ? 'bg-surface/90 border-gold/60 shadow-lg shadow-gold/10'
                  : 'bg-surface/50 border-white/[0.08] hover:border-gold/30 hover:bg-surface/70'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xl font-bold text-gold">
                    {st.step}
                  </span>
                  <div className={`p-2 rounded-lg ${isSelected ? 'bg-gold/20 text-gold-bright' : 'bg-white/[0.04] text-zinc-400'}`}>
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                <div className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-1">
                  {st.name}
                </div>
                <h3 className="text-sm font-bold text-white mb-3 leading-snug">
                  {st.headline}
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed mb-4">
                  {st.description}
                </p>
              </div>

              <div className="pt-3 border-t border-white/[0.06] space-y-2">
                <div className="text-[11px] font-mono text-gold-bright bg-gold/10 p-2 rounded border border-gold/20">
                  {st.example}
                </div>
                <div className="text-[10px] font-mono text-zinc-500 flex items-center gap-1">
                  <ArrowRight className="w-3 h-3 text-gold" />
                  <span className="truncate">{st.connector}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
