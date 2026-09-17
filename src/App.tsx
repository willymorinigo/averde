/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { PromoBanner } from './components/PromoBanner';
import { Activities } from './components/Activities';
import { AnimalsGallery } from './components/AnimalsGallery';
import { InteractiveGallery } from './components/InteractiveGallery';
import { QuinchoEvents } from './components/QuinchoEvents';
import { VisitCalculator } from './components/VisitCalculator';
import { LocationSection } from './components/LocationSection';
import { FAQSection } from './components/FAQSection';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#1F2923] flex flex-col font-sans">
      <Navbar />
      <main className="flex-1 pb-16 md:pb-0">
        <Hero />
        <AboutSection />
        <PromoBanner />
        <Activities />
        <AnimalsGallery />
        <InteractiveGallery />
        <QuinchoEvents />
        <VisitCalculator />
        <LocationSection />
        <FAQSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

