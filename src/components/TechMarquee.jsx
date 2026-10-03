import React from 'react';
import { 
  Zap, 
} from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export function TechMarquee() {
  const items = siteConfig.techMarquee;

  return (
    <div className="py-6 border-y border-white/[0.08] bg-[#0c0c10]/60 relative overflow-hidden select-none">
      {/* Edge gradient masks */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-bg to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-bg to-transparent z-10 pointer-events-none" />

      <div className="animate-marquee-infinite flex items-center gap-8">
        {/* Render twice for continuous loop */}
        {[...items, ...items].map((label, idx) => (
          <div
            key={idx}
            className="flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-surface/80 border border-white/[0.06] hover:border-gold/40 text-xs font-mono text-zinc-300 hover:text-gold-bright transition-colors whitespace-nowrap cursor-default group"
          >
            <Zap className="w-3.5 h-3.5 text-gold group-hover:scale-110 transition-transform" />
            <span className="tracking-wider">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
