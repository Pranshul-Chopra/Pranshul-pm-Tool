/**
 * PM Tool — Central Site & Release Configuration
 * 
 * Accurately reflects the actual state of the application (v1.4.0):
 * - Data Studio & Business Dashboard Engine (data_engine.py & /dashboard)
 * - Multi-Format Tabular Ingestion (.xlsx, .xls via openpyxl, .csv, .tsv, .json, .db)
 * - Isolated Local Materialization in %LOCALAPPDATA%\PMTool\datasets\analytics_store.db
 * - Custom User-Defined KPI Metrics & Pure SVG Responsive Charts (Bar, Donut, Tables)
 * - Safe Read-Only SQL Sandbox with 5-Layer Defense-in-Depth
 * - Guarded AI Contextual Grounding & /data Slash Command
 * - Database Schema Migration v6 (db.py: data_sources, dashboards, dashboard_widgets)
 * - Interactive Sprint Kanban Board with HTML5 drag-and-drop & Fibonacci points (v1.3.0)
 * - Automated PRD-to-Story Decomposer Tool (/breakdown & /api/tools/breakdown)
 * - RAG-Grounded AI Copilot with interactive slash command pill container & 8,192 token output
 * - Local-First Knowledge Base with SQLite FTS5 BM25 search & multi-format parsers
 * - In-App Auto-Updating via electron-updater & GitHub Releases pipeline
 * - Bespoke PmT brand identity & multi-resolution desktop icons
 * - Three-database local storage segregation (pmtool.db, ai_context.db, analytics_store.db)
 * - Dynamic cascading port collision resilience (5050 through 5065)
 */

