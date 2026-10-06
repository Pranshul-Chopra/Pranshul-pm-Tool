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
  ChevronRight, 
  Info, 
  RefreshCw, 
  Kanban, 
  CheckCircle2, 
  AlertCircle, 
  TrendingUp, 
  FolderGit2, 
  BarChart3, 
  Terminal, 
  Table, 
  Zap, 
  Command, 
  Plus, 
  Trash2, 
  PieChart, 
  X, 
  ArrowUpRight,
  Sliders,
  Check
} from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import { PmtLogo } from './PmtLogo';
import { siteConfig } from '../config/siteConfig';

export function Hero({ onDownloadClick, onCopyToast }) {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [dashboardSubView, setDashboardSubView] = useState('canvas');
  const [activeTemplate, setActiveTemplate] = useState('prd');
  const [spotlightOpen, setSpotlightOpen] = useState(false);
  const [spotlightQuery, setSpotlightQuery] = useState('');
  const [showAddWidgetModal, setShowAddWidgetModal] = useState(false);
  const [newWidgetType, setNewWidgetType] = useState('kpi_card');
  const [newWidgetMetricOp, setNewWidgetMetricOp] = useState('SUM');

  const getBadgeIcon = (type) => {
    switch (type) {
      case 'file': return FileText;
      case 'download': return Download;
      case 'chart': return BarChart3;
      case 'terminal': return Terminal;
      case 'board': return Kanban;
      case 'cpu': return Cpu;
      case 'search': return Search;
      case 'refresh': return RefreshCw;
      case 'database': return Database;
      default: return Sparkles;
    }
  };

  const spotlightCommands = [
    { id: 'tab-dashboard', label: 'Go to Data Studio & KPI Canvas', category: 'Navigation', shortcut: 'Ctrl+3', icon: BarChart3, action: () => { setActiveTab('dashboard'); setDashboardSubView('canvas'); setSpotlightOpen(false); } },
    { id: 'tab-board', label: 'Go to Sprint Kanban Board', category: 'Navigation', shortcut: 'Ctrl+2', icon: Kanban, action: () => { setActiveTab('board'); setSpotlightOpen(false); } },
    { id: 'tab-copilot', label: 'Open AI Copilot & Document Generator', category: 'Navigation', shortcut: 'Ctrl+5', icon: Bot, action: () => { setActiveTab('copilot'); setSpotlightOpen(false); } },
    { id: 'tab-documents', label: 'Open Knowledge Base & FTS5 Search', category: 'Navigation', shortcut: 'Ctrl+4', icon: FileText, action: () => { setActiveTab('documents'); setSpotlightOpen(false); } },
    { id: 'tab-workspace', label: 'Go to Workspace Overview', category: 'Navigation', shortcut: 'Ctrl+1', icon: FolderGit2, action: () => { setActiveTab('workspace'); setSpotlightOpen(false); } },
    { id: 'add-widget', label: '+ Add KPI Metric or Chart Widget', category: 'Data Studio (v2.0.1)', shortcut: '↵', icon: Plus, action: () => { setActiveTab('dashboard'); setDashboardSubView('canvas'); setShowAddWidgetModal(true); setSpotlightOpen(false); } },
    { id: 'ingest-sqlite', label: 'Ingest Native SQLite Database (.db, .sqlite3)', category: 'Data Studio (v2.0.1)', shortcut: '↵', icon: Database, action: () => { setActiveTab('dashboard'); setDashboardSubView('datasets'); setSpotlightOpen(false); onCopyToast && onCopyToast('Opened SQLite Materialization Dialog'); } },
    { id: 'gen-doc', label: '+ Generate Executive PM Document', category: 'AI Copilot', shortcut: 'Ctrl+D', icon: Sparkles, action: () => { setActiveTab('copilot'); setSpotlightOpen(false); onCopyToast && onCopyToast('Scaffolding PM Document Template...'); } },
  ];

  const filteredCommands = spotlightQuery.trim() === ''
    ? spotlightCommands
    : spotlightCommands.filter(c => c.label.toLowerCase().includes(spotlightQuery.toLowerCase()) || c.category.toLowerCase().includes(spotlightQuery.toLowerCase()));

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
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6 leading-[1.15]">
          {siteConfig.hero.headlineMain} <br className="hidden sm:inline" />
          <span className="bg-gradient-to-r from-gold via-gold-bright to-yellow-300 bg-clip-text text-transparent">
            {siteConfig.hero.headlineAccent}
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg lg:text-xl text-zinc-400 max-w-3xl mx-auto font-normal leading-relaxed mb-6">
          {siteConfig.hero.subtitle}
        </p>

        {/* Architecture Notice */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-surface/90 border border-white/10 text-xs font-mono text-zinc-400 mb-10 max-w-2xl mx-auto">
          <Info className="w-4 h-4 text-gold shrink-0" />
          <span>{siteConfig.hero.notice}</span>
        </div>

        {/* CTA Button Group */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          <a
            href="#specs"
            onClick={onDownloadClick}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl font-mono text-sm font-semibold text-zinc-950 bg-gradient-to-r from-gold via-gold-bright to-yellow-400 hover:brightness-110 shadow-lg shadow-gold/25 hover:shadow-gold/40 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <Download className="w-4 h-4 stroke-[2.5]" />
            <span>Download {siteConfig.shortName} {siteConfig.release.version} (.exe)</span>
          </a>

          <a
            href={siteConfig.socials.githubRepo}
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-mono text-xs text-zinc-300 bg-surface/80 hover:bg-surface border border-white/10 hover:border-gold/40 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <GithubIcon className="w-4 h-4" />
            <span>View Source on GitHub</span>
          </a>

          <button
            onClick={() => {
              setActiveTab('dashboard');
              setDashboardSubView('canvas');
              setSpotlightOpen(true);
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-mono text-xs text-gold-bright bg-gold/10 hover:bg-gold/20 border border-gold/30 transition-all"
          >
            <Command className="w-3.5 h-3.5 text-gold" />
            <span>Test Spotlight (Ctrl+K)</span>
          </button>
        </div>

        {/* Feature Specs Ticker Badges */}
        <div className="flex flex-wrap items-center justify-center gap-3 text-xs font-mono text-zinc-400">
          {siteConfig.hero.specsBadges.map((badge, i) => {
            const Icon = getBadgeIcon(badge.type);
            return (
              <span key={i} className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/[0.03] border border-white/[0.08]">
                <Icon className="w-3.5 h-3.5 text-gold" />
                {badge.text}
              </span>
            );
          })}
        </div>
      </div>

      {/* Realistic Interactive Desktop App Simulator Window (Mirroring v2.0.1) */}
      <div id="sprint-board" className="relative mx-auto max-w-5xl rounded-2xl border border-white/[0.12] bg-[#0c0c10] shadow-2xl shadow-black/80 overflow-hidden">
        {/* Window Chrome Title Bar */}
        <div className="bg-[#14141a] px-4 py-3 border-b border-white/[0.08] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/80 border border-red-600/50" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80 border border-yellow-600/50" />
            <div className="w-3 h-3 rounded-full bg-green-500/80 border border-green-600/50" />
            <div className="flex items-center gap-2 ml-3">
              <PmtLogo size="sm" />
              <span className="text-xs font-mono text-zinc-400 flex items-center gap-2">
                <span className="text-gold font-semibold">{siteConfig.hero.simulator.windowTitle}</span>
                <span className="text-zinc-600">|</span>
                <span className="text-zinc-500 truncate hidden sm:inline">{siteConfig.hero.simulator.workspaceTitle}</span>
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Clickable Spotlight Command Palette Trigger (matching Titlebar.tsx in pm_tool) */}
            <button
              onClick={() => setSpotlightOpen(true)}
              className="flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-mono bg-white/[0.06] hover:bg-gold/15 text-zinc-300 hover:text-gold-bright border border-white/10 hover:border-gold/30 transition-all shadow-sm"
              title="Open Spotlight Command Palette (Ctrl+K)"
            >
              <Command className="w-3 h-3 text-gold" />
              <span className="text-zinc-400 hidden sm:inline">Spotlight</span>
              <kbd className="px-1 py-0.2 rounded bg-black/40 text-[9px] text-gold border border-white/10 font-bold">Ctrl+K</kbd>
            </button>

            <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-green-500/10 text-green-400 border border-green-500/20 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              {siteConfig.hero.simulator.backendHost}
            </span>
            <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-gold/10 text-gold-bright border border-gold/25 hidden md:inline-block">
              {siteConfig.hero.simulator.activeModel}
            </span>
          </div>
        </div>

        {/* App Frame Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 min-h-[510px] relative">
          
          {/* Authentic Sidebar matching Desktop SPA architecture */}
          <div className="md:col-span-3 bg-[#111116] border-r border-white/[0.08] p-3 flex flex-col justify-between">
            <div className="space-y-1">
              <div className="px-3 py-1.5 text-[10px] font-mono uppercase text-zinc-400 font-bold tracking-wider flex items-center justify-between">
                <span>SPA Modules</span>
                <span className="text-gold text-[9px] font-mono">React 19</span>
              </div>

              {/* Spotlight Trigger in Sidebar */}
              <button
                onClick={() => setSpotlightOpen(true)}
                className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs font-mono font-medium text-left bg-gold/10 hover:bg-gold/20 text-gold-bright border border-gold/30 mb-2 transition-all group"
              >
                <div className="flex items-center gap-2">
                  <Command className="w-3.5 h-3.5 text-gold group-hover:rotate-12 transition-transform" />
                  <span className="font-bold">Spotlight</span>
                </div>
                <kbd className="text-[9px] px-1.5 py-0.5 rounded bg-black/40 text-gold border border-gold/30">Ctrl+K</kbd>
              </button>

              <button 
                onClick={() => setActiveTab('workspace')}
                className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs font-medium text-left transition-colors ${
                  activeTab === 'workspace' 
                    ? 'bg-gold/15 text-gold-bright border border-gold/30' 
                    : 'text-zinc-400 hover:text-white hover:bg-white/[0.04]'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <FolderGit2 className="w-3.5 h-3.5 text-gold" />
                  <span>Workspace</span>
                </div>
                <kbd className="text-[9px] font-mono text-zinc-500">Ctrl+1</kbd>
              </button>

              <button 
                onClick={() => setActiveTab('board')}
                className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs font-medium text-left transition-colors ${
                  activeTab === 'board' 
                    ? 'bg-gold/15 text-gold-bright border border-gold/30' 
                    : 'text-zinc-400 hover:text-white hover:bg-white/[0.04]'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <Kanban className="w-3.5 h-3.5 text-gold" />
                  <span>Sprint Board</span>
                </div>
                <kbd className="text-[9px] font-mono text-zinc-500">Ctrl+2</kbd>
              </button>

              <button 
                onClick={() => setActiveTab('dashboard')}
                className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs font-medium text-left transition-colors ${
                  activeTab === 'dashboard' 
                    ? 'bg-gold/15 text-gold-bright border border-gold/30' 
                    : 'text-zinc-400 hover:text-white hover:bg-white/[0.04]'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <BarChart3 className="w-3.5 h-3.5 text-gold" />
                  <span className="font-semibold flex items-center gap-1.5">
                    <span>Data Studio</span>
                    <span className="text-[9px] px-1 py-0.2 rounded bg-gold/20 text-gold-bright font-mono">v2.0.1</span>
                  </span>
                </div>
                <kbd className="text-[9px] font-mono text-zinc-500">Ctrl+3</kbd>
              </button>

              <button 
                onClick={() => setActiveTab('documents')}
                className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs font-medium text-left transition-colors ${
                  activeTab === 'documents' 
                    ? 'bg-gold/15 text-gold-bright border border-gold/30' 
                    : 'text-zinc-400 hover:text-white hover:bg-white/[0.04]'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <FileText className="w-3.5 h-3.5 text-gold" />
                  <span>Knowledge Base</span>
                </div>
                <kbd className="text-[9px] font-mono text-zinc-500">Ctrl+4</kbd>
              </button>

              <button 
                onClick={() => setActiveTab('copilot')}
                className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs font-medium text-left transition-colors ${
                  activeTab === 'copilot' 
                    ? 'bg-gold/15 text-gold-bright border border-gold/30' 
                    : 'text-zinc-400 hover:text-white hover:bg-white/[0.04]'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <Bot className="w-3.5 h-3.5 text-gold" />
                  <span>AI Copilot</span>
                </div>
                <kbd className="text-[9px] font-mono text-zinc-500">Ctrl+5</kbd>
              </button>
            </div>

            {/* Auto-Updater Status in Sidebar (Mirroring v2.0.0 automated silent updating) */}
            <div className="pt-3 border-t border-white/[0.06] mt-4 px-2">
              <div className="flex items-center justify-between text-[10px] font-mono text-zinc-400 mb-1">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-zinc-300">AUTO-UPDATES</span>
                </span>
                <span className="text-emerald-400">60m Polling</span>
              </div>
              <div className="text-[11px] font-mono text-zinc-300 truncate">
                v2.0.1 (Current Stable)
              </div>
              <div className="text-[10px] font-mono text-zinc-500 mt-1 truncate">
                datasets\analytics_store.db (.sqlite3)
              </div>
              <div className="flex items-center justify-between text-[10px] text-zinc-400 mt-2 font-mono">
                <span>{siteConfig.hero.simulator.dbStats}</span>
              </div>
            </div>
          </div>

          {/* Central Main Viewport */}
          <div className="md:col-span-9 p-4 sm:p-6 bg-[#0a0a0e] flex flex-col justify-between relative">
            
            {/* VIEW 0: Data Studio & Business Dashboards (NEW IN v2.0.1 with AddWidgetModal) */}
            {activeTab === 'dashboard' && (
              <div className="space-y-4">
                {/* Header Controls Bar */}
                <div className="flex flex-wrap items-center justify-between pb-3 border-b border-white/[0.08] gap-2">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
                    <span className="text-xs font-mono text-white font-semibold">Data Studio & KPI Dashboard Studio</span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-gold/10 text-gold-bright border border-gold/30">
                      v2.0.1
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    {/* Add Widget Button (v2.0.1 AddWidgetModal) */}
                    <button
                      onClick={() => setShowAddWidgetModal(!showAddWidgetModal)}
                      className="px-2.5 py-1 rounded-lg bg-gold text-zinc-950 font-mono text-[11px] font-bold flex items-center gap-1.5 hover:brightness-110 shadow-sm shadow-gold/20 transition-all"
                    >
                      <Plus className="w-3 h-3 stroke-[3]" />
                      <span>+ Add KPI Metric</span>
                    </button>

                    {/* Sub-view switcher */}
                    <div className="flex items-center gap-1 bg-[#14141c] p-0.5 rounded-lg border border-white/10 text-[11px] font-mono">
                      <button
                        onClick={() => { setDashboardSubView('canvas'); setShowAddWidgetModal(false); }}
                        className={`px-2.5 py-1 rounded-md transition-colors ${
                          dashboardSubView === 'canvas'
                            ? 'bg-gold text-zinc-950 font-bold'
                            : 'text-zinc-400 hover:text-white'
                        }`}
                      >
                        📊 KPI Canvas
                      </button>
                      <button
                        onClick={() => { setDashboardSubView('datasets'); setShowAddWidgetModal(false); }}
                        className={`px-2.5 py-1 rounded-md transition-colors ${
                          dashboardSubView === 'datasets'
                            ? 'bg-gold text-zinc-950 font-bold'
                            : 'text-zinc-400 hover:text-white'
                        }`}
                      >
                        📁 Datasets (4)
                      </button>
                      <button
                        onClick={() => { setDashboardSubView('sandbox'); setShowAddWidgetModal(false); }}
                        className={`px-2.5 py-1 rounded-md transition-colors ${
                          dashboardSubView === 'sandbox'
                            ? 'bg-gold text-zinc-950 font-bold'
                            : 'text-zinc-400 hover:text-white'
                        }`}
                      >
                        ‹/› Safe SQL
                      </button>
                    </div>
                  </div>
                </div>

                {/* Interactive AddWidgetModal Simulator (v2.0.1) */}
                {showAddWidgetModal && (
                  <div className="bg-[#12121a] p-4 rounded-xl border border-gold/40 shadow-xl space-y-3 font-mono text-xs animate-in fade-in zoom-in-95 duration-150">
                    <div className="flex items-center justify-between pb-2 border-b border-white/[0.08]">
                      <div className="flex items-center gap-2">
                        <Plus className="w-3.5 h-3.5 text-gold-bright" />
                        <span className="text-white font-bold">AddWidgetModal: Configure New Widget</span>
                        <span className="text-[10px] px-1.5 py-0.2 rounded bg-gold/15 text-gold-bright">v2.0.1</span>
                      </div>
                      <button 
                        onClick={() => setShowAddWidgetModal(false)}
                        className="text-zinc-400 hover:text-white p-0.5"
                      >
                        <X className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                      <button
                        onClick={() => setNewWidgetType('kpi_card')}
                        className={`p-2 rounded-lg border text-left transition-colors ${
                          newWidgetType === 'kpi_card'
                            ? 'bg-gold/15 border-gold text-gold-bright font-bold'
                            : 'bg-surface border-white/10 text-zinc-400 hover:text-white'
                        }`}
                      >
                        <div className="font-semibold text-white">1. KPI Card</div>
                        <div className="text-[10px] text-zinc-400">Sum/Avg with target variance</div>
                      </button>

                      <button
                        onClick={() => setNewWidgetType('bar_chart')}
                        className={`p-2 rounded-lg border text-left transition-colors ${
                          newWidgetType === 'bar_chart'
                            ? 'bg-gold/15 border-gold text-gold-bright font-bold'
                            : 'bg-surface border-white/10 text-zinc-400 hover:text-white'
                        }`}
                      >
                        <div className="font-semibold text-white">2. Bar Distribution</div>
                        <div className="text-[10px] text-zinc-400">Categorical breakdown bars</div>
                      </button>

                      <button
                        onClick={() => setNewWidgetType('donut_chart')}
                        className={`p-2 rounded-lg border text-left transition-colors ${
                          newWidgetType === 'donut_chart'
                            ? 'bg-gold/15 border-gold text-gold-bright font-bold'
                            : 'bg-surface border-white/10 text-zinc-400 hover:text-white'
                        }`}
                      >
                        <div className="font-semibold text-white">3. Donut Share</div>
                        <div className="text-[10px] text-zinc-400">Dimensional segment share</div>
                      </button>
                    </div>

                    <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-white/[0.06] text-[11px]">
                      <div className="flex items-center gap-2">
                        <span className="text-zinc-400">Aggregation:</span>
                        {['SUM', 'AVG', 'COUNT'].map((op) => (
                          <button
                            key={op}
                            onClick={() => setNewWidgetMetricOp(op)}
                            className={`px-2 py-0.5 rounded text-[10px] border ${
                              newWidgetMetricOp === op 
                                ? 'bg-gold text-zinc-950 font-bold border-gold' 
                                : 'bg-surface text-zinc-400 border-white/10'
                            }`}
                          >
                            {op}
                          </button>
                        ))}
                      </div>

                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => {
                            setShowAddWidgetModal(false);
                            onCopyToast && onCopyToast(`Added new ${newWidgetType} to analytics_store.db`);
                          }}
                          className="px-3 py-1 rounded bg-gold text-zinc-950 font-bold hover:brightness-110 flex items-center gap-1"
                        >
                          <Check className="w-3 h-3 stroke-[3]" />
                          <span>Insert Widget</span>
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {dashboardSubView === 'canvas' && !showAddWidgetModal && (
                  <div className="space-y-3.5">
                    {/* 3 Supported Widget Types (v2.0.1) */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs font-mono">
                      {/* Widget 1: KPI Card with milestone variance badge and delete control */}
                      <div className="p-2.5 rounded-xl bg-surface border border-gold/40 space-y-1 relative group">
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] text-zinc-400 uppercase">ARR Velocity (kpi_card)</span>
                          <button 
                            onClick={() => onCopyToast && onCopyToast('Prompted DeleteDatasetModal confirmation')}
                            className="text-zinc-500 hover:text-red-400 transition-colors opacity-0 group-hover:opacity-100"
                            title="Delete Widget"
                          >
                            <Trash2 className="w-3 h-3" />
                          </button>
                        </div>
                        <div className="text-lg font-bold text-white">$142,800</div>
                        <div className="text-[10px] text-green-400 font-semibold flex items-center gap-1">
                          <TrendingUp className="w-3 h-3" />
                          <span>▲ +14.2% vs target milestone</span>
                        </div>
                      </div>

                      {/* Widget 2: Second KPI Card */}
                      <div className="p-2.5 rounded-xl bg-surface border border-white/10 space-y-1 relative group">
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] text-zinc-400 uppercase">Active Teams</span>
                          <span className="text-[9px] px-1 rounded bg-blue-500/10 text-blue-300">Growing</span>
                        </div>
                        <div className="text-lg font-bold text-white">28 Workspaces</div>
                        <div className="text-[10px] text-blue-300 font-semibold">+3 onboarded this sprint</div>
                      </div>

                      {/* Widget 3: Donut Share Breakdown Card (v2.0.1 donut_chart) */}
                      <div className="p-2.5 rounded-xl bg-surface border border-white/10 space-y-1">
                        <div className="flex items-center justify-between text-[10px] text-zinc-400 uppercase">
                          <span>Segment Share (donut_chart)</span>
                          <span className="text-gold">3 Segments</span>
                        </div>
                        <div className="flex items-center gap-3 pt-0.5">
                          <div className="w-9 h-9 rounded-full border-4 border-gold border-r-blue-500 border-b-emerald-400 shrink-0" />
                          <div className="text-[10px] space-y-0.5 text-zinc-300">
                            <div className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-gold" /> Ent: 48%</div>
                            <div className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-blue-500" /> Growth: 34%</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Bar Distribution Chart Component (v2.0.1 bar_chart) */}
                    <div className="bg-[#111116] p-3.5 rounded-xl border border-white/[0.08] space-y-2">
                      <div className="flex items-center justify-between text-xs font-mono">
                        <span className="text-zinc-300 font-semibold">Q3 Module Adoption (% Active Workspaces)</span>
                        <span className="text-[10px] text-zinc-400">Source: telemetry_store.sqlite3 (Native SQLite)</span>
                      </div>
                      
                      {/* SVG Bar Chart */}
                      <div className="h-28 w-full flex items-end justify-between gap-3 pt-3 px-2">
                        {[
                          { label: 'Spotlight (Ctrl+K)', pct: 96, color: '#e5b95a' },
                          { label: 'Kanban Board', pct: 88, color: '#e8a84c' },
                          { label: 'Copilot', pct: 92, color: '#f29e24' },
                          { label: 'KPI Studio', pct: 84, color: '#5aab7f' },
                          { label: 'SQLite Ingest', pct: 78, color: '#4c97e8' },
                        ].map((bar) => (
                          <div key={bar.label} className="flex-1 flex flex-col items-center gap-1.5 h-full justify-end group">
                            <span className="text-[10px] font-mono text-zinc-400 group-hover:text-white transition-colors">
                              {bar.pct}%
                            </span>
                            <div 
                              className="w-full rounded-t transition-all duration-300 group-hover:brightness-125"
                              style={{ 
                                height: `${bar.pct * 0.75}%`, 
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

                    <div className="p-2 rounded-lg bg-[#09090d] border border-white/[0.06] flex items-center justify-between text-[10px] font-mono text-zinc-400">
                      <span>Analytics Store: <code>%LOCALAPPDATA%\PMTool\datasets\analytics_store.db</code></span>
                      <span className="text-gold">Native SQLite (.db) & Excel Batch Materialization</span>
                    </div>
                  </div>
                )}

                {/* Sub-view: Ingested Datasets including native SQLite (.db, .sqlite3) */}
                {dashboardSubView === 'datasets' && (
                  <div className="space-y-2.5 font-mono text-xs">
                    <div className="text-[10px] text-zinc-400 uppercase font-bold flex items-center justify-between">
                      <span>Materialized Datasets in analytics_store.db</span>
                      <span className="text-green-400">4 Active Sources</span>
                    </div>

                    {[
                      { name: 'telemetry_store.sqlite3', fmt: 'Native SQLite (.sqlite3)', rows: '28,400 rows', tag: 'NEW in v2.0.1', isSqlite: true },
                      { name: 'q3_user_metrics.xlsx', fmt: 'Excel Workbook (.xlsx)', rows: '14,200 rows', tag: 'openpyxl', isSqlite: false },
                      { name: 'active_subscriptions.json', fmt: 'JSON Document Array', rows: '3,800 rows', tag: 'JSON Engine', isSqlite: false },
                      { name: 'churn_reasons.csv', fmt: 'Delimited CSV Table', rows: '1,450 rows', tag: 'CSV Engine', isSqlite: false },
                    ].map((ds) => (
                      <div key={ds.name} className="p-2.5 bg-surface rounded-xl border border-white/10 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Database className={`w-3.5 h-3.5 ${ds.isSqlite ? 'text-gold-bright' : 'text-blue-400'}`} />
                          <span className="font-bold text-white">{ds.name}</span>
                          <span className="text-[9px] px-1.5 py-0.2 rounded bg-white/[0.04] text-zinc-400 border border-white/10">{ds.fmt}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-zinc-400 text-[11px]">{ds.rows}</span>
                          <span className="text-[9px] px-1.5 py-0.2 rounded bg-gold/15 text-gold-bright font-bold">{ds.tag}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Sub-view: Safe Read-Only SQL Sandbox */}
                {dashboardSubView === 'sandbox' && (
                  <div className="space-y-3 font-mono text-xs">
                    <div className="bg-[#09090d] p-3 rounded-xl border border-gold/30 space-y-2">
                      <div className="flex items-center justify-between text-[11px] pb-1 border-b border-white/[0.06]">
                        <span className="text-gold font-bold flex items-center gap-1.5">
                          <Terminal className="w-3.5 h-3.5" />
                          <span>Interactive SQL Console (Read-Only)</span>
                        </span>
                        <span className="text-green-400 flex items-center gap-1">
                          <Zap className="w-3 h-3" />
                          <span>Execution Timer: 0.62 ms</span>
                        </span>
                      </div>
                      <code className="text-zinc-200 block text-[11px] leading-relaxed">
                        <span className="text-blue-400">SELECT</span> module, <span className="text-blue-400">COUNT</span>(*) <span className="text-blue-400">AS</span> events, <span className="text-blue-400">AVG</span>(latency_ms) <span className="text-blue-400">AS</span> latency <br />
                        <span className="text-blue-400">FROM</span> telemetry <br />
                        <span className="text-blue-400">GROUP BY</span> module <span className="text-blue-400">ORDER BY</span> events <span className="text-blue-400">DESC LIMIT</span> 5;
                      </code>
                    </div>

                    <div className="bg-[#111116] rounded-xl border border-white/10 overflow-hidden">
                      <table className="w-full text-left text-[11px]">
                        <thead className="bg-[#181822] text-gold border-b border-white/10">
                          <tr>
                            <th className="p-2">module</th>
                            <th className="p-2">events</th>
                            <th className="p-2">latency (ms)</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-white/[0.04] text-zinc-300">
                          <tr>
                            <td className="p-2 text-white font-semibold">Spotlight (Ctrl+K)</td>
                            <td className="p-2">16,420</td>
                            <td className="p-2 text-green-400">0.28</td>
                          </tr>
                          <tr>
                            <td className="p-2 text-white font-semibold">Sprint Kanban</td>
                            <td className="p-2">14,820</td>
                            <td className="p-2 text-green-400">0.62</td>
                          </tr>
                          <tr>
                            <td className="p-2 text-white font-semibold">KPI Studio</td>
                            <td className="p-2">12,180</td>
                            <td className="p-2 text-green-400">0.54</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <div className="p-2 rounded-lg bg-surface border border-green-500/20 text-[10px] text-green-300 flex items-center justify-between">
                      <span>✓ 5-Layer Defense: Polymorphic Rows • file:... ?mode=ro • LIMIT 100 Enforced</span>
                      <span className="text-zinc-400">3 rows</span>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* VIEW 1: Sprint Kanban Board */}
            {activeTab === 'board' && (
              <div className="space-y-4">
                <div className="grid grid-cols-4 gap-2 bg-[#14141c] p-3 rounded-xl border border-white/[0.08] text-xs font-mono">
                  <div>
                    <div className="text-[10px] text-zinc-400 uppercase">Total Tasks</div>
                    <div className="text-base font-bold text-white">18</div>
                  </div>
                  <div>
                    <div className="text-[10px] text-amber-400 uppercase">In Flight</div>
                    <div className="text-base font-bold text-amber-400">4</div>
                  </div>
                  <div>
                    <div className="text-[10px] text-red-400 uppercase">Blockers</div>
                    <div className="text-base font-bold text-red-400 flex items-center gap-1">
                      <span>1</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-ping" />
                    </div>
                  </div>
                  <div>
                    <div className="text-[10px] text-green-400 uppercase">Velocity</div>
                    <div className="text-base font-bold text-green-400">74% (36 Pts)</div>
                  </div>
                </div>

                <div className="grid grid-cols-4 gap-2 text-xs font-mono">
                  <div className="bg-[#111116] p-2.5 rounded-xl border border-white/[0.08] space-y-2">
                    <div className="flex items-center justify-between pb-1 border-b border-white/[0.06]">
                      <span className="text-[10px] uppercase font-bold text-zinc-400">Backlog (2)</span>
                    </div>
                    <div className="bg-surface p-2 rounded-lg border border-white/[0.06] space-y-1.5">
                      <div className="flex items-center justify-between">
                        <span className="text-[9px] px-1 rounded bg-blue-500/20 text-blue-300">P2 Medium</span>
                        <span className="text-[9px] px-1 rounded bg-white/[0.06] text-gold font-bold">3 pts</span>
                      </div>
                      <div className="text-white text-[11px] font-semibold">CSV / JSON export CLI</div>
                      <div className="text-[10px] text-zinc-400">As a PM, export backlogs directly...</div>
                    </div>
                  </div>

                  <div className="bg-[#111116] p-2.5 rounded-xl border border-gold/30 space-y-2">
                    <div className="flex items-center justify-between pb-1 border-b border-gold/20">
                      <span className="text-[10px] uppercase font-bold text-gold">In Progress (2)</span>
                    </div>
                    <div className="bg-surface p-2 rounded-lg border border-gold/40 space-y-1.5 shadow-sm">
                      <div className="flex items-center justify-between">
                        <span className="text-[9px] px-1 rounded bg-red-500/20 text-red-300">P0 Critical</span>
                        <span className="text-[9px] px-1 rounded bg-gold/20 text-gold-bright font-bold">5 pts</span>
                      </div>
                      <div className="text-white text-[11px] font-semibold">PRD-to-Story Decomposer</div>
                      <div className="text-[10px] text-zinc-300">Given a PRD, generate 4-8 Agile user stories...</div>
                    </div>
                  </div>

                  <div className="bg-[#111116] p-2.5 rounded-xl border border-red-500/30 space-y-2">
                    <div className="flex items-center justify-between pb-1 border-b border-red-500/20">
                      <span className="text-[10px] uppercase font-bold text-red-400">Blocked (1)</span>
                    </div>
                    <div className="bg-surface p-2 rounded-lg border border-red-500/30 space-y-1.5">
                      <div className="flex items-center justify-between">
                        <span className="text-[9px] px-1 rounded bg-red-500/20 text-red-300">P0 Blocker</span>
                        <span className="text-[9px] px-1 rounded bg-white/[0.06] text-zinc-400 font-bold">8 pts</span>
                      </div>
                      <div className="text-white text-[11px] font-semibold">PyInstaller Flask Spec</div>
                      <div className="text-[10px] text-red-300">Resolved in v2.0.0 SPA migration</div>
                    </div>
                  </div>

                  <div className="bg-[#111116] p-2.5 rounded-xl border border-green-500/20 space-y-2">
                    <div className="flex items-center justify-between pb-1 border-b border-green-500/20">
                      <span className="text-[10px] uppercase font-bold text-green-400">Done (13)</span>
                    </div>
                    <div className="bg-surface p-2 rounded-lg border border-green-500/20 space-y-1.5 opacity-80">
                      <div className="flex items-center justify-between">
                        <span className="text-[9px] px-1 rounded bg-green-500/20 text-green-300">Shipped</span>
                        <span className="text-[9px] px-1 rounded bg-white/[0.06] text-zinc-500">5 pts</span>
                      </div>
                      <div className="text-white text-[11px] line-through font-semibold">Spotlight Command Palette</div>
                      <div className="text-[10px] text-zinc-500">Raycast/Linear style Ctrl+K</div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* VIEW 2: AI Copilot & 1-Click Document Generator */}
            {activeTab === 'copilot' && (
              <div className="space-y-4">
                <div className="flex flex-wrap items-center justify-between pb-3 border-b border-white/[0.08] gap-2">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-gold animate-ping" />
                    <span className="text-xs font-mono text-zinc-300 font-semibold">
                      AI Copilot &bull; Document Generator (5 Blueprints)
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => onCopyToast && onCopyToast('Scaffolding PM Document Template with local RAG grounding...')}
                      className="px-2.5 py-1 rounded-lg bg-gold text-zinc-950 font-mono text-[11px] font-bold flex items-center gap-1.5 hover:brightness-110 shadow-sm shadow-gold/20 transition-all"
                    >
                      <Sparkles className="w-3 h-3 stroke-[2.5]" />
                      <span>+ Generate Document</span>
                    </button>
                    <span className="text-[10px] font-mono text-zinc-400 hidden sm:inline">
                      8,192 Token Budget
                    </span>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <div className="text-[10px] font-mono text-zinc-400 uppercase font-semibold flex items-center justify-between">
                    <span>Executive PM Scaffolding Templates:</span>
                    <span className="text-gold">5 Native Blueprints</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5 text-[11px] font-mono">
                    {[
                      { id: 'prd', label: '📄 PRD', title: 'Product Requirement Document' },
                      { id: 'spec', label: '🏗️ Tech Spec', title: 'Technical Architecture Spec' },
                      { id: 'breakdown', label: '📋 Story Breakdown', title: 'Agile Sprint Stories' },
                      { id: 'kpi', label: '📈 Strategy & KPIs', title: 'North Star & Metric Tree' },
                      { id: 'brief', label: '📝 Executive Brief', title: 'TL;DR & Risk Synthesis' },
                    ].map((tpl) => (
                      <button
                        key={tpl.id}
                        onClick={() => setActiveTemplate(tpl.id)}
                        className={`px-2.5 py-1 rounded-md transition-colors border ${
                          activeTemplate === tpl.id
                            ? 'bg-gold/20 text-gold-bright border-gold font-bold shadow-sm'
                            : 'bg-surface text-zinc-400 border-white/10 hover:text-white hover:border-gold/30'
                        }`}
                      >
                        {tpl.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="bg-[#111116] border border-gold/30 rounded-xl p-4 space-y-3 relative overflow-hidden">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-white flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-gold-bright" />
                      <span>
                        {activeTemplate === 'prd' && 'PRD-2026: Desktop SPA Modernization & Spotlight Engine'}
                        {activeTemplate === 'spec' && 'Architecture Spec: Subnet UDP Beacon & TLS Handshake'}
                        {activeTemplate === 'breakdown' && 'Agile Story Breakdown: 5 Stories & Fibonacci Estimates'}
                        {activeTemplate === 'kpi' && 'Strategy & KPI Plan: ARR Velocity & Sync Health Metrics'}
                        {activeTemplate === 'brief' && 'Executive Synthesis: Zero-Cloud P2P Architecture'}
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
                    <strong>1. Executive Scope:</strong> React 19 single-DOM desktop SPA architecture inside Electron. Zero iframe latency, global Spotlight command palette (Ctrl+K), and interactive KPI Dashboard Studio evaluated against local SQLite storage.
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
                        onClick={() => onCopyToast && onCopyToast('Generating & downloading Microsoft Word (.docx)...')}
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
                        onClick={() => onCopyToast && onCopyToast('Transferred PRD to Decomposer modal: 5 user stories generated!')}
                        className="px-2.5 py-1 rounded bg-purple-500/10 hover:bg-purple-500/20 text-purple-300 border border-purple-500/30 flex items-center gap-1 font-medium transition-colors"
                      >
                        <span>⚡</span>
                        <span>Decompose</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* VIEW 3: Knowledge Base with FTS5 BM25 */}
            {activeTab === 'documents' && (
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
                  <span className="text-xs font-mono text-zinc-300 font-semibold">
                    Knowledge Base &bull; FTS5 BM25 Search & Chunk Inspector
                  </span>
                  <span className="text-[11px] font-mono text-gold">
                    Parsers: .pdf .docx .md .txt .csv .json
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="p-3 rounded-xl bg-surface border border-gold/40">
                    <div className="flex items-center justify-between text-xs font-mono text-white mb-1">
                      <span className="font-semibold truncate">Architecture_Spec.pdf</span>
                      <span className="text-[10px] text-gold">42.8 KB</span>
                    </div>
                    <p className="text-[11px] text-zinc-400">Section-aware chunking: 14 passages indexed in ai_context.db.</p>
                  </div>
                  <div className="p-3 rounded-xl bg-surface border border-white/10">
                    <div className="flex items-center justify-between text-xs font-mono text-white mb-1">
                      <span className="font-semibold truncate">Q3_Product_Roadmap.docx</span>
                      <span className="text-[10px] text-zinc-400">18.4 KB</span>
                    </div>
                    <p className="text-[11px] text-zinc-400">Headings and tables extracted with sticky table headers.</p>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-[#14141c] border border-white/10 font-mono text-xs text-zinc-300">
                  <span className="text-gold">BM25 Retrieval Query:</span> "offline peer discovery handshake" <br />
                  <span className="text-green-400">FTS5 Match:</span> Passage #4 in `Architecture_Spec.pdf` section "3.2 Network Bounds".
                </div>
              </div>
            )}

            {/* VIEW 4: Workspace Overview (Streamlined in v2.0.0 HomeView) */}
            {activeTab === 'workspace' && (
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
                  <span className="text-xs font-mono text-zinc-300 font-semibold">
                    Workspace Overview &bull; Streamlined HomeView (v2.0.0)
                  </span>
                  <span className="text-[11px] font-mono text-green-400">
                    Direct Initiatives & Stories View
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono text-xs">
                  <div className="p-3 rounded-xl bg-surface border border-gold/40 space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-white">Core Platform Modernization</span>
                      <span className="px-1.5 py-0.5 rounded bg-gold/10 text-gold text-[10px]">Active Initiative</span>
                    </div>
                    <p className="text-[11px] text-zinc-400">React 19 SPA transition, global Spotlight, and native SQLite ingestion.</p>
                  </div>

                  <div className="p-3 rounded-xl bg-surface border border-white/10 space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-white">KPI Dashboard Studio</span>
                      <span className="px-1.5 py-0.5 rounded bg-green-500/10 text-green-300 text-[10px]">Shipped v2.0.1</span>
                    </div>
                    <p className="text-[11px] text-zinc-400">AddWidgetModal with full CRUD for KPI cards, bar charts, and donut charts.</p>
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
                <span className="text-emerald-400">electron-updater: 60m Silent Polling</span>
              </div>
              <div className="text-gold-bright flex items-center gap-1">
                <span>{siteConfig.hero.simulator.shortcut}</span>
              </div>
            </div>

            {/* Spotlight Command Palette Simulator Overlay (Ctrl+K) */}
            {spotlightOpen && (
              <div className="absolute inset-0 z-30 bg-black/80 backdrop-blur-sm flex items-start justify-center pt-8 px-4">
                <div className="bg-[#121218] border border-gold/40 rounded-2xl w-full max-w-lg shadow-2xl shadow-gold/10 overflow-hidden font-mono animate-in fade-in zoom-in-95 duration-150">
                  {/* Search Input Bar */}
                  <div className="flex items-center gap-3 px-4 py-3.5 border-b border-white/[0.08] bg-[#181822]">
                    <Search className="w-4 h-4 text-gold shrink-0" />
                    <input
                      type="text"
                      autoFocus
                      placeholder="Type a command or search modules..."
                      value={spotlightQuery}
                      onChange={(e) => setSpotlightQuery(e.target.value)}
                      className="w-full bg-transparent text-sm text-white placeholder-zinc-500 focus:outline-none"
                    />
                    <button
                      onClick={() => setSpotlightOpen(false)}
                      className="text-zinc-400 hover:text-white p-1 rounded hover:bg-white/[0.06]"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Command Results List */}
                  <div className="max-h-64 overflow-y-auto p-2 space-y-1">
                    <div className="px-3 py-1 text-[10px] uppercase font-bold text-zinc-500">
                      Spotlight Navigation & Actions ({filteredCommands.length})
                    </div>
                    {filteredCommands.map((cmd) => {
                      const Icon = cmd.icon;
                      return (
                        <button
                          key={cmd.id}
                          onClick={cmd.action}
                          className="w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs text-left hover:bg-gold/15 hover:text-gold-bright text-zinc-300 transition-colors group"
                        >
                          <div className="flex items-center gap-2.5">
                            <Icon className="w-3.5 h-3.5 text-gold group-hover:scale-110 transition-transform" />
                            <span className="font-semibold text-white group-hover:text-gold-bright">{cmd.label}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-[10px] text-zinc-500 group-hover:text-zinc-300">{cmd.category}</span>
                            <kbd className="px-1.5 py-0.5 rounded bg-black/40 text-[10px] text-gold border border-white/10 font-bold">
                              {cmd.shortcut}
                            </kbd>
                          </div>
                        </button>
                      );
                    })}
                  </div>

                  {/* Spotlight Footer */}
                  <div className="px-4 py-2 border-t border-white/[0.06] bg-[#0d0d12] flex items-center justify-between text-[10px] text-zinc-500">
                    <div className="flex items-center gap-3">
                      <span>Use <kbd className="text-zinc-300">↑</kbd> <kbd className="text-zinc-300">↓</kbd> to navigate</span>
                      <span><kbd className="text-zinc-300">↵</kbd> to select</span>
                      <span><kbd className="text-zinc-300">ESC</kbd> to close</span>
                    </div>
                    <span className="text-gold">Raycast/Linear Style</span>
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
