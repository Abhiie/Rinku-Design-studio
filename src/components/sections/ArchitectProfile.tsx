import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useCountUp } from '../../hooks/useCountUp';

function StatItem({ target, label, suffix = "" }: { target: number; label: string; suffix?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-10% 0px' });
  const count = useCountUp(target, 2000, isInView);

  return (
    <div ref={containerRef} className="flex flex-col">
      <div className="font-cormorant text-4xl md:text-5xl font-bold text-[var(--color-gold)] mb-1">
        {count}{suffix}
      </div>
      <div className="font-jost text-[11px] font-light uppercase tracking-[0.15em] text-[var(--text-muted)]">
        {label}
      </div>
    </div>
  );
}

export default function ArchitectProfile() {
  const badgeSkills = [
    'Residential Design',
    'Commercial Interiors',
    'Hospitality',
    'Retail Design',
    'Architecture',
  ];

  return (
    <section
      id="architect"
      className="py-24 md:py-32 bg-[var(--bg-color)] border-t border-[var(--border-color)]/30 relative overflow-hidden select-none"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Eyebrow and Page Title Header */}
        <div className="mb-16 text-center md:text-left">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10% 0px' }}
            transition={{ duration: 0.6 }}
            className="text-[11px] font-light tracking-[0.35em] text-[var(--color-gold)] uppercase font-jost mb-3"
          >
            MEET THE DESIGNER
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10% 0px' }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-cormorant text-4xl md:text-5xl font-semibold text-[var(--text-color)]"
          >
            The Mind Behind the Vision
          </motion.h2>
        </div>

        {/* Asymmetrical Layout Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column Artistic Letter Initial Image Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-10% 0px' }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 w-full max-w-lg mx-auto lg:max-w-none"
          >
            <div className="relative aspect-[3/4] bg-neutral-900 flex items-center justify-center rounded overflow-hidden shadow-xl border border-[var(--border-color)]/20">
              {/* Overlay with large faint calligraphy letter */}
              <div className="absolute inset-0 bg-[#111111] flex items-center justify-center">
                <span className="font-cormorant font-bold text-[240px] text-[var(--color-gold)] opacity-[0.08] leading-none select-none">
                  R
                </span>
              </div>

              {/* L-Shape gold border corners */}
              <div className="absolute bottom-6 left-6 top-6 right-6 border-l-2 border-b-2 border-[var(--color-gold)] opacity-70 pointer-events-none" />

              {/* Tiny design text labels in corner */}
              <div className="absolute top-10 right-10 flex flex-col items-end text-right font-jost text-[10px] font-light tracking-widest text-[var(--color-gold)] select-none opacity-40">
                <span>RINKU SHARMA</span>
                <span>CHIEF ARCHITECT</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column Information and Counter Panel */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-10% 0px' }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-6 flex flex-col space-y-8"
          >
            <div className="flex flex-col space-y-4">
              <span className="text-[11px] font-light font-jost text-[var(--color-gold)] tracking-[0.25em] uppercase">
                FOUNDER & PRINCIPAL DESIGNER
              </span>
              <h3 className="font-cormorant text-5xl font-semibold text-[var(--text-color)]">
                Rinku Sharma
              </h3>
            </div>

            {/* Bio paragraph lists */}
            <div className="font-jost font-light text-base text-[var(--text-muted)] leading-relaxed flex flex-col space-y-4">
              <p>
                Rinku Sharma received her Master’s of Architecture & Interior Art Direction with honors from the apex Center for Design Studies. She spent five foundational years under premier international masters before setting up her boutique atelier.
              </p>
              <p>
                Her creative philosophy views structural planning as architectural poetry; every detail, from column placements to timber accents, exists to evoke high emotional resonance and deep meditative calm.
              </p>
            </div>

            {/* Grid of Stat CountUps */}
            <div className="grid grid-cols-2 gap-x-8 gap-y-6 pt-6 border-t border-[var(--border-color)]">
              <StatItem target={120} label="Projects Completed" suffix="+" />
              <StatItem target={8} label="Years of Experience" suffix="+" />
              <StatItem target={15} label="Awards Won" suffix="+" />
              <StatItem target={200} label="Happy Clients" suffix="+" />
            </div>

            {/* Skill list pills badges */}
            <div className="pt-6">
              <h4 className="font-jost text-[11px] font-light uppercase tracking-widest text-[var(--text-muted)] mb-4">
                SPECIALIST FIELDS
              </h4>
              <div className="flex flex-wrap gap-3">
                {badgeSkills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-1.5 rounded-full border border-[var(--border-color)]/40 text-[11px] font-light font-jost text-[var(--text-color)] hover:border-[var(--color-gold)] transition-colors duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
