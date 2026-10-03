import React from 'react';
import { Sparkles, GitCommit, ArrowRight, CheckCircle2 } from 'lucide-react';

export function EvolutionTimeline() {
  const versions = [
    {
      version: 'v1.0.0-mvp',
      badge: 'CURRENT STABLE',
      title: 'The Local-First Core, Knowledge Pipeline & PRD Studio',
      tagline: 'Electron desktop shell, two-database architecture, and offline AI execution.',
      date: 'Oct 2026',
      decisionRationale:
        'Product managers spend hours manually transferring requirements from messy PDFs into Jira and writing PRDs from scratch. We built a local desktop application that ingests internal documents, performs sub-millisecond BM25 retrieval, and generates publication-ready Word PRDs backed by local SQLite.',
      highlights: [
        'Electron desktop supervisor with cascading port sweep (5050–5060) and graceful tree-kill',
        'Headless Python Flask backend bound strictly to 127.0.0.1 with security middleware',
        'Two-database architecture segregating operational data from high-frequency AI traces',
        'Multi-format file parsers (.pdf, .docx, .md, .txt, .csv, .json) with sliding-window chunking',
        'Automated PRD generator with custom XML Word (.docx) styles, tables, and citations',
        'Dual LLM Gateway supporting local offline Ollama and Google Gemini 1.5 Pro',
        'Windows DPAPI CryptProtectData hardware-bound encryption for API secrets',
      ],
      isCurrent: true,
    },
    {
      version: 'v1.1.0',
      badge: 'ACTIVE DEVELOPMENT',
      title: 'sqlite-vec Embeddings & Decision Dependency Graphs',
      tagline: 'On-device vector search and visual architectural decision mapping.',
      date: 'Q1 2027',
      decisionRationale:
        'Keyword search is fast, but semantic meaning captures intent across disparate terminology. We are introducing sqlite-vec directly inside the local database file to enable hybrid BM25 + dense vector ranking without requiring heavy Python vector service containers.',
      highlights: [
        'Embedded on-device vector embeddings via sqlite-vec extension',
        'Interactive SVG Decision Dependency Graph linking ADRs to requirements',
        'Multi-project workspace switcher with isolated SQLite schemas',
        'Automated Sprint Retrospective synthesizer based on completed backlog tickets',
      ],
      isCurrent: false,
    },
    {
      version: 'v1.2.0',
      badge: 'FUTURE HORIZON',
      title: 'P2P Encrypted Local Sync & Git-Backed PRD Versioning',
      tagline: 'Serverless team collaboration over local Wi-Fi subnets.',
      date: 'Q2 2027',
      decisionRationale:
        'Engineering and product teams work in the same physical office or local network. PM Tool will support bilateral peer-to-peer sync directly between machines over local Wi-Fi, completely bypassing cloud intermediaries.',
      highlights: [
        'Local subnet P2P differential synchronization with zero central servers',
        'Git-backed version control integration for PRD diffs and stakeholder comments',
        'Cross-platform portable binaries for macOS and Linux desktops',
      ],
      isCurrent: false,
    },
  ];

  return (
    <section id="evolution" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/[0.08]">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
        <span className="text-xs font-mono uppercase tracking-widest text-gold-bright px-3 py-1 rounded-full bg-gold/10 border border-gold/20 inline-block mb-3">
          Architectural Trajectory
        </span>
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
          Deliberate Engineering Evolution
        </h2>
        <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
          PM Tool was built on purposeful architectural decisions, stripping away cloud complexity to build an enduring desktop environment.
        </p>
      </div>

      {/* Timeline items */}
      <div className="space-y-8 relative before:absolute before:inset-0 before:left-4 sm:before:left-8 before:w-0.5 before:bg-white/[0.08]">
        {versions.map((v, idx) => (
          <div
            key={v.version}
            className="relative pl-10 sm:pl-20 group"
          >
            {/* Timeline bullet icon */}
            <div className="absolute left-1.5 sm:left-5.5 top-8 -translate-x-1/2 w-6 h-6 rounded-full bg-[#09090b] border-2 border-gold flex items-center justify-center shadow-md shadow-gold/20">
              <div className="w-2 h-2 rounded-full bg-gold-bright animate-pulse" />
            </div>

            {/* Version Card */}
            <div
              className={`spotlight-card rounded-2xl p-6 sm:p-8 border transition-all duration-300 ${
                v.isCurrent
                  ? 'bg-surface/90 border-gold/50 shadow-xl shadow-gold/10'
                  : 'bg-surface/50 border-white/[0.08] hover:border-gold/30'
              }`}
            >
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                <div className="flex items-center gap-3">
                  <span className="text-xl sm:text-2xl font-bold font-mono text-white">
                    {v.version}
                  </span>
                  <span
                    className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${
                      v.isCurrent
                        ? 'bg-gold/20 text-gold-bright border-gold/40'
                        : 'bg-white/[0.04] text-zinc-400 border-white/10'
                    }`}
                  >
                    {v.badge}
                  </span>
                </div>
                <span className="text-xs font-mono text-zinc-500">{v.date}</span>
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-white mb-1">
                {v.title}
              </h3>
              <div className="text-xs font-mono text-gold mb-4">
                {v.tagline}
              </div>

              <div className="bg-[#0e0e14] p-4 rounded-xl border border-white/[0.06] mb-6">
                <div className="text-[10px] font-mono uppercase text-zinc-400 font-bold mb-1">
                  Architectural Rationale:
                </div>
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                  {v.decisionRationale}
                </p>
              </div>

              <div className="space-y-2">
                <div className="text-[10px] font-mono uppercase text-zinc-400 font-bold tracking-wider">
                  Delivered Capabilities:
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs font-mono text-zinc-300">
                  {v.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-gold shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
