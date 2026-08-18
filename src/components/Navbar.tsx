import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import { useLoaderState } from '../hooks/useLoaderState';
import AnimatedLogo from './AnimatedLogo';

export default function Navbar() {
  const { done } = useLoaderState();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: '3D Tour', path: '/3d-walkthrough' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
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
              <Link to="/" className="z-50 cursor-pointer flex items-center gap-3">
                <AnimatedLogo className="w-9 h-9" color="var(--text-color)" />
                <div className="flex flex-col leading-none gap-[3px]">
                  <span className="font-cormorant text-[20px] font-bold text-[var(--text-color)] tracking-[3px] transition-colors duration-300 uppercase leading-none">
                    Rinku
                  </span>
                  <span className="font-jost text-[9px] font-light text-[var(--text-color)] tracking-[0.25em] uppercase opacity-70">
                    Design Studio
                  </span>
                </div>
              </Link>

              {/* Desktop Nav Links */}
              <nav className="hidden md:flex items-center space-x-10">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`relative group text-[13px] font-medium font-jost tracking-[0.18em] uppercase transition-colors duration-300 py-1 cursor-pointer ${
                      isActive(link.path)
                        ? 'text-[var(--color-gold)]'
                        : 'text-[var(--text-color)] hover:text-[var(--color-gold)]'
                    }`}
                  >
                    {link.name}
                    <span
                      className={`absolute bottom-0 left-0 h-[1.5px] bg-[var(--color-gold)] transition-all duration-300 ${
                        isActive(link.path) ? 'w-full' : 'w-0 group-hover:w-full'
                      }`}
                    />
                  </Link>
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
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * idx + 0.1 }}
                >
                  <Link
                    to={link.path}
                    className={`text-left font-cormorant text-3xl font-medium transition-colors duration-300 py-1 block ${
                      isActive(link.path)
                        ? 'text-[var(--color-gold)]'
                        : 'text-[var(--text-color)] hover:text-[var(--color-gold)]'
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
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
