/**
 * PM Tool — Central Site & Release Configuration
 * 
 * Tightened & defensible product claims aligned with the source code:
 * - Local-first architecture (SQLite, Electron, local Flask)
 * - Offline-capable workflows with local Ollama models; optional cloud models (Gemini)
 * - Document-grounded PRD drafting with source references
 * - Ranked full-text search (BM25 via FTS5); dense vector retrieval planned on roadmap
 * - Honest local key derivation and security boundaries
 */

export const siteConfig = {
  // ==========================================
  // 1. BRAND & IDENTITY
  // ==========================================
  name: 'PM Tool',
  shortName: 'PM',
  tagline: 'Local-First Product Management Workspace',
  description:
    'From organizational knowledge to actionable product decisions. Ingest your product documents, retrieve relevant evidence, draft structured PRDs with source references, and turn requirements into a local backlog — from one Windows desktop workspace.',

  // ==========================================
  // 2. ACTIVE VERSION & RELEASE METADATA
  // ==========================================
  release: {
    version: 'v1.0.0',
    versionFull: 'v1.0.0-mvp',
    badge: 'INITIAL RELEASE',
    releaseDate: 'October 2026',
    channel: 'MVP Channel',
    platform: 'Windows 10/11 (64-bit)',
    statusText: 'Local-First Runtime &bull; SQLite Storage Initialized',
    isAirGappedReady: false, // Accurate: offline with Ollama, cloud optional
  },

  // ==========================================
  // 3. DOWNLOADS & BINARIES
  // ==========================================
  downloads: {
    installer: {
      fileName: 'PM-Tool-Setup-1.0.0.exe',
      label: 'Download NSIS Setup (.exe)',
      size: '136 MB',
      url: 'https://github.com/Pranshul-Chopra/pm_tool/releases/download/v1.0.0/PM.Tool-Setup-1.0.0.exe',
      directDownload: true,
    },
    portable: {
      fileName: 'PM-Tool-1.0.0.exe',
      label: 'Portable Standalone (.exe)',
      size: '136 MB',
      url: 'https://github.com/Pranshul-Chopra/pm_tool/releases/download/v1.0.0/PM.Tool-1.0.0.exe',
    },
    sha256: 'e8b39c0f81d4a1329c2980fa2a5c9284d720bcf148942b03cf36f24419ad20e5',
    gitCloneCommand: 'git clone https://github.com/Pranshul-Chopra/pm_tool.git',
    systemPrerequisites: [
      'Windows 10 / Windows 11 (64-bit)',
      '4 GB RAM minimum (8 GB+ recommended for local Ollama)',
      '250 MB Free Storage for application and local SQLite databases',
      'No mandatory cloud accounts for core local workflows',
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
    { name: 'Features', href: '#features' },
    { name: 'Pipelines', href: '#pipelines' },
    { name: 'Architecture', href: '#architecture' },
    { name: 'Comparison', href: '#compare' },
    { name: 'Roadmap', href: '#evolution' },
  ],

  // ==========================================
  // 6. HERO SECTION CONFIG
  // ==========================================
  hero: {
    pillBadge: 'LOCAL-FIRST PRODUCT MANAGEMENT WORKSPACE',
    pillVersionTag: 'Windows 10/11',
    headlineMain: 'From Organizational Knowledge',
    headlineAccent: 'to Actionable Product Decisions.',
    headlineEnd: '',
    subtitle:
      'Ingest your product documents, retrieve relevant evidence, draft structured PRDs with source references, and turn requirements into a local backlog — from one Windows desktop workspace.',
    notice:
      'Core workflows operate offline with local models. Optional cloud-model support (Gemini) is available when configured.',
    specsBadges: [
      { text: 'Local SQLite Storage', type: 'db' },
      { text: 'Ollama Offline Mode', type: 'cpu' },
      { text: 'Document-Grounded Drafting', type: 'search' },
      { text: 'DOCX Export', type: 'doc' },
    ],
    // Desktop App Simulator Mockup
    simulator: {
      windowTitle: 'PM Tool Desktop Shell',
      workspaceTitle: 'Workspace: Core Platform v1.0.0',
      backendHost: '127.0.0.1:5050 [Localhost]',
      activeModel: 'Ollama: llama3.2 (Local Mode)',
      localDbPath: '%LOCALAPPDATA%\\PMTool\\pmtool.db',
      dbStats: 'Indexed Chunks: 128 • SQLite FTS5 Index',
      shortcut: 'Designed for fast on-device retrieval',
    },
  },

  // ==========================================
  // 7. TECH MARQUEE
  // ==========================================
  techMarquee: [
    'LOCAL-ONLY FLASK BACKEND (127.0.0.1)',
    'ELECTRON WINDOW SUPERVISOR',
    'SQLITE WAL CONNECTION POOLING',
    'FTS5 BM25 FULL-TEXT SEARCH',
    'LOCAL OLLAMA OFFLINE INFERENCE',
    'OPTIONAL GOOGLE GEMINI DISPATCH',
    'SECTION-AWARE CHUNKING WITH OVERLAP',
    'STRUCTURED DOCX DOCUMENT EXPORT',
    'LOCAL ENCRYPTED SECRET STORAGE',
    'TWO-DATABASE SEGREGATION',
    'NO MANDATORY CLOUD ACCOUNT',
    'DESIGNED FOR FAST LOCAL RETRIEVAL',
  ],

  // ==========================================
  // 8. PRODUCT SHOWCASE (INTERACTIVE MODULES)
  // ==========================================
  showcaseModules: [
    {
      id: 'prd-studio',
      name: 'AI Copilot & PRD Studio',
      tag: 'Reasoning Pipeline',
      headline: 'Transform high-level product intent into structured PRDs with source references.',
      description:
        'The reasoning pipeline connects active backlog initiatives directly to retrieved document passages and prior decision records. Outputs are structured, formatted with source references, and exportable to Word (.docx) documents.',
    },
    {
      id: 'knowledge-ingestion',
      name: 'Knowledge Pipeline & Chunks',
      tag: 'FTS5 & BM25',
      headline: 'Multi-format document ingestion with section-aware chunking and overlap.',
      description:
        'Parses local .pdf, .docx, .md, .txt, .csv, and .json files directly from your disk into local SQLite FTS5 index tables. Files remain on your machine during local-model operation.',
    },
    {
      id: 'backlog-kanban',
      name: 'Initiatives & Kanban',
      tag: 'Operational Store',
      headline: 'A keyboard-friendly product ticket board linked to decision records.',
      description:
        'Manage sprints and initiatives without sluggish web SPAs. Tasks can be associated with documented Architectural Decision Records (ADRs) and requirements.',
    },
    {
      id: 'decision-ledger',
      name: 'Organizational Decision Ledger',
      tag: 'ADR & PDR',
      headline: 'Persistent history for architectural and product strategy decisions.',
      description:
        'Avoid re-debating settled trade-offs. Capture decision context, options considered, and chosen path in a searchable local SQLite register.',
    },
    {
      id: 'llm-gateway',
      name: 'Hybrid LLM Gateway',
      tag: 'Local & Cloud',
      headline: 'Configurable dispatch across local offline Ollama and cloud providers.',
      description:
        'Run local models (e.g. Llama 3, Mistral) on-device with zero external network traffic. Alternatively, configure cloud models (Gemini) when advanced multimodal reasoning is required.',
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
        'Core operational data — initiatives, tasks, decision records, and local document indexes — resides inside local SQLite databases on your hard drive. Local workflows do not depend on remote server uptime.',
      badge: 'Local SQLite WAL',
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
        'When using local inference via Ollama, document ingestion, ranked search, and PRD drafting execute on-device without sending data across external networks.',
      badge: 'Local Ollama Mode',
    },
    {
      title: 'Designed for Responsive Local Retrieval',
      subtitle: 'SQLite FTS5 on NVMe SSD storage.',
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
    { id: 'architecture', label: 'Architecture & Storage' },
    { id: 'knowledge', label: 'Knowledge & RAG' },
    { id: 'reasoning', label: 'AI Reasoning & PRD' },
    { id: 'operations', label: 'Product Operations' },
    { id: 'security', label: 'Security & Privacy' },
  ],
  features: [
    {
      id: 'pipelines',
      category: 'architecture',
      title: 'The Three Independent Pipelines',
      tagline: 'Separation of Knowledge, Action, and Reasoning.',
      description:
        'Separates operations into distinct stages: Knowledge Pipeline (document ingestion & section chunking), Action Pipeline (permissioned tool calls), and Reasoning Pipeline (context assembly & LLM synthesis).',
      highlight: 'Core Architecture',
    },
    {
      id: 'prd-export',
      category: 'reasoning',
      title: 'Document-Grounded PRD Studio & DOCX Exporter',
      tagline: 'From feature concepts to styled Microsoft Word documents.',
      description:
        'Structures feature requirements into comprehensive PRDs with problem statements, acceptance criteria, and source references. Exports cleanly to Microsoft Word (.docx) with styled headings and tables.',
      highlight: '1-Click Word Export',
    },
    {
      id: 'dual-db',
      category: 'architecture',
      title: 'Two-Database Storage Segregation',
      tagline: 'Clean boundary between relational data and AI context.',
      description:
        'Separates mission-critical relational PM entities (%LOCALAPPDATA%\\PMTool\\pmtool.db) from volatile AI reasoning traces, message histories, and FTS5 search indexes (ai_context.db).',
      highlight: 'SQLite WAL Mode',
    },
    {
      id: 'bm25-search',
      category: 'knowledge',
      title: 'Ranked Full-Text Search (FTS5 BM25)',
      tagline: 'Fast local keyword & term-frequency retrieval over documents.',
      description:
        'Leverages SQLite FTS5 with BM25 ranking for exact terminology, ticket IDs, and technical specifications. Embedded vector search with sqlite-vec is planned on the roadmap.',
      highlight: 'FTS5 BM25 Engine',
    },
    {
      id: 'parsers',
      category: 'knowledge',
      title: 'Multi-Format File Ingestors',
      tagline: 'Local parsing for PDF, DOCX, Markdown, Text, CSV, and JSON.',
      description:
        'Local parsers extract text content and heading structures. Feeds a section-aware chunker with overlapping sentences designed to preserve context across chunk boundaries.',
      highlight: 'Local Parsers',
    },
    {
      id: 'decision-reg',
      category: 'operations',
      title: 'Persistent Decision Register (ADR/PDR)',
      tagline: 'Traceable history for architecture and product trade-offs.',
      description:
        'Record Architectural Decision Records and Product Decisions with context, alternatives considered, chosen path, and rationale. Surfaces relevant past decisions during PRD drafting.',
      highlight: 'Traceable History',
    },
    {
      id: 'llm-gateway',
      category: 'reasoning',
      title: 'Dual-Provider LLM Dispatch Gateway',
      tagline: 'Offline Ollama autonomy with optional Gemini cloud scaling.',
      description:
        'Supports local offline inference with Ollama (Llama 3, Mistral, Phi-3) for disconnected work. When configured by the user, dispatches to cloud models (Gemini) over HTTPS for advanced reasoning.',
      highlight: 'Hybrid Dispatch',
    },
    {
      id: 'dpapi-security',
      category: 'security',
      title: 'Encrypted Local Secret Storage',
      tagline: 'Authenticated symmetric encryption for optional cloud API keys.',
      description:
        'Cloud provider keys are encrypted before storage in SQLite using PBKDF2 key derivation and authenticated HMAC keystreams. No account credentials are required for local-only workflows.',
      highlight: 'Encrypted at Rest',
    },
    {
      id: 'electron-shell',
      category: 'architecture',
      title: 'Desktop Shell & Lifecycle Management',
      tagline: 'Electron Chromium shell supervising a local Flask service.',
      description:
        'Electron manages windowing, port discovery across 5050–5060, desktop notification IPC, and attempts process-tree termination when the desktop window is closed.',
      highlight: 'Desktop Shell',
    },
  ],

  // ==========================================
  // 11. UNIFIED WORKSPACE (THE 5 STEPS)
  // ==========================================
  executionSteps: [
    {
      step: '01',
      name: 'Local Ingestion',
      headline: 'Scan & Ingest Documents from Your Hard Drive',
      description:
        'Point to a local folder with PDF specifications, Word roadmaps, Markdown docs, or notes. Parsers extract text and headings on-device without cloud uploads.',
      example: 'Supported: .pdf, .docx, .md, .txt, .csv, and .json formats.',
      connector: 'feeds into section-aware chunker with overlap',
    },
    {
      step: '02',
      name: 'FTS5 Indexing',
      headline: 'Ranked BM25 Full-Text Indexing',
      description:
        'Chunks are indexed into SQLite FTS5 virtual tables with tokenized BM25 ranking for exact acronyms, names, and technical terms.',
      example: 'Indexed chunks stored in %LOCALAPPDATA%\\AIContextTool\\ai_context.db.',
      connector: 'powers evidence retrieval for context assembly',
    },
    {
      step: '03',
      name: 'Context Assembly',
      headline: 'Ground Prompts with Relevant Document Excerpts',
      description:
        'Context Builder combines active project details, recent decision records, and retrieved document passages before querying the configured LLM (Ollama or Gemini).',
      example: 'Injects identifiable evidence chunks with file names and section headings.',
      connector: 'formats output into structured requirements',
    },
    {
      step: '04',
      name: 'PRD Export',
      headline: 'Export Styled Microsoft Word (.docx) Files',
      description:
        'The Document Generator creates valid Word documents with styled headings, tabular specifications, and referenced evidence for stakeholder review.',
      example: 'Generates editable .docx files saved directly to your local drive.',
      connector: 'allows committing requirements to local backlog',
    },
    {
      step: '05',
      name: 'Backlog Tracking',
      headline: 'Organize Tasks in Local SQLite Backlog',
      description:
        'Requirements can be turned into relational backlog tickets in pmtool.db, tagged with P0/P1 priorities and linked to decision records.',
      example: 'Direct relational updates in pmtool.db without remote SaaS dependency.',
      connector: 'completes the local product cycle',
    },
  ],

  // ==========================================
  // 12. ARCHITECTURE LAYERS
  // ==========================================
  architectureLayers: [
    {
      id: 'shell',
      title: 'Tier 1: Desktop Shell & Supervisor',
      tech: 'Electron &bull; Chromium &bull; Windows IPC Bridge',
      latency: 'Native Desktop Shell',
      summary: 'Manages windowing, port discovery, desktop notifications, and backend process lifecycle.',
      specs: [
        'Port discovery: sweeps ports 5050 to 5060 dynamically on startup',
        'Native Windows notifications via electron-notify IPC',
        'Strict contextIsolation with preloaded safe bridge',
        'Supervises local Flask process shutdown on application window close',
      ],
    },
    {
      id: 'backend',
      title: 'Tier 2: Localhost Micro-Backend',
      tech: 'Python Flask 3.x &bull; Localhost Binding (127.0.0.1)',
      latency: 'Localhost REST Protocol',
      summary: 'Local service bound to 127.0.0.1 handling entity operations, ingestion, and gateway dispatch.',
      specs: [
        'Bound strictly to 127.0.0.1 (rejects external network connections)',
        'Origin & Sec-Fetch-Site security validation checks on REST endpoints',
        'Can be packaged as a standalone executable via PyInstaller',
        'Modular controllers for projects, tasks, decision records, and AI context',
      ],
    },
    {
      id: 'db',
      title: 'Tier 3: Two-Database SQLite Storage',
      tech: 'SQLite 3 &bull; WAL Journal &bull; Connection Pooling',
      latency: 'Local SSD Operations',
      summary: 'Separates operational relational records from volatile AI context and FTS5 search indexes.',
      specs: [
        'Operational DB: %LOCALAPPDATA%\\PMTool\\pmtool.db (projects, tasks, decisions)',
        'AI Context DB: %LOCALAPPDATA%\\AIContextTool\\ai_context.db (FTS5 BM25 index & traces)',
        'PRAGMA journal_mode = WAL for concurrent read operations',
        'Connection pooling with versioned SQLite schema migrations',
      ],
    },
    {
      id: 'ai',
      title: 'Tier 4: Hybrid LLM & RAG Gateway',
      tech: 'Local Ollama &bull; Optional Gemini API &bull; FTS5 BM25',
      latency: 'Local or Cloud Dispatch',
      summary: 'Routes prompts to local offline models or optional cloud APIs based on user configuration.',
      specs: [
        'Detects running Ollama models on localhost:11434 (e.g. Llama 3, Mistral)',
        'Optional Google Gemini cloud fallback for advanced multimodal reasoning',
        'Local key encryption at rest using PBKDF2 and authenticated keystream',
        'Section-aware chunking with overlapping sentences and BM25 term retrieval',
      ],
    },
  ],

  // ==========================================
  // 13. PRIVACY & SAAS COMPARISON MATRIX (Defensible & Accurate)
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
      feature: 'Data Portability',
      pmtool: 'Standard SQLite database files; easy to back up, inspect, or copy locally',
      cloud: 'Vendor-dependent export formats and rate-limited API access',
    },
  ],

  // ==========================================
  // 14. DESIGN PHILOSOPHY TENETS
  // ==========================================
  designTenets: [
    {
      title: 'Eliminate Context Switching',
      desc: 'Fragmenting product context across dozens of browser tabs and separate cloud tools increases cognitive friction. PM Tool unifies documents, PRDs, and backlog items in a single desktop frame.',
    },
    {
      title: 'Useful Complexity Over Shallow Simplicity',
      desc: 'Simplified to-do apps often hide necessary planning controls. We believe professional product software should be information-dense, keyboard-friendly, and oriented toward real execution.',
    },
    {
      title: 'Local Control as a Foundational Default',
      desc: 'Your strategic roadmaps and draft requirements should remain under your control by default. Core indexing and backlog management run locally without mandatory remote accounts.',
    },
    {
      title: 'Sovereign Aesthetic Craft',
      desc: 'Software used daily should respect your focus. Obsidian palettes, high-density layouts, and responsive micro-interactions preserve flow and reduce visual strain.',
    },
  ],

  // ==========================================
  // 15. RELEASES & ROADMAP TIMELINE
  // ==========================================
  releases: [
    {
      version: 'v1.0.0-mvp',
      badge: 'INITIAL RELEASE',
      title: 'The Local-First Core, Knowledge Pipeline & PRD Studio',
      tagline: 'Desktop shell, two-database architecture, and local/cloud LLM dispatch.',
      date: 'Oct 2026',
      decisionRationale:
        'Product managers spend significant time gathering context across dispersed documents and drafting PRDs from scratch. We created a local desktop application that parses local documents, performs ranked BM25 search, drafts structured PRDs, and exports Word documents.',
      highlights: [
        'Electron desktop supervisor managing local Flask service on 127.0.0.1 (ports 5050–5060)',
        'Two-database architecture segregating operational records from AI reasoning traces',
        'Local document parsing (.pdf, .docx, .md, .txt, .csv, .json) with section-aware chunking',
        'Document-grounded PRD generation with source references and Word (.docx) export',
        'LLM Gateway supporting local offline Ollama models and optional cloud Gemini dispatch',
        'Encrypted local key storage at rest using PBKDF2 derivation for optional cloud API keys',
        'Relational Kanban backlog and persistent decision register (ADR/PDR)',
      ],
      isCurrent: true,
    },
    {
      version: 'v1.1.0',
      badge: 'PLANNED ROADMAP',
      title: 'sqlite-vec Embeddings & Decision Dependency Graphs',
      tagline: 'On-device vector search and visual architectural decision mapping.',
      date: 'Q1 2027',
      decisionRationale:
        'BM25 is effective for exact technical terms and identifiers. We plan to incorporate sqlite-vec directly into the SQLite database to support dense semantic vector search alongside BM25 keyword matching.',
      highlights: [
        'Embedded on-device vector embeddings via sqlite-vec extension',
        'Decision Dependency Graph linking ADRs to requirements and backlog tickets',
        'Multi-project workspace management with isolated SQLite databases',
        'Benchmarked retrieval latency over standard test corpus sizes',
      ],
      isCurrent: false,
    },
    {
      version: 'v1.2.0',
      badge: 'FUTURE HORIZON',
      title: 'P2P Encrypted Local Sync & Git-Backed PRD Versioning',
      tagline: 'Local subnet collaboration and version control integrations.',
      date: 'Q2 2027',
      decisionRationale:
        'For teams working in physical proximity or on a local network, direct peer-to-peer sync allows sharing project updates without requiring cloud intermediaries.',
      highlights: [
        'Local subnet peer-to-peer differential synchronization',
        'Git-backed version control integration for PRD diffs and audit logs',
        'Cross-platform desktop binaries for macOS and Linux',
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
      desc: 'Planned embedded vector search within SQLite for hybrid BM25 and dense neural retrieval without external services.',
    },
    {
      title: 'Scope Alignment Checks',
      desc: 'Exploration to assist in checking incoming backlog tickets against approved PRD specifications to highlight divergence.',
    },
    {
      title: 'Local Subnet P2P Exchange',
      desc: 'Researching device-to-device local Wi-Fi synchronization for teams without central cloud relays.',
    },
  ],
};

export default siteConfig;
