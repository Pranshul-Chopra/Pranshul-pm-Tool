/**
 * PM Tool — Central Site & Release Configuration
 * 
 * Accurately reflects the current release state of the application (v2.2.5 "Outpost & Nexus"):
 * - Hexagonal Architecture Nexus & 100% Local Parity (ports/ & adapters/)
 *   * TicketTrackerPort (ports/ticket_tracker.py): Board schema discovery, task creation, transitions, delta sync
 *   * DocumentRepositoryPort (ports/document_repo.py): Living document revisions, content trees, cloud export
 *   * KnowledgeSourcePort (ports/knowledge_source.py): Remote document ingestion, diagnostics, RAG indexing
 *   * Local parity adapters: LocalTicketAdapter, LocalArtifactsAdapter, LocalDiskRAGAdapter
 * - Connection Outposts: Jira Cloud, Notion & Google Docs
 *   * Atlassian Jira Cloud REST API v3 Outpost (adapters/jira_ticket_adapter.py) with dynamic status mapping
 *   * Notion Workspace Outpost (adapters/notion_document_adapter.py) with Markdown-to-Block transformer
 *   * Google Docs Export Outpost (adapters/gdocs_document_adapter.py) batch update cloud exporter
 * - Outpost-as-Dictator & Pre-Sync Safety Backup Snapshots (tools/outposts/snapshot.py)
 *   * Timestamped JSON backup snapshot written to %LOCALAPPDATA%\PMTool\backups\pre_sync_<provider>_<id>.json
 *   * 1-click atomic restore (POST /api/projects/:id/restore-snapshot) reversing sync overwrites
 * - SSRF Defensive Perimeter & Machine-Bound Credential Vault (tools/outposts/security.py)
 *   * Strict HTTPS validation blocking loopback (127.0.0.1, ::1), cloud metadata (169.254.169.254), and RFC 1918
 *   * Machine-bound PBKDF2 encryption storing tokens in dedicated outpost_configs SQLite table
 *   * Sensitive token masking in UI and logs
 * - React Desktop UI & Workflow Bridges
 *   * Outposts Integration Hub in Settings (OutpostsSettingsPanel.tsx) with live latency diagnostics
 *   * Link Jira Board Modal (LinkJiraModal.tsx) on Kanban Board with pre-sync snapshot confirmation
 *   * Dynamic Kanban workflow columns & Jira issue key badges ([PROJ-102 ↗])
 *   * Artifacts Studio Cloud Export (Publish to Notion, Export to Google Docs)
 * - In-Built Living Document Editor & Artifacts Studio (ArtifactsStudio.tsx)
 *   * Living document workstation supporting PRDs, Architecture RFCs, Sprint Briefs, and Meeting Notes
 *   * Multi-mode authoring: Edit, Split (synchronized live preview), and Preview
 *   * Segregated artifacts.db SQLite engine with FTS5 search index and revision snapshot trees
 * - Friction-Free First-Launch Onboarding Wizard (OnboardingModal.tsx)
 * - Advanced Analytics Workbench (funnels, cohort retention heatmaps, outlier profiling, correlations)
 * - Calibrated Agile Story Decomposer (INVEST atomic slicing with 3x Gherkin scenarios)
 * - Desktop SPA Modernization & Zero-Iframe Architecture (React 19 + TypeScript inside Electron)
 * - Global Spotlight Command Palette (CommandPalette.tsx: Ctrl+K / Cmd+K)
 * - Automated 60-Minute Silent Background Updates (electron-updater)
 */

