import { useEffect, useState } from 'react';

export function useCountUp(target: number, duration: number = 2000, trigger: boolean = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!trigger) {
      setCount(0);
      return;
    }

    let startTimestamp: number | null = null;
    let animationFrameId: number;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = timestamp - startTimestamp;
      const progressRatio = Math.min(progress / duration, 1);
      
      // Easing out quadratic
      const easeProgress = progressRatio * (2 - progressRatio);
      
      setCount(Math.floor(easeProgress * target));

      if (progress < duration) {
        animationFrameId = requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    };

    animationFrameId = requestAnimationFrame(step);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [target, duration, trigger]);

  return count;
}
