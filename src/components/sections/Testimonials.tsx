import React from 'react';
import { motion } from 'framer-motion';

export default function Testimonials() {
  const reviews = [
    {
      initials: 'AK',
      name: 'Ananya Kapoor',
      project: 'The Kapoor Residence',
      quote: 'Working with Rinku Design Studio transformed our home beyond imagination. The attention to detail is extraordinary.'
    },
    {
      initials: 'PM',
      name: 'Priya Malhotra',
      project: 'Serenity Spa & Wellness',
      quote: "Our spa's ambiance has become our biggest selling point. Every guest comments on the interiors."
    },
    {
      initials: 'RM',
      name: 'Rajiv Mehta',
      project: 'Mehta Corporate HQ',
      quote: 'Professional, creative, and always on time. Our office redesign boosted team morale visibly.'
    },
    {
      initials: 'NL',
      name: 'Nisha Lal',
      project: 'The Loft Studio',
      quote: 'They balanced our budget perfectly without ever making us feel we were compromising.'
    },
    {
      initials: 'FA',
      name: 'Farhan Ansari',
      project: 'Artisan Café Interiors',
      quote: 'The café now has a soul. Customers come for the ambiance as much as the coffee.'
    },
    {
      initials: 'DN',
      name: 'Deepa Nair',
      project: 'Nair Family Villa',
      quote: 'Pure luxury delivered with warmth. Rinku herself is an absolute pleasure to work with.'
    }
  ];

  // We duplicate reviews for a seamless infinite loop scroll
  const duplicatedReviews = [...reviews, ...reviews];

  // Star SVGs
  const starsSvg = (
    <div className="flex space-x-0.5 text-[var(--color-gold)] mb-4">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );

  return (
    <section
      id="testimonials"
      className="py-24 md:py-32 bg-[var(--bg-color)] border-t border-[var(--border-color)]/30 overflow-hidden select-none"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-16">
        {/* Section title heads */}
        <div className="text-center">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10% 0px' }}
            transition={{ duration: 0.6 }}
            className="text-[11px] font-light tracking-[0.35em] text-[var(--color-gold)] uppercase font-jost mb-3"
          >
            TESTIMONIALS
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10% 0px' }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-cormorant text-4xl md:text-5xl font-semibold text-[var(--text-color)]"
          >
            Words From Our Clients
          </motion.h2>
        </div>
      </div>

      {/* Infin Auto Scrolling Carousel (Pause on hover) */}
       <div className="w-full overflow-hidden flex relative py-4 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-20 before:bg-gradient-to-r before:from-[var(--bg-color)] before:to-transparent before:z-10 after:absolute after:right-0 after:top-0 after:bottom-0 after:w-20 after:bg-gradient-to-l after:from-[var(--bg-color)] after:to-transparent after:z-10">
         <div
           className="flex space-x-8 animate-[infiniteScroll_40s_linear_infinite] hover:[animation-play-state:paused]"
           style={{ width: 'max-content' }}
         >
           {duplicatedReviews.map((rev, index) => (
             <div
               key={`${rev.name}-${index}`}
               className="w-[380px] bg-[var(--surface-color)] p-8 border border-[var(--border-color)]/20 rounded flex flex-col justify-between shrink-0"
             >
               <div>
                 {/* 5 gold stars */}
                 {starsSvg}
                 
                 {/* Quote text */}
                 <p className="font-cormorant italic text-lg leading-relaxed text-[var(--text-color)] mb-6">
                   "{rev.quote}"
                 </p>
               </div>

               <div>
                 {/* Divider */}
                 <div className="h-[1px] bg-[var(--color-gold)]/10 w-full mb-5" />

                 {/* Customer profile info */}
                 <div className="flex items-center space-x-4">
                   <div className="w-10 h-10 rounded-full bg-[var(--color-gold)]/10 border border-[var(--color-gold)]/20 flex items-center justify-center font-jost text-xs font-semibold text-[var(--color-gold)] uppercase">
                     {rev.initials}
                   </div>
                   <div>
                     <h4 className="font-jost text-sm font-medium text-[var(--text-color)]">
                       {rev.name}
                     </h4>
                     <p className="font-jost text-[11px] text-[var(--color-gold)] tracking-wider mt-0.5">
                       {rev.project}
                     </p>
                   </div>
                 </div>
               </div>
             </div>
           ))}
         </div>
       </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-0 py-8 border-t border-b border-[var(--border-color)]/20 text-center text-[var(--text-color)] font-jost divide-x divide-[var(--border-color)]/20">
          
          <div className="flex flex-col items-center px-4">
            <span className="font-cormorant text-3xl font-bold text-[var(--color-gold)] mb-1">4.9</span>
            <span className="text-[11px] font-normal tracking-[0.15em] text-[var(--text-color)] opacity-80 uppercase">Avg Rating ★</span>
          </div>

          <div className="flex flex-col items-center px-4">
            <span className="font-cormorant text-3xl font-bold text-[var(--color-gold)] mb-1">20+</span>
            <span className="text-[11px] font-normal tracking-[0.15em] text-[var(--text-color)] opacity-80 uppercase">Projects</span>
          </div>

          <div className="flex flex-col items-center px-4 border-t border-[var(--border-color)]/20 lg:border-t-0 mt-4 pt-4 lg:mt-0 lg:pt-0">
            <span className="font-cormorant text-3xl font-bold text-[var(--color-gold)] mb-1">2023</span>
            <span className="text-[11px] font-normal tracking-[0.15em] text-[var(--text-color)] opacity-80 uppercase">Est.</span>
          </div>

          <div className="flex flex-col items-center px-4 border-t border-[var(--border-color)]/20 lg:border-t-0 mt-4 pt-4 lg:mt-0 lg:pt-0">
            <span className="font-cormorant text-3xl font-bold text-[var(--color-gold)] mb-1">100%</span>
            <span className="text-[11px] font-normal tracking-[0.15em] text-[var(--text-color)] opacity-80 uppercase">Satisfaction</span>
          </div>

        </div>
      </div>
    </section>
  );
}
