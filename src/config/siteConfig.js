/**
 * PM Tool — Central Site & Release Configuration
 * 
 * Accurately reflects the actual state of the application (v1.5.0):
 * - AI Workspace PM Document Generator (DocumentGeneratorModal.tsx: 5 executive templates)
 * - Multi-Format Export Subsystem (POST /api/export/docx with python-docx & POST /api/export/markdown)
 * - Assistant Response Quick Action Toolbar (Copy, Word DOCX, Markdown, Save to Docs, Decompose)
 * - Zero-Crash Markdown Parser Hardening (non-capturing regex groups) & Shell Error Boundary (ErrorBoundary.tsx)
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
 * - Three-database local storage segregation (pmtool.db, ai_context.db, analytics_store.db)
 * - Dynamic cascading port collision resilience (5050 through 5065)
 */

export const siteConfig = {
  // ==========================================
  // 1. BRAND & IDENTITY
  // ==========================================
  name: 'PM Tool',
  shortName: 'PmT',
  tagline: 'Local-First Product Management Workspace & Document Studio',
  description:
    'From organizational knowledge and tabular data to publication-grade product specifications. Scaffold executive PRDs and technical architecture specs in 1 click, export styled Microsoft Word (.docx) and Markdown files, query local datasets in a safe SQL sandbox, decompose requirements into testable Agile stories with Fibonacci points, and manage sprint backlogs — from one native Windows desktop workstation.',

  // ==========================================
  // 2. ACTIVE VERSION & RELEASE METADATA
  // ==========================================
  release: {
    version: 'v1.5.0',
    versionFull: 'v1.5.0',
    badge: 'v1.5.0 STABLE RELEASE',
    releaseDate: 'October 2026',
    buildDate: '2026-10-05',
    channel: 'Stable Channel',
    platform: 'Windows 10/11 (64-bit)',
    statusText: 'Local Runtime Initialized &bull; Document Generator & Export Engine',
    isAirGappedReady: false,
  },

  // ==========================================
  // 3. DOWNLOADS & BINARIES
  // ==========================================
  downloads: {
    installer: {
      fileName: 'PM-Tool-Setup-1.5.0.exe',
      label: 'Download NSIS Setup (.exe)',
      size: '83.4 MB',
      url: 'https://github.com/Pranshul-Chopra/pm_tool/releases/download/v1.5.0/PM-Tool-Setup-1.5.0.exe',
      directDownload: true,
    },
    portable: {
      fileName: 'PM-Tool-1.5.0.exe',
      label: 'Portable Standalone (.exe)',
      size: '76.8 MB',
      url: 'https://github.com/Pranshul-Chopra/pm_tool/releases/download/v1.5.0/PM-Tool-1.5.0.exe',
    },
    sha256: 'f8d39a174c82b1928374e610d9275e9b8173426105849201948271049281a029',
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
    { name: 'Document Studio', href: '#demo' },
    { name: 'Data Studio', href: '#data-studio' },
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
    pillBadge: 'LOCAL-FIRST PRODUCT MANAGEMENT & DOCUMENT STUDIO &bull; V1.5.0',
    pillVersionTag: 'Windows 10/11 Native',
    headlineMain: 'From Organizational Knowledge & Data',
    headlineAccent: 'to Publication-Grade PM Deliverables.',
    headlineEnd: '',
    subtitle:
      'Generate structured PRDs, technical architecture specs, and sprint breakdowns in 1 click. Export styled Microsoft Word (.docx) and Markdown files, analyze business spreadsheets in a safe SQL sandbox, and execute sprints on an interactive Kanban board — all within one native Windows desktop workstation.',
    notice:
      'Core workflows operate offline with local models (Ollama) and local SQLite analytics. Optional cloud-model support (Gemini) is available when configured.',
    specsBadges: [
      { text: 'AI PM Document Generator (5 Templates)', type: 'file' },
      { text: 'Multi-Format Export (.docx & .md)', type: 'download' },
      { text: 'Data Studio & Dashboards', type: 'chart' },
      { text: 'Sprint Kanban & Story Breakdown', type: 'board' },
    ],
    // Desktop App Simulator Mockup
    simulator: {
      windowTitle: 'PmT Desktop Shell',
      workspaceTitle: 'Workspace: Core Platform v1.5.0',
      backendHost: '127.0.0.1:5050 [Handshake OK]',
      activeModel: 'Ollama: llama3.2 (Local Mode)',
      localDbPath: '%LOCALAPPDATA%\\PMTool\\pmtool.db (Schema v6)',
      dbStats: '5 PM Templates Active • 3 Datasets • Velocity: 74%',
      shortcut: 'Actions: + Generate Document • Export DOCX • Decompose to Kanban',
    },
  },

  // ==========================================
  // 7. TECH MARQUEE (Reflecting Real v1.5.0 Capabilities)
  // ==========================================
  techMarquee: [
    'AI PM DOCUMENT GENERATOR (5 EXECUTIVE TEMPLATES)',
    '1-CLICK MICROSOFT WORD (.DOCX) & MARKDOWN EXPORT',
    'ASSISTANT RESPONSE ACTION TOOLBAR (SAVE TO DOCS & DECOMPOSE)',
    'ZERO-CRASH RESILIENT ERROR BOUNDARIES',
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
      id: 'doc-generator',
      name: 'AI PM Document Generator',
      tag: 'New in v1.5.0',
      headline: 'Interactive 1-click scaffolding for 5 executive PM document templates.',
      description:
        'Scaffold Product Requirement Documents (PRDs), Technical Architecture Specs, Agile Sprint Story Breakdowns, Strategy & KPI Plans, and Executive Briefs with configurable context inputs (scope, analytical focus, tech stack constraints). Includes styled Microsoft Word (.docx) export, clean Markdown (.md) download, and 1-click Knowledge Base ingestion ("Save to Docs").',
    },
    {
      id: 'data-studio',
      name: 'Data Studio & Dashboards',
      tag: 'Analytics Engine (v1.4.0)',
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
        'Transform prompts into publication-grade PRDs with source references. Features interactive color-coded command pills (/data, /breakdown, /prd, /summarize, /plan, /metrics, /search), 8,192 max output tokens, and quick action toolbar (Word export, Markdown download, Save to Docs, Decompose to Kanban).',
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
        'Traditional product SaaS requires recurring monthly seat licenses to view or edit project requirements, export Word documents, and build dashboards. PM Tool is an open-source desktop tool with no mandatory per-seat subscription fees.',
      badge: '$0 Tooling License',
    },
    {
      title: 'Offline-Capable with Local Models',
      subtitle: 'Complete workflows without internet connectivity.',
      description:
        'When using local inference via Ollama, document generation, ranked search, PRD drafting, story breakdown, and analytical summaries execute on-device without sending data across external networks.',
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
    { id: 'docs', label: 'Doc Generator & Export (v1.5)' },
    { id: 'data', label: 'Data Studio & BI' },
    { id: 'agile', label: 'Sprint & Agile Board' },
    { id: 'tools', label: 'Automated PM Tools' },
    { id: 'knowledge', label: 'Knowledge Base & RAG' },
    { id: 'architecture', label: 'Architecture & Storage' },
    { id: 'security', label: 'Security & Updates' },
  ],
  features: [
    {
      id: 'pm-doc-generator',
      category: 'docs',
      title: 'AI Workspace PM Document Generator',
      tagline: '1-click scaffolding for 5 executive PM document templates.',
      description:
        'Scaffold PRDs, Technical Architecture Specs, Agile Sprint Breakdowns, Product Strategy & KPI Plans, and Executive Briefs with configurable scope, analytical focus, and technical stack inputs directly from the workspace header.',
      highlight: 'Doc Generator (v1.5)',
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
      id: 'response-action-toolbar',
      category: 'docs',
      title: 'Assistant Quick Action Toolbar',
      tagline: 'Save to Docs, Decompose, Word Export, and Markdown copy.',
      description:
        'Quick action strip under every assistant message: 1-click clipboard copy, Word DOCX download, clean Markdown file download, direct indexing into project Knowledge Base ("Save to Docs"), and instant transfer into Decomposer modal ("Decompose").',
      highlight: 'Action Toolbar',
    },
    {
      id: 'zero-crash-hardening',
      category: 'security',
      title: 'Zero-Crash Resilience & Shell Error Boundaries',
      tagline: 'Defensive markdown parser regex & ErrorBoundary protection.',
      description:
        'Hardened inline regex patterns in MarkdownContent.tsx with non-capturing groups preventing tokenization exceptions. Integrated Dark Carbon ErrorBoundary in the application shell guaranteeing uninterrupted desktop stability.',
      highlight: 'Zero-Crash Guard',
    },
    {
      id: 'data-studio-engine',
      category: 'data',
      title: 'Data Studio & Business Dashboards',
      tagline: 'Multi-format tabular ingestion and pure SVG responsive charts.',
      description:
        'Direct ingestion of Excel (.xlsx, .xls via openpyxl), CSV, TSV, and JSON. Configurable KPI summary cards with aggregation functions (COUNT, SUM, AVG, MIN, MAX), target comparisons, trend badges, and currency/percentage formatting.',
      highlight: 'Data Studio',
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
      name: 'Scaffold & Draft',
      headline: '1-Click PM Document Generator & Live Synthesis',
      description:
        'Use the + Generate Document modal to scaffold PRDs, Tech Specs, or Strategy Plans grounded in retrieved evidence and live KPI metrics.',
      example: 'Scaffolds 5 templates with customizable analytical directives.',
      connector: 'generates executive specifications ready for export',
    },
    {
      step: '04',
      name: 'Export & Decompose',
      headline: 'Export Word (.docx) or Decompose to Agile Stories',
      description:
        'Export styled Word documents with 1-click or trigger instant decomposition into 4–8 discrete Agile user stories with Fibonacci points via the action toolbar.',
      example: 'Quick Action Toolbar: Copy, Word DOCX, Save to Docs, Decompose.',
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
      title: 'Tier 1: Desktop Shell & Resilient Error Boundary',
      tech: 'Electron 44 &bull; Chromium &bull; ErrorBoundary.tsx',
      latency: 'Native Desktop Shell',
      summary: 'Manages windowing, cascading port discovery (5050-5065), background delta updates, and dark carbon ErrorBoundary crash resilience.',
      specs: [
        'Port discovery: sweeps ports 5050 to 5065 dynamically on startup',
        'electron-updater: background delta updates from GitHub Releases',
        'ErrorBoundary: catches rendering exceptions preventing desktop unmounts',
        'Graceful Flask backend termination on window close to release SQLite locks',
      ],
    },
    {
      id: 'backend',
      title: 'Tier 2: Localhost Micro-Backend & Document Exporter',
      tech: 'Python Flask 3.x &bull; python-docx &bull; 127.0.0.1',
      latency: 'Localhost REST Protocol',
      summary: 'Local service bound to 127.0.0.1 handling entity operations, Word DOCX generation, tabular data ingestion, and gateway dispatch.',
      specs: [
        'Bound strictly to 127.0.0.1 (rejects external network connections)',
        'Document Exporter (POST /api/export/docx) generating styled Word files in-memory',
        'Data Studio Engine (data_engine.py) with openpyxl, CSV, and JSON parsing',
        'Automated tools: /breakdown, /summarize, and guarded /data analytical synthesis',
      ],
    },
    {
      id: 'db',
      title: 'Tier 3: Three-Database SQLite Storage (Schema v6)',
      tech: 'SQLite 3 &bull; WAL Journal &bull; analytics_store.db',
      latency: 'Local SSD Operations',
      summary: 'Separates operational relational records, volatile AI context, and materialized business datasets.',
      specs: [
        'Operational DB: %LOCALAPPDATA%\\PMTool\\pmtool.db (Schema v6: tasks, data_sources, dashboards, widgets)',
        'Analytics DB: %LOCALAPPDATA%\\PMTool\\datasets\\analytics_store.db (Materialized tabular data)',
        'AI Context DB: %LOCALAPPDATA%\\AIContextTool\\ai_context.db (FTS5 BM25 index & tool_runs)',
        'Safe read-only URI mode file:... ?mode=ro with 5-layer SQL sandbox defense',
      ],
    },
    {
      id: 'ai',
      title: 'Tier 4: Hybrid LLM & 5-Template Document Scaffolder',
      tech: 'Local Ollama &bull; Optional Gemini API &bull; 8,192 Budget',
      latency: 'Local or Cloud Dispatch',
      summary: 'Routes prompts to local offline models or optional cloud APIs with dataset schema grounding and document scaffolding.',
      specs: [
        'Detects running Ollama models on localhost:11434 (e.g. Llama 3.2, Mistral, Gemma 2)',
        'Document Generator: scaffolds PRDs, Architecture Specs, Story Breakdowns, and KPI Plans',
        'Guarded AI context: injects dataset schemas and KPI values without leaking PII or raw rows',
        'Expanded 8,192 max output token budget across all providers',
      ],
    },
  ],

  // ==========================================
  // 13. PRIVACY & SAAS COMPARISON MATRIX
  // ==========================================
  comparisonRows: [
    {
      feature: 'PM Document Generation & Templates',
      pmtool: 'Built-in 1-click Document Generator with 5 structured PM templates (PRD, Tech Spec, Breakdown, KPI Plan, Brief)',
      cloud: 'Fragmented across Notion AI, Google Docs, Confluence AI, or separate paid add-on plugins',
    },
    {
      feature: 'Document Export & Formatting',
      pmtool: '1-click Microsoft Word (.docx) with custom headers & metadata tables, plus clean Markdown (.md)',
      cloud: 'Export often locks into proprietary cloud canvases or strips formatting during PDF export',
    },
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
      desc: 'Fragmenting product context across spreadsheets, analytics tools, browser tabs, separate document editors, and task managers increases cognitive friction. PM Tool unifies document generation, datasets, PRDs, story breakdown, and sprint boards in a single desktop frame.',
    },
    {
      title: 'Useful Complexity Over Shallow Simplicity',
      desc: 'Simplified to-do apps often hide necessary planning, document scaffolding, and analytical controls. We believe professional product software should be information-dense, keyboard-friendly, and oriented toward real data-informed agile execution.',
    },
    {
      title: 'Local Control as a Foundational Default',
      desc: 'Your strategic roadmaps, draft requirements, executive briefs, business metrics, and sprint tickets should remain under your control by default. Core indexing, analytics storage, and backlog management run locally without mandatory remote accounts.',
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
      version: 'v1.5.0',
      badge: 'CURRENT STABLE RELEASE',
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
      isCurrent: true,
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
