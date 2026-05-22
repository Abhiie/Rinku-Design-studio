import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Project } from '../../lib/projects';

interface ProjectDetailProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectDetail({ project, onClose }: ProjectDetailProps) {
  const [activePhotoIdx, setActivePhotoIdx] = useState<number | null>(null);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    if (activePhotoIdx === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActivePhotoIdx(null);
      } else if (e.key === 'ArrowRight') {
        setActivePhotoIdx((prev) => (prev !== null && prev < 5 ? prev + 1 : 0));
      } else if (e.key === 'ArrowLeft') {
        setActivePhotoIdx((prev) => (prev !== null && prev > 0 ? prev - 1 : 5));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activePhotoIdx]);

  if (!project) return null;

  // Let's generate 6 gallery photos gradients from project colorA and colorB
  // We offset them slightly to produce lovely rich color tones
  const galleryGradients = [
    `linear-gradient(135deg, ${project.colorA}, ${project.colorB}ee)`,
    `linear-gradient(135deg, ${project.colorB}, ${project.colorA}dd)`,
    `linear-gradient(45deg, ${project.colorA}cc, ${project.colorB}cc)`,
    `linear-gradient(180deg, ${project.colorB}aa, #111111)`,
    `linear-gradient(315deg, ${project.colorA}, #222222)`,
    `linear-gradient(135deg, #121212, ${project.colorB})`
  ];

  const handlePrevPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActivePhotoIdx((prev) => (prev !== null && prev > 0 ? prev - 1 : 5));
  };

  const handleNextPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActivePhotoIdx((prev) => (prev !== null && prev < 5 ? prev + 1 : 0));
  };

  return (
    <motion.div
      id="project-detail-layout"
      initial={{ x: '100%' }}
      animate={{ x: 0 }}
      exit={{ x: '100%' }}
      transition={{ type: 'spring', damping: 28, stiffness: 180 }}
      className="fixed inset-y-0 right-0 z-50 w-full bg-[var(--bg-color)] shadow-2xl flex flex-col overflow-y-auto scrollbar-thin overflow-x-hidden select-none"
    >
      <div className="flex flex-col relative w-full h-full">
        
        {/* 1. Hero Banner */}
        <div
          className="relative h-[60vh] w-full flex flex-col justify-between p-8 md:p-16 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(180deg, rgba(10,10,10,0.6) 0%, rgba(10,10,10,0.2) 50%, rgba(10,10,10,0.85) 100%), url(${project.image})`
          }}
        >
          {/* Abstract background grid overlay */}
          <div className="absolute inset-0 opacity-10 pointer-events-none"
            style={{
              backgroundImage: 'radial-gradient(var(--color-gold) 1px, transparent 1px)',
              backgroundSize: '24px 24px'
            }}
          />

          {/* Close back trigger top left */}
          <button
            onClick={onClose}
            className="self-start px-5 py-2.5 border border-[var(--color-gold)] text-[var(--color-gold)] font-jost text-xs uppercase tracking-widest hover:bg-[var(--color-gold)] hover:text-black transition-all duration-300 mt-4 md:mt-0 cursor-pointer z-10 flex items-center space-x-2"
          >
            <span>&larr;</span> <span>Back to Portfolio</span>
          </button>

          {/* Centered headline title, info */}
          <div className="relative z-10 max-w-4xl mt-auto">
            <span className="inline-block px-3 py-1.5 rounded bg-black/50 text-[10px] uppercase font-light text-[var(--color-gold)] tracking-[0.2em] border border-[var(--color-gold)]/20 mb-4 font-jost">
              {project.category}
            </span>
            
            <h1 className="font-cormorant text-4xl md:text-6xl lg:text-7xl font-bold text-[#F8F5F0] leading-tight mb-3">
              {project.name}
            </h1>
            
            <p className="font-jost font-light text-sm text-[var(--color-gold-light)] uppercase tracking-[0.25em]">
              📍 {project.location}
            </p>
          </div>
        </div>

        {/* 2. Project Quick Stats horizontal columns */}
        <div className="bg-[var(--surface-color)] py-8 border-b border-[var(--border-color)]/20">
          <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-center select-none">
            
            <div className="flex flex-col items-center">
              <span className="font-cormorant text-3xl font-semibold text-[var(--color-gold)] mb-1">
                {project.budgetLabel}
              </span>
              <span className="font-jost text-[10px] font-light uppercase tracking-widest text-[var(--text-muted)]">
                BUDGET
              </span>
            </div>

            <div className="flex flex-col items-center border-l border-[var(--border-color)]/20">
              <span className="font-cormorant text-3xl font-semibold text-[var(--color-gold)] mb-1">
                {project.durationLabel}
              </span>
              <span className="font-jost text-[10px] font-light uppercase tracking-widest text-[var(--text-muted)]">
                DURATION
              </span>
            </div>

            <div className="flex flex-col items-center border-l border-[var(--border-color)]/20">
              <span className="font-cormorant text-3xl font-semibold text-[var(--color-gold)] mb-1">
                {project.area}
              </span>
              <span className="font-jost text-[10px] font-light uppercase tracking-widest text-[var(--text-muted)]">
                AREA SIZE
              </span>
            </div>

            <div className="flex flex-col items-center border-l border-[var(--border-color)]/20">
              <span className="font-cormorant text-3xl font-semibold text-[var(--color-gold)] mb-1">
                {project.year}
              </span>
              <span className="font-jost text-[10px] font-light uppercase tracking-widest text-[var(--text-muted)]">
                YEAR DELIVERED
              </span>
            </div>

          </div>
        </div>

        {/* 3. About This Project dual column layout */}
        <div className="py-20 max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          <div className="lg:col-span-8 flex flex-col space-y-6">
            <span className="text-[11px] font-light tracking-[0.3em] text-[var(--color-gold)] font-jost uppercase">
              OVERVIEW
            </span>
            <h2 className="font-cormorant text-3xl md:text-4xl font-semibold text-[var(--text-color)] mb-4">
              Behind the Blueprint
            </h2>
            
            <p className="font-jost font-light text-base text-[var(--text-muted)] leading-relaxed">
              For this highly bespoke project we were requested to maximize space flow while respecting traditional lifestyle vectors. Our solution emphasized open spatial grids and natural lighting pathways to let the physical layout breathe organically.
            </p>
            <p className="font-jost font-light text-base text-[var(--text-muted)] leading-relaxed">
              Our core challenge involved sourcing raw, heavy monolithic marble plates that could slide seamlessly as a secret partition door between private lounges. Working diligently with regional stonemasons, we selected exquisite blocks with custom veins.
            </p>
            <p className="font-jost font-light text-base text-[var(--text-muted)] leading-relaxed">
              The lighting design emphasizes layered indirect luminance. By recessing warm LED conduits into geometric ceiling planes and aligning brass trim elements, we achieved an immersive twilight ambient mood suitable for high relaxation.
            </p>
          </div>

          <div className="lg:col-span-4 bg-[var(--surface-color)] p-8 rounded border border-[var(--border-color)]/20 shadow-md">
            <h3 className="font-jost text-xs uppercase font-light text-[var(--color-gold)] tracking-widest mb-6 border-b border-[var(--border-color)]/20 pb-3">
              KEY SPECIFICATIONS
            </h3>
            <ul className="flex flex-col space-y-4 font-jost text-sm font-light text-[var(--text-color)]">
              <li className="flex justify-between">
                <span className="text-[var(--text-muted)]">Project Type</span>
                <span className="font-medium">{project.category}</span>
              </li>
              <li className="flex justify-between">
                <span className="text-[var(--text-muted)]">Design Style</span>
                <span className="font-medium">{project.style}</span>
              </li>
              <li className="flex justify-between">
                <span className="text-[var(--text-muted)]">Key Materials</span>
                <span className="font-medium text-right max-w-[180px]">{project.materials}</span>
              </li>
              <li className="flex justify-between">
                <span className="text-[var(--text-muted)]">Scope of Work</span>
                <span className="font-medium text-right">Full Interior + Art</span>
              </li>
            </ul>
          </div>

        </div>

        {/* 4. Client Testimonials section overlay block */}
        <div className="bg-[var(--surface-color)] py-20 border-t border-b border-[var(--border-color)]/10">
          <div className="max-w-4xl mx-auto px-6 text-center h-full relative flex flex-col items-center">
            {/* huge open quote icon in background */}
            <span className="text-9xl font-cormorant font-bold text-[var(--color-gold)] opacity-[0.08] select-none absolute top-0 leading-none">
              “
            </span>

            <p className="font-cormorant italic text-2xl md:text-3xl text-[var(--text-color)] relative z-10 leading-relaxed mb-6 pt-10 md:max-w-2xl mx-auto">
              "{project.testimonial.quote}"
            </p>
            
            <h4 className="font-jost text-[13px] font-light text-[var(--color-gold)] tracking-widest uppercase mb-4">
              &mdash; {project.testimonial.client}
            </h4>

            <div className="w-16 h-[1px] bg-[var(--color-gold)]/30 mb-6" />

            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-8 text-xs font-light tracking-wide text-[var(--text-muted)] font-jost">
              <span>💼 "The team delivered within our budget without compromising on quality."</span>
              <span className="hidden md:inline-block">|</span>
              <span>🕒 "The {project.durationLabel} timeline felt highly reasonable given the massive scale of work."</span>
            </div>
          </div>
        </div>

        {/* 5. Project Photo Gallery masonry grids */}
        <div className="py-24 max-w-7xl mx-auto px-6 md:px-12 w-full">
          <div className="mb-14 text-center">
            <span className="text-[11px] font-light tracking-[0.25em] text-[var(--color-gold)] font-jost uppercase block mb-2">
              PHOTOS
            </span>
            <h3 className="font-cormorant text-3xl font-medium text-[var(--text-color)]">
              Project Gallery
            </h3>
          </div>

          {/* masonry grids, 2 column */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:auto-rows-[250px]">
            {galleryGradients.map((gradient, idx) => {
              // first photo is major height span, spans 2 rows
              const isFirst = idx === 0;
              return (
                <div
                  key={idx}
                  onClick={() => setActivePhotoIdx(idx)}
                  className={`relative rounded border border-[var(--border-color)]/20 shadow-md group overflow-hidden cursor-pointer ${
                    isFirst ? 'md:row-span-2 md:h-auto h-[350px]' : 'h-[250px]'
                  }`}
                >
                  <div
                    className="absolute inset-0 transition-transform duration-500 group-hover:scale-105"
                    style={{ background: gradient }}
                  />

                  {/* Architectural lines blueprint decoration overlay */}
                  <div className="absolute inset-0 opacity-10 pointer-events-none"
                    style={{
                      backgroundImage: `
                        linear-gradient(45deg, transparent 49%, var(--color-gold) 50%, transparent 51%),
                        linear-gradient(-45deg, transparent 49%, var(--color-gold) 50%, transparent 51%)
                      `,
                      backgroundSize: '80px 80px'
                    }}
                  />

                  {/* Hover magnifying glass badge */}
                  <div className="absolute inset-0 bg-neutral-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="px-4 py-2 border border-[var(--color-gold)] text-xs font-jost uppercase tracking-widest text-[var(--color-gold)] bg-black/50">
                      Enlarge View
                    </span>
                  </div>

                  <span className="absolute bottom-4 left-4 font-jost text-[10px] tracking-widest text-[var(--color-gold)] uppercase font-light opacity-50">
                    SPACE COMPOSITION &mdash; 0{idx+1}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* 6. Active Services Used inline footer list */}
        <div className="py-12 bg-[#0A0A0A] border-t border-[var(--border-color)]/20 select-none">
          <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <span className="font-jost text-[11px] font-light uppercase tracking-widest text-[var(--text-muted)]">
              INTEGRATED DISCIPLINES
            </span>
            <div className="flex flex-wrap gap-3">
              {project.services.map((ser) => (
                <span
                  key={ser}
                  className="px-4 py-1.5 rounded-full border border-[var(--color-gold)]/20 text-xs text-[var(--color-gold)] bg-[var(--color-gold)]/[0.02] font-jost font-light"
                >
                  {ser}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>

      {/* Lightbox full overlay section with arrow controls */}
      <AnimatePresence>
        {activePhotoIdx !== null && (
          <motion.div
            key="lightbox-full-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActivePhotoIdx(null)}
            className="fixed inset-0 z-[110] bg-black/95 flex flex-col justify-center items-center p-6 md:p-12 cursor-zoom-out select-none"
          >
            {/* ESC label */}
            <span className="absolute top-6 right-6 font-jost text-[10px] font-light tracking-widest text-neutral-400 uppercase select-none pointer-events-none">
              Press ESC to Close
            </span>

            {/* Left arrow badge */}
            <button
              onClick={handlePrevPhoto}
              className="absolute left-6 h-12 w-12 border border-neutral-800 rounded-full flex items-center justify-center text-xl text-[var(--color-gold)] bg-black/40 hover:bg-[var(--color-gold)] hover:text-black hover:border-[var(--color-gold)] transition-colors cursor-pointer z-50 pointer-events-auto"
              aria-label="Previous photo"
            >
              &larr;
            </button>

            {/* Main photo Gradient mockup frame */}
            <div
              className="max-w-4xl w-full aspect-[4/3] rounded border border-neutral-800 shadow-2xl relative flex items-center justify-center py-10 cursor-default"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Photo background */}
              <div
                className="absolute inset-0"
                style={{ background: galleryGradients[activePhotoIdx] }}
              />

              {/* Wire lines background map overlay */}
              <div className="absolute inset-0 opacity-15 pointer-events-none"
                style={{
                  backgroundImage: `
                    linear-gradient(rgba(201,168,76,0.3) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(201,168,76,0.3) 1px, transparent 1px)
                  `,
                  backgroundSize: '40px 40px'
                }}
              />

              <div className="relative z-10 text-center text-white font-cormorant font-light text-2xl tracking-widest leading-none text-[var(--color-gold-light)] bg-black/60 px-6 py-4 border border-[var(--color-gold)]/20 select-none">
                SPACE SPECIMEN 0{activePhotoIdx + 1}
              </div>
            </div>

            {/* Right arrow badge */}
            <button
              onClick={handleNextPhoto}
              className="absolute right-6 h-12 w-12 border border-neutral-800 rounded-full flex items-center justify-center text-xl text-[var(--color-gold)] bg-black/40 hover:bg-[var(--color-gold)] hover:text-black hover:border-[var(--color-gold)] transition-colors cursor-pointer z-50 pointer-events-auto"
              aria-label="Next photo"
            >
              &rarr;
            </button>

          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
