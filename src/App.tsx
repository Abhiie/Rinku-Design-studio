import React, { useEffect, useState, useRef } from 'react';
import Lenis from 'lenis';
import { AnimatePresence, motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

import Loader from './components/Loader';
import Navbar from './components/Navbar';
import CustomCursor from './components/CustomCursor';
import Hero from './components/sections/Hero';
import BrandStory from './components/sections/BrandStory';
import ArchitectProfile from './components/sections/ArchitectProfile';
import Portfolio from './components/sections/Portfolio';
import Services from './components/sections/Services';
import Testimonials from './components/sections/Testimonials';
import Contact from './components/sections/Contact';
import Footer from './components/sections/Footer';
import ProjectDetail from './components/portfolio/ProjectDetail';
import SocialFloat from './components/SocialFloat';

// Imports data schema list
import { Project, projects } from './lib/projects';
import { useLoaderState } from './hooks/useLoaderState';

export default function App() {
  const { done } = useLoaderState();

  // Lenis smooth scroller
  useEffect(() => {
    if (!done) return;
    const lenis = new Lenis({
      duration: 1.4,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });
    function raf(time: number) { lenis.raf(time); requestAnimationFrame(raf); }
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, [done]);

  // Section hash scroll
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash && !hash.startsWith('#project-')) {
        const element = document.querySelector(hash);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigateHome = (hash?: string) => {
    if (hash) {
      window.location.hash = hash;
      const element = document.querySelector(hash);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <>
      <Loader />
      <CustomCursor />
      <div>
        <Navbar onNavigateHome={handleNavigateHome} currentProjectActive={false} />
        <main id="main-content-scroller">
          <Hero onNavigate={handleNavigateHome} />
          <BrandStory />
          <ArchitectProfile />
          <Portfolio />
          <Services />
          <Testimonials />
          <Contact />
        </main>
        <Footer onNavigateHome={handleNavigateHome} />
      </div>

      {/* Floating Instagram + WhatsApp buttons */}
      <SocialFloat />
    </>
  );
}
