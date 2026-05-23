import React from 'react';
import { motion } from 'framer-motion';

export default function Services() {
  const serviceItems = [
    {
      num: '01',
      title: 'Residential Design',
      desc: 'Complete high-end home interiors — customized from architectural structure concept to finishing touches.',
      // SVG House outline
      icon: (
        <svg className="w-10 h-10 text-[var(--color-gold)]" fill="none" stroke="currentColor" strokeWidth="1.2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      )
    },
    {
      num: '02',
      title: 'Commercial Interiors',
      desc: 'Sleek premium workspaces, commercial headquarters, boutique retailers, and wellness spas that inspire clients.',
      // SVG Skyscraper/Building outline
      icon: (
        <svg className="w-10 h-10 text-[var(--color-gold)]" fill="none" stroke="currentColor" strokeWidth="1.2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    {
      num: '03',
      title: 'Architectural Consultation',
      desc: 'Detailed structural flow analyses, space dividing planning, elevations, and detailing services ahead of construction.',
      // SVG Compass drafting outline
      icon: (
        <svg className="w-10 h-10 text-[var(--color-gold)]" fill="none" stroke="currentColor" strokeWidth="1.2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
        </svg>
      )
    },
    {
      num: '04',
      title: '3D Visualization',
      desc: 'Interactive hyper-realistic 3D walkthroughs and digital lighting pre-renders before any hammer touches cement.',
      // SVG Cube projection outline
      icon: (
        <svg className="w-10 h-10 text-[var(--color-gold)]" fill="none" stroke="currentColor" strokeWidth="1.2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
        </svg>
      )
    },
    {
      num: '05',
      title: 'Interior Styling',
      desc: 'Curation of custom artistic furniture selections, artisan textiles, master decor objects, and bespoke artwork programs.',
      // SVG Armchair/Styling outline
      icon: (
        <svg className="w-10 h-10 text-[var(--color-gold)]" fill="none" stroke="currentColor" strokeWidth="1.2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </svg>
      )
    },
    {
      num: '06',
      title: 'Renovation & Restoration',
      desc: 'Breathing refined modern architecture back into older structures without erasing historical memories.',
      // SVG Rotate outline
      icon: (
        <svg className="w-10 h-10 text-[var(--color-gold)]" fill="none" stroke="currentColor" strokeWidth="1.2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 1121.21 8H12M4 4h5" />
        </svg>
      )
    }
  ];

  const processSteps = [
    { num: '01', name: 'Discovery', desc: 'Understanding your rhythm' },
    { num: '02', name: 'Concept', desc: 'Drafting core moods & layouts' },
    { num: '03', name: 'Design', desc: 'Pre-rendering photorealistic materials' },
    { num: '04', name: 'Execution', desc: 'Meticulous on-site engineering' },
    { num: '05', name: 'Handover', desc: 'Your timeless space, unlocked' }
  ];

  return (
    <section
      id="services"
      className="py-24 md:py-32 bg-[var(--bg-color)] border-t border-[var(--border-color)]/30 relative select-none"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header Title */}
        <div className="mb-16 text-center md:text-left">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10% 0px' }}
            transition={{ duration: 0.6 }}
            className="text-[11px] font-light tracking-[0.35em] text-[var(--color-gold)] uppercase font-jost mb-3"
          >
            OUR SERVICES
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10% 0px' }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-cormorant text-4xl md:text-5xl font-semibold text-[var(--text-color)]"
          >
            What We Create
          </motion.h2>
        </div>

        {/* Services Grid (3x2 Desktop, 2x3 Tablet, 1 Mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {serviceItems.map((service, index) => (
            <motion.div
              key={service.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10% 0px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative p-8 rounded border border-[var(--border-color)] bg-transparent flex flex-col justify-between hover:border-[var(--color-gold)] hover:bg-[var(--color-gold)]/[0.012] hover:-translate-y-1 transition-all duration-300 group h-[260px]"
            >
              {/* Corner Faint Service Number */}
              <span className="absolute top-6 right-6 font-jost text-xs tracking-widest text-[var(--text-color)] opacity-20 font-medium group-hover:opacity-40 transition-opacity">
                {service.num}
              </span>

              {/* Service Icon */}
              <div className="mb-5 inline-block group-hover:scale-105 transition-transform duration-300">
                {service.icon}
              </div>

              <div>
                {/* Title */}
                <h3 className="font-cormorant text-2xl font-semibold text-[var(--text-color)] mb-3 leading-tight">
                  {service.title}
                </h3>
                {/* Desc */}
                <p className="font-jost font-normal text-[14px] text-[var(--text-color)] opacity-85 leading-[1.8] line-clamp-3">
                  {service.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Process Timeline */}
        <div className="pt-16 border-t border-[var(--border-color)]/20">
          <div className="text-center mb-16">
            <span className="text-[11px] font-light tracking-[0.25em] text-[var(--color-gold)] font-jost uppercase block mb-2">
              OUR PATHWAYS
            </span>
            <h3 className="font-cormorant text-3xl font-medium text-[var(--text-color)]">
              The Design Process
            </h3>
          </div>

          {/* Connected timeline */}
          <div className="relative flex flex-col lg:flex-row justify-between items-center lg:items-start gap-12 lg:gap-6">
            
            {/* Dashed line background in desktop */}
            <div className="hidden lg:block absolute top-[28px] left-[10%] right-[10%] h-[1px] border-t border-dashed border-[var(--color-gold)]/40 -z-10" />

            {/* steps elements looping */}
            {processSteps.map((step, idx) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-10% 0px' }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                className="flex flex-col items-center text-center max-w-[180px] w-full"
              >
                {/* Timeline node */}
                <div className="relative z-10 w-14 h-14 rounded-full border border-[var(--color-gold)] bg-[var(--bg-color)] flex items-center justify-center text-sm font-semibold tracking-wider font-jost text-[var(--color-gold)] shadow-md group hover:bg-[var(--color-gold)] hover:text-black transition-colors duration-300">
                  {step.num}
                </div>
                
                <h4 className="font-cormorant text-xl font-medium text-[var(--text-color)] mt-4 mb-2">
                  {step.name}
                </h4>
                <p className="font-jost font-normal text-[13px] text-[var(--text-color)] opacity-80 leading-[1.8]">
                  {step.desc}
                </p>
              </motion.div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
}
