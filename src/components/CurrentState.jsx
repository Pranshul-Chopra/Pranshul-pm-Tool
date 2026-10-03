import React, { useState } from 'react';
import { 
  Download, 
  Copy, 
  Check, 
  ExternalLink, 
  HardDrive, 
  Sparkles,
} from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import { siteConfig } from '../config/siteConfig';

export function CurrentState({ onCopyToast }) {
  const [copiedSha, setCopiedSha] = useState(false);
  const [copiedClone, setCopiedClone] = useState(false);

  const sha256 = siteConfig.downloads.sha256;
  const cloneCmd = siteConfig.downloads.gitCloneCommand;

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
                {siteConfig.name} {siteConfig.release.version} ({siteConfig.release.badge})
              </span>
            </div>
            <span className="text-xs font-mono px-2.5 py-1 rounded bg-gold/15 text-gold-bright border border-gold/30">
              Windows Desktop Package
            </span>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-white mb-2">
              Packaged for {siteConfig.release.platform}
            </h3>
            <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
              Standalone installer and portable executable containing the Electron shell and local Flask service. Core local workflows run without mandatory cloud accounts.
            </p>
          </div>

          {/* Download Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            <a
              href={siteConfig.downloads.installer.url}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2.5 px-5 py-3.5 rounded-xl font-mono text-xs font-bold text-zinc-950 bg-gradient-to-r from-gold to-gold-bright hover:brightness-110 shadow-lg shadow-gold/20 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <Download className="w-4 h-4 stroke-[2.5]" />
              <span>{siteConfig.downloads.installer.label}</span>
            </a>

            <a
              href={siteConfig.downloads.portable.url}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-mono text-xs text-zinc-300 bg-surface hover:bg-surface/80 border border-white/10 hover:border-gold/30 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <HardDrive className="w-4 h-4 text-gold" />
              <span>{siteConfig.downloads.portable.label}</span>
            </a>
          </div>

          {/* SHA256 Verification */}
          <div className="bg-[#0b0b10] rounded-xl p-4 border border-white/[0.06] space-y-2">
            <div className="flex items-center justify-between text-[11px] font-mono text-zinc-400">
              <span>SHA256 Checksum ({siteConfig.release.platform}):</span>
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
            <div className="text-[10px] uppercase text-zinc-500 font-bold">System Notes:</div>
            <div className="flex flex-wrap gap-4 text-zinc-300">
              {siteConfig.downloads.systemPrerequisites.map((req, i) => (
                <span key={i}>&bull; {req}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Next Horizon & Vision Card */}
        <div className="lg:col-span-5 spotlight-card rounded-2xl p-6 sm:p-8 border border-white/10 bg-surface/50 shadow-2xl space-y-6">
          <div className="pb-4 border-b border-white/[0.08] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-gold-bright" />
              <span className="text-sm font-mono uppercase text-white font-bold tracking-wider">
                Planned Roadmap
              </span>
            </div>
            <span className="text-[10px] font-mono text-zinc-400">Future R&D</span>
          </div>

          <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
            Active explorations to extend {siteConfig.name} with on-device vector embeddings, scope checking, and local sync.
          </p>

          <div className="space-y-4 font-mono text-xs">
            {siteConfig.nextHorizon.map((item, idx) => (
              <div key={idx} className="p-3.5 rounded-xl bg-surface/80 border border-white/[0.06] space-y-1">
                <div className="font-bold text-white flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                  <span>{item.title}</span>
                </div>
                <p className="text-[11px] text-zinc-400">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="pt-4 border-t border-white/[0.08]">
            <a
              href={siteConfig.socials.githubRepo}
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
