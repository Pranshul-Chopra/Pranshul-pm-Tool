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
  Play
} from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export function ProductShowcase({ onCopyToast }) {
  const [activeModule, setActiveModule] = useState('data-studio');
  const [dataStudioTab, setDataStudioTab] = useState('canvas');
  const [selectedSqlPreset, setSelectedSqlPreset] = useState(0);
  const [selectedCitation, setSelectedCitation] = useState('spec');
  const [activeSlashCommand, setActiveSlashCommand] = useState('/data');
  const [kanbanFilter, setKanbanFilter] = useState('all');
  const [activeStoryTab, setActiveStoryTab] = useState(0);
  const [ftsSearchQuery, setFtsSearchQuery] = useState('offline key exchange');

  const getModuleIcon = (id) => {
    switch (id) {
      case 'data-studio': return BarChart3;
      case 'sprint-kanban': return Layers;
      case 'story-decomposer': return Sparkles;
      case 'ai-copilot': return Bot;
      case 'knowledge-base': return FileText;
      case 'auto-updater': return RefreshCw;
      default: return Layers;
    }
  };

  const sqlPresets = [
    {
      label: 'Feature Usage Rankings',
      sql: 'SELECT feature, COUNT(*) as events, AVG(duration_sec) as avg_duration FROM telemetry GROUP BY feature ORDER BY events DESC LIMIT 5;',
      time: '0.74 ms',
      rows: [
        { c1: 'Sprint Kanban', c2: '14,820', c3: '42.8s' },
        { c1: 'AI Copilot', c2: '12,450', c3: '88.4s' },
        { c1: 'Data Studio', c2: '9,830', c3: '114.2s' },
        { c1: 'Knowledge Ingest', c2: '7,210', c3: '18.1s' },
        { c1: 'Word Exporter', c2: '4,190', c3: '12.5s' },
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
          Inspect how {siteConfig.name} v{siteConfig.release.version} executes local tabular analytics, Agile sprint workflows, PRD story decomposition, document search, and resilient background updating.
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
                <span>Strict localhost REST protocol (127.0.0.1)</span>
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
            
            {/* 0. Data Studio & Business Dashboard Simulation (NEW IN v1.4.0) */}
            {activeModule === 'data-studio' && (
              <div className="space-y-4">
                <div className="flex flex-wrap items-center justify-between pb-3 border-b border-white/[0.08] gap-2">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
                    <span className="text-xs font-mono text-white font-semibold">Data Studio Engine &bull; /dashboard</span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-gold/10 text-gold-bright border border-gold/30">
                      v1.4.0
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
                      📁 Datasets (3)
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
                    {/* KPI Summary Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 font-mono text-xs">
                      <div className="p-3 rounded-xl bg-surface border border-gold/40 space-y-1">
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] text-zinc-400 uppercase font-semibold">Total ARR</span>
                          <span className="px-1.5 py-0.2 rounded bg-green-500/10 text-green-400 text-[10px] font-bold">Ahead</span>
                        </div>
                        <div className="text-xl font-bold text-white tracking-tight">$142,800</div>
                        <div className="text-[10px] text-green-400 flex items-center gap-1 font-semibold">
                          <TrendingUp className="w-3 h-3" />
                          <span>+14.2% vs target ($125,000)</span>
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
                        <div className="text-xl font-bold text-white tracking-tight">34 Story Pts</div>
                        <div className="text-[10px] text-gold font-semibold">On track for release date</div>
                      </div>
                    </div>

                    {/* Responsive Pure SVG Bar Chart */}
                    <div className="bg-[#111116] p-4 rounded-xl border border-white/[0.08] space-y-2">
                      <div className="flex items-center justify-between text-xs font-mono">
                        <span className="text-white font-semibold">Q3 Module Adoption Rate (% of Active PM Workspaces)</span>
                        <span className="text-[10px] text-gold">Source: q3_telemetry.xlsx</span>
                      </div>

                      {/* SVG Bar Chart Graphic */}
                      <div className="h-32 w-full flex items-end justify-between gap-3 pt-4 px-2">
                        {[
                          { label: 'Sprint Kanban', pct: 88, color: '#e8a84c' },
                          { label: 'AI Copilot', pct: 94, color: '#f29e24' },
                          { label: 'Data Studio', pct: 81, color: '#5aab7f' },
                          { label: 'Doc Ingestion', pct: 66, color: '#4c97e8' },
                          { label: 'Word (.docx)', pct: 59, color: '#a5b4fc' },
                        ].map((bar) => (
                          <div key={bar.label} className="flex-1 flex flex-col items-center gap-1.5 h-full justify-end group">
                            <span className="text-[10px] font-mono text-zinc-400 group-hover:text-white transition-colors">
                              {bar.pct}%
                            </span>
                            <div 
                              className="w-full rounded-t transition-all duration-300 group-hover:brightness-125"
                              style={{ 
                                height: `${bar.pct * 0.8}%`, 
                                backgroundColor: bar.color,
                                opacity: 0.85
                              }}
                            />
                            <span className="text-[9px] font-mono text-zinc-400 truncate w-full text-center">
                              {bar.label}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="p-2.5 rounded-lg bg-[#09090d] border border-white/[0.08] flex items-center justify-between text-[11px] font-mono text-zinc-400">
                      <span className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-green-400" />
                        <span>Storage: <code>%LOCALAPPDATA%\PMTool\datasets\analytics_store.db</code></span>
                      </span>
                      <span className="text-gold">SQLite Batch Acceleration</span>
                    </div>
                  </div>
                )}

                {/* SUB-VIEW 2: Connected Datasets */}
                {dataStudioTab === 'datasets' && (
                  <div className="space-y-3 font-mono text-xs">
                    <div className="text-[10px] text-zinc-400 uppercase font-bold">
                      Materialized Tabular Datasets (Automatic Schema & Affinity Discovery)
                    </div>

                    {[
                      {
                        file: 'q3_user_telemetry.xlsx',
                        fmt: 'Excel (.xlsx)',
                        rows: '14,200 rows',
                        cols: '8 columns',
                        schema: 'timestamp: DATETIME, user_id: TEXT, feature: TEXT, duration_sec: REAL, errors: INTEGER',
                        table: 'tbl_q3_user_telemetry',
                      },
                      {
                        file: 'active_subscriptions.json',
                        fmt: 'JSON Array',
                        rows: '3,800 rows',
                        cols: '6 columns',
                        schema: 'sub_id: TEXT, plan_tier: TEXT, arr_usd: REAL, renewal_date: DATETIME',
                        table: 'tbl_active_subscriptions',
                      },
                      {
                        file: 'churn_reasons.csv',
                        fmt: 'CSV Table',
                        rows: '1,450 rows',
                        cols: '4 columns',
                        schema: 'account_id: TEXT, churn_date: DATETIME, primary_reason: TEXT',
                        table: 'tbl_churn_reasons',
                      },
                    ].map((ds) => (
                      <div key={ds.file} className="p-3 bg-surface rounded-xl border border-white/10 space-y-1.5">
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-white flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                            {ds.file}
                          </span>
                          <span className="text-[10px] px-2 py-0.5 rounded bg-white/[0.04] text-gold border border-white/10">
                            {ds.fmt}
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
                    {/* Presets Bar */}
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

                    {/* SQL Editor Box */}
                    <div className="bg-[#09090d] p-3.5 rounded-xl border border-gold/30 space-y-2">
                      <div className="flex items-center justify-between text-[11px] pb-1 border-b border-white/[0.06]">
                        <span className="text-gold font-bold flex items-center gap-1.5">
                          <Terminal className="w-3.5 h-3.5" />
                          <span>Safe SQL Console</span>
                        </span>
                        <span className="text-green-400 flex items-center gap-1 font-semibold">
                          <Zap className="w-3 h-3" />
                          <span>Execution Timer: {sqlPresets[selectedSqlPreset].time}</span>
                        </span>
                      </div>
                      <code className="text-zinc-200 block text-[11px] leading-relaxed">
                        {sqlPresets[selectedSqlPreset].sql}
                      </code>
                    </div>

                    {/* Tabular Results Grid */}
                    <div className="bg-[#111116] rounded-xl border border-white/10 overflow-hidden">
                      <table className="w-full text-left text-[11px]">
                        <thead className="bg-[#181822] text-gold border-b border-white/10">
                          <tr>
                            {sqlPresets[selectedSqlPreset].cols.map((col) => (
                              <th key={col} className="p-2 capitalize">{col}</th>
                            ))}
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-white/[0.04] text-zinc-300">
                          {sqlPresets[selectedSqlPreset].rows.map((row, rIdx) => (
                            <tr key={rIdx} className="hover:bg-white/[0.02]">
                              <td className="p-2 text-white font-medium">{row.c1}</td>
                              <td className="p-2">{row.c2}</td>
                              <td className="p-2 text-green-400">{row.c3}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                    {/* 5-Layer Defense Verification Banner */}
                    <div className="p-2.5 rounded-lg bg-surface border border-green-500/20 text-[10px] text-green-300 flex flex-wrap items-center justify-between gap-2">
                      <span>✓ 5-Layer Defense: Semicolons Blocked &bull; Whitelist Only &bull; LIMIT 100 Enforced &bull; file:... ?mode=ro</span>
                      <span className="text-zinc-400 font-semibold">{sqlPresets[selectedSqlPreset].rows.length} rows returned</span>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* 1. Sprint Kanban Studio Simulation */}
            {activeModule === 'sprint-kanban' && (
              <div className="space-y-4">
                <div className="flex flex-wrap items-center justify-between pb-3 border-b border-white/[0.08] gap-2">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-xs font-mono text-white font-semibold">Sprint Studio &bull; Sprint 14</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[10px] font-mono">
                    <span className="px-2 py-0.5 rounded bg-white/[0.04] text-zinc-300 border border-white/10">12 Tasks</span>
                    <span className="px-2 py-0.5 rounded bg-blue-500/10 text-blue-300 border border-blue-500/20">4 Active</span>
                    <span className="px-2 py-0.5 rounded bg-red-500/10 text-red-300 border border-red-500/20">1 Blocker</span>
                    <span className="px-2 py-0.5 rounded bg-gold/10 text-gold-bright border border-gold/30 font-bold">Velocity: 67% Done</span>
                  </div>
                </div>

                {/* Filter Bar */}
                <div className="flex items-center justify-between text-xs font-mono">
                  <div className="flex items-center gap-1">
                    {['all', 'high', 'blocked'].map((f) => (
                      <button
                        key={f}
                        onClick={() => setKanbanFilter(f)}
                        className={`px-2.5 py-1 rounded text-[11px] capitalize transition-colors ${
                          kanbanFilter === f
                            ? 'bg-gold text-zinc-950 font-bold'
                            : 'bg-white/[0.04] text-zinc-400 hover:text-white'
                        }`}
                      >
                        {f === 'high' ? 'High Priority' : f}
                      </button>
                    ))}
                  </div>
                  <span className="text-[10px] text-zinc-500 hidden sm:inline">HTML5 Drag & Drop &bull; PATCH /api/tasks/:id</span>
                </div>

                {/* 4 Lanes Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-2.5 text-xs font-mono">
                  
                  {/* Lane 1: Backlog */}
                  <div className="bg-[#09090d] p-2.5 rounded-lg border border-white/10 space-y-2">
                    <div className="flex items-center justify-between text-[10px] uppercase text-zinc-400 font-bold pb-1 border-b border-white/[0.06]">
                      <span>Backlog</span>
                      <span className="px-1 rounded bg-white/10 text-zinc-300">2</span>
                    </div>
                    {(kanbanFilter === 'all' || kanbanFilter === 'high') && (
                      <div className="bg-surface p-2 rounded border border-white/[0.08] hover:border-gold/30 transition-all space-y-1">
                        <div className="flex items-center justify-between text-[9px]">
                          <span className="px-1 rounded bg-amber-500/20 text-amber-300 font-bold">P1</span>
                          <span className="px-1 rounded bg-gold/10 text-gold font-bold">5 pts</span>
                        </div>
                        <div className="text-white text-[11px] font-medium leading-tight">UDP Subnet Discovery Beacon</div>
                        <div className="text-[9px] text-zinc-500">PRD-2026 #104</div>
                      </div>
                    )}
                    {kanbanFilter === 'all' && (
                      <div className="bg-surface p-2 rounded border border-white/[0.08] hover:border-gold/30 transition-all space-y-1">
                        <div className="flex items-center justify-between text-[9px]">
                          <span className="px-1 rounded bg-blue-500/20 text-blue-300 font-bold">P2</span>
                          <span className="px-1 rounded bg-gold/10 text-gold font-bold">3 pts</span>
                        </div>
                        <div className="text-white text-[11px] font-medium leading-tight">CSV / JSON Bulk Exporter</div>
                        <div className="text-[9px] text-zinc-500">Core #089</div>
                      </div>
                    )}
                  </div>

                  {/* Lane 2: In Progress */}
                  <div className="bg-[#09090d] p-2.5 rounded-lg border border-gold/30 space-y-2">
                    <div className="flex items-center justify-between text-[10px] uppercase text-gold font-bold pb-1 border-b border-gold/20">
                      <span>In Progress</span>
                      <span className="px-1 rounded bg-gold/20 text-gold">2</span>
                    </div>
                    {(kanbanFilter === 'all' || kanbanFilter === 'high') && (
                      <div className="bg-surface p-2 rounded border border-gold/40 shadow-sm space-y-1">
                        <div className="flex items-center justify-between text-[9px]">
                          <span className="px-1 rounded bg-red-500/20 text-red-300 font-bold">P0</span>
                          <span className="px-1 rounded bg-gold/10 text-gold font-bold">8 pts</span>
                        </div>
                        <div className="text-white text-[11px] font-medium leading-tight">Bilateral SQLite WAL Sync</div>
                        <div className="text-[9px] text-gold-bright">Optimistic save active</div>
                      </div>
                    )}
                    {kanbanFilter === 'all' && (
                      <div className="bg-surface p-2 rounded border border-white/[0.08] space-y-1">
                        <div className="flex items-center justify-between text-[9px]">
                          <span className="px-1 rounded bg-amber-500/20 text-amber-300 font-bold">P1</span>
                          <span className="px-1 rounded bg-gold/10 text-gold font-bold">2 pts</span>
                        </div>
                        <div className="text-white text-[11px] font-medium leading-tight">Word (.docx) Callout Styling</div>
                        <div className="text-[9px] text-zinc-500">Export #094</div>
                      </div>
                    )}
                  </div>

                  {/* Lane 3: Blocked */}
                  <div className="bg-[#09090d] p-2.5 rounded-lg border border-red-500/30 space-y-2">
                    <div className="flex items-center justify-between text-[10px] uppercase text-red-400 font-bold pb-1 border-b border-red-500/20">
                      <span>Blocked</span>
                      <span className="px-1 rounded bg-red-500/20 text-red-300">1</span>
                    </div>
                    <div className="bg-surface p-2 rounded border border-red-500/40 space-y-1">
                      <div className="flex items-center justify-between text-[9px]">
                        <span className="px-1 rounded bg-red-500/20 text-red-300 font-bold">P0</span>
                        <span className="px-1 rounded bg-gold/10 text-gold font-bold">8 pts</span>
                      </div>
                      <div className="text-white text-[11px] font-medium leading-tight">UPnP NAT Traversal Probing</div>
                      <div className="p-1 rounded bg-red-950/40 border border-red-500/20 text-[9px] text-red-300 leading-tight">
                        Blocked: Test harness needs router simulation
                      </div>
                    </div>
                  </div>

                  {/* Lane 4: Completed */}
                  <div className="bg-[#09090d] p-2.5 rounded-lg border border-green-500/20 space-y-2">
                    <div className="flex items-center justify-between text-[10px] uppercase text-green-400 font-bold pb-1 border-b border-green-500/20">
                      <span>Completed</span>
                      <span className="px-1 rounded bg-green-500/20 text-green-300">4</span>
                    </div>
                    {kanbanFilter !== 'blocked' && (
                      <>
                        <div className="bg-surface p-2 rounded border border-white/[0.04] opacity-80 space-y-1">
                          <div className="flex items-center justify-between text-[9px]">
                            <span className="px-1 rounded bg-green-500/20 text-green-300 font-bold">Done</span>
                            <span className="px-1 rounded bg-white/10 text-zinc-400">5 pts</span>
                          </div>
                          <div className="text-zinc-300 text-[11px] line-through">Sprint Board HTML5 Drag & Drop</div>
                        </div>
                        <div className="bg-surface p-2 rounded border border-white/[0.04] opacity-80 space-y-1">
                          <div className="flex items-center justify-between text-[9px]">
                            <span className="px-1 rounded bg-green-500/20 text-green-300 font-bold">Done</span>
                            <span className="px-1 rounded bg-white/10 text-zinc-400">3 pts</span>
                          </div>
                          <div className="text-zinc-300 text-[11px] line-through">Schema v5 (story_points)</div>
                        </div>
                      </>
                    )}
                  </div>

                </div>

                <div className="p-2.5 rounded-lg bg-[#09090d] border border-white/[0.08] flex items-center justify-between text-[11px] font-mono text-zinc-400">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-green-400" />
                    <span>Database: <code>%LOCALAPPDATA%\PMTool\pmtool.db</code></span>
                  </span>
                  <span className="text-gold">Schema Version: v6</span>
                </div>
              </div>
            )}

            {/* 2. PRD-to-Story Decomposer Simulation */}
            {activeModule === 'story-decomposer' && (
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded bg-gold/10 text-gold-bright border border-gold/30 text-[10px] font-mono font-bold">
                      /breakdown Tool
                    </span>
                    <span className="text-xs font-mono text-white font-semibold">Story Decomposer Engine</span>
                  </div>
                  <span className="text-[10px] font-mono text-zinc-400">
                    Max Output: 8,192 Tokens
                  </span>
                </div>

                <div className="bg-[#09090d] rounded-lg p-3 border border-white/[0.08] text-xs font-mono space-y-1">
                  <div className="text-[10px] text-gold uppercase font-bold">Input Document Context</div>
                  <div className="text-zinc-300 text-[11px]">
                    "PRD-2026: Local Peer-to-Peer Sync Engine &bull; Section 3.2: Automated Node Discovery and Session Handshake"
                  </div>
                </div>

                {/* Generated User Stories */}
                <div className="space-y-2.5">
                  <div className="text-[10px] font-mono text-zinc-400 uppercase font-semibold flex items-center justify-between">
                    <span>Generated Agile Stories (Persisted to pmtool.db)</span>
                    <span className="text-gold">Fibonacci: 1, 2, 3, 5, 8</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    {[
                      { id: 'US-104', title: 'UDP Discovery Beacon', pts: '3 pts', prio: 'P1' },
                      { id: 'US-105', title: 'Bilateral WAL Sync', pts: '5 pts', prio: 'P0' },
                      { id: 'US-106', title: 'Merge Conflict Modal', pts: '8 pts', prio: 'P1' },
                    ].map((story, idx) => (
                      <button
                        key={story.id}
                        onClick={() => setActiveStoryTab(idx)}
                        className={`p-2.5 rounded-lg border text-left font-mono transition-all ${
                          activeStoryTab === idx
                            ? 'bg-surface border-gold/50 shadow-md shadow-gold/10'
                            : 'bg-[#09090d] border-white/10 hover:border-white/20'
                        }`}
                      >
                        <div className="flex items-center justify-between text-[10px] mb-1">
                          <span className="font-bold text-white">{story.id}</span>
                          <span className="px-1.5 py-0.2 rounded bg-gold/10 text-gold font-bold">{story.pts}</span>
                        </div>
                        <div className="text-[11px] text-zinc-300 font-medium truncate">{story.title}</div>
                      </button>
                    ))}
                  </div>

                  {/* Active Story Inspector */}
                  <div className="p-3.5 bg-[#0a0a0f] rounded-xl border border-gold/30 space-y-2 text-xs font-mono">
                    {activeStoryTab === 0 && (
                      <>
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold text-gold-bright">US-104: Local UDP Broadcast Discovery Beacon</span>
                          <span className="text-[10px] px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 font-bold">Estimate: 3 pts</span>
                        </div>
                        <p className="text-[11px] text-zinc-300 leading-relaxed">
                          <strong>User Story:</strong> As a product manager on an isolated Wi-Fi network, I want my desktop app to transmit periodic discovery beacons so peer instances can connect without manual IP entry.
                        </p>
                        <div className="p-2.5 bg-[#12121a] rounded-lg border border-white/[0.06] space-y-1 text-[11px]">
                          <div className="text-[10px] text-gold uppercase font-bold">Acceptance Criteria (Given / When / Then):</div>
                          <div className="text-zinc-300">&bull; <strong>Given:</strong> PM Tool is launched on a local network adapter</div>
                          <div className="text-zinc-300">&bull; <strong>When:</strong> The discovery daemon sends UDP ping on port 5055</div>
                          <div className="text-zinc-300">&bull; <strong>Then:</strong> Active instances reply with node ID and schema hash.</div>
                        </div>
                      </>
                    )}

                    {activeStoryTab === 1 && (
                      <>
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold text-gold-bright">US-105: Bilateral SQLite WAL Change Exchange</span>
                          <span className="text-[10px] px-2 py-0.5 rounded bg-red-500/20 text-red-300 font-bold">Estimate: 5 pts</span>
                        </div>
                        <p className="text-[11px] text-zinc-300 leading-relaxed">
                          <strong>User Story:</strong> As a team member, I want to merge differential task changes over TLS so that our sprint backlog stays synchronized without cloud intermediaries.
                        </p>
                        <div className="p-2.5 bg-[#12121a] rounded-lg border border-white/[0.06] space-y-1 text-[11px]">
                          <div className="text-[10px] text-gold uppercase font-bold">Acceptance Criteria:</div>
                          <div className="text-zinc-300">&bull; <strong>Given:</strong> Two peer instances have completed the cryptographic handshake</div>
                          <div className="text-zinc-300">&bull; <strong>When:</strong> Changes since vector timestamp T are transmitted</div>
                          <div className="text-zinc-300">&bull; <strong>Then:</strong> Records apply in an atomic transaction; roll back on failure.</div>
                        </div>
                      </>
                    )}

                    {activeStoryTab === 2 && (
                      <>
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold text-gold-bright">US-106: Offline Conflict Resolution UI</span>
                          <span className="text-[10px] px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 font-bold">Estimate: 8 pts</span>
                        </div>
                        <p className="text-[11px] text-zinc-300 leading-relaxed">
                          <strong>User Story:</strong> As a product manager, I want an explicit visual diff dialog when two nodes modify the same task simultaneously so no requirements are silently lost.
                        </p>
                        <div className="p-2.5 bg-[#12121a] rounded-lg border border-white/[0.06] space-y-1 text-[11px]">
                          <div className="text-[10px] text-gold uppercase font-bold">Acceptance Criteria:</div>
                          <div className="text-zinc-300">&bull; <strong>Given:</strong> Conflicting edits on <code>story_points</code> or <code>title</code></div>
                          <div className="text-zinc-300">&bull; <strong>When:</strong> The sync engine encounters differing row versions</div>
                          <div className="text-zinc-300">&bull; <strong>Then:</strong> Render side-by-side comparison modal with "Keep Mine" or "Take Theirs".</div>
                        </div>
                      </>
                    )}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-1 text-[11px] font-mono text-zinc-400">
                  <span className="text-green-400 flex items-center gap-1">
                    <Check className="w-3.5 h-3.5" />
                    <span>Written directly to <code>tasks</code> table</span>
                  </span>
                  <button
                    onClick={() => onCopyToast && onCopyToast('User stories added to Sprint Kanban Backlog!')}
                    className="px-2.5 py-1 rounded bg-white/[0.06] hover:bg-white/10 text-white font-medium transition-colors"
                  >
                    Add Stories to Board &rarr;
                  </button>
                </div>
              </div>
            )}

            {/* 3. AI Copilot & Slash Tools Simulation */}
            {activeModule === 'ai-copilot' && (
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-gold animate-ping" />
                    <span className="text-xs font-mono text-white font-semibold">AI Copilot & Slash Studio</span>
                  </div>
                  <button 
                    onClick={() => onCopyToast && onCopyToast('PRD exported as .docx successfully!')}
                    className="px-2.5 py-1 rounded bg-gold text-zinc-950 text-[11px] font-mono font-bold hover:brightness-110 flex items-center gap-1.5 transition-all"
                  >
                    <Download className="w-3 h-3" />
                    <span>Export Word (.docx)</span>
                  </button>
                </div>

                {/* Slash Command Selector Pills */}
                <div className="space-y-1.5">
                  <div className="text-[10px] font-mono text-zinc-400 uppercase font-semibold">Interactive Slash Command Tools:</div>
                  <div className="flex flex-wrap gap-1.5">
                    {[
                      { cmd: '/data', desc: 'BI & KPIs' },
                      { cmd: '/breakdown', desc: 'Decompose PRD' },
                      { cmd: '/prd', desc: 'Draft PRD' },
                      { cmd: '/summarize', desc: 'Executive Brief' },
                      { cmd: '/search', desc: 'BM25 Retrieval' },
                      { cmd: '/plan', desc: 'Sprint Allocation' },
                      { cmd: '/metrics', desc: 'Velocity KPIs' }
                    ].map((pill) => (
                      <button
                        key={pill.cmd}
                        onClick={() => setActiveSlashCommand(pill.cmd)}
                        className={`px-2.5 py-1 rounded-md text-[11px] font-mono font-medium transition-colors border ${
                          activeSlashCommand === pill.cmd
                            ? 'bg-gold text-zinc-950 border-gold font-bold'
                            : 'bg-surface text-zinc-300 border-white/10 hover:border-gold/40'
                        }`}
                      >
                        <code>{pill.cmd}</code>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Generated Context Box */}
                <div className="space-y-3 bg-[#161620] rounded-xl p-4 border border-gold/30">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-gold-bright font-mono">
                      {activeSlashCommand === '/data' ? '## Executive Telemetry Brief (Q3 Telemetry Grounding)' : '## PRD-2026: Local Peer-to-Peer Sync Engine'}
                    </span>
                    <span className="text-[10px] font-mono text-zinc-400">Context-Grounded Draft</span>
                  </div>

                  {activeSlashCommand === '/data' ? (
                    <div className="space-y-2 text-xs text-zinc-300 leading-relaxed font-mono">
                      <p>
                        <strong>1. Executive Telemetry Summary:</strong> Analysis across 14,200 telemetry events indicates Sprint Kanban adoption surged to 88% (+14% WoW). Zero PII or raw rows leaked during inference.
                      </p>
                      <div className="p-2 rounded bg-[#0a0a0f] border border-white/[0.08] text-[11px] text-green-400">
                        &bull; ARR Milestone: $142,800 (+14.2% ahead of target).<br />
                        &bull; Churn Root Cause: Cloud BI overhead cited in 48 accounts.
                      </div>
                    </div>
                  ) : (
                    <p className="text-xs text-zinc-300 leading-relaxed">
                      <strong>1. Scope:</strong> Enable two {siteConfig.name} instances on the same subnet to perform bilateral SQLite differential state exchange without external cloud intermediaries.
                    </p>
                  )}

                  <div className="space-y-1.5">
                    <div className="text-[10px] font-mono text-zinc-400 uppercase">Document & Data References</div>
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
                        onClick={() => setSelectedCitation('data')}
                        className={`px-2 py-1 rounded text-[11px] font-mono transition-colors border ${
                          selectedCitation === 'data'
                            ? 'bg-gold text-zinc-950 border-gold font-bold'
                            : 'bg-surface text-gold-bright border-gold/30 hover:border-gold'
                        }`}
                      >
                        📊 q3_telemetry.xlsx (14.2k Rows)
                      </button>
                    </div>
                  </div>

                  {selectedCitation && (
                    <div className="p-3 bg-[#0a0a0f] rounded-lg border border-gold/40 text-xs font-mono text-zinc-300">
                      <div className="text-[10px] text-gold uppercase mb-1">
                        Retrieved Context Excerpt:
                      </div>
                      {selectedCitation === 'spec' ? (
                        <p className="text-zinc-300 text-[11px]">
                          "Under section 3.4 (Network Constraints), all peer discovery packets must broadcast on the local subnet with session tokens. Workflows should operate without requiring central cloud relays."
                        </p>
                      ) : (
                        <p className="text-zinc-300 text-[11px]">
                          "Connected dataset schema injected: tbl_q3_user_telemetry with 14,200 rows across 8 columns. Live ARR metric value $142,800 (+14.2% vs target). Raw records preserved locally."
                        </p>
                      )}
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* 4. Knowledge Ingestion & FTS5 Simulation */}
            {activeModule === 'knowledge-base' && (
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
                  <span className="text-xs font-mono text-white font-semibold">Local Document Ingestion & Search</span>
                  <span className="text-[10px] font-mono text-gold px-2 py-0.5 rounded bg-gold/10 border border-gold/20">
                    SQLite FTS5 &bull; BM25 Ranking
                  </span>
                </div>

                {/* Formats support */}
                <div className="flex flex-wrap items-center gap-1.5 text-[10px] font-mono">
                  <span className="text-zinc-400">Supported Formats:</span>
                  {['.PDF', '.DOCX', '.MD', '.TXT', '.CSV', '.JSON'].map((fmt) => (
                    <span key={fmt} className="px-1.5 py-0.5 rounded bg-white/[0.04] text-zinc-300 border border-white/[0.08]">
                      {fmt}
                    </span>
                  ))}
                </div>

                {/* Search Bar Test */}
                <div className="relative">
                  <Search className="w-3.5 h-3.5 text-zinc-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={ftsSearchQuery}
                    onChange={(e) => setFtsSearchQuery(e.target.value)}
                    placeholder="Test FTS5 search query..."
                    className="w-full bg-[#0a0a0f] border border-white/10 rounded-lg pl-9 pr-3 py-2 text-xs font-mono text-white placeholder-zinc-500 focus:outline-none focus:border-gold"
                  />
                </div>

                {/* Search Matches */}
                <div className="space-y-2 text-xs font-mono">
                  <div className="p-3 rounded-lg bg-[#0a0a0e] border border-gold/40 space-y-1">
                    <div className="flex items-center justify-between text-white">
                      <span className="font-bold text-gold">Architecture_Spec.pdf</span>
                      <span className="text-[10px] px-1.5 py-0.2 rounded bg-green-500/20 text-green-300">BM25 Rank: 0.94</span>
                    </div>
                    <div className="text-[10px] text-zinc-400">Chunk #3 &bull; Section: "Security Architecture" &bull; 412 words</div>
                    <p className="text-[11px] text-zinc-300 pt-1">
                      "...Cloud provider API keys are encrypted at rest using PBKDF2 HMAC-SHA256 and authenticated keystream before storage in SQLite..."
                    </p>
                  </div>

                  <div className="p-3 rounded-lg bg-[#0a0a0e] border border-white/10 space-y-1">
                    <div className="flex items-center justify-between text-white">
                      <span className="font-bold text-zinc-200">ADR-014-AutoUpdater.md</span>
                      <span className="text-[10px] px-1.5 py-0.2 rounded bg-white/10 text-zinc-400">BM25 Rank: 0.81</span>
                    </div>
                    <div className="text-[10px] text-zinc-400">Chunk #1 &bull; Section: "Differential Updates" &bull; 280 words</div>
                    <p className="text-[11px] text-zinc-300 pt-1">
                      "...electron-updater inspects GitHub Releases and downloads .blockmap differential slices to keep desktop client updated..."
                    </p>
                  </div>
                </div>

                <div className="p-2.5 rounded-lg bg-[#09090d] border border-white/[0.08] flex items-center justify-between text-[11px] font-mono text-zinc-400">
                  <span>Storage: <code>%LOCALAPPDATA%\AIContextTool\ai_context.db</code></span>
                  <span className="text-green-400">Sticky Headers & Dual Scroll</span>
                </div>
              </div>
            )}

            {/* 5. Auto-Updater & Resilient Shell Simulation */}
            {activeModule === 'auto-updater' && (
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
                  <span className="text-xs font-mono text-white font-semibold">electron-updater & Cascading Port Shield</span>
                  <span className="text-[10px] font-mono text-green-400 px-2 py-0.5 rounded bg-green-500/10 border border-green-500/20">
                    Live Daemon
                  </span>
                </div>

                <div className="p-3.5 bg-[#0a0a0f] rounded-xl border border-white/10 space-y-3 font-mono text-xs">
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="text-zinc-400">Desktop Shell:</span>
                    <span className="text-white font-bold">Electron 44 &bull; Chromium</span>
                  </div>

                  {/* Auto-Updater Progress */}
                  <div className="p-2.5 bg-[#12121a] rounded-lg border border-gold/30 space-y-2">
                    <div className="flex items-center justify-between text-[11px]">
                      <span className="text-gold-bright font-bold">electron-updater Background Delta Sync:</span>
                      <span className="text-green-400 font-bold">100% Verified</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-1.5 overflow-hidden">
                      <div className="bg-gradient-to-r from-gold to-gold-bright h-full rounded-full w-full transition-all" />
                    </div>
                    <div className="flex items-center justify-between text-[10px] text-zinc-400">
                      <span>Package: PM-Tool-Setup-1.4.0.exe.blockmap</span>
                      <span>Differential: 12.8 MB / 81.2 MB</span>
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
                  <span className="text-gold-bright">v1.4.0</span>
                </div>
              </div>
            )}

          </div>
        </div>
      </div>
    </section>
  );
}