export const siteConfig = {
  // ==========================================
  // 1. BRAND & IDENTITY
  // ==========================================
  name: 'PM Tool',
  shortName: 'PmT',
  tagline: 'Local-First Product Management Workspace & Data Studio',
  description:
    'From organizational knowledge and tabular data to actionable product decisions. Ingest business spreadsheets, query local datasets in a safe SQL sandbox, draft structured PRDs with document grounding, decompose requirements into testable Agile stories with Fibonacci points, and manage sprint backlogs — from one native Windows desktop workstation.',

  // ==========================================
  // 2. ACTIVE VERSION & RELEASE METADATA
  // ==========================================
  release: {
    version: 'v1.4.0',
    versionFull: 'v1.4.0',
    badge: 'v1.4.0 STABLE RELEASE',
    releaseDate: 'October 2026',
    buildDate: '2026-10-04',
    channel: 'Stable Channel',
    platform: 'Windows 10/11 (64-bit)',
    statusText: 'Local Runtime Initialized &bull; SQLite Schema v6',
    isAirGappedReady: false,
  },

  // ==========================================
  // 3. DOWNLOADS & BINARIES
  // ==========================================
  downloads: {
    installer: {
      fileName: 'PM-Tool-Setup-1.4.0.exe',
      label: 'Download NSIS Setup (.exe)',
      size: '81.2 MB',
      url: 'https://github.com/Pranshul-Chopra/pm_tool/releases/download/v1.4.0/PM-Tool-Setup-1.4.0.exe',
      directDownload: true,
    },
    portable: {
      fileName: 'PM-Tool-1.4.0.exe',
      label: 'Portable Standalone (.exe)',
      size: '74.6 MB',
      url: 'https://github.com/Pranshul-Chopra/pm_tool/releases/download/v1.4.0/PM-Tool-1.4.0.exe',
    },
    sha256: 'e7c10b548d9834e912c9bf13a8637df49e1e938f28876807d91e604f7626927d',
    gitCloneCommand: 'git clone https://github.com/Pranshul-Chopra/pm_tool.git',
    systemPrerequisites: [
      'Windows 10 / Windows 11 (64-bit)',
      '4 GB RAM minimum (8 GB+ recommended for local Ollama models & large spreadsheets)',
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
    { name: 'Data Studio', href: '#demo' },
    { name: 'Sprint Board', href: '#sprint-board' },
    { name: 'Features', href: '#features' },
    { name: 'Pipelines', href: '#pipelines' },
    { name: 'Architecture', href: '#architecture' },
    { name: 'Changelog', href: '#evolution' },
  ],

  // ==========================================
  // 6. HERO SECTION CONFIG
  // ==========================================
  hero: {
    pillBadge: 'LOCAL-FIRST PRODUCT MANAGEMENT & DATA STUDIO &bull; V1.4.0',
    pillVersionTag: 'Windows 10/11 Native',
    headlineMain: 'From Organizational Knowledge & Data',
    headlineAccent: 'to Actionable Product Decisions.',
    headlineEnd: '',
    subtitle:
      'Ingest product specs and business spreadsheets, visualize custom KPI dashboards, query local data in a safe SQL sandbox, draft grounded PRDs, decompose requirements into testable Agile user stories, and track sprints — all within one native Windows desktop workstation.',
    notice:
      'Core workflows operate offline with local models (Ollama) and local SQLite analytics. Optional cloud-model support (Gemini) is available when configured.',
    specsBadges: [
      { text: 'Data Studio & Business Dashboards', type: 'chart' },
      { text: 'Safe Read-Only SQL Sandbox', type: 'terminal' },
      { text: 'Sprint Kanban & Story Breakdown', type: 'board' },
      { text: 'Auto-Updates via GitHub Releases', type: 'refresh' },
    ],
    // Desktop App Simulator Mockup
    simulator: {
      windowTitle: 'PmT Desktop Shell',
      workspaceTitle: 'Workspace: Core Platform v1.4.0',
      backendHost: '127.0.0.1:5050 [Handshake OK]',
      activeModel: 'Ollama: llama3.2 (Local Mode)',
      localDbPath: '%LOCALAPPDATA%\\PMTool\\pmtool.db (Schema v6)',
      dbStats: 'Connected Datasets: 3 • Sprint Velocity: 74% • 34 Pts Active',
      shortcut: 'Slash Commands: /data, /breakdown, /prd, /summarize, /search',
    },
  },

  // ==========================================
  // 7. TECH MARQUEE (Reflecting Real v1.4.0 Capabilities)
  // ==========================================
  techMarquee: [
    'DATA STUDIO & BUSINESS DASHBOARDS (/DASHBOARD)',
    'EXCEL (.XLSX) & CSV TABULAR INGESTION',
    'SAFE READ-ONLY SQL SANDBOX (5-LAYER DEFENSE)',
    'PURE SVG RESPONSIVE CHARTS & KPI CARDS',
    'GUARDED AI CONTEXT GROUNDING (/DATA)',
    'INTERACTIVE SPRINT KANBAN (HTML5 DRAG & DROP)',
    'PRD-TO-STORY DECOMPOSER TOOL (/BREAKDOWN)',
    'FIBONACCI STORY ESTIMATION (1, 2, 3, 5, 8)',
    'SQLITE FTS5 BM25 FULL-TEXT SEARCH',
    '8,192 MAX OUTPUT TOKEN LLM BUDGET',
    'ELECTRON-UPDATER BACKGROUND DELTA SYNC',
    'THREE-DATABASE SEGREGATION (SCHEMA V6)',
    'DYNAMIC CASCADING PORT SHIELD (5050-5065)',
    'NO MANDATORY CLOUD ACCOUNTS',
  ],

  // ==========================================
  // 8. PRODUCT SHOWCASE (ACTUAL MODULES IN APP)
  // ==========================================
  showcaseModules: [
    {
      id: 'data-studio',
      name: 'Data Studio & Dashboards',
      tag: 'New in v1.4.0',
      headline: 'Multi-format tabular ingestion, responsive SVG charts, and safe SQL exploration.',
      description:
        'Ingest Excel (.xlsx, .xls via openpyxl), CSV, TSV, JSON, and SQLite files into local analytics_store.db. Configure custom KPI metrics (SUM, AVG, COUNT, MIN, MAX) with target comparisons, generate pure SVG Bar & Donut charts, and run analytical queries inside a sandboxed read-only SQL engine.',
    },
    {
      id: 'sprint-kanban',
      name: 'Sprint Kanban Studio',
      tag: 'Agile Execution (v1.3.0)',
      headline: 'Interactive Sprint Kanban board with HTML5 drag-and-drop & Fibonacci estimation.',
      description:
        'Manage sprints across 4 workflow lanes: Backlog (todo), In Progress (in_progress), Blocked (blocked), and Completed (done). Features optimistic UI updates, background persistence via PATCH /api/tasks/:id, sprint velocity KPIs, and multi-field filtering by project and priority.',
    },
    {
      id: 'story-decomposer',
      name: 'PRD-to-Story Decomposer',
      tag: 'Automated Tool (/breakdown)',
      headline: 'Decompose raw PRDs into discrete, testable Agile user stories deterministically.',
      description:
        'The breakdown engine prompts the LLM Gateway with an 8,192 token budget to deconstruct PRDs into 4–8 discrete Agile user stories with Given/When/Then acceptance criteria, priority weights, and Fibonacci story points (1, 2, 3, 5, 8), saved straight to pmtool.db.',
    },
    {
      id: 'ai-copilot',
      name: 'RAG Copilot & Slash Studio',
      tag: 'Reasoning Pipeline',
      headline: 'Grounded drafting with interactive slash command pill containers and verified citations.',
      description:
        'Transform prompts into publication-grade PRDs with source references. Features interactive color-coded command pills (/data, /breakdown, /prd, /summarize, /plan, /metrics, /search), 8,192 max output tokens, and 1-click Word (.docx) export with styled callouts.',
    },
    {
      id: 'knowledge-base',
      name: 'Local Knowledge Base',
      tag: 'FTS5 & BM25 Search',
      headline: 'Multi-format document parsing with section-aware chunking and live test search.',
      description:
        'Parses local .pdf, .docx, .md, .txt, .csv, and .json files directly from your disk into local SQLite FTS5 BM25 index tables. Includes directory scanner, chunk inspector modal, and dual-scrollbar table with sticky headers.',
    },
    {
      id: 'auto-updater',
      name: 'Auto-Updater & Resilient Shell',
      tag: 'Desktop Infrastructure',
      headline: 'Integrated electron-updater with GitHub Releases and cascading port handshake.',
      description:
        'Background delta downloads via .blockmap differential updates with graceful Flask backend shutdown before installing. Features dynamic port collision resilience sweeping ports 5050 through 5065.',
    },
  ],

  // ==========================================
  // 9. PHILOSOPHY PILLARS
  // ==========================================
  philosophy: [
    {
      title: 'Local-First Architecture',
      subtitle: 'Your computer is the primary system of record.',
      description:
        'Core operational data — projects, backlog tasks, sprint velocity, document chunk indexes, and tabular business datasets — resides in local SQLite databases on your hard drive. Local workflows do not depend on remote SaaS uptime.',
      badge: 'SQLite WAL Mode',
    },
    {
      title: 'No Per-Seat Subscription Tax',
      subtitle: 'Open, self-contained desktop tooling.',
      description:
        'Traditional product SaaS requires recurring monthly seat licenses to view or edit project requirements and dashboards. PM Tool is an open-source desktop tool with no mandatory per-seat subscription fees.',
      badge: '$0 Tooling License',
    },
    {
      title: 'Offline-Capable with Local Models',
      subtitle: 'Complete workflows without internet connectivity.',
      description:
        'When using local inference via Ollama, document ingestion, ranked search, PRD drafting, story breakdown, and analytical summaries execute on-device without sending data across external networks.',
      badge: 'Local Ollama Mode',
    },
    {
      title: 'Designed for Responsive Local Retrieval',
      subtitle: 'SQLite FTS5 & SQLite Analytics on local SSD storage.',
      description:
        'Queries against the local SQLite FTS5 index and analytics_store.db execute directly on your hardware without network latency. Query thousands of dataset rows or search document passages without waiting on cloud server roundtrips.',
      badge: 'On-Device SQLite',
    },
  ],

  // ==========================================
  // 10. CORE FEATURES MATRIX
  // ==========================================
  featureCategories: [
    { id: 'all', label: 'All Capabilities' },
    { id: 'data', label: 'Data Studio & BI (v1.4)' },
    { id: 'agile', label: 'Sprint & Agile Board' },
    { id: 'tools', label: 'Automated PM Tools' },
    { id: 'knowledge', label: 'Knowledge Base & RAG' },
    { id: 'architecture', label: 'Architecture & Storage' },
    { id: 'security', label: 'Security & Updates' },
  ],
  features: [
    {
      id: 'data-studio-engine',
      category: 'data',
      title: 'Data Studio & Business Dashboards',
      tagline: 'Multi-format tabular ingestion and pure SVG responsive charts.',
      description:
        'Direct ingestion of Excel (.xlsx, .xls via openpyxl), CSV, TSV, and JSON. Configurable KPI summary cards with aggregation functions (COUNT, SUM, AVG, MIN, MAX), target comparisons, trend badges, and currency/percentage formatting.',
      highlight: 'Data Studio (v1.4)',
    },
    {
      id: 'sql-sandbox-safety',
      category: 'data',
      title: 'Safe Read-Only SQL Sandbox',
      tagline: '5-layer defense-in-depth analytical SQL console.',
      description:
        'Interactive SQL console with execution timer (ms) and table grid view. Protected by multi-statement block, statement whitelist (SELECT, WITH), mutation keyword blacklist, mandatory LIMIT 100 ceiling, and native URI file:... ?mode=ro driver enforcement.',
      highlight: 'Read-Only Sandbox',
    },
    {
      id: 'guarded-ai-data',
      category: 'data',
      title: 'Guarded AI Grounding & /data Command',
      tagline: 'Copilot data intelligence with zero raw data or PII leakage.',
      description:
        'LLM system prompt dynamically receives structured schemas (table names, row counts, column types, sample distributions) and live dashboard KPI values. The /data slash command produces instant executive analytical briefs.',
      highlight: '/data Command',
    },
    {
      id: 'sprint-kanban-board',
      category: 'agile',
      title: 'Sprint Kanban Studio with Drag & Drop',
      tagline: '4 workflow lanes: Backlog, In Progress, Blocked, Completed.',
      description:
        'Native HTML5 drag-and-drop board with optimistic UI updates and background persistence via PATCH /api/tasks/:id. Tracks sprint velocity (% Done), active blockers, and Fibonacci story point totals.',
      highlight: 'Interactive Board',
    },
    {
      id: 'story-breakdown-tool',
      category: 'tools',
      title: 'Automated PRD-to-Story Decomposer',
      tagline: 'Turns PRDs into testable Agile user stories via /breakdown.',
      description:
        'The breakdown engine prompts the LLM Gateway with an 8,192 token output budget to generate 4–8 discrete Agile user stories with Given/When/Then acceptance criteria and Fibonacci points (1, 2, 3, 5, 8).',
      highlight: '/breakdown Tool',
    },
    {
      id: 'doc-summarizer-tool',
      category: 'tools',
      title: 'Deterministic Document Summarizer',
      tagline: 'Structured executive briefs with 30,000 word source budget.',
      description:
        'Extracts executive summaries, architectural constraints, and action items with ISO metadata frontmatter and SHA256 integrity verification. Logs execution telemetry into ai_context.db.',
      highlight: '/summarize Tool',
    },
    {
      id: 'prd-export-docx',
      category: 'tools',
      title: 'Styled Microsoft Word (.docx) Exporter',
      tagline: 'From markdown specifications to styled Word documents.',
      description:
        'Converts markdown specifications into clean, styled Word documents (.docx) with cover metadata, heading hierarchy, callout blocks, and bullet styles ready for stakeholder review.',
      highlight: '1-Click Word Export',
    },
    {
      id: 'command-pills',
      category: 'tools',
      title: 'Interactive Slash Command Pill Container',
      tagline: 'Button-like colored badge container inside chat input.',
      description:
        'Selecting a command transforms it into an interactive glowing badge container before the textarea: /data (amber), /breakdown (amber), /prd (purple), /summarize (purple), /search (cyan), /plan (amber), /chat (blue).',
      highlight: 'Slash Studio',
    },
    {
      id: 'dual-db-v6',
      category: 'architecture',
      title: 'Three-Database Storage Segregation (Schema v6)',
      tagline: 'Clean separation across operational, AI context, and analytics stores.',
      description:
        'Operational entities (%LOCALAPPDATA%\\PMTool\\pmtool.db, Schema v6), volatile AI context (ai_context.db), and isolated materialized tabular datasets (datasets\\analytics_store.db) in SQLite WAL mode.',
      highlight: 'Schema v6 Engine',
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
      id: 'parsers-dual-scroll',
      category: 'knowledge',
      title: 'Multi-Format File Ingestors & Dual Scrollbars',
      tagline: 'Local parsing for PDF, DOCX, Markdown, Text, CSV, and JSON.',
      description:
        'Local parsers extract text content and heading structures. Knowledge table features sticky headers and dual scrollbars (horizontal & vertical) preventing squash on compact displays.',
      highlight: 'Local Parsers',
    },
    {
      id: 'electron-updater-pipe',
      category: 'security',
      title: 'In-App Auto-Updating via GitHub Releases',
      tagline: 'Automated background delta downloads via electron-updater.',
      description:
        'Checks for updates on launch and every 4 hours. Downloads .blockmap delta diffs, shows real-time progress toasts, and gracefully terminates Flask backend before restart.',
      highlight: 'electron-updater',
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
      headline: 'Scan & Ingest Documents & Tabular Spreadsheets',
      description:
        'Connect local PDF specifications, Word roadmaps, Markdown notes, Excel spreadsheets (.xlsx), and CSV datasets on-device without cloud uploads.',
      example: 'Supported: .xlsx, .csv, .json, .pdf, .docx, .md, .txt formats.',
      connector: 'feeds into local FTS5 index & analytics_store.db',
    },
    {
      step: '02',
      name: 'On-Device Analytics',
      headline: 'Ranked BM25 Search & Safe SQL Sandbox',
      description:
        'Retrieve document passages with SQLite FTS5 BM25 and query business datasets using the sandboxed read-only SQL console with 5-layer safety.',
      example: 'Indexed in %LOCALAPPDATA%\\PMTool\\datasets\\analytics_store.db.',
      connector: 'powers evidence & metric grounding for AI synthesis',
    },
    {
      step: '03',
      name: 'Grounded Drafting',
      headline: 'Draft PRDs Grounded in Evidence & Live KPIs',
      description:
        'Context Builder combines active project details, live dataset KPI values, and retrieved document passages before querying the configured LLM (Ollama or Gemini).',
      example: 'Slash commands /data and /prd produce grounded requirements.',
      connector: 'formats output into structured specifications',
    },
    {
      step: '04',
      name: 'Story Breakdown',
      headline: 'Decompose PRDs into Agile Stories (/breakdown)',
      description:
        'The automated PRD-to-Story Decomposer tool breaks requirements down into 4–8 discrete Agile user stories with Given/When/Then acceptance criteria and Fibonacci points.',
      example: 'Estimates story points (1, 2, 3, 5, 8) and saves to pmtool.db.',
      connector: 'saves directly to local SQLite database',
    },
    {
      step: '05',
      name: 'Sprint Execution',
      headline: 'Track & Drag on Sprint Kanban Board',
      description:
        'Execute sprints on the interactive Kanban board. Drag tasks across Backlog, In Progress, Blocked, and Completed lanes with real-time velocity metrics.',
      example: 'Optimistic UI updates saved immediately to pmtool.db via PATCH /api/tasks/:id.',
      connector: 'completes the end-to-end data-driven execution loop',
    },
  ],

  // ==========================================
  // 12. ARCHITECTURE LAYERS
  // ==========================================
  architectureLayers: [
    {
      id: 'shell',
      title: 'Tier 1: Desktop Shell & Auto-Updater',
      tech: 'Electron 44 &bull; Chromium &bull; electron-updater',
      latency: 'Native Desktop Shell',
      summary: 'Manages windowing, cascading port discovery (5050-5065), background delta updates, and backend process lifecycle.',
      specs: [
        'Port discovery: sweeps ports 5050 to 5065 dynamically on startup',
        'electron-updater: background delta updates from GitHub Releases',
        'Native Windows notifications via electron-notify IPC',
        'Graceful Flask backend termination on window close to release SQLite locks',
      ],
    },
    {
      id: 'backend',
      title: 'Tier 2: Localhost Micro-Backend & Data Engine',
      tech: 'Python Flask 3.x &bull; data_engine.py &bull; 127.0.0.1',
      latency: 'Localhost REST Protocol',
      summary: 'Local service bound to 127.0.0.1 handling entity operations, tabular data ingestion, automated tools, and gateway dispatch.',
      specs: [
        'Bound strictly to 127.0.0.1 (rejects external network connections)',
        'Data Studio Engine (data_engine.py) with openpyxl, CSV, and JSON parsing',
        'Automated tools: /breakdown, /summarize, and guarded /data analytical synthesis',
        'Origin & Sec-Fetch-Site security validation checks on REST endpoints',
      ],
    },
    {
      id: 'db',
      title: 'Tier 3: Three-Database SQLite Storage (Schema v6)',
      tech: 'SQLite 3 &bull; WAL Journal &bull; analytics_store.db',
      latency: 'Local SSD Operations',
      summary: 'Separates operational relational records, volatile AI context, and materialized business datasets.',
      specs: [
        'Operational DB: %LOCALAPPDATA%\\PMTool\\pmtool.db (Schema v6: data_sources, dashboards, widgets)',
        'Analytics DB: %LOCALAPPDATA%\\PMTool\\datasets\\analytics_store.db (Materialized tabular data)',
        'AI Context DB: %LOCALAPPDATA%\\AIContextTool\\ai_context.db (FTS5 BM25 index & tool_runs)',
        'Safe read-only URI mode file:... ?mode=ro with 5-layer SQL sandbox defense',
      ],
    },
    {
      id: 'ai',
      title: 'Tier 4: Hybrid LLM & Guarded Context Gateway',
      tech: 'Local Ollama &bull; Optional Gemini API &bull; 8,192 Budget',
      latency: 'Local or Cloud Dispatch',
      summary: 'Routes prompts to local offline models or optional cloud APIs with dataset schema grounding without raw data leaks.',
      specs: [
        'Detects running Ollama models on localhost:11434 (e.g. Llama 3.2, Mistral, Gemma 2)',
        'Guarded AI context: injects dataset schemas and KPI values without leaking PII or raw rows',
        'Expanded 8,192 max output token budget across all providers',
        'Local key encryption at rest using PBKDF2 and authenticated keystream',
      ],
    },
  ],

  // ==========================================
  // 13. PRIVACY & SAAS COMPARISON MATRIX
  // ==========================================
  comparisonRows: [
    {
      feature: 'Data & Dashboard Storage Location',
      pmtool: 'Local storage inside Windows AppData (%LOCALAPPDATA%\\PMTool & datasets\\analytics_store.db)',
      cloud: 'Cloud-hosted multi-tenant infrastructure managed by vendor',
    },
    {
      feature: 'Business Spreadsheet Ingestion',
      pmtool: 'Direct local ingestion of Excel (.xlsx) and CSV into isolated local SQLite store',
      cloud: 'Spreadsheets uploaded to cloud BI servers (e.g. Tableau/PowerBI cloud, Jira SaaS)',
    },
    {
      feature: 'SQL Data Exploration',
      pmtool: 'Built-in Safe Read-Only SQL Sandbox with 5-layer defense against disk mutation',
      cloud: 'Requires connecting remote databases or purchasing add-on cloud analytics seats',
    },
    {
      feature: 'Account & Identity Requirements',
      pmtool: 'No mandatory account or registration required for local workflows',
      cloud: 'Generally requires account registration, email verification, or corporate SSO',
    },
    {
      feature: 'Subscription Model',
      pmtool: 'No per-seat subscription for PM Tool ($0 open-source)',
      cloud: 'Recurring subscription pricing with per-user tiers; compare terms individually',
    },
    {
      feature: 'Agile & Story Estimation',
      pmtool: 'Built-in Sprint Kanban board, drag-and-drop, and automated /breakdown tool',
      cloud: 'Often requires Jira Software or paid third-party agile extensions',
    },
    {
      feature: 'AI Model Execution & Data Egress',
      pmtool: 'Local Ollama mode runs entirely on-device; cloud models (Gemini) are optional',
      cloud: 'Cloud-based AI features send prompt data to external providers based on vendor terms',
    },
    {
      feature: 'Network Availability & Offline Use',
      pmtool: 'Supported workflows operate offline when using local Ollama models',
      cloud: 'Cloud-hosted workflows generally depend on active network connectivity',
    },
    {
      feature: 'Application Updates',
      pmtool: 'Transparent GitHub Releases auto-updating with delta blockmaps via electron-updater',
      cloud: 'Silent continuous cloud deployments without user version control',
    },
  ],

  // ==========================================
  // 14. DESIGN PHILOSOPHY TENETS
  // ==========================================
  designTenets: [
    {
      title: 'Eliminate Context Switching',
      desc: 'Fragmenting product context across spreadsheets, analytics tools, browser tabs, and separate task managers increases cognitive friction. PM Tool unifies datasets, documents, PRDs, story breakdown, and sprint boards in a single desktop frame.',
    },
    {
      title: 'Useful Complexity Over Shallow Simplicity',
      desc: 'Simplified to-do apps often hide necessary planning and analytical controls. We believe professional product software should be information-dense, keyboard-friendly, and oriented toward real data-informed agile execution.',
    },
    {
      title: 'Local Control as a Foundational Default',
      desc: 'Your strategic roadmaps, draft requirements, business metrics, and sprint tickets should remain under your control by default. Core indexing, analytics storage, and backlog management run locally without mandatory remote accounts.',
    },
    {
      title: 'Sovereign Aesthetic Craft',
      desc: 'Software used daily should respect your focus. Obsidian and charcoal palettes, high-density layouts, pure SVG charts, and responsive micro-interactions preserve flow and reduce visual strain.',
    },
  ],

  // ==========================================
  // 15. RELEASES & ROADMAP TIMELINE (Reflecting Real History)
  // ==========================================
  releases: [
    {
      version: 'v1.4.0',
      badge: 'CURRENT STABLE RELEASE',
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
      isCurrent: true,
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
      title: 'sqlite-vec Embedded Vector Index',
      desc: 'Planned embedded vector search extension within SQLite for hybrid BM25 and dense neural retrieval without external services.',
    },
    {
      title: 'Automated Sprint Retrospective Synthesizer',
      desc: 'Synthesize sprint retrospectives automatically based on completed story points, blocked tickets, and velocity trends.',
    },
    {
      title: 'Local Subnet P2P Collaboration',
      desc: 'Device-to-device local Wi-Fi synchronization for engineering teams without central cloud relays.',
    },
  ],
};

export default siteConfig;
