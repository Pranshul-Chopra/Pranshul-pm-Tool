# PM Tool — Official Landing Page

A high-performance, dark-mode showcase website for **PM Tool** (The Local-First Product Management Copilot), crafted in the exact visual design system, obsidian color palette, and interactive architecture of [PranshulOS](https://pranshulos.vercel.app/).

---

## ✨ Features & Visual System

- **Exact PranshulOS Aesthetic:** Deep obsidian dark background (`#09090b`), gold accents (`#c89b3c`, `#e5b95a`), subtle gold glows, and clean typography.
- **Dynamic Mouse Spotlight:** Interactive radial gradients that dynamically track the user's cursor across cards.
- **Custom Cursor & Spring Inertia Ring:** Trailing indicator with responsive scaling when hovering interactive elements.
- **Scroll Progress Indicator:** Top 2.5px gradient reading progress bar.
- **Interactive Live App Simulator:**
  1. *AI Copilot & PRD Studio:* Live prompt simulation with verified document citations (`.pdf`, `.docx`) and 1-tap Word DOCX export.
  2. *Knowledge Ingestion Engine:* Sliding-window chunk inspector, FTS5 BM25 search rankings.
  3. *Initiatives & Kanban:* Interactive tickets with P0/P1 tags, effort estimates, and ADR linkages.
  4. *Organizational Decision Ledger (ADR/PDR):* Permanent architectural & product rationale tracker.
  5. *Air-Gapped LLM Gateway:* Local Ollama vs Google Gemini switch with DPAPI hardware encryption probe.
- **System Architecture Visualizer:** Interactive 4-tier stack inspector (Electron Shell, Headless Flask, Two-Database SQLite Engine, LLM Gateway).
- **Comprehensive SaaS Comparison Matrix:** Side-by-side audit vs Jira, Confluence, Linear, Notion, and ClickUp.
- **Infinite Marquee Banner:** Technical capabilities ticker with hover-pause.
- **Architectural Evolution Timeline:** Detailed roadmap from v1.0.0-mvp to v1.2.0 P2P subnet synchronization.
- **SHA256 & Git Clone Clipboard Copying:** Interactive click-to-copy toasts.

---

## ⚙️ Centralized Configuration & Versioning

All site copy, versions, download links, SHA256 checksums, and roadmap entries are managed from **one central file**:
👉 [`src/config/siteConfig.js`](file:///c:/Users/Pranshul%20Chopra/OneDrive/Desktop/Project/Pmt-Landing-Page/src/config/siteConfig.js)

### How to Introduce a New Version (e.g., `v1.1.0`):
1. Open [`src/config/siteConfig.js`](file:///c:/Users/Pranshul%20Chopra/OneDrive/Desktop/Project/Pmt-Landing-Page/src/config/siteConfig.js)
2. Update the `release` block:
   ```javascript
   release: {
     version: 'v1.1.0',
     versionFull: 'v1.1.0-stable',
     badge: 'CURRENT STABLE',
     releaseDate: 'November 2026',
     ...
   }
   ```
3. Update `downloads` with the new file names, URLs, and SHA256 hash.
4. Add or update milestones under `releases` (Timeline).
5. Done! The entire website (Navbar, Hero buttons, Terminal window, Download cards, Hash verification, Timeline, and Footer) updates automatically.

---

## 🛠️ Tech Stack

- **Framework:** React 19 + Vite 6
- **Styling:** Tailwind CSS v4 + Custom Spotlight CSS Tokens
- **Icons:** Lucide Icons + Custom SVG Vectors
- **Fonts:** Inter + JetBrains Mono (Google Fonts)

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
> Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for Production
```bash
npm run build
```
Production artifacts will be generated in `dist/`.

### 4. Deploy to Vercel
You can deploy directly to Vercel with zero configuration:
```bash
npm install -g vercel
vercel
```
Or connect your GitHub repository to Vercel (Preset: **Vite**, Build command: `npm run build`, Output directory: `dist`).

---

## 👤 Author
Engineered & crafted by **Pranshul Chopra**.
