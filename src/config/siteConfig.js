/**
 * PM Tool — Central Site & Release Configuration
 * 
 * Accurately reflects the actual state of the application (v1.3.0):
 * - Interactive Sprint Kanban Board with HTML5 drag-and-drop & Fibonacci story points
 * - Automated PRD-to-Story Decomposer Tool (/breakdown & /api/tools/breakdown)
 * - RAG-Grounded AI Copilot with interactive slash command pill container & 8,192 token output
 * - Local-First Knowledge Base with SQLite FTS5 BM25 search & multi-format parsers
 * - In-App Auto-Updating via electron-updater & GitHub Releases pipeline
 * - Bespoke PmT brand identity & multi-resolution desktop icons
 * - Two-database segregation (pmtool.db Schema v5 + ai_context.db)
 * - Dynamic cascading port collision resilience (5050 through 5065)
 */

export const siteConfig = {
  // ==========================================
  // 1. BRAND & IDENTITY
  // ==========================================
  name: 'PM Tool',
  shortName: 'PmT',
  tagline: 'Local-First Product Management Workspace',
  description:
    'From organizational knowledge to actionable product execution. Ingest local specs, draft structured PRDs with document grounding, decompose requirements into testable Agile stories with Fibonacci points, and manage sprint backlogs — from one native Windows desktop workstation.',

  // ==========================================
  // 2. ACTIVE VERSION & RELEASE METADATA
  // ==========================================
  release: {
    version: 'v1.3.0',
    versionFull: 'v1.3.0',
    badge: 'v1.3.0 STABLE RELEASE',
    releaseDate: 'October 2026',
    channel: 'Stable Channel',
    platform: 'Windows 10/11 (64-bit)',
    statusText: 'Local Runtime Initialized &bull; SQLite Schema v5',
    isAirGappedReady: false,
  },

  // ==========================================
  // 3. DOWNLOADS & BINARIES
  // ==========================================
  downloads: {
    installer: {
      fileName: 'PM-Tool-Setup-1.3.0.exe',
      label: 'Download NSIS Setup (.exe)',
      size: '78.4 MB',
      url: 'https://github.com/Pranshul-Chopra/pm_tool/releases/download/v1.3.0/PM-Tool-Setup-1.3.0.exe',
      directDownload: true,
    },
    portable: {
      fileName: 'PM-Tool-1.3.0.exe',
      label: 'Portable Standalone (.exe)',
      size: '71.2 MB',
      url: 'https://github.com/Pranshul-Chopra/pm_tool/releases/download/v1.3.0/PM-Tool-1.3.0.exe',
    },
    sha256: 'a4f91c80e1b238dc8195a63901bce559a3977efc8939c043e0618037b5d19a4e',
    gitCloneCommand: 'git clone https://github.com/Pranshul-Chopra/pm_tool.git',
    systemPrerequisites: [
      'Windows 10 / Windows 11 (64-bit)',
      '4 GB RAM minimum (8 GB+ recommended for local Ollama models)',
      '300 MB Free Storage for application and local SQLite databases',
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
    { name: 'Product', href: '#demo' },
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
    pillBadge: 'LOCAL-FIRST PRODUCT MANAGEMENT WORKSPACE &bull; V1.3.0',
    pillVersionTag: 'Windows 10/11 Native',
    headlineMain: 'From Organizational Knowledge',
    headlineAccent: 'to Actionable Product Decisions.',
    headlineEnd: '',
    subtitle:
      'Ingest product specs, retrieve relevant context, draft structured PRDs with document grounding, decompose requirements into testable Agile user stories with Fibonacci points, and manage sprint backlogs — from one native Windows desktop workspace.',
    notice:
      'Core workflows operate offline with local models (Ollama). Optional cloud-model support (Gemini) is available when configured.',
    specsBadges: [
      { text: 'Sprint Kanban & Fibonacci Points', type: 'board' },
      { text: 'PRD-to-Story Decomposer Tool', type: 'cpu' },
      { text: 'Local FTS5 BM25 Search', type: 'search' },
      { text: 'Auto-Updates via GitHub Releases', type: 'refresh' },
    ],
    // Desktop App Simulator Mockup
    simulator: {
      windowTitle: 'PmT Desktop Shell',
      workspaceTitle: 'Workspace: Core Platform v1.3.0',
      backendHost: '127.0.0.1:5050 [Handshake OK]',
      activeModel: 'Ollama: llama3.2 (Local Mode)',
      localDbPath: '%LOCALAPPDATA%\\PMTool\\pmtool.db (Schema v5)',
      dbStats: 'Sprint Velocity: 72% • 34 Story Points Active',
      shortcut: 'Slash Commands: /prd, /breakdown, /summarize, /search',
    },
  },

  // ==========================================
  // 7. TECH MARQUEE (Reflecting Real v1.3.0 Capabilities)
  // ==========================================
  techMarquee: [
    'INTERACTIVE SPRINT KANBAN (HTML5 DRAG & DROP)',
    'PRD-TO-STORY DECOMPOSER TOOL (/BREAKDOWN)',
    'FIBONACCI STORY ESTIMATION (1, 2, 3, 5, 8)',
    'SQLITE FTS5 BM25 FULL-TEXT SEARCH',
    '8,192 MAX OUTPUT TOKEN LLM BUDGET',
    'ELECTRON-UPDATER BACKGROUND DELTA SYNC',
    'OFFLINE OLLAMA AUTO-DETECTION (127.0.0.1:11434)',
    'DETERMINISTIC SUMMARIZER (30K WORD BUDGET)',
    '1-CLICK STYLED WORD (.DOCX) EXPORT',
    'TWO-DATABASE SEGREGATION (SCHEMA V5)',
    'DYNAMIC CASCADING PORT SHIELD (5050-5065)',
    'NO MANDATORY CLOUD ACCOUNTS',
  ],

  // ==========================================
  // 8. PRODUCT SHOWCASE (ACTUAL MODULES IN APP)
  // ==========================================
  showcaseModules: [
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
        'Transform prompts into publication-grade PRDs with source references. Features interactive color-coded command pills (/search, /prd, /summarize, /plan, /metrics, /breakdown), 8,192 max output tokens, and 1-click Word (.docx) export with styled callouts.',
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
        'Core operational data — projects, backlog tasks, sprint velocity, and document chunk indexes — resides in local SQLite databases on your hard drive. Local workflows do not depend on remote SaaS uptime.',
      badge: 'SQLite WAL Mode',
    },
    {
      title: 'No Per-Seat Subscription Tax',
      subtitle: 'Open, self-contained desktop tooling.',
      description:
        'Traditional product SaaS requires recurring monthly seat licenses to view or edit project requirements. PM Tool is an open-source desktop tool with no mandatory per-seat subscription fees.',
      badge: '$0 Tooling License',
    },
    {
      title: 'Offline-Capable with Local Models',
      subtitle: 'Complete workflows without internet connectivity.',
      description:
        'When using local inference via Ollama, document ingestion, ranked search, PRD drafting, and user story breakdown execute on-device without sending data across external networks.',
      badge: 'Local Ollama Mode',
    },
    {
      title: 'Designed for Responsive Local Retrieval',
      subtitle: 'SQLite FTS5 on local SSD storage.',
      description:
        'Queries against the local SQLite FTS5 database execute directly on your hardware without network latency. Search local document passages and filter backlog items without waiting on cloud server roundtrips.',
      badge: 'On-Device FTS5',
    },
  ],

  // ==========================================
  // 10. CORE FEATURES MATRIX
  // ==========================================
  featureCategories: [
    { id: 'all', label: 'All Capabilities' },
    { id: 'agile', label: 'Sprint & Agile Board' },
    { id: 'tools', label: 'Automated PM Tools' },
    { id: 'knowledge', label: 'Knowledge Base & RAG' },
    { id: 'architecture', label: 'Architecture & Storage' },
    { id: 'security', label: 'Security & Updates' },
  ],
  features: [
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
        'Selecting a command transforms it into an interactive glowing badge container before the textarea: /search (cyan), /prd (purple), /summarize (purple), /breakdown (amber), /plan (amber), /chat (blue).',
      highlight: 'Slash Studio',
    },
    {
      id: 'dual-db-v5',
      category: 'architecture',
      title: 'Two-Database Storage Segregation (Schema v5)',
      tagline: 'Clean boundary between relational data and AI context.',
      description:
        'Separates relational entities (%LOCALAPPDATA%\\PMTool\\pmtool.db) from volatile AI reasoning traces, messages, and FTS5 search indexes (ai_context.db). Schema v5 adds story points and acceptance criteria.',
      highlight: 'SQLite WAL Mode',
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
      name: 'Scan & Ingest',
      headline: 'Scan & Ingest Documents from Your Hard Drive',
      description:
        'Point to a local folder with PDF specifications, Word roadmaps, Markdown docs, or meeting notes. Parsers extract text and headings on-device without cloud uploads.',
      example: 'Supported: .pdf, .docx, .md, .txt, .csv, and .json formats.',
      connector: 'feeds into section-aware chunker with overlap',
    },
    {
      step: '02',
      name: 'FTS5 Indexing',
      headline: 'Ranked BM25 Full-Text Indexing in SQLite',
      description:
        'Chunks are indexed into SQLite FTS5 virtual tables with tokenized BM25 ranking for exact acronyms, names, and technical terms with change detection.',
      example: 'Indexed chunks stored in %LOCALAPPDATA%\\AIContextTool\\ai_context.db.',
      connector: 'powers evidence retrieval for context assembly',
    },
    {
      step: '03',
      name: 'Grounded Drafting',
      headline: 'Draft PRDs Grounded in Retrieved Excerpts',
      description:
        'Context Builder combines active project details, recent decision records, and retrieved document passages before querying the configured LLM (Ollama or Gemini).',
      example: 'Injects identifiable evidence chunks with file names and section headings.',
      connector: 'formats output into structured requirements',
    },
    {
      step: '04',
      name: 'Story Breakdown',
      headline: 'Decompose PRDs into Agile Stories (/breakdown)',
      description:
        'The automated PRD-to-Story Decomposer tool breaks requirements down into 4–8 discrete Agile user stories with Given/When/Then acceptance criteria and Fibonacci points.',
      example: 'Automatically estimates story points (1, 2, 3, 5, 8) and priority weights.',
      connector: 'saves directly to local SQLite database',
    },
    {
      step: '05',
      name: 'Sprint Execution',
      headline: 'Track & Drag on Sprint Kanban Board',
      description:
        'Execute sprints on the interactive Kanban board. Drag tasks across Backlog, In Progress, Blocked, and Completed lanes with real-time velocity metrics.',
      example: 'Optimistic UI updates saved immediately to pmtool.db via PATCH /api/tasks/:id.',
      connector: 'completes the end-to-end agile execution loop',
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
      title: 'Tier 2: Localhost Micro-Backend',
      tech: 'Python Flask 3.x &bull; Localhost Binding (127.0.0.1)',
      latency: 'Localhost REST Protocol',
      summary: 'Local service bound to 127.0.0.1 handling entity operations, ingestion, automated tools, and gateway dispatch.',
      specs: [
        'Bound strictly to 127.0.0.1 (rejects external network connections)',
        'Origin & Sec-Fetch-Site security validation checks on REST endpoints',
        'Automated tools: /breakdown (Story Decomposer) and /summarize (Executive Briefs)',
        'Modular controllers for projects, tasks, sprint metrics, and document RAG',
      ],
    },
    {
      id: 'db',
      title: 'Tier 3: Two-Database SQLite Storage (Schema v5)',
      tech: 'SQLite 3 &bull; WAL Journal &bull; Connection Pooling',
      latency: 'Local SSD Operations',
      summary: 'Separates operational relational records from volatile AI context and FTS5 search indexes.',
      specs: [
        'Operational DB: %LOCALAPPDATA%\\PMTool\\pmtool.db (Schema v5 with story_points & acceptance_criteria)',
        'AI Context DB: %LOCALAPPDATA%\\AIContextTool\\ai_context.db (FTS5 BM25 index & tool_runs)',
        'PRAGMA journal_mode = WAL for concurrent read operations',
        'Connection pooling with versioned SQLite schema migrations',
      ],
    },
    {
      id: 'ai',
      title: 'Tier 4: Hybrid LLM & RAG Gateway (8,192 Tokens)',
      tech: 'Local Ollama &bull; Optional Gemini API &bull; 8,192 Budget',
      latency: 'Local or Cloud Dispatch',
      summary: 'Routes prompts to local offline models or optional cloud APIs with expanded 8,192 output token budget.',
      specs: [
        'Detects running Ollama models on localhost:11434 (e.g. Llama 3.2, Mistral, Gemma 2)',
        'Expanded 8,192 max output token budget across all providers',
        'Local key encryption at rest using PBKDF2 and authenticated keystream',
        'Section-aware chunking with overlapping sentences and BM25 term retrieval',
      ],
    },
  ],

  // ==========================================
  // 13. PRIVACY & SAAS COMPARISON MATRIX
  // ==========================================
  comparisonRows: [
    {
      feature: 'Data Storage Location',
      pmtool: 'Local storage inside Windows AppData (%LOCALAPPDATA%\\PMTool)',
      cloud: 'Cloud-hosted multi-tenant infrastructure managed by vendor',
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
      feature: 'Retrieval & Query Model',
      pmtool: 'Direct SQLite FTS5/BM25 queries on your local storage drive',
      cloud: 'API and database queries over the internet with variable network roundtrip latency',
    },
    {
      feature: 'Document Ingestion',
      pmtool: 'Local parsing of .pdf, .docx, .md, .txt, .csv directly from local directories',
      cloud: 'Document uploads to cloud servers, subject to upload quotas and cloud storage terms',
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
      desc: 'Fragmenting product context across dozens of browser tabs and separate cloud tools increases cognitive friction. PM Tool unifies documents, PRDs, story breakdown, and sprint boards in a single desktop frame.',
    },
    {
      title: 'Useful Complexity Over Shallow Simplicity',
      desc: 'Simplified to-do apps often hide necessary planning controls. We believe professional product software should be information-dense, keyboard-friendly, and oriented toward real agile execution.',
    },
    {
      title: 'Local Control as a Foundational Default',
      desc: 'Your strategic roadmaps, draft requirements, and sprint tickets should remain under your control by default. Core indexing and backlog management run locally without mandatory remote accounts.',
    },
    {
      title: 'Sovereign Aesthetic Craft',
      desc: 'Software used daily should respect your focus. Obsidian and charcoal palettes, high-density layouts, and responsive micro-interactions preserve flow and reduce visual strain.',
    },
  ],

  // ==========================================
  // 15. RELEASES & ROADMAP TIMELINE (Reflecting Real History)
  // ==========================================
  releases: [
    {
      version: 'v1.3.0',
      badge: 'CURRENT STABLE RELEASE',
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
      isCurrent: true,
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
