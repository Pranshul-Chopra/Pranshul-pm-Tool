import React, { useState } from 'react';
import { 
  Terminal, 
  Database, 
  Cpu, 
  Layers, 
  ShieldCheck, 
} from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export function ArchitectureVisual() {
  const [selectedLayer, setSelectedLayer] = useState('db');

  const getLayerIcon = (id) => {
    switch (id) {
      case 'shell': return Terminal;
      case 'backend': return Layers;
      case 'db': return Database;
      case 'ai': return Cpu;
      default: return Database;
    }
  };

  const layers = siteConfig.architectureLayers;
  const current = layers.find((l) => l.id === selectedLayer) || layers[0];

  return (
    <section id="architecture" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/[0.08]">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
        <span className="text-xs font-mono uppercase tracking-widest text-gold-bright px-3 py-1 rounded-full bg-gold/10 border border-gold/20 inline-block mb-3">
          Zero-Cloud System Topology
        </span>
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
          Intentionally Local Architecture
        </h2>
        <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
          No distributed microservices. No cloud message queues. No SaaS telemetry trackers. Just robust desktop primitives operating in deterministic isolation.
        </p>
      </div>

      {/* Main Architecture Interactive Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Visual Stack Buttons */}
        <div className="lg:col-span-6 space-y-3">
          {layers.map((layer) => {
            const Icon = getLayerIcon(layer.id);
            const isSelected = selectedLayer === layer.id;
            return (
              <div
                key={layer.id}
                onClick={() => setSelectedLayer(layer.id)}
                className={`p-5 rounded-2xl border transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? 'bg-surface/90 border-gold/60 shadow-lg shadow-gold/15 translate-x-2'
                    : 'bg-surface/50 border-white/[0.08] hover:border-gold/30 hover:bg-surface/70'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-xl ${isSelected ? 'bg-gold/20 text-gold-bright' : 'bg-white/[0.04] text-zinc-400'}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-white tracking-tight">
                        {layer.title}
                      </h3>
                      <div className="text-[11px] font-mono text-gold-bright" dangerouslySetInnerHTML={{ __html: layer.tech }} />
                    </div>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.04] text-zinc-400 border border-white/[0.08]">
                    {layer.latency}
                  </span>
                </div>
                <p className="text-xs text-zinc-400 pl-12 line-clamp-1">
                  {layer.summary}
                </p>
              </div>
            );
          })}
        </div>

        {/* Right Column: Deep Layer Inspection Inspector */}
        <div className="lg:col-span-6 spotlight-card rounded-2xl border border-white/10 bg-[#0d0d14] p-6 sm:p-8 shadow-2xl space-y-6">
          <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-gold animate-pulse" />
              <span className="text-xs font-mono uppercase text-zinc-400 tracking-wider font-semibold">
                Tier Inspector &bull; Live Specifications
              </span>
            </div>
            <span className="text-[11px] font-mono px-2.5 py-1 rounded bg-gold/10 text-gold-bright border border-gold/20">
              Verified Primitive
            </span>
          </div>

          <div>
            <h4 className="text-2xl font-bold text-white mb-1">
              {current.title}
            </h4>
            <div className="text-xs font-mono text-gold mb-3" dangerouslySetInnerHTML={{ __html: current.tech }} />
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
              {current.summary}
            </p>
          </div>

          <div className="space-y-3 bg-[#13131c] rounded-xl p-4 border border-white/[0.06]">
            <div className="text-[11px] font-mono uppercase text-zinc-400 font-bold tracking-wider">
              Engineering Guarantees:
            </div>
            <ul className="space-y-2 text-xs font-mono text-zinc-300">
              {current.specs.map((spec, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <span className="text-gold mt-0.5">&bull;</span>
                  <span>{spec}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between text-xs font-mono text-zinc-400">
            <span className="flex items-center gap-1.5 text-zinc-300">
              <ShieldCheck className="w-4 h-4 text-green-400" />
              Zero Outbound Data Leakage
            </span>
            <span className="text-gold-bright">100% Deterministic</span>
          </div>
        </div>

      </div>
    </section>
  );
}
