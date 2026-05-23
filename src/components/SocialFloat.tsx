import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const INSTAGRAM_URL = 'https://www.instagram.com/rinkudesignstudio/';
const WHATSAPP_URL  = 'https://wa.me/919274551195?text=Hi%2C%20I%27m%20interested%20in%20your%20interior%20design%20services.';

/* ── SVG Icons ─────────────────────────────────────────── */
const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

/* ── Child action button ──────────────────────────────── */
interface ActionBtnProps {
  href: string;
  label: string;
  icon: React.ReactNode;
  bgStyle?: React.CSSProperties;
  bgClass?: string;
  index: number;
  open: boolean;
}

function ActionBtn({ href, label, icon, bgStyle, bgClass = '', index, open }: ActionBtnProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="relative flex items-center justify-end"
          initial={{ opacity: 0, y: 20, scale: 0.7 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.7 }}
          transition={{ type: 'spring', stiffness: 380, damping: 28, delay: index * 0.06 }}
        >
          {/* Tooltip */}
          <AnimatePresence>
            {hovered && (
              <motion.span
                initial={{ opacity: 0, x: 8 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 8 }}
                transition={{ duration: 0.15 }}
                className="absolute right-[56px] whitespace-nowrap bg-[#111] text-white
                           text-[11px] font-jost font-light tracking-[0.1em]
                           px-3 py-1.5 rounded-lg shadow-xl border border-white/10 pointer-events-none select-none"
              >
                {label}
              </motion.span>
            )}
          </AnimatePresence>

          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            style={bgStyle}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className={`w-12 h-12 rounded-full flex items-center justify-center text-white
                        shadow-xl transition-all duration-200 hover:scale-110 active:scale-95 ${bgClass}`}
          >
            {icon}
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* ── Main FAB ─────────────────────────────────────────── */
export default function SocialFloat() {
  const [open, setOpen] = useState(false);
  // Show "Connect with us" hint on first load, hide after 3.5s or when opened
  const [showHint, setShowHint] = useState(false);

  useEffect(() => {
    // Delay showing hint slightly after page load
    const show = setTimeout(() => setShowHint(true), 1800);
    const hide = setTimeout(() => setShowHint(false), 5500);
    return () => { clearTimeout(show); clearTimeout(hide); };
  }, []);

  const handleToggle = () => {
    setOpen((v) => !v);
    setShowHint(false);
  };

  return (
    <div className="fixed right-4 md:right-6 bottom-8 z-[60] flex flex-col items-end gap-3">

      {/* Action buttons — appear above the FAB */}
      <ActionBtn
        href={INSTAGRAM_URL}
        label="Follow on Instagram"
        index={1}
        open={open}
        bgStyle={{
          background:
            'radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)',
        }}
        icon={<InstagramIcon />}
      />

      <ActionBtn
        href={WHATSAPP_URL}
        label="Chat on WhatsApp"
        index={0}
        open={open}
        bgClass="bg-[#25D366] hover:bg-[#1fb954]"
        icon={<WhatsAppIcon />}
      />

      {/* "Connect with us" hint label */}
      <AnimatePresence>
        {showHint && !open && (
          <motion.div
            initial={{ opacity: 0, x: 20, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 20, scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            className="absolute right-[60px] bottom-[10px] flex items-center gap-2 pointer-events-none"
          >
            {/* Arrow pointing right */}
            <span className="text-[var(--color-gold)] text-sm">›</span>
            <span className="whitespace-nowrap bg-[#0A0A0A] border border-[var(--color-gold)]/40
                             text-[var(--color-gold)] text-[11px] font-jost font-normal
                             tracking-[0.12em] uppercase px-3 py-1.5 rounded-lg shadow-lg select-none">
              Connect with us
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FAB toggle — gold "+" button */}
      <motion.button
        onClick={handleToggle}
        aria-label={open ? 'Close contact options' : 'Open contact options'}
        whileTap={{ scale: 0.9 }}
        className="w-12 h-12 rounded-full bg-[var(--color-gold)] text-[#0A0A0A]
                   flex items-center justify-center shadow-xl
                   hover:bg-[var(--color-gold-light)] transition-colors duration-200
                   focus:outline-none cursor-pointer relative"
      >
        {/* Pulse ring when closed */}
        {!open && (
          <span className="absolute inset-0 rounded-full bg-[var(--color-gold)] animate-ping opacity-25 pointer-events-none" />
        )}
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ type: 'spring', stiffness: 400, damping: 22 }}
          className="text-2xl font-light leading-none select-none"
          style={{ marginTop: '-1px' }}
        >
          +
        </motion.span>
      </motion.button>

    </div>
  );
}
