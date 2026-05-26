import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Project, projects } from '../../lib/projects';
import FilterBar from '../portfolio/FilterBar';
import ProjectCard from '../portfolio/ProjectCard';
import ProjectGalleryDialog from '../portfolio/ProjectGalleryDialog';

const CATEGORIES = ['All', 'Residential', 'Commercial', 'Restaurant', 'Hospitality', 'Retail'];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filtered = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category === activeCategory);


  return (
    <section id="portfolio" className="py-24 md:py-32 bg-[var(--bg-color)] border-t border-[var(--border-color)]/30">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5 }}
              className="text-[11px] font-light tracking-[0.35em] text-[var(--color-gold)] uppercase font-jost mb-3"
            >
              LATEST WORK
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.05 }}
              className="font-cormorant text-4xl md:text-5xl font-semibold text-[var(--text-color)]"
            >
              Our Projects
            </motion.h2>
          </div>

          {/* Category filter tabs */}
          <motion.div
            initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-wrap items-center gap-2"
          >
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-[11px] font-light font-jost tracking-wider uppercase transition-all duration-200 cursor-pointer border ${activeCategory === cat
                  ? 'bg-[var(--color-gold)] text-black border-[var(--color-gold)]'
                  : 'border-[var(--border-color)]/40 text-[var(--text-muted)] hover:border-[var(--color-gold)]/60 hover:text-[var(--color-gold)]'
                  }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Project count */}
        <motion.p
          key={activeCategory}
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          className="font-jost text-[11px] font-light text-[var(--text-muted)] tracking-widest uppercase mb-8"
        >
          Showing {filtered.length} project{filtered.length !== 1 ? 's' : ''}
        </motion.p>

        {/* Cards grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, idx) => (
              <ProjectCard
                project={project}
                index={idx}
                onSelect={setSelectedProject}
              />
            ))}
          </AnimatePresence>
        </motion.div>

      </div>

      {/* Gallery dialog */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectGalleryDialog
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
