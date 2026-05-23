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
    'Retail Spaces',
    'Restaurant & Café',
    'Office Design',
    'Turnkey Solutions',
  ];

  return (
    <section
      id="architect"
      className="py-24 md:py-32 bg-[var(--bg-color)] border-t border-[var(--border-color)]/30 relative overflow-hidden select-none"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Eyebrow and Title */}
        <div className="mb-16 text-center md:text-left">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10% 0px' }}
            transition={{ duration: 0.6 }}
            className="text-[11px] font-light tracking-[0.35em] text-[var(--color-gold)] uppercase font-jost mb-3"
          >
            MEET THE FOUNDER
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10% 0px' }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-cormorant text-4xl md:text-5xl font-semibold text-[var(--text-color)]"
          >
            The Vision Behind the Studio
          </motion.h2>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

          {/* Left: Photo */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-10% 0px' }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 w-full max-w-lg mx-auto lg:max-w-none"
          >
            <div className="relative aspect-[3/4] overflow-hidden shadow-xl border border-[var(--border-color)]/30 rounded">
              {/* Portrait photo */}
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800"
                alt="Kunal Patel - Founder, Rinku Design Studio"
                className="w-full h-full object-cover object-top"
                loading="lazy"
              />

              {/* Bottom gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent pointer-events-none" />

              {/* Gold corner borders */}
              <div className="absolute bottom-6 left-6 top-6 right-6 border-l-2 border-b-2 border-[var(--color-gold)] opacity-60 pointer-events-none rounded-sm" />

              {/* Name / Title at bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                <p className="font-jost text-[9px] font-light tracking-[0.3em] text-[var(--color-gold)] uppercase mb-1">Founder &amp; Principal Designer</p>
                <h4 className="font-cormorant text-2xl font-semibold text-white">Kunal Patel</h4>
              </div>

              {/* Founded badge */}
              <div className="absolute top-5 right-5 bg-black/70 border border-[var(--color-gold)]/40 px-3 py-1.5 rounded">
                <span className="font-jost text-[9px] uppercase tracking-widest text-[var(--color-gold)]">Est. Nov 2023</span>
              </div>
            </div>
          </motion.div>

          {/* Right: Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-10% 0px' }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7 flex flex-col space-y-8"
          >
            <div className="flex flex-col space-y-3">
              <span className="text-[11px] font-light font-jost text-[var(--color-gold)] tracking-[0.25em] uppercase">
                Founder &amp; Principal Interior Designer
              </span>
              <h3 className="font-cormorant text-5xl font-semibold text-[var(--text-color)]">
                Kunal Patel
              </h3>
            </div>

            {/* Bio */}
            <div className="font-jost font-light text-base text-[var(--text-muted)] leading-relaxed flex flex-col space-y-4">
              <p>
                Kunal Patel founded Rinku Design Studio in November 2023 with a single conviction: that the interior design industry in Gujarat needed to be done differently — with full transparency, zero hidden commissions, and an obsessive focus on delivering exactly what the client signs off on.
              </p>
              <p>
                In under two years, the studio has delivered <span className="text-[var(--text-color)] font-medium">20+ projects</span> across Ahmedabad and Gandhinagar — each one designed and executed with the same promise: what you approve is what you get.
              </p>
              <p>
                Kunal's approach is built on a rare industry promise: <span className="text-[var(--text-color)] font-medium italic">"You only pay for what you get and what you like."</span> No forced packages. No vendor kick-backs. Just honest design, delivered with precision.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-x-8 gap-y-6 pt-6 border-t border-[var(--border-color)]">
              <StatItem target={20} label="Projects Delivered" suffix="+" />
              <StatItem target={2} label="Years in Business" suffix="+" />
              <StatItem target={95} label="3D-to-Real Accuracy" suffix="%" />
              <StatItem target={2} label="Cities Served" suffix="" />
            </div>

            {/* Skill Badges */}
            <div className="pt-2">
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