export const siteConfig = {
  // ==========================================
  // 1. BRAND & IDENTITY
  // ==========================================
  name: 'PM Tool',
  shortName: 'PmT',
  tagline: 'Local-First Product Management Workspace, Living Artifacts Studio & Connection Outposts',
  description:
    'A zero-iframe React 19 desktop SPA that turns organizational knowledge and local data into publication-grade PM deliverables. Decoupled via Hexagonal Architecture with 100% local parity, PM Tool integrates Atlassian Jira Cloud two-way sync, Notion & Google Docs publishing, pre-sync safety backup snapshots, in-built Living Artifacts Studio, conversion funnels and cohort retention heatmaps in the Analytics Workbench, calibrated INVEST story decomposer, global Spotlight (Ctrl+K), and Word (.docx) export — running across dedicated local SQLite databases.',

  // ==========================================
  // 2. ACTIVE VERSION & RELEASE METADATA
  // ==========================================
  release: {
    version: 'v2.2.5',
    versionFull: 'v2.2.5 (Codename Outpost & Nexus)',
    badge: 'v2.2.5 STABLE RELEASE',
    releaseDate: 'October 2026',
    buildDate: '2026-10-10',
    channel: 'Stable Channel',
    platform: 'Windows 10/11 (64-bit)',
    statusText: 'Hexagonal Nexus &bull; Jira & Notion Outposts &bull; Pre-Sync Snapshots &bull; v2.2.5 Stable',
    isAirGappedReady: false,
  },

  // ==========================================
  // 3. DOWNLOADS & BINARIES
  // ==========================================
  downloads: {
    installer: {
      fileName: 'PM-Tool-Setup-2.2.5.exe',
      label: 'Download NSIS Setup (.exe)',
      size: '88.1 MB',
      url: 'https://github.com/Pranshul-Chopra/pm_tool/releases/download/v2.2.5/PM-Tool-Setup-2.2.5.exe',
      directDownload: true,
    },
    portable: {
      fileName: 'PM-Tool-2.2.5.exe',
      label: 'Portable Standalone (.exe)',
      size: '81.2 MB',
      url: 'https://github.com/Pranshul-Chopra/pm_tool/releases/download/v2.2.5/PM-Tool-2.2.5.exe',
    },
    sha256: 'f4c2e81d9047b612e5829a03b5190c74f5193c7280ab441091d83c27103ba981',
    gitCloneCommand: 'git clone https://github.com/Pranshul-Chopra/pm_tool.git',
    systemPrerequisites: [
      'Windows 10 / Windows 11 (64-bit)',
      '4 GB RAM minimum (8 GB+ recommended for local Ollama models & tabular analytics)',
      '350 MB Free Storage for application, local databases, and dataset store',
      'Zero mandatory cloud accounts for core local workflows',
    ],
  },

  // ==========================================
  // 4. CREATOR & SOCIAL LINKS
  // ==========================================
  author: {
    name: 'Pranshul Chopra',
    role: 'Engineer & Creator',
    email: 'pranshulchopra@gmail.com',
  },
  socials: {
    github: 'https://github.com/Pranshul-Chopra',
    githubRepo: 'https://github.com/Pranshul-Chopra/pm_tool',
    linkedin: 'https://www.linkedin.com/in/pranshul-chopra-269789371/',
    feedbackForm: 'https://docs.google.com/forms/d/e/1FAIpQLSe8jN6FEH7zdEMFxweuku_0mdwlKUcYE1RTB00NjPMOPY0Xew/viewform?usp=publish-editor',
  },

  // ==========================================
  // 5. NAVIGATION LINKS
  // ==========================================
  navLinks: [
    { name: 'Connection Outposts', href: '#outposts' },
    { name: 'Living Docs Studio', href: '#artifacts-studio' },
    { name: 'Analytics Workbench', href: '#demo' },
    { name: 'Story Decomposer', href: '#decomposer' },
    { name: 'Spotlight (Ctrl+K)', href: '#spotlight' },
    { name: 'Sprint Board', href: '#sprint-board' },
    { name: 'Features', href: '#features' },
    { name: 'Architecture', href: '#architecture' },
    { name: 'Changelog', href: '#evolution' },
  ],

  // ==========================================
  // 6. HERO SECTION CONFIG
  // ==========================================
  hero: {
    pillBadge: 'CONNECTION OUTPOSTS &bull; HEXAGONAL NEXUS &bull; V2.2.5',
    pillVersionTag: 'Windows 10/11 Native',
    headlineMain: 'From Organizational Knowledge & Data',
    headlineAccent: 'to Publication-Grade PM Deliverables.',
    headlineEnd: '',
    subtitle:
      'Zero-iframe React 19 desktop SPA with Hexagonal Architecture ports, Atlassian Jira Cloud two-way sync, Notion & Google Docs publishing, pre-sync safety backup snapshots, in-built Living Document Editor with split preview, advanced dataset analytics (funnels & cohorts), calibrated INVEST story decomposer, global Spotlight (Ctrl+K), and Word (.docx) export — running across dedicated local SQLite databases.',
    notice:
      'Core workflows operate offline with local models (Ollama) and local SQLite storage. Optional connection outposts (Jira, Notion, Google Docs) and cloud AI models (Gemini, OpenAI) are available when configured.',
    specsBadges: [
      { text: 'Hexagonal Nexus & Local Parity', type: 'cpu' },
      { text: 'Jira Cloud Two-Way Sync', type: 'board' },
      { text: 'Pre-Sync Safety Snapshots', type: 'shield' },
      { text: 'Living Artifacts Studio', type: 'file' },
    ],
    // Desktop App Simulator Mockup
    simulator: {
      windowTitle: 'PmT Desktop Shell (React 19 SPA)',
      workspaceTitle: 'Workspace: Core Platform v2.2.5',
      backendHost: '127.0.0.1:5050 [Handshake OK]',
      activeModel: 'Ollama: llama3.2 (Local Mode)',
      localDbPath: '%LOCALAPPDATA%\\PMTool\\artifacts.db & pmtool.db',
      dbStats: 'Hexagonal Nexus • Jira v3 Sync • Notion Bridge • Pre-Sync Snapshots • 4 Isolated DBs',
      shortcut: 'Shortcuts: Ctrl+K Spotlight • Ctrl+4 Docs Studio • Ctrl+2 Jira Board • Ctrl+B Sidebar',
    },
  },

  // ==========================================
  // 7. TECH MARQUEE (Reflecting Real v2.2.5 Capabilities)
  // ==========================================
  techMarquee: [
    'HEXAGONAL ARCHITECTURE NEXUS (PORTS & ADAPTERS)',
    '100% LOCAL PARITY WITH DECOUPLED ADAPTERS',
    'ATLASSIAN JIRA CLOUD REST API V3 OUTPOST',
    'DYNAMIC JIRA BOARD STATUS MAPPING & TRANSITIONS',
    'OUTPOST-AS-DICTATOR STATE SYNCHRONIZATION',
    'PRE-SYNC SAFETY BACKUP SNAPSHOTS (JSON VAULT)',
    '1-CLICK ATOMIC PRE-SYNC STATE RESTORATION',
    'NOTION WORKSPACE OUTPOST (MARKDOWN-TO-BLOCK TRANSFORMER)',
    'GOOGLE DOCS LIVING ARTIFACT PUBLISHING OUTPOST',
    'SSRF DEFENSIVE PERIMETER (ZERO LOCALHOST/METADATA LEAKAGE)',
    'MACHINE-BOUND PBKDF2 CREDENTIAL VAULT & TOKEN MASKING',
    'IN-BUILT LIVING DOCUMENT EDITOR & ARTIFACTS STUDIO',
    'SPLIT-VIEW SYNCHRONIZED MARKDOWN PREVIEW',
    'FOUR-DATABASE SQLITE ARCHITECTURE (ARTIFACTS.DB)',
    'SUB-MILLISECOND ARTIFACT FTS5 SEARCH & REVISION TREES',
    'FRICTION-FREE FIRST-LAUNCH ONBOARDING WIZARD',
    '1-CLICK AI COPILOT CHAT-TO-ARTIFACT PROMOTION',
    'LIVING PRD DIRECT SPRINT DECOMPOSITION BRIDGE',
    'ADVANCED ANALYTICS WORKBENCH (FUNNELS, COHORTS, CORRELATIONS)',
    'MULTI-STAGE CONVERSION FUNNEL & DROP-OFF ANALYZER',
    'PERIOD-OVER-PERIOD COHORT RETENTION HEATMAP MATRIX',
    'STATISTICAL DISTRIBUTIONS & Z-SCORE OUTLIER PROFILING',
    'PAIRWISE PEARSON FEATURE CORRELATION MATRIX',
    'CALIBRATED INVEST STORY DECOMPOSER & PRE-COMMIT REVIEW',
    'MULTI-SCENARIO GHERKIN ACCEPTANCE CRITERIA (HAPPY, NEGATIVE, EDGE)',
    'DESKTOP SPA MODERNIZATION (REACT 19 ZERO-IFRAME)',
    'GLOBAL SPOTLIGHT COMMAND PALETTE (CTRL+K / CMD+K)',
    'UNIVERSAL KEYBOARD SHORTCUTS (CTRL+1-6, CTRL+B, ESC)',
    'INTERACTIVE KPI & CHART DASHBOARD (ADDWIDGETMODAL)',
    'NATIVE SQLITE (.DB, .SQLITE3) DATASET MATERIALIZATION',
    'SAFE READ-ONLY SQL SANDBOX (5-LAYER DEFENSE-IN-DEPTH)',
    '1-CLICK MICROSOFT WORD (.DOCX) & MARKDOWN EXPORT',
    'AUTOMATED 60-MIN SILENT BACKGROUND UPDATES (ELECTRON-UPDATER)',
    'ZERO MANDATORY CLOUD ACCOUNTS',
  ],

  // ==========================================
  // 8. PRODUCT SHOWCASE (ACTUAL MODULES IN APP)
  // ==========================================
  showcaseModules: [
    {
      id: 'outposts-nexus',
      name: 'Connection Outposts & Jira Sync',
      tag: 'New in v2.2.5',
      headline: 'Two-way Atlassian Jira Cloud sync, Notion publishing, and pre-sync safety backup snapshots.',
      description:
        'Bridge local-first productivity with external enterprise ecosystems while retaining 100% local parity. Features Jira Cloud REST API v3 two-way sprint backlog synchronization with dynamic workflow column remapping, living document publishing to Notion workspaces and Google Docs, automated pre-sync safety backup snapshots (%LOCALAPPDATA%\\PMTool\\backups) with 1-click restore, and an SSRF-hardened PBKDF2 credential vault.',
    },
    {
      id: 'artifacts-studio',
      name: 'Living Document Editor & Artifacts Studio',
      tag: 'Living Docs (v2.2)',
      headline: 'Author living PRDs, Architecture RFCs, and Sprint Briefs with split preview and revision history.',
      description:
        'In-built living document workstation (PranshulOS style) supporting Edit, Split (side-by-side synchronized preview), and Preview modes. Features a rich markdown toolbar, built-in templates (Standard PRD, Architecture RFC, Sprint Brief), debounced auto-save with live word count, snapshot version trees with instant rollback, and direct 1-click bridges to the Agile Story Decomposer and RAG Knowledge Base.',
    },
    {
      id: 'analytics-workbench',
      name: 'Advanced Analytics Workbench',
      tag: 'Analytics Engine (v2.1)',
      headline: 'Conversion funnels, cohort retention heatmaps, correlation grids, and statistical outlier detection.',
      description:
        'Transform raw business data into deep executive intelligence. Features 5 specialized analytical instruments: Multi-Stage Conversion Funnel with step-to-step drop-off percentages, Period-over-Period Cohort Retention matrix heatmaps, Parametric & Non-Parametric Distribution profiling with Tukey IQR & Z-score outlier flagging, Pairwise Pearson Correlation coefficient matrix, and Linear Trendline forecasting.',
    },
    {
      id: 'story-decomposer',
      name: 'Calibrated Story Decomposer',
      tag: 'Agile Engine (v2.1)',
      headline: 'INVEST atomic story slicing with multi-scenario Gherkin criteria and live pre-commit preview.',
      description:
        'Re-engineered decomposition engine enforcing INVEST principles, target persona filtering (End-User, Admin, API Consumer, DevOps), and 3 distinct Given/When/Then scenarios (Happy Path, Negative/Validation, Boundary/Resilience). Includes an interactive pre-commit approval modal allowing engineers to review, adjust calibrated Fibonacci points (1, 2, 3, 5, 8, 13), and batch-commit directly to the sprint Kanban board.',
    },
    {
      id: 'command-palette',
      name: 'Spotlight Command Palette',
      tag: 'Desktop Engine (v2.0)',
      headline: 'Raycast/Linear-style Spotlight overlay with instant keyboard navigation (Ctrl+K).',
      description:
        'Global command palette overlay accessible from anywhere via Ctrl+K or Cmd+K. Features fuzzy search across workstation views, live database projects, and productivity actions. Includes full keyboard navigation with Arrow keys (↑, ↓), Enter execution, Escape dismissal, and a titlebar trigger badge.',
    },
    {
      id: 'kpi-studio',
      name: 'Interactive KPI & Chart Studio',
      tag: 'Data Studio (v2.0.1)',
      headline: 'Full metric & chart lifecycle with AddWidgetModal and live dataset evaluation.',
      description:
        'Create, customize, and delete live analytical cards and visual distribution charts directly linked to any materialized dataset. Supports KPI Cards (SUM, AVG, COUNT with milestone target variance badges like ▲ +12.5%), Bar Distribution Charts, and Donut Share Breakdown charts with in-place card deletion.',
    },
    {
      id: 'data-studio',
      name: 'Tabular & SQLite Ingestion',
      tag: 'Local Materialization',
      headline: 'Native SQLite database (.db, .sqlite3), Excel, CSV, and JSON materialization.',
      description:
        'Directly ingest and materialize native SQLite databases alongside Excel (.xlsx, .xls via openpyxl), CSV, TSV, and JSON into %LOCALAPPDATA%\\PMTool\\datasets\\analytics_store.db with polymorphic row rendering and a safe 5-layer read-only SQL sandbox.',
    },
    {
      id: 'doc-generator',
      name: 'AI PM Document Generator',
      tag: 'Executive Blueprints',
      headline: 'Interactive 1-click scaffolding for 5 executive PM document templates.',
      description:
        'Scaffold Product Requirement Documents (PRDs), Technical Architecture Specs, Agile Sprint Story Breakdowns, Strategy & KPI Plans, and Executive Briefs with configurable context inputs. Includes styled Word (.docx) export, clean Markdown (.md) download, and 1-click "Save to Docs" Knowledge Base ingestion.',
    },
    {
      id: 'sprint-kanban',
      name: 'Sprint Kanban Studio',
      tag: 'Agile Execution',
      headline: 'Interactive Sprint Kanban board with HTML5 drag-and-drop & Fibonacci estimation.',
      description:
        'Manage sprints across workflow lanes with dynamic status columns mapped from Jira or local defaults. Features optimistic UI updates, background persistence via PATCH /api/tasks/:id, sprint velocity KPIs, and multi-field filtering by project and priority.',
    },
    {
      id: 'auto-updater',
      name: 'Automated Silent Updates & Shell',
      tag: 'Continuous Sync',
      headline: 'Background silent updates every 60 minutes with live sidebar pulse indicator.',
      description:
        'Electron-updater automatically polls GitHub Releases on launch and every 60 minutes in the background. Features a non-intrusive sidebar status indicator with pulse animation, 1-click restart toast notification, and cascading port collision protection (5050–5065).',
    },
  ],

  // ==========================================
  // 9. PHILOSOPHY PILLARS
  // ==========================================
  philosophy: [
    {
      title: 'Hexagonal Nexus & 100% Local Parity',
      subtitle: 'Cloud Outposts without local compromise.',
      description:
        'External platforms like Jira, Notion, and Google Docs connect through clean Hexagonal Architecture ports. Local adapters maintain 100% contract parity, ensuring offline workflows operate with maximum speed and reliability.',
      badge: 'Ports & Adapters',
    },
    {
      title: 'Outpost as Dictator with Pre-Sync Safety Snapshots',
      subtitle: 'Zero data loss during remote state synchronization.',
      description:
        'When connecting external issue trackers, PM Tool guarantees peace of mind: before wiping local tickets to mirror remote Jira status, a full timestamped JSON backup snapshot is written to disk with 1-click atomic restore.',
      badge: 'Safety Snapshots',
    },
    {
      title: 'Empirical Data Science Over Guesswork',
      subtitle: 'Conversion funnels, retention cohorts, and outlier detection.',
      description:
        'Product managers should ground roadmaps in rigorous statistics. PM Tool builds multi-stage funnels, cohort heatmaps, and correlation matrices directly from your SQLite datasets without sending numbers to cloud BI vendors.',
      badge: 'Data Science Workbench',
    },
    {
      title: 'INVEST-Grade Agile Specifications',
      subtitle: 'Atomic stories with multi-scenario Gherkin acceptance.',
      description:
        'Vague user stories stall engineering sprints. PM Tool synthesizes atomic user stories adhering strictly to INVEST criteria, complete with Happy Path, Negative Validation, and Boundary edge-case scenarios calibrated to Fibonacci complexity.',
      badge: 'INVEST Criteria',
    },
    {
      title: 'Local-First Data Sovereignty & SSRF Defense',
      subtitle: 'Your computer is the primary system of record.',
      description:
        'Core operational data resides in local SQLite databases on your hard drive. External outposts enforce strict SSRF defenses blocking loopback, cloud metadata, and private IP leakage with machine-bound token encryption.',
      badge: 'SSRF Hardened',
    },
  ],

  // ==========================================
  // 10. CORE FEATURES MATRIX
  // ==========================================
  featureCategories: [
    { id: 'all', label: 'All Capabilities' },
    { id: 'outposts', label: 'Connection Outposts (v2.2.5)' },
    { id: 'artifacts', label: 'Living Docs & Artifacts (v2.2)' },
    { id: 'analytics', label: 'Advanced Analytics (v2.1)' },
    { id: 'agile', label: 'Agile & Decomposer (v2.1)' },
    { id: 'spa', label: 'Desktop SPA & Spotlight (v2.0)' },
    { id: 'data', label: 'Data Studio & SQLite' },
    { id: 'docs', label: 'Doc Generator & Export' },
    { id: 'knowledge', label: 'Knowledge Base & RAG' },
    { id: 'architecture', label: 'Architecture & Storage' },
    { id: 'security', label: 'Security & Auto-Updates' },
  ],
  features: [
    {
      id: 'jira-sync',
      category: 'outposts',
      title: 'Atlassian Jira Cloud REST API v3 Outpost',
      tagline: 'Two-way sprint backlog synchronization & dynamic status transitions.',
      description:
        'Connects directly with Jira Cloud projects. Dynamically discovers workflow status categories, maps remote columns to local Kanban lanes, pushes tasks with story points and Gherkin acceptance criteria, and synchronizes status transitions.',
      highlight: 'Jira Cloud Sync (v2.2.5)',
    },
    {
      id: 'pre-sync-snapshots',
      category: 'outposts',
      title: 'Pre-Sync Safety Backup Snapshots & Atomic Restore',
      tagline: 'Outpost-as-Dictator model with automated JSON safety backups.',
      description:
        'Never lose local work to remote overwrites. Before syncing with remote Jira boards, PM Tool creates an automated timestamped JSON backup snapshot in %LOCALAPPDATA%\\PMTool\\backups, allowing 1-click atomic restore at any time.',
      highlight: 'Safety Snapshots (v2.2.5)',
    },
    {
      id: 'notion-gdocs-outposts',
      category: 'outposts',
      title: 'Notion & Google Docs Living Artifact Outposts',
      tagline: '1-click cloud publishing for PRDs, RFCs, and sprint briefs.',
      description:
        'Publish living documents directly from Artifacts Studio to Notion databases and Google Docs. Features an automated Markdown-to-Block transformer preserving headings, callouts, tables, and code snippets.',
      highlight: 'Cloud Publishing (v2.2.5)',
    },
    {
      id: 'ssrf-defense',
      category: 'security',
      title: 'SSRF Defensive Perimeter & Credential Vault',
      tagline: 'Hardware-salted PBKDF2 vault & loopback/metadata blocking.',
      description:
        'Hardens external requests by strictly blocking loopback (127.0.0.1, ::1), cloud metadata IPs (169.254.169.254), and private subnets (RFC 1918). Outpost credentials are encrypted on-device via machine-bound PBKDF2 with UI token masking.',
      highlight: 'SSRF Defense (v2.2.5)',
    },
    {
      id: 'hexagonal-ports',
      category: 'architecture',
      title: 'Hexagonal Architecture & 100% Local Parity',
      tagline: 'Decoupled domain core via formal Ports & Adapters contracts.',
      description:
        'Decouples business entities from persistence via TicketTrackerPort, DocumentRepositoryPort, and KnowledgeSourcePort. Local adapters guarantee 100% contract parity, ensuring offline workflows remain fast and deterministic.',
      highlight: 'Hexagonal Nexus (v2.2.5)',
    },
    {
      id: 'artifacts-studio',
      category: 'artifacts',
      title: 'Living Document Editor & Artifacts Studio',
      tagline: 'Multi-mode living document workstation (PranshulOS style).',
      description:
        'Author living PRDs, Architecture RFCs, and Sprint Briefs in Edit, Split (side-by-side synchronized preview), or Preview modes with debounced auto-saving, live word counting, and rich formatting.',
      highlight: 'Artifacts Studio (v2.2)',
    },
    {
      id: 'split-preview',
      category: 'artifacts',
      title: 'Split-View Synchronized Markdown Canvas',
      tagline: 'Side-by-side authoring with synchronized preview rendering.',
      description:
        'Dual-pane editing environment featuring Markdown formatting shortcuts (Headings, Bold, Italic, Tables, Checklists, Code blocks) alongside immediate live styling and table rendering.',
      highlight: 'Split Preview (v2.2)',
    },
    {
      id: 'revision-snapshots',
      category: 'artifacts',
      title: 'Immutable Snapshot Revision History Tree',
      tagline: 'Zero data loss with 1-click version inspection & restoration.',
      description:
        'Automatic revision tree (artifact_versions table) recording document evolutions over time. Inspect historical diffs and restore prior snapshots with zero friction.',
      highlight: 'Revision Trees (v2.2)',
    },
    {
      id: 'onboarding-wizard',
      category: 'spa',
      title: 'First-Launch Onboarding & Setup Wizard',
      tagline: 'Friction-free 3-step project setup, AI probe & hotkey tour.',
      description:
        'Multi-step setup wizard detecting first-time launches to configure initial projects, probe local Ollama connectivity and models, and introduce core keyboard shortcuts.',
      highlight: 'Setup Wizard (v2.2)',
    },
    {
      id: 'chat-to-artifact',
      category: 'artifacts',
      title: '1-Click AI Chat-to-Artifact Promotion Bridge',
      tagline: 'Promote transient assistant responses to living documents.',
      description:
        'Quick promotion button under Copilot chat responses that automatically infers document titles and types, persisting drafts directly into artifacts.db with a toast notification.',
      highlight: 'Copilot Bridge (v2.2)',
    },
    {
      id: 'segregated-artifacts-db',
      category: 'architecture',
      title: 'Segregated Documents Database (artifacts.db)',
      tagline: 'Independent SQLite engine strictly isolating document ASTs.',
      description:
        'Guarantees zero database bloat: all document bodies, markdown ASTs, and revision snapshots reside in %LOCALAPPDATA%\\PMTool\\artifacts.db with SQLite FTS5 search.',
      highlight: 'artifacts.db (v2.2)',
    },
    {
      id: 'funnel-analyzer',
      category: 'analytics',
      title: 'Multi-Stage Conversion Funnel Analyzer',
      tagline: 'Step-to-step drop-offs, relative conversions & lost volume.',
      description:
        'Sequential pipeline tracking across behavioral stages. Automatically computes transition loss percentages, top-of-funnel conversion velocity, and drop-off volume with interactive visual gradient bars.',
      highlight: 'Funnel Engine (v2.1)',
    },
    {
      id: 'cohort-matrix',
      category: 'analytics',
      title: 'Period-over-Period Cohort Retention Matrix',
      tagline: 'MoM, WoW, and DoD cohort retention heatmap matrix.',
      description:
        'Automated cohort construction tracking customer retention across customizable periods. Features dynamic color-coded retention intensity cells and behavioral persistence scoring.',
      highlight: 'Cohort Heatmaps (v2.1)',
    },
    {
      id: 'outlier-stats',
      category: 'analytics',
      title: 'Statistical Distributions & Outlier Detection',
      tagline: 'Parametric percentiles (P50–P99) & Z-score anomaly detection.',
      description:
        'Profiles column distributions with Mean, Median, P25, P75, P90, P99, Std Dev, and IQR. Flags statistical anomalies using Tukey’s fences (1.5 × IQR) and Z-scores (|Z| > 3.0) with live table inspection.',
      highlight: 'Outlier Profiler (v2.1)',
    },
    {
      id: 'correlation-engine',
      category: 'analytics',
      title: 'Pairwise Pearson Correlation Matrix',
      tagline: 'Automated numerical feature correlation grid (r in [-1, 1]).',
      description:
        'Detects hidden dependencies across numerical dataset dimensions. Calculates Pearson correlation coefficients with qualitative classification badges (Strong, Moderate, Weak).',
      highlight: 'Correlation Grid (v2.1)',
    },
    {
      id: 'trend-forecasting',
      category: 'analytics',
      title: 'Linear Trendline & Trajectory Forecasting',
      tagline: 'Time-series linear regression with R² goodness-of-fit.',
      description:
        'Calculates rate-of-change slopes (Δ / period) and intercepts across time dimensions. Projects future metric milestones across configurable forecast horizons.',
      highlight: 'Trajectory Forecast (v2.1)',
    },
    {
      id: 'calibrated-decomposer',
      category: 'agile',
      title: 'Calibrated INVEST Story Decomposer Studio',
      tagline: 'Atomic story slicing with live pre-commit approval modal.',
      description:
        'Decomposes PRDs into independent, testable stories. Features target persona filters (End-User, Admin, API Consumer, DevOps), calibrated Fibonacci sizing (1, 2, 3, 5, 8, 13), and pre-commit batch approval.',
      highlight: 'Decomposer Studio (v2.1)',
    },
    {
      id: 'multi-gherkin-criteria',
      category: 'agile',
      title: 'Multi-Scenario Gherkin Acceptance Criteria',
      tagline: 'At least 3 Given/When/Then scenarios per user story.',
      description:
        'Enforces exhaustive coverage on every synthesized story: Happy Path (standard execution), Validation & Negative Flows (invalid inputs), and Boundary/Resilience edge cases (rate limits, timeouts).',
      highlight: '3x Gherkin Scenarios (v2.1)',
    },
    {
      id: 'desktop-spa-engine',
      category: 'spa',
      title: 'Desktop SPA Modernization (React 19)',
      tagline: 'Zero-iframe unified single-DOM client inside Electron.',
      description:
        'Migrated the entire desktop workstation to React 19 + TypeScript + Tailwind CSS. Decommissioned legacy Jinja2 template bundling from flask.spec, eliminating iframe latencies and enabling instant hardware-accelerated module transitions.',
      highlight: 'React 19 SPA (v2.0)',
    },
    {
      id: 'spotlight-palette',
      category: 'spa',
      title: 'Global Spotlight Command Palette',
      tagline: 'Raycast/Linear-style overlay triggered via Ctrl+K / Cmd+K.',
      description:
        'Keyboard-first command engine with fuzzy search across workstation views, live projects, and productivity actions. Supports keyboard navigation (↑, ↓), Enter execution, Escape dismissal, and titlebar trigger badge.',
      highlight: 'Spotlight Ctrl+K (v2.0)',
    },
    {
      id: 'universal-shortcuts',
      category: 'spa',
      title: 'Universal Keyboard Shortcuts Engine',
      tagline: 'Global application keybindings in App.tsx.',
      description:
        'Instant navigation bindings: Ctrl+K for Spotlight overlay, Ctrl+B to toggle sidebar, Ctrl+1 through Ctrl+6 for direct module switching (Workspace, Board, Data Studio, Knowledge Base, AI Copilot, Settings), and ESC for clean modal dismissal.',
      highlight: 'Universal Keybindings',
    },
    {
      id: 'kpi-widget-crud',
      category: 'data',
      title: 'Interactive KPI & Chart Studio (AddWidgetModal)',
      tagline: 'Full CRUD lifecycle for KPI cards, bar charts, and donut charts.',
      description:
        'Create live analytical cards and visual distribution charts directly linked to any materialized dataset. Includes KPI Cards with aggregation operations (SUM, AVG, COUNT) and milestone target variance badges (▲ +12.5%), dynamic Bar charts, Donut breakdown charts, and in-place card deletion.',
      highlight: 'KPI Studio (v2.0.1)',
    },
    {
      id: 'sqlite-native-ingest',
      category: 'data',
      title: 'Native SQLite Database Ingestion',
      tagline: 'Seamlessly materialize .db, .sqlite, and .sqlite3 files.',
      description:
        'Extends dataset ingestion to directly materialize native SQLite databases alongside Excel (.xlsx, .xls), CSV, TSV, and JSON formats into %LOCALAPPDATA%\\PMTool\\datasets\\analytics_store.db with streaming file-copy and PRAGMA table discovery.',
      highlight: 'SQLite Ingest (v2.0.1)',
    },
    {
      id: 'deletedataset-modal',
      category: 'data',
      title: 'Dark Carbon Dataset Deletion Modal',
      tagline: 'App-themed dialog replacing native window.confirm.',
      description:
        'Unified dataset deletion with the application’s dark carbon modal design (DeleteDatasetModal.tsx), providing table name inspection, row count verification, safety warnings for dropped tables, and smooth transitions.',
      highlight: 'Modal Deletion (v2.0.1)',
    },
    {
      id: 'pm-doc-generator',
      category: 'docs',
      title: 'AI Workspace PM Document Generator',
      tagline: '1-click scaffolding for 5 executive PM document templates.',
      description:
        'Scaffold PRDs, Technical Architecture Specs, Agile Sprint Breakdowns, Product Strategy & KPI Plans, and Executive Briefs with configurable scope, analytical focus, and technical stack inputs directly from the workspace header.',
      highlight: 'Doc Generator (5 Templates)',
    },
    {
      id: 'multi-export-docx-md',
      category: 'docs',
      title: 'Multi-Format Export Subsystem',
      tagline: 'Native Word (.docx) & clean Markdown (.md) generation.',
      description:
        'Backend endpoints POST /api/export/docx and POST /api/export/markdown generate binary Word documents with 1-inch margins, custom metadata tables, Consolas code blocks, and styled headers ready for stakeholder presentation.',
      highlight: 'Word (.docx) & Markdown',
    },
    {
      id: 'silent-updater',
      category: 'security',
      title: 'Automated 60-Minute Silent Background Updates',
      tagline: 'Continuous update lifecycle via electron-updater.',
      description:
        'Automated background polling on launch and every 60 minutes. Non-intrusive live status indicator in Sidebar displays v2.2.5 with pulse animation, presenting UpdaterToast with 1-click "Restart Now" on download.',
      highlight: 'Silent Updater (60m)',
    },
    {
      id: 'sprint-kanban-board',
      category: 'agile',
      title: 'Sprint Kanban Studio with Dynamic Jira Statuses',
      tagline: 'Workflow lanes remapped dynamically to Jira or local defaults.',
      description:
        'Native HTML5 drag-and-drop board with dynamic columns, optimistic UI updates, background persistence via PATCH /api/tasks/:id, Jira issue key deep links, and sprint velocity metrics.',
      highlight: 'Interactive Board',
    },
    {
      id: 'dual-db-v6',
      category: 'architecture',
      title: 'Segregated SQLite Architecture (Schema v8 + artifacts.db)',
      tagline: 'Clean separation across operational, documents, AI context, and analytics stores.',
      description:
        'Operational entities (%LOCALAPPDATA%\\PMTool\\pmtool.db, Schema v8 with outpost_configs), living documents (artifacts.db), volatile AI context (ai_context.db), and isolated materialized datasets (analytics_store.db) in SQLite WAL mode.',
      highlight: 'Isolated SQLite DBs',
    },
    {
      id: 'bm25-search',
      category: 'knowledge',
      title: 'Ranked Full-Text Search (FTS5 BM25)',
      tagline: 'Fast local keyword & term-frequency retrieval over documents.',
      description:
        'Leverages SQLite FTS5 with BM25 ranking for exact terminology, ticket IDs, and technical specifications. Includes an interactive test bench and chunk inspector modal.',
      highlight: 'FTS5 BM25 Engine',
    },
    {
      id: 'port-collision-shield',
      category: 'architecture',
      title: 'Dynamic Cascading Port Collision Resilience',
      tagline: 'Tri-channel handshake discovery across ports 5050 to 5065.',
      description:
        'Cascading port binding sweeps ports 5050 through 5065 to prevent port collisions with other local developer tools, discovered via runtime_port.json and HTTP /api/ping probes.',
      highlight: 'Port Resilience',
    },
  ],

  // ==========================================
  // 11. UNIFIED WORKSPACE (THE 5 STEPS)
  // ==========================================
  executionSteps: [
    {
      step: '01',
      name: 'Connect Data & Docs',
      headline: 'Ingest SQLite DBs, Spreadsheets & Specifications',
      description:
        'Connect local SQLite files (.db, .sqlite3), Excel spreadsheets (.xlsx), CSV datasets, PDF specifications, and Word roadmaps on-device without cloud uploads.',
      example: 'Supported: .sqlite, .db, .xlsx, .csv, .json, .pdf, .docx, .md formats.',
      connector: 'feeds into local FTS5 index & analytics_store.db',
    },
    {
      step: '02',
      name: 'Advanced Analytics Workbench',
      headline: 'Conversion Funnels, Cohort Heatmaps & Outliers',
      description:
        'Analyze step-to-step funnel conversions, inspect period-over-period cohort retention heatmaps, profile Z-score statistical outliers, and query data in the safe SQL sandbox.',
      example: 'Evaluated live via tools/analytics_engine.py against analytics_store.db.',
      connector: 'grounds roadmaps and AI synthesis in verified metrics',
    },
    {
      step: '03',
      name: 'Living Artifacts Studio',
      headline: 'Draft PRDs & RFCs with Split Live Preview',
      description:
        'Author living specifications in the Artifacts Studio with side-by-side synchronized preview, debounced auto-save, template scaffolding, and snapshot revision history.',
      example: 'Persisted to artifacts.db with instant FTS5 full-text indexing.',
      connector: 'bridges specifications into agile sprint backlogs & cloud outposts',
    },
    {
      step: '04',
      name: 'Calibrated Story Decomposer',
      headline: 'INVEST Atomic Stories with Pre-Commit Review',
      description:
        'Decompose living PRDs into atomic user stories with 3 distinct Gherkin scenarios (Happy, Negative, Boundary) and calibrated Fibonacci points, reviewing before committing.',
      example: 'Interactive Decomposer Studio Modal with persona filters (3–10 stories).',
      connector: 'batch-commits approved stories to local board or pushes to Jira',
    },
    {
      step: '05',
      name: 'Sprint Execution & Jira Outposts',
      headline: 'Execute on Kanban Board with Pre-Sync Safety Snapshots',
      description:
        'Manage sprints locally or link to Atlassian Jira Cloud with automated pre-sync safety snapshots. Dynamic workflow columns reflect remote status with 1-click rollback.',
      example: 'Pre-sync snapshot created in %LOCALAPPDATA%\\PMTool\\backups before board sync.',
      connector: 'completes the end-to-end data-driven execution loop',
    },
  ],

  // ==========================================
  // 12. ARCHITECTURE LAYERS
  // ==========================================
  architectureLayers: [
    {
      id: 'shell',
      title: 'Tier 1: Desktop SPA Shell & Spotlight Command Engine',
      tech: 'Electron 44 &bull; React 19 SPA &bull; TypeScript &bull; CommandPalette.tsx',
      latency: 'Zero-Iframe Single-DOM',
      summary: 'Single-DOM React 19 desktop client with Spotlight Command Palette (Ctrl+K), universal keyboard shortcuts (Ctrl+1–6, Ctrl+B), automated 60-min background updates, and Dark Carbon ErrorBoundary crash resilience.',
      specs: [
        'Zero-iframe architecture: React 19 single-DOM eliminating legacy Jinja2 template latency',
        'Spotlight Command Palette (Ctrl+K / Cmd+K): fuzzy search across views, projects, and actions',
        'Universal shortcuts: Ctrl+1–6 direct view switcher, Ctrl+B sidebar toggle, ESC modal dismissal',
        'electron-updater: automated 60-min silent background polling with live sidebar pulse indicator',
        'Dark Carbon ErrorBoundary guaranteeing uninterrupted desktop shell stability',
      ],
    },
    {
      id: 'backend',
      title: 'Tier 2: Hexagonal Architecture Nexus & Localhost Backend',
      tech: 'Python Flask 3.x &bull; ports/ & adapters/ &bull; SSRF Perimeter &bull; 127.0.0.1',
      latency: 'Localhost REST Protocol',
      summary: 'Decoupled domain core via TicketTrackerPort, DocumentRepositoryPort, and KnowledgeSourcePort contracts with 100% local parity adapters and cloud connection outposts.',
      specs: [
        'Decoupled domain core via formal Hexagonal Architecture ports (ports/ticket_tracker.py, etc.)',
        '100% local parity adapters (LocalTicketAdapter, LocalArtifactsAdapter, LocalDiskRAGAdapter)',
        'Connection Outposts for Jira Cloud REST API v3, Notion Workspaces, and Google Docs',
        'Strict SSRF defensive perimeter blocking loopback (127.0.0.1, ::1), cloud metadata (169.254.169.254), and RFC 1918',
        'Pre-sync safety backup engine (tools/outposts/snapshot.py) with 1-click atomic restore',
      ],
    },
    {
      id: 'db',
      title: 'Tier 3: Segregated SQLite Storage & Credential Vault (Schema v8)',
      tech: 'SQLite 3 &bull; WAL Journal &bull; outpost_configs &bull; artifacts.db',
      latency: 'Local SSD Operations',
      summary: 'Strictly isolates living documents, operational relational records, outpost credentials, volatile AI context, and materialized business datasets across dedicated SQLite stores.',
      specs: [
        'Documents DB: %LOCALAPPDATA%\\PMTool\\artifacts.db (Living docs, markdown ASTs, artifact_versions snapshots, artifacts_fts FTS5)',
        'Operational DB: %LOCALAPPDATA%\\PMTool\\pmtool.db (Schema v8: tasks with external columns, outpost_configs with encrypted tokens)',
        'Safety Snapshot Store: %LOCALAPPDATA%\\PMTool\\backups\\pre_sync_<provider>_<id>.json',
        'Analytics DB: %LOCALAPPDATA%\\PMTool\\datasets\\analytics_store.db (Materialized tabular & SQLite datasets)',
        'AI Context DB: %LOCALAPPDATA%\\AIContextTool\\ai_context.db (FTS5 BM25 index & tool_runs)',
      ],
    },
    {
      id: 'ai',
      title: 'Tier 4: Hybrid LLM & Calibrated Story Decomposer',
      tech: 'Local Ollama &bull; Optional Gemini API &bull; 8,192 Budget',
      latency: 'Local or Cloud Dispatch',
      summary: 'Routes prompts to local offline models or optional cloud APIs with dataset schema grounding and calibrated INVEST story decomposition.',
      specs: [
        'Detects running Ollama models on localhost:11434 (e.g. Llama 3.2, Mistral, Gemma 2)',
        'Calibrated Story Decomposer: enforces INVEST criteria with 3 distinct Gherkin scenarios per story',
        'Guarded AI context: injects dataset schemas and KPI values without leaking PII or raw rows',
        'Configurable token headroom presets in Settings (Eco, Balanced, Max) with Gemini safety clamping',
      ],
    },
  ],

  // ==========================================
  // 13. PRIVACY & SAAS COMPARISON MATRIX
  // ==========================================
  comparisonRows: [
    {
      feature: 'External Trackers & Sync Safety',
      pmtool: 'Hexagonal Outposts (Jira Cloud v3): 100% local parity, dynamic status columns, and automated pre-sync safety backup snapshots with 1-click restore',
      cloud: 'Tightly coupled cloud silos; overwriting or re-syncing often destroys local state with no pre-sync rollback mechanism',
    },
    {
      feature: 'Living Document Authoring & Publishing',
      pmtool: 'Built-in Artifacts Studio with split preview & revision history; 1-click cloud publishing to Notion & Google Docs',
      cloud: 'Requires third-party cloud wikis (Notion, Confluence) with per-user subscription lock-in and remote document storage',
    },
    {
      feature: 'Dataset Analytics & Funnels',
      pmtool: 'Built-in Advanced Analytics Workbench: Funnels, Cohort Retention Heatmaps, Outliers, Correlations',
      cloud: 'Requires third-party SaaS BI subscriptions (Mixpanel, Amplitude, Tableau Cloud, Datadog)',
    },
    {
      feature: 'Agile Story Decomposition',
      pmtool: 'Calibrated INVEST story decomposer with 3x Gherkin scenarios & pre-commit review into SQLite or Jira',
      cloud: 'Basic AI wrappers without calibrated Fibonacci sizing, Gherkin criteria, or pre-commit approval modals',
    },
    {
      feature: 'Desktop Architecture & Speed',
      pmtool: 'Zero-iframe React 19 SPA inside Electron with instant hardware-accelerated transitions',
      cloud: 'Heavy web browser apps or multi-iframe wrappers with network rendering lag',
    },
    {
      feature: 'Keyboard Navigation & Spotlight',
      pmtool: 'Built-in Spotlight Command Palette (Ctrl+K) & universal keybindings (Ctrl+1–6, Ctrl+B)',
      cloud: 'Inconsistent shortcuts across multiple SaaS tools, browser tab hopping',
    },
    {
      feature: 'Database & Dataset Ingestion',
      pmtool: 'Native SQLite (.db, .sqlite3), Excel (.xlsx), CSV, and JSON into isolated local store',
      cloud: 'Requires uploading company data to remote cloud warehouses or SaaS storage',
    },
    {
      feature: 'PM Document Generation & Templates',
      pmtool: 'Built-in 1-click Document Generator with 5 structured PM templates (PRD, Tech Spec, Breakdown, KPI Plan, Brief)',
      cloud: 'Fragmented across Notion AI, Google Docs, Confluence AI, or separate paid add-on plugins',
    },
    {
      feature: 'Document Export & Formatting',
      pmtool: '1-click Microsoft Word (.docx) with custom headers & metadata tables, plus clean Markdown (.md) and HTML',
      cloud: 'Export often locks into proprietary cloud canvases or strips formatting during PDF export',
    },
    {
      feature: 'Credential Storage & Egress Security',
      pmtool: 'Machine-bound PBKDF2 encryption in local SQLite; strict SSRF defenses blocking loopback and cloud metadata',
      cloud: 'Credentials held in vendor clouds; risk of server-side data egress or multi-tenant credential leaks',
    },
    {
      feature: 'Subscription Model',
      pmtool: 'No per-seat subscription for PM Tool ($0 open-source)',
      cloud: 'Recurring subscription pricing with per-user tiers; compare terms individually',
    },
    {
      feature: 'AI Model Execution & Data Egress',
      pmtool: 'Local Ollama mode runs entirely on-device; cloud models (Gemini) are optional',
      cloud: 'Cloud-based AI features send prompt data to external providers based on vendor terms',
    },
  ],

  // ==========================================
  // 14. DESIGN PHILOSOPHY TENETS
  // ==========================================
  designTenets: [
    {
      title: 'Hexagonal Nexus: Cloud Outposts Without Local Compromise',
      desc: 'Integrating with Jira, Notion, or Google Docs should never compromise local execution speed or create a hard internet dependency. Hexagonal ports guarantee 100% local adapter parity, while pre-sync safety backup snapshots prevent accidental data destruction.',
    },
    {
      title: 'Living Documents as Core Operating Primitives',
      desc: 'Requirements and architecture specs should not gather dust in static PDFs or remote cloud wikis. In PM Tool, living documents reside directly inside your workstation with snapshot revision trees, live markdown previews, and instant bridges into sprint backlogs.',
    },
    {
      title: 'Empirical Data Science Over Guesswork',
      desc: 'Great product decisions require numbers, not intuition alone. With built-in conversion funnels, cohort heatmaps, and correlation matrices, PM Tool puts professional analytical instruments directly at your fingertips.',
    },
    {
      title: 'INVEST-Grade Atomic Specifications',
      desc: 'Engineering teams need crisp, unambiguous requirements. Enforcing INVEST criteria, calibrated Fibonacci points, and 3 distinct Gherkin scenarios per story guarantees smooth sprint handoffs.',
    },
    {
      title: 'Local Control as a Foundational Default',
      desc: 'Your strategic roadmaps, draft requirements, executive briefs, business metrics, and sprint tickets should remain under your control by default. Core indexing, analytics storage, and backlog management run locally without mandatory remote accounts.',
    },
  ],

  // ==========================================
  // 15. RELEASES & ROADMAP TIMELINE (Reflecting Real History)
  // ==========================================
  releases: [
    {
      version: 'v2.2.5',
      badge: 'CURRENT STABLE RELEASE',
      title: 'Connection Outposts, Hexagonal Architecture Nexus & Pre-Sync Safety Snapshots',
      tagline: 'Atlassian Jira Cloud REST API v3 sync, Notion & Google Docs bridge, Pre-Sync safety snapshots, and SSRF-hardened credential vault.',
      date: 'Oct 2026',
      decisionRationale:
        'Bridging PM Tool’s local-first architecture with enterprise cloud ecosystems without compromising data sovereignty or local execution speed. Decoupled domain operations via Hexagonal Architecture (TicketTrackerPort, DocumentRepositoryPort, KnowledgeSourcePort) with 100% contract parity local adapters. Built bidirectional Jira Cloud REST API v3 backlog synchronization with dynamic workflow columns, living PRD publishing to Notion workspaces and Google Docs, automated pre-sync safety backup snapshots with 1-click atomic restore, and a robust SSRF defensive perimeter with machine-bound PBKDF2 credential vaulting.',
      highlights: [
        'Hexagonal Ports & Adapters Nexus (ports/ & adapters/) decoupling domain logic from persistence with 100% local parity',
        'Atlassian Jira Cloud REST API v3 Outpost (JiraTicketAdapter) supporting dynamic status mapping, issue pushing, and transitions',
        'Notion Workspace Outpost (NotionDocumentAdapter) with automated Markdown-to-Block transformer for living documents',
        'Google Docs Export Outpost (GDocsDocumentAdapter) enabling 1-click cloud publishing from Artifacts Studio',
        'Outpost-as-Dictator Pre-Sync Safety Backup Engine (tools/outposts/snapshot.py) creating timestamped JSON snapshots before board wipes',
        '1-Click Atomic Restore (POST /api/projects/:id/restore-snapshot) reversing external synchronization overwrites instantly',
        'SSRF Defensive Perimeter (tools/outposts/security.py) strictly blocking loopback (127.0.0.1, ::1), cloud metadata (169.254.169.254), and RFC 1918 subnets',
        'Machine-Bound PBKDF2 Credential Vault & UI Token Masking storing outpost secrets in dedicated SQLite outpost_configs table',
        'Outposts Integration Hub (OutpostsSettingsPanel.tsx in Settings) with live latency diagnostics testbench',
        'Link Jira Board Modal (LinkJiraModal.tsx) on Kanban Board with pre-sync safety backup confirmation and dynamic column remapping',
        'Task card visual Jira badges with deep links ([PROJ-102 ↗]) and remote status tracking',
      ],
      isCurrent: true,
    },
    {
      version: 'v2.2.0',
      badge: 'SHIPPED',
      title: 'Living Document Editor, Artifacts Studio & First-Launch Setup Wizard',
      tagline: 'In-built living document editor (PranshulOS style), split-view markdown canvas, dedicated artifacts.db, and onboarding wizard.',
      date: 'Oct 2026',
      decisionRationale:
        'Elevating PM Tool from prompt-and-export into a permanent living document operating environment. Built the Artifacts Studio in Docs View with Edit, Split (side-by-side synchronized preview), and Preview modes, rich markdown formatting toolbars, and template scaffolding. Isolated all document bodies, markdown ASTs, and revision snapshots into a dedicated artifacts.db SQLite engine with FTS5 sub-millisecond search to eliminate database bloat. Added a friction-free 3-step First-Launch Onboarding Wizard with local Ollama probing, and 1-click Copilot chat-to-artifact promotion.',
      highlights: [
        'Artifacts Studio in Docs View (ArtifactsStudio.tsx) with Edit, Split (synchronized live preview), and Preview modes',
        'Segregated Database Architecture: dedicated %LOCALAPPDATA%\\PMTool\\artifacts.db strictly isolating document bodies and revisions',
        'Sub-millisecond full-text search powered by SQLite FTS5 index (artifacts_fts)',
        'Immutable Snapshot Revision History Tree (artifact_versions) with 1-click inspection and historical restoration',
        'Built-in Living Document Templates: Product Requirement Document (PRD), Architecture RFC, Sprint Brief, and Blank',
        'Debounced Auto-Save Engine with live status indicators ("All changes saved" / "Saving...") and live word counter',
        'Multi-Format Export Engine: 1-click client-side export to Microsoft Word (.docx), Markdown (.md), and styled HTML',
        'Direct 1-Click Bridge to Agile Decomposer (DecomposerModal.tsx) synthesizing INVEST stories straight from living document text',
        'Direct 1-Click Bridge to vectorize and ingest living documents into RAG Knowledge Base',
        'First-Launch Onboarding Wizard (OnboardingModal.tsx) guiding initiative setup, live Ollama probe, and keyboard shortcut tour',
        'AI Copilot 1-Click "Save as Living Artifact" in ChatView.tsx promoting transient answers into permanent documents',
      ],
      isCurrent: false,
    },
    {
      version: 'v2.1.0',
      badge: 'SHIPPED',
      title: 'Advanced Analytics Workbench & Calibrated Agile Story Decomposer',
      tagline: 'Multi-stage conversion funnels, cohort retention heatmaps, correlation matrix, statistical outlier profiling, and INVEST atomic story decomposition with live pre-commit preview.',
      date: 'Oct 2026',
      decisionRationale:
        'Elevating PM Tool from qualitative requirement drafting to deep empirical data science and rigorous agile engineering. Implemented the Advanced Analytics Workbench in Data Studio (conversion funnels with step-to-step drop-offs, cohort retention matrix heatmaps, statistical outlier detection via Tukey IQR and Z-scores, Pearson correlation grids, and linear regression forecasting) and completely overhauled the PRD-to-Story Decomposer with INVEST principles, 3 distinct Gherkin scenarios per story, calibrated Fibonacci point sizing, and an interactive pre-commit approval studio modal.',
      highlights: [
        'Advanced Analytics Workbench (AdvancedAnalyticsWorkbench.tsx & tools/analytics_engine.py) in Data Studio',
        'Multi-Stage Conversion Funnel with step-to-step drop-offs, top-of-funnel relative conversion, and lost volume calculations',
        'Period-over-Period Cohort Retention Matrix Heatmap with automated MoM, WoW, and DoD cohort construction',
        'Parametric & Non-Parametric Statistical Profiling: Percentiles (P25, P50, P75, P90, P99), Standard Deviation, and IQR',
        'Statistical Outlier Detection leveraging Tukey\'s IQR fences (1.5x IQR) and Z-Scores (|Z| > 3.0)',
        'Pairwise Feature Correlation Matrix calculating Pearson coefficients (r in [-1, 1]) across numerical dimensions',
        'Linear Trendline & Trajectory Forecasting with slope rates and R^2 goodness-of-fit projections',
        'Overhauled Story Decomposer (DecomposerModal.tsx & tools/story_decomposer.py) enforcing INVEST atomic story slicing',
        'Strict Multi-Scenario Gherkin Acceptance Criteria: Happy Path, Validation & Negative Flows, and Boundary/Resilience edge cases',
        'Calibrated Fibonacci point estimation (1, 2, 3, 5, 8, 13) based on architectural complexity and schema impact',
        'Live Pre-Commit Review Studio allowing engineers to inspect, adjust story points, and batch-commit approved stories to sprint backlog',
      ],
      isCurrent: false,
    },
    {
      version: 'v2.0.1',
      badge: 'SHIPPED',
      title: 'Interactive KPI Dashboard Lifecycle, Native SQLite File Ingestion & Analytical Hardening',
      tagline: 'AddWidgetModal full CRUD, 3 widget types (kpi_card, bar_chart, donut_chart), native .db ingestion, and Dark Carbon dialogs.',
      date: 'Oct 2026',
      decisionRationale:
        'Empowering product managers to build customized, living KPI metric dashboards directly from their datasets without manual code or browser dialogs. Implemented AddWidgetModal with full CRUD for KPI cards, bar charts, and donut charts, extended ingestion to native SQLite databases (.db, .sqlite, .sqlite3), replaced browser alerts with DeleteDatasetModal, hardened polymorphic table row rendering, and fixed the story decomposer gateway signature.',
      highlights: [
        'Interactive KPI Dashboard Studio (AddWidgetModal.tsx) with full metric & chart CRUD lifecycle and in-place card deletion',
        'Three supported widget types: KPI Cards (kpi_card with target milestone variance badges ▲ +12.5%), Bar Distribution Charts (bar_chart), and Donut Share Breakdown (donut_chart)',
        'Live evaluation engine: compute_widget_data executed against analytics_store.db with PRAGMA validations and AST SQL inspection',
        'Native SQLite Database Ingestion: materialize .db, .sqlite, and .sqlite3 files alongside Excel, CSV, TSV, and JSON formats',
        'App-Themed Dataset Deletion Modal (DeleteDatasetModal.tsx) replacing browser-native window.confirm with dark carbon aesthetic',
        'Polymorphic Row Rendering in StudioView.tsx supporting both array-shaped and object-shaped SQL query result sets',
        'Story Decomposer Gateway Resilience: fixed call_llm() signature parameter in tools/story_decomposer.py restoring 1-click breakdown',
        'Automated 60-minute silent background updates polling and verified zero-vulnerability AST query sandbox',
      ],
      isCurrent: false,
    },
    {
      version: 'v2.0.0',
      badge: 'SHIPPED',
      title: 'Desktop SPA Modernization, Global Spotlight Command Palette & Zero-Iframe Architecture',
      tagline: 'React 19 single-DOM migration, Ctrl+K Raycast/Linear-style command engine, and universal keyboard shortcuts.',
      date: 'Oct 2026',
      decisionRationale:
        'Eliminating desktop latency and friction once and for all. Migrated the entire desktop client from legacy multi-frame Jinja2 templates to a single-DOM React 19 + TypeScript + Tailwind CSS SPA inside Electron. Introduced a global Spotlight Command Palette (Ctrl+K / Cmd+K), universal application keybindings (Ctrl+1–6, Ctrl+B, ESC), automated 60-minute silent background updates, and streamlined workspace view.',
      highlights: [
        'Single Page Application (SPA) Complete: migrated entire desktop client to single-DOM React 19 + TypeScript + Tailwind CSS inside Electron',
        'Decommissioned legacy Jinja2 templates bundling from flask.spec, trimming bundle overhead and guaranteeing zero iframe latency',
        'Global Spotlight Command Palette (CommandPalette.tsx) triggered via Ctrl+K / Cmd+K with fuzzy search across views, projects, and actions',
        'Keyboard-driven palette navigation with Arrow keys (↑, ↓), Enter execution, Escape dismissal, and Titlebar trigger badge',
        'Universal Keyboard Shortcuts Engine (App.tsx): Ctrl+K (Spotlight), Ctrl+B (Sidebar), Ctrl+1–6 (Direct module switching), ESC (Modal dismissal)',
        'Fully automated silent background updates polling every 60 minutes via electron-updater with live sidebar pulse indicator',
        'Workspace Overview Streamlining (HomeView.tsx): removed redundant launchpad grid for direct initiative and story viewing',
      ],
      isCurrent: false,
    },
    {
      version: 'v1.5.0',
      badge: 'SHIPPED',
      title: 'AI PM Document Generator, Multi-Format Export Subsystem & Zero-Crash Resilience',
      tagline: '5 executive PM templates, Word (.docx) & Markdown export, action toolbar, and hardened markdown rendering.',
      date: 'Oct 2026',
      decisionRationale:
        'Empowering product managers to go from conversation to publication-grade deliverables seamlessly. Introduced an interactive 1-click Document Generator modal scaffolding 5 structured templates, native Microsoft Word (.docx) export with custom metadata tables, clean Markdown (.md) download, quick action toolbars under all responses (including 1-click "Save to Docs" and "Decompose"), and zero-crash markdown regex hardening with shell ErrorBoundary.',
      highlights: [
        'AI Workspace PM Document Generator (DocumentGeneratorModal.tsx) accessible via "+ Generate Document"',
        'Scaffolds 5 executive-ready templates: PRD, Technical Architecture Spec, Agile Story Breakdown, Product Strategy & KPI Plan, and Executive Brief',
        'Configurable contextual inputs: Title, Project Scope, Analytical Focus directive, Requirements Context, and Technical Stack constraints',
        'Multi-Format Export Subsystem (POST /api/export/docx with python-docx) with custom margins, metadata tables, code blocks, and styled headers',
        'Clean Markdown Export (POST /api/export/markdown) for direct wiki and git documentation synchronization',
        'Assistant Response Quick Action Toolbar under every message: Copy Markdown, Word DOCX, Markdown file, Save to Docs, and Decompose to Kanban',
        '1-Click "Save to Docs" immediately indexes generated documents into project Knowledge Base and SQLite FTS5 for grounded RAG',
        'Zero-Crash Resilience: non-capturing group regex conversion in MarkdownContent.tsx preventing undefined match exceptions',
        'Dark Carbon ErrorBoundary (ErrorBoundary.tsx) in application shell guaranteeing desktop stability against transient rendering errors',
      ],
      isCurrent: false,
    },
    {
      version: 'v1.4.0',
      badge: 'SHIPPED',
      title: 'Data Studio, Business Dashboards & Safe Read-Only SQL Sandbox',
      tagline: 'Excel/CSV tabular ingestion, pure SVG KPI charts, and guarded AI grounding.',
      date: 'Oct 2026',
      decisionRationale:
        'Empowering product managers to ground roadmaps and PRDs in real tabular business data without cloud uploads. Built an on-device Data Studio engine for Excel and CSV ingestion into an isolated analytics store, pure SVG KPI charts with target comparisons, a 5-layer defended read-only SQL sandbox, and the /data slash command.',
      highlights: [
        'Data Studio & Business Dashboard Engine (data_engine.py & /dashboard route) with custom KPI metrics',
        'Multi-format tabular ingestion: Excel (.xlsx, .xls via openpyxl), CSV, TSV, JSON, and SQLite',
        'Automatic column schema discovery, affinity type inference, and batch materialization in analytics_store.db',
        'Configurable KPI aggregation cards (COUNT, SUM, AVG, MIN, MAX) with target comparisons and delta trend badges',
        'Pure responsive SVG chart components: Vertical Bar charts with hover tooltips and Donut charts with breakdown shares',
        'Safe Read-Only SQL Sandbox with 5-layer defense: blocks semicolons, statement whitelist, mutation blacklist, LIMIT 100 ceiling, and mode=ro URI driver enforcement',
        'Guarded AI context grounding: dynamically provides dataset schemas and live KPIs to Copilot without PII or raw row leaks',
        'Dedicated /data slash command in chat input for executive analytical briefs and KPI health checks',
        'Database Schema Migration v6 (db.py) adding data_sources, dashboards, and dashboard_widgets tables',
      ],
      isCurrent: false,
    },
    {
      version: 'v1.3.0',
      badge: 'SHIPPED',
      title: 'Interactive Sprint Kanban Board & PRD-to-Story Decomposer',
      tagline: 'Agile execution engine, Fibonacci story points, and automated breakdown.',
      date: 'Oct 2026',
      decisionRationale:
        'Moving from static task lists to a fully interactive agile sprint workflow. Built an interactive Kanban board with HTML5 drag-and-drop, sprint velocity metrics, and an automated PRD-to-Story Decomposer tool (/breakdown) that creates testable user stories with Fibonacci points in SQLite.',
      highlights: [
        'Sprint Kanban Studio (board.html) with 4 workflow lanes: Backlog, In Progress, Blocked, Completed',
        'Native HTML5 drag-and-drop mechanics with optimistic UI updates and PATCH /api/tasks/:id persistence',
        'Sprint KPI metrics header: Total Tasks, In-Flight items, Blockers alert, and Velocity (% Done)',
        'Automated PRD-to-Story Decomposer tool (tools/story_decomposer.py & /breakdown slash command)',
        'Generates 4–8 discrete Agile user stories with Given/When/Then acceptance criteria and Fibonacci points',
        'Database Schema Migration v5 (db.py) adding story_points, acceptance_criteria, and assignee columns',
      ],
      isCurrent: false,
    },
    {
      version: 'v1.2.0',
      badge: 'SHIPPED',
      title: 'In-App Auto-Updating, PmT Brand Identity & Slash Command Studio',
      tagline: 'electron-updater delta sync, 8,192 token budget, and 30k word summarizer.',
      date: 'Oct 2026',
      decisionRationale:
        'Delivered seamless background updating from GitHub Releases, expanded the LLM generation budget to 8,192 tokens for exhaustive PRDs, and introduced interactive button-like slash command pill containers.',
      highlights: [
        'Integrated electron-updater with GitHub Releases for background delta updates using .blockmap diffs',
        'Bespoke PmT brand identity with off-white P and warm amber-orange mT on dark squircle container',
        'Interactive button-like slash command pill container (#active-command-pill) inside chat input',
        'Deterministic Document Summarizer tool (tools/summarizer.py) with 30,000 word source document budget',
        'Maximum output token budget raised to 8,192 tokens across Ollama, Gemini, and OpenAI gateways',
        'Documents table dual scrollbars (horizontal & vertical) with sticky headers for compact screens',
        'Cascading port collision resilience dynamically sweeping ports 5050 through 5065',
      ],
      isCurrent: false,
    },
    {
      version: 'v1.1.0-mvp',
      badge: 'SHIPPED',
      title: 'Local-First RAG Subsystem & Document Knowledge Base',
      tagline: 'SQLite FTS5 BM25 search engine and Word (.docx) document exporter.',
      date: 'Oct 2026',
      decisionRationale:
        'Added on-device document ingestion and search without cloud vector service dependencies. Allowed product managers to ground AI prompts in local company documentation.',
      highlights: [
        'Deep multi-format file parsers for .pdf (pypdf), .docx (python-docx), .md, .txt, .csv, and .json',
        'Section-aware sliding-window chunker preserving markdown heading hierarchies and sentence boundaries',
        'SQLite FTS5 full-text search with Porter stemming and BM25 relevance ranking scoring',
        'Knowledge Base interface (documents.html) with test search bench and chunk inspector modal',
        'PRD Document Generator (tools/document_generator.py) converting markdown specs to styled Word (.docx)',
        '5 Enterprise Project presets (SaaS Hub, AI Copilot, Mobile App, Security IAM, High-Scale Infra)',
      ],
      isCurrent: false,
    },
    {
      version: 'v1.0.0-mvp',
      badge: 'SHIPPED',
      title: 'Initial Foundation & Local-First Desktop Architecture',
      tagline: 'Electron 44 shell, local Flask backend, and SQLite WAL storage.',
      date: 'Oct 2026',
      decisionRationale:
        'Established the core desktop architecture: a sandboxed Electron Chromium window managing a headless local Python Flask backend on 127.0.0.1 with SQLite write-ahead logging.',
      highlights: [
        'Sandboxed Electron window with custom titlebar and child process lifecycle management',
        'Headless Flask 3.x backend bound strictly to 127.0.0.1 with Origin and Sec-Fetch-Site validation',
        'SQLite WAL connection pool at %LOCALAPPDATA%\\PMTool\\pmtool.db with schema migration tracking',
        'Unified LLM Gateway (llm/gateway.py) auto-routing between local Ollama and Google Gemini',
        'Local authenticated secret encryption using PBKDF2-HMAC-SHA256 and keystream',
      ],
      isCurrent: false,
    },
  ],

  // ==========================================
  // 16. NEXT HORIZON R&D
  // ==========================================
  nextHorizon: [
    {
      title: 'Team Workspaces & Isolated Project Vaults (v2.3)',
      desc: 'Partitioned SQLite storage namespaces per project workspace with fast workspace switcher and contextual AI personas.',
    },
    {
      title: 'Encrypted Workspace Portability (.pmvault)',
      desc: 'Zero-trust AES-256-GCM compressed export packages containing project records, decision logs, artifacts, and local embeddings.',
    },
    {
      title: 'Cross-Project Knowledge Scoping',
      desc: 'Strict RAG context guardrails scoping vector retrieval and FTS5 keyword indexing to active project vault boundaries.',
    },
  ],
};

export default siteConfig;
