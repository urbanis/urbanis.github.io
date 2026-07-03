import { useEffect, useRef, useState } from 'react';
import { useReducedMotion } from './useReducedMotion';

export function useCountUp(
  target: number,
  active: boolean,
  durationMs = 1400,
): number {
  const reduced = useReducedMotion();
  const [value, setValue] = useState(0);
  const frame = useRef<number | null>(null);

  useEffect(() => {
    if (!active || reduced) return;
    let start: number | null = null;
    const tick = (now: number) => {
      if (start === null) start = now;
      const progress = Math.min((now - start) / durationMs, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(target * eased));
      if (progress < 1) {
        frame.current = requestAnimationFrame(tick);
      }
    };
    frame.current = requestAnimationFrame(tick);
    return () => {
      if (frame.current !== null) cancelAnimationFrame(frame.current);
    };
  }, [target, active, durationMs, reduced]);

  return reduced ? target : value;
}
