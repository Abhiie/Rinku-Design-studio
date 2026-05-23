import React from 'react';
import { motion } from 'framer-motion';
import { Project } from '../../lib/projects';

interface ProjectCardProps {
  key?: React.Key;
  project: Project;
  onSelect: (project: Project) => void;
}

export default function ProjectCard({ project, onSelect }: ProjectCardProps) {
  
  // Renders a visual row of stars matching score (e.g. 4.5, 5)
  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      const isFilled = i <= Math.floor(rating);
      const isHalf = !isFilled && i - 0.5 <= rating;
      
      stars.push(
        <svg
          key={i}
          className="w-3.5 h-3.5 text-[var(--color-gold)]"
          fill={isFilled ? 'currentColor' : isHalf ? 'url(#half-gold)' : 'none'}
          stroke="currentColor"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
        >
          {isHalf && (
            <defs>
              <linearGradient id="half-gold" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="50%" stopColor="var(--color-gold)" />
                <stop offset="50%" stopColor="transparent" stopOpacity="1" />
              </linearGradient>
            </defs>
          )}
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11.48 3.499c.197-.39.73-.39.927 0l2.184 4.327 4.79.71a.547.547 0 01.306.94l-3.468 3.368.817 4.73a.547.547 0 01-.795.579L12 15.827l-4.24 2.214a.547.547 0 01-.795-.579l.817-4.73L3.514 9.544a.547.547 0 01.306-.94l4.79-.71 2.184-4.327z"
          />
        </svg>
      );
    }
    return stars;
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4 }}
      onClick={() => onSelect(project)}
      className="card-glow group border border-[var(--border-color)] overflow-hidden bg-transparent p-[1px] flex flex-col transition-all duration-300 hover:-translate-y-1.5 hover:border-[var(--color-gold)] cursor-pointer select-none h-full"
    >
      {/* Top Gradient Image Area */}
      <div className="relative aspect-[4/5] w-full overflow-hidden flex items-center justify-center flex-1" style={{ background: 'linear-gradient(135deg, #111 0%, #1A1A1A 100%)' }}>
        {/* CSS Gradient representing blueprint of project */}
        <div
          className="absolute inset-0 transition-transform duration-500 group-hover:scale-105 bg-cover bg-center"
          style={{
            backgroundImage: `url(${project.image})`,
            opacity: 0.8
          }}
        />

        {/* Abstract Architectural blueprints lines design */}
        <div className="absolute inset-0 opacity-15 pointer-events-none"
          style={{
            backgroundImage: `
              radial-gradient(circle at 20% 20%, rgba(201,168,76,0.3) 1px, transparent 1px),
              linear-gradient(45deg, transparent 49%, var(--color-gold) 50%, transparent 51%)
            `,
            backgroundSize: '20px 20px, 40px 40px',
          }}
        />

        {/* Category Label (Gold on translucence) */}
        <span className="absolute top-4 left-4 text-[9px] font-medium font-jost tracking-[0.2em] uppercase bg-black/60 px-3 py-1.5 rounded text-[var(--color-gold)] border border-[var(--color-gold)]/20">
          {project.category}
        </span>

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-neutral-950/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center space-y-2">
          {/* Animated Gold + circle */}
          <div className="w-12 h-12 rounded-full border border-[var(--color-gold)] flex items-center justify-center">
            <span className="text-xl text-[var(--color-gold)] font-light">+</span>
          </div>
          <span className="text-[11px] font-light font-jost tracking-[0.25em] text-[var(--color-gold)] uppercase">
            View Project
          </span>
        </div>
      </div>

      {/* Bottom Information Segment */}
      <div className="p-4 bg-[var(--surface-color)] flex flex-col justify-between border-t border-[var(--border-color)]/20">
        <div>
          {/* Project Title */}
          <h3 className="font-cormorant text-[19px] tracking-wide text-[var(--text-color)] mb-1 leading-tight">
            {project.name}
          </h3>

          {/* Accent Gold Location label & Specs */}
          <div className="text-[10px] uppercase tracking-[1px] text-[var(--text-muted)] mb-3">
            {project.category} &bull; {project.location}
          </div>
        </div>

        {/* Bottom row: Stars + CTA */}
        <div className="flex items-center justify-between mt-1">
          <div className="flex items-center space-x-0.5">
            {renderStars(project.rating)}
          </div>
          <span className="inline-block text-[10px] font-medium font-jost tracking-[1.5px] text-[var(--text-muted)] uppercase group-hover:text-[var(--color-gold)] transition-colors duration-300">
            View &mdash;&gt;
          </span>
        </div>
      </div>
    </motion.div>
  );
}
