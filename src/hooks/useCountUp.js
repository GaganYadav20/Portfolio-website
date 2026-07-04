import { useState, useEffect, useRef } from 'react';

export function useCountUp(target, duration = 2000, startOnView = false) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(!startOnView);
  const ref = useRef(null);

  const start = () => setHasStarted(true);

  useEffect(() => {
    if (!hasStarted || target === 0) {
      if (target === 0) setCount(0);
      return;
    }

    const startTime = performance.now();

    function step(now) {
      const progress = Math.min((now - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    }

    requestAnimationFrame(step);
  }, [hasStarted, target, duration]);

  return { count, ref, start };
}
