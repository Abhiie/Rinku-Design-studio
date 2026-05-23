import React from 'react';
import { motion } from 'framer-motion';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-8% 0px' },
  transition: { duration: 0.7, ease: 'easeOut', delay },
});

const clients = [
  { name: 'Nakoda Diagnostic Laboratory', location: 'Gujarat', type: 'Laboratory', icon: '🔬' },
  { name: 'Tandoor Story', location: 'Prahladnagar, Ahmedabad', type: 'Restaurant', icon: '🍽️' },
  { name: 'Bright Stationery', location: 'Navrangpura, Ahmedabad', type: 'Retail', icon: '🖊️' },
  { name: 'Paraadis Jewellery', location: 'SBR, Ahmedabad', type: 'Showroom', icon: '💎' },
];

const differentiators = [
  {
    num: '01',
    title: 'Zero Vendor Commissions',
    desc: 'We are one of the very few interior design firms that does not take commissions from vendors or labourers. Your money goes entirely into your space — not our pockets.',
  },
  {
    num: '02',
    title: '95%+ 3D-to-Real Accuracy',
    desc: 'Our "3D to Real" promise is backed by a verified accuracy rate of over 95%. The digital vision you approve is the exact physical space you walk into. No surprises.',
  },
  {
    num: '03',
    title: 'Fully Customised Solutions',
    desc: 'We don\'t believe in catalogue interiors. Every design is purpose-built for you — so you only pay for what you choose and what you genuinely love.',
  },
  {
    num: '04',
    title: 'Transparent, Honest Pricing',
    desc: 'No hidden markups. No inflated BOQs. Just clear, itemised pricing that respects your budget without ever compromising on quality or your vision.',
  },
];

