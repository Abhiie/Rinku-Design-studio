import React, { useEffect, useState, useRef } from 'react';
import Lenis from 'lenis';
import { AnimatePresence, motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// Imports component models
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

// Imports data schema list
import { Project, projects } from './lib/projects';
import { useLoaderState } from './hooks/useLoaderState';

export default function App() {
  const { done } = useLoaderState();
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  // Disable browser scroll restoration
  useEffect(() => {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
  }, []);

  // Let's hook up the Lenis Smooth Scroller on mount
  useEffect(() => {
    if (!done) return;

    // Scroll to top when loader finishes
    window.scrollTo(0, 0);

    const lenis = new Lenis({
      duration: 1.4,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Sync Lenis with GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
    };
  }, [done]);

  // Hook up window Hash change detector for detailed routing
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
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
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    // Bind initial load hash if there is one
    handleHashChange();

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const selectProject = (project: Project) => {
    window.location.hash = `#project-${project.slug}`;
  };

  const closeProjectDetail = () => {
    window.location.hash = '#portfolio';
  };

  const handleNavigateHome = (hash?: string) => {
    if (activeProject) {
      // close first
      setActiveProject(null);
      document.body.style.overflow = '';
    }
    
    if (hash) {
      window.location.hash = hash;
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* 5-Second Premium Loader overlay */}
      <Loader />

      {/* Custom Mouse Cursor for Desktop */}
      <CustomCursor />

      {/* Main Container Layout */}
      <div className={`transition-all duration-500 ${activeProject ? 'blur-sm brightness-75 scale-[0.99] pointer-events-none' : ''}`}>
        
        {/* Fixed Navigation Bar panel */}
        <Navbar onNavigateHome={handleNavigateHome} currentProjectActive={!!activeProject} />

        <main id="main-content-scroller">
          {/* Sections list elements order */}
          <Hero onNavigate={handleNavigateHome} />
          
          <BrandStory />
          
          <ArchitectProfile />
          
          <Portfolio onSelectProject={selectProject} />
          
          <Services />
          
          <Testimonials />
          
          <Contact />
        </main>

        {/* Global corporate footer segment elements */}
        <Footer onNavigateHome={handleNavigateHome} />
      </div>

      {/* Overlay Slider Page for portfolio details */}
      <AnimatePresence>
        {activeProject && (
          <ProjectDetail
            project={activeProject}
            onClose={closeProjectDetail}
          />
        )}
      </AnimatePresence>
    </>
  );
}
