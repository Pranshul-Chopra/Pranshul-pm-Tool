import React, { useState, useEffect } from 'react';
import { 
  Download, 
  Menu, 
  X, 
} from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import { siteConfig } from '../config/siteConfig';

export function Navbar({ onDownloadClick }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#09090b]/85 backdrop-blur-md border-b border-white/[0.08] shadow-lg shadow-black/40 py-3.5'
          : 'bg-transparent border-b border-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-lg bg-surface border border-gold/30 flex items-center justify-center shadow-inner group-hover:border-gold transition-colors duration-200">
            <span className="font-mono font-bold text-gold text-lg group-hover:text-gold-bright transition-colors">
              {siteConfig.shortName}
            </span>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="font-bold text-white tracking-tight text-base sm:text-lg group-hover:text-gold-bright transition-colors">
                {siteConfig.name}
              </span>
              <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded-full bg-gold/10 text-gold-bright border border-gold/25 font-medium flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                {siteConfig.release.version}
              </span>
            </div>
            <span className="text-[11px] text-zinc-400 hidden sm:block">
              {siteConfig.tagline}
            </span>
          </div>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-7">
          {siteConfig.navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs uppercase tracking-wider font-mono text-zinc-400 hover:text-gold-bright transition-colors duration-150"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href={siteConfig.socials.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono text-zinc-300 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 transition-all duration-200"
          >
            <GithubIcon className="w-3.5 h-3.5" />
            <span>GitHub</span>
          </a>

          <a
            href="#specs"
            onClick={onDownloadClick}
            className="flex items-center gap-2 px-4 py-1.5 rounded-lg text-xs font-semibold font-mono text-zinc-950 bg-gradient-to-r from-gold to-gold-bright hover:brightness-110 shadow-sm shadow-gold/25 hover:shadow-gold/40 transition-all duration-200"
          >
            <Download className="w-3.5 h-3.5 stroke-[2.5]" />
            <span>Get {siteConfig.name} (.exe)</span>
          </a>
        </div>

        {/* Mobile Hamburger */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-zinc-300 hover:text-white bg-white/[0.05] border border-white/10 focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#09090b]/95 backdrop-blur-xl border-b border-white/[0.08] px-4 pt-3 pb-6 space-y-3 transition-all">
          <div className="grid grid-cols-2 gap-2 pt-2 pb-3 border-b border-white/10">
            {siteConfig.navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-xs font-mono text-zinc-300 hover:text-gold-bright hover:bg-white/[0.04] rounded-md transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-2 pt-2">
            <a
              href={siteConfig.socials.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-xs font-mono text-zinc-300 bg-white/[0.04] border border-white/10"
            >
              <GithubIcon className="w-4 h-4" />
              <span>Explore GitHub</span>
            </a>
            <a
              href="#specs"
              onClick={() => {
                setMobileMenuOpen(false);
                if (onDownloadClick) onDownloadClick();
              }}
              className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-xs font-semibold font-mono text-zinc-950 bg-gradient-to-r from-gold to-gold-bright shadow-lg shadow-gold/20"
            >
              <Download className="w-4 h-4 stroke-[2.5]" />
              <span>Download for Windows (.exe)</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
