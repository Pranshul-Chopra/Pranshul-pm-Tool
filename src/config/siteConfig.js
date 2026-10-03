/**
 * PM Tool — Central Site & Release Configuration
 * 
 * Manage your product landing page, releases, version bumps, download URLs,
 * checksums, feature matrix, roadmap, and social links all from this single file.
 */

export const siteConfig = {
  // ==========================================
  // 1. BRAND & IDENTITY
  // ==========================================
  name: 'PM Tool',
  shortName: 'PM',
  tagline: 'Local-First Product Management Copilot',
  description:
    'A high-performance local desktop command center for product managers. Synthesize organizational documents, generate publication-grade PRDs with verified citations, and orchestrate initiatives directly from your Windows desktop — backed by local SQLite and offline LLMs.',

  // ==========================================
  // 2. ACTIVE VERSION & RELEASE METADATA
  // (Update this block when releasing a new version!)
  // ==========================================
  release: {
    version: 'v1.0.0',
    versionFull: 'v1.0.0-mvp',
    badge: 'CURRENT STABLE',
    releaseDate: 'October 2026',
    channel: 'Stable Channel',
    platform: 'Windows 10/11 (64-bit)',
    statusText: '100% Operational &bull; Local SQLite Runtime',
    isAirGappedReady: true,
  },

  // ==========================================
  // 3. DOWNLOADS & BINARIES
  // ==========================================
  downloads: {
    installer: {
      fileName: 'PM-Tool-Setup-1.0.0.exe',
      label: 'Download NSIS Setup (.exe)',
      size: '74.8 MB',
      url: 'https://github.com/Pranshul-Chopra/pm_tool/releases/download/v1/PM.Tool-Setup-1.0.0.exe',
      directDownload: true,
    },
    portable: {
      fileName: 'PM-Tool-1.0.0.exe',
      label: 'Portable Standalone (.exe)',
      size: '68.2 MB',
      url: 'https://github.com/Pranshul-Chopra/pm-tool/releases/download/v1/PM-Tool-1.0.0.exe',
    },
    sha256: 'e8b39c0f81d4a1329c2980fa2a5c9284d720bcf148942b03cf36f24419ad20e5',
    gitCloneCommand: 'git clone https://github.com/Pranshul-Chopra/pm_tool',
    systemPrerequisites: [
      'Windows 10 / Windows 11 (64-bit)',
      '4 GB RAM minimum (8 GB+ recommended for local Ollama)',
      '250 MB Free SSD / NVMe Storage',
      'Zero Accounts or Online Registration Required',
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
    feedbackForm: 'https://docs.google.com/forms/d/e/1FAIpQLSe8jN6FEH7zdEMFxweuku_0mdwlKUcYE1RTB00NjPMOPY0Xew/viewform?usp=header',
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
    pillBadge: 'Local-First AI Product Management Shell',
    pillVersionTag: 'Windows 10/11',
    headlineMain: 'Sovereign Product Intelligence.',
    headlineAccent: 'Zero Cloud Tax.',
    headlineEnd: 'Sub-Millisecond Speed.',
    subtitle:
      'A high-performance local desktop command center for product managers. Synthesize organizational documents, generate publication-grade PRDs with verified citations, and orchestrate initiatives directly from your Windows desktop — backed by local SQLite and offline LLMs.',
    specsBadges: [
      { text: '100% On-Device SQLite WAL', type: 'db' },
      { text: 'Offline Ollama + Cloud Gemini', type: 'cpu' },
      { text: 'BM25 + Semantic Chunking', type: 'search' },
      { text: 'Zero Telemetry / Air-Gapped', type: 'shield' },
    ],
    // Desktop App Simulator Mockup
    simulator: {
      windowTitle: 'PM Tool Desktop Shell',
      workspaceTitle: 'Workspace: Core Platform v1.0.0',
      backendHost: '127.0.0.1:5050 [OK]',
      activeModel: 'Ollama: llama3.2 (Active)',
      localDbPath: '%LOCALAPPDATA%\\PMTool\\pmtool.db',
      dbStats: 'Indexed Chunks: 128 • 0.4ms latency',
      shortcut: 'Global Shortcut: Ctrl + Shift + P',
    },
  },

  // ==========================================
  // 7. TECH MARQUEE
  // ==========================================
  techMarquee: [
    'FLASK 3.X LOCAL-ONLY BACKEND',
    'ELECTRON WINDOW BRIDGE',
    'SQLITE WAL CONNECTION POOLING',
    'FTS5 BM25 HYBRID RETRIEVAL',
    'OFFLINE OLLAMA INFERENCE',
    'NATIVE GOOGLE GEMINI REASONING',
    'SLIDING-WINDOW SEMANTIC CHUNKER',
    '1-CLICK PROFESSIONAL DOCX EXPORT',
    'WIN32 DPAPI HARDWARE ENCRYPTION',
    'TWO-DATABASE SEGREGATION',
    'ZERO CLOUD TELEMETRY',
    'SUB-MILLISECOND ON-DEVICE QUERIES',
  ],

  // ==========================================
  // 8. PRODUCT SHOWCASE (INTERACTIVE MODULES)
  // ==========================================
  showcaseModules: [
    {
      id: 'prd-studio',
      name: 'AI Copilot & PRD Studio',
      tag: 'Reasoning Pipeline',
      headline: 'Transform high-level product intent into publication-grade PRDs with verifiable citations.',
      description:
        'The reasoning engine connects active backlog initiatives directly to ingested company documents and ADRs. Output is structured, cited line-by-line, and exportable to beautifully styled Word (.docx) documents with one tap.',
    },
    {
      id: 'knowledge-ingestion',
      name: 'Knowledge Pipeline & Chunks',
      tag: 'FTS5 & BM25',
      headline: 'Multi-format document ingestion with section-aware sliding-window chunking.',
      description:
        'Parses .pdf, .docx, .md, .txt, .csv, and .json files directly from your disk into local SQLite FTS5 BM25 index tables. Zero file uploads to external vector cloud servers.',
    },
    {
      id: 'backlog-kanban',
      name: 'Initiatives & Kanban',
      tag: 'Operational Store',
      headline: 'A keyboard-driven product ticket board linked directly to architectural decisions.',
      description:
        'Manage sprints and initiatives without sluggish web SPAs. Every task can be traced directly to an Architectural Decision Record (ADR) or customer insight document.',
    },
    {
      id: 'decision-ledger',
      name: 'Organizational Decision Ledger',
      tag: 'ADR & PDR',
      headline: 'Permanent, immutable memory for architectural and product strategy decisions.',
      description:
        'Never re-debate a decision that was settled six months ago. Search past trade-offs, rationale, and approved stakeholders with sub-millisecond query speed.',
    },
    {
      id: 'llm-gateway',
      name: 'Air-Gapped LLM Gateway',
      tag: 'Privacy First',
      headline: 'Seamless orchestration across local offline Ollama and high-reasoning Gemini.',
      description:
        'Toggle instantly between 100% offline air-gapped models (Llama 3, Mistral, DeepSeek) for confidential roadmaps, and cloud APIs with DPAPI hardware-encrypted credentials.',
    },
  ],

  // ==========================================
  // 9. PHILOSOPHY PILLARS
  // ==========================================
  philosophy: [
    {
      title: 'Local-First Sovereignty',
      subtitle: 'Your machine is the definitive source of truth.',
      description:
        'Every byte of your data — initiatives, PRDs, backlog tickets, and decision logs — resides exclusively inside local SQLite databases on your SSD. No cloud outage, API deprecation, or server downtime will ever interrupt your product execution.',
      badge: 'SQLite WAL Engine',
    },
    {
      title: 'Zero Cloud Tax & Per-Seat Fees',
      subtitle: 'Software that you own, not software you rent.',
      description:
        'Corporate SaaS tools (Jira, Confluence, Linear, Notion) extract $20 to $80 per user per month while holding your project memory hostage. PM Tool is 100% free, self-contained, open-source desktop software that never expires.',
      badge: '$0 Lifetime Access',
    },
    {
      title: 'Air-Gapped IP & Roadmap Security',
      subtitle: 'Unannounced features never leak to public AI models.',
      description:
        'When you paste confidential enterprise roadmaps into web-based AI tools, you risk intellectual property leakage. PM Tool runs local LLMs (Ollama) directly on your device with zero telemetry and zero external network calls.',
      badge: 'Zero Telemetry',
    },
    {
      title: 'Sub-Millisecond On-Device Speed',
      subtitle: 'Instant responsiveness with zero network roundtrips.',
      description:
        'Web apps spend hundreds of milliseconds making roundtrips to distant cloud servers for every click. PM Tool executes SQLite queries in under 1 millisecond. Switch views, search across 10,000 document chunks, and filter backlogs with zero latency.',
      badge: '< 1ms Query Latency',
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
        'Instead of dumping unstructured files into an LLM context, PM Tool isolates operations into three deterministic pipelines: the Knowledge Pipeline (ingestion & chunking), Action Pipeline (permissioned tool execution), and Reasoning Pipeline (context-augmented synthesis).',
      highlight: 'Core Architecture',
    },
    {
      id: 'prd-export',
      category: 'reasoning',
      title: 'Automated PRD Studio & DOCX Exporter',
      tagline: 'From unstructured intent to publication-grade Microsoft Word files.',
      description:
        'Turns high-level feature requests into comprehensive PRDs featuring problem statements, non-functional constraints, user stories, and acceptance criteria. Formats with executive XML styles, corporate headings, and tabular specs ready for stakeholder distribution.',
      highlight: '1-Click Word Export',
    },
    {
      id: 'dual-db',
      category: 'architecture',
      title: 'Two-Database Storage Segregation',
      tagline: 'Clean boundary between relational records and AI trace telemetry.',
      description:
        'Separates mission-critical relational PM data (%LOCALAPPDATA%\\PMTool\\pmtool.db) from volatile, high-frequency AI reasoning traces and FTS5 BM25 document indexes (ai_context.db). Zero risk of DB bloat or schema pollution.',
      highlight: 'SQLite WAL Mode',
    },
    {
      id: 'bm25-search',
      category: 'knowledge',
      title: 'Local FTS5 BM25 Retrieval Engine',
      tagline: 'Sub-millisecond keyword and semantic search over corporate files.',
      description:
        'Leverages SQLite FTS5 full-text search with tokenized BM25 ranking. Query past meeting notes, architecture RFCs, and customer research transcripts in under 2ms without spinning up heavy vector containers.',
      highlight: 'Sub-2ms Search',
    },
    {
      id: 'parsers',
      category: 'knowledge',
      title: 'Deep Multi-Format File Ingestors',
      tagline: 'Native parsing for PDF, Word, Markdown, Text, CSV, and JSON.',
      description:
        'Robust local parsers inspect table layouts, header structures, and section hierarchies. Feeds a section-aware sliding-window chunker with 100-token semantic overlap to ensure zero context loss at chunk boundaries.',
      highlight: 'Native Parsers',
    },
    {
      id: 'decision-reg',
      category: 'operations',
      title: 'Organizational Decision Register (ADR/PDR)',
      tagline: 'Permanent institutional memory for strategy and trade-offs.',
      description:
        'Capture Architectural Decision Records and Product Decisions with context, alternatives considered, chosen path, and stakeholder rationale. Automatically surfaces relevant past decisions when drafting new PRDs.',
      highlight: 'Traceable History',
    },
    {
      id: 'llm-gateway',
      category: 'reasoning',
      title: 'Cascading Dual-LLM Gateway',
      tagline: 'Offline Ollama autonomy with native Google Gemini cloud scaling.',
      description:
        'Run 100% offline air-gapped models (Llama 3, Mistral, DeepSeek) for confidential internal specs. When high-reasoning multimodal analysis is needed, cascade effortlessly to Google Gemini 1.5 Pro via native GenAI endpoints.',
      highlight: 'Hybrid Intelligence',
    },
    {
      id: 'dpapi-security',
      category: 'security',
      title: 'Hardware-Bound Win32 DPAPI Encryption',
      tagline: 'Zero plaintext API keys stored on your filesystem.',
      description:
        'When optional cloud LLM keys are supplied, they are protected with Windows CryptProtectData, binding encryption keys to the user logon SID and local machine hardware tokens. Cannot be copied or read by external processes.',
      highlight: 'Win32 DPAPI',
    },
    {
      id: 'electron-shell',
      category: 'architecture',
      title: 'Isolated Desktop Shell & Supervisor',
      tagline: 'Electron Chromium shell managing an isolated Flask backend.',
      description:
        'The Electron supervisor automatically discovers open ports (starting at 5050), launches the headless Flask service, establishes an isolated IPC notification bridge, and guarantees clean process tree-killing on application exit.',
      highlight: 'Native Windows Shell',
    },
  ],

  // ==========================================
  // 11. UNIFIED WORKSPACE (THE 5 STEPS)
  // ==========================================
  executionSteps: [
    {
      step: '01',
      name: 'Local Ingestion',
      headline: 'Ingest Organizational Files Without Cloud Uploads',
      description:
        'Drop PDF specifications, Word roadmaps, Markdown docs, and meeting transcripts into your local project workspace. Our native parsers extract section headings and tables instantly.',
      example: 'Parsed: Enterprise_Architecture_v2.pdf (42 pages, 18 tables) in 0.38 seconds.',
      connector: 'feeds into semantic sliding-window chunker',
    },
    {
      step: '02',
      name: 'FTS5 Indexing',
      headline: 'Tokenized BM25 Full-Text Retrieval',
      description:
        'Chunks are indexed into SQLite FTS5 BM25 virtual tables with token boundary preservation. Query sub-strings, technical acronyms, and requirements in sub-2ms.',
      example: 'Index: 254 chunks with term frequency BM25 rankings saved to %LOCALAPPDATA%\\AIContextTool.',
      connector: 'powers verified context retrieval',
    },
    {
      step: '03',
      name: 'AI Synthesis',
      headline: 'Context-Augmented Reasoning with Strict Citations',
      description:
        'Context Builder combines your active project state, recent ADR decisions, and relevant evidence chunks before querying Ollama (offline) or Gemini. Hallucinations are actively suppressed.',
      example: 'Synthesized PRD draft with 6 verifiable line citations back to original company PDFs.',
      connector: 'formats into professional publication artifacts',
    },
    {
      step: '04',
      name: 'PRD Export',
      headline: '1-Click Publication-Grade Microsoft Word (.docx)',
      description:
        'The Document Generator engine constructs valid XML Word files with custom color palettes, styled tables, executive callout boxes, and document revision histories.',
      example: 'Generated: PRD_Offline_P2P_Sync_v1.docx ready for executive stakeholder sign-off.',
      connector: 'commits requirements directly to execution board',
    },
    {
      step: '05',
      name: 'Execution & Delivery',
      headline: 'Commit Directly to Local SQLite Backlog',
      description:
        'With one click, requirements are transformed into relational tickets in pmtool.db, tagged with P0/P1 priorities, estimated effort, and linked directly to Architectural Decision Records.',
      example: 'Created 8 actionable engineering tickets in pmtool.db with foreign key ADR linkages.',
      connector: 'closes the loop with zero cloud subscription fees',
    },
  ],

  // ==========================================
  // 12. ARCHITECTURE LAYERS
  // ==========================================
  architectureLayers: [
    {
      id: 'shell',
      title: 'Tier 1: Desktop Shell & Supervisor',
      tech: 'Electron 32 &bull; Chromium &bull; Windows Native Bridge',
      latency: '< 5ms Startup IPC',
      summary: 'Sandboxed window manager with cascading port discovery and graceful process lifecycle termination.',
      specs: [
        'Automatic Flask port discovery: sweeps 5050 to 5060 dynamically',
        'Native Windows notification bridge via electron-notify IPC',
        'Strict contextIsolation: true with preloaded safe API bridge',
        'Windows taskkill /t tree-kill on window exit to eliminate orphaned Python processes',
      ],
    },
    {
      id: 'backend',
      title: 'Tier 2: Headless Micro-Backend',
      tech: 'Python Flask 3.x &bull; PyInstaller &bull; Localhost Only',
      latency: '0.4ms Internal API Response',
      summary: 'High-performance local service bound exclusively to 127.0.0.1 with security middleware.',
      specs: [
        'Local-only binding: rejects external LAN/WAN connections unconditionally',
        'Origin & Sec-Fetch-Site validation header inspection on all REST mutations',
        'Headless distribution packaged via PyInstaller with zero user Python dependency',
        'Modular route controllers: /api/projects, /api/tasks, /api/ai, /api/documents',
      ],
    },
    {
      id: 'db',
      title: 'Tier 3: Two-Database Storage Engine',
      tech: 'SQLite 3 &bull; WAL Journal &bull; Connection Pooling',
      latency: '< 1ms Transaction Commit',
      summary: 'Complete partition between operational project records and volatile AI reasoning traces.',
      specs: [
        'Operational DB: %LOCALAPPDATA%\\PMTool\\pmtool.db (projects, tasks, decisions)',
        'Context DB: %LOCALAPPDATA%\\AIContextTool\\ai_context.db (FTS5 BM25 index & traces)',
        'PRAGMA journal_mode = WAL for simultaneous read/write concurrency without locking',
        'Thread-safe connection pooling with automatic idempotent schema migrations',
      ],
    },
    {
      id: 'ai',
      title: 'Tier 4: Air-Gapped AI & RAG Gateway',
      tech: 'Ollama Offline &bull; Gemini 1.5 &bull; Win32 DPAPI',
      latency: 'Air-Gapped &bull; 0 Bytes Egress',
      summary: 'Hybrid LLM gateway supporting 100% offline local inference with hardware-encrypted secrets.',
      specs: [
        'Local Ollama probe: auto-detects Llama 3, Mistral, Phi-3 running on 127.0.0.1:11434',
        'Google Gemini 1.5 Pro cloud fallback for high-reasoning multimodal tasks',
        'Win32 CryptProtectData encryption ties secrets to machine hardware and user logon SID',
        'Section-aware sliding-window chunker with FTS5 BM25 retrieval token weighting',
      ],
    },
  ],

  // ==========================================
  // 13. PRIVACY & SAAS COMPARISON MATRIX
  // ==========================================
  comparisonRows: [
    {
      feature: 'Data Storage Location',
      pmtool: '100% On-Device NVMe/SSD inside Windows AppData (%LOCALAPPDATA%\\PMTool)',
      cloud: 'Remote multi-tenant cloud databases, vulnerable to breaches & foreign subpoenas',
    },
    {
      feature: 'Account & Identity Requirements',
      pmtool: 'Zero accounts required. Launch the .exe and start organizing instantly.',
      cloud: 'Mandatory corporate emails, Okta/SAML SSO, password resets, and session tokens',
    },
    {
      feature: 'Pricing & Licensing',
      pmtool: '$0 Forever. Open-source, MIT license, zero per-seat subscription fees.',
      cloud: '$20 to $80 per user/month, with essential features gated behind Enterprise tiers',
    },
    {
      feature: 'AI Model Privacy & Training',
      pmtool: '100% Air-Gapped via local Ollama. Zero bytes of roadmaps or PRDs leave your PC.',
      cloud: 'Proprietary strategy uploaded to cloud APIs; risks training commercial LLMs',
    },
    {
      feature: 'Offline Operation & Airplane Mode',
      pmtool: 'Fully operational without internet. Search, draft PRDs, and update backlogs anywhere.',
      cloud: 'White screen of death during Wi-Fi drops, VPN outages, or SaaS service downtime',
    },
    {
      feature: 'Query Latency & UI Responsiveness',
      pmtool: 'Sub-millisecond (< 1ms) local SQLite WAL index queries.',
      cloud: '400ms – 2,500ms network roundtrips for every filter, ticket edit, or page change',
    },
    {
      feature: 'Corporate Document Ingestion',
      pmtool: 'Deep native parsers (.pdf, .docx, .md) executed locally on disk.',
      cloud: 'Strict file upload limits, third-party OCR, and security review blockers',
    },
    {
      feature: 'Data Sovereignty & Portability',
      pmtool: 'Single .sqlite file. Copy it, back it up to a flash drive, or inspect via sqlite3 CLI.',
      cloud: 'Proprietary vendor lock-in; rate-limited exports and broken CSV backups',
    },
  ],

  // ==========================================
  // 14. DESIGN PHILOSOPHY TENETS
  // ==========================================
  designTenets: [
    {
      title: 'Eliminate Context Switching',
      desc: 'Every second spent hunting across 20 browser tabs, disconnected Jira issues, and buried Google Drive specs is product focus destroyed. PM Tool unifies your entire context in one native desktop frame.',
    },
    {
      title: 'Useful Complexity Over Shallow Simplicity',
      desc: 'Toy task apps hide all necessary controls behind vast empty white space. We believe professional product software must be information-dense, keyboard-navigable, and packed with deterministic utility.',
    },
    {
      title: 'Air-Gapped Security as a Non-Negotiable',
      desc: 'Data privacy is not an enterprise upcharge. We architected PM Tool so that all indexing, AI reasoning, and decision tracking execute natively on your machine without requiring remote authorization.',
    },
    {
      title: 'Sovereign Aesthetic Craft',
      desc: 'Software you inspect for 8 hours a day should honor your attention. Deep obsidian palettes, offline IBM Plex typography, and tactile micro-interactions preserve flow and prevent visual fatigue.',
    },
  ],

  // ==========================================
  // 15. RELEASES & ROADMAP TIMELINE
  // (Easily add future versions here!)
  // ==========================================
  releases: [
    {
      version: 'v1.0.0-mvp',
      badge: 'CURRENT STABLE',
      title: 'The Local-First Core, Knowledge Pipeline & PRD Studio',
      tagline: 'Electron desktop shell, two-database architecture, and offline AI execution.',
      date: 'Oct 2026',
      decisionRationale:
        'Product managers spend hours manually transferring requirements from messy PDFs into Jira and writing PRDs from scratch. We built a local desktop application that ingests internal documents, performs sub-millisecond BM25 retrieval, and generates publication-ready Word PRDs backed by local SQLite.',
      highlights: [
        'Electron desktop supervisor with cascading port sweep (5050–5060) and graceful tree-kill',
        'Headless Python Flask backend bound strictly to 127.0.0.1 with security middleware',
        'Two-database architecture segregating operational data from high-frequency AI traces',
        'Multi-format file parsers (.pdf, .docx, .md, .txt, .csv, .json) with sliding-window chunking',
        'Automated PRD generator with custom XML Word (.docx) styles, tables, and citations',
        'Dual LLM Gateway supporting local offline Ollama and Google Gemini 1.5 Pro',
        'Windows DPAPI CryptProtectData hardware-bound encryption for API secrets',
      ],
      isCurrent: true,
    },
    {
      version: 'v1.1.0',
      badge: 'ACTIVE DEVELOPMENT',
      title: 'sqlite-vec Embeddings & Decision Dependency Graphs',
      tagline: 'On-device vector search and visual architectural decision mapping.',
      date: 'Q1 2027',
      decisionRationale:
        'Keyword search is fast, but semantic meaning captures intent across disparate terminology. We are introducing sqlite-vec directly inside the local database file to enable hybrid BM25 + dense vector ranking without requiring heavy Python vector service containers.',
      highlights: [
        'Embedded on-device vector embeddings via sqlite-vec extension',
        'Interactive SVG Decision Dependency Graph linking ADRs to requirements',
        'Multi-project workspace switcher with isolated SQLite schemas',
        'Automated Sprint Retrospective synthesizer based on completed backlog tickets',
      ],
      isCurrent: false,
    },
    {
      version: 'v1.2.0',
      badge: 'FUTURE HORIZON',
      title: 'P2P Encrypted Local Sync & Git-Backed PRD Versioning',
      tagline: 'Serverless team collaboration over local Wi-Fi subnets.',
      date: 'Q2 2027',
      decisionRationale:
        'Engineering and product teams work in the same physical office or local network. PM Tool will support bilateral peer-to-peer sync directly between machines over local Wi-Fi, completely bypassing cloud intermediaries.',
      highlights: [
        'Local subnet P2P differential synchronization with zero central servers',
        'Git-backed version control integration for PRD diffs and stakeholder comments',
        'Cross-platform portable binaries for macOS and Linux desktops',
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
      desc: 'Direct embedded semantic embeddings inside SQLite for true hybrid BM25 + dense neural retrieval without Docker.',
    },
    {
      title: 'Autonomous Scope Creep Guardian',
      desc: 'Proactively audits incoming backlog tickets against approved PRDs and highlights unapproved architectural drift.',
    },
    {
      title: 'Encrypted Subnet P2P Exchange',
      desc: 'Device-to-device local Wi-Fi synchronization for collocated engineering teams without central cloud relays.',
    },
  ],
};

export default siteConfig;
