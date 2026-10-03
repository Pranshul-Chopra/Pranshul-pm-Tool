import React from 'react';
import { Check, X, Shield, AlertTriangle } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export function PrivacyCompare() {
  const comparison = siteConfig.comparisonRows;

  return (
    <section id="compare" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/[0.08]">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
        <span className="text-xs font-mono uppercase tracking-widest text-gold-bright px-3 py-1 rounded-full bg-gold/10 border border-gold/20 inline-block mb-3">
          Sovereignty Audit
        </span>
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
          Your Product Data Stays Yours.
        </h2>
        <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
          Productivity software should never be a multi-tenant surveillance network in disguise. Here is how {siteConfig.name} contrasts with legacy cloud subscriptions (Jira, Confluence, Linear, Notion).
        </p>
      </div>

      {/* Comparison Matrix Table */}
      <div className="spotlight-card rounded-2xl border border-white/10 bg-[#0d0d12] overflow-hidden shadow-2xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-white/[0.08] bg-surface/90">
                <th className="py-4 px-6 text-xs font-mono uppercase text-zinc-400 font-bold tracking-wider w-1/3">
                  Dimension
                </th>
                <th className="py-4 px-6 text-xs font-mono uppercase text-gold-bright font-bold tracking-wider w-1/3 bg-gold/10 border-x border-gold/20">
                  <div className="flex items-center gap-2">
                    <Shield className="w-4 h-4 text-gold" />
                    <span>{siteConfig.name} (Local-First)</span>
                  </div>
                </th>
                <th className="py-4 px-6 text-xs font-mono uppercase text-zinc-400 font-bold tracking-wider w-1/3">
                  <div className="flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-amber-500/80" />
                    <span>Standard Cloud SaaS</span>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/[0.06] text-xs font-mono">
              {comparison.map((row, idx) => (
                <tr
                  key={idx}
                  className="hover:bg-white/[0.02] transition-colors"
                >
                  <td className="py-4 px-6 font-semibold text-white">
                    {row.feature}
                  </td>
                  <td className="py-4 px-6 bg-gold/[0.04] border-x border-gold/20 text-zinc-200">
                    <div className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                      <span>{row.pmtool}</span>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-zinc-400">
                    <div className="flex items-start gap-2.5">
                      <X className="w-4 h-4 text-zinc-500 shrink-0 mt-0.5" />
                      <span>{row.cloud}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
