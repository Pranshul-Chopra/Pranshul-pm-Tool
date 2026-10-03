import React from 'react';

export function PmtLogo({ size = 'default', className = '' }) {
  const isSmall = size === 'sm';
  const isLarge = size === 'lg';

  const containerSize = isSmall
    ? 'w-7 h-7 rounded-md text-xs'
    : isLarge
    ? 'w-11 h-11 rounded-xl text-base'
    : 'w-9 h-9 rounded-lg text-sm';

  return (
    <div
      className={`relative inline-flex items-center justify-center font-mono font-bold select-none border border-[#2e2c2a] bg-[#161515] shadow-sm transition-transform duration-200 group-hover:scale-105 ${containerSize} ${className}`}
      style={{ letterSpacing: '-0.03em' }}
    >
      <span className="text-[#EEEBEA] font-extrabold">P</span>
      <span className="text-[#F29E24] font-bold">mT</span>
    </div>
  );
}

export default PmtLogo;
