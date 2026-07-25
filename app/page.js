'use client';
import { useState } from 'react';
import useSmoothScroll from '../hooks/useSmoothScroll';
import LogoPreloader from '../components/LogoPreloader';
import HeaderNav from '../components/HeaderNav';
import HeroSection from '../components/HeroSection';
import BentoGallery from '../components/BentoGallery';
import CapabilitiesShowcase from '../components/CapabilitiesShowcase';
import ProcessTimeline from '../components/ProcessTimeline';
import PortfolioSection from '../components/PortfolioSection';
import RoiCalculator from '../components/RoiCalculator';
import FaqAccordion from '../components/FaqAccordion';
import Footer from '../components/Footer';
import ConsultationModal from '../components/ConsultationModal';
import FloatingCta from '../components/FloatingCta';

export default function Home() {
  useSmoothScroll();
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <LogoPreloader />
      
      <div className="container">
        <HeaderNav onOpenModal={() => setModalOpen(true)} />
        <HeroSection onOpenModal={() => setModalOpen(true)} />
        <BentoGallery />
        <CapabilitiesShowcase onOpenModal={() => setModalOpen(true)} />
        <ProcessTimeline />
        <PortfolioSection />
        <RoiCalculator />
        <FaqAccordion onOpenModal={() => setModalOpen(true)} />
        <Footer onOpenModal={() => setModalOpen(true)} />
      </div>

      {/* STICKY FLOATING ACTION CTA WIDGET */}
      <FloatingCta onOpenModal={() => setModalOpen(true)} />

      <ConsultationModal 
        isOpen={modalOpen} 
        onClose={() => setModalOpen(false)} 
      />
    </>
  );
}
