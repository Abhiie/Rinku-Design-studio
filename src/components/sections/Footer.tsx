import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedLogo from '../AnimatedLogo';

interface FooterProps {
  onNavigateHome: (hash?: string) => void;
}

export default function Footer({ onNavigateHome }: FooterProps) {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setSubscribed(true);
      setNewsletterEmail('');
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  const links = [
    { name: 'Home', hash: '#home' },
    { name: 'Portfolio', hash: '#portfolio' },
    { name: 'About', hash: '#about' },
    { name: 'Services', hash: '#services' },
    { name: 'Contact', hash: '#contact' },
  ];

  return (
    <footer
      id="rds-footer"
      className="bg-[#0A0A0A] text-[#F8F5F0] border-t border-[var(--color-gold)]/20 pt-20 pb-16 relative select-none"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col">
        {/* Row 1 — Information grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 items-start">
          
          {/* Column 1 Logo & descriptive taglines */}
          <div className="lg:col-span-5 flex flex-col space-y-4">
            <div className="flex items-center space-x-3">
              <AnimatedLogo className="w-8 h-8" color="var(--color-gold)" />
              <span className="font-cormorant text-2xl font-bold tracking-[0.14em] text-[var(--color-gold)]">
                RINKU
              </span>
            </div>
            <p className="font-cormorant italic text-lg text-[var(--color-gold)] leading-none">
              Designing Spaces That Breathe.
            </p>
            <p className="font-jost font-light text-xs text-[var(--text-muted)] leading-relaxed max-w-sm">
              Founded by Kunal Patel in 2023. Commercial &amp; residential interiors across Ahmedabad and Gandhinagar — delivered with 95%+ 3D-to-Real accuracy and zero vendor commissions.
            </p>
          </div>

          {/* Column 2 Navigation anchors links */}
          <div className="lg:col-span-3 flex flex-col space-y-4">
            <h4 className="text-[10px] uppercase font-light tracking-[0.2em] text-[var(--color-gold)] font-jost">
              QUICK SECTIONS
            </h4>
            <div className="grid grid-cols-2 gap-y-2.5 gap-x-4">
              {links.map((link) => (
                <button
                  key={link.name}
                  onClick={() => onNavigateHome(link.hash)}
                  className="text-left font-jost font-light text-xs text-[#9A9690] hover:text-[var(--color-gold)] transition-colors cursor-pointer"
                >
                  {link.name}
                </button>
              ))}
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                className="text-left font-jost font-light text-xs text-[#9A9690] hover:text-[var(--color-gold)] transition-colors cursor-pointer"
              >
                Privacy Policy
              </a>
            </div>
          </div>

          {/* Column 3 Newsletter registration input layout */}
          <div className="lg:col-span-4 flex flex-col space-y-4">
            <h4 className="text-[10px] uppercase font-light tracking-[0.2em] text-[var(--color-gold)] font-jost">
              NEWSLETTER SIGNUP
            </h4>
            <p className="font-jost font-light text-xs text-[#9A9690] leading-relaxed max-w-xs">
              Receive curated insights from Rinku Sharma regarding marble veins, travertine trends, and styling patterns.
            </p>
            
            <form onSubmit={handleSubscribe} className="flex space-x-2 w-full pt-2">
              <input
                type="email"
                required
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder="Your email address"
                className="bg-transparent border-b border-[var(--border-color)] text-xs text-[#F8F5F0] py-2 px-1 focus:outline-none focus:border-[var(--color-gold)] w-full font-jost font-light"
              />
              <button
                type="submit"
                className="px-6 py-2 border border-[var(--color-gold)] text-[11px] uppercase tracking-wider font-jost hover:bg-[var(--color-gold)] hover:text-black transition-all cursor-pointer font-medium"
              >
                Subscribe
              </button>
            </form>

            <AnimatePresence>
              {subscribed && (
                <motion.span
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 0.8, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="text-[10px] text-[var(--color-gold)] font-light font-jost tracking-wider block"
                >
                  ✓ Subscribed! Thank you for joining us.
                </motion.span>
              )}
            </AnimatePresence>
          </div>

        </div>

        {/* Row 2 — Divider */}
        <div className="h-[1px] bg-[var(--color-gold)]/10 w-full mb-8" />

        {/* Row 3 — Bottom bar */}
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between py-4 font-jost text-[10px] tracking-[1px] opacity-50 uppercase select-none">
          <div>
            &copy; 2025 Rinku Design Studio. All rights reserved.
          </div>
          <div className="flex items-center space-x-1">
            <span>Designed with</span>
            <span className="text-red-500 animate-pulse text-[12px]">♥</span>
            <span>in Ahmedabad</span>
          </div>
        </div>
      </div>

      {/* Floating Scroll to top trigger button with AnimatePresence */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            key="scroll-top-btn"
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 w-11 h-11 rounded-full border border-[var(--color-gold)] bg-[#0A0A0A]/90 hover:bg-[var(--color-gold)] hover:text-black text-[var(--color-gold)] flex items-center justify-center font-bold shadow-lg transition-colors cursor-pointer z-40 group focus:outline-none"
            aria-label="Scroll to top"
          >
            {/* Pulsing visual circles indicator outline */}
            <div className="absolute inset-0 rounded-full border border-[var(--color-gold)] animate-ping opacity-15 pointer-events-none" />
            <span className="text-lg transition-transform group-hover:-translate-y-0.5 inline-block">↑</span>
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
}