export default function BrandStory() {
  return (
    <section
      id="about"
      className="bg-[var(--bg-color)] border-t border-[var(--border-color)]/30 relative overflow-hidden select-none"
    >
      {/* ─── PART 1: Opening Hook ───────────────────────────── */}
      <div className="py-24 md:py-32 relative">
        <div className="absolute top-0 left-12 right-12 h-[1px] bg-[var(--border-color)]" />

        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div {...fadeUp(0)} className="text-[11px] font-light tracking-[0.35em] text-[var(--color-gold)] uppercase font-jost mb-4">
            THE BRAND
          </motion.div>

          {/* Memory Hook #1 */}
          <motion.h2 {...fadeUp(0.1)} className="font-cormorant text-4xl md:text-6xl lg:text-7xl font-bold text-[var(--text-color)] leading-tight max-w-4xl mb-6">
            Hiring a Designer is an{' '}
            <span className="text-[var(--color-gold)] italic">Investment</span>,<br className="hidden md:block" />
            Not an Expense.
          </motion.h2>

          <motion.div {...fadeUp(0.2)} className="w-[80px] h-[1px] bg-[var(--color-gold)] mb-8" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
            <motion.div {...fadeUp(0.25)} className="flex flex-col space-y-5">
              <p className="font-jost font-normal text-[15px] text-[var(--text-color)] opacity-85 leading-[1.8]">
                Rinku Design Studio was born in <span className="font-semibold opacity-100">November 2023</span> from a simple but powerful belief — that great interior design should be accessible, transparent, and transformative. Founded by{' '}
                <span className="text-[var(--color-gold)] font-semibold opacity-100">Kunal Patel</span>, the studio set out to challenge how interior design is done and sold in Gujarat.
              </p>
              <p className="font-jost font-normal text-[15px] text-[var(--text-color)] opacity-85 leading-[1.8]">
                In just under two years, we've delivered <span className="font-semibold opacity-100">20+ projects</span> across Ahmedabad and Gandhinagar — each one different, each one exactly as promised.
              </p>
              <p className="font-jost font-normal text-[15px] text-[var(--text-color)] opacity-85 leading-[1.8]">
                We work across both <span className="font-semibold opacity-100">commercial and residential</span> spaces: shops, showrooms, offices, flats, and bungalows — with one simple promise that defines everything we do.
              </p>

              {/* Memory Hook #2 */}
              <div className="relative pt-6 border-t border-[var(--border-color)] mt-2 flex flex-col">
                <span className="absolute -top-3 left-0 font-cormorant italic text-[60px] text-[var(--color-gold)] opacity-40 leading-[10px] select-none">"</span>
                <p className="font-cormorant italic text-2xl text-[var(--text-color)] pl-6 leading-relaxed">
                  Good design doesn't cost — bad design costs business.
                </p>
                <span className="text-[12px] font-light font-jost text-[var(--color-gold)] pl-6 mt-3 tracking-[0.2em] uppercase">
                  &mdash; Kunal Patel, Founder
                </span>
              </div>
            </motion.div>

            {/* Right: The 95% Promise */}
            <motion.div {...fadeUp(0.3)} className="flex flex-col space-y-6">
              <div className="relative p-8 border border-[var(--border-color)] bg-[var(--surface-color)]/50 rounded overflow-hidden group hover:border-[var(--color-gold)]/60 transition-colors duration-300">
                {/* Background number */}
                <span className="absolute -top-2 right-4 font-cormorant font-bold text-[120px] text-[var(--color-gold)] opacity-[0.05] leading-none select-none">95</span>

                <span className="text-[10px] font-light tracking-[0.3em] text-[var(--color-gold)] uppercase font-jost block mb-4">OUR CORE PROMISE</span>
                <h3 className="font-cormorant text-4xl font-bold text-[var(--color-gold)] mb-2">
                  95%+
                </h3>
                <h4 className="font-cormorant text-2xl font-semibold text-[var(--text-color)] mb-4 leading-tight">
                  3D-to-Real Accuracy
                </h4>
                <p className="font-jost font-normal text-[14px] text-[var(--text-color)] opacity-85 leading-[1.8]">
                  What you see in the 3D render is <em className="font-semibold not-italic opacity-100">exactly</em> what you get in reality. We've built our entire process around eliminating the gap between the design you approve and the space you receive.
                </p>
                <div className="mt-6 pt-5 border-t border-[var(--border-color)]/30">
                  <p className="font-cormorant italic text-lg text-[var(--text-color)] leading-snug">
                    "What you see is what you get."
                  </p>
                  <p className="font-jost text-[11px] font-light text-[var(--text-muted)] mt-1 tracking-wider uppercase">
                    — Our Brand Promise
                  </p>
                </div>
              </div>

              {/* Service offerings */}
              <div className="grid grid-cols-3 gap-4">
                {['Design Only', 'Design + Supervision', 'Turnkey Solution'].map((s, i) => (
                  <div key={i} className="flex flex-col items-center text-center p-4 border border-[var(--border-color)]/40 rounded hover:border-[var(--color-gold)]/50 transition-colors duration-300">
                    <span className="font-jost text-[10px] font-light uppercase tracking-widest text-[var(--text-muted)] leading-relaxed">{s}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ─── PART 2: Why We Are Different ───────────────────── */}
      <div className="py-20 md:py-24 bg-[var(--surface-color)] border-t border-[var(--border-color)]/20">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div {...fadeUp(0)} className="mb-14 text-center">
            <span className="text-[11px] font-light tracking-[0.35em] text-[var(--color-gold)] uppercase font-jost block mb-3">WHY CHOOSE US</span>
            <h2 className="font-cormorant text-4xl md:text-5xl font-semibold text-[var(--text-color)]">
              We Do Things Differently
            </h2>
            <p className="font-jost font-normal text-[15px] text-[var(--text-color)] opacity-85 mt-4 max-w-xl mx-auto leading-[1.8]">
              Most interior firms earn quietly from your vendors and labourers. We don't. Here's what sets us apart — and why it matters to your project.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {differentiators.map((d, i) => (
              <motion.div
                key={d.num}
                {...fadeUp(i * 0.1)}
                className="relative p-7 border border-[var(--border-color)]/40 rounded bg-[var(--bg-color)] hover:border-[var(--color-gold)]/50 hover:-translate-y-1 transition-all duration-300 group"
              >
                <span className="absolute top-5 right-6 font-jost text-xs tracking-widest text-[var(--text-color)] opacity-10 font-bold group-hover:opacity-25 transition-opacity">{d.num}</span>
                <h4 className="font-cormorant text-2xl font-semibold text-[var(--color-gold)] mb-3 leading-tight">{d.title}</h4>
                <p className="font-jost font-normal text-[14px] text-[var(--text-color)] opacity-85 leading-[1.8]">{d.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ─── PART 3: Notable Clients ─────────────────────────── */}
      <div className="py-20 md:py-24 border-t border-[var(--border-color)]/20">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            <motion.div {...fadeUp(0)}>
              <span className="text-[11px] font-light tracking-[0.35em] text-[var(--color-gold)] uppercase font-jost block mb-3">OUR CLIENTS</span>
              <h2 className="font-cormorant text-4xl md:text-5xl font-semibold text-[var(--text-color)] mb-5 leading-tight">
                Trusted by Brands<br />Across Gujarat
              </h2>
              <p className="font-jost font-normal text-[15px] text-[var(--text-color)] opacity-85 leading-[1.8] mb-6">
                From diagnostic laboratories to luxury jewellery showrooms, from bustling restaurant kitchens to serene office floors — each project is a new story. Here are some of the names that trusted us to tell it.
              </p>
              <div className="flex flex-wrap gap-3">
                {['Ahmedabad', 'Gandhinagar'].map((city) => (
                  <span key={city} className="px-4 py-1.5 rounded-full border border-[var(--color-gold)]/40 text-[11px] font-light font-jost text-[var(--color-gold)] tracking-wider uppercase">
                    📍 {city}
                  </span>
                ))}
              </div>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {clients.map((c, i) => (
                <motion.div
                  key={c.name}
                  {...fadeUp(i * 0.1)}
                  className="p-6 border border-[var(--border-color)]/40 rounded bg-[var(--surface-color)] hover:border-[var(--color-gold)]/50 transition-all duration-300 group"
                >
                  <span className="text-2xl block mb-3">{c.icon}</span>
                  <span className="text-[9px] font-light uppercase tracking-[0.2em] text-[var(--color-gold)] font-jost block mb-1">{c.type}</span>
                  <h4 className="font-cormorant text-lg font-semibold text-[var(--text-color)] leading-tight mb-1">{c.name}</h4>
                  <p className="font-jost text-[11px] font-light text-[var(--text-muted)] tracking-wider">{c.location}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ─── PART 4: Journey Stats Bar ───────────────────────── */}
      <div className="py-12 bg-[var(--surface-color)] border-t border-[var(--border-color)]/20">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-0 divide-x divide-[var(--border-color)]/20 text-center">
            {[
              { val: 'Nov 2023', label: 'Founded' },
              { val: '20+', label: 'Projects Delivered' },
              { val: '2', label: 'Cities Served' },
              { val: '95%+', label: '3D-to-Real Accuracy' },
            ].map((s) => (
              <div key={s.label} className="flex flex-col items-center py-6 px-4">
                <span className="font-cormorant text-3xl md:text-4xl font-bold text-[var(--color-gold)] mb-1">{s.val}</span>
                <span className="font-jost text-[10px] font-light uppercase tracking-[0.15em] text-[var(--text-muted)]">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
