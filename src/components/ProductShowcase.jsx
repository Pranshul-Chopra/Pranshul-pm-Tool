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
  TrendingDown,
  Zap, 
  Play, 
  Command, 
  Plus, 
  Trash2, 
  PieChart, 
  X, 
  ArrowUpRight, 
  FolderGit2,
  Activity,
  Calendar,
  AlertCircle,
  CheckSquare,
  Square
} from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export function ProductShowcase({ onCopyToast }) {
  const [activeModule, setActiveModule] = useState('analytics-workbench');
  const [selectedDocTemplate, setSelectedDocTemplate] = useState('prd');
  const [dataStudioTab, setDataStudioTab] = useState('canvas');
  const [selectedSqlPreset, setSelectedSqlPreset] = useState(0);
  const [selectedCitation, setSelectedCitation] = useState('spec');
  const [activeSlashCommand, setActiveSlashCommand] = useState('/data');
  const [kanbanFilter, setKanbanFilter] = useState('all');
  const [ftsSearchQuery, setFtsSearchQuery] = useState('offline key exchange');

  // Spotlight State
  const [spotlightQuery, setSpotlightQuery] = useState('');
  const [selectedSpotlightIdx, setSelectedSpotlightIdx] = useState(0);

  // KPI Studio State
  const [kpiStudioModalOpen, setKpiStudioModalOpen] = useState(false);
  const [selectedKpiType, setSelectedKpiType] = useState('kpi_card');
  const [selectedKpiOp, setSelectedKpiOp] = useState('SUM');

  // Advanced Analytics Workbench State (v2.1.0)
  const [analyticsSubTab, setAnalyticsSubTab] = useState('funnel');

  // Calibrated Story Decomposer State (v2.1.0)
  const [decomposerPersona, setDecomposerPersona] = useState('End-User');
  const [selectedStoryIdx, setSelectedStoryIdx] = useState(0);
  const [storiesSelected, setStoriesSelected] = useState({ 0: true, 1: true, 2: true });

  const getModuleIcon = (id) => {
    switch (id) {
      case 'analytics-workbench': return Activity;
      case 'story-decomposer': return Sparkles;
      case 'command-palette': return Command;
      case 'kpi-studio': return PieChart;
      case 'data-studio': return Database;
      case 'doc-generator': return FileText;
      case 'sprint-kanban': return Layers;
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
        { c1: 'Analytics Workbench', c2: '18,920', c3: '64.2s' },
        { c1: 'Spotlight (Ctrl+K)', c2: '16,420', c3: '22.1s' },
        { c1: 'Sprint Kanban', c2: '14,820', c3: '42.8s' },
        { c1: 'Story Decomposer', c2: '13,150', c3: '52.4s' },
        { c1: 'AI Copilot', c2: '12,450', c3: '88.4s' },
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
          Inspect how {siteConfig.name} v{siteConfig.release.version} executes local dataset analytics, conversion funnels, calibrated INVEST story decomposition, Spotlight navigation, and resilient desktop updating.
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
                <span>Sub-second analytical queries on local SQLite storage</span>
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
            
            {/* 0. NEW IN v2.1.0: Advanced Analytics Workbench Simulation */}
            {activeModule === 'analytics-workbench' && (
              <div className="space-y-4 font-mono text-xs">
                <div className="flex flex-wrap items-center justify-between pb-3 border-b border-white/[0.08] gap-2">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
                    <span className="text-xs text-white font-semibold">Advanced Analytics Workbench</span>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-gold/10 text-gold-bright border border-gold/30">
                      v2.1.0 New
                    </span>
                  </div>
                  <span className="text-[10px] text-zinc-400">tools/analytics_engine.py</span>
                </div>

                {/* Subtab Switcher */}
                <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-[11px]">
                  {[
                    { id: 'funnel', label: '1. Conversion Funnel', icon: TrendingDown },
                    { id: 'retention', label: '2. Cohort Matrix Heatmap', icon: Calendar },
                    { id: 'outliers', label: '3. Outliers & Distribution', icon: AlertCircle },
                    { id: 'correlation', label: '4. Pearson Correlations', icon: Sparkles },
                  ].map((t) => {
                    const Icon = t.icon;
                    return (
                      <button
                        key={t.id}
                        onClick={() => setAnalyticsSubTab(t.id)}
                        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border transition-all ${
                          analyticsSubTab === t.id
                            ? 'bg-gold/20 border-gold text-gold-bright font-bold'
                            : 'bg-surface border-white/10 text-zinc-400 hover:text-white'
                        }`}
                      >
                        <Icon className="w-3.5 h-3.5" />
                        <span>{t.label}</span>
                      </button>
                    );
                  })}
                </div>

                {/* Instrument 1: Funnel Analyzer */}
                {analyticsSubTab === 'funnel' && (
                  <div className="bg-[#111116] p-4 rounded-xl border border-gold/40 space-y-3">
                    <div className="flex items-center justify-between pb-1 border-b border-white/[0.06]">
                      <span className="font-bold text-white flex items-center gap-2">
                        <TrendingDown className="w-3.5 h-3.5 text-gold-bright" />
                        <span>Sequential Drop-Off & Lost Volume Analysis</span>
                      </span>
                      <span className="text-[10px] text-green-400 font-semibold">5.92% Top-to-Bottom</span>
                    </div>

                    <div className="space-y-2">
                      {[
                        { stage: '1. Visit Landing Page', count: 14200, pct: 100, drop: null, color: '#e5b95a' },
                        { stage: '2. Complete Registration', count: 4820, pct: 33.9, drop: '-66.1% drop-off (9,380 lost)', color: '#e8a84c' },
                        { stage: '3. Create Project Workspace', count: 2140, pct: 15.1, drop: '-55.6% drop-off (2,680 lost)', color: '#5aab7f' },
                        { stage: '4. Upgrade / Paid Conversion', count: 840, pct: 5.92, drop: '-60.7% drop-off (1,300 lost)', color: '#4c97e8' },
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
                      <span>Key Bottleneck: <strong>Registration Step</strong> (-66.1% transition drop)</span>
                      <span className="text-gold">AST Evaluated</span>
                    </div>
                  </div>
                )}

                {/* Instrument 2: Cohort Retention Matrix Heatmap */}
                {analyticsSubTab === 'retention' && (
                  <div className="bg-[#111116] p-4 rounded-xl border border-gold/40 space-y-3">
                    <div className="flex items-center justify-between pb-1 border-b border-white/[0.06]">
                      <span className="font-bold text-white flex items-center gap-2">
                        <Calendar className="w-3.5 h-3.5 text-gold-bright" />
                        <span>Period-over-Period Cohort Retention Matrix Heatmap</span>
                      </span>
                      <span className="text-[10px] text-gold">MoM Retention</span>
                    </div>

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
                      <span>Persistence Trend: Month 1 retention up from 78.4% to 84.5%</span>
                      <span className="text-green-400">Heatmap Shading</span>
                    </div>
                  </div>
                )}

                {/* Instrument 3: Outliers & Statistical Distribution */}
                {analyticsSubTab === 'outliers' && (
                  <div className="bg-[#111116] p-4 rounded-xl border border-gold/40 space-y-3">
                    <div className="flex items-center justify-between pb-1 border-b border-white/[0.06]">
                      <span className="font-bold text-white flex items-center gap-2">
                        <AlertCircle className="w-3.5 h-3.5 text-gold-bright" />
                        <span>Distribution Profiling & Outlier Detection</span>
                      </span>
                      <span className="text-[10px] text-amber-400 font-semibold">Tukey IQR + Z-Scores</span>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-[10px]">
                      <div className="p-2.5 rounded bg-surface border border-white/10">
                        <span className="text-zinc-400 uppercase">Median (P50)</span>
                        <div className="text-base font-bold text-white">$124.50</div>
                      </div>
                      <div className="p-2.5 rounded bg-surface border border-white/10">
                        <span className="text-zinc-400 uppercase">Mean &plusmn; StdDev</span>
                        <div className="text-base font-bold text-white">$142.8 &plusmn; 48</div>
                      </div>
                      <div className="p-2.5 rounded bg-surface border border-gold/30">
                        <span className="text-gold uppercase">P90 / P99</span>
                        <div className="text-base font-bold text-gold">$510 / $890</div>
                      </div>
                      <div className="p-2.5 rounded bg-surface border border-red-500/30">
                        <span className="text-red-400 uppercase">Tukey Fence</span>
                        <div className="text-base font-bold text-red-400">$787.00</div>
                      </div>
                    </div>

                    <div className="p-2 rounded bg-[#09090d] border border-white/[0.04] flex items-center justify-between text-[10px] text-zinc-400">
                      <span>Flagged 14 transaction records exceeding 1.5 &times; IQR and |Z| &gt; 3.0</span>
                      <span className="text-green-400">Anomaly Safe</span>
                    </div>
                  </div>
                )}

                {/* Instrument 4: Pearson Correlation Matrix */}
                {analyticsSubTab === 'correlation' && (
                  <div className="bg-[#111116] p-4 rounded-xl border border-gold/40 space-y-3">
                    <div className="flex items-center justify-between pb-1 border-b border-white/[0.06]">
                      <span className="font-bold text-white flex items-center gap-2">
                        <Sparkles className="w-3.5 h-3.5 text-gold-bright" />
                        <span>Pairwise Pearson Correlation Coefficients (r &isin; [-1.0, 1.0])</span>
                      </span>
                      <span className="text-[10px] text-gold">4 Dimensions</span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-[10px]">
                      <div className="p-2.5 rounded bg-surface border border-green-500/30 space-y-0.5">
                        <div className="text-zinc-400">session_time &bull; conversion</div>
                        <div className="text-base font-bold text-green-400">r = +0.76</div>
                        <div className="text-[9px] text-green-300">Strong Positive</div>
                      </div>
                      <div className="p-2.5 rounded bg-surface border border-red-500/30 space-y-0.5">
                        <div className="text-zinc-400">app_errors &bull; nps_score</div>
                        <div className="text-base font-bold text-red-400">r = -0.58</div>
                        <div className="text-[9px] text-red-300">Moderate Negative</div>
                      </div>
                      <div className="p-2.5 rounded bg-surface border border-gold/30 space-y-0.5">
                        <div className="text-zinc-400">arr_usd &bull; team_seats</div>
                        <div className="text-base font-bold text-gold">r = +0.89</div>
                        <div className="text-[9px] text-gold-bright">Very Strong Positive</div>
                      </div>
                    </div>

                    <div className="p-2 rounded bg-[#09090d] border border-white/[0.04] flex items-center justify-between text-[10px] text-zinc-400">
                      <span>Automated feature dependency discovery in SQLite datasets</span>
                      <span className="text-gold">Zero Cloud Uploads</span>
                    </div>
                  </div>
                )}

                <div className="p-2.5 rounded-lg bg-[#09090d] border border-white/[0.08] flex items-center justify-between text-[11px] text-zinc-400">
                  <span>Engine: <code>tools/analytics_engine.py & /api/studio/analytics</code></span>
                  <span className="text-green-400">Sub-Second Evaluation</span>
                </div>
              </div>
            )}

            {/* 1. NEW IN v2.1.0: Calibrated INVEST Story Decomposer Overhaul */}
            {activeModule === 'story-decomposer' && (
              <div className="space-y-4 font-mono text-xs">
                <div className="flex flex-wrap items-center justify-between pb-3 border-b border-white/[0.08] gap-2">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
                    <span className="text-xs text-white font-semibold">Calibrated Story Decomposer Studio</span>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-gold/10 text-gold-bright border border-gold/30">
                      INVEST Overhaul (v2.1.0)
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[10px]">
                    <span className="text-zinc-400">Persona:</span>
                    {['End-User', 'Admin', 'API Consumer', 'DevOps'].map((p) => (
                      <button
                        key={p}
                        onClick={() => setDecomposerPersona(p)}
                        className={`px-2 py-0.5 rounded border transition-colors ${
                          decomposerPersona === p
                            ? 'bg-gold text-zinc-950 font-bold border-gold'
                            : 'bg-surface text-zinc-400 border-white/10 hover:text-white'
                        }`}
                      >
                        {p}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Pre-Commit Review Studio Card */}
                <div className="bg-[#111116] border border-gold/40 rounded-xl p-4 space-y-3 shadow-xl">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <CheckSquare className="w-4 h-4 text-gold-bright" />
                      <span className="font-bold text-white text-xs">US-201: Conversion Funnel Sequential Tracking</span>
                    </div>
                    <span className="px-2 py-0.5 rounded bg-gold/20 text-gold-bright font-bold text-[10px]">
                      5 Fibonacci Pts (Calibrated)
                    </span>
                  </div>

                  <p className="text-[11px] text-zinc-300">
                    <strong>User Story:</strong> As an {decomposerPersona}, I want to analyze stage-to-stage transition loss across sequential user actions so that conversion bottlenecks can be identified quantitatively.
                  </p>

                  {/* 3 Distinct Gherkin Acceptance Scenarios */}
                  <div className="space-y-1.5 pt-1 border-t border-white/[0.06] text-[10px]">
                    <div className="text-gold font-bold uppercase">Multi-Scenario Gherkin Criteria (Happy, Negative, Boundary):</div>
                    <div className="p-2.5 rounded bg-[#09090d] border border-white/[0.04] space-y-1.5 text-zinc-300">
                      <div>🟢 <strong>Scenario 1 (Happy Path):</strong> Given a valid dataset with timestamp and stage columns, When the funnel is calculated, Then display step-to-step drop-offs with lost volume.</div>
                      <div>🟡 <strong>Scenario 2 (Negative Flow):</strong> Given an unmapped stage column, When analysis executes, Then return a validation error without terminating the background thread.</div>
                      <div>🔴 <strong>Scenario 3 (Boundary Case):</strong> Given zero conversions in stage 4, When rendering visual bars, Then display 0.0% conversion gracefully without division-by-zero errors.</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-white/[0.06] text-[10px]">
                    <span className="text-zinc-400">Criteria: INVEST Atomic Slicing</span>
                    <button
                      onClick={() => onCopyToast && onCopyToast('Committed 5 INVEST user stories to sprint Kanban board!')}
                      className="px-3 py-1 rounded bg-gold text-zinc-950 font-bold hover:brightness-110 flex items-center gap-1 shadow-sm"
                    >
                      <Check className="w-3 h-3 stroke-[3]" />
                      <span>Batch Commit to Sprint Board</span>
                    </button>
                  </div>
                </div>

                <div className="p-2.5 rounded-lg bg-[#09090d] border border-white/[0.08] flex items-center justify-between text-[11px] text-zinc-400">
                  <span>Decomposer Engine: <code>DecomposerModal.tsx & tools/story_decomposer.py</code></span>
                  <span className="text-green-400">Calibrated Fibonacci Sizing</span>
                </div>
              </div>
            )}

            {/* 2. Spotlight Command Palette (v2.0.0) */}
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
                  <kbd className="px-2 py-0.5 rounded bg-black/40 text-gold border border-gold/30 font-bold text-[10px]">
                    Ctrl+K / Cmd+K
                  </kbd>
                </div>

                <div className="bg-[#101016] border border-gold/40 rounded-xl overflow-hidden shadow-2xl">
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

                  <div className="p-2 space-y-1 max-h-60 overflow-y-auto">
                    {[
                      { label: 'Open Advanced Analytics Workbench (v2.1)', cat: 'Analytics', key: 'Ctrl+3', icon: Activity },
                      { label: 'Decompose PRD with Pre-Commit Review', cat: 'Agile', key: '/breakdown', icon: Sparkles },
                      { label: 'Switch to Sprint Kanban Board', cat: 'Navigation', key: 'Ctrl+2', icon: Layers },
                      { label: 'Open Knowledge Base & FTS5 Search', cat: 'Navigation', key: 'Ctrl+4', icon: Search },
                      { label: '+ Ingest Native SQLite Database (.db)', cat: 'Data Studio', key: '↵', icon: Database },
                      { label: '+ Generate Executive PM Document (PRD)', cat: 'AI Scaffolder', key: 'Ctrl+D', icon: FileText },
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
                            <kbd className="px-1.5 py-0.5 rounded bg-black/40 text-[9px] text-gold border border-white/10 font-bold">
                              {cmd.key}
                            </kbd>
                          </div>
                        );
                      })}
                  </div>
                </div>

                <div className="p-2.5 rounded-lg bg-[#09090d] border border-white/[0.08] flex items-center justify-between text-[11px] text-zinc-400">
                  <span>Implementation: <code>CommandPalette.tsx & Titlebar.tsx</code></span>
                  <span className="text-green-400">Zero-Iframe Single-DOM Execution</span>
                </div>
              </div>
            )}

            {/* 3. KPI Studio (v2.0.1) */}
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
                  <button
                    onClick={() => setKpiStudioModalOpen(!kpiStudioModalOpen)}
                    className="px-2.5 py-1 rounded-lg bg-gold text-zinc-950 font-bold flex items-center gap-1.5 hover:brightness-110 shadow-sm shadow-gold/20 transition-all text-[11px]"
                  >
                    <Plus className="w-3 h-3 stroke-[3]" />
                    <span>{kpiStudioModalOpen ? 'Close Builder' : '+ Add KPI Metric'}</span>
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  <div className="p-3 rounded-xl bg-surface border border-gold/40 space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] text-zinc-400 uppercase">ARR Velocity</span>
                      <span className="text-[9px] px-1 rounded bg-green-500/10 text-green-400 font-bold">Ahead</span>
                    </div>
                    <div className="text-xl font-bold text-white">$142,800</div>
                    <div className="text-[10px] text-green-400 font-semibold flex items-center gap-1">
                      <TrendingUp className="w-3 h-3" />
                      <span>▲ +14.2% vs target ($125k)</span>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-surface border border-white/10 space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] text-zinc-400 uppercase">Active Teams</span>
                      <span className="text-[9px] px-1 rounded bg-blue-500/10 text-blue-300">Growing</span>
                    </div>
                    <div className="text-xl font-bold text-white">28 Workspaces</div>
                    <div className="text-[10px] text-blue-300 font-semibold">+3 onboarded this sprint</div>
                  </div>

                  <div className="p-3 rounded-xl bg-surface border border-white/10 space-y-1">
                    <div className="flex items-center justify-between text-[10px] text-zinc-400 uppercase">
                      <span>Segment Share</span>
                      <span className="text-gold">3 Segments</span>
                    </div>
                    <div className="flex items-center gap-3 pt-1">
                      <div className="w-10 h-10 rounded-full border-4 border-gold border-r-blue-500 border-b-emerald-400 shrink-0" />
                      <div className="text-[10px] space-y-0.5 text-zinc-300">
                        <div><span className="w-1.5 h-1.5 rounded-full bg-gold inline-block mr-1" /> Ent: 48%</div>
                        <div><span className="w-1.5 h-1.5 rounded-full bg-blue-500 inline-block mr-1" /> Growth: 34%</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-2.5 rounded-lg bg-[#09090d] border border-white/[0.08] flex items-center justify-between text-[11px] text-zinc-400">
                  <span>Lifecycle: <code>AddWidgetModal.tsx & compute_widget_data</code></span>
                  <span className="text-green-400">Full Metric & Chart CRUD</span>
                </div>
              </div>
            )}

            {/* 4. Tabular & SQLite Ingestion */}
            {activeModule === 'data-studio' && (
              <div className="space-y-4 font-mono text-xs">
                <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
                  <span className="text-xs text-white font-semibold">Tabular & SQLite Ingestion Engine</span>
                  <span className="text-[10px] text-gold">.db .sqlite3 .xlsx .csv .json</span>
                </div>

                <div className="space-y-2">
                  {[
                    { file: 'telemetry_store.sqlite3', fmt: 'Native SQLite (.sqlite3)', rows: '28,400 rows', tag: 'Native SQLite', isSqlite: true },
                    { file: 'q3_user_telemetry.xlsx', fmt: 'Excel (.xlsx)', rows: '14,200 rows', tag: 'openpyxl', isSqlite: false },
                    { file: 'active_subscriptions.json', fmt: 'JSON Array', rows: '3,800 rows', tag: 'JSON Engine', isSqlite: false },
                  ].map((ds) => (
                    <div key={ds.file} className="p-3 bg-surface rounded-xl border border-white/10 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Database className={`w-3.5 h-3.5 ${ds.isSqlite ? 'text-gold-bright' : 'text-blue-400'}`} />
                        <span className="font-bold text-white">{ds.file}</span>
                        <span className="text-[9px] px-1.5 py-0.2 rounded bg-white/[0.04] text-zinc-400 border border-white/10">{ds.fmt}</span>
                      </div>
                      <span className="text-gold text-[10px]">{ds.tag}</span>
                    </div>
                  ))}
                </div>

                <div className="p-2.5 rounded-lg bg-[#09090d] border border-white/[0.08] flex items-center justify-between text-[11px] text-zinc-400">
                  <span>Storage: <code>%LOCALAPPDATA%\PMTool\datasets\analytics_store.db</code></span>
                  <span className="text-green-400">Polymorphic Grid Safe</span>
                </div>
              </div>
            )}

            {/* 5. AI Workspace PM Document Generator */}
            {activeModule === 'doc-generator' && (
              <div className="space-y-4 font-mono text-xs">
                <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
                  <span className="text-xs text-white font-semibold">AI PM Document Generator Studio</span>
                  <span className="text-[10px] text-gold">5 Blueprints</span>
                </div>

                <div className="bg-[#111116] border border-gold/30 rounded-xl p-4 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-white flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-gold-bright" />
                      <span>PRD-2026: Advanced Dataset Analytics & Calibrated Stories</span>
                    </span>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-green-500/10 text-green-400 border border-green-500/20">
                      Approved Draft
                    </span>
                  </div>

                  <p className="text-[11px] text-zinc-300 leading-relaxed">
                    <strong>Document Structure:</strong> Scaffolds executive summary, persona constraints, functional requirements, technical architecture, and phased rollout guardrails. Formatted with 1-inch margins and custom headers.
                  </p>

                  <div className="pt-2 border-t border-white/[0.08] flex items-center justify-between">
                    <span className="text-[10px] text-zinc-400">Actions:</span>
                    <div className="flex gap-1.5">
                      <button
                        onClick={() => onCopyToast && onCopyToast('Generated Microsoft Word document (.docx)!')}
                        className="px-2.5 py-1 rounded bg-gold/15 text-gold-bright border border-gold/40 flex items-center gap-1 font-bold"
                      >
                        <Download className="w-3 h-3" />
                        <span>Word (.docx)</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* 6. Sprint Kanban Simulation */}
            {activeModule === 'sprint-kanban' && (
              <div className="space-y-4 font-mono text-xs">
                <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
                  <span className="text-xs text-white font-semibold">Sprint Kanban Studio</span>
                  <span className="text-green-400 text-[10px]">HTML5 Drag & Drop</span>
                </div>

                <div className="grid grid-cols-4 gap-2 bg-[#14141c] p-2.5 rounded-xl border border-white/[0.08]">
                  <div><div className="text-[10px] text-zinc-400">TOTAL</div><div className="text-base font-bold text-white">22</div></div>
                  <div><div className="text-[10px] text-amber-400">IN PROGRESS</div><div className="text-base font-bold text-amber-400">4</div></div>
                  <div><div className="text-[10px] text-red-400">BLOCKERS</div><div className="text-base font-bold text-green-400">0</div></div>
                  <div><div className="text-[10px] text-green-400">VELOCITY</div><div className="text-base font-bold text-green-400">76%</div></div>
                </div>

                <div className="p-2.5 rounded-lg bg-[#09090d] border border-white/[0.08] flex items-center justify-between text-[11px] text-zinc-400">
                  <span>Persistence: <code>PATCH /api/tasks/:id</code></span>
                  <span className="text-gold">Fibonacci Agile Sizing</span>
                </div>
              </div>
            )}

            {/* 7. Auto-Updater & Resilient Shell Simulation */}
            {activeModule === 'auto-updater' && (
              <div className="space-y-4 font-mono text-xs">
                <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
                  <span className="text-xs text-white font-semibold">electron-updater & Cascading Port Shield</span>
                  <span className="text-[10px] text-green-400 px-2 py-0.5 rounded bg-green-500/10 border border-green-500/20">
                    60m Polling
                  </span>
                </div>

                <div className="p-3.5 bg-[#0a0a0f] rounded-xl border border-white/10 space-y-3">
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="text-zinc-400">Desktop Architecture:</span>
                    <span className="text-white font-bold">Electron 44 &bull; React 19 SPA</span>
                  </div>

                  <div className="p-2.5 bg-[#12121a] rounded-lg border border-gold/30 space-y-2">
                    <div className="flex items-center justify-between text-[11px]">
                      <span className="text-gold-bright font-bold">Background Delta Sync:</span>
                      <span className="text-green-400 font-bold">v2.1.0 Verified</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-1.5 overflow-hidden">
                      <div className="bg-gradient-to-r from-gold to-gold-bright h-full rounded-full w-full" />
                    </div>
                  </div>
                </div>

                <div className="p-2.5 rounded-lg bg-[#09090d] border border-white/[0.08] text-[11px] text-zinc-400 flex items-center justify-between">
                  <span>Release Channel: GitHub Releases (Auto-Checked)</span>
                  <span className="text-gold-bright">v2.1.0 Stable (Atlas)</span>
                </div>
              </div>
            )}

          </div>
        </div>
      </div>
    </section>
  );
}
