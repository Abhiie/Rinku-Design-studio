import React, { useEffect } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

import Loader from './components/Loader';
import Navbar from './components/Navbar';
import CustomCursor from './components/CustomCursor';
import Footer from './components/sections/Footer';
import SocialFloat from './components/SocialFloat';
import { useLoaderState } from './hooks/useLoaderState';

// Pages
import HomePage from './pages/HomePage';
import PortfolioPage from './pages/PortfolioPage';
import Panorama3DPage from './pages/Panorama3DPage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function AppContent() {
  const { done } = useLoaderState();

  // Lenis smooth scroller — connected to GSAP ScrollTrigger
  useEffect(() => {
    if (!done) return;
    const lenis = new Lenis({
      duration: 1.4,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    // Bridge Lenis scroll events to ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);

    // Drive Lenis from GSAP's ticker instead of manual rAF
    const tickerCallback = (time: number) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(tickerCallback);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(tickerCallback);
      lenis.destroy();
    };
  }, [done]);

  return (
    <>
      <Loader />
      <CustomCursor />
      <ScrollToTop />
      <div>
        <Navbar />
        <main id="main-content-scroller">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/3d-walkthrough" element={<Panorama3DPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/contact" element={<ContactPage />} />
            {/* Fallback to home for unknown routes */}
            <Route path="*" element={<HomePage />} />
          </Routes>
        </main>
        <Footer />
      </div>

      {/* Floating Instagram + WhatsApp buttons */}
      <SocialFloat />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}
