import React, { useState } from 'react';
import { 
  Bot, 
  FileText, 
  Layers, 
  Database, 
  Cpu, 
  Download, 
  Check, 
  ChevronRight, 
} from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export function ProductShowcase({ onCopyToast }) {
  const [activeModule, setActiveModule] = useState('prd-studio');
  const [selectedCitation, setSelectedCitation] = useState(null);
  const [llmProvider, setLlmProvider] = useState('ollama');
  const [activeKanbanFilter, setActiveKanbanFilter] = useState('all');

  const getModuleIcon = (id) => {
    switch (id) {
      case 'prd-studio': return Bot;
      case 'knowledge-ingestion': return FileText;
      case 'backlog-kanban': return Layers;
      case 'decision-ledger': return Database;
      case 'llm-gateway': return Cpu;
      default: return Bot;
    }
  };

  const modules = siteConfig.showcaseModules;
  const currentModule = modules.find((m) => m.id === activeModule) || modules[0];

  return (
    <section id="demo" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
        <span className="text-xs font-mono uppercase tracking-widest text-gold-bright px-3 py-1 rounded-full bg-gold/10 border border-gold/20 inline-block mb-3">
          Architecture Primitives & Capabilities
        </span>
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
          Switch Between Live Operating Modules
        </h2>
        <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
          Inspect how {siteConfig.name} handles document ingestion, PRD synthesis, decision registers, and local LLM execution without web browser lag or subscription gates.
        </p>
      </div>

      {/* Module Selector Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
        {modules.map((mod) => {
          const Icon = getModuleIcon(mod.id);
          const isActive = activeModule === mod.id;
          return (
            <button
              key={mod.id}
              onClick={() => setActiveModule(mod.id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-mono font-medium transition-all duration-200 ${
                isActive
                  ? 'bg-gold/20 text-gold-bright border border-gold/50 shadow-md shadow-gold/20'
                  : 'bg-surface/80 text-zinc-400 hover:text-white hover:bg-surface border border-white/[0.08]'
              }`}
            >
              <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-gold-bright' : 'text-zinc-400'}`} />
              <span>{mod.name}</span>
            </button>
          );
        })}
      </div>

      {/* Interactive Module Showcase Box */}
      <div className="spotlight-card rounded-2xl border border-white/10 bg-[#0d0d12] p-6 sm:p-8 lg:p-10 shadow-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Description Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-gold/10 text-gold-bright text-xs font-mono border border-gold/20">
              <span>{currentModule.tag}</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-snug">
              {currentModule.headline}
            </h3>

            <p className="text-zinc-400 text-sm leading-relaxed">
              {currentModule.description}
            </p>

            <div className="pt-4 border-t border-white/[0.08] space-y-3 font-mono text-xs text-zinc-300">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-gold shrink-0" />
                <span>Localhost-bound communication (127.0.0.1)</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-gold shrink-0" />
                <span>Deterministic SQLite transaction safety</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-gold shrink-0" />
                <span>Local model workflows run without internet access</span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="#specs"
                className="inline-flex items-center gap-2 text-xs font-mono text-gold-bright hover:underline"
              >
                <span>Read detailed technical handbook</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Right Interactive Simulator Column */}
          <div className="lg:col-span-7 bg-[#121218] border border-white/[0.12] rounded-xl p-4 sm:p-6 shadow-inner">
            
            {/* 1. PRD Studio Simulation */}
            {activeModule === 'prd-studio' && (
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-gold animate-ping" />
                    <span className="text-xs font-mono text-white font-semibold">PRD Generation Studio</span>
                  </div>
                  <button 
                    onClick={() => onCopyToast && onCopyToast('PRD exported as .docx successfully!')}
                    className="px-2.5 py-1 rounded bg-gold text-zinc-950 text-[11px] font-mono font-bold hover:brightness-110 flex items-center gap-1.5 transition-all"
                  >
                    <Download className="w-3 h-3" />
                    <span>Export Word (.docx)</span>
                  </button>
                </div>

                <div className="bg-[#09090d] rounded-lg p-3 border border-white/[0.08] text-xs font-mono">
                  <div className="text-[10px] text-gold uppercase mb-1">PROMPT CONTEXT</div>
                  <div className="text-zinc-200">
                    "Synthesize requirements for Local Wi-Fi P2P sync. Enforce offline encryption per ADR-013 and latency limits from Architecture_Spec.pdf."
                  </div>
                </div>

                <div className="space-y-3 bg-[#161620] rounded-xl p-4 border border-gold/30">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-gold-bright font-mono">
                      ## PRD-2026: Local Peer-to-Peer Sync Engine
                    </span>
                    <span className="text-[10px] font-mono text-zinc-400">Context-Grounded Draft</span>
                  </div>

                  <p className="text-xs text-zinc-300 leading-relaxed">
                    <strong>1. Scope:</strong> Enable two {siteConfig.name} desktop instances on the same subnet to perform bilateral SQLite differential state exchange without connecting to external cloud proxies.
                  </p>

                  <div className="space-y-1.5">
                    <div className="text-[10px] font-mono text-zinc-400 uppercase">Document References (Click to preview source)</div>
                    <div className="flex flex-wrap gap-2">
                      <button
                        onClick={() => setSelectedCitation('spec')}
                        className={`px-2 py-1 rounded text-[11px] font-mono transition-colors border ${
                          selectedCitation === 'spec'
                            ? 'bg-gold text-zinc-950 border-gold font-bold'
                            : 'bg-surface text-gold-bright border-gold/30 hover:border-gold'
                        }`}
                      >
                        📄 Architecture_Spec.pdf [§3.4 Excerpt]
                      </button>
                      <button
                        onClick={() => setSelectedCitation('adr')}
                        className={`px-2 py-1 rounded text-[11px] font-mono transition-colors border ${
                          selectedCitation === 'adr'
                            ? 'bg-gold text-zinc-950 border-gold font-bold'
                            : 'bg-surface text-gold-bright border-gold/30 hover:border-gold'
                        }`}
                      >
                        ⚖️ ADR-013: Local Encrypted Key Storage
                      </button>
                    </div>
                  </div>

                  {selectedCitation && (
                    <div className="p-3 bg-[#0a0a0f] rounded-lg border border-gold/40 text-xs font-mono text-zinc-300 animate-fadeIn">
                      <div className="text-[10px] text-gold uppercase mb-1">
                        Retrieved Context Excerpt:
                      </div>
                      {selectedCitation === 'spec' ? (
                        <p className="text-zinc-300">
                          "Under section 3.4 (Network Constraints), all peer-to-peer discovery packets must broadcast on local subnet with session tokens. Workflows should operate without requiring central cloud relays."
                        </p>
                      ) : (
                        <p className="text-zinc-300">
                          "Under ADR-013, API keys for optional cloud providers are encrypted at rest with user-derived keys before storage in SQLite tables."
                        </p>
                      )}
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* 2. Knowledge Ingestion Simulation */}
            {activeModule === 'knowledge-ingestion' && (
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
                  <span className="text-xs font-mono text-white font-semibold">Local Document Ingestion Engine</span>
                  <span className="text-[10px] font-mono text-gold px-2 py-0.5 rounded bg-gold/10 border border-gold/20">
                    FTS5 BM25 Search
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="p-3 rounded-lg bg-[#0a0a0e] border border-gold/40">
                    <div className="flex items-center justify-between text-xs font-mono text-white mb-1">
                      <span className="font-bold">Enterprise_Spec.pdf</span>
                      <span className="text-gold">Chunked (8)</span>
                    </div>
                    <div className="text-[11px] text-zinc-400">Section-aware chunking with sentence overlap.</div>
                    <div className="mt-2 text-[10px] font-mono text-green-400">Status: Indexed in SQLite FTS5</div>
                  </div>

                  <div className="p-3 rounded-lg bg-[#0a0a0e] border border-white/10">
                    <div className="flex items-center justify-between text-xs font-mono text-white mb-1">
                      <span className="font-bold">Engineering_Roadmap.docx</span>
                      <span className="text-zinc-400">Chunked (14)</span>
                    </div>
                    <div className="text-[11px] text-zinc-400">Heading structures and paragraphs indexed locally.</div>
                    <div className="mt-2 text-[10px] font-mono text-green-400">Status: Indexed in SQLite FTS5</div>
                  </div>
                </div>

                <div className="bg-[#14141c] p-3 rounded-lg border border-white/10 text-xs font-mono space-y-1.5">
                  <div className="text-gold text-[10px] uppercase font-bold">FTS5 BM25 Ranked Query</div>
                  <div className="text-zinc-300">
                    Query: <span className="text-white">"offline key exchange"</span>
                  </div>
                  <div className="text-green-400 text-[11px]">
                    &bull; Match 1: Enterprise_Spec.pdf (Chunk #3, section "Security")
                  </div>
                  <div className="text-zinc-400 text-[11px]">
                    &bull; Match 2: Engineering_Roadmap.docx (Chunk #7, section "Architecture")
                  </div>
                </div>
              </div>
            )}

            {/* 3. Backlog & Kanban Simulation */}
            {activeModule === 'backlog-kanban' && (
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
                  <span className="text-xs font-mono text-white font-semibold">Relational Task Engine</span>
                  <div className="flex items-center gap-1">
                    {['all', 'P0', 'P1'].map((f) => (
                      <button
                        key={f}
                        onClick={() => setActiveKanbanFilter(f)}
                        className={`px-2 py-0.5 rounded text-[10px] font-mono uppercase transition-colors ${
                          activeKanbanFilter === f
                            ? 'bg-gold text-zinc-950 font-bold'
                            : 'text-zinc-400 hover:text-white bg-white/[0.04]'
                        }`}
                      >
                        {f}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 text-xs font-mono">
                  {/* Column 1 */}
                  <div className="bg-[#09090d] p-2.5 rounded-lg border border-white/10 space-y-2">
                    <div className="text-[10px] uppercase text-zinc-400 font-bold">Backlog (2)</div>
                    <div className="bg-surface p-2 rounded border border-white/[0.06] space-y-1">
                      <span className="text-[9px] px-1 rounded bg-blue-500/20 text-blue-300">P2 Feature</span>
                      <div className="text-white text-[11px]">CSV / JSON Export CLI</div>
                    </div>
                    <div className="bg-surface p-2 rounded border border-white/[0.06] space-y-1">
                      <span className="text-[9px] px-1 rounded bg-amber-500/20 text-amber-300">P1 Roadmap</span>
                      <div className="text-white text-[11px]">sqlite-vec Vector Exploration</div>
                    </div>
                  </div>

                  {/* Column 2 */}
                  <div className="bg-[#09090d] p-2.5 rounded-lg border border-gold/30 space-y-2">
                    <div className="text-[10px] uppercase text-gold font-bold">In Progress (2)</div>
                    <div className="bg-surface p-2 rounded border border-gold/40 space-y-1 shadow-sm">
                      <span className="text-[9px] px-1 rounded bg-red-500/20 text-red-300">P0 Current</span>
                      <div className="text-white text-[11px]">Headless Flask PyInstaller Spec</div>
                    </div>
                    <div className="bg-surface p-2 rounded border border-white/[0.06] space-y-1">
                      <span className="text-[9px] px-1 rounded bg-amber-500/20 text-amber-300">P1 Docx</span>
                      <div className="text-white text-[11px]">Table formatting in Word export</div>
                    </div>
                  </div>

                  {/* Column 3 */}
                  <div className="bg-[#09090d] p-2.5 rounded-lg border border-white/10 space-y-2 col-span-2 sm:col-span-1">
                    <div className="text-[10px] uppercase text-green-400 font-bold">Completed (8)</div>
                    <div className="bg-surface p-2 rounded border border-green-500/20 space-y-1 opacity-75">
                      <span className="text-[9px] px-1 rounded bg-green-500/20 text-green-300">Done</span>
                      <div className="text-white text-[11px] line-through">Electron Main Window IPC</div>
                    </div>
                    <div className="bg-surface p-2 rounded border border-green-500/20 space-y-1 opacity-75">
                      <span className="text-[9px] px-1 rounded bg-green-500/20 text-green-300">Done</span>
                      <div className="text-white text-[11px] line-through">SQLite WAL Schema Migrations</div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* 4. Decision Ledger Simulation */}
            {activeModule === 'decision-ledger' && (
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
                  <span className="text-xs font-mono text-white font-semibold">Architectural & Product Decision Register</span>
                  <span className="text-[10px] font-mono text-zinc-400">Total Records: 14</span>
                </div>

                <div className="space-y-2 font-mono text-xs">
                  <div className="p-3 bg-[#0a0a0f] border border-gold/40 rounded-xl space-y-1.5">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-gold">ADR-004</span>
                        <span className="px-1.5 py-0.2 rounded bg-green-500/20 text-green-400 text-[10px]">RECORDED</span>
                        <span className="text-white font-semibold">Local SQLite WAL over Cloud Postgres</span>
                      </div>
                      <span className="text-zinc-500 text-[11px]">2026-10-01</span>
                    </div>
                    <p className="text-zinc-400 text-[11px]">
                      <strong>Context:</strong> Cloud database sync introduces latency, authentication failure modes, and external dependency for local workflows.
                    </p>
                    <p className="text-zinc-300 text-[11px]">
                      <strong>Consequence:</strong> On-device database performance with no recurring seat fees for data storage.
                    </p>
                  </div>

                  <div className="p-3 bg-[#0a0a0f] border border-white/10 rounded-xl space-y-1.5">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-zinc-400">ADR-003</span>
                        <span className="px-1.5 py-0.2 rounded bg-green-500/20 text-green-400 text-[10px]">RECORDED</span>
                        <span className="text-white font-semibold">Electron Desktop Shell + Local Flask</span>
                      </div>
                      <span className="text-zinc-500 text-[11px]">2026-09-28</span>
                    </div>
                    <p className="text-zinc-400 text-[11px]">
                      <strong>Context:</strong> Native desktop notification integration and isolated local process management on Windows.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* 5. Air-Gapped LLM Gateway Simulation */}
            {activeModule === 'llm-gateway' && (
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
                  <span className="text-xs font-mono text-white font-semibold">Hybrid LLM Gateway</span>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setLlmProvider('ollama')}
                      className={`px-2.5 py-1 rounded text-xs font-mono transition-colors ${
                        llmProvider === 'ollama'
                          ? 'bg-gold text-zinc-950 font-bold'
                          : 'bg-white/[0.04] text-zinc-400 hover:text-white'
                      }`}
                    >
                      Offline Ollama (Local)
                    </button>
                    <button
                      onClick={() => setLlmProvider('gemini')}
                      className={`px-2.5 py-1 rounded text-xs font-mono transition-colors ${
                        llmProvider === 'gemini'
                          ? 'bg-gold text-zinc-950 font-bold'
                          : 'bg-white/[0.04] text-zinc-400 hover:text-white'
                      }`}
                    >
                      Google Gemini (Optional Cloud)
                    </button>
                  </div>
                </div>

                <div className="p-4 bg-[#0a0a0f] rounded-xl border border-white/10 space-y-3 font-mono text-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-zinc-400">Active Provider:</span>
                    <span className="text-gold-bright font-bold">
                      {llmProvider === 'ollama' ? 'Local Ollama &bull; 127.0.0.1:11434' : 'Google GenAI Cloud Dispatch'}
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-zinc-400">Network Traffic:</span>
                    <span className={llmProvider === 'ollama' ? 'text-green-400 font-bold' : 'text-amber-400'}>
                      {llmProvider === 'ollama' ? 'LOCAL-ONLY INFERENCE (NO OUTBOUND CALLS)' : 'OUTBOUND HTTPS CALL TO CLOUD PROVIDER'}
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-zinc-400">Secret Storage:</span>
                    <span className="text-zinc-200">
                      PBKDF2 Key Derivation + Authenticated Keystream (At Rest)
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-zinc-400">Generation Throughput:</span>
                    <span className="text-gold-bright">
                      {llmProvider === 'ollama' ? 'Dependent on host hardware & selected model' : 'Network & provider API dependent'}
                    </span>
                  </div>

                  <div className="pt-2 border-t border-white/[0.08] flex items-center justify-between text-[11px]">
                    <span className="text-zinc-500">Service Status:</span>
                    <span className="text-green-400 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                      {llmProvider === 'ollama' ? 'Localhost daemon active' : 'API endpoint configured'}
                    </span>
                  </div>
                </div>
              </div>
            )}

          </div>
        </div>
      </div>
    </section>
  );
}
