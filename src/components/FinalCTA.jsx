import React from 'react';
import { Download, MessageSquare, Sparkles, Terminal } from 'lucide-react';
import { GithubIcon } from './GithubIcon';

export function FinalCTA({ onDownloadClick }) {
  return (
    <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center relative overflow-hidden">
      {/* Central radial gold glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[600px] h-[350px] sm:h-[400px] bg-gold/15 rounded-full blur-[140px] pointer-events-none -z-10" />

      {/* Decorative Badge */}
      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface border border-gold/30 mb-8 cursor-default">
        <Sparkles className="w-3.5 h-3.5 text-gold-bright" />
        <span className="text-xs font-mono uppercase tracking-wider text-zinc-300">
          The Sovereign Product Workspace
        </span>
      </div>

      <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
        Take Sovereign Control of Your <br />
        <span className="bg-gradient-to-r from-gold via-gold-bright to-yellow-300 bg-clip-text text-transparent">
          Product Intelligence.
        </span>
      </h2>

      <p className="text-zinc-400 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
        Experience a distraction-free, local-first computing environment built to respect your attention, accelerate PRD drafting, and preserve your intellectual property.
      </p>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
        <a
          href="#specs"
          onClick={onDownloadClick}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl font-mono text-sm font-bold text-zinc-950 bg-gradient-to-r from-gold via-gold-bright to-yellow-400 hover:brightness-110 shadow-xl shadow-gold/25 hover:shadow-gold/40 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
        >
          <Download className="w-4 h-4 stroke-[2.5]" />
          <span>Download PM Tool v1.0.0 (.exe)</span>
        </a>

        <a
          href="https://github.com/Pranshul-Chopra"
          target="_blank"
          rel="noreferrer"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-mono text-xs text-zinc-300 bg-surface/90 hover:bg-surface border border-white/10 hover:border-gold/40 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
        >
          <GithubIcon className="w-4 h-4" />
          <span>Star on GitHub</span>
        </a>

        <a
          href="https://docs.google.com/forms"
          target="_blank"
          rel="noreferrer"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-mono text-xs text-zinc-400 hover:text-white bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.08] transition-colors"
        >
          <MessageSquare className="w-4 h-4" />
          <span>Submit Feedback & Ideas</span>
        </a>
      </div>

      <div className="text-xs font-mono text-zinc-500">
        100% Free &bull; Open Source &bull; Windows 10/11 Native &bull; No Telemetry
      </div>
    </section>
  );
}
