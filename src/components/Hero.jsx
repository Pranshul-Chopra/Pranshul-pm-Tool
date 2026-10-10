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
  TrendingDown,
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
  Check,
  Activity,
  CheckSquare,
  Square,
  Percent,
  Calendar,
  Columns,
  History,
  BookOpen,
  Edit3,
  Bold,
  Italic,
  List,
  Quote,
  Code
} from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import { PmtLogo } from './PmtLogo';
import { siteConfig } from '../config/siteConfig';

export function Hero({ onDownloadClick, onCopyToast }) {
  const [activeTab, setActiveTab] = useState('artifacts');
  const [dashboardSubView, setDashboardSubView] = useState('analytics');
  const [analyticsInstrument, setAnalyticsInstrument] = useState('funnel');
  const [activeTemplate, setActiveTemplate] = useState('prd');
  const [spotlightOpen, setSpotlightOpen] = useState(false);
  const [spotlightQuery, setSpotlightQuery] = useState('');
  const [showAddWidgetModal, setShowAddWidgetModal] = useState(false);
  const [newWidgetType, setNewWidgetType] = useState('kpi_card');
  const [newWidgetMetricOp, setNewWidgetMetricOp] = useState('SUM');

  // Living Document Editor & Artifacts Studio State (v2.2.0)
  const [artifactsDoc, setArtifactsDoc] = useState('prd');
  const [artifactsMode, setArtifactsMode] = useState('split'); // 'split' | 'edit' | 'preview'
  const [showRevisionHistory, setShowRevisionHistory] = useState(false);

  // First-Launch Onboarding Wizard State (v2.2.0)
  const [showOnboardingModal, setShowOnboardingModal] = useState(false);
  const [onboardingStep, setOnboardingStep] = useState(1); // 1 | 2 | 3

  // Decomposer Studio Modal Simulator (v2.1.0)
  const [showDecomposerModal, setShowDecomposerModal] = useState(false);
  const [decomposerStep, setDecomposerStep] = useState('preview');
  const [decomposerPersona, setDecomposerPersona] = useState('End-User');

  // What's New Modal (v2.2.0)
  const [showWhatsNew, setShowWhatsNew] = useState(false);

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
      case 'trending': return TrendingUp;
      default: return Sparkles;
    }
  };

  const spotlightCommands = [
    { id: 'tab-outposts', label: 'Configure Jira & Notion Outposts (Pre-Sync Snapshots)', category: 'Outposts (v2.2.5)', shortcut: '↵', icon: ShieldCheck, action: () => { setActiveTab('board'); setSpotlightOpen(false); onCopyToast && onCopyToast('Opened Jira Outpost Link & Pre-Sync Safety Dialog'); } },
    { id: 'tab-artifacts', label: 'Open Living Docs & Artifacts Studio (Split Preview)', category: 'Docs Studio (v2.2)', shortcut: 'Ctrl+4', icon: FileText, action: () => { setActiveTab('artifacts'); setSpotlightOpen(false); } },
    { id: 'open-onboarding', label: 'Launch First-Time Onboarding & Gateway Wizard', category: 'Experience (v2.2)', shortcut: '↵', icon: Sparkles, action: () => { setShowOnboardingModal(true); setSpotlightOpen(false); } },
    { id: 'tab-analytics', label: 'Open Advanced Analytics Workbench (Funnels & Cohorts)', category: 'Analytics (v2.1)', shortcut: 'Ctrl+3', icon: Activity, action: () => { setActiveTab('dashboard'); setDashboardSubView('analytics'); setSpotlightOpen(false); } },
    { id: 'open-decomposer', label: 'Decompose PRD with Pre-Commit Review (INVEST)', category: 'Agile (v2.1)', shortcut: '/breakdown', icon: Sparkles, action: () => { setShowDecomposerModal(true); setSpotlightOpen(false); } },
    { id: 'tab-board', label: 'Go to Sprint Kanban Board (Jira Outpost)', category: 'Navigation', shortcut: 'Ctrl+2', icon: Kanban, action: () => { setActiveTab('board'); setSpotlightOpen(false); } },
    { id: 'tab-copilot', label: 'Open AI Copilot & Document Generator', category: 'Navigation', shortcut: 'Ctrl+5', icon: Bot, action: () => { setActiveTab('copilot'); setSpotlightOpen(false); } },
    { id: 'tab-documents', label: 'Open Knowledge Base & FTS5 Search', category: 'Navigation', shortcut: 'Ctrl+6', icon: BookOpen, action: () => { setActiveTab('documents'); setSpotlightOpen(false); } },
    { id: 'tab-workspace', label: 'Go to Workspace Overview', category: 'Navigation', shortcut: 'Ctrl+1', icon: FolderGit2, action: () => { setActiveTab('workspace'); setSpotlightOpen(false); } },
    { id: 'add-widget', label: '+ Add KPI Metric or Distribution Chart', category: 'Data Studio', shortcut: '↵', icon: Plus, action: () => { setActiveTab('dashboard'); setDashboardSubView('canvas'); setShowAddWidgetModal(true); setSpotlightOpen(false); } },
    { id: 'ingest-sqlite', label: 'Ingest Native SQLite Database (.db, .sqlite3)', category: 'Data Studio', shortcut: '↵', icon: Database, action: () => { setActiveTab('dashboard'); setDashboardSubView('datasets'); setSpotlightOpen(false); onCopyToast && onCopyToast('Opened SQLite Ingestion Dialog'); } },
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
            onClick={() => setShowWhatsNew(true)}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-mono text-xs text-gold-bright bg-gold/10 hover:bg-gold/20 border border-gold/30 transition-all"
          >
            <Sparkles className="w-3.5 h-3.5 text-gold" />
            <span>Explore Outposts & Nexus (v2.2.5)</span>
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

      {/* Realistic Interactive Desktop App Simulator Window (Mirroring v2.1.0) */}
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
            {/* What's New Pill */}
            <button
              onClick={() => setShowWhatsNew(true)}
              className="hidden lg:flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono bg-gold/15 text-gold-bright border border-gold/30 hover:bg-gold/25 transition-colors"
            >
              <Sparkles className="w-3 h-3" />
              <span>What's New in v2.2.5</span>
            </button>

            {/* First-Launch Tour Pill */}
            <button
              onClick={() => setShowOnboardingModal(true)}
              className="hidden xl:flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono bg-white/[0.04] text-zinc-300 border border-white/10 hover:border-gold/30 hover:text-white transition-colors"
            >
              <BookOpen className="w-3 h-3 text-gold" />
              <span>Setup Tour</span>
            </button>

            {/* Clickable Spotlight Command Palette Trigger */}
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
        <div className="grid grid-cols-1 md:grid-cols-12 min-h-[520px] relative">
          
          {/* Authentic Sidebar matching Desktop SPA architecture */}
          <div className="md:col-span-3 bg-[#111116] border-r border-white/[0.08] p-3 flex flex-col justify-between">
            <div className="space-y-1">
              <div className="px-3 py-1.5 text-[10px] font-mono uppercase text-zinc-400 font-bold tracking-wider flex items-center justify-between">
                <span>SPA Modules</span>
                <span className="text-gold text-[9px] font-mono">v2.2.5</span>
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
                onClick={() => { setActiveTab('dashboard'); setDashboardSubView('analytics'); }}
                className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs font-medium text-left transition-colors ${
                  activeTab === 'dashboard' 
                    ? 'bg-gold/15 text-gold-bright border border-gold/30' 
                    : 'text-zinc-400 hover:text-white hover:bg-white/[0.04]'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <Activity className="w-3.5 h-3.5 text-gold" />
                  <span className="font-semibold flex items-center gap-1.5">
                    <span>Data Studio</span>
                    <span className="text-[9px] px-1 py-0.2 rounded bg-gold/20 text-gold-bright font-mono">v2.1</span>
                  </span>
                </div>
                <kbd className="text-[9px] font-mono text-zinc-500">Ctrl+3</kbd>
              </button>

              <button 
                onClick={() => setActiveTab('artifacts')}
                className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs font-medium text-left transition-colors ${
                  activeTab === 'artifacts' 
                    ? 'bg-gold/15 text-gold-bright border border-gold/30' 
                    : 'text-zinc-400 hover:text-white hover:bg-white/[0.04]'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <FileText className="w-3.5 h-3.5 text-gold" />
                  <span className="font-semibold flex items-center gap-1.5">
                    <span>Living Docs</span>
                    <span className="text-[9px] px-1 py-0.2 rounded bg-gold/20 text-gold-bright font-mono">v2.2</span>
                  </span>
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

              <button 
                onClick={() => setActiveTab('documents')}
                className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs font-medium text-left transition-colors ${
                  activeTab === 'documents' 
                    ? 'bg-gold/15 text-gold-bright border border-gold/30' 
                    : 'text-zinc-400 hover:text-white hover:bg-white/[0.04]'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <BookOpen className="w-3.5 h-3.5 text-gold" />
                  <span>Knowledge Base</span>
                </div>
                <kbd className="text-[9px] font-mono text-zinc-500">Ctrl+6</kbd>
              </button>
            </div>

            {/* Auto-Updater Status in Sidebar */}
            <div className="pt-3 border-t border-white/[0.06] mt-4 px-2">
              <div className="flex items-center justify-between text-[10px] font-mono text-zinc-400 mb-1">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-zinc-300">AUTO-UPDATES</span>
                </span>
                <span className="text-emerald-400">60m Polling</span>
              </div>
              <div className="text-[11px] font-mono text-zinc-300 truncate">
                v2.2.5 (Outpost & Nexus)
              </div>
              <div className="text-[10px] font-mono text-zinc-500 mt-1 truncate">
                outpost_configs &bull; artifacts.db
              </div>
              <div className="flex items-center justify-between text-[10px] text-zinc-400 mt-2 font-mono">
                <span>{siteConfig.hero.simulator.dbStats}</span>
              </div>
            </div>
          </div>

          {/* Central Main Viewport */}
          <div className="md:col-span-9 p-4 sm:p-6 bg-[#0a0a0e] flex flex-col justify-between relative">
            
            {/* VIEW -1: Living Document Editor & Artifacts Studio (NEW IN v2.2.0) */}
            {activeTab === 'artifacts' && (
              <div className="space-y-4">
                {/* Header Controls Bar */}
                <div className="flex flex-wrap items-center justify-between pb-3 border-b border-white/[0.08] gap-2">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
                    <span className="text-xs font-mono text-white font-semibold">Living Artifacts Studio</span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-gold/15 text-gold-bright border border-gold/30">
                      Living Docs
                    </span>
                    <div className="hidden sm:flex items-center gap-1.5 ml-2 text-[10px] font-mono text-zinc-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      <span>All changes saved</span>
                      <span className="text-zinc-600">&bull;</span>
                      <span>1,248 words</span>
                    </div>
                  </div>

                  {/* Mode & Action Controls */}
                  <div className="flex flex-wrap items-center gap-2">
                    {/* View mode switcher */}
                    <div className="flex items-center gap-0.5 bg-[#14141c] p-0.5 rounded-lg border border-white/10 text-[11px] font-mono">
                      <button
                        onClick={() => setArtifactsMode('split')}
                        className={`flex items-center gap-1 px-2 py-0.5 rounded-md transition-colors ${
                          artifactsMode === 'split'
                            ? 'bg-gold text-zinc-950 font-bold'
                            : 'text-zinc-400 hover:text-white'
                        }`}
                      >
                        <Columns className="w-3 h-3" />
                        <span>Split</span>
                      </button>
                      <button
                        onClick={() => setArtifactsMode('edit')}
                        className={`flex items-center gap-1 px-2 py-0.5 rounded-md transition-colors ${
                          artifactsMode === 'edit'
                            ? 'bg-gold text-zinc-950 font-bold'
                            : 'text-zinc-400 hover:text-white'
                        }`}
                      >
                        <Edit3 className="w-3 h-3" />
                        <span>Edit</span>
                      </button>
                      <button
                        onClick={() => setArtifactsMode('preview')}
                        className={`flex items-center gap-1 px-2 py-0.5 rounded-md transition-colors ${
                          artifactsMode === 'preview'
                            ? 'bg-gold text-zinc-950 font-bold'
                            : 'text-zinc-400 hover:text-white'
                        }`}
                      >
                        <BookOpen className="w-3 h-3" />
                        <span>Preview</span>
                      </button>
                    </div>

                    {/* Bridges: Decomposer & Export */}
                    <button
                      onClick={() => setShowDecomposerModal(true)}
                      className="px-2 py-1 rounded-lg bg-gold/15 hover:bg-gold/25 text-gold-bright border border-gold/40 text-[10px] font-mono font-bold flex items-center gap-1 transition-all"
                      title="Decompose living document into INVEST user stories"
                    >
                      <Sparkles className="w-3 h-3 text-gold" />
                      <span>Decompose</span>
                    </button>

                    <button
                      onClick={() => setShowRevisionHistory(!showRevisionHistory)}
                      className={`px-2 py-1 rounded-lg border text-[10px] font-mono flex items-center gap-1 transition-all ${
                        showRevisionHistory
                          ? 'bg-gold text-zinc-950 font-bold border-gold'
                          : 'bg-surface text-zinc-400 hover:text-white border-white/10'
                      }`}
                    >
                      <History className="w-3 h-3" />
                      <span>History (4)</span>
                    </button>
                  </div>
                </div>

                {/* Document Selector Pills */}
                <div className="flex items-center gap-2 overflow-x-auto pb-1 text-[11px] font-mono">
                  {[
                    { id: 'prd', label: 'PRD: Conversion Analytics Engine', type: 'prd', tag: 'Approved' },
                    { id: 'rfc', label: 'RFC: Four-Database Segregated SQLite', type: 'rfc', tag: 'Review' },
                    { id: 'brief', label: 'Sprint Brief: Scribe Release v2.2', type: 'brief', tag: 'In Progress' },
                  ].map((doc) => (
                    <button
                      key={doc.id}
                      onClick={() => setArtifactsDoc(doc.id)}
                      className={`flex items-center gap-2 px-3 py-1.5 rounded-lg border transition-all whitespace-nowrap ${
                        artifactsDoc === doc.id
                          ? 'bg-gold/20 border-gold text-gold-bright font-bold'
                          : 'bg-surface border-white/10 text-zinc-400 hover:text-white'
                      }`}
                    >
                      <FileText className="w-3 h-3 text-gold" />
                      <span>{doc.label}</span>
                      <span className="text-[9px] px-1 py-0.2 rounded bg-white/[0.06] text-zinc-300">
                        {doc.tag}
                      </span>
                    </button>
                  ))}
                </div>

                {/* Studio Canvas Area */}
                <div className="relative">
                  {/* Revision History Slide-Over Drawer */}
                  {showRevisionHistory && (
                    <div className="absolute inset-0 z-20 bg-[#0e0e14]/95 backdrop-blur-md rounded-xl border border-gold/40 p-4 font-mono text-xs space-y-3 animate-in fade-in zoom-in-95 duration-150">
                      <div className="flex items-center justify-between pb-2 border-b border-white/[0.08]">
                        <span className="font-bold text-white flex items-center gap-2">
                          <History className="w-4 h-4 text-gold" />
                          <span>Snapshot Revision History Tree (artifacts_versions)</span>
                        </span>
                        <button onClick={() => setShowRevisionHistory(false)} className="text-zinc-400 hover:text-white">
                          <X className="w-4 h-4" />
                        </button>
                      </div>

                      <div className="space-y-2">
                        {[
                          { ver: 'v4', time: '15 mins ago (Current)', note: 'Refined INVEST acceptance criteria & Gherkin scenarios', isCurrent: true },
                          { ver: 'v3', time: 'Today 13:10', note: 'Added four-database architecture and artifacts.db storage contract', isCurrent: false },
                          { ver: 'v2', time: 'Yesterday 18:45', note: 'Promoted from AI Copilot markdown assistant response', isCurrent: false },
                          { ver: 'v1', time: 'Oct 06, 2026', note: 'Initialized from Standard PRD executive template', isCurrent: false },
                        ].map((rev) => (
                          <div
                            key={rev.ver}
                            className={`p-2.5 rounded-lg border flex items-center justify-between ${
                              rev.isCurrent
                                ? 'bg-gold/15 border-gold/50 text-gold-bright'
                                : 'bg-surface border-white/10 text-zinc-300'
                            }`}
                          >
                            <div className="space-y-0.5">
                              <div className="flex items-center gap-2">
                                <span className="font-bold">{rev.ver}</span>
                                <span className="text-[10px] text-zinc-400">{rev.time}</span>
                                {rev.isCurrent && (
                                  <span className="text-[9px] px-1 rounded bg-gold/20 text-gold-bright font-bold">ACTIVE</span>
                                )}
                              </div>
                              <div className="text-[11px] text-zinc-400">{rev.note}</div>
                            </div>
                            <button
                              onClick={() => {
                                setShowRevisionHistory(false);
                                onCopyToast && onCopyToast(`Restored snapshot ${rev.ver} from artifacts.db`);
                              }}
                              className="px-2.5 py-1 rounded bg-white/[0.06] hover:bg-gold hover:text-zinc-950 text-[10px] text-zinc-300 font-bold transition-all"
                            >
                              Restore
                            </button>
                          </div>
                        ))}
                      </div>

                      <div className="text-[10px] text-zinc-500 pt-1">
                        Snapshot tree stored in <code>%LOCALAPPDATA%\PMTool\artifacts.db</code> with immutable diff rollback.
                      </div>
                    </div>
                  )}

                  {/* Split View: Editor + Live Synchronized Preview */}
                  {artifactsMode === 'split' && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 min-h-[310px] font-mono text-xs">
                      {/* Left: Markdown Drafting Pane with Toolbar */}
                      <div className="bg-[#111116] rounded-xl border border-white/10 p-3 flex flex-col justify-between">
                        <div>
                          {/* Markdown formatting toolbar */}
                          <div className="flex items-center gap-1 pb-2 mb-2 border-b border-white/[0.06] text-zinc-400 text-[10px] overflow-x-auto">
                            <button className="p-1 hover:text-white rounded hover:bg-white/[0.04] font-bold">B</button>
                            <button className="p-1 hover:text-white rounded hover:bg-white/[0.04] italic font-serif">I</button>
                            <button className="p-1 hover:text-white rounded hover:bg-white/[0.04]">H1</button>
                            <button className="p-1 hover:text-white rounded hover:bg-white/[0.04]">H2</button>
                            <button className="p-1 hover:text-white rounded hover:bg-white/[0.04]">`Code`</button>
                            <button className="p-1 hover:text-white rounded hover:bg-white/[0.04]">&ldquo;Quote&rdquo;</button>
                            <button className="p-1 hover:text-white rounded hover:bg-white/[0.04]">Table</button>
                            <button className="p-1 hover:text-white rounded hover:bg-white/[0.04]">[x] Task</button>
                          </div>

                          <div className="space-y-1 text-zinc-300 text-[11px] leading-relaxed">
                            <div className="text-gold font-bold"># PRD-2026: Conversion Analytics & Living Docs</div>
                            <div className="text-zinc-500">## 1. Executive Summary & Problem</div>
                            <div className="text-zinc-300 pl-2">Product managers require on-device living documents with zero database bloat and instant PRD-to-sprint bridges.</div>
                            <div className="text-zinc-500">## 2. Core Functional Requirements</div>
                            <div className="text-zinc-400 pl-2">- [x] Multi-mode Markdown editing: Split & Preview</div>
                            <div className="text-zinc-400 pl-2">- [x] Segregated artifacts.db with SQLite FTS5</div>
                            <div className="text-zinc-400 pl-2">- [ ] Subnet peer-to-peer sync (Target: v2.3)</div>
                            <div className="text-zinc-500">## 3. Database Architecture</div>
                            <div className="text-zinc-400 bg-black/40 p-1.5 rounded text-[10px]">
                              <code>CREATE VIRTUAL TABLE artifacts_fts USING fts5...</code>
                            </div>
                          </div>
                        </div>

                        <div className="pt-2 border-t border-white/[0.06] flex items-center justify-between text-[10px] text-zinc-500">
                          <span>Markdown Source Pane</span>
                          <span className="text-gold">artifacts.db (FTS5)</span>
                        </div>
                      </div>

                      {/* Right: Rich Styled Preview */}
                      <div className="bg-[#0e0e14] rounded-xl border border-gold/40 p-4 space-y-2.5 overflow-hidden">
                        <div className="flex items-center justify-between pb-1 border-b border-white/[0.06]">
                          <span className="text-xs font-bold text-white flex items-center gap-1.5">
                            <Sparkles className="w-3 h-3 text-gold-bright" />
                            <span>PRD: Conversion Analytics & Living Docs</span>
                          </span>
                          <span className="text-[9px] px-1.5 py-0.2 rounded bg-green-500/10 text-green-400 border border-green-500/20">
                            v2.2.0 Spec
                          </span>
                        </div>

                        <div className="p-2.5 rounded bg-surface/80 border border-gold/20 text-[11px] text-zinc-300 leading-relaxed">
                          <strong className="text-gold-bright">Executive Summary:</strong> Deliver an on-device living document editor with synchronized split preview, snapshot revision trees, and direct 1-click bridges into sprint backlogs.
                        </div>

                        <div className="space-y-1 text-[11px]">
                          <div className="text-white font-bold text-[10px] uppercase tracking-wider">Functional Requirements Checklist:</div>
                          <div className="space-y-0.5 text-zinc-300">
                            <div className="flex items-center gap-1.5 text-emerald-400">
                              <CheckSquare className="w-3 h-3" />
                              <span>Multi-mode Markdown editing: Split, Edit, Preview</span>
                            </div>
                            <div className="flex items-center gap-1.5 text-emerald-400">
                              <CheckSquare className="w-3 h-3" />
                              <span>Segregated artifacts.db with SQLite FTS5 search</span>
                            </div>
                            <div className="flex items-center gap-1.5 text-zinc-500">
                              <Square className="w-3 h-3" />
                              <span>Subnet peer-to-peer sync (Target: v2.3)</span>
                            </div>
                          </div>
                        </div>

                        <div className="pt-2 border-t border-white/[0.06] flex items-center justify-between text-[10px] text-zinc-400">
                          <span>Live Synchronized Preview</span>
                          <div className="flex items-center gap-1.5">
                            <button
                              onClick={() => setShowDecomposerModal(true)}
                              className="px-2 py-0.5 rounded bg-purple-500/20 text-purple-300 font-bold hover:bg-purple-500/30"
                            >
                              ⚡ Decompose
                            </button>
                            <button
                              onClick={() => onCopyToast && onCopyToast('Exported styled Microsoft Word (.docx)')}
                              className="px-2 py-0.5 rounded bg-gold text-zinc-950 font-bold hover:brightness-110"
                            >
                              📥 .docx
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Edit Only View */}
                  {artifactsMode === 'edit' && (
                    <div className="bg-[#111116] rounded-xl border border-white/10 p-4 min-h-[310px] font-mono text-xs space-y-3">
                      <div className="text-zinc-400 text-[11px]">Full-Canvas Distraction-Free Markdown Drafting:</div>
                      <textarea
                        readOnly
                        className="w-full h-56 bg-transparent text-zinc-200 resize-none focus:outline-none leading-relaxed text-[11px]"
                        value={`# PRD-2026: Conversion Analytics & Living Docs Studio
Author: Product & Platform Engineering
Status: Approved Draft (Target: v2.2.0)

## 1. Problem Statement
Product managers need an in-built living document editor rather than relying on external cloud SaaS wikis.

## 2. Architecture & Database Isolation
All document bodies and AST revisions are persisted in %LOCALAPPDATA%\\PMTool\\artifacts.db to guarantee zero bloat on pmtool.db.`}
                      />
                    </div>
                  )}

                  {/* Preview Only View */}
                  {artifactsMode === 'preview' && (
                    <div className="bg-[#0e0e14] rounded-xl border border-gold/40 p-6 min-h-[310px] font-mono text-xs space-y-4">
                      <div className="flex items-center justify-between pb-2 border-b border-white/[0.08]">
                        <h2 className="text-base font-bold text-white">PRD: Conversion Analytics & Living Docs Studio</h2>
                        <span className="text-[10px] px-2 py-0.5 rounded bg-gold/15 text-gold-bright border border-gold/30">
                          Publication-Ready Draft
                        </span>
                      </div>
                      <p className="text-xs text-zinc-300 leading-relaxed">
                        PM Tool v2.2.0 introduces an in-built living document editor for PRDs and architecture RFCs (PranshulOS style), contextual AI artifacts promotion, isolated database architecture (artifacts.db), and a friction-free first-launch onboarding wizard.
                      </p>
                      <div className="p-3 bg-surface rounded-lg border border-white/10 text-[11px] text-zinc-400">
                        Export formatted copies with 1-click Microsoft Word (.docx), Markdown (.md), and styled HTML.
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* VIEW 0: Data Studio & Advanced Analytics Workbench (v2.1.0) */}
            {activeTab === 'dashboard' && (
              <div className="space-y-4">
                {/* Header Controls Bar */}
                <div className="flex flex-wrap items-center justify-between pb-3 border-b border-white/[0.08] gap-2">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
                    <span className="text-xs font-mono text-white font-semibold">Data Studio & Analytics Workbench</span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-gold/10 text-gold-bright border border-gold/30">
                      v2.1.0
                    </span>
                  </div>

                  {/* Sub-view switcher */}
                  <div className="flex items-center gap-1 bg-[#14141c] p-0.5 rounded-lg border border-white/10 text-[11px] font-mono">
                    <button
                      onClick={() => setDashboardSubView('analytics')}
                      className={`px-2.5 py-1 rounded-md transition-colors ${
                        dashboardSubView === 'analytics'
                          ? 'bg-gold text-zinc-950 font-bold'
                          : 'text-zinc-400 hover:text-white'
                      }`}
                    >
                      📈 Analytics Workbench
                    </button>
                    <button
                      onClick={() => setDashboardSubView('canvas')}
                      className={`px-2.5 py-1 rounded-md transition-colors ${
                        dashboardSubView === 'canvas'
                          ? 'bg-gold text-zinc-950 font-bold'
                          : 'text-zinc-400 hover:text-white'
                      }`}
                    >
                      📊 KPI Canvas
                    </button>
                    <button
                      onClick={() => setDashboardSubView('datasets')}
                      className={`px-2.5 py-1 rounded-md transition-colors ${
                        dashboardSubView === 'datasets'
                          ? 'bg-gold text-zinc-950 font-bold'
                          : 'text-zinc-400 hover:text-white'
                      }`}
                    >
                      📁 Datasets (4)
                    </button>
                    <button
                      onClick={() => setDashboardSubView('sandbox')}
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

                {/* SUB-VIEW 0: Advanced Analytics Workbench (v2.1.0) */}
                {dashboardSubView === 'analytics' && (
                  <div className="space-y-3.5 font-mono text-xs">
                    {/* Instrument switcher pills */}
                    <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-[11px]">
                      {[
                        { id: 'funnel', label: '1. Conversion Funnel', icon: TrendingDown },
                        { id: 'retention', label: '2. Cohort Retention Matrix', icon: Calendar },
                        { id: 'outliers', label: '3. Outliers & Distributions', icon: AlertCircle },
                        { id: 'correlation', label: '4. Pearson Correlations', icon: Sparkles },
                      ].map((inst) => {
                        const Icon = inst.icon;
                        return (
                          <button
                            key={inst.id}
                            onClick={() => setAnalyticsInstrument(inst.id)}
                            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border transition-all ${
                              analyticsInstrument === inst.id
                                ? 'bg-gold/20 border-gold text-gold-bright font-bold'
                                : 'bg-surface border-white/10 text-zinc-400 hover:text-white'
                            }`}
                          >
                            <Icon className="w-3.5 h-3.5" />
                            <span>{inst.label}</span>
                          </button>
                        );
                      })}
                    </div>

                    {/* Instrument 1: Conversion Funnel Analyzer */}
                    {analyticsInstrument === 'funnel' && (
                      <div className="bg-[#111116] p-4 rounded-xl border border-gold/40 space-y-3">
                        <div className="flex items-center justify-between pb-1 border-b border-white/[0.06]">
                          <span className="font-bold text-white flex items-center gap-2">
                            <TrendingDown className="w-3.5 h-3.5 text-gold-bright" />
                            <span>Multi-Stage Conversion Funnel & Drop-Off Analyzer</span>
                          </span>
                          <span className="text-[10px] text-green-400">Overall: 5.92% (840 Paid)</span>
                        </div>

                        {/* Funnel Stage Bars */}
                        <div className="space-y-2">
                          {[
                            { stage: '1. Visit Landing Page', count: 14200, pct: 100, drop: null, color: '#e5b95a' },
                            { stage: '2. Account Signup', count: 4820, pct: 33.9, drop: '-66.1% drop-off', color: '#e8a84c' },
                            { stage: '3. Active Project Creation', count: 2140, pct: 15.1, drop: '-55.6% drop-off', color: '#5aab7f' },
                            { stage: '4. Paid Conversion', count: 840, pct: 5.92, drop: '-60.7% drop-off', color: '#4c97e8' },
                          ].map((stg) => (
                            <div key={stg.stage} className="space-y-1">
                              <div className="flex items-center justify-between text-[11px]">
                                <span className="text-white font-medium">{stg.stage}</span>
                                <div className="flex items-center gap-3">
                                  {stg.drop && <span className="text-red-400 text-[10px]">{stg.drop}</span>}
                                  <span className="text-zinc-300 font-bold">{stg.count.toLocaleString()} ({stg.pct}%)</span>
                                </div>
                              </div>
                              <div className="w-full bg-white/[0.06] rounded-full h-2.5 overflow-hidden">
                                <div 
                                  className="h-full rounded-full transition-all duration-500" 
                                  style={{ width: `${stg.pct}%`, backgroundColor: stg.color }}
                                />
                              </div>
                            </div>
                          ))}
                        </div>

                        <div className="p-2 rounded bg-[#09090d] border border-white/[0.04] flex items-center justify-between text-[10px] text-zinc-400">
                          <span>Highest Drop-off: <strong>Visit → Signup</strong> (Lost volume: 9,380 users)</span>
                          <span className="text-gold">Computed via tools/analytics_engine.py</span>
                        </div>
                      </div>
                    )}

                    {/* Instrument 2: Period-over-Period Cohort Retention Matrix Heatmap */}
                    {analyticsInstrument === 'retention' && (
                      <div className="bg-[#111116] p-4 rounded-xl border border-gold/40 space-y-3">
                        <div className="flex items-center justify-between pb-1 border-b border-white/[0.06]">
                          <span className="font-bold text-white flex items-center gap-2">
                            <Calendar className="w-3.5 h-3.5 text-gold-bright" />
                            <span>Month-over-Month (MoM) Cohort Retention Heatmap</span>
                          </span>
                          <span className="text-[10px] text-gold">4 Active Cohorts</span>
                        </div>

                        {/* Heatmap Matrix Table */}
                        <div className="overflow-x-auto">
                          <table className="w-full text-center text-[10px]">
                            <thead>
                              <tr className="text-zinc-400 border-b border-white/[0.06]">
                                <th className="text-left p-1.5">Cohort</th>
                                <th className="p-1.5">Users</th>
                                <th className="p-1.5">Month 0</th>
                                <th className="p-1.5">Month 1</th>
                                <th className="p-1.5">Month 2</th>
                                <th className="p-1.5">Month 3</th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-white/[0.04]">
                              <tr>
                                <td className="text-left p-1.5 text-white font-semibold">Jun 2026</td>
                                <td className="p-1.5 text-zinc-400">1,240</td>
                                <td className="p-1.5 bg-gold/30 text-gold-bright font-bold">100%</td>
                                <td className="p-1.5 bg-gold/20 text-zinc-200">78.4%</td>
                                <td className="p-1.5 bg-gold/15 text-zinc-300">64.2%</td>
                                <td className="p-1.5 bg-gold/10 text-zinc-400">58.1%</td>
                              </tr>
                              <tr>
                                <td className="text-left p-1.5 text-white font-semibold">Jul 2026</td>
                                <td className="p-1.5 text-zinc-400">1,480</td>
                                <td className="p-1.5 bg-gold/30 text-gold-bright font-bold">100%</td>
                                <td className="p-1.5 bg-gold/25 text-zinc-200">81.2%</td>
                                <td className="p-1.5 bg-gold/15 text-zinc-300">67.0%</td>
                                <td className="p-1.5 text-zinc-600">-</td>
                              </tr>
                              <tr>
                                <td className="text-left p-1.5 text-white font-semibold">Aug 2026</td>
                                <td className="p-1.5 text-zinc-400">1,820</td>
                                <td className="p-1.5 bg-gold/30 text-gold-bright font-bold">100%</td>
                                <td className="p-1.5 bg-gold/25 text-zinc-200">84.5%</td>
                                <td className="p-1.5 text-zinc-600">-</td>
                                <td className="p-1.5 text-zinc-600">-</td>
                              </tr>
                              <tr>
                                <td className="text-left p-1.5 text-white font-semibold">Sep 2026</td>
                                <td className="p-1.5 text-zinc-400">2,140</td>
                                <td className="p-1.5 bg-gold/30 text-gold-bright font-bold">100%</td>
                                <td className="p-1.5 text-zinc-600">-</td>
                                <td className="p-1.5 text-zinc-600">-</td>
                                <td className="p-1.5 text-zinc-600">-</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>

                        <div className="p-2 rounded bg-[#09090d] border border-white/[0.04] flex items-center justify-between text-[10px] text-zinc-400">
                          <span>Benchmark: 3-month retention persistence scores +9.4% MoM</span>
                          <span className="text-green-400">Color Intensity Mapping</span>
                        </div>
                      </div>
                    )}

                    {/* Instrument 3: Outliers & Distribution Profiler */}
                    {analyticsInstrument === 'outliers' && (
                      <div className="bg-[#111116] p-4 rounded-xl border border-gold/40 space-y-3">
                        <div className="flex items-center justify-between pb-1 border-b border-white/[0.06]">
                          <span className="font-bold text-white flex items-center gap-2">
                            <AlertCircle className="w-3.5 h-3.5 text-gold-bright" />
                            <span>Statistical Distributions & Outlier Detection (Tukey IQR + Z-Score)</span>
                          </span>
                          <span className="text-[10px] text-amber-400 font-semibold">14 Outliers Flagged</span>
                        </div>

                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-[10px]">
                          <div className="p-2 rounded bg-surface border border-white/10">
                            <span className="text-zinc-400">Median (P50):</span>
                            <div className="text-sm font-bold text-white">$124.50</div>
                          </div>
                          <div className="p-2 rounded bg-surface border border-white/10">
                            <span className="text-zinc-400">Mean &plusmn; StdDev:</span>
                            <div className="text-sm font-bold text-white">$142.80 &plusmn; 48.2</div>
                          </div>
                          <div className="p-2 rounded bg-surface border border-white/10">
                            <span className="text-zinc-400">P90 / P99:</span>
                            <div className="text-sm font-bold text-gold">$510 / $890</div>
                          </div>
                          <div className="p-2 rounded bg-surface border border-red-500/30">
                            <span className="text-red-400">Tukey Upper Fence:</span>
                            <div className="text-sm font-bold text-red-400">$787.00</div>
                          </div>
                        </div>

                        <div className="p-2 rounded bg-[#09090d] border border-white/[0.04] text-[10px] text-zinc-400 flex items-center justify-between">
                          <span>Flagged: 14 rows exceeding Tukey's fence (1.5 &times; IQR) and |Z| &gt; 3.0</span>
                          <span className="text-green-400">Safe Local Calculation</span>
                        </div>
                      </div>
                    )}

                    {/* Instrument 4: Pearson Correlation Matrix */}
                    {analyticsInstrument === 'correlation' && (
                      <div className="bg-[#111116] p-4 rounded-xl border border-gold/40 space-y-3">
                        <div className="flex items-center justify-between pb-1 border-b border-white/[0.06]">
                          <span className="font-bold text-white flex items-center gap-2">
                            <Sparkles className="w-3.5 h-3.5 text-gold-bright" />
                            <span>Pairwise Feature Pearson Correlation Coefficients (r &isin; [-1.0, 1.0])</span>
                          </span>
                          <span className="text-[10px] text-gold">4 Dimensions</span>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-[10px]">
                          <div className="p-2 rounded bg-surface border border-green-500/30 space-y-0.5">
                            <div className="text-zinc-400">duration &bull; conversion</div>
                            <div className="text-base font-bold text-green-400">r = +0.76</div>
                            <div className="text-[9px] text-green-300">Strong Positive</div>
                          </div>
                          <div className="p-2 rounded bg-surface border border-red-500/30 space-y-0.5">
                            <div className="text-zinc-400">app_errors &bull; nps_score</div>
                            <div className="text-base font-bold text-red-400">r = -0.58</div>
                            <div className="text-[9px] text-red-300">Moderate Negative</div>
                          </div>
                          <div className="p-2 rounded bg-surface border border-gold/30 space-y-0.5">
                            <div className="text-zinc-400">arr_usd &bull; team_seats</div>
                            <div className="text-base font-bold text-gold">r = +0.89</div>
                            <div className="text-[9px] text-gold-bright">Very Strong Positive</div>
                          </div>
                        </div>

                        <div className="p-2 rounded bg-[#09090d] border border-white/[0.04] text-[10px] text-zinc-400 flex items-center justify-between">
                          <span>Uncovers hidden dependencies across numerical dataset columns</span>
                          <span className="text-gold">Pearson Matrix Grid</span>
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {/* SUB-VIEW 1: KPI Canvas (v2.0.1) */}
                {dashboardSubView === 'canvas' && (
                  <div className="space-y-3.5">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs font-mono">
                      <div className="p-2.5 rounded-xl bg-surface border border-gold/40 space-y-1">
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] text-zinc-400 uppercase">ARR Velocity</span>
                          <span className="text-[9px] px-1 rounded bg-green-500/10 text-green-400 font-bold">Ahead</span>
                        </div>
                        <div className="text-lg font-bold text-white">$142,800</div>
                        <div className="text-[10px] text-green-400 font-semibold flex items-center gap-1">
                          <TrendingUp className="w-3 h-3" />
                          <span>▲ +14.2% vs target milestone</span>
                        </div>
                      </div>

                      <div className="p-2.5 rounded-xl bg-surface border border-white/10 space-y-1">
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] text-zinc-400 uppercase">Active Teams</span>
                          <span className="text-[9px] px-1 rounded bg-blue-500/10 text-blue-300">Growing</span>
                        </div>
                        <div className="text-lg font-bold text-white">28 Workspaces</div>
                        <div className="text-[10px] text-blue-300 font-semibold">+3 onboarded this sprint</div>
                      </div>

                      <div className="p-2.5 rounded-xl bg-surface border border-white/10 space-y-1">
                        <div className="flex items-center justify-between text-[10px] text-zinc-400 uppercase">
                          <span>Segment Share</span>
                          <span className="text-gold">3 Segments</span>
                        </div>
                        <div className="flex items-center gap-3 pt-0.5">
                          <div className="w-9 h-9 rounded-full border-4 border-gold border-r-blue-500 border-b-emerald-400 shrink-0" />
                          <div className="text-[10px] space-y-0.5 text-zinc-300">
                            <div><span className="w-1.5 h-1.5 rounded-full bg-gold inline-block mr-1" /> Ent: 48%</div>
                            <div><span className="w-1.5 h-1.5 rounded-full bg-blue-500 inline-block mr-1" /> Growth: 34%</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="p-2 rounded-lg bg-[#09090d] border border-white/[0.06] flex items-center justify-between text-[10px] font-mono text-zinc-400">
                      <span>Analytics Store: <code>%LOCALAPPDATA%\PMTool\datasets\analytics_store.db</code></span>
                      <span className="text-gold">Native SQLite (.db) & Excel Batch Materialization</span>
                    </div>
                  </div>
                )}

                {/* Sub-view: Ingested Datasets */}
                {dashboardSubView === 'datasets' && (
                  <div className="space-y-2.5 font-mono text-xs">
                    <div className="text-[10px] text-zinc-400 uppercase font-bold flex items-center justify-between">
                      <span>Materialized Datasets in analytics_store.db</span>
                      <span className="text-green-400">4 Active Sources</span>
                    </div>

                    {[
                      { name: 'telemetry_store.sqlite3', fmt: 'Native SQLite (.sqlite3)', rows: '28,400 rows', tag: 'Native .db', isSqlite: true },
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
                          <span>Execution Timer: 0.48 ms</span>
                        </span>
                      </div>
                      <code className="text-zinc-200 block text-[11px] leading-relaxed">
                        <span className="text-blue-400">SELECT</span> stage, <span className="text-blue-400">COUNT</span>(*) <span className="text-blue-400">AS</span> count <br />
                        <span className="text-blue-400">FROM</span> funnel_events <span className="text-blue-400">GROUP BY</span> stage <span className="text-blue-400">ORDER BY</span> count <span className="text-blue-400">DESC</span>;
                      </code>
                    </div>

                    <div className="p-2 rounded-lg bg-surface border border-green-500/20 text-[10px] text-green-300 flex items-center justify-between">
                      <span>✓ 5-Layer Defense: Polymorphic Rows • file:... ?mode=ro • LIMIT 100 Enforced</span>
                      <span className="text-zinc-400">Strict Read-Only</span>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* VIEW 1: Sprint Kanban Board */}
            {activeTab === 'board' && (
              <div className="space-y-3 font-mono text-xs">
                {/* Outpost Status Subheader */}
                <div className="flex flex-wrap items-center justify-between p-2 rounded-xl bg-[#14141c] border border-gold/30 gap-2">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="font-bold text-white text-[11px]">Jira Outpost: ATLAS-PROJ</span>
                    <span className="text-[9px] px-1.5 py-0.2 rounded bg-blue-500/15 text-blue-300 border border-blue-500/30">
                      Two-Way Sync Active
                    </span>
                    <span className="text-[9px] text-zinc-500 hidden sm:inline">&bull;</span>
                    <span className="text-[10px] text-zinc-400 hidden sm:inline">Pre-Sync Snapshot: Verified</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={() => onCopyToast && onCopyToast('Pre-sync safety backup snapshot verified (%LOCALAPPDATA%\\PMTool\\backups)')}
                      className="px-2 py-0.5 rounded text-[10px] bg-white/[0.04] text-zinc-300 border border-white/10 hover:border-gold/30"
                    >
                      🛡️ Snapshot Safe
                    </button>
                    <button
                      onClick={() => onCopyToast && onCopyToast('Synchronized 22 issues with Atlassian Jira Cloud v3')}
                      className="px-2 py-0.5 rounded text-[10px] bg-gold text-zinc-950 font-bold hover:brightness-110 flex items-center gap-1"
                    >
                      <RefreshCw className="w-2.5 h-2.5" />
                      <span>Sync Jira</span>
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-4 gap-2 bg-[#14141c] p-2.5 rounded-xl border border-white/[0.08]">
                  <div>
                    <div className="text-[10px] text-zinc-400 uppercase">Total Tasks</div>
                    <div className="text-base font-bold text-white">22</div>
                  </div>
                  <div>
                    <div className="text-[10px] text-amber-400 uppercase">In Flight</div>
                    <div className="text-base font-bold text-amber-400">4</div>
                  </div>
                  <div>
                    <div className="text-[10px] text-red-400 uppercase">Blockers</div>
                    <div className="text-base font-bold text-red-400 flex items-center gap-1">
                      <span>0</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                    </div>
                  </div>
                  <div>
                    <div className="text-[10px] text-green-400 uppercase">Velocity</div>
                    <div className="text-base font-bold text-green-400">76% (42 Pts)</div>
                  </div>
                </div>

                <div className="grid grid-cols-4 gap-2">
                  <div className="bg-[#111116] p-2.5 rounded-xl border border-white/[0.08] space-y-2">
                    <span className="text-[10px] uppercase font-bold text-zinc-400">Backlog (3)</span>
                    <div className="bg-surface p-2 rounded-lg border border-white/[0.06] space-y-1">
                      <div className="flex items-center justify-between text-[9px]">
                        <span className="px-1.5 py-0.2 rounded bg-blue-500/20 text-blue-300 font-bold">ATLAS-104 ↗</span>
                        <span className="px-1 rounded bg-white/[0.06] text-gold font-bold">3 pts</span>
                      </div>
                      <div className="text-white text-[11px] font-semibold">Pearson correlation matrix</div>
                    </div>
                  </div>

                  <div className="bg-[#111116] p-2.5 rounded-xl border border-gold/30 space-y-2">
                    <span className="text-[10px] uppercase font-bold text-gold">In Progress (2)</span>
                    <div className="bg-surface p-2 rounded-lg border border-gold/40 space-y-1">
                      <div className="flex items-center justify-between text-[9px]">
                        <span className="px-1.5 py-0.2 rounded bg-gold/20 text-gold-bright font-bold">ATLAS-102 ↗</span>
                        <span className="px-1 rounded bg-gold/20 text-gold-bright font-bold">5 pts</span>
                      </div>
                      <div className="text-white text-[11px] font-semibold">Cohort retention heatmaps</div>
                    </div>
                  </div>

                  <div className="bg-[#111116] p-2.5 rounded-xl border border-white/[0.08] space-y-2">
                    <span className="text-[10px] uppercase font-bold text-zinc-400">Review (1)</span>
                    <div className="bg-surface p-2 rounded-lg border border-white/[0.06] space-y-1">
                      <div className="flex items-center justify-between text-[9px]">
                        <span className="px-1.5 py-0.2 rounded bg-purple-500/20 text-purple-300 font-bold">ATLAS-98 ↗</span>
                        <span className="px-1 rounded bg-white/[0.06] text-gold font-bold">5 pts</span>
                      </div>
                      <div className="text-white text-[11px] font-semibold">Pre-commit review studio</div>
                    </div>
                  </div>

                  <div className="bg-[#111116] p-2.5 rounded-xl border border-green-500/20 space-y-2">
                    <span className="text-[10px] uppercase font-bold text-green-400">Done (16)</span>
                    <div className="bg-surface p-2 rounded-lg border border-green-500/20 space-y-1 opacity-80">
                      <div className="flex items-center justify-between text-[9px]">
                        <span className="px-1.5 py-0.2 rounded bg-green-500/20 text-green-300 font-bold">ATLAS-91 ↗</span>
                        <span className="text-zinc-500">8 pts</span>
                      </div>
                      <div className="text-white text-[11px] line-through font-semibold">Hexagonal Nexus & Outposts</div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* VIEW 2: AI Copilot & 1-Click Document Generator */}
            {activeTab === 'copilot' && (
              <div className="space-y-4 font-mono text-xs">
                <div className="flex flex-wrap items-center justify-between pb-3 border-b border-white/[0.08] gap-2">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-gold animate-ping" />
                    <span className="text-xs text-zinc-300 font-semibold">
                      AI Copilot &bull; Document Generator & Decomposer (v2.1.0)
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setShowDecomposerModal(true)}
                      className="px-2.5 py-1 rounded-lg bg-gold/20 text-gold-bright border border-gold/40 text-[11px] font-bold flex items-center gap-1.5 hover:bg-gold/30 transition-all"
                    >
                      <Sparkles className="w-3 h-3 text-gold" />
                      <span>Decompose PRD</span>
                    </button>
                    <button
                      onClick={() => onCopyToast && onCopyToast('Scaffolding PM Document Template with local RAG grounding...')}
                      className="px-2.5 py-1 rounded-lg bg-gold text-zinc-950 text-[11px] font-bold flex items-center gap-1.5 hover:brightness-110 shadow-sm shadow-gold/20 transition-all"
                    >
                      <FileText className="w-3 h-3 stroke-[2.5]" />
                      <span>+ Generate Document</span>
                    </button>
                  </div>
                </div>

                <div className="bg-[#111116] border border-gold/30 rounded-xl p-4 space-y-3 relative overflow-hidden">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-white flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-gold-bright" />
                      <span>PRD-2026: Conversion Funnels & Cohort Retention Analytics</span>
                    </span>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-green-500/10 text-green-400 border border-green-500/20">
                      Approved Draft
                    </span>
                  </div>

                  <p className="text-[11px] text-zinc-300 leading-relaxed">
                    <strong>Executive Scope:</strong> Enable product teams to profile multi-stage conversion funnels with step-to-step drop-offs and period-over-period cohort retention matrices directly from local SQLite datasets, without third-party cloud analytics vendors.
                  </p>

                  <div className="pt-3 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-2 text-[11px]">
                    <span className="text-[10px] text-zinc-400 uppercase font-semibold">Response Actions:</span>
                    <div className="flex flex-wrap items-center gap-1.5">
                      <button
                        onClick={() => onCopyToast && onCopyToast('Generating Microsoft Word (.docx)...')}
                        className="px-2.5 py-1 rounded bg-gold/15 hover:bg-gold/25 text-gold-bright border border-gold/40 flex items-center gap-1 font-bold transition-colors"
                      >
                        <Download className="w-3 h-3" />
                        <span>Word (.docx)</span>
                      </button>
                      <button
                        onClick={() => setShowDecomposerModal(true)}
                        className="px-2.5 py-1 rounded bg-purple-500/10 hover:bg-purple-500/20 text-purple-300 border border-purple-500/30 flex items-center gap-1 font-medium transition-colors"
                      >
                        <span>⚡</span>
                        <span>Decompose to Stories</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* VIEW 3: Knowledge Base with FTS5 BM25 */}
            {activeTab === 'documents' && (
              <div className="space-y-4 font-mono text-xs">
                <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
                  <span className="text-xs text-zinc-300 font-semibold">
                    Knowledge Base &bull; FTS5 BM25 Search & Chunk Inspector
                  </span>
                  <span className="text-[11px] text-gold">
                    Parsers: .pdf .docx .md .txt .csv .json
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="p-3 rounded-xl bg-surface border border-gold/40">
                    <div className="flex items-center justify-between text-xs text-white mb-1">
                      <span className="font-semibold truncate">Analytics_Workbench_Spec.pdf</span>
                      <span className="text-[10px] text-gold">54.2 KB</span>
                    </div>
                    <p className="text-[11px] text-zinc-400">Section-aware chunking: Funnel drop-offs and Pearson algorithms.</p>
                  </div>
                  <div className="p-3 rounded-xl bg-surface border border-white/10">
                    <div className="flex items-center justify-between text-xs text-white mb-1">
                      <span className="font-semibold truncate">Cohort_Retention_ADR.md</span>
                      <span className="text-[10px] text-zinc-400">14.1 KB</span>
                    </div>
                    <p className="text-[11px] text-zinc-400">Indexed in ai_context.db with FTS5 BM25 relevance ranking.</p>
                  </div>
                </div>
              </div>
            )}

            {/* VIEW 4: Workspace Overview */}
            {activeTab === 'workspace' && (
              <div className="space-y-4 font-mono text-xs">
                <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
                  <span className="text-xs text-zinc-300 font-semibold">
                    Workspace Overview &bull; Active Initiatives (v2.1.0)
                  </span>
                  <span className="text-[11px] text-green-400">
                    Direct Initiatives & Stories View
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="p-3 rounded-xl bg-surface border border-gold/40 space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-white">Advanced Analytics Workbench</span>
                      <span className="px-1.5 py-0.5 rounded bg-green-500/10 text-green-400 text-[10px]">Shipped v2.1.0</span>
                    </div>
                    <p className="text-[11px] text-zinc-400">Conversion funnels, cohort heatmaps, outlier profiler, and correlation matrix.</p>
                  </div>

                  <div className="p-3 rounded-xl bg-surface border border-white/10 space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-white">Calibrated Story Decomposer</span>
                      <span className="px-1.5 py-0.5 rounded bg-gold/10 text-gold text-[10px]">Shipped v2.1.0</span>
                    </div>
                    <p className="text-[11px] text-zinc-400">INVEST atomic story slicing with multi-scenario Gherkin and pre-commit review.</p>
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

            {/* Interactive Calibrated Story Decomposer Studio Modal Simulator (v2.1.0) */}
            {showDecomposerModal && (
              <div className="absolute inset-0 z-40 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4">
                <div className="bg-[#121218] border border-gold/40 rounded-2xl w-full max-w-xl shadow-2xl shadow-gold/20 overflow-hidden font-mono text-xs animate-in fade-in zoom-in-95 duration-150">
                  <div className="flex items-center justify-between px-4 py-3 border-b border-white/[0.08] bg-[#161622]">
                    <div className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-gold-bright" />
                      <span className="text-white font-bold">Story Decomposer Studio (INVEST &bull; v2.1.0)</span>
                    </div>
                    <button onClick={() => setShowDecomposerModal(false)} className="text-zinc-400 hover:text-white">
                      <X className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="p-4 space-y-3 max-h-[380px] overflow-y-auto">
                    {/* Persona Selector */}
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] text-zinc-400 uppercase font-bold">Target Stakeholder Persona:</span>
                      <div className="flex gap-1">
                        {['All', 'End-User', 'Administrator', 'DevOps'].map((p) => (
                          <button
                            key={p}
                            onClick={() => setDecomposerPersona(p)}
                            className={`px-2 py-0.5 rounded text-[10px] border ${
                              decomposerPersona === p 
                                ? 'bg-gold text-zinc-950 font-bold border-gold' 
                                : 'bg-surface text-zinc-400 border-white/10'
                            }`}
                          >
                            {p}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Synthesized INVEST Story Card */}
                    <div className="p-3.5 rounded-xl bg-surface border border-gold/40 space-y-2.5">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <CheckSquare className="w-4 h-4 text-gold-bright" />
                          <span className="text-white font-bold text-xs">US-201: Multi-Stage Conversion Funnel Tracking</span>
                        </div>
                        <span className="px-2 py-0.5 rounded bg-gold/20 text-gold-bright font-bold text-[10px]">
                          5 Fibonacci Pts (Calibrated)
                        </span>
                      </div>

                      <p className="text-[11px] text-zinc-300">
                        <strong>User Story:</strong> As an {decomposerPersona}, I want to analyze stage-to-stage transition loss across sequential user actions so that conversion bottlenecks can be identified quantitatively.
                      </p>

                      {/* 3 Distinct Gherkin Scenarios */}
                      <div className="space-y-1.5 pt-1 border-t border-white/[0.06] text-[10px]">
                        <div className="text-gold font-bold uppercase">Exhaustive Gherkin Acceptance Criteria (3 Scenarios):</div>
                        <div className="p-2 rounded bg-[#09090d] border border-white/[0.04] space-y-1 text-zinc-300">
                          <div>🟢 <strong>Scenario 1 (Happy Path):</strong> Given a valid dataset with timestamp and stage columns, When the funnel is calculated, Then display step-to-step drop-offs with lost volume.</div>
                          <div>🟡 <strong>Scenario 2 (Negative Flow):</strong> Given an unmapped stage column, When analysis executes, Then return a validation error without terminating the background thread.</div>
                          <div>🔴 <strong>Scenario 3 (Boundary Case):</strong> Given zero conversions in stage 4, When rendering visual bars, Then display 0.0% conversion gracefully without division-by-zero errors.</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="px-4 py-3 border-t border-white/[0.08] bg-[#0e0e14] flex items-center justify-between">
                    <span className="text-[10px] text-zinc-400">1 of 5 stories approved for sprint</span>
                    <button
                      onClick={() => {
                        setShowDecomposerModal(false);
                        onCopyToast && onCopyToast('Committed 5 INVEST user stories to sprint Kanban board!');
                      }}
                      className="px-4 py-1.5 rounded-lg bg-gold text-zinc-950 font-bold hover:brightness-110 flex items-center gap-1.5 text-xs shadow-md shadow-gold/20"
                    >
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                      <span>Batch Commit to Sprint Board</span>
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* What's New in v2.2.5 Modal (Codename Outpost & Nexus) */}
            {showWhatsNew && (
              <div className="absolute inset-0 z-40 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4">
                <div className="bg-[#121218] border border-gold/40 rounded-2xl w-full max-w-lg shadow-2xl p-5 font-mono text-xs space-y-4 animate-in fade-in zoom-in-95 duration-150">
                  <div className="flex items-center justify-between pb-2 border-b border-white/[0.08]">
                    <div className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-gold-bright" />
                      <span className="text-white font-bold text-sm">What's New in PM Tool v2.2.5 (Outpost & Nexus)</span>
                    </div>
                    <button onClick={() => setShowWhatsNew(false)} className="text-zinc-400 hover:text-white">
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="space-y-2.5 text-zinc-300 max-h-72 overflow-y-auto pr-1">
                    <div className="p-2.5 rounded-lg bg-surface border border-gold/40 space-y-1">
                      <div className="text-gold font-bold flex items-center gap-1.5">
                        <Zap className="w-3.5 h-3.5 text-gold-bright" />
                        <span>Hexagonal Architecture Nexus & 100% Local Parity</span>
                      </div>
                      <div className="text-[11px] text-zinc-400 leading-relaxed">
                        Decoupled domain core via formal TicketTrackerPort, DocumentRepositoryPort, and KnowledgeSourcePort contracts with 100% local parity SQLite adapters.
                      </div>
                    </div>

                    <div className="p-2.5 rounded-lg bg-surface border border-white/10 space-y-1">
                      <div className="text-white font-bold flex items-center gap-1.5">
                        <Kanban className="w-3.5 h-3.5 text-blue-400" />
                        <span>Atlassian Jira Cloud REST API v3 Outpost</span>
                      </div>
                      <div className="text-[11px] text-zinc-400 leading-relaxed">
                        Two-way sprint backlog synchronization with dynamic remote status column remapping, issue key badges ([PROJ-102 ↗]), and remote transition pushing.
                      </div>
                    </div>

                    <div className="p-2.5 rounded-lg bg-surface border border-white/10 space-y-1">
                      <div className="text-white font-bold flex items-center gap-1.5">
                        <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Pre-Sync Safety Backup Snapshots & 1-Click Restore</span>
                      </div>
                      <div className="text-[11px] text-zinc-400 leading-relaxed">
                        Outpost-as-Dictator state safety model writes timestamped JSON backups to %LOCALAPPDATA%\PMTool\backups before any sync, allowing 1-click atomic restore.
                      </div>
                    </div>

                    <div className="p-2.5 rounded-lg bg-surface border border-white/10 space-y-1">
                      <div className="text-white font-bold flex items-center gap-1.5">
                        <FileText className="w-3.5 h-3.5 text-purple-400" />
                        <span>Notion & Google Docs Cloud Publishing</span>
                      </div>
                      <div className="text-[11px] text-zinc-400 leading-relaxed">
                        Publish living PRDs, RFCs, and sprint briefs directly from Artifacts Studio with automated Markdown-to-Block AST transformation.
                      </div>
                    </div>

                    <div className="p-2.5 rounded-lg bg-surface border border-white/10 space-y-1">
                      <div className="text-white font-bold flex items-center gap-1.5">
                        <ShieldCheck className="w-3.5 h-3.5 text-gold" />
                        <span>SSRF Defensive Perimeter & PBKDF2 Credential Vault</span>
                      </div>
                      <div className="text-[11px] text-zinc-400 leading-relaxed">
                        Strict defenses blocking loopback (127.0.0.1, ::1), cloud metadata (169.254.169.254), and RFC 1918 subnets, with machine-bound token encryption.
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => setShowWhatsNew(false)}
                    className="w-full py-2 rounded-lg bg-gold text-zinc-950 font-bold hover:brightness-110 shadow-md shadow-gold/20"
                  >
                    Got It &bull; Explore Workstation
                  </button>
                </div>
              </div>
            )}

            {/* First-Launch Onboarding Wizard Simulator (v2.2.0) */}
            {showOnboardingModal && (
              <div className="absolute inset-0 z-40 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4">
                <div className="bg-[#121218] border border-gold/40 rounded-2xl w-full max-w-xl shadow-2xl p-5 font-mono text-xs space-y-4 animate-in fade-in zoom-in-95 duration-150">
                  <div className="flex items-center justify-between pb-2 border-b border-white/[0.08]">
                    <div className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-gold-bright" />
                      <span className="text-white font-bold text-sm">
                        Welcome to PM Tool &bull; Setup Wizard (Step {onboardingStep} of 3)
                      </span>
                    </div>
                    <button onClick={() => setShowOnboardingModal(false)} className="text-zinc-400 hover:text-white">
                      <X className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Step 1: Workspace & Initiative */}
                  {onboardingStep === 1 && (
                    <div className="space-y-3">
                      <div>
                        <div className="text-white font-bold text-xs mb-1">Step 1: Workspace & Initiative Setup</div>
                        <div className="text-[11px] text-zinc-400">Initialize your local product repository and tech stack constraints.</div>
                      </div>

                      <div className="space-y-2 bg-surface p-3 rounded-xl border border-white/10">
                        <div>
                          <label className="text-[10px] text-zinc-400 uppercase font-bold block mb-1">Initiative Name</label>
                          <input
                            type="text"
                            readOnly
                            value="Atlas Analytics Engine"
                            className="w-full bg-[#161620] border border-white/10 rounded px-2.5 py-1 text-white text-[11px]"
                          />
                        </div>

                        <div>
                          <label className="text-[10px] text-zinc-400 uppercase font-bold block mb-1">Domain Preset</label>
                          <div className="flex flex-wrap gap-1">
                            {['Enterprise SaaS', 'Developer Tools', 'AI / ML Platform', 'FinTech'].map((d, i) => (
                              <span
                                key={d}
                                className={`px-2 py-0.5 rounded text-[10px] border ${
                                  i === 0
                                    ? 'bg-gold/20 border-gold text-gold-bright font-bold'
                                    : 'bg-surface border-white/10 text-zinc-400'
                                }`}
                              >
                                {d}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div>
                          <label className="text-[10px] text-zinc-400 uppercase font-bold block mb-1">Technology Stack</label>
                          <div className="text-[11px] text-zinc-300 bg-[#161620] p-1.5 rounded border border-white/06">
                            React 19, TypeScript, Python 3.12, SQLite WAL
                          </div>
                        </div>

                        <div className="flex items-center gap-2 pt-1 text-[11px] text-zinc-300">
                          <CheckSquare className="w-3.5 h-3.5 text-gold-bright" />
                          <span>Generate initial calibrated INVEST user stories for sprint backlog</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Step 2: AI Gateway Probe */}
                  {onboardingStep === 2 && (
                    <div className="space-y-3">
                      <div>
                        <div className="text-white font-bold text-xs mb-1">Step 2: AI Gateway Connectivity Probe</div>
                        <div className="text-[11px] text-zinc-400">Probe running local inference servers or configure optional cloud keys.</div>
                      </div>

                      <div className="bg-surface p-3 rounded-xl border border-gold/40 space-y-2.5">
                        <div className="flex items-center justify-between pb-2 border-b border-white/[0.06]">
                          <span className="font-bold text-white flex items-center gap-1.5">
                            <Cpu className="w-3.5 h-3.5 text-gold" />
                            <span>Local Ollama Probe (localhost:11434)</span>
                          </span>
                          <span className="text-[9px] px-1.5 py-0.2 rounded bg-green-500/10 text-green-400 border border-green-500/20 font-bold">
                            CONNECTED
                          </span>
                        </div>

                        <div className="text-[11px] text-zinc-300 space-y-1">
                          <div>&bull; <strong>Detected Models:</strong> llama3.2:latest, mistral:7b-instruct, gemma2:9b</div>
                          <div>&bull; <strong>Active Selection:</strong> llama3.2:latest (Local Offline Mode)</div>
                          <div>&bull; <strong>Output Budget:</strong> 8,192 tokens</div>
                        </div>

                        <div className="p-2 rounded bg-[#0b0b10] border border-white/[0.06] text-[10px] text-zinc-400">
                          Zero external network calls required for local inference. Optional Google Gemini & OpenAI keys can be added in Settings.
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Step 3: Workstation Tour */}
                  {onboardingStep === 3 && (
                    <div className="space-y-3">
                      <div>
                        <div className="text-white font-bold text-xs mb-1">Step 3: Workstation Spotlight & Keyboard Tour</div>
                        <div className="text-[11px] text-zinc-400">Master global keybindings for zero-latency desktop navigation.</div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                        <div className="p-2.5 rounded-lg bg-surface border border-gold/30 space-y-1">
                          <div className="text-gold font-bold flex items-center justify-between">
                            <span>Spotlight</span>
                            <kbd className="px-1 text-[9px] bg-black/40 rounded border border-gold/30">Ctrl+K</kbd>
                          </div>
                          <div className="text-[10px] text-zinc-400">Raycast-style fuzzy search across all views and actions.</div>
                        </div>

                        <div className="p-2.5 rounded-lg bg-surface border border-white/10 space-y-1">
                          <div className="text-white font-bold flex items-center justify-between">
                            <span>Living Docs</span>
                            <kbd className="px-1 text-[9px] bg-black/40 rounded border border-white/10">Ctrl+4</kbd>
                          </div>
                          <div className="text-[10px] text-zinc-400">Split-view PRD and RFC editor with revision history.</div>
                        </div>

                        <div className="p-2.5 rounded-lg bg-surface border border-white/10 space-y-1">
                          <div className="text-white font-bold flex items-center justify-between">
                            <span>Toggle Sidebar</span>
                            <kbd className="px-1 text-[9px] bg-black/40 rounded border border-white/10">Ctrl+B</kbd>
                          </div>
                          <div className="text-[10px] text-zinc-400">Maximize canvas workspace on compact screens.</div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Wizard Footer Navigation */}
                  <div className="flex items-center justify-between pt-2 border-t border-white/[0.08]">
                    <button
                      onClick={() => setOnboardingStep((s) => (s > 1 ? s - 1 : 1))}
                      disabled={onboardingStep === 1}
                      className="px-3 py-1.5 rounded-lg text-zinc-400 hover:text-white disabled:opacity-30 disabled:pointer-events-none"
                    >
                      Back
                    </button>

                    {onboardingStep < 3 ? (
                      <button
                        onClick={() => setOnboardingStep((s) => (s < 3 ? s + 1 : 3))}
                        className="px-4 py-1.5 rounded-lg bg-gold text-zinc-950 font-bold hover:brightness-110 flex items-center gap-1.5"
                      >
                        <span>Continue</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    ) : (
                      <button
                        onClick={() => {
                          setShowOnboardingModal(false);
                          setOnboardingStep(1);
                          onCopyToast && onCopyToast('Onboarding completed! Initial project and seed backlog initialized.');
                        }}
                        className="px-4 py-1.5 rounded-lg bg-gold text-zinc-950 font-bold hover:brightness-110 flex items-center gap-1.5 shadow-md shadow-gold/20"
                      >
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                        <span>Enter Workstation</span>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* Spotlight Command Palette Simulator Overlay (Ctrl+K) */}
            {spotlightOpen && (
              <div className="absolute inset-0 z-30 bg-black/80 backdrop-blur-sm flex items-start justify-center pt-8 px-4">
                <div className="bg-[#121218] border border-gold/40 rounded-2xl w-full max-w-lg shadow-2xl shadow-gold/10 overflow-hidden font-mono animate-in fade-in zoom-in-95 duration-150">
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
