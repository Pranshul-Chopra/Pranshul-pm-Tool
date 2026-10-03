import React, { useState } from 'react';
import { 
  Download, 
  Copy, 
  Check, 
  ExternalLink, 
  Terminal, 
  HardDrive, 
  Cpu, 
  CheckCircle2, 
  Sparkles
} from 'lucide-react';
import { GithubIcon } from './GithubIcon';

export function CurrentState({ onCopyToast }) {
  const [copiedSha, setCopiedSha] = useState(false);
  const [copiedClone, setCopiedClone] = useState(false);

  const sha256 = 'e8b39c0f81d4a1329c2980fa2a5c9284d720bcf148942b03cf36f24419ad20e5';
  const cloneCmd = 'git clone https://github.com/Pranshul-Chopra/PM-Tool.git';

  const handleCopySha = () => {
    navigator.clipboard.writeText(sha256);
    setCopiedSha(true);
    if (onCopyToast) onCopyToast('SHA256 checksum copied to clipboard');
    setTimeout(() => setCopiedSha(false), 2000);
  };

  const handleCopyClone = () => {
    navigator.clipboard.writeText(cloneCmd);
    setCopiedClone(true);
    if (onCopyToast) onCopyToast('Git clone command copied');
    setTimeout(() => setCopiedClone(false), 2000);
  };

  return (
    <section id="specs" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/[0.08]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Stable Release & Download Card */}
        <div className="lg:col-span-7 spotlight-card rounded-2xl p-6 sm:p-8 border border-gold/40 bg-surface/80 shadow-2xl space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-white/[0.08]">
            <div className="flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
              <span className="text-sm font-mono uppercase text-white font-bold tracking-wider">
                PM Tool v1.0.0 Stable
              </span>
            </div>
            <span className="text-xs font-mono px-2.5 py-1 rounded bg-gold/15 text-gold-bright border border-gold/30">
              Verified Production Build
            </span>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-white mb-2">
              Shipped, Functional & Verified on Windows 10/11
            </h3>
            <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
              Self-contained executable bundles with headless Flask backend and Electron shell. Runs with zero prerequisites or external cloud accounts.
            </p>
          </div>

          {/* Download Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            <a
              href="https://github.com/Pranshul-Chopra"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2.5 px-5 py-3.5 rounded-xl font-mono text-xs font-bold text-zinc-950 bg-gradient-to-r from-gold to-gold-bright hover:brightness-110 shadow-lg shadow-gold/20 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <Download className="w-4 h-4 stroke-[2.5]" />
              <span>Download NSIS Setup (.exe)</span>
            </a>

            <a
              href="https://github.com/Pranshul-Chopra"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-mono text-xs text-zinc-300 bg-surface hover:bg-surface/80 border border-white/10 hover:border-gold/30 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <HardDrive className="w-4 h-4 text-gold" />
              <span>Portable Standalone (.exe)</span>
            </a>
          </div>

          {/* SHA256 Verification */}
          <div className="bg-[#0b0b10] rounded-xl p-4 border border-white/[0.06] space-y-2">
            <div className="flex items-center justify-between text-[11px] font-mono text-zinc-400">
              <span>SHA256 Checksum (Windows x64):</span>
              <button
                onClick={handleCopySha}
                className="text-gold-bright hover:underline flex items-center gap-1"
              >
                {copiedSha ? <Check className="w-3 h-3 text-green-400" /> : <Copy className="w-3 h-3" />}
                <span>{copiedSha ? 'Copied' : 'Copy Hash'}</span>
              </button>
            </div>
            <div className="font-mono text-[11px] text-zinc-300 break-all bg-surface/50 p-2 rounded border border-white/[0.04]">
              {sha256}
            </div>
          </div>

          {/* Git Clone instruction */}
          <div className="bg-[#0b0b10] rounded-xl p-4 border border-white/[0.06] space-y-2">
            <div className="flex items-center justify-between text-[11px] font-mono text-zinc-400">
              <span>Clone & Run from Source:</span>
              <button
                onClick={handleCopyClone}
                className="text-gold-bright hover:underline flex items-center gap-1"
              >
                {copiedClone ? <Check className="w-3 h-3 text-green-400" /> : <Copy className="w-3 h-3" />}
                <span>{copiedClone ? 'Copied' : 'Copy Command'}</span>
              </button>
            </div>
            <div className="font-mono text-xs text-zinc-200 bg-surface/50 p-2 rounded border border-white/[0.04] flex items-center justify-between">
              <code>{cloneCmd}</code>
            </div>
          </div>

          {/* System Specs */}
          <div className="pt-2 text-xs font-mono text-zinc-400 space-y-1.5">
            <div className="text-[10px] uppercase text-zinc-500 font-bold">System Prerequisites:</div>
            <div className="flex flex-wrap gap-4 text-zinc-300">
              <span>&bull; Windows 10/11 64-bit</span>
              <span>&bull; 4GB RAM (8GB+ for Ollama)</span>
              <span>&bull; 250MB Disk Space</span>
              <span>&bull; Zero Accounts Required</span>
            </div>
          </div>
        </div>

        {/* Right Column: Next Horizon & Vision Card */}
        <div className="lg:col-span-5 spotlight-card rounded-2xl p-6 sm:p-8 border border-white/10 bg-surface/50 shadow-2xl space-y-6">
          <div className="pb-4 border-b border-white/[0.08] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-gold-bright" />
              <span className="text-sm font-mono uppercase text-white font-bold tracking-wider">
                Where It Goes Next
              </span>
            </div>
            <span className="text-[10px] font-mono text-zinc-400">Active R&D</span>
          </div>

          <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
            Active engineering explorations designed to evolve PM Tool into an autonomous, proactive organizational copilot.
          </p>

          <div className="space-y-4 font-mono text-xs">
            <div className="p-3.5 rounded-xl bg-surface/80 border border-white/[0.06] space-y-1">
              <div className="font-bold text-white flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                <span>sqlite-vec Embedded Vector Index</span>
              </div>
              <p className="text-[11px] text-zinc-400">
                Direct embedded semantic embeddings inside SQLite for true hybrid BM25 + dense neural retrieval without Docker.
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-surface/80 border border-white/[0.06] space-y-1">
              <div className="font-bold text-white flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                <span>Autonomous Scope Creep Guardian</span>
              </div>
              <p className="text-[11px] text-zinc-400">
                Proactively audits incoming backlog tickets against approved PRDs and highlights unapproved architectural drift.
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-surface/80 border border-white/[0.06] space-y-1">
              <div className="font-bold text-white flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                <span>Encrypted Subnet P2P Exchange</span>
              </div>
              <p className="text-[11px] text-zinc-400">
                Device-to-device local Wi-Fi synchronization for collocated engineering teams without central cloud relays.
              </p>
            </div>
          </div>

          <div className="pt-4 border-t border-white/[0.08]">
            <a
              href="https://github.com/Pranshul-Chopra"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-xs font-mono text-gold-bright hover:underline"
            >
              <GithubIcon className="w-4 h-4" />
              <span>Contribute to Engineering Roadmap</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
