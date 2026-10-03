import React from 'react';
import { HardDrive, DollarSign, ShieldAlert, Zap, Lock, Database } from 'lucide-react';

export function Philosophy() {
  const cards = [
    {
      title: 'Local-First Sovereignty',
      subtitle: 'Your machine is the definitive source of truth.',
      description:
        'Every byte of your data — initiatives, PRDs, backlog tickets, and decision logs — resides exclusively inside local SQLite databases on your SSD. No cloud outage, API deprecation, or server downtime will ever interrupt your product execution.',
      icon: HardDrive,
      badge: 'SQLite WAL Engine',
    },
    {
      title: 'Zero Cloud Tax & Per-Seat Fees',
      subtitle: 'Software that you own, not software you rent.',
      description:
        'Corporate SaaS tools (Jira, Confluence, Linear, Notion) extract $20 to $80 per user per month while holding your project memory hostage. PM Tool is 100% free, self-contained, open-source desktop software that never expires.',
      icon: DollarSign,
      badge: '$0 Lifetime Access',
    },
    {
      title: 'Air-Gapped IP & Roadmap Security',
      subtitle: 'Unannounced features never leak to public AI models.',
      description:
        'When you paste confidential enterprise roadmaps into web-based AI tools, you risk intellectual property leakage. PM Tool runs local LLMs (Ollama) directly on your device with zero telemetry and zero external network calls.',
      icon: Lock,
      badge: 'Zero Telemetry',
    },
    {
      title: 'Sub-Millisecond On-Device Speed',
      subtitle: 'Instant responsiveness with zero network roundtrips.',
      description:
        'Web apps spend hundreds of milliseconds making roundtrips to distant cloud servers for every click. PM Tool executes SQLite queries in under 1 millisecond. Switch views, search across 10,000 document chunks, and filter backlogs with zero latency.',
      icon: Zap,
      badge: '< 1ms Query Latency',
    },
  ];

  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/[0.08]">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-xs font-mono uppercase tracking-widest text-gold-bright px-3 py-1 rounded-full bg-gold/10 border border-gold/20 inline-block mb-3">
          The Anti-SaaS Conviction
        </span>
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-5">
          Most Tools Treat Your PC as a Dumb Terminal for Someone Else’s Cloud.
        </h2>
        <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
          We built PM Tool on the opposite principle: your computer has multi-core CPUs, gigabytes of RAM, and fast NVMe storage. Your product management environment should run locally at full hardware speed.
        </p>
      </div>

      {/* Grid of 4 Spotlight Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {cards.map((card, idx) => {
          const Icon = card.icon;
          return (
            <div
              key={idx}
              className="spotlight-card rounded-2xl p-7 sm:p-9 bg-surface/70 border border-white/[0.08] hover:border-gold/40 flex flex-col justify-between group transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gold/10 border border-gold/25 flex items-center justify-center text-gold group-hover:bg-gold/20 group-hover:scale-105 transition-all">
                    <Icon className="w-6 h-6 text-gold-bright" />
                  </div>
                  <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-white/[0.04] text-zinc-300 border border-white/[0.08]">
                    {card.badge}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 tracking-tight group-hover:text-gold-bright transition-colors">
                  {card.title}
                </h3>
                <h4 className="text-xs font-mono text-gold mb-4 font-semibold uppercase tracking-wider">
                  {card.subtitle}
                </h4>

                <p className="text-zinc-400 text-sm leading-relaxed">
                  {card.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono text-zinc-500">
                <span>Deterministic Desktop Primitives</span>
                <span className="text-gold font-semibold">&bull;&bull;&bull;</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
