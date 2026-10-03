import React, { useState } from 'react';
import { 
  GitBranch, 
  FileText, 
  Database, 
  Search, 
  ShieldCheck, 
  Sliders, 
  Zap, 
  Layers, 
  Cpu, 
  Lock, 
  Terminal, 
  FileCode,
  ArrowUpRight 
} from 'lucide-react';

export function CoreFeatures() {
  const [filter, setFilter] = useState('all');

  const features = [
    {
      id: 'pipelines',
      category: 'architecture',
      title: 'The Three Independent Pipelines',
      tagline: 'Separation of Knowledge, Action, and Reasoning.',
      description:
        'Instead of dumping unstructured files into an LLM context, PM Tool isolates operations into three deterministic pipelines: the Knowledge Pipeline (ingestion & chunking), Action Pipeline (permissioned tool execution), and Reasoning Pipeline (context-augmented synthesis).',
      icon: GitBranch,
      highlight: 'Core Architecture',
    },
    {
      id: 'prd-export',
      category: 'reasoning',
      title: 'Automated PRD Studio & DOCX Exporter',
      tagline: 'From unstructured intent to publication-grade Microsoft Word files.',
      description:
        'Turns high-level feature requests into comprehensive PRDs featuring problem statements, non-functional constraints, user stories, and acceptance criteria. Formats with executive XML styles, corporate headings, and tabular specs ready for stakeholder distribution.',
      icon: FileText,
      highlight: '1-Click Word Export',
    },
    {
      id: 'dual-db',
      category: 'architecture',
      title: 'Two-Database Storage Segregation',
      tagline: 'Clean boundary between relational records and AI trace telemetry.',
      description:
        'Separates mission-critical relational PM data (%LOCALAPPDATA%\\PMTool\\pmtool.db) from volatile, high-frequency AI reasoning traces and FTS5 BM25 document indexes (ai_context.db). Zero risk of DB bloat or schema pollution.',
      icon: Database,
      highlight: 'SQLite WAL Mode',
    },
    {
      id: 'bm25-search',
      category: 'knowledge',
      title: 'Local FTS5 BM25 Retrieval Engine',
      tagline: 'Sub-millisecond keyword and semantic search over corporate files.',
      description:
        'Leverages SQLite FTS5 full-text search with tokenized BM25 ranking. Query past meeting notes, architecture RFCs, and customer research transcripts in under 2ms without spinning up heavy vector containers.',
      icon: Search,
      highlight: 'Sub-2ms Search',
    },
    {
      id: 'parsers',
      category: 'knowledge',
      title: 'Deep Multi-Format File Ingestors',
      tagline: 'Native parsing for PDF, Word, Markdown, Text, CSV, and JSON.',
      description:
        'Robust local parsers inspect table layouts, header structures, and section hierarchies. Feeds a section-aware sliding-window chunker with 100-token semantic overlap to ensure zero context loss at chunk boundaries.',
      icon: FileCode,
      highlight: 'Native Parsers',
    },
    {
      id: 'decision-reg',
      category: 'operations',
      title: 'Organizational Decision Register (ADR/PDR)',
      tagline: 'Permanent institutional memory for strategy and trade-offs.',
      description:
        'Capture Architectural Decision Records and Product Decisions with context, alternatives considered, chosen path, and stakeholder rationale. Automatically surfaces relevant past decisions when drafting new PRDs.',
      icon: Layers,
      highlight: 'Traceable History',
    },
    {
      id: 'llm-gateway',
      category: 'reasoning',
      title: 'Cascading Dual-LLM Gateway',
      tagline: 'Offline Ollama autonomy with native Google Gemini cloud scaling.',
      description:
        'Run 100% offline air-gapped models (Llama 3, Mistral, DeepSeek) for confidential internal specs. When high-reasoning multimodal analysis is needed, cascade effortlessly to Google Gemini 1.5 Pro via native GenAI endpoints.',
      icon: Cpu,
      highlight: 'Hybrid Intelligence',
    },
    {
      id: 'dpapi-security',
      category: 'security',
      title: 'Hardware-Bound Win32 DPAPI Encryption',
      tagline: 'Zero plaintext API keys stored on your filesystem.',
      description:
        'When optional cloud LLM keys are supplied, they are protected with Windows CryptProtectData, binding encryption keys to the user logon SID and local machine hardware tokens. Cannot be copied or read by external processes.',
      icon: Lock,
      highlight: 'Win32 DPAPI',
    },
    {
      id: 'electron-shell',
      category: 'architecture',
      title: 'Isolated Desktop Shell & Supervisor',
      tagline: 'Electron Chromium shell managing an isolated Flask backend.',
      description:
        'The Electron supervisor automatically discovers open ports (starting at 5050), launches the headless Flask service, establishes an isolated IPC notification bridge, and guarantees clean process tree-killing on application exit.',
      icon: Terminal,
      highlight: 'Native Windows Shell',
    },
  ];

  const categories = [
    { id: 'all', label: 'All Capabilities' },
    { id: 'architecture', label: 'Architecture & Storage' },
    { id: 'knowledge', label: 'Knowledge & RAG' },
    { id: 'reasoning', label: 'AI Reasoning & PRD' },
    { id: 'operations', label: 'Product Operations' },
    { id: 'security', label: 'Security & Privacy' },
  ];

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
          Every tool inside PM Tool was crafted to eliminate context switching, prevent cloud data leaks, and turn messy organizational documents into structured execution.
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
          const Icon = feat.icon;
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
