import React, { useState } from 'react';
import { 
  Download, 
  Sparkles, 
  Database, 
  Cpu, 
  ShieldCheck, 
  FileText, 
  Layers, 
  Bot,
  Search,
  ChevronRight
} from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import { siteConfig } from '../config/siteConfig';

export function Hero({ onDownloadClick, onCopyToast }) {
  const [activeTab, setActiveTab] = useState('copilot');

  const getBadgeIcon = (type) => {
    switch (type) {
      case 'db': return Database;
      case 'cpu': return Cpu;
      case 'search': return Search;
      case 'shield': return ShieldCheck;
      default: return Sparkles;
    }
  };

  return (
    <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] sm:w-[850px] h-[350px] sm:h-[450px] bg-gold/10 rounded-full blur-[130px] pointer-events-none -z-10" />

      {/* Hero Header */}
      <div className="text-center max-w-4xl mx-auto mb-14">
        {/* Pill Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface border border-gold/30 mb-8 shadow-sm hover:border-gold transition-colors duration-200 cursor-default">
          <Sparkles className="w-3.5 h-3.5 text-gold-bright" />
          <span className="text-[11px] sm:text-xs font-mono uppercase tracking-wider text-zinc-300 font-medium">
            {siteConfig.hero.pillBadge}
          </span>
          <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-gold/20 text-gold-bright font-semibold">
            {siteConfig.hero.pillVersionTag}
          </span>
        </div>

        {/* Massive Title */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6 leading-[1.1]">
          {siteConfig.hero.headlineMain} <br className="hidden sm:inline" />
          <span className="bg-gradient-to-r from-gold via-gold-bright to-yellow-300 bg-clip-text text-transparent">
            {siteConfig.hero.headlineAccent}
          </span>{' '}
          {siteConfig.hero.headlineEnd}
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg lg:text-xl text-zinc-400 max-w-3xl mx-auto font-normal leading-relaxed mb-10">
          {siteConfig.hero.subtitle}
        </p>

        {/* CTA Button Group */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          <a
            href="#specs"
            onClick={onDownloadClick}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl font-mono text-sm font-semibold text-zinc-950 bg-gradient-to-r from-gold via-gold-bright to-yellow-400 hover:brightness-110 shadow-lg shadow-gold/25 hover:shadow-gold/40 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <Download className="w-4 h-4 stroke-[2.5]" />
            <span>Download {siteConfig.name} {siteConfig.release.version} (.exe)</span>
          </a>

          <a
            href={siteConfig.socials.github}
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-mono text-xs text-zinc-300 bg-surface/80 hover:bg-surface border border-white/10 hover:border-gold/40 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <GithubIcon className="w-4 h-4" />
            <span>Explore Source on GitHub</span>
          </a>

          <a
            href="#architecture"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-5 py-3.5 rounded-xl font-mono text-xs text-zinc-400 hover:text-gold transition-colors"
          >
            <span>Inspect Architecture</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Feature Specs Ticker Badges */}
        <div className="flex flex-wrap items-center justify-center gap-3 text-xs font-mono text-zinc-400">
          {siteConfig.hero.specsBadges.map((badge, i) => {
            const Icon = getBadgeIcon(badge.type);
            return (
              <span key={i} className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/[0.03] border border-white/[0.08]">
                <Icon className={`w-3.5 h-3.5 ${badge.type === 'shield' ? 'text-green-400' : 'text-gold'}`} />
                {badge.text}
              </span>
            );
          })}
        </div>
      </div>

      {/* Realistic Interactive Desktop App Simulator Window */}
      <div className="relative mx-auto max-w-5xl rounded-2xl border border-white/[0.12] bg-[#0c0c10] shadow-2xl shadow-black/80 overflow-hidden">
        {/* Window Chrome Title Bar */}
        <div className="bg-[#14141a] px-4 py-3 border-b border-white/[0.08] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/80 border border-red-600/50" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80 border border-yellow-600/50" />
            <div className="w-3 h-3 rounded-full bg-green-500/80 border border-green-600/50" />
            <span className="ml-3 text-xs font-mono text-zinc-400 flex items-center gap-2">
              <span className="text-gold font-semibold">{siteConfig.hero.simulator.windowTitle}</span>
              <span className="text-zinc-600">|</span>
              <span className="text-zinc-500 truncate hidden sm:inline">{siteConfig.hero.simulator.workspaceTitle}</span>
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-green-500/10 text-green-400 border border-green-500/20 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              {siteConfig.hero.simulator.backendHost}
            </span>
            <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-gold/10 text-gold-bright border border-gold/25 hidden sm:inline-block">
              {siteConfig.hero.simulator.activeModel}
            </span>
          </div>
        </div>

        {/* App Frame Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 min-h-[460px]">
          {/* Mini Sidebar */}
          <div className="md:col-span-3 bg-[#111116] border-r border-white/[0.08] p-3 flex flex-col justify-between">
            <div className="space-y-1">
              <div className="px-3 py-2 text-[10px] font-mono uppercase text-zinc-400 font-bold tracking-wider">
                Workstation Modules
              </div>
              <button 
                onClick={() => setActiveTab('copilot')}
                className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-medium text-left transition-colors ${
                  activeTab === 'copilot' 
                    ? 'bg-gold/15 text-gold-bright border border-gold/30' 
                    : 'text-zinc-400 hover:text-white hover:bg-white/[0.04]'
                }`}
              >
                <Bot className="w-3.5 h-3.5 text-gold" />
                <span>AI Copilot & PRD</span>
              </button>

              <button 
                onClick={() => setActiveTab('documents')}
                className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-medium text-left transition-colors ${
                  activeTab === 'documents' 
                    ? 'bg-gold/15 text-gold-bright border border-gold/30' 
                    : 'text-zinc-400 hover:text-white hover:bg-white/[0.04]'
                }`}
              >
                <FileText className="w-3.5 h-3.5 text-gold" />
                <span>Knowledge Ingestion</span>
              </button>

              <button 
                onClick={() => setActiveTab('kanban')}
                className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-medium text-left transition-colors ${
                  activeTab === 'kanban' 
                    ? 'bg-gold/15 text-gold-bright border border-gold/30' 
                    : 'text-zinc-400 hover:text-white hover:bg-white/[0.04]'
                }`}
              >
                <Layers className="w-3.5 h-3.5 text-gold" />
                <span>Initiatives & Backlog</span>
              </button>

              <button 
                onClick={() => setActiveTab('decisions')}
                className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-medium text-left transition-colors ${
                  activeTab === 'decisions' 
                    ? 'bg-gold/15 text-gold-bright border border-gold/30' 
                    : 'text-zinc-400 hover:text-white hover:bg-white/[0.04]'
                }`}
              >
                <Database className="w-3.5 h-3.5 text-gold" />
                <span>Decision Ledger (ADR)</span>
              </button>
            </div>

            {/* Local DB Status Card */}
            <div className="pt-3 border-t border-white/[0.06] mt-4 px-2">
              <div className="text-[10px] font-mono text-zinc-400 mb-1">LOCAL DISK REPOSITORY</div>
              <div className="text-[11px] font-mono text-zinc-300 truncate">
                {siteConfig.hero.simulator.localDbPath}
              </div>
              <div className="flex items-center justify-between text-[10px] text-zinc-400 mt-2 font-mono">
                <span>{siteConfig.hero.simulator.dbStats}</span>
              </div>
            </div>
          </div>

          {/* Central Main Viewport */}
          <div className="md:col-span-9 p-4 sm:p-6 bg-[#0a0a0e] flex flex-col justify-between">
            {activeTab === 'copilot' && (
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-gold animate-ping" />
                    <span className="text-xs font-mono text-zinc-300 font-semibold">
                      Reasoning Engine &bull; Synthesizing PRD
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-zinc-400">
                    Source Evidence: 4 verified chunks
                  </span>
                </div>

                <div className="bg-[#14141c] border border-white/10 rounded-xl p-3.5">
                  <div className="text-[10px] font-mono text-gold uppercase mb-1">Product Prompt</div>
                  <p className="text-xs font-mono text-zinc-200">
                    "Draft an executive Product Requirement Document for offline peer-to-peer sync, pulling latency constraints from System_Architecture.pdf and storage limits from ADR-014."
                  </p>
                </div>

                <div className="bg-[#111116] border border-gold/30 rounded-xl p-4 space-y-3 relative overflow-hidden">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-white flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-gold-bright" />
                      PRD-2026-04: Peer-to-Peer Offline Synchronization
                    </span>
                    <button 
                      onClick={() => onCopyToast && onCopyToast('PRD exported as .docx successfully!')}
                      className="px-2.5 py-1 rounded bg-gold/20 hover:bg-gold/30 text-gold-bright border border-gold/40 text-[10px] font-mono flex items-center gap-1 transition-colors"
                    >
                      <Download className="w-3 h-3" />
                      Export Styled .docx
                    </button>
                  </div>

                  <p className="text-xs text-zinc-300 leading-relaxed">
                    <strong>1. Executive Objective:</strong> Provide zero-cloud local area Wi-Fi synchronization for engineering laptops without central proxy servers.
                  </p>

                  <div className="bg-[#09090c] rounded-lg p-3 border border-white/[0.06] text-xs space-y-2">
                    <div className="text-[10px] font-mono text-zinc-400 uppercase">Verified Citations & Constraints</div>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-2 py-0.5 rounded bg-surface border border-white/15 text-[11px] font-mono text-gold-bright hover:border-gold cursor-pointer transition-colors">
                        📄 System_Architecture.pdf [§3.2 Latency &lt; 50ms]
                      </span>
                      <span className="px-2 py-0.5 rounded bg-surface border border-white/15 text-[11px] font-mono text-gold-bright hover:border-gold cursor-pointer transition-colors">
                        ⚖️ ADR-014: SQLite WAL Pooling
                      </span>
                      <span className="px-2 py-0.5 rounded bg-surface border border-white/15 text-[11px] font-mono text-zinc-300 hover:border-gold cursor-pointer transition-colors">
                        🔒 Win32 CryptProtectData
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'documents' && (
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
                  <span className="text-xs font-mono text-zinc-300 font-semibold">
                    Knowledge Pipeline &bull; Directory Ingestion & Chunking
                  </span>
                  <span className="text-[11px] font-mono text-gold">
                    Parsers: .pdf .docx .md .txt .csv
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="p-3 rounded-xl bg-surface border border-gold/40">
                    <div className="flex items-center justify-between text-xs font-mono text-white mb-1">
                      <span className="font-semibold truncate">Causal_Architecture_v2.pdf</span>
                      <span className="text-[10px] text-gold">42.8 KB</span>
                    </div>
                    <p className="text-[11px] text-zinc-400">Sliding-window: 14 semantic chunks indexed into FTS5 BM25 table.</p>
                  </div>
                  <div className="p-3 rounded-xl bg-surface border border-white/10">
                    <div className="flex items-center justify-between text-xs font-mono text-white mb-1">
                      <span className="font-semibold truncate">Q3_Product_Roadmap.docx</span>
                      <span className="text-[10px] text-zinc-400">18.4 KB</span>
                    </div>
                    <p className="text-[11px] text-zinc-400">Full heading & table hierarchy preserved with section offsets.</p>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-[#14141c] border border-white/10 font-mono text-xs text-zinc-300">
                  <span className="text-gold">BM25 Retrieval Query:</span> "vector embeddings sqlite-vec fallback" <br />
                  <span className="text-green-400">Score 0.892:</span> Chunk #4 in `Causal_Architecture_v2.pdf` matched line 140.
                </div>
              </div>
            )}

            {activeTab === 'kanban' && (
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
                  <span className="text-xs font-mono text-zinc-300 font-semibold">
                    Initiative Execution &bull; High-Density Backlog
                  </span>
                  <span className="text-[11px] font-mono text-zinc-400">
                    P0: 2 Urgent &bull; Done: 14
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-2 text-xs">
                  <div className="bg-surface/90 border border-white/10 rounded-lg p-2.5 space-y-2">
                    <div className="text-[10px] font-mono uppercase text-zinc-400 font-semibold">Discovery (1)</div>
                    <div className="bg-[#191922] p-2 rounded border border-white/[0.06] space-y-1">
                      <span className="text-[9px] font-mono px-1 rounded bg-amber-500/20 text-amber-300">P1 Discovery</span>
                      <div className="font-medium text-white text-[11px]">Audit local vector store latency</div>
                    </div>
                  </div>

                  <div className="bg-surface/90 border border-gold/30 rounded-lg p-2.5 space-y-2">
                    <div className="text-[10px] font-mono uppercase text-gold font-semibold">In Progress (2)</div>
                    <div className="bg-[#191922] p-2 rounded border border-gold/40 space-y-1">
                      <span className="text-[9px] font-mono px-1 rounded bg-red-500/20 text-red-300">P0 Blocker</span>
                      <div className="font-medium text-white text-[11px]">Sliding-window chunk token boundary fix</div>
                    </div>
                  </div>

                  <div className="bg-surface/90 border border-white/10 rounded-lg p-2.5 space-y-2">
                    <div className="text-[10px] font-mono uppercase text-green-400 font-semibold">Completed (8)</div>
                    <div className="bg-[#191922] p-2 rounded border border-green-500/20 space-y-1 opacity-80">
                      <span className="text-[9px] font-mono px-1 rounded bg-green-500/20 text-green-300">Shipped</span>
                      <div className="font-medium text-white text-[11px] line-through">Electron IPC security handshake</div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'decisions' && (
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
                  <span className="text-xs font-mono text-zinc-300 font-semibold">
                    Decision Register &bull; Architectural & Product Decision Records
                  </span>
                  <span className="text-[11px] font-mono text-green-400">
                    Audit Status: 100% Immutable
                  </span>
                </div>

                <div className="space-y-2">
                  <div className="p-3 rounded-xl bg-surface border border-gold/40 flex items-start justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-mono text-xs text-gold font-bold">ADR-014</span>
                        <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-green-500/10 text-green-400">Approved</span>
                        <span className="text-xs font-semibold text-white">Dual-Database Segmentation Pattern</span>
                      </div>
                      <p className="text-[11px] text-zinc-400">
                        Isolate operational relational data (pmtool.db) from volatile AI reasoning traces (ai_context.db).
                      </p>
                    </div>
                    <span className="text-[10px] font-mono text-zinc-400 shrink-0">Oct 2026</span>
                  </div>

                  <div className="p-3 rounded-xl bg-surface border border-white/10 flex items-start justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-mono text-xs text-zinc-400 font-bold">ADR-013</span>
                        <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-green-500/10 text-green-400">Approved</span>
                        <span className="text-xs font-semibold text-white">Win32 CryptProtectData for LLM Keys</span>
                      </div>
                      <p className="text-[11px] text-zinc-400">
                        Hardware-bound encryption for optional Gemini / OpenAI keys without plain-text disk storage.
                      </p>
                    </div>
                    <span className="text-[10px] font-mono text-zinc-400 shrink-0">Sep 2026</span>
                  </div>
                </div>
              </div>
            )}

            {/* Bottom Status bar inside simulation */}
            <div className="pt-4 border-t border-white/[0.08] flex flex-wrap items-center justify-between text-[11px] font-mono text-zinc-400">
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1.5 text-zinc-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                  SQLite WAL: Enabled
                </span>
                <span className="text-zinc-500">|</span>
                <span>FTS5 BM25 Engine: Ready</span>
              </div>
              <div className="text-gold-bright flex items-center gap-1">
                <span>{siteConfig.hero.simulator.shortcut}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
