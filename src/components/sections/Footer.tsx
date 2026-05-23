import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedLogo from '../AnimatedLogo';

interface FooterProps {
  onNavigateHome: (hash?: string) => void;
}

export default function Footer({ onNavigateHome }: FooterProps) {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

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

  const services = [
    'Residential Interiors',
    'Commercial Spaces',
    'Hospitality Design',
    'Retail Environments',
    '3D Visualisation',
    'Architecture',
  ];

  return (
    <footer className="bg-[#0A0A0A] border-t border-[var(--color-gold)]/10 text-[#9A9690]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">

          {/* Column 1 Logo & descriptive taglines */}
          <div className="lg:col-span-5 flex flex-col space-y-4">
            <div className="flex items-center gap-3">
              <AnimatedLogo className="w-9 h-9" color="#ffffff" />
              <div className="flex flex-col leading-none gap-[3px]">
                <span className="font-cormorant text-[20px] font-bold tracking-[3px] text-white uppercase leading-none">
                  Rinku
                </span>
                <span className="font-jost text-[9px] font-light tracking-[0.25em] uppercase text-white opacity-70">
                  Design Studio
                </span>
              </div>
            </div>
            <p className="font-cormorant italic text-lg text-[var(--color-gold)] leading-none">
              Designing Spaces That Breathe.
            </p>
            <p className="font-jost font-normal text-[13px] text-white opacity-60 leading-[1.8] max-w-sm">
              A Gujarat-based interior design studio committed to transparency, precision, and creating spaces that genuinely reflect the people who live and work in them.
            </p>

            {/* Social links */}
            <div className="flex items-center gap-4 pt-2">
              <a
                href="https://www.instagram.com/rinkudesignstudio/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white/50 hover:text-white hover:border-white/60 transition-all duration-200"
              >
                <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="https://wa.me/919274551195"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white/50 hover:text-white hover:border-white/60 transition-all duration-200"
              >
                <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2 — Nav links */}
          <div className="lg:col-span-2 flex flex-col space-y-3">
            <h4 className="text-[10px] uppercase font-light tracking-[0.2em] text-[var(--color-gold)] font-jost mb-1">
              Navigate
            </h4>
            {links.map((l) => (
              <button
                key={l.name}
                onClick={() => onNavigateHome(l.hash)}
                className="font-jost text-[12px] font-light text-[#9A9690] hover:text-white transition-colors duration-200 text-left tracking-wide cursor-pointer"
              >
                {l.name}
              </button>
            ))}
          </div>

          {/* Column 3 — Services */}
          <div className="lg:col-span-2 flex flex-col space-y-3">
            <h4 className="text-[10px] uppercase font-light tracking-[0.2em] text-[var(--color-gold)] font-jost mb-1">
              Services
            </h4>
            {services.map((s) => (
              <span key={s} className="font-jost text-[12px] font-light text-[#9A9690] tracking-wide">
                {s}
              </span>
            ))}
          </div>

          {/* Column 4 — Newsletter + Contact */}
          <div className="lg:col-span-3 flex flex-col space-y-4">
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
        <div className="h-[1px] bg-[var(--color-gold)]/10 w-full mb-8 mt-12" />

        {/* Row 3 — Bottom bar */}
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between py-4 font-jost text-[10px] tracking-[1px] opacity-50 uppercase select-none">
          <div>
            © {new Date().getFullYear()} Rinku Design Studio. All rights reserved.
          </div>
          <div className="flex items-center space-x-1">
            <span>Designed with</span>
            <span className="text-red-500 animate-pulse text-[12px]">♥</span>
            <span>in Ahmedabad</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
