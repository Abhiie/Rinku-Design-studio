import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { useLoaderState } from '../hooks/useLoaderState';

export default function Loader() {
  const containerRef = useRef<HTMLDivElement>(null);
  const monogramRef = useRef<SVGSVGElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const estRef = useRef<HTMLDivElement>(null);
  
  const { done, setDone } = useLoaderState();
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    // If loader is already done, don't show it again
    if (done) {
      setShouldRender(false);
      return;
    }

    // Disable scrolling during loader
    document.body.style.overflow = 'hidden';

    // Set initial custom values on paths to animate draw-in
    const paths = monogramRef.current?.querySelectorAll('path');
    if (paths) {
      paths.forEach((path) => {
        const length = path.getTotalLength();
        path.style.strokeDasharray = `${length}`;
        path.style.strokeDashoffset = `${length}`;
      });
    }

    // Initialize GSAP Timeline
    const tl = gsap.timeline({
      onComplete: () => {
        document.body.style.overflow = '';
        setDone(true);
        setShouldRender(false);
      }
    });

    // 0.0s timeline start
    // 0.3s: Draw "RDS" monogram
    if (paths) {
      tl.to(paths, {
        strokeDashoffset: 0,
        duration: 1.4,
        ease: 'power2.out',
        stagger: 0.2
      }, 0.3);
    }

    // 1.0s: "RINKU DESIGN STUDIO" text fades and slides up from y: 24
    tl.fromTo(textRef.current, {
      opacity: 0,
      y: 24
    }, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: 'power2.out'
    }, 1.0);

    // 1.8s: Gold horizontal line scales from left to right (width 0 to 60%)
    tl.fromTo(lineRef.current, {
      scaleX: 0,
      transformOrigin: 'left center'
    }, {
      scaleX: 1,
      duration: 1.0,
      ease: 'power1.inOut'
    }, 1.8);

    // 3.0s: "EST. 2018" fades in
    tl.fromTo(estRef.current, {
      opacity: 0
    }, {
      opacity: 0.6,
      duration: 0.6,
      ease: 'power2.out'
    }, 3.0);

    // 3.8s: Hold 0.6s, then fade out loader upwards
    tl.to(containerRef.current, {
      opacity: 0,
      y: -40,
      duration: 0.8,
      ease: 'power2.inOut'
    }, 4.2);

  }, [done, setDone]);

  if (!shouldRender) return null;

  return (
    <div
      id="rds-loader"
      ref={containerRef}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0A0A0A] select-none text-[#F8F5F0]"
    >
      <div className="flex flex-col items-center max-w-md w-full px-8 text-center">
        {/* SVG Monogram logo */}
        <div className="mb-6 h-[120px] flex items-center justify-center">
          <svg
            ref={monogramRef}
            viewBox="0 0 130 130"
            fill="none"
            stroke="currentColor"
            className="w-full h-full text-[#C9A84C]"
          >
            <path
              d="M 25 110 L 25 55 L 65 15 L 105 55 L 105 75 L 65 115 L 50 100 L 50 70"
              strokeWidth="10"
              strokeLinejoin="miter"
              strokeMiterlimit="4"
              strokeLinecap="square"
            />
          </svg>
        </div>

        {/* Studio Name */}
        <div
          ref={textRef}
          className="mb-4 text-sm font-light tracking-[0.45em] uppercase text-center font-jost"
          style={{ opacity: 0 }}
        >
          Rinku Design Studio
        </div>

        {/* Thin Gold horizontal line */}
        <div className="relative w-[180px] h-[1px] mb-4 overflow-hidden">
          <div
            ref={lineRef}
            className="w-full h-full bg-[#C9A84C]"
            style={{ transform: 'scaleX(0)' }}
          />
        </div>

        {/* Est. 2018 Label */}
        <div
          ref={estRef}
          className="text-[10px] font-normal tracking-[0.25em] uppercase text-[#9A9690] font-jost"
          style={{ opacity: 0 }}
        >
          EST. 2018
        </div>
      </div>
    </div>
  );
}
