import React, { useState } from 'react';
import { 
  FileUp, 
  Search, 
  Bot, 
  FileText, 
  CheckCircle2, 
  ArrowRight,
  Database,
  Layers,
  ChevronDown
} from 'lucide-react';

export function UnifiedWorkspace() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      step: '01',
      name: 'Local Ingestion',
      headline: 'Ingest Organizational Files Without Cloud Uploads',
      description:
        'Drop PDF specifications, Word roadmaps, Markdown docs, and meeting transcripts into your local project workspace. Our native parsers extract section headings and tables instantly.',
      example: 'Parsed: Enterprise_Architecture_v2.pdf (42 pages, 18 tables) in 0.38 seconds.',
      connector: 'feeds into semantic sliding-window chunker',
      icon: FileUp,
    },
    {
      step: '02',
      name: 'FTS5 Indexing',
      headline: 'Tokenized BM25 Full-Text Retrieval',
      description:
        'Chunks are indexed into SQLite FTS5 BM25 virtual tables with token boundary preservation. Query sub-strings, technical acronyms, and requirements in sub-2ms.',
      example: 'Index: 254 chunks with term frequency BM25 rankings saved to %LOCALAPPDATA%\\AIContextTool.',
      connector: 'powers verified context retrieval',
      icon: Search,
    },
    {
      step: '03',
      name: 'AI Synthesis',
      headline: 'Context-Augmented Reasoning with Strict Citations',
      description:
        'Context Builder combines your active project state, recent ADR decisions, and relevant evidence chunks before querying Ollama (offline) or Gemini. Hallucinations are actively suppressed.',
      example: 'Synthesized PRD draft with 6 verifiable line citations back to original company PDFs.',
      connector: 'formats into professional publication artifacts',
      icon: Bot,
    },
    {
      step: '04',
      name: 'PRD Export',
      headline: '1-Click Publication-Grade Microsoft Word (.docx)',
      description:
        'The Document Generator engine constructs valid XML Word files with custom color palettes, styled tables, executive callout boxes, and document revision histories.',
      example: 'Generated: PRD_Offline_P2P_Sync_v1.docx ready for executive stakeholder sign-off.',
      connector: 'commits requirements directly to execution board',
      icon: FileText,
    },
    {
      step: '05',
      name: 'Execution & Delivery',
      headline: 'Commit Directly to Local SQLite Backlog',
      description:
        'With one click, requirements are transformed into relational tickets in pmtool.db, tagged with P0/P1 priorities, estimated effort, and linked directly to Architectural Decision Records.',
      example: 'Created 8 actionable engineering tickets in pmtool.db with foreign key ADR linkages.',
      connector: 'closes the loop with zero cloud subscription fees',
      icon: Layers,
    },
  ];

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
          The true power of PM Tool is not isolated features — it is the seamless pipeline connecting file ingestion, AI synthesis, Word generation, and SQLite backlog execution in a single local desktop frame.
        </p>
      </div>

      {/* Steps Grid / Accordion */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
        {steps.map((st, idx) => {
          const Icon = st.icon;
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
