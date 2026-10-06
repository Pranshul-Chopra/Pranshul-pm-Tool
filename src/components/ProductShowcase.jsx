import React, { useState } from 'react';
import { 
  Bot, 
  FileText, 
  Layers, 
  RefreshCw, 
  Download, 
  Check, 
  ChevronRight, 
  Search, 
  Shield, 
  Terminal, 
  AlertTriangle, 
  Sparkles,
  ArrowRight,
  Sliders,
  CheckCircle2,
  BarChart3,
  Database,
  TrendingUp,
  Zap,
  Play,
  Command,
  Plus,
  Trash2,
  PieChart,
  X,
  ArrowUpRight,
  FolderGit2
} from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export function ProductShowcase({ onCopyToast }) {
  const [activeModule, setActiveModule] = useState('command-palette');
  const [selectedDocTemplate, setSelectedDocTemplate] = useState('prd');
  const [dataStudioTab, setDataStudioTab] = useState('canvas');
  const [selectedSqlPreset, setSelectedSqlPreset] = useState(0);
  const [selectedCitation, setSelectedCitation] = useState('spec');
  const [activeSlashCommand, setActiveSlashCommand] = useState('/data');
  const [kanbanFilter, setKanbanFilter] = useState('all');
  const [activeStoryTab, setActiveStoryTab] = useState(0);
  const [ftsSearchQuery, setFtsSearchQuery] = useState('offline key exchange');

  // New state for v2.0.0 / v2.0.1 showcases
  const [spotlightQuery, setSpotlightQuery] = useState('');
  const [selectedSpotlightIdx, setSelectedSpotlightIdx] = useState(0);
  const [kpiStudioModalOpen, setKpiStudioModalOpen] = useState(false);
  const [selectedKpiType, setSelectedKpiType] = useState('kpi_card');
  const [selectedKpiOp, setSelectedKpiOp] = useState('SUM');

  const getModuleIcon = (id) => {
    switch (id) {
      case 'command-palette': return Command;
      case 'kpi-studio': return PieChart;
      case 'data-studio': return Database;
      case 'doc-generator': return FileText;
      case 'sprint-kanban': return Layers;
      case 'story-decomposer': return Sparkles;
      case 'ai-copilot': return Bot;
      case 'knowledge-base': return Search;
      case 'auto-updater': return RefreshCw;
      default: return Layers;
    }
  };

  const sqlPresets = [
    {
      label: 'Feature Usage Rankings',
      sql: 'SELECT feature, COUNT(*) as events, AVG(duration_sec) as avg_duration FROM telemetry GROUP BY feature ORDER BY events DESC LIMIT 5;',
      time: '0.48 ms',
      rows: [
        { c1: 'Spotlight (Ctrl+K)', c2: '16,420', c3: '22.1s' },
        { c1: 'Sprint Kanban', c2: '14,820', c3: '42.8s' },
        { c1: 'AI Copilot', c2: '12,450', c3: '88.4s' },
        { c1: 'KPI Studio', c2: '11,180', c3: '94.2s' },
        { c1: 'SQLite Ingest', c2: '8,410', c3: '16.5s' },
      ],
      cols: ['feature', 'events', 'avg_duration'],
    },
    {
      label: 'ARR Contribution by Plan',
      sql: 'SELECT plan_tier, COUNT(*) as accounts, SUM(arr_usd) as total_arr FROM subscriptions GROUP BY plan_tier ORDER BY total_arr DESC LIMIT 3;',
      time: '0.68 ms',
      rows: [
        { c1: 'Enterprise Tier', c2: '64', c3: '$98,400' },
        { c1: 'Team Tier', c2: '142', c3: '$38,200' },
        { c1: 'Starter Tier', c2: '142', c3: '$6,200' },
      ],
      cols: ['plan_tier', 'accounts', 'total_arr'],
    },
    {
      label: 'Top Churn Root Causes',
      sql: 'SELECT primary_reason, COUNT(*) as count FROM churn_reasons GROUP BY primary_reason ORDER BY count DESC LIMIT 3;',
      time: '0.51 ms',
      rows: [
        { c1: 'Cloud Cost Inefficiencies', c2: '48', c3: 'High' },
        { c1: 'Strict Data Sovereignty Mandate', c2: '39', c3: 'Critical' },
        { c1: 'Browser Tab Switching Friction', c2: '24', c3: 'Medium' },
      ],
      cols: ['primary_reason', 'count', 'severity'],
    },
  ];

  const modules = siteConfig.showcaseModules;
  const currentModule = modules.find((m) => m.id === activeModule) || modules[0];

  return (
    <section id="demo" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
        <span className="text-xs font-mono uppercase tracking-widest text-gold-bright px-3 py-1 rounded-full bg-gold/10 border border-gold/20 inline-block mb-3">
          Interactive Architecture & Subsystems
        </span>
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
          Explore Live Operating Modules
        </h2>
        <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
          Inspect how {siteConfig.name} v{siteConfig.release.version} executes local tabular analytics, Spotlight navigation (Ctrl+K), KPI widget authoring, Agile sprint workflows, and resilient background updating.
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
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
                <span>Zero-iframe React 19 desktop SPA architecture</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-gold shrink-0" />
                <span>Deterministic SQLite transaction safety (WAL Mode)</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-gold shrink-0" />
                <span>Zero recurring seat licenses or subscription lockouts</span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="#specs"
                className="inline-flex items-center gap-2 text-xs font-mono text-gold-bright hover:underline"
              >
                <span>Inspect technical implementation details</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Right Interactive Simulator Column */}
          <div className="lg:col-span-7 bg-[#121218] border border-white/[0.12] rounded-xl p-4 sm:p-6 shadow-inner">
            
            {/* 0. Global Spotlight Command Palette (v2.0.0) */}
            {activeModule === 'command-palette' && (
              <div className="space-y-4 font-mono text-xs">
                <div className="flex flex-wrap items-center justify-between pb-3 border-b border-white/[0.08] gap-2">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
                    <span className="text-xs text-white font-semibold">Global Spotlight Command Engine</span>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-gold/10 text-gold-bright border border-gold/30">
                      v2.0.0
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] text-zinc-400">Trigger:</span>
                    <kbd className="px-2 py-0.5 rounded bg-black/40 text-gold border border-gold/30 font-bold text-[10px]">
                      Ctrl+K / Cmd+K
                    </kbd>
                  </div>
                </div>

                {/* Interactive Spotlight Simulator Frame */}
                <div className="bg-[#101016] border border-gold/40 rounded-xl overflow-hidden shadow-2xl">
                  {/* Search Input Bar */}
                  <div className="flex items-center gap-3 px-4 py-3 border-b border-white/[0.08] bg-[#161620]">
                    <Search className="w-4 h-4 text-gold shrink-0" />
                    <input
                      type="text"
                      value={spotlightQuery}
                      onChange={(e) => setSpotlightQuery(e.target.value)}
                      placeholder="Type to filter views, projects, and actions..."
                      className="w-full bg-transparent text-xs text-white placeholder-zinc-500 focus:outline-none"
                    />
                    <span className="text-[10px] text-zinc-500 hidden sm:inline">ESC to close</span>
                  </div>

                  {/* Command Palette List */}
                  <div className="p-2 space-y-1 max-h-60 overflow-y-auto">
                    <div className="px-3 py-1 text-[10px] uppercase font-bold text-zinc-500">
                      Quick Actions & Direct Module Switching
                    </div>
                    {[
                      { label: 'Switch to Sprint Kanban Board', cat: 'Navigation', key: 'Ctrl+2', icon: Layers },
                      { label: 'Open Data Studio & KPI Dashboard', cat: 'Navigation', key: 'Ctrl+3', icon: BarChart3 },
                      { label: 'Open Knowledge Base & FTS5 Search', cat: 'Navigation', key: 'Ctrl+4', icon: Search },
                      { label: 'Open AI Copilot & Document Generator', cat: 'Navigation', key: 'Ctrl+5', icon: Bot },
                      { label: '+ Add KPI Metric or Distribution Chart', cat: 'Data Studio (v2.0.1)', key: '↵', icon: Plus },
                      { label: '+ Ingest Native SQLite Database (.db)', cat: 'Data Studio (v2.0.1)', key: '↵', icon: Database },
                      { label: '+ Generate Executive PM Document (PRD)', cat: 'AI Scaffolder', key: 'Ctrl+D', icon: FileText },
                      { label: 'Toggle Navigation Sidebar', cat: 'Window', key: 'Ctrl+B', icon: Sliders },
                    ]
                      .filter(c => spotlightQuery === '' || c.label.toLowerCase().includes(spotlightQuery.toLowerCase()) || c.cat.toLowerCase().includes(spotlightQuery.toLowerCase()))
                      .map((cmd, idx) => {
                        const Icon = cmd.icon;
                        const isSelected = idx === selectedSpotlightIdx;
                        return (
                          <div
                            key={cmd.label}
                            onClick={() => {
                              setSelectedSpotlightIdx(idx);
                              onCopyToast && onCopyToast(`Executed Spotlight action: ${cmd.label}`);
                            }}
                            className={`flex items-center justify-between px-3 py-2 rounded-lg cursor-pointer transition-colors ${
                              isSelected
                                ? 'bg-gold/20 text-gold-bright border border-gold/40'
                                : 'text-zinc-300 hover:bg-white/[0.04] border border-transparent'
                            }`}
                          >
                            <div className="flex items-center gap-2.5">
                              <Icon className={`w-3.5 h-3.5 ${isSelected ? 'text-gold-bright' : 'text-gold'}`} />
                              <span className="font-semibold text-white">{cmd.label}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="text-[10px] text-zinc-500">{cmd.cat}</span>
                              <kbd className="px-1.5 py-0.5 rounded bg-black/40 text-[9px] text-gold border border-white/10 font-bold">
                                {cmd.key}
                              </kbd>
                            </div>
                          </div>
                        );
                      })}
                  </div>

                  {/* Simulator Footer */}
                  <div className="px-4 py-2 border-t border-white/[0.06] bg-[#0c0c10] flex items-center justify-between text-[10px] text-zinc-400">
                    <div className="flex items-center gap-3">
                      <span>Keyboard: <kbd className="text-zinc-200">↑</kbd> <kbd className="text-zinc-200">↓</kbd> navigate</span>
                      <span><kbd className="text-zinc-200">↵</kbd> execute</span>
                    </div>
                    <span className="text-gold">Zero-Iframe Single-DOM Execution</span>
                  </div>
                </div>

                <div className="p-2.5 rounded-lg bg-[#09090d] border border-white/[0.08] flex items-center justify-between text-[11px] text-zinc-400">
                  <span>Implementation: <code>CommandPalette.tsx & Titlebar.tsx</code></span>
                  <span className="text-green-400">Fuzzy Search & Global Keybindings</span>
                </div>
              </div>
            )}

            {/* 1. Interactive KPI & Chart Studio (New in v2.0.1) */}
            {activeModule === 'kpi-studio' && (
              <div className="space-y-4 font-mono text-xs">
                <div className="flex flex-wrap items-center justify-between pb-3 border-b border-white/[0.08] gap-2">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
                    <span className="text-xs text-white font-semibold">Interactive KPI & Chart Studio</span>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-gold/10 text-gold-bright border border-gold/30">
                      v2.0.1
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setKpiStudioModalOpen(!kpiStudioModalOpen)}
                      className="px-2.5 py-1 rounded-lg bg-gold text-zinc-950 font-bold flex items-center gap-1.5 hover:brightness-110 shadow-sm shadow-gold/20 transition-all text-[11px]"
                    >
                      <Plus className="w-3 h-3 stroke-[3]" />
                      <span>{kpiStudioModalOpen ? 'Close Builder' : '+ Add KPI Metric'}</span>
                    </button>
                  </div>
                </div>

                {/* AddWidgetModal Interactive Simulator */}
                {kpiStudioModalOpen ? (
                  <div className="bg-[#12121a] p-4 rounded-xl border border-gold/40 space-y-3 shadow-xl">
                    <div className="flex items-center justify-between pb-2 border-b border-white/[0.08]">
                      <span className="font-bold text-white flex items-center gap-2">
                        <Plus className="w-3.5 h-3.5 text-gold-bright" />
                        <span>AddWidgetModal.tsx: Select Metric or Chart Type</span>
                      </span>
                      <span className="text-[10px] text-zinc-400">analytics_store.db</span>
                    </div>

                    {/* 3 Supported Widget Types */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                      {[
                        { id: 'kpi_card', label: '1. KPI Card', desc: 'Real-time aggregation with target milestone variance badge' },
                        { id: 'bar_chart', label: '2. Bar Distribution', desc: 'Dynamic categorical distribution progress bars' },
                        { id: 'donut_chart', label: '3. Donut Share', desc: 'Multi-color dimensional breakdown shares' },
                      ].map((type) => (
                        <div
                          key={type.id}
                          onClick={() => setSelectedKpiType(type.id)}
                          className={`p-2.5 rounded-lg border cursor-pointer transition-all ${
                            selectedKpiType === type.id
                              ? 'bg-gold/20 border-gold text-gold-bright font-bold'
                              : 'bg-surface border-white/10 text-zinc-400 hover:text-white'
                          }`}
                        >
                          <div className="text-white font-semibold">{type.label}</div>
                          <div className="text-[10px] text-zinc-400 pt-1 leading-snug">{type.desc}</div>
                        </div>
                      ))}
                    </div>

                    {/* Operation & Field Selectors */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 pt-2 border-t border-white/[0.06]">
                      <div>
                        <div className="text-[10px] text-zinc-400 uppercase mb-1">Operation:</div>
                        <div className="flex gap-1">
                          {['SUM', 'AVG', 'COUNT'].map((op) => (
                            <button
                              key={op}
                              onClick={() => setSelectedKpiOp(op)}
                              className={`px-2 py-0.5 rounded text-[10px] border ${
                                selectedKpiOp === op
                                  ? 'bg-gold text-zinc-950 font-bold border-gold'
                                  : 'bg-surface text-zinc-400 border-white/10'
                              }`}
                            >
                              {op}
                            </button>
                          ))}
                        </div>
                      </div>
                      <div>
                        <div className="text-[10px] text-zinc-400 uppercase mb-1">Target Milestone:</div>
                        <div className="p-1 rounded bg-[#0a0a0f] text-zinc-200 border border-white/10 text-[11px]">$125,000</div>
                      </div>
                      <div className="flex items-end">
                        <button
                          onClick={() => {
                            setKpiStudioModalOpen(false);
                            onCopyToast && onCopyToast(`Added new ${selectedKpiType} to dashboard!`);
                          }}
                          className="w-full py-1.5 rounded bg-gold text-zinc-950 font-bold hover:brightness-110 flex items-center justify-center gap-1.5"
                        >
                          <Check className="w-3 h-3 stroke-[3]" />
                          <span>Insert Widget</span>
                        </button>
                      </div>
                    </div>
                  </div>
                ) : (
                  /* Live Widgets Display */
                  <div className="space-y-3">
                    {/* 3 Widgets Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                      {/* Widget 1: KPI Card */}
                      <div className="p-3 rounded-xl bg-surface border border-gold/40 space-y-1 relative group">
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] text-zinc-400 uppercase">ARR Velocity</span>
                          <button
                            onClick={() => onCopyToast && onCopyToast('Prompted DeleteDatasetModal confirmation')}
                            className="text-zinc-500 hover:text-red-400 opacity-0 group-hover:opacity-100 transition-opacity"
                            title="Delete Widget"
                          >
                            <Trash2 className="w-3 h-3" />
                          </button>
                        </div>
                        <div className="text-xl font-bold text-white">$142,800</div>
                        <div className="text-[10px] text-green-400 font-semibold flex items-center gap-1">
                          <TrendingUp className="w-3 h-3" />
                          <span>▲ +14.2% vs target ($125k)</span>
                        </div>
                      </div>

                      {/* Widget 2: Second KPI Card */}
                      <div className="p-3 rounded-xl bg-surface border border-white/10 space-y-1 relative group">
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] text-zinc-400 uppercase">Active Teams</span>
                          <span className="text-[9px] px-1 rounded bg-blue-500/10 text-blue-300">Growing</span>
                        </div>
                        <div className="text-xl font-bold text-white">28 Workspaces</div>
                        <div className="text-[10px] text-blue-300 font-semibold">+3 onboarded this sprint</div>
                      </div>

                      {/* Widget 3: Donut Share Breakdown */}
                      <div className="p-3 rounded-xl bg-surface border border-white/10 space-y-1">
                        <div className="flex items-center justify-between text-[10px] text-zinc-400 uppercase">
                          <span>Segment Share</span>
                          <span className="text-gold">3 Segments</span>
                        </div>
                        <div className="flex items-center gap-3 pt-1">
                          <div className="w-10 h-10 rounded-full border-4 border-gold border-r-blue-500 border-b-emerald-400 shrink-0" />
                          <div className="text-[10px] space-y-0.5 text-zinc-300">
                            <div className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-gold" /> Ent: 48%</div>
                            <div className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-blue-500" /> Growth: 34%</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Bar Distribution Chart */}
                    <div className="bg-[#111116] p-3.5 rounded-xl border border-white/[0.08] space-y-2">
                      <div className="flex items-center justify-between text-[11px]">
                        <span className="text-zinc-200 font-semibold">Categorical Module Adoption (bar_chart)</span>
                        <span className="text-[10px] text-gold">telemetry_store.sqlite3</span>
                      </div>
                      <div className="h-24 w-full flex items-end justify-between gap-3 pt-2 px-1">
                        {[
                          { label: 'Spotlight', pct: 96, color: '#e5b95a' },
                          { label: 'Kanban', pct: 88, color: '#e8a84c' },
                          { label: 'Copilot', pct: 92, color: '#f29e24' },
                          { label: 'KPI Studio', pct: 84, color: '#5aab7f' },
                          { label: 'SQLite Ingest', pct: 78, color: '#4c97e8' },
                        ].map((bar) => (
                          <div key={bar.label} className="flex-1 flex flex-col items-center gap-1 h-full justify-end group">
                            <span className="text-[9px] text-zinc-400 group-hover:text-white">{bar.pct}%</span>
                            <div
                              className="w-full rounded-t transition-all group-hover:brightness-125"
                              style={{ height: `${bar.pct * 0.7}%`, backgroundColor: bar.color }}
                            />
                            <span className="text-[8px] text-zinc-400 truncate w-full text-center">{bar.label}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                <div className="p-2.5 rounded-lg bg-[#09090d] border border-white/[0.08] flex items-center justify-between text-[11px] text-zinc-400">
                  <span>Lifecycle: <code>AddWidgetModal.tsx & compute_widget_data</code></span>
                  <span className="text-green-400">Full Metric & Chart CRUD</span>
                </div>
              </div>
            )}

            {/* 2. Tabular & SQLite Ingestion (Hardened in v2.0.1) */}
            {activeModule === 'data-studio' && (
              <div className="space-y-4">
                <div className="flex flex-wrap items-center justify-between pb-3 border-b border-white/[0.08] gap-2">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
                    <span className="text-xs font-mono text-white font-semibold">Tabular & SQLite Ingestion Engine</span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-gold/10 text-gold-bright border border-gold/30">
                      v2.0.1 Hardened
                    </span>
                  </div>

                  {/* Sub-view switcher */}
                  <div className="flex items-center gap-1 bg-[#14141c] p-0.5 rounded-lg border border-white/10 text-[11px] font-mono">
                    <button
                      onClick={() => setDataStudioTab('canvas')}
                      className={`px-2.5 py-1 rounded-md transition-colors ${
                        dataStudioTab === 'canvas'
                          ? 'bg-gold text-zinc-950 font-bold'
                          : 'text-zinc-400 hover:text-white'
                      }`}
                    >
                      📊 KPI Canvas
                    </button>
                    <button
                      onClick={() => setDataStudioTab('datasets')}
                      className={`px-2.5 py-1 rounded-md transition-colors ${
                        dataStudioTab === 'datasets'
                          ? 'bg-gold text-zinc-950 font-bold'
                          : 'text-zinc-400 hover:text-white'
                      }`}
                    >
                      📁 Datasets (4)
                    </button>
                    <button
                      onClick={() => setDataStudioTab('sql')}
                      className={`px-2.5 py-1 rounded-md transition-colors ${
                        dataStudioTab === 'sql'
                          ? 'bg-gold text-zinc-950 font-bold'
                          : 'text-zinc-400 hover:text-white'
                      }`}
                    >
                      ‹/› Safe SQL
                    </button>
                  </div>
                </div>

                {/* SUB-VIEW 1: KPI Canvas */}
                {dataStudioTab === 'canvas' && (
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 font-mono text-xs">
                      <div className="p-3 rounded-xl bg-surface border border-gold/40 space-y-1">
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] text-zinc-400 uppercase font-semibold">Total ARR</span>
                          <span className="px-1.5 py-0.2 rounded bg-green-500/10 text-green-400 text-[10px] font-bold">Ahead</span>
                        </div>
                        <div className="text-xl font-bold text-white tracking-tight">$142,800</div>
                        <div className="text-[10px] text-green-400 flex items-center gap-1 font-semibold">
                          <TrendingUp className="w-3 h-3" />
                          <span>▲ +14.2% vs target ($125,000)</span>
                        </div>
                      </div>

                      <div className="p-3 rounded-xl bg-surface border border-white/10 space-y-1">
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] text-zinc-400 uppercase font-semibold">Active Teams</span>
                          <span className="px-1.5 py-0.2 rounded bg-blue-500/10 text-blue-300 text-[10px] font-bold">Growing</span>
                        </div>
                        <div className="text-xl font-bold text-white tracking-tight">28 Workspaces</div>
                        <div className="text-[10px] text-blue-300 font-semibold">+3 onboarded this sprint</div>
                      </div>

                      <div className="p-3 rounded-xl bg-surface border border-white/10 space-y-1">
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] text-zinc-400 uppercase font-semibold">Sprint Delivery</span>
                          <span className="px-1.5 py-0.2 rounded bg-gold/10 text-gold-bright text-[10px] font-bold">74% Done</span>
                        </div>
                        <div className="text-xl font-bold text-white tracking-tight">36 Story Pts</div>
                        <div className="text-[10px] text-gold font-semibold">On track for release date</div>
                      </div>
                    </div>

                    <div className="p-2.5 rounded-lg bg-[#09090d] border border-white/[0.08] flex items-center justify-between text-[11px] font-mono text-zinc-400">
                      <span className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-green-400" />
                        <span>Storage: <code>%LOCALAPPDATA%\PMTool\datasets\analytics_store.db</code></span>
                      </span>
                      <span className="text-gold">Native SQLite (.db) & openpyxl Batch Materialization</span>
                    </div>
                  </div>
                )}

                {/* SUB-VIEW 2: Connected Datasets */}
                {dataStudioTab === 'datasets' && (
                  <div className="space-y-3 font-mono text-xs">
                    <div className="text-[10px] text-zinc-400 uppercase font-bold flex items-center justify-between">
                      <span>Materialized Datasets (Automatic Schema & Affinity Discovery)</span>
                      <span className="text-gold font-semibold">NEW: Native SQLite Ingestion</span>
                    </div>

                    {[
                      {
                        file: 'telemetry_store.sqlite3',
                        fmt: 'Native SQLite (.sqlite3)',
                        rows: '28,400 rows',
                        cols: '9 columns',
                        schema: 'id: INTEGER, event_type: TEXT, user_tier: TEXT, latency_ms: REAL, created_at: DATETIME',
                        table: 'tbl_telemetry_store',
                        badge: 'NEW in v2.0.1',
                      },
                      {
                        file: 'q3_user_telemetry.xlsx',
                        fmt: 'Excel (.xlsx)',
                        rows: '14,200 rows',
                        cols: '8 columns',
                        schema: 'timestamp: DATETIME, user_id: TEXT, feature: TEXT, duration_sec: REAL, errors: INTEGER',
                        table: 'tbl_q3_user_telemetry',
                        badge: 'openpyxl',
                      },
                      {
                        file: 'active_subscriptions.json',
                        fmt: 'JSON Array',
                        rows: '3,800 rows',
                        cols: '6 columns',
                        schema: 'sub_id: TEXT, plan_tier: TEXT, arr_usd: REAL, renewal_date: DATETIME',
                        table: 'tbl_active_subscriptions',
                        badge: 'JSON Engine',
                      },
                      {
                        file: 'churn_reasons.csv',
                        fmt: 'CSV Table',
                        rows: '1,450 rows',
                        cols: '4 columns',
                        schema: 'account_id: TEXT, churn_date: DATETIME, primary_reason: TEXT',
                        table: 'tbl_churn_reasons',
                        badge: 'CSV Engine',
                      },
                    ].map((ds) => (
                      <div key={ds.file} className="p-3 bg-surface rounded-xl border border-white/10 space-y-1.5">
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-white flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                            {ds.file}
                          </span>
                          <span className="text-[10px] px-2 py-0.5 rounded bg-white/[0.04] text-gold border border-white/10">
                            {ds.badge || ds.fmt}
                          </span>
                        </div>
                        <div className="flex items-center gap-3 text-[11px] text-zinc-400">
                          <span>{ds.rows}</span>
                          <span>&bull;</span>
                          <span>{ds.cols}</span>
                          <span>&bull;</span>
                          <span className="text-zinc-500">Table: <code>{ds.table}</code></span>
                        </div>
                        <div className="text-[10px] text-zinc-400 bg-[#09090d] p-1.5 rounded border border-white/[0.04] truncate">
                          Inferred Affinities: {ds.schema}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* SUB-VIEW 3: Safe SQL Sandbox */}
                {dataStudioTab === 'sql' && (
                  <div className="space-y-3 font-mono text-xs">
                    <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
                      {sqlPresets.map((preset, idx) => (
                        <button
                          key={preset.label}
                          onClick={() => setSelectedSqlPreset(idx)}
                          className={`px-2.5 py-1 rounded text-[10px] whitespace-nowrap transition-colors border ${
                            selectedSqlPreset === idx
                              ? 'bg-gold text-zinc-950 font-bold border-gold'
                              : 'bg-white/[0.04] text-zinc-400 hover:text-white border-white/10'
                          }`}
                        >
                          {preset.label}
                        </button>
                      ))}
                    </div>

                    <div className="bg-[#09090d] p-3.5 rounded-xl border border-gold/30 space-y-2">
                      <div className="flex items-center justify-between text-[11px] pb-1 border-b border-white/[0.06]">
                        <span className="text-gold font-bold flex items-center gap-1.5">
                          <Terminal className="w-3.5 h-3.5" />
                          <span>Interactive SQL Console (Polymorphic Rows Supported)</span>
                        </span>
                        <span className="text-green-400 flex items-center gap-1">
                          <Zap className="w-3 h-3" />
                          <span>Execution Timer: {sqlPresets[selectedSqlPreset].time}</span>
                        </span>
                      </div>
                      <code className="text-zinc-200 block text-[11px] leading-relaxed">
                        {sqlPresets[selectedSqlPreset].sql}
                      </code>
                    </div>

                    <div className="bg-[#111116] rounded-xl border border-white/10 overflow-hidden">
                      <table className="w-full text-left text-[11px]">
                        <thead className="bg-[#181822] text-gold border-b border-white/10">
                          <tr>
                            {sqlPresets[selectedSqlPreset].cols.map((col) => (
                              <th key={col} className="p-2.5">{col}</th>
                            ))}
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-white/[0.04] text-zinc-300">
                          {sqlPresets[selectedSqlPreset].rows.map((row, idx) => (
                            <tr key={idx} className="hover:bg-white/[0.02]">
                              <td className="p-2 text-white font-semibold">{row.c1}</td>
                              <td className="p-2">{row.c2}</td>
                              <td className="p-2 text-green-400">{row.c3}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                    <div className="p-2.5 rounded-lg bg-surface border border-green-500/20 text-[11px] text-green-300 flex items-center justify-between">
                      <span className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>5-Layer Sandbox Defense: URI file:... ?mode=ro & Polymorphic Grid Active</span>
                      </span>
                      <span className="text-zinc-400">Strict Read-Only</span>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* 3. AI Workspace PM Document Generator Simulation */}
            {activeModule === 'doc-generator' && (
              <div className="space-y-4">
                <div className="flex flex-wrap items-center justify-between pb-3 border-b border-white/[0.08] gap-2">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
                    <span className="text-xs font-mono text-white font-semibold">AI PM Document Generator Studio</span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-gold/10 text-gold-bright border border-gold/30">
                      5 Executive Blueprints
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-zinc-400">
                    Word (.docx) & Markdown Export
                  </span>
                </div>

                <div className="space-y-1.5">
                  <div className="text-[10px] font-mono text-zinc-400 uppercase font-semibold flex items-center justify-between">
                    <span>Select Scaffold Blueprint:</span>
                    <span className="text-gold">1-Click Scaffolding</span>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5 text-[11px] font-mono">
                    {[
                      { id: 'prd', label: '📄 PRD', title: 'Product Requirement Doc' },
                      { id: 'spec', label: '🏗️ Tech Spec', title: 'Architecture Spec' },
                      { id: 'breakdown', label: '📋 Story Breakdown', title: 'Sprint Stories' },
                      { id: 'kpi', label: '📈 Strategy & KPIs', title: 'Metric Tree' },
                      { id: 'brief', label: '📝 Executive Brief', title: 'Evidence Synthesis' },
                    ].map((tpl) => (
                      <button
                        key={tpl.id}
                        onClick={() => setSelectedDocTemplate(tpl.id)}
                        className={`p-2 rounded-lg text-left transition-colors border ${
                          selectedDocTemplate === tpl.id
                            ? 'bg-gold/20 text-gold-bright border-gold font-bold shadow-sm'
                            : 'bg-surface text-zinc-400 border-white/10 hover:text-white hover:border-gold/30'
                        }`}
                      >
                        <div className="font-semibold text-white">{tpl.label}</div>
                        <div className="text-[9px] text-zinc-400 truncate">{tpl.title}</div>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="bg-[#111116] border border-gold/30 rounded-xl p-4 space-y-3 relative overflow-hidden">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-white flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-gold-bright" />
                      <span>
                        {selectedDocTemplate === 'prd' && 'PRD-2026: Desktop SPA & Spotlight Command Engine'}
                        {selectedDocTemplate === 'spec' && 'Architecture Spec: Subnet UDP Beacon & TLS Handshake'}
                        {selectedDocTemplate === 'breakdown' && 'Agile Story Breakdown: 5 Stories & Fibonacci Estimates'}
                        {selectedDocTemplate === 'kpi' && 'Product Strategy: North Star ARR & Churn Counter-Metrics'}
                        {selectedDocTemplate === 'brief' && 'Executive Synthesis: Zero-Cloud P2P Feasibility'}
                      </span>
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-green-500/10 text-green-400 border border-green-500/20">
                      Approved Draft
                    </span>
                  </div>

                  <div className="bg-[#09090c] p-2.5 rounded-lg border border-white/[0.06] grid grid-cols-2 sm:grid-cols-4 gap-2 text-[10px] font-mono">
                    <div>
                      <span className="text-zinc-500">AUTHOR:</span> <span className="text-zinc-200">Pranshul Chopra</span>
                    </div>
                    <div>
                      <span className="text-zinc-500">DATE:</span> <span className="text-zinc-200">2026-10-06</span>
                    </div>
                    <div>
                      <span className="text-zinc-500">STATUS:</span> <span className="text-gold">Review Ready</span>
                    </div>
                    <div>
                      <span className="text-zinc-500">VERSION:</span> <span className="text-zinc-200">v2.0.1 Stable</span>
                    </div>
                  </div>

                  <p className="text-[11px] font-mono text-zinc-300 leading-relaxed">
                    <strong>Document Structure:</strong> Scaffolds executive summary, persona constraints, functional requirements, technical architecture, and phased rollout guardrails. Formatted with 1-inch margins, custom headers, and styled tables.
                  </p>

                  <div className="pt-3 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-2 text-[11px] font-mono">
                    <span className="text-[10px] text-zinc-400 uppercase font-semibold">Response Actions:</span>
                    <div className="flex flex-wrap items-center gap-1.5">
                      <button
                        onClick={() => onCopyToast && onCopyToast('Copied formatted Markdown to clipboard!')}
                        className="px-2.5 py-1 rounded bg-surface hover:bg-white/[0.08] text-zinc-300 border border-white/10 flex items-center gap-1 transition-colors"
                      >
                        <span>📋</span>
                        <span>Copy</span>
                      </button>
                      <button
                        onClick={() => onCopyToast && onCopyToast('Generated Microsoft Word document (.docx) via python-docx!')}
                        className="px-2.5 py-1 rounded bg-gold/15 hover:bg-gold/25 text-gold-bright border border-gold/40 flex items-center gap-1 font-bold transition-colors"
                      >
                        <Download className="w-3 h-3" />
                        <span>Word (.docx)</span>
                      </button>
                      <button
                        onClick={() => onCopyToast && onCopyToast('Downloaded clean Markdown specification (.md)...')}
                        className="px-2.5 py-1 rounded bg-surface hover:bg-white/[0.08] text-zinc-300 border border-white/10 flex items-center gap-1 transition-colors"
                      >
                        <span>⬇️</span>
                        <span>Markdown</span>
                      </button>
                      <button
                        onClick={() => onCopyToast && onCopyToast('Document ingested into Knowledge Base and indexed in FTS5!')}
                        className="px-2.5 py-1 rounded bg-blue-500/10 hover:bg-blue-500/20 text-blue-300 border border-blue-500/30 flex items-center gap-1 transition-colors"
                      >
                        <span>📁</span>
                        <span>Save to Docs</span>
                      </button>
                      <button
                        onClick={() => onCopyToast && onCopyToast('Transferred PRD to Decomposer: 5 Agile stories generated!')}
                        className="px-2.5 py-1 rounded bg-purple-500/10 hover:bg-purple-500/20 text-purple-300 border border-purple-500/30 flex items-center gap-1 font-medium transition-colors"
                      >
                        <span>⚡</span>
                        <span>Decompose</span>
                      </button>
                    </div>
                  </div>
                </div>

                <div className="p-2.5 rounded-lg bg-[#09090d] border border-white/[0.08] flex items-center justify-between text-[11px] font-mono text-zinc-400">
                  <span>Engine: <code>python-docx & POST /api/export/docx</code></span>
                  <span className="text-green-400">Zero-Crash Markdown Hardening Active</span>
                </div>
              </div>
            )}

            {/* 4. Sprint Kanban Simulation */}
            {activeModule === 'sprint-kanban' && (
              <div className="space-y-4">
                <div className="flex flex-wrap items-center justify-between pb-3 border-b border-white/[0.08] gap-2">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
                    <span className="text-xs font-mono text-white font-semibold">Sprint Kanban Studio</span>
                  </div>
                  <div className="flex items-center gap-1 text-[10px] font-mono">
                    {['all', 'critical', 'high'].map((f) => (
                      <button
                        key={f}
                        onClick={() => setKanbanFilter(f)}
                        className={`px-2 py-0.5 rounded capitalize ${
                          kanbanFilter === f ? 'bg-gold text-zinc-950 font-bold' : 'text-zinc-400 hover:text-white'
                        }`}
                      >
                        {f}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-4 gap-2 bg-[#14141c] p-2.5 rounded-xl border border-white/[0.08] text-xs font-mono">
                  <div>
                    <div className="text-[10px] text-zinc-400">TOTAL TASKS</div>
                    <div className="text-base font-bold text-white">18</div>
                  </div>
                  <div>
                    <div className="text-[10px] text-amber-400">IN PROGRESS</div>
                    <div className="text-base font-bold text-amber-400">4</div>
                  </div>
                  <div>
                    <div className="text-[10px] text-red-400">BLOCKERS</div>
                    <div className="text-base font-bold text-red-400">1</div>
                  </div>
                  <div>
                    <div className="text-[10px] text-green-400">VELOCITY</div>
                    <div className="text-base font-bold text-green-400">74% Done</div>
                  </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs font-mono">
                  <div className="bg-[#111116] p-2 rounded-xl border border-white/10 space-y-1.5">
                    <span className="text-[10px] uppercase font-bold text-zinc-400">Backlog (2)</span>
                    <div className="p-2 bg-surface rounded border border-white/10 space-y-1">
                      <div className="flex justify-between text-[9px]">
                        <span className="text-blue-300">P2 Medium</span>
                        <span className="text-gold font-bold">3 pts</span>
                      </div>
                      <div className="text-white text-[11px] font-semibold">Export JSON Backlog</div>
                    </div>
                  </div>

                  <div className="bg-[#111116] p-2 rounded-xl border border-gold/40 space-y-1.5">
                    <span className="text-[10px] uppercase font-bold text-gold">In Progress (2)</span>
                    <div className="p-2 bg-surface rounded border border-gold/40 space-y-1">
                      <div className="flex justify-between text-[9px]">
                        <span className="text-red-300">P0 Critical</span>
                        <span className="text-gold-bright font-bold">5 pts</span>
                      </div>
                      <div className="text-white text-[11px] font-semibold">PRD-to-Story Decomposer</div>
                    </div>
                  </div>

                  <div className="bg-[#111116] p-2 rounded-xl border border-red-500/30 space-y-1.5">
                    <span className="text-[10px] uppercase font-bold text-red-400">Blocked (1)</span>
                    <div className="p-2 bg-surface rounded border border-red-500/20 space-y-1">
                      <div className="flex justify-between text-[9px]">
                        <span className="text-red-400">P0 Blocker</span>
                        <span className="text-zinc-400 font-bold">8 pts</span>
                      </div>
                      <div className="text-white text-[11px] font-semibold">PyInstaller Flask Spec</div>
                    </div>
                  </div>

                  <div className="bg-[#111116] p-2 rounded-xl border border-green-500/20 space-y-1.5">
                    <span className="text-[10px] uppercase font-bold text-green-400">Done (13)</span>
                    <div className="p-2 bg-surface rounded border border-green-500/20 space-y-1 opacity-80">
                      <div className="flex justify-between text-[9px]">
                        <span className="text-green-300">Shipped</span>
                        <span className="text-zinc-500">5 pts</span>
                      </div>
                      <div className="text-white text-[11px] line-through font-semibold">Spotlight (Ctrl+K)</div>
                    </div>
                  </div>
                </div>

                <div className="p-2.5 rounded-lg bg-[#09090d] border border-white/[0.08] flex items-center justify-between text-[11px] font-mono text-zinc-400">
                  <span>Persistence: <code>PATCH /api/tasks/:id</code></span>
                  <span className="text-gold">Native HTML5 Drag & Drop</span>
                </div>
              </div>
            )}

            {/* 5. PRD-to-Story Decomposer Simulation */}
            {activeModule === 'story-decomposer' && (
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
                  <span className="text-xs font-mono text-white font-semibold">PRD-to-Story Decomposer Engine</span>
                  <span className="text-[10px] font-mono text-gold px-2 py-0.5 rounded bg-gold/10 border border-gold/20">
                    /breakdown Tool
                  </span>
                </div>

                <div className="flex gap-1.5 overflow-x-auto pb-1 text-xs font-mono">
                  {['Story #1: UDP Beacon', 'Story #2: TLS Exchange', 'Story #3: Delta Sync'].map((s, idx) => (
                    <button
                      key={s}
                      onClick={() => setActiveStoryTab(idx)}
                      className={`px-3 py-1.5 rounded-lg whitespace-nowrap transition-colors border ${
                        activeStoryTab === idx
                          ? 'bg-gold/20 text-gold-bright border-gold font-bold'
                          : 'bg-surface text-zinc-400 border-white/10 hover:text-white'
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>

                <div className="bg-[#111116] p-4 rounded-xl border border-white/10 space-y-3 font-mono text-xs">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-white">US-104: Local Subnet Peer Discovery Beacon</span>
                    <span className="px-2 py-0.5 rounded bg-gold/20 text-gold font-bold">5 Fibonacci Points</span>
                  </div>
                  <p className="text-zinc-300 text-[11px] leading-relaxed">
                    <strong>User Story:</strong> As an air-gapped PM, I want the desktop client to periodically broadcast a UDP beacon across the local subnet so that nearby teammates can discover my node without relying on a remote registry.
                  </p>

                  <div className="bg-[#09090d] p-3 rounded-lg border border-white/[0.06] space-y-1.5">
                    <div className="text-[10px] text-gold uppercase font-bold">Given / When / Then Acceptance Criteria:</div>
                    <div className="text-[11px] text-zinc-300 space-y-1">
                      <div>&bull; <strong>Given</strong> two workstations on 192.168.1.0/24 with PmT running,</div>
                      <div>&bull; <strong>When</strong> peer discovery is initiated via settings toggle,</div>
                      <div>&bull; <strong>Then</strong> both clients receive peer announcements within 500ms and display node IDs.</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-white/[0.06] text-[10px] text-zinc-400">
                    <span>Priority: P0 Critical</span>
                    <span>Database: Injected into <code>pmtool.db (tasks)</code></span>
                  </div>
                </div>

                <div className="p-2.5 rounded-lg bg-[#09090d] border border-white/[0.08] flex items-center justify-between text-[11px] font-mono text-zinc-400">
                  <span>Engine: <code>tools/story_decomposer.py (v2.0.1 Gateway Fixed)</code></span>
                  <span className="text-green-400">8,192 Token Output Budget</span>
                </div>
              </div>
            )}

            {/* 6. Auto-Updater & Resilient Shell Simulation */}
            {activeModule === 'auto-updater' && (
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
                  <span className="text-xs font-mono text-white font-semibold">electron-updater & Cascading Port Shield</span>
                  <span className="text-[10px] font-mono text-green-400 px-2 py-0.5 rounded bg-green-500/10 border border-green-500/20">
                    60m Background Polling
                  </span>
                </div>

                <div className="p-3.5 bg-[#0a0a0f] rounded-xl border border-white/10 space-y-3 font-mono text-xs">
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="text-zinc-400">Desktop Architecture:</span>
                    <span className="text-white font-bold">Electron 44 &bull; React 19 SPA (Single-DOM)</span>
                  </div>

                  {/* Auto-Updater Progress */}
                  <div className="p-2.5 bg-[#12121a] rounded-lg border border-gold/30 space-y-2">
                    <div className="flex items-center justify-between text-[11px]">
                      <span className="text-gold-bright font-bold">electron-updater Background Delta Sync:</span>
                      <span className="text-green-400 font-bold">v2.0.1 Verified</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-1.5 overflow-hidden">
                      <div className="bg-gradient-to-r from-gold to-gold-bright h-full rounded-full w-full transition-all" />
                    </div>
                    <div className="flex items-center justify-between text-[10px] text-zinc-400">
                      <span>Package: PM-Tool-Setup-2.0.1.exe.blockmap</span>
                      <span>Automated 60-min interval polling</span>
                    </div>
                  </div>

                  {/* Cascading Port Sweep */}
                  <div className="space-y-1.5 pt-1">
                    <div className="text-[10px] uppercase text-zinc-400 font-bold">Dynamic Cascading Port Sweep (5050 - 5065):</div>
                    <div className="grid grid-cols-2 gap-2 text-[10px]">
                      <div className="p-2 rounded bg-surface border border-white/[0.06] flex items-center justify-between">
                        <span className="text-zinc-400">127.0.0.1:5050</span>
                        <span className="text-amber-400 font-semibold">BUSY (In Use)</span>
                      </div>
                      <div className="p-2 rounded bg-gold/10 border border-gold/30 flex items-center justify-between">
                        <span className="text-white font-bold">127.0.0.1:5051</span>
                        <span className="text-green-400 font-bold">ACQUIRED &bull; ACTIVE</span>
                      </div>
                    </div>
                  </div>

                  {/* Clean Process Termination */}
                  <div className="pt-2 border-t border-white/[0.08] flex items-center justify-between text-[11px]">
                    <span className="text-zinc-400">Lifecycle Safety:</span>
                    <span className="text-zinc-300 flex items-center gap-1">
                      <Shield className="w-3.5 h-3.5 text-gold" />
                      <span>Graceful Flask backend termination on window close</span>
                    </span>
                  </div>
                </div>

                <div className="p-2.5 rounded-lg bg-[#09090d] border border-white/[0.08] text-[11px] font-mono text-zinc-400 flex items-center justify-between">
                  <span>Release Channel: GitHub Releases (Auto-Checked)</span>
                  <span className="text-gold-bright">v2.0.1 Stable</span>
                </div>
              </div>
            )}

          </div>
        </div>
      </div>
    </section>
  );
}
