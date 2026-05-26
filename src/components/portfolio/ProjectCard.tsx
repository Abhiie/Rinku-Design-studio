import React from 'react';
import { motion } from 'framer-motion';
import { Project } from '../../lib/projects';

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
  index: number;
}

export default function ProjectCard({ project, onSelect, index }: ProjectCardProps) {
  const coverImage = project.images[0];
  const photoCount = project.images.length;

  return (
    <motion.div
      layout
      layoutId={project.slug}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.45, delay: index * 0.06 }}
      onClick={() => onSelect(project)}
      className="group relative cursor-pointer select-none"
    >
      {/* Card frame */}
      <div className="relative overflow-hidden rounded-sm bg-[var(--surface-color)]">

        {/* Cover image */}
        <div className="relative aspect-[4/5] overflow-hidden">
          <img
            src={coverImage}
            alt={project.name}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />

          {/* Gradient overlay — always visible at bottom */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

          {/* Gold L-corner bracket top-left */}
          <div className="absolute top-4 left-4 w-6 h-6 pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-[1.5px] bg-[var(--color-gold)]" />
            <div className="absolute top-0 left-0 h-full w-[1.5px] bg-[var(--color-gold)]" />
          </div>
          {/* bottom-right bracket */}
          <div className="absolute bottom-[72px] right-4 w-6 h-6 pointer-events-none">
            <div className="absolute bottom-0 right-0 w-full h-[1.5px] bg-[var(--color-gold)] opacity-60" />
            <div className="absolute bottom-0 right-0 h-full w-[1.5px] bg-[var(--color-gold)] opacity-60" />
          </div>

          {/* Category badge — top right */}
          <span className="absolute top-4 right-4 text-[9px] font-medium font-jost tracking-[0.2em] uppercase bg-black/60 backdrop-blur-sm px-3 py-1.5 text-[var(--color-gold)] border border-[var(--color-gold)]/25 rounded-sm">
            {project.category}
          </span>

          {/* Photo count badge */}
          <span className="absolute bottom-[80px] left-4 text-[9px] font-light font-jost tracking-widest text-white/60 uppercase flex items-center gap-1.5">
            <svg className="w-3 h-3 opacity-60" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
            </svg>
            {photoCount} photo{photoCount !== 1 ? 's' : ''}
          </span>

          {/* Hover overlay: "View Gallery" */}
          <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <div className="flex flex-col items-center space-y-2 translate-y-3 group-hover:translate-y-0 transition-transform duration-300">
              <div className="w-12 h-12 rounded-full border border-[var(--color-gold)] flex items-center justify-center bg-black/40">
                <svg className="w-5 h-5 text-[var(--color-gold)]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
                </svg>
              </div>
              <span className="text-[10px] font-light font-jost tracking-[0.25em] text-[var(--color-gold)] uppercase">
                View Gallery
              </span>
            </div>
          </div>
        </div>

        {/* Bottom info strip */}
        <div className="px-4 py-4 bg-[var(--surface-color)] border-t border-[var(--border-color)]/20 flex items-center justify-between">
          <div>
            <h3 className="font-cormorant text-[17px] font-semibold text-[var(--text-color)] leading-tight">
              {project.name}
            </h3>
            <p className="font-jost text-[10px] font-light tracking-wider text-[var(--text-muted)] uppercase mt-0.5">
              {project.location}
            </p>
          </div>
          <span className="font-jost text-[11px] text-[var(--text-muted)] group-hover:text-[var(--color-gold)] transition-colors duration-300 tracking-wider">
            {project.year}
          </span>
        </div>
      </div>
    </motion.div>
  );
}
