import React from 'react';
import { Mail, MessageSquare, Download, Heart } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

export function Footer({ onDownloadClick }) {
  return (
    <footer className="border-t border-white/[0.08] bg-[#0c0c10]/80 py-14 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Brand & Creator Attribution */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-2">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded bg-surface border border-gold/40 flex items-center justify-center font-mono font-bold text-gold text-xs">
              PM
            </div>
            <span className="font-bold text-white text-base tracking-tight">
              PM Tool
            </span>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.04] text-zinc-400 border border-white/10">
              v1.0.0-mvp
            </span>
          </div>

          <p className="text-xs text-zinc-400 max-w-sm">
            A local-first personal product management operating environment. Engineered & crafted by{' '}
            <span className="text-white font-medium">Pranshul Chopra</span>.
          </p>

          <div className="text-[11px] font-mono text-zinc-500 pt-1">
            &copy; {new Date().getFullYear()} PM Tool &bull; MIT Licensed Open Source.
          </div>
        </div>

        {/* Footer Navigation Links */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-zinc-400">
          <a
            href="#specs"
            onClick={onDownloadClick}
            className="hover:text-gold-bright transition-colors flex items-center gap-1.5"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download .exe</span>
          </a>

          <a
            href="https://github.com/Pranshul-Chopra"
            target="_blank"
            rel="noreferrer"
            className="hover:text-gold-bright transition-colors flex items-center gap-1.5"
          >
            <GithubIcon className="w-3.5 h-3.5" />
            <span>GitHub</span>
          </a>

          <a
            href="https://www.linkedin.com/in/pranshul-chopra-269789371/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-gold-bright transition-colors flex items-center gap-1.5"
          >
            <LinkedinIcon className="w-3.5 h-3.5" />
            <span>LinkedIn</span>
          </a>

          <a
            href="mailto:pranshulchopra@gmail.com"
            className="hover:text-gold-bright transition-colors flex items-center gap-1.5"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Email</span>
          </a>

          <a
            href="https://docs.google.com/forms"
            target="_blank"
            rel="noreferrer"
            className="hover:text-gold-bright transition-colors flex items-center gap-1.5"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Feedback</span>
          </a>
        </div>

        {/* System Status Pill */}
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface border border-white/10 text-xs font-mono text-zinc-300">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span>Local Runtime: 100% Operational</span>
        </div>

      </div>
    </footer>
  );
}
