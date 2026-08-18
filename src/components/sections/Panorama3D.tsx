import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ENSCAPE_URL = 'https://api2.enscape3d.com/v3/view/e8e66d9f-8a32-4d21-94b5-47e694726b2c';

export default function Panorama3D() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  const sectionRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const viewerRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (labelRef.current) {
        gsap.fromTo(labelRef.current,
          { opacity: 0, y: 20, letterSpacing: '0.15em' },
          { opacity: 1, y: 0, letterSpacing: '0.4em', duration: 0.8, ease: 'power3.out',
            scrollTrigger: { trigger: labelRef.current, start: 'top 88%', toggleActions: 'play none none none' }
          });
      }
      if (titleRef.current) {
        gsap.fromTo(titleRef.current,
          { opacity: 0, y: 50, clipPath: 'inset(100% 0 0 0)' },
          { opacity: 1, y: 0, clipPath: 'inset(0% 0 0 0)', duration: 1.1, ease: 'power4.out',
            scrollTrigger: { trigger: titleRef.current, start: 'top 85%', toggleActions: 'play none none none' }
          });
      }
      if (lineRef.current) {
        gsap.fromTo(lineRef.current, { width: 0 },
          { width: 80, duration: 1.2, ease: 'power2.out',
            scrollTrigger: { trigger: lineRef.current, start: 'top 88%', toggleActions: 'play none none none' }
          });
      }
      if (descRef.current) {
        gsap.fromTo(descRef.current, { opacity: 0, y: 20 },
          { opacity: 0.85, y: 0, duration: 0.8, ease: 'power2.out', delay: 0.1,
            scrollTrigger: { trigger: descRef.current, start: 'top 88%', toggleActions: 'play none none none' }
          });
      }
      if (viewerRef.current) {
        gsap.fromTo(viewerRef.current,
          { opacity: 0, y: 80, scale: 0.94 },
          { opacity: 1, y: 0, scale: 1, duration: 1.3, ease: 'power3.out',
            scrollTrigger: { trigger: viewerRef.current, start: 'top 85%', toggleActions: 'play none none none' }
          });
        gsap.to(viewerRef.current, {
          y: -25, ease: 'none',
          scrollTrigger: { trigger: viewerRef.current, start: 'top bottom', end: 'bottom top', scrub: 1.5 }
        });
      }
      if (statsRef.current) {
        gsap.fromTo(statsRef.current, { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.7, ease: 'power2.out',
            scrollTrigger: { trigger: statsRef.current, start: 'top 90%', toggleActions: 'play none none none' }
          });
      }
      if (badgeRef.current) {
        gsap.fromTo(badgeRef.current, { opacity: 0, scale: 0.8, rotation: -10 },
          { opacity: 1, scale: 1, rotation: 0, duration: 0.9, ease: 'back.out(1.7)',
            scrollTrigger: { trigger: badgeRef.current, start: 'top 85%', toggleActions: 'play none none none' }
          });
      }
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const handleExpand = () => { setIsExpanded(true); document.body.style.overflow = 'hidden'; };
  const handleCollapse = () => { setIsExpanded(false); document.body.style.overflow = ''; };

  return (
    <>
      <section id="3d-walkthrough" ref={sectionRef}
        className="relative py-28 md:py-40 bg-[var(--bg-color)] border-t border-[var(--border-color)]/30 overflow-hidden">

        {/* Background decorative elements */}
        <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
          <div className="absolute left-[15%] top-0 bottom-0 w-[1px] bg-[var(--color-gold)] opacity-[0.03]" />
          <div className="absolute left-[50%] top-0 bottom-0 w-[1px] bg-[var(--color-gold)] opacity-[0.03]" />
          <div className="absolute left-[85%] top-0 bottom-0 w-[1px] bg-[var(--color-gold)] opacity-[0.03]" />
          {/* Large ambient glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full"
            style={{ background: 'radial-gradient(circle, rgba(201,168,76,0.05) 0%, transparent 60%)' }} />
          {/* Secondary glow */}
          <div className="absolute -top-[200px] -right-[200px] w-[600px] h-[600px] rounded-full"
            style={{ background: 'radial-gradient(circle, rgba(201,168,76,0.03) 0%, transparent 70%)' }} />
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

          {/* Split Header Layout */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 mb-20">
            <div className="lg:max-w-2xl">
              <span ref={labelRef}
                className="text-[11px] font-light tracking-[0.4em] text-[var(--color-gold)] uppercase font-jost mb-4 block opacity-0">
                IMMERSIVE EXPERIENCE
              </span>
              <h2 ref={titleRef}
                className="font-cormorant text-5xl md:text-6xl lg:text-7xl font-bold text-[var(--text-color)] tracking-tight leading-[0.95] opacity-0">
                Step Inside<br />
                <span className="shimmer-gold">The Vision</span>
              </h2>
              <div ref={lineRef} className="h-[1.5px] bg-gradient-to-r from-[var(--color-gold)] to-transparent mt-7 mb-5" style={{ width: 0 }} />
              <p ref={descRef}
                className="font-jost font-normal text-[15px] text-[var(--text-color)] leading-[1.9] max-w-lg opacity-0">
                Explore this interactive 360° panorama rendered in photorealistic detail.
                Drag to look around and experience the space from every angle — before a single brick is laid.
              </p>
            </div>

            {/* Floating Rotating Badge */}
            <div ref={badgeRef} className="hidden lg:flex opacity-0">
              <div className="relative w-[130px] h-[130px]">
                <svg viewBox="0 0 130 130" className="w-full h-full animate-[slowOrbit_20s_linear_infinite]">
                  <defs>
                    <path id="circlePath" d="M 65,65 m -50,0 a 50,50 0 1,1 100,0 a 50,50 0 1,1 -100,0" />
                  </defs>
                  <text className="fill-[var(--color-gold)] font-jost" style={{ fontSize: '10px', letterSpacing: '0.35em' }}>
                    <textPath href="#circlePath">
                      360° PANORAMA · ENSCAPE 3D · IMMERSIVE ·
                    </textPath>
                  </text>
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full border border-[var(--color-gold)]/40 flex items-center justify-center bg-[var(--bg-color)]">
                    <svg className="w-5 h-5 text-[var(--color-gold)]" fill="none" stroke="currentColor" strokeWidth="1.2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Viewer Container with Glow Border */}
          <div ref={viewerRef} className="relative opacity-0">
            {/* Animated gradient border glow */}
            <div className="absolute -inset-[1px] rounded-2xl opacity-60 blur-[1px]"
              style={{
                background: 'linear-gradient(135deg, var(--color-gold), transparent 40%, transparent 60%, var(--color-gold-dark))',
              }} />

            {/* Main viewer */}
            <div className="relative rounded-2xl overflow-hidden bg-[var(--surface-color)] shadow-2xl shadow-black/40"
              style={{ aspectRatio: '16 / 9' }}>

              {!hasStarted ? (
                /* Premium Launch Card */
                <div className="absolute inset-0 flex items-center justify-center z-20">
                  {/* Background pattern */}
                  <div className="absolute inset-0 opacity-[0.04]"
                    style={{
                      backgroundImage: `radial-gradient(circle at 1px 1px, var(--color-gold) 1px, transparent 0)`,
                      backgroundSize: '40px 40px',
                    }} />

                  {/* Animated rings */}
                  <div className="absolute w-[180px] h-[180px] md:w-[280px] md:h-[280px] border border-[var(--color-gold)]/10 rounded-full animate-[slowOrbit_12s_ease-in-out_infinite]" />
                  <div className="absolute w-[240px] h-[240px] md:w-[380px] md:h-[380px] border border-[var(--color-gold)]/[0.05] rounded-full animate-[slowOrbit_20s_ease-in-out_infinite_reverse]" />
                  <div className="absolute w-[300px] h-[300px] md:w-[480px] md:h-[480px] border border-[var(--color-gold)]/[0.03] rounded-full animate-[slowOrbit_28s_ease-in-out_infinite]" />

                  {/* Center content */}
                  <div className="relative z-10 flex flex-col items-center">
                    <div className="w-24 h-24 md:w-28 md:h-28 rounded-full border-2 border-[var(--color-gold)]/25 flex items-center justify-center bg-[var(--bg-color)]/80 backdrop-blur-md shadow-2xl animate-[pulseGlow_3s_ease-in-out_infinite] mb-8">
                      <svg className="w-10 h-10 md:w-12 md:h-12 text-[var(--color-gold)]" fill="none" stroke="currentColor" strokeWidth="0.8" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
                      </svg>
                    </div>

                    <span className="text-[9px] font-light tracking-[0.35em] text-[var(--color-gold)] uppercase font-jost mb-3">
                      INTERACTIVE 360° PANORAMA
                    </span>
                    <h3 className="font-cormorant text-3xl md:text-4xl font-semibold text-[var(--text-color)] mb-2 text-center">
                      Explore the Space
                    </h3>
                    <p className="font-jost text-[12px] text-[var(--text-muted)] max-w-sm text-center mb-10 leading-relaxed px-4">
                      Click to load the immersive walkthrough experience powered by Enscape real-time rendering
                    </p>

                    <button onClick={() => setHasStarted(true)}
                      className="group relative overflow-hidden px-10 py-4 font-jost text-[11px] tracking-[0.3em] uppercase font-medium rounded-full cursor-pointer border border-[var(--color-gold)]/50 text-[var(--color-gold)] hover:text-black transition-colors duration-500">
                      <div className="absolute inset-0 bg-[var(--color-gold)] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]" />
                      <span className="relative flex items-center gap-3">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                        Launch Experience
                      </span>
                    </button>
                  </div>
                </div>
              ) : (
                <>
                  {!isLoaded && (
                    <div className="absolute inset-0 flex flex-col items-center justify-center z-10 bg-[var(--surface-color)]">
                      <div className="w-14 h-14 border-2 border-[var(--color-gold)]/15 border-t-[var(--color-gold)] rounded-full animate-spin mb-5" />
                      <span className="font-jost text-[11px] tracking-[0.25em] text-[var(--text-muted)] uppercase">
                        Rendering Environment…
                      </span>
                    </div>
                  )}
                  <iframe src={ENSCAPE_URL} title="3D Interactive Walkthrough — Rinku Design Studio"
                    className="absolute inset-0 w-full h-full border-0"
                    allow="fullscreen; gyroscope; accelerometer" allowFullScreen
                    onLoad={() => setIsLoaded(true)}
                    style={{ opacity: isLoaded ? 1 : 0, transition: 'opacity 0.6s ease' }} />
                </>
              )}

              {/* Corner L-brackets */}
              <div className="absolute top-5 left-5 w-6 h-6 border-t-[1.5px] border-l-[1.5px] border-[var(--color-gold)]/25 pointer-events-none z-30" />
              <div className="absolute top-5 right-5 w-6 h-6 border-t-[1.5px] border-r-[1.5px] border-[var(--color-gold)]/25 pointer-events-none z-30" />
              <div className="absolute bottom-5 left-5 w-6 h-6 border-b-[1.5px] border-l-[1.5px] border-[var(--color-gold)]/25 pointer-events-none z-30" />
              <div className="absolute bottom-5 right-5 w-6 h-6 border-b-[1.5px] border-r-[1.5px] border-[var(--color-gold)]/25 pointer-events-none z-30" />

              {/* Glassmorphic floating control bar — appears after loaded */}
              {hasStarted && isLoaded && (
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}
                  className="absolute bottom-6 left-1/2 -translate-x-1/2 z-40 flex items-center gap-4 px-6 py-3 rounded-full bg-black/50 backdrop-blur-xl border border-white/10 shadow-2xl">
                  <span className="font-jost text-[9px] tracking-[0.2em] text-white/60 uppercase hidden sm:inline">
                    Drag to Explore
                  </span>
                  <div className="w-[1px] h-4 bg-white/15 hidden sm:block" />
                  <button onClick={handleExpand}
                    className="flex items-center gap-2 text-white/80 hover:text-[var(--color-gold)] transition-colors cursor-pointer">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
                    </svg>
                    <span className="font-jost text-[9px] tracking-[0.2em] uppercase">Fullscreen</span>
                  </button>
                </motion.div>
              )}
            </div>
          </div>

          {/* Stats / Info Bar */}
          <div ref={statsRef} className="flex flex-wrap items-center justify-between mt-10 gap-6 opacity-0">
            <div className="flex items-center gap-5 md:gap-8">
              {[
                { icon: 'M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zM12 2.25V4.5m5.834.166l-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243l-1.59-1.59', label: 'Click & Drag' },
                { icon: 'M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9', label: '360° View' },
                { icon: 'M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178zM15 12a3 3 0 11-6 0 3 3 0 016 0z', label: 'Photorealistic' },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-2.5 group">
                  <div className="w-8 h-8 rounded-full border border-[var(--border-color)]/30 flex items-center justify-center group-hover:border-[var(--color-gold)]/50 transition-colors">
                    <svg className="w-3.5 h-3.5 text-[var(--color-gold)]/70" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                    </svg>
                  </div>
                  <span className="font-jost text-[10px] tracking-[0.15em] text-[var(--text-muted)] uppercase">{item.label}</span>
                </div>
              ))}
            </div>
            <span className="font-jost text-[9px] tracking-[0.25em] text-[var(--text-muted)] uppercase opacity-60">
              Powered by Enscape Real-Time 3D
            </span>
          </div>
        </div>
      </section>

      {/* Fullscreen Overlay */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black flex flex-col">
            <div className="flex items-center justify-between px-6 py-4 bg-black/90 border-b border-[var(--color-gold)]/15 shrink-0 backdrop-blur-md">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-[var(--color-gold)] animate-pulse" />
                <div>
                  <h3 className="font-cormorant text-lg md:text-xl font-semibold text-white tracking-wide">
                    3D Walkthrough
                  </h3>
                  <span className="font-jost text-[9px] tracking-[0.25em] uppercase text-white/35">
                    Interactive 360° Panorama · Fullscreen
                  </span>
                </div>
              </div>
              <button onClick={handleCollapse}
                className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center text-white/60 hover:border-[var(--color-gold)] hover:text-[var(--color-gold)] transition-colors cursor-pointer">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="flex-1 relative">
              <iframe src={ENSCAPE_URL} title="3D Walkthrough — Fullscreen"
                className="absolute inset-0 w-full h-full border-0"
                allow="fullscreen; gyroscope; accelerometer" allowFullScreen />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
