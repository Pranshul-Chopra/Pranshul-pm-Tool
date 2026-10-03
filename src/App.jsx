import React, { useState } from 'react';
import { ScrollProgress } from './components/ScrollProgress';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TechMarquee } from './components/TechMarquee';
import { ProductShowcase } from './components/ProductShowcase';
import { Philosophy } from './components/Philosophy';
import { CoreFeatures } from './components/CoreFeatures';
import { UnifiedWorkspace } from './components/UnifiedWorkspace';
import { ArchitectureVisual } from './components/ArchitectureVisual';
import { PrivacyCompare } from './components/PrivacyCompare';
import { DesignPhilosophy } from './components/DesignPhilosophy';
import { EvolutionTimeline } from './components/EvolutionTimeline';
import { CurrentState } from './components/CurrentState';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { ToastNotification } from './components/ToastNotification';
import { useSpotlight } from './hooks/useSpotlight';

export function App() {
  const [toastMessage, setToastMessage] = useState(null);

  // Activate dynamic mouse spotlight radial gradient tracking
  useSpotlight();

  const handleShowToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 2800);
  };

  const handleDownload = () => {
    handleShowToast('Redirecting to latest Windows x64 release package...');
  };

  return (
    <div className="min-h-screen bg-[#09090b] text-zinc-100 relative selection:bg-gold/30 selection:text-white bg-grid-pattern overflow-x-hidden">
      {/* Top Scroll Indicator */}
      <ScrollProgress />

      {/* Modern Cursor */}
      <CustomCursor />

      {/* Main Navigation */}
      <Navbar onDownloadClick={handleDownload} />

      {/* Page Body */}
      <main className="relative z-10">
        <Hero onDownloadClick={handleDownload} onCopyToast={handleShowToast} />
        
        <TechMarquee />

        <ProductShowcase onCopyToast={handleShowToast} />

        <Philosophy />

        <CoreFeatures />

        <UnifiedWorkspace />

        <ArchitectureVisual />

        <PrivacyCompare />

        <DesignPhilosophy />

        <EvolutionTimeline />

        <CurrentState onCopyToast={handleShowToast} />

        <FinalCTA onDownloadClick={handleDownload} />
      </main>

      {/* Footer */}
      <Footer onDownloadClick={handleDownload} />

      {/* Action Toast */}
      <ToastNotification message={toastMessage} onClose={() => setToastMessage(null)} />
    </div>
  );
}

export default App;
