import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Project, projects } from '../../lib/projects';
import FilterBar from '../portfolio/FilterBar';
import ProjectCard from '../portfolio/ProjectCard';

interface PortfolioProps {
  onSelectProject: (project: Project) => void;
}

export default function Portfolio({ onSelectProject }: PortfolioProps) {
  const [category, setCategory] = useState('All');
  const [budget, setBudget] = useState('All');
  const [duration, setDuration] = useState('All');

  const handleReset = () => {
    setCategory('All');
    setBudget('All');
    setDuration('All');
  };

  // Filter verification logic
  const filteredProjects = projects.filter((project) => {
    // 1. Category check
    if (category !== 'All' && project.category !== category) {
      return false;
    }

    // 2. Budget check (values in Lacs)
    if (budget !== 'All') {
      const value = project.budgetValue;
      if (budget === 'under-10' && value >= 10) return false;
      if (budget === '10-25' && (value < 10 || value > 25)) return false;
      if (budget === '25-50' && (value < 25 || value > 50)) return false;
      if (budget === 'over-50' && value <= 50) return false;
    }

    // 3. Duration check
    if (duration !== 'All') {
      const months = project.durationMonths;
      if (duration === 'under-3' && months >= 3) return false;
      if (duration === '3-6' && (months < 3 || months > 6)) return false;
      if (duration === '6-12' && (months < 6 || months > 12)) return false;
      if (duration === 'over-12' && months <= 12) return false;
    }

    return true;
  });

  return (
    <section
      id="portfolio"
      className="py-24 md:py-32 bg-[var(--bg-color)] border-t border-[var(--border-color)]/30 relative select-none"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section title headers */}
        <div className="mb-8 flex md:flex-row flex-col items-baseline justify-between border-b border-[var(--border-color)] pb-2">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10% 0px' }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-cormorant text-[24px] text-[var(--color-gold)]"
          >
            Latest Work
          </motion.h2>
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10% 0px' }}
            transition={{ duration: 0.6 }}
            className="text-[11px] font-jost text-[var(--text-color)] opacity-50 uppercase tracking-[1px] cursor-pointer"
          >
            View All &rarr;
          </motion.span>
        </div>

        {/* Filter Toolbar controls */}
        <FilterBar
          category={category}
          setCategory={setCategory}
          budget={budget}
          setBudget={setBudget}
          duration={duration}
          setDuration={setDuration}
          onReset={handleReset}
          showingCount={filteredProjects.length}
        />

        {/* Grid matching filtered cards */}
        <div className="relative min-h-[300px]">
          {filteredProjects.length === 0 ? (
            <div className="absolute inset-x-0 top-12 text-center py-16 text-[var(--text-muted)] font-jost font-light text-base select-none">
              <span className="text-2xl block mb-2">🔍</span>
              No projects match the selected filter combination. Click Reset to clear filters.
            </div>
          ) : (
            <motion.div
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              <AnimatePresence mode="popLayout">
                {filteredProjects.map((project) => (
                  <ProjectCard
                    key={project.slug}
                    project={project}
                    onSelect={onSelectProject}
                  />
                ))}
              </AnimatePresence>
            </motion.div>
          )}
        </div>

      </div>
    </section>
  );
}
