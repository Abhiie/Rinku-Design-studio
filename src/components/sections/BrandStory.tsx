import React from 'react';
import { motion } from 'framer-motion';

export default function BrandStory() {
  return (
    <section
      id="about"
      className="py-24 md:py-32 bg-[var(--bg-color)] border-t border-[var(--border-color)]/30 relative overflow-hidden select-none"
    >
      {/* Thin Gold accent lines */}
      <div className="absolute top-0 left-12 right-12 h-[1px] bg-[var(--border-color)]" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Eyebrow Label & Title Header */}
        <div className="mb-16 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10% 0px' }}
            transition={{ duration: 0.6 }}
            className="text-[11px] font-light tracking-[0.35em] text-[var(--color-gold)] uppercase font-jost mb-3"
          >
            THE BRAND
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10% 0px' }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-cormorant text-4xl md:text-5xl font-semibold text-[var(--text-color)]"
          >
            Designing Spaces That Breathe
          </motion.h2>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Column Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-10% 0px' }}
            transition={{ duration: 0.8 }}
            className="flex flex flex-col space-y-6"
          >
            <p className="font-jost font-light text-base text-[var(--text-muted)] leading-relaxed">
              Founded on the belief that a well-designed home is vital to a sound mind, Rinku Design Studio has emerged as a premier force of modern-luxe architectural transformations. We approach every blank environment with a deep curiosity to understand our patrons' life rhythms, building habitats rather than configurations.
            </p>
            <p className="font-jost font-light text-base text-[var(--text-muted)] leading-relaxed">
              Our unique design signature relies on seamlessly blending rich Indian heritage — our custom carvings, textured woodworks, and geometric screens — with contemporary European sleek minimalist shapes. This convergence celebrates historic roots without compromising functional efficiency.
            </p>
            <p className="font-jost font-light text-base text-[var(--text-muted)] leading-relaxed">
              At the absolute core of our business lies a meticulous dedication to materials and craftsmanship. From sourcing hand-selected Italian travertine blocks to managing intricate brass-inlay joinery, we translate raw design drafts into physical sensory marvels.
            </p>

            {/* Premium Pull Quote */}
            <div className="relative pt-6 border-t border-[var(--border-color)] mt-6 flex flex-col">
              <span className="absolute -top-3 left-0 font-cormorant italic text-[60px] text-[var(--color-gold)] opacity-40 leading-[10px] select-none">
                “
              </span>
              <p className="font-cormorant italic text-2xl text-[var(--text-color)] pl-6 leading-relaxed">
                Every room holds a story — we simply help it speak.
              </p>
              <span className="text-[13px] font-light font-jost text-[var(--color-gold)] pl-6 mt-3 tracking-[0.2em] uppercase">
                &mdash; Rinku Sharma, Founder
              </span>
            </div>
          </motion.div>

          {/* Right Column Geometric Artwork */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-10% 0px' }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[400px] flex items-center justify-center pointer-events-none"
          >
            {/* watermark date */}
            <div className="absolute font-cormorant font-bold text-[140px] text-[var(--color-gold)] opacity-[0.06] select-none">
              2018
            </div>

            {/* Overlapping rectangles */}
            <div
              className="relative w-[300px] h-[300px]"
              style={{
                animation: 'slowOrbit 10s ease-in-out infinite',
              }}
            >
              {/* Box 1 */}
              <div className="absolute top-0 left-0 w-[200px] h-[200px] border border-[var(--color-gold)] opacity-40 rounded" />
              
              {/* Box 2 */}
              <div className="absolute top-[40px] left-[60px] w-[220px] h-[160px] border border-[var(--color-gold)] opacity-60 rounded" style={{ transform: 'rotate(5deg)' }} />
              
              {/* Box 3 */}
              <div className="absolute top-[80px] left-[20px] w-[180px] h-[220px] border border-[var(--color-gold)] opacity-50 rounded" style={{ transform: 'rotate(-4deg)' }} />

              {/* Decorative corner dots */}
              <span className="absolute top-0 left-0 w-1.5 h-1.5 bg-[var(--color-gold)] rounded-full" />
              <span className="absolute bottom-[40px] right-[20px] w-1.5 h-1.5 bg-[var(--color-gold)] rounded-full" />
              <span className="absolute bottom-0 left-[20px] w-1.5 h-1.5 bg-[var(--color-gold)] rounded-full" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
