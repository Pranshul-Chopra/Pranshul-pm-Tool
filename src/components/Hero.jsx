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
  Zap
} from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import { PmtLogo } from './PmtLogo';
import { siteConfig } from '../config/siteConfig';

export function Hero({ onDownloadClick, onCopyToast }) {
  const [activeTab, setActiveTab] = useState('copilot');
  const [dashboardSubView, setDashboardSubView] = useState('canvas');
  const [activeTemplate, setActiveTemplate] = useState('prd');

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

          <a
            href="#sprint-board"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-5 py-3.5 rounded-xl font-mono text-xs text-zinc-400 hover:text-gold transition-colors"
          >
            <span>Explore Sprint Board</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </a>
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

      {/* Realistic Interactive Desktop App Simulator Window (Mirroring v1.3.0) */}
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
        <div className="grid grid-cols-1 md:grid-cols-12 min-h-[490px]">
          {/* Authentic Sidebar matching shell.html */}
          <div className="md:col-span-3 bg-[#111116] border-r border-white/[0.08] p-3 flex flex-col justify-between">
            <div className="space-y-1">
              <div className="px-3 py-2 text-[10px] font-mono uppercase text-zinc-400 font-bold tracking-wider">
                Workstation Tabs
              </div>
              <button 
                onClick={() => setActiveTab('dashboard')}
                className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-medium text-left transition-colors ${
                  activeTab === 'dashboard' 
                    ? 'bg-gold/15 text-gold-bright border border-gold/30' 
                    : 'text-zinc-400 hover:text-white hover:bg-white/[0.04]'
                }`}
              >
                <BarChart3 className="w-3.5 h-3.5 text-gold" />
                <span className="font-semibold flex items-center justify-between w-full">
                  <span>Data & Insights</span>
                  <span className="text-[9px] px-1 py-0.2 rounded bg-gold/20 text-gold-bright font-mono">v1.4</span>
                </span>
              </button>

              <button 
                onClick={() => setActiveTab('board')}
                className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-medium text-left transition-colors ${
                  activeTab === 'board' 
                    ? 'bg-gold/15 text-gold-bright border border-gold/30' 
                    : 'text-zinc-400 hover:text-white hover:bg-white/[0.04]'
                }`}
              >
                <Kanban className="w-3.5 h-3.5 text-gold" />
                <span>Sprint Board</span>
              </button>

              <button 
                onClick={() => setActiveTab('copilot')}
                className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-medium text-left transition-colors ${
                  activeTab === 'copilot' 
                    ? 'bg-gold/15 text-gold-bright border border-gold/30' 
                    : 'text-zinc-400 hover:text-white hover:bg-white/[0.04]'
                }`}
              >
                <Bot className="w-3.5 h-3.5 text-gold" />
                <span>AI Copilot & Slash Tools</span>
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
                <span>Knowledge Base</span>
              </button>

              <button 
                onClick={() => setActiveTab('projects')}
                className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-medium text-left transition-colors ${
                  activeTab === 'projects' 
                    ? 'bg-gold/15 text-gold-bright border border-gold/30' 
                    : 'text-zinc-400 hover:text-white hover:bg-white/[0.04]'
                }`}
              >
                <FolderGit2 className="w-3.5 h-3.5 text-gold" />
                <span>Projects & Presets</span>
              </button>
            </div>

            {/* Local DB Status Card */}
            <div className="pt-3 border-t border-white/[0.06] mt-4 px-2">
              <div className="text-[10px] font-mono text-zinc-400 mb-1">LOCAL DISK REPOSITORIES</div>
              <div className="text-[11px] font-mono text-zinc-300 truncate">
                {siteConfig.hero.simulator.localDbPath}
              </div>
              <div className="text-[10px] font-mono text-zinc-400 mt-1 truncate">
                datasets\analytics_store.db (v1.4)
              </div>
              <div className="flex items-center justify-between text-[10px] text-zinc-400 mt-2 font-mono">
                <span>{siteConfig.hero.simulator.dbStats}</span>
              </div>
            </div>
          </div>

          {/* Central Main Viewport */}
          <div className="md:col-span-9 p-4 sm:p-6 bg-[#0a0a0e] flex flex-col justify-between">
            
            {/* VIEW 0: Data Studio & Business Dashboards (NEW IN v1.4.0) */}
            {activeTab === 'dashboard' && (
              <div className="space-y-4">
                {/* Header Controls Bar */}
                <div className="flex flex-wrap items-center justify-between pb-3 border-b border-white/[0.08] gap-2">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
                    <span className="text-xs font-mono text-white font-semibold">Data Studio & Business Dashboards</span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-gold/10 text-gold-bright border border-gold/30">
                      v1.4.0
                    </span>
                  </div>

                  {/* Sub-view switcher */}
                  <div className="flex items-center gap-1 bg-[#14141c] p-0.5 rounded-lg border border-white/10 text-[11px] font-mono">
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
                      onClick={() => setDashboardSubView('sandbox')}
                      className={`px-2.5 py-1 rounded-md transition-colors ${
                        dashboardSubView === 'sandbox'
                          ? 'bg-gold text-zinc-950 font-bold'
                          : 'text-zinc-400 hover:text-white'
                      }`}
                    >
                      ‹/› Safe SQL Sandbox
                    </button>
                  </div>
                </div>

                {dashboardSubView === 'canvas' ? (
                  <div className="space-y-3.5">
                    {/* 4 KPI Metric Summary Cards */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs font-mono">
                      <div className="p-2.5 rounded-xl bg-surface border border-gold/40 space-y-1">
                        <div className="text-[10px] text-zinc-400 uppercase">ARR Velocity</div>
                        <div className="text-base font-bold text-white">$142,800</div>
                        <div className="text-[10px] text-green-400 font-semibold flex items-center gap-1">
                          <TrendingUp className="w-3 h-3" />
                          <span>+14.2% vs target</span>
                        </div>
                      </div>

                      <div className="p-2.5 rounded-xl bg-surface border border-white/10 space-y-1">
                        <div className="text-[10px] text-zinc-400 uppercase">Active Teams</div>
                        <div className="text-base font-bold text-white">28 Teams</div>
                        <div className="text-[10px] text-blue-300 font-semibold">+3 this sprint</div>
                      </div>

                      <div className="p-2.5 rounded-xl bg-surface border border-white/10 space-y-1">
                        <div className="text-[10px] text-zinc-400 uppercase">Sprint Delivery</div>
                        <div className="text-base font-bold text-white">74% Done</div>
                        <div className="text-[10px] text-gold font-semibold">34 pts shipped</div>
                      </div>

                      <div className="p-2.5 rounded-xl bg-surface border border-white/10 space-y-1">
                        <div className="text-[10px] text-zinc-400 uppercase">Monthly Churn</div>
                        <div className="text-base font-bold text-white">1.4%</div>
                        <div className="text-[10px] text-green-400 font-semibold">-0.3% MoM (Good)</div>
                      </div>
                    </div>

                    {/* Pure Responsive SVG Chart Component */}
                    <div className="bg-[#111116] p-3.5 rounded-xl border border-white/[0.08] space-y-2">
                      <div className="flex items-center justify-between text-xs font-mono">
                        <span className="text-zinc-300 font-semibold">Q3 Module Adoption (% Active User Base)</span>
                        <span className="text-[10px] text-zinc-500">Source: q3_telemetry.xlsx (14.2k rows)</span>
                      </div>
                      
                      {/* SVG Bar Chart */}
                      <div className="h-28 w-full flex items-end justify-between gap-3 pt-3 px-2">
                        {[
                          { label: 'Kanban', pct: 88, color: '#e8a84c' },
                          { label: 'Copilot', pct: 94, color: '#f29e24' },
                          { label: 'Data Studio', pct: 81, color: '#5aab7f' },
                          { label: 'Doc Ingest', pct: 66, color: '#4c97e8' },
                          { label: 'Word Export', pct: 59, color: '#a5b4fc' },
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
                      <span className="text-gold">Native openpyxl & SQLite Batch Materialization</span>
                    </div>
                  </div>
                ) : (
                  /* Safe SQL Sandbox sub-view */
                  <div className="space-y-3 font-mono text-xs">
                    <div className="bg-[#09090d] p-3 rounded-xl border border-gold/30 space-y-2">
                      <div className="flex items-center justify-between text-[11px] pb-1 border-b border-white/[0.06]">
                        <span className="text-gold font-bold flex items-center gap-1.5">
                          <Terminal className="w-3.5 h-3.5" />
                          <span>Interactive SQL Console (Read-Only)</span>
                        </span>
                        <span className="text-green-400 flex items-center gap-1">
                          <Zap className="w-3 h-3" />
                          <span>Execution Timer: 0.84 ms</span>
                        </span>
                      </div>
                      <code className="text-zinc-200 block text-[11px] leading-relaxed">
                        <span className="text-blue-400">SELECT</span> module, <span className="text-blue-400">COUNT</span>(*) <span className="text-blue-400">AS</span> events, <span className="text-blue-400">AVG</span>(latency_ms) <span className="text-blue-400">AS</span> latency <br />
                        <span className="text-blue-400">FROM</span> telemetry <br />
                        <span className="text-blue-400">GROUP BY</span> module <span className="text-blue-400">ORDER BY</span> events <span className="text-blue-400">DESC LIMIT</span> 5;
                      </code>
                    </div>

                    {/* Results Table */}
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
                            <td className="p-2 text-white font-semibold">Sprint Kanban</td>
                            <td className="p-2">14,820</td>
                            <td className="p-2 text-green-400">0.62</td>
                          </tr>
                          <tr>
                            <td className="p-2 text-white font-semibold">AI Copilot</td>
                            <td className="p-2">12,450</td>
                            <td className="p-2 text-green-400">1.45</td>
                          </tr>
                          <tr>
                            <td className="p-2 text-white font-semibold">Data Studio</td>
                            <td className="p-2">9,830</td>
                            <td className="p-2 text-green-400">0.78</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <div className="p-2 rounded-lg bg-surface border border-green-500/20 text-[10px] text-green-300 flex items-center justify-between">
                      <span>✓ 5-Layer Defense: file:... ?mode=ro • Semicolons Blocked • LIMIT 100 Enforced</span>
                      <span className="text-zinc-400">3 of 3 rows</span>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* VIEW 1: Sprint Kanban Board */}
            {activeTab === 'board' && (
              <div className="space-y-4">
                {/* Sprint Metrics KPI Banner */}
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
                    <div className="text-base font-bold text-green-400">72% (34 Pts)</div>
                  </div>
                </div>

                {/* 4 Kanban Lanes */}
                <div className="grid grid-cols-4 gap-2 text-xs font-mono">
                  {/* Lane 1: Backlog */}
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

                  {/* Lane 2: In Progress */}
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

                  {/* Lane 3: Blocked */}
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
                      <div className="text-[10px] text-red-300">Missing dynamic module hooks</div>
                    </div>
                  </div>

                  {/* Lane 4: Completed */}
                  <div className="bg-[#111116] p-2.5 rounded-xl border border-green-500/20 space-y-2">
                    <div className="flex items-center justify-between pb-1 border-b border-green-500/20">
                      <span className="text-[10px] uppercase font-bold text-green-400">Done (13)</span>
                    </div>
                    <div className="bg-surface p-2 rounded-lg border border-green-500/20 space-y-1.5 opacity-80">
                      <div className="flex items-center justify-between">
                        <span className="text-[9px] px-1 rounded bg-green-500/20 text-green-300">Shipped</span>
                        <span className="text-[9px] px-1 rounded bg-white/[0.06] text-zinc-500">5 pts</span>
                      </div>
                      <div className="text-white text-[11px] line-through font-semibold">HTML5 Drag & Drop Board</div>
                      <div className="text-[10px] text-zinc-500">Optimistic UI + PATCH /api/tasks</div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* VIEW 2: AI Copilot & 1-Click Document Generator (v1.5.0) */}
            {activeTab === 'copilot' && (
              <div className="space-y-4">
                <div className="flex flex-wrap items-center justify-between pb-3 border-b border-white/[0.08] gap-2">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-gold animate-ping" />
                    <span className="text-xs font-mono text-zinc-300 font-semibold">
                      AI Copilot &bull; Document Generator (v1.5.0)
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

                {/* 5 Executive Template Selector Pills */}
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

                {/* Scaffolding Output Preview with Document Metadata */}
                <div className="bg-[#111116] border border-gold/30 rounded-xl p-4 space-y-3 relative overflow-hidden">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-white flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-gold-bright" />
                      <span>
                        {activeTemplate === 'prd' && 'PRD-2026: Local Peer-to-Peer Sync Engine'}
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

                  {/* Document Metadata Table Preview (Matching python-docx output) */}
                  <div className="bg-[#09090c] p-2.5 rounded-lg border border-white/[0.06] grid grid-cols-2 sm:grid-cols-4 gap-2 text-[10px] font-mono">
                    <div>
                      <span className="text-zinc-500">AUTHOR:</span> <span className="text-zinc-200">Pranshul Chopra</span>
                    </div>
                    <div>
                      <span className="text-zinc-500">DATE:</span> <span className="text-zinc-200">2026-10-05</span>
                    </div>
                    <div>
                      <span className="text-zinc-500">STATUS:</span> <span className="text-gold">Review Ready</span>
                    </div>
                    <div>
                      <span className="text-zinc-500">SCOPE:</span> <span className="text-zinc-200">Local Wi-Fi P2P</span>
                    </div>
                  </div>

                  <p className="text-[11px] font-mono text-zinc-300 leading-relaxed">
                    <strong>1. Executive Scope:</strong> Enable two PM Tool desktop clients on the same subnet to perform bilateral SQLite differential state exchange without external cloud intermediaries. Formatted with 1-inch margins, Consolas code blocks, and styled headers.
                  </p>

                  <div className="flex flex-wrap gap-2 text-[10px] font-mono">
                    <span className="px-2 py-0.5 rounded bg-surface border border-white/10 text-gold-bright">
                      📄 Architecture_Spec.pdf [§3.2 Network Bounds]
                    </span>
                    <span className="px-2 py-0.5 rounded bg-surface border border-white/10 text-zinc-300">
                      ⚖️ ADR-014: SQLite WAL Pooling
                    </span>
                  </div>

                  {/* NEW IN v1.5.0: Assistant Response Quick Action Toolbar */}
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

            {/* VIEW 3: Knowledge Base with Dual Scrollbars & FTS5 BM25 */}
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

            {/* VIEW 4: Projects & 5 Enterprise Presets */}
            {activeTab === 'projects' && (
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
                  <span className="text-xs font-mono text-zinc-300 font-semibold">
                    Projects Overview &bull; 5 Enterprise Domain Presets
                  </span>
                  <span className="text-[11px] font-mono text-green-400">
                    Auto-Seeds Milestone Tasks
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono text-xs">
                  <div className="p-3 rounded-xl bg-surface border border-gold/40 space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-white">AI Copilot & RAG Studio</span>
                      <span className="px-1.5 py-0.5 rounded bg-gold/10 text-gold text-[10px]">Preset: AI Platform</span>
                    </div>
                    <p className="text-[11px] text-zinc-400">Auto-seeds: PRD Drafting, FTS5 Indexing, Telemetry, and Evaluation.</p>
                  </div>

                  <div className="p-3 rounded-xl bg-surface border border-white/10 space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-white">Enterprise SaaS Hub</span>
                      <span className="px-1.5 py-0.5 rounded bg-white/[0.06] text-zinc-300 text-[10px]">Preset: Enterprise</span>
                    </div>
                    <p className="text-[11px] text-zinc-400">Auto-seeds: RBAC Specs, Audit Logging, and Tenant Billing.</p>
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
                <span>electron-updater: Delta Sync Active</span>
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
