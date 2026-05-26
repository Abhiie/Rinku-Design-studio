<<<<<<< Updated upstream
import React, { useEffect, useState, useRef } from 'react';
import Lenis from 'lenis';
import { AnimatePresence, motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);
=======
import React, { useEffect } from 'react';
import Lenis from 'lenis';
>>>>>>> Stashed changes

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
<<<<<<< Updated upstream
import ProjectDetail from './components/portfolio/ProjectDetail';
import SocialFloat from './components/SocialFloat';

// Imports data schema list
import { Project, projects } from './lib/projects';
=======
>>>>>>> Stashed changes
import { useLoaderState } from './hooks/useLoaderState';

export default function App() {
  const { done } = useLoaderState();

<<<<<<< Updated upstream
  // Disable browser scroll restoration — belt + braces approach
  useEffect(() => {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    // Immediate reset
    window.scrollTo(0, 0);
    // Also after paint — catches browsers that restore scroll in a second pass
    const raf = requestAnimationFrame(() => {
      window.scrollTo(0, 0);
    });
    return () => cancelAnimationFrame(raf);
  }, []);

  // Let's hook up the Lenis Smooth Scroller on mount
  useEffect(() => {
    if (!done) return;

    // Scroll to top when loader finishes
    window.scrollTo(0, 0);

=======
  // Lenis smooth scroller
  useEffect(() => {
    if (!done) return;
>>>>>>> Stashed changes
    const lenis = new Lenis({
      duration: 1.4,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });
    function raf(time: number) { lenis.raf(time); requestAnimationFrame(raf); }
    requestAnimationFrame(raf);
<<<<<<< Updated upstream

    // Sync Lenis with GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
    };
=======
    return () => lenis.destroy();
>>>>>>> Stashed changes
  }, [done]);

  // Section hash scroll
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
<<<<<<< Updated upstream
      if (hash.startsWith('#project-')) {
        const slug = hash.replace('#project-', '');
        const found = projects.find((p) => p.slug === slug);
        if (found) {
          setActiveProject(found);
          document.body.style.overflow = 'hidden'; // Lock main page scroll
        } else {
          setActiveProject(null);
          document.body.style.overflow = '';
        }
      } else {
        setActiveProject(null);
        document.body.style.overflow = '';

        // If it's a standard scroll segment hash, let's scroll to it nicely
        if (hash) {
          setTimeout(() => {
            const element = document.querySelector(hash);
            if (element) {
              element.scrollIntoView({ behavior: 'smooth' });
            }
          }, 100);
        }
=======
      if (hash && !hash.startsWith('#project-')) {
        const element = document.querySelector(hash);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
>>>>>>> Stashed changes
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigateHome = (hash?: string) => {
    if (hash) {
      window.location.hash = hash;
<<<<<<< Updated upstream
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
=======
      const element = document.querySelector(hash);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream

      {/* Floating Instagram + WhatsApp buttons */}
      <SocialFloat />

      {/* Overlay Slider Page for portfolio details */}
      <AnimatePresence>
        {activeProject && (
          <ProjectDetail
            project={activeProject}
            onClose={closeProjectDetail}
          />
        )}
      </AnimatePresence>
=======
>>>>>>> Stashed changes
    </>
  );
}
