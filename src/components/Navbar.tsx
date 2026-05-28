import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeToggle from './ThemeToggle';
import { useLoaderState } from '../hooks/useLoaderState';
import AnimatedLogo from './AnimatedLogo';

interface NavbarProps {
  onNavigateHome: (hash?: string) => void;
  currentProjectActive: boolean;
}

export default function Navbar({ onNavigateHome, currentProjectActive }: NavbarProps) {
  const { done } = useLoaderState();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', hash: '#home' },
    { name: 'Portfolio', hash: '#portfolio' },
    { name: 'About', hash: '#about' },
    { name: 'Services', hash: '#services' },
    { name: 'Contact', hash: '#contact' },
  ];

  const handleLinkClick = (hash: string) => {
    setMobileMenuOpen(false);
    onNavigateHome(hash);
  };

  return (
    <>
      <AnimatePresence>
        {done && (
          <motion.header
            id="rds-navbar"
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 h-[80px] border-b border-[var(--border-color)] flex items-center ${
              scrolled
                ? 'bg-[var(--bg-color)]/95 backdrop-blur-md'
                : 'bg-[var(--bg-color)]'
            }`}
          >
            <div className="w-full mx-auto px-10 flex items-center justify-between">
              {/* Logo */}
              <button
                onClick={() => handleLinkClick('#home')}
                className="z-50 cursor-pointer flex items-center gap-3"
              >
                <AnimatedLogo className="w-9 h-9" color="var(--text-color)" />
                <div className="flex flex-col leading-none gap-[3px]">
                  <span className="font-cormorant text-[20px] font-bold text-[var(--text-color)] tracking-[3px] transition-colors duration-300 uppercase leading-none">
                    Rinku
                  </span>
                  <span className="font-jost text-[9px] font-light text-[var(--text-color)] tracking-[0.25em] uppercase opacity-70">
                    Design Studio
                  </span>
                </div>
              </button>

              {/* Desktop Nav Links */}
              <nav className="hidden md:flex items-center space-x-10">
                {navLinks.map((link) => (
                  <button
                    key={link.name}
                    onClick={() => handleLinkClick(link.hash)}
                    className="relative group text-[13px] font-medium font-jost tracking-[0.18em] uppercase text-[var(--text-color)] hover:text-[var(--color-gold)] transition-colors duration-300 py-1 cursor-pointer"
                  >
                    {link.name}
                    <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[var(--color-gold)] transition-all duration-300 group-hover:w-full" />
                  </button>
                ))}
              </nav>

              {/* Theme Toggle & Mobile Menu Control */}
              <div className="flex items-center space-x-6 z-50">
                <ThemeToggle />

                {/* Mobile Hamburger Button */}
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="flex flex-col justify-between w-6 h-4 md:hidden focus:outline-none cursor-pointer"
                  aria-label="Toggle menu"
                >
                  <motion.span
                    animate={mobileMenuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                    transition={{ duration: 0.2 }}
                    className="w-full h-[1.5px] bg-[var(--color-gold)] rounded-full origin-top-left"
                  />
                  <motion.span
                    animate={mobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                    transition={{ duration: 0.1 }}
                    className="w-full h-[1.5px] bg-[var(--color-gold)] rounded-full"
                  />
                  <motion.span
                    animate={mobileMenuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                    transition={{ duration: 0.2 }}
                    className="w-full h-[1.5px] bg-[var(--color-gold)] rounded-full origin-bottom-left"
                  />
                </button>
              </div>
            </div>
          </motion.header>
        )}
      </AnimatePresence>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="rds-mobile-menu"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[49] bg-[var(--bg-color)] flex flex-col justify-center px-12 md:hidden"
          >
            {/* Elegant faint logo in mobile overlay */}
            <div className="absolute top-24 left-12 font-cormorant text-7xl font-bold opacity-5 text-[var(--color-gold)]">
              RDS
            </div>

            <nav className="flex flex-col space-y-8">
              {navLinks.map((link, idx) => (
                <motion.button
                  key={link.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * idx + 0.1 }}
                  onClick={() => handleLinkClick(link.hash)}
                  className="text-left font-cormorant text-3xl font-medium text-[var(--text-color)] hover:text-[var(--color-gold)] transition-colors duration-300 py-1"
                >
                  {link.name}
                </motion.button>
              ))}
            </nav>

            <div className="absolute bottom-16 left-12 right-12 flex flex-col text-[11px] font-light font-jost tracking-[0.1em] text-[var(--text-muted)] space-y-2">
              <div>RINKU DESIGN STUDIO</div>
              <div>hello@rinkudesignstudio.com</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
