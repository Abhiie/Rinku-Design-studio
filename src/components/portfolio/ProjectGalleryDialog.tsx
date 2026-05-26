import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Project } from '../../lib/projects';

interface ProjectGalleryDialogProps {
  project: Project;
  onClose: () => void;
}

export default function ProjectGalleryDialog({ project, onClose }: ProjectGalleryDialogProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  // Keyboard controls
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      if (lightboxIndex !== null) setLightboxIndex(null);
      else onClose();
    }
    if (lightboxIndex !== null) {
      if (e.key === 'ArrowRight') setLightboxIndex(i => i !== null ? (i + 1) % project.images.length : 0);
      if (e.key === 'ArrowLeft') setLightboxIndex(i => i !== null ? (i - 1 + project.images.length) % project.images.length : 0);
    }
  }, [lightboxIndex, onClose, project.images.length]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  const goNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setLightboxIndex(i => i !== null ? (i + 1) % project.images.length : 0);
  };
  const goPrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setLightboxIndex(i => i !== null ? (i - 1 + project.images.length) % project.images.length : 0);
  };

  // Build a masonry-like layout: first photo is large (2-col span), rest fill normally
  const images = project.images;

  return (
    <>
      {/* Main dialog backdrop + panel */}
      <motion.div
        key="gallery-backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        onClick={onClose}
        className="fixed inset-0 z-[60] bg-black/80 backdrop-blur-sm"
      />

      <motion.div
        key="gallery-panel"
        initial={{ opacity: 0, y: 60, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 40, scale: 0.97 }}
        transition={{ type: 'spring', damping: 28, stiffness: 200 }}
        className="fixed inset-x-0 bottom-0 top-[4vh] z-[61] flex flex-col bg-[var(--bg-color)] rounded-t-2xl overflow-hidden shadow-2xl select-none"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 md:px-10 py-5 border-b border-[var(--border-color)]/30 shrink-0">
          <div className="flex items-center gap-4">
            {/* Gold dot accent */}
            <div className="w-2 h-2 rounded-full bg-[var(--color-gold)]" />
            <div>
              <h2 className="font-cormorant text-2xl md:text-3xl font-semibold text-[var(--text-color)] leading-tight">
                {project.name}
              </h2>
              <p className="font-jost text-[11px] font-light tracking-[0.2em] uppercase text-[var(--text-muted)] mt-0.5">
                {project.category} &nbsp;·&nbsp; {project.location} &nbsp;·&nbsp; {project.year}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <span className="hidden md:block font-jost text-[11px] font-light tracking-widest text-[var(--text-muted)] uppercase">
              {images.length} photos &nbsp;·&nbsp; Click to zoom
            </span>
            <button
              onClick={onClose}
              className="w-10 h-10 rounded-full border border-[var(--border-color)] flex items-center justify-center text-[var(--text-muted)] hover:border-[var(--color-gold)] hover:text-[var(--color-gold)] transition-all duration-200 cursor-pointer"
              aria-label="Close gallery"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Photo grid — scrollable */}
        <div className="flex-1 overflow-y-auto p-4 md:p-6">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            {images.map((src, idx) => {
              // First image spans 2 columns on md+
              const isFeature = idx === 0;
              return (
                <div
                  key={idx}
                  onClick={() => setLightboxIndex(idx)}
                  className={`relative overflow-hidden rounded-sm cursor-zoom-in group bg-[var(--surface-color)] ${
                    isFeature ? 'col-span-2 md:col-span-2 row-span-1' : 'col-span-1'
                  }`}
                >
                  <div className={`relative ${isFeature ? 'aspect-[16/9]' : 'aspect-square'} overflow-hidden`}>
                    <img
                      src={src}
                      alt={`${project.name} — photo ${idx + 1}`}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-colors duration-300 flex items-center justify-center">
                      <svg
                        className="w-7 h-7 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6" />
                      </svg>
                    </div>
                    {/* Index label */}
                    <span className="absolute bottom-2 right-2 font-jost text-[9px] tracking-widest text-white/50 uppercase">
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="shrink-0 px-6 md:px-10 py-4 border-t border-[var(--border-color)]/20 flex items-center justify-between">
          <span className="font-jost text-[11px] font-light text-[var(--text-muted)] tracking-wider">
            Press <kbd className="px-1.5 py-0.5 rounded bg-[var(--surface-color)] border border-[var(--border-color)]/40 text-[10px]">ESC</kbd> to close
          </span>
          {/* Thumbnail strip preview */}
          <div className="flex items-center gap-2 overflow-hidden max-w-[200px] md:max-w-xs">
            {images.slice(0, 5).map((src, idx) => (
              <div
                key={idx}
                onClick={() => setLightboxIndex(idx)}
                className="w-8 h-8 shrink-0 rounded overflow-hidden cursor-pointer border border-transparent hover:border-[var(--color-gold)] transition-colors"
              >
                <img src={src} alt="" className="w-full h-full object-cover" />
              </div>
            ))}
            {images.length > 5 && (
              <span className="text-[10px] font-light text-[var(--text-muted)] font-jost shrink-0">+{images.length - 5}</span>
            )}
          </div>
        </div>
      </motion.div>

      {/* Lightbox fullscreen overlay */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            key="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setLightboxIndex(null)}
            className="fixed inset-0 z-[70] bg-black/95 flex items-center justify-center p-4 md:p-12 cursor-zoom-out"
          >
            {/* Close lightbox */}
            <button
              onClick={() => setLightboxIndex(null)}
              className="absolute top-5 right-5 w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:text-white hover:border-white transition-colors cursor-pointer z-10"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Counter */}
            <span className="absolute top-6 left-1/2 -translate-x-1/2 font-jost text-[11px] text-white/50 tracking-widest uppercase">
              {lightboxIndex + 1} / {images.length}
            </span>

            {/* Main image */}
            <motion.img
              key={lightboxIndex}
              src={images[lightboxIndex]}
              alt={`${project.name} — photo ${lightboxIndex + 1}`}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.25 }}
              onClick={e => e.stopPropagation()}
              className="max-w-full max-h-full object-contain rounded shadow-2xl cursor-default"
            />

            {/* Prev */}
            <button
              onClick={goPrev}
              className="absolute left-4 md:left-6 w-12 h-12 rounded-full border border-white/20 bg-black/40 flex items-center justify-center text-white hover:bg-[var(--color-gold)] hover:text-black hover:border-[var(--color-gold)] transition-all cursor-pointer"
              aria-label="Previous"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>

            {/* Next */}
            <button
              onClick={goNext}
              className="absolute right-4 md:right-6 w-12 h-12 rounded-full border border-white/20 bg-black/40 flex items-center justify-center text-white hover:bg-[var(--color-gold)] hover:text-black hover:border-[var(--color-gold)] transition-all cursor-pointer"
              aria-label="Next"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
