import React, { useEffect, useState } from 'react';

export function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const currentProgress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(Math.min(100, Math.max(0, currentProgress)));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-[2.5px] z-50 bg-transparent pointer-events-none">
      <div
        className="h-full bg-gradient-to-r from-gold via-gold-bright to-yellow-400 transition-all duration-75 ease-out shadow-[0_0_12px_rgba(200,155,60,0.8)]"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  );
}
