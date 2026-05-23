import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLoaderState } from '../../hooks/useLoaderState';

interface HeroProps {
  onNavigate: (hash: string) => void;
}

const marqueeItems = [
  'RESIDENTIAL', 'COMMERCIAL', 'HOSPITALITY', 'RETAIL',
  'ARCHITECTURE', 'INTERIOR STYLING', '3D VISUALIZATION', 'RENOVATION',
];

export default function Hero({ onNavigate }: HeroProps) {
  const { done } = useLoaderState();
  const sectionRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const watermarkRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  // GSAP parallax on background image
  useEffect(() => {
    if (!done || !bgRef.current) return;

    gsap.to(bgRef.current, {
      y: '30%',
      ease: 'none',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: 1,
      },
    });

    // Watermark slow rotation
    if (watermarkRef.current) {
      gsap.to(watermarkRef.current, {
        rotation: 8,
        y: '20%',
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1.5,
        },
      });
    }
  }, [done]);

  if (!done) return <div className="h-screen w-full bg-[#0A0A0A]" />;

  const headlineWords = ['Where', 'Spaces', 'Tell'];
  const accentWord = 'Stories.';

  const stats = [
    { value: '20+', label: 'Projects' },
    { value: 'Est.', label: '2023' },
    { value: '100%', label: 'Transparency' },
  ];

  return (
    <div className="h-screen flex flex-col">
      <section
        ref={sectionRef}
        id="home"
        className="relative flex-1 w-full flex flex-col justify-center items-center overflow-hidden select-none"
      >
        {/* Full-screen background image with overlay */}
        <div
          ref={bgRef}
          className="absolute inset-0 -top-[10%] h-[120%] bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=2000)',
          }}
        />
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/70 via-[#0A0A0A]/50 to-[#0A0A0A]/90" />

        {/* Grid overlay for texture */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(201,168,76,0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(201,168,76,0.5) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px',
            animation: 'panGrid 40s linear infinite',
          }}
        />

        {/* Large watermark text for depth */}
        <div
          ref={watermarkRef}
          className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
        >
          <span className="font-cormorant font-bold text-[18vw] text-[var(--color-gold)] opacity-[0.04] uppercase tracking-wider whitespace-nowrap">
            INTERIOR
          </span>
        </div>

        {/* Main content */}
        <div className="relative z-10 max-w-5xl w-full flex flex-col items-center text-center mt-8 px-6">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
            className="flex items-center gap-3 mb-8"
          >
            <span className="w-8 h-[1px] bg-[var(--color-gold)]" />
            <span className="text-[11px] font-light tracking-[0.35em] text-[var(--color-gold)] uppercase font-jost">
              Luxury Interior Design
            </span>
            <span className="w-8 h-[1px] bg-[var(--color-gold)]" />
          </motion.div>

          {/* Character-by-character headline */}
          <h1 className="font-cormorant font-bold text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.1] mb-4 overflow-hidden">
            <span className="flex flex-wrap justify-center gap-x-4 md:gap-x-5">
              {headlineWords.map((word, wIdx) => (
                <span key={wIdx} className="inline-block overflow-hidden h-[1.2em]">
                  <motion.span
                    initial={{ y: '110%' }}
                    animate={{ y: 0 }}
                    transition={{
                      duration: 0.9,
                      ease: [0.16, 1, 0.3, 1],
                      delay: 0.4 + wIdx * 0.12,
                    }}
                    className="inline-block text-white"
                  >
                    {word}
                  </motion.span>
                </span>
              ))}
            </span>
            <span className="block overflow-hidden h-[1.3em] mt-1">
              <motion.span
                initial={{ y: '110%' }}
                animate={{ y: 0 }}
                transition={{
                  duration: 1.0,
                  ease: [0.16, 1, 0.3, 1],
                  delay: 0.8,
                }}
                className="inline-block shimmer-gold font-bold"
              >
                {accentWord}
              </motion.span>
            </span>
          </h1>

          {/* Thin Gold accent line */}
          <div className="w-[100px] h-[1px] relative mb-7 overflow-hidden">
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.2, ease: 'easeInOut', delay: 1.0 }}
              className="absolute inset-0 bg-[var(--color-gold)] origin-left"
            />
          </div>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, ease: 'easeOut', delay: 1.2 }}
            className="font-jost font-normal text-[16px] md:text-[17px] text-white/85 max-w-[560px] leading-[1.8] mb-10"
          >
            We craft interiors that blend timeless elegance with modern sensibility — tailored to the life you want to live.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 1.5 }}
            className="flex flex-col sm:flex-row gap-5 items-center justify-center w-full"
          >
            <button
              onClick={() => onNavigate('#portfolio')}
              className="w-full sm:w-auto px-10 py-4 bg-[var(--color-gold)] text-[#0A0A0A] font-jost text-xs uppercase tracking-[0.2em] transition-all duration-300 hover:bg-[var(--color-gold-light)] hover:scale-[1.02] active:scale-[0.98] border border-[var(--color-gold)] font-medium cursor-pointer"
            >
              Explore Portfolio
            </button>
            <button
              onClick={() => onNavigate('#about')}
              className="w-full sm:w-auto px-10 py-4 bg-transparent text-white font-jost text-xs uppercase tracking-[0.2em] transition-all duration-300 hover:bg-white/10 border border-white/30 hover:border-white/60 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
            >
              Our Story
            </button>
          </motion.div>
        </div>

        {/* Stats row floating at bottom */}
        <motion.div
          ref={statsRef}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 1.8 }}
          className="absolute bottom-20 left-0 right-0 z-10"
        >
          {/* <div className="max-w-4xl mx-auto px-6 flex justify-center gap-6 md:gap-12">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="font-cormorant text-2xl md:text-3xl font-bold text-[var(--color-gold)]">
                  {stat.value}
                </div>
                <div className="font-jost text-[11px] md:text-[12px] font-normal uppercase tracking-[0.15em] text-white/75 mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div> */}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ delay: 2.2, duration: 1 }}
          onClick={() => onNavigate('#about')}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2 cursor-pointer group z-10"
        >
          {/* Mouse outline */}
          <div className="w-5 h-8 border border-white/30 rounded-full flex items-start justify-center pt-1.5">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
              className="w-1 h-1 rounded-full bg-[var(--color-gold)]"
            />
          </div>
        </motion.div>
      </section>

      {/* Marquee Strip */}
      <div className="w-full bg-[var(--color-gold)] py-3 overflow-hidden select-none">
        <div className="marquee-strip">
          {[...marqueeItems, ...marqueeItems].map((item, idx) => (
            <span key={idx} className="flex items-center whitespace-nowrap mx-6">
              <span className="font-jost text-xs font-medium tracking-[0.25em] uppercase text-[#0A0A0A]">
                {item}
              </span>
              <span className="mx-6 text-[#0A0A0A]/30 text-lg">◆</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
