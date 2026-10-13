import React, { useState } from 'react';
import { WatermelonBackground } from './components/WatermelonBackground.tsx';
import { BrandHeader } from './components/BrandHeader.tsx';
import { LinksSection } from './components/LinksSection.tsx';
import { FeaturesGrid } from './components/FeaturesGrid.tsx';
import { FloatingWhatsApp } from './components/FloatingWhatsApp.tsx';
import { ShareModal } from './components/ShareModal.tsx';
import { Footer } from './components/Footer.tsx';

export default function App() {
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#FFF0F3] via-[#FFF8F3] to-[#F1FAF5] text-[#2D1217] flex flex-col justify-between selection:bg-[#FF4D6D] selection:text-white">
      {/* Tropical organic background with floating slices & bubbles */}
      <WatermelonBackground />

      {/* Main Content Area: mobile-first optimized layout */}
      <main className="relative z-10 w-full flex-1 flex flex-col items-center">
        {/* Brand Header */}
        <BrandHeader onOpenShareModal={() => setIsShareModalOpen(true)} />

        {/* Priority Links Section */}
        <LinksSection />

        {/* Mini-Cards: Why order from Watermelon */}
        <FeaturesGrid />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Action Button */}
      <FloatingWhatsApp />

      {/* Interactive QR Code & Link Sharing Modal */}
      <ShareModal
        isOpen={isShareModalOpen}
        onClose={() => setIsShareModalOpen(false)}
      />
    </div>
  );
}
