import React from 'react';
import { CheckCircle2, Sparkles } from 'lucide-react';

export function ToastNotification({ message, onClose }) {
  if (!message) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-bounce duration-300">
      <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-[#14141c] border border-gold/50 text-white shadow-xl shadow-black/80 font-mono text-xs">
        <CheckCircle2 className="w-4 h-4 text-gold-bright shrink-0" />
        <span className="text-zinc-200">{message}</span>
      </div>
    </div>
  );
}
