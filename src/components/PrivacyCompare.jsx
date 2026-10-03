import React from 'react';
import { Check, X, Shield, Lock, AlertTriangle } from 'lucide-react';

export function PrivacyCompare() {
  const comparison = [
    {
      feature: 'Data Storage Location',
      pmtool: '100% On-Device NVMe/SSD inside Windows AppData (%LOCALAPPDATA%\\PMTool)',
      cloud: 'Remote multi-tenant cloud databases, vulnerable to breaches & foreign subpoenas',
      pmtoolHighlight: true,
    },
    {
      feature: 'Account & Identity Requirements',
      pmtool: 'Zero accounts required. Launch the .exe and start organizing instantly.',
      cloud: 'Mandatory corporate emails, Okta/SAML SSO, password resets, and session tokens',
      pmtoolHighlight: true,
    },
    {
      feature: 'Pricing & Licensing',
      pmtool: '$0 Forever. Open-source, MIT license, zero per-seat subscription fees.',
      cloud: '$20 to $80 per user/month, with essential features gated behind Enterprise tiers',
      pmtoolHighlight: true,
    },
    {
      feature: 'AI Model Privacy & Training',
      pmtool: '100% Air-Gapped via local Ollama. Zero bytes of roadmaps or PRDs leave your PC.',
      cloud: 'Proprietary strategy uploaded to cloud APIs; risks training commercial LLMs',
      pmtoolHighlight: true,
    },
    {
      feature: 'Offline Operation & Airplane Mode',
      pmtool: 'Fully operational without internet. Search, draft PRDs, and update backlogs anywhere.',
      cloud: 'White screen of death during Wi-Fi drops, VPN outages, or SaaS service downtime',
      pmtoolHighlight: true,
    },
    {
      feature: 'Query Latency & UI Responsiveness',
      pmtool: 'Sub-millisecond (< 1ms) local SQLite WAL index queries.',
      cloud: '400ms – 2,500ms network roundtrips for every filter, ticket edit, or page change',
      pmtoolHighlight: true,
    },
    {
      feature: 'Corporate Document Ingestion',
      pmtool: 'Deep native parsers (.pdf, .docx, .md) executed locally on disk.',
      cloud: 'Strict file upload limits, third-party OCR, and security review blockers',
      pmtoolHighlight: true,
    },
    {
      feature: 'Data Sovereignty & Portability',
      pmtool: 'Single .sqlite file. Copy it, back it up to a flash drive, or inspect via sqlite3 CLI.',
      cloud: 'Proprietary vendor lock-in; rate-limited exports and broken CSV backups',
      pmtoolHighlight: true,
    },
  ];

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
          Productivity software should never be a multi-tenant surveillance network in disguise. Here is how PM Tool contrasts with legacy cloud subscriptions (Jira, Confluence, Linear, Notion).
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
                    <span>PM Tool (Local-First)</span>
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
