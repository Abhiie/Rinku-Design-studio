import React from 'react';
import { motion } from 'framer-motion';
import { useLoaderState } from '../../hooks/useLoaderState';

interface HeroProps {
  onNavigate: (hash: string) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  const { done } = useLoaderState();

  if (!done) return <div className="h-screen w-full bg-[#0A0A0A]" />;

  const headlineText = "Where Spaces Tell Stories.";
  const words = headlineText.split(" ");

  return (
    <section
      id="home"
      className="relative h-screen w-full flex flex-col justify-center items-center overflow-hidden px-6 md:px-12 select-none"
      style={{
        backgroundImage: `
          linear-gradient(var(--border-color) 1px, transparent 1px),
          linear-gradient(90deg, var(--border-color) 1px, transparent 1px)
        `,
        backgroundSize: '80px 80px',
        animation: 'panGrid 40s linear infinite',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--bg-color)]/20 to-[var(--bg-color)] pointer-events-none" />

      <div className="relative z-10 max-w-4xl w-full flex flex-col items-center text-center mt-12">
        {/* Eyebrow Label */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
          className="text-[11px] font-light tracking-[0.35em] text-[var(--color-gold)] uppercase font-jost mb-6"
        >
          Luxury Interior Design
        </motion.div>

        {/* Word Reveal Headline */}
        <h1 className="font-cormorant font-bold text-5xl md:text-7xl lg:text-8xl leading-tight mb-8 overflow-hidden flex flex-wrap justify-center gap-x-4 md:gap-x-6">
          {words.map((word, index) => {
            const isLast = index === words.length - 1;
            return (
              <span key={index} className="inline-block overflow-hidden h-[1.25em]">
                <motion.span
                  initial={{ y: '100%' }}
                  animate={{ y: 0 }}
                  transition={{
                    duration: 0.9,
                    ease: [0.16, 1, 0.3, 1],
                    delay: 0.4 + index * 0.12,
                  }}
                  className={`inline-block ${
                    isLast ? 'text-[var(--color-gold)] font-bold' : 'text-[var(--text-color)] font-normal'
                  }`}
                >
                  {word}
                </motion.span>
              </span>
            );
          })}
        </h1>

        {/* Thin Gold accent line */}
        <div className="w-[120px] h-[1px] relative mb-8 overflow-hidden">
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.2, ease: 'easeInOut', delay: 1.0 }}
            className="absolute inset-0 bg-[var(--color-gold)] origin-left"
          />
        </div>

        {/* Subtext description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, ease: 'easeOut', delay: 1.3 }}
          className="font-jost font-light text-base md:text-lg text-[var(--text-muted)] max-w-[540px] leading-relaxed mb-10"
        >
          We craft interiors that blend timeless elegance with modern sensibility — tailored to the life you want to live.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 1.6 }}
          className="flex flex-col sm:flex-row gap-5 items-center justify-center w-full"
        >
          {/* Primary CTA */}
          <button
            onClick={() => onNavigate('#portfolio')}
            className="w-full sm:w-auto px-8 py-3.5 bg-[var(--color-gold)] text-[#0A0A0A] font-jost text-xs uppercase tracking-[0.2em] transition-all duration-300 hover:bg-[var(--color-gold-light)] hover:scale-[1.02] active:scale-[0.98] border border-[var(--color-gold)] font-medium cursor-pointer"
          >
            Explore Portfolio
          </button>

          {/* Secondary CTA */}
          <button
            onClick={() => onNavigate('#about')}
            className="w-full sm:w-auto px-8 py-3.5 bg-transparent text-[var(--color-gold)] font-jost text-xs uppercase tracking-[0.2em] transition-all duration-300 hover:bg-[var(--color-gold)] hover:text-black border border-[var(--color-gold)] hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
          >
            Our Story
          </button>
        </motion.div>
      </div>

      {/* Animated Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ delay: 2.2, duration: 1 }}
        onClick={() => onNavigate('#portfolio')}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-3 cursor-pointer group"
      >
        <span className="text-[10px] font-light tracking-[0.3em] text-[var(--color-gold)] uppercase font-jost">
          SCROLL
        </span>
        <div className="relative w-[1px] h-12 bg-[var(--color-gold)]/20 overflow-hidden">
          <motion.div
            animate={{
              y: ['-100%', '100%'],
            }}
            transition={{
              duration: 2.0,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute top-0 left-0 w-full h-1/2 bg-[var(--color-gold)]"
          />
        </div>
        <motion.span
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
          className="text-xs text-[var(--color-gold)] font-bold inline-block"
        >
          ↓
        </motion.span>
      </motion.div>
    </section>
  );
}
