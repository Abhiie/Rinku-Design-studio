import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { convertedPhotoGroups, PhotoGroup } from '../../lib/convertedPhotos';

export default function ShowcaseExplorer() {
  const [viewMode, setViewMode] = useState<'individual' | 'grouped'>('individual');
  
  // Modal/Lightbox states
  const [selectedGroup, setSelectedGroup] = useState<PhotoGroup | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [lightboxImages, setLightboxImages] = useState<string[]>([]);
  const [lightboxTitle, setLightboxTitle] = useState<string>('');

  // 1. All Converted Groups
  const filteredGroups = useMemo(() => {
    return convertedPhotoGroups;
  }, []);

  // 2. Individual Flat Image Resolution
  const flatImages = useMemo(() => {
    const list: { url: string; groupTitle: string; groupId: string; originalIndex: number }[] = [];
    convertedPhotoGroups.forEach(g => {
      g.images.forEach((url, idx) => {
        list.push({
          url,
          groupTitle: g.title,
          groupId: g.id,
          originalIndex: idx,
        });
      });
    });
    return list;
  }, []);

  // Lock body scroll during active overlays
  useEffect(() => {
    if (selectedGroup || lightboxIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [selectedGroup, lightboxIndex]);

  // Open Lightbox
  const openLightbox = (images: string[], index: number, title: string) => {
    setLightboxImages(images);
    setLightboxIndex(index);
    setLightboxTitle(title);
  };

  // Keyboard navigation for Lightbox
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (lightboxIndex === null) return;
    if (e.key === 'Escape') {
      setLightboxIndex(null);
    } else if (e.key === 'ArrowRight') {
      setLightboxIndex(prev => (prev !== null ? (prev + 1) % lightboxImages.length : 0));
    } else if (e.key === 'ArrowLeft') {
      setLightboxIndex(prev => (prev !== null ? (prev - 1 + lightboxImages.length) % lightboxImages.length : 0));
    }
  }, [lightboxIndex, lightboxImages]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  const goNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % lightboxImages.length);
    }
  };

  const goPrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + lightboxImages.length) % lightboxImages.length);
    }
  };

  return (
    <section id="showcase" className="py-24 md:py-32 bg-[var(--bg-color)] border-t border-[var(--border-color)]/30 relative overflow-hidden">
      
      {/* Premium Decorative Architectural Background Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] select-none">
        <div className="absolute left-[15%] top-0 bottom-0 w-[1px] bg-[var(--color-gold)]" />
        <div className="absolute left-[50%] top-0 bottom-0 w-[1px] bg-[var(--color-gold)]" />
        <div className="absolute left-[85%] top-0 bottom-0 w-[1px] bg-[var(--color-gold)]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 mb-20">
          <div>
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-[11px] font-light tracking-[0.4em] text-[var(--color-gold)] uppercase font-jost mb-3 block"
            >
              DESIGN STUDIO ARCHIVES
            </motion.span>
            
            <motion.h2 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="font-cormorant text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--text-color)] tracking-tight leading-none"
            >
              Our Projects
            </motion.h2>
            
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="h-[1px] bg-[var(--color-gold)] mt-5 mb-4" 
            />
            
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.85 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="font-jost font-normal text-[15px] text-[var(--text-color)] opacity-85 leading-[1.8] max-w-xl"
            >
              Explore our full collection of bespoke interior works. Cycle between a unified stream of images or view individual room concepts structured directly from our project blueprints.
            </motion.p>
          </div>

          {/* Symmetrical High-End Architectural Switcher */}
          <div className="flex items-center">
            
            {/* View Mode Toggle: Sleek Underlined Text */}
            <div className="flex items-center gap-8 border-b border-[var(--border-color)]/20 pb-2 relative">
              <button
                onClick={() => setViewMode('individual')}
                className={`pb-2 text-[11px] font-medium font-jost tracking-[0.2em] uppercase transition-colors duration-300 cursor-pointer relative ${
                  viewMode === 'individual'
                    ? 'text-[var(--color-gold)]'
                    : 'text-[var(--text-muted)] hover:text-[var(--text-color)]'
                }`}
              >
                Individual Stream
                {viewMode === 'individual' && (
                  <motion.div
                    layoutId="viewmode-active-line"
                    className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[var(--color-gold)]"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
              </button>
              <button
                onClick={() => setViewMode('grouped')}
                className={`pb-2 text-[11px] font-medium font-jost tracking-[0.2em] uppercase transition-colors duration-300 cursor-pointer relative ${
                  viewMode === 'grouped'
                    ? 'text-[var(--color-gold)]'
                    : 'text-[var(--text-muted)] hover:text-[var(--text-color)]'
                }`}
              >
                Concept Groups
                {viewMode === 'grouped' && (
                  <motion.div
                    layoutId="viewmode-active-line"
                    className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[var(--color-gold)]"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
              </button>
            </div>

          </div>
        </div>

        {/* Dynamic Display Board */}
        <div className="min-h-[500px]">
          <AnimatePresence mode="wait">
            
            {/* 1. INDIVIDUAL TRUE MASONRY STREAM (LIVELY COLUMN WRAP) */}
            {viewMode === 'individual' ? (
              <motion.div
                key="individual-masonry"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-5 space-y-5"
              >
                {flatImages.map((img, idx) => (
                  <motion.div
                    key={`${img.url}-${idx}`}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-5%' }}
                    transition={{ duration: 0.5, delay: Math.min(idx % 5 * 0.05, 0.3) }}
                    onClick={() => openLightbox(flatImages.map(f => f.url), idx, img.groupTitle)}
                    className="break-inside-avoid group relative rounded overflow-hidden cursor-zoom-in bg-[var(--surface-color)] border border-[var(--border-color)]/20 shadow-sm hover:border-[var(--color-gold)]/50 transition-all duration-300"
                  >
                    {/* Natural original-aspect image */}
                    <img
                      src={img.url}
                      alt={img.groupTitle}
                      loading="lazy"
                      className="w-full h-auto object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    />

                    {/* Fine Gold Accents (Micro-details that remove "AI" feel) */}
                    <div className="absolute top-3 left-3 w-3 h-3 border-t border-l border-[var(--color-gold)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                    <div className="absolute bottom-3 right-3 w-3 h-3 border-b border-r border-[var(--color-gold)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                    {/* Premium architectural label overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4 z-10">
                      <span className="self-end text-[8px] font-light tracking-[0.25em] font-jost text-[var(--color-gold)] uppercase bg-black/60 px-2 py-0.5 rounded border border-[var(--color-gold)]/20">
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                      <div>
                        <span className="text-[8px] font-light font-jost tracking-widest text-[var(--color-gold)] uppercase block mb-1">
                          CONCEPT ARCHIVE
                        </span>
                        <h4 className="font-cormorant text-md font-bold text-white tracking-wide truncate">
                          {img.groupTitle}
                        </h4>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              
              /* 2. PREMIUM GROUPED CARDS (LIVELY PHOTO FAN-OUT STACK) */
              <motion.div
                key="grouped-fanout"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
              >
                {filteredGroups.map((group, idx) => (
                  <motion.div
                    key={group.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.05 }}
                    onClick={() => setSelectedGroup(group)}
                    className="group relative cursor-pointer"
                  >
                    {/* Dynamic Fan-out Interactive Photo Stack Wrapper */}
                    <div className="relative aspect-[4/3] w-full mb-6">
                      
                      {/* Layer 3: Rotated Background Card (Fanned out on hover) */}
                      <div className="absolute inset-0 bg-neutral-900 border border-[var(--border-color)]/25 rounded shadow-lg transform rotate-2 translate-y-1 scale-95 opacity-0 group-hover:opacity-100 group-hover:rotate-6 group-hover:translate-x-3 transition-all duration-300 pointer-events-none overflow-hidden">
                        <img 
                          src={group.images[2] || group.images[0]} 
                          alt="" 
                          className="w-full h-full object-cover opacity-35" 
                        />
                      </div>

                      {/* Layer 2: Middle Background Card */}
                      <div className="absolute inset-0 bg-neutral-900 border border-[var(--border-color)]/25 rounded shadow-lg transform -rotate-1 -translate-y-1 scale-[0.98] group-hover:-rotate-3 group-hover:-translate-x-2 group-hover:-translate-y-2 transition-all duration-300 pointer-events-none overflow-hidden">
                        <img 
                          src={group.images[1] || group.images[0]} 
                          alt="" 
                          className="w-full h-full object-cover opacity-50" 
                        />
                      </div>

                      {/* Layer 1: Front Primary Cover Card */}
                      <div className="absolute inset-0 border border-[var(--border-color)]/30 rounded bg-[var(--surface-color)] shadow-xl overflow-hidden transform group-hover:-translate-y-1 transition-all duration-300">
                        <img
                          src={group.images[0]}
                          alt={group.title}
                          loading="lazy"
                          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        />
                        
                        {/* Elegant Dark Glass Cover Mask */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/0 to-transparent" />
                        
                        {/* Concept Type Pill */}
                        <span className="absolute top-4 right-4 text-[8px] font-light tracking-[0.2em] font-jost uppercase bg-black/80 backdrop-blur-md px-3 py-1.5 text-[var(--color-gold)] border border-[var(--color-gold)]/30 rounded-sm">
                          {group.type === 'pdf' ? '3D Blueprint' : 'Site Photo'}
                        </span>

                        {/* Page Count */}
                        <span className="absolute bottom-4 left-4 text-[9px] font-light tracking-widest font-jost text-white/70 uppercase">
                          {group.images.length} {group.type === 'pdf' ? 'blueprint slides' : 'photographs'}
                        </span>
                      </div>
                    </div>

                    {/* Metadata Header Bottom */}
                    <div className="px-1 py-1 flex items-start justify-between">
                      <div className="min-w-0">
                        <h4 className="font-cormorant text-xl font-bold text-[var(--text-color)] tracking-wide group-hover:text-[var(--color-gold)] transition-colors duration-300">
                          {group.title}
                        </h4>
                        <p className="font-jost text-[10px] text-[var(--text-muted)] tracking-widest uppercase mt-1">
                          {group.type === 'pdf' ? 'CAD & 3D Concepts' : 'Realized Interior Design'}
                        </p>
                      </div>

                      {/* Sleek Minimalist Arrow Indicator */}
                      <div className="w-8 h-8 rounded-full border border-[var(--border-color)]/30 flex items-center justify-center text-[var(--text-muted)] group-hover:border-[var(--color-gold)] group-hover:text-[var(--color-gold)] group-hover:translate-x-1 transition-all duration-300">
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                        </svg>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}

          </AnimatePresence>
        </div>
      </div>

      {/* ─── GROUP MULTI-SLIDE MODAL OVERLAY ─── */}
      <AnimatePresence>
        {selectedGroup && (
          <>
            {/* Glass Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedGroup(null)}
              className="fixed inset-0 z-[80] bg-black/90 backdrop-blur-md cursor-pointer"
            />
            
            {/* Dialog panel */}
            <motion.div
              initial={{ opacity: 0, y: 60, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 50, scale: 0.98 }}
              transition={{ type: 'spring', damping: 28, stiffness: 220 }}
              className="fixed inset-x-0 bottom-0 top-[6vh] md:top-[8vh] max-w-5xl mx-auto z-[81] bg-[var(--bg-color)] rounded-t-3xl overflow-hidden shadow-2xl flex flex-col border-t border-[var(--border-color)]/30"
            >
              {/* Custom Header strip */}
              <div className="flex items-center justify-between px-8 py-6 border-b border-[var(--border-color)]/25 shrink-0 bg-[var(--bg-color)]">
                <div className="flex items-center gap-3.5">
                  <div className="w-2 h-2 rounded-full bg-[var(--color-gold)] shadow-sm animate-pulse" />
                  <div>
                    <h3 className="font-cormorant text-2xl md:text-3xl font-bold text-[var(--text-color)] tracking-wide">
                      {selectedGroup.title}
                    </h3>
                    <p className="font-jost text-[10px] font-light tracking-[0.25em] uppercase text-[var(--text-muted)] mt-1">
                      {selectedGroup.type === 'pdf' ? 'Blueprint Slide Deck' : 'Project Photographic Review'}
                    </p>
                  </div>
                </div>
                
                {/* Minimalist Close button */}
                <button
                  onClick={() => setSelectedGroup(null)}
                  className="w-10 h-10 rounded-full border border-[var(--border-color)]/30 flex items-center justify-center text-[var(--text-muted)] hover:border-[var(--color-gold)] hover:text-[var(--color-gold)] transition-colors cursor-pointer"
                >
                  <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Sub-gallery photo list */}
              <div className="flex-1 overflow-y-auto p-8 bg-[var(--surface-color)]/20">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
                  {selectedGroup.images.map((src, idx) => (
                    <div
                      key={idx}
                      onClick={() => openLightbox(selectedGroup.images, idx, selectedGroup.title)}
                      className="group relative aspect-[4/3] rounded-md overflow-hidden bg-[var(--surface-color)] border border-[var(--border-color)]/30 cursor-zoom-in hover:border-[var(--color-gold)]/60 transition-colors duration-300"
                    >
                      <img
                        src={src}
                        alt={`${selectedGroup.title} — page ${idx + 1}`}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                      />
                      
                      {/* Image tag label */}
                      <span className="absolute bottom-3 right-3 bg-black/80 border border-white/10 px-2.5 py-0.5 rounded text-[8px] font-light font-jost text-[var(--color-gold)] tracking-widest">
                        IMAGE {String(idx + 1).padStart(2, '0')}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Footer navigation info */}
              <div className="shrink-0 px-8 py-5 border-t border-[var(--border-color)]/20 flex items-center justify-between bg-[var(--surface-color)]/50">
                <span className="font-jost text-[10px] text-[var(--text-muted)] font-light tracking-widest uppercase">
                  ARCHIVES CONTAINING {selectedGroup.images.length} RESOLVED WEBP SLIDES
                </span>
                <button
                  onClick={() => setSelectedGroup(null)}
                  className="font-jost text-[10px] font-semibold text-[var(--color-gold)] uppercase tracking-[0.2em] hover:underline cursor-pointer"
                >
                  Close &amp; return to portfolio &rarr;
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* ─── FULLSCREEN LIGHTBOX OVERLAY ─── */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setLightboxIndex(null)}
            className="fixed inset-0 z-[90] bg-black/98 flex flex-col justify-between p-6 select-none cursor-zoom-out"
          >
            {/* Lightbox header bar */}
            <div className="flex items-center justify-between w-full p-2 text-white z-10 shrink-0">
              <div className="min-w-0">
                <span className="text-[9px] font-medium font-jost tracking-[0.3em] text-[var(--color-gold)] uppercase block mb-1">
                  FULLSCREEN SHOWCASE EXPLORER
                </span>
                <h4 className="font-cormorant text-2xl font-bold text-white tracking-wide truncate">
                  {lightboxTitle}
                </h4>
              </div>

              <div className="flex items-center gap-5">
                <span className="font-jost text-[11px] text-white/50 tracking-widest uppercase">
                  {lightboxIndex + 1} / {lightboxImages.length}
                </span>
                <button
                  onClick={() => setLightboxIndex(null)}
                  className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:text-white hover:border-white transition-colors cursor-pointer"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Display Visual container */}
            <div className="flex-1 flex items-center justify-center relative min-h-0 py-6">
              
              {/* Prev Button */}
              <button
                onClick={goPrev}
                className="absolute left-2 md:left-6 w-12 h-12 rounded-full border border-white/25 bg-black/60 flex items-center justify-center text-white hover:bg-[var(--color-gold)] hover:text-black hover:border-[var(--color-gold)] transition-all cursor-pointer z-10"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
              </button>

              {/* Next Button */}
              <button
                onClick={goNext}
                className="absolute right-2 md:right-6 w-12 h-12 rounded-full border border-white/25 bg-black/60 flex items-center justify-center text-white hover:bg-[var(--color-gold)] hover:text-black hover:border-[var(--color-gold)] transition-all cursor-pointer z-10"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </button>

              <motion.img
                key={lightboxIndex}
                src={lightboxImages[lightboxIndex]}
                alt="Architectural presentation"
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.25 }}
                onClick={(e) => e.stopPropagation()}
                className="max-w-full max-h-full object-contain rounded shadow-2xl z-0 cursor-default"
              />
            </div>

            {/* Help instructions block */}
            <div className="w-full text-center py-2 shrink-0">
              <span className="font-jost text-[10px] font-light text-white/40 tracking-[0.15em] uppercase">
                Controls: Use <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-white text-[9px]">←</kbd> and <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-white text-[9px]">→</kbd> to browse &middot; <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-white text-[9px]">ESC</kbd> to exit
              </span>
            </div>

          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
