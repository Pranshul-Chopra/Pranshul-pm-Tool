import React from 'react';
import { Mail, MessageSquare, Download } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { PmtLogo } from './PmtLogo';
import { siteConfig } from '../config/siteConfig';

export function Footer({ onDownloadClick }) {
  return (
    <footer className="border-t border-white/[0.08] bg-[#0c0c10]/80 py-14 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Brand & Creator Attribution */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-2">
          <div className="flex items-center gap-2.5">
            <PmtLogo size="sm" />
            <span className="font-bold text-white text-base tracking-tight">
              {siteConfig.name}
            </span>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.04] text-zinc-400 border border-white/10">
              {siteConfig.release.versionFull}
            </span>
          </div>

          <p className="text-xs text-zinc-400 max-w-sm">
            A local-first personal product management operating environment. Engineered & crafted by{' '}
            <span className="text-white font-medium">{siteConfig.author.name}</span>.
          </p>

          <div className="text-[11px] font-mono text-zinc-500 pt-1">
            &copy; {new Date().getFullYear()} {siteConfig.name} &bull; MIT Licensed Open Source.
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
            href={siteConfig.socials.github}
            target="_blank"
            rel="noreferrer"
            className="hover:text-gold-bright transition-colors flex items-center gap-1.5"
          >
            <GithubIcon className="w-3.5 h-3.5" />
            <span>GitHub</span>
          </a>

          <a
            href={siteConfig.socials.linkedin}
            target="_blank"
            rel="noreferrer"
            className="hover:text-gold-bright transition-colors flex items-center gap-1.5"
          >
            <LinkedinIcon className="w-3.5 h-3.5" />
            <span>LinkedIn</span>
          </a>

          <a
            href={`mailto:${siteConfig.author.email}`}
            className="hover:text-gold-bright transition-colors flex items-center gap-1.5"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Email</span>
          </a>

          <a
            href={siteConfig.socials.feedbackForm}
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
          <span dangerouslySetInnerHTML={{ __html: siteConfig.release.statusText }} />
        </div>

      </div>
    </footer>
  );
}
