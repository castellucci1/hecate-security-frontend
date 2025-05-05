'use client';

import Image from 'next/image';
import { useEffect, useRef, useState, useTransition } from 'react';

export default function Loader() {
  const [progress, setProgress] = useState(1); // 1 = blanco
  const direction = useRef(1);
  const [isPending] = useTransition();

  // Animación de loop
  function animateLoop(progress: number, setProgress: (v: number) => void) {
    let frame: number;
    function animate() {
      let pct = progress + direction.current * 0.02;
      if (pct >= 1) {
        pct = 1;
        direction.current = -1;
      } else if (pct <= 0) {
        pct = 0;
        direction.current = 1;
      }
      setProgress(pct);
      frame = requestAnimationFrame(animate);
    }
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }

  useEffect(() => {
    let cancel: (() => void) | undefined;
    if (isPending) {
      cancel = animateLoop(progress, setProgress);
    } else {
      setProgress(1); // blanco
    }
    return () => {
      if (cancel) cancel();
    };
    // eslint-disable-next-line
  }, [isPending]);

  return (
    <div className="fixed bottom-6 left-6 z-50 pointer-events-none select-none">
      <div
        style={{
          filter: `grayscale(${1 - progress}) brightness(${0.7 + 0.3 * progress})`,
          transition: 'filter 0.2s',
          width: 28,
          height: 28,
        }}
      >
        <Image
          src="/assets/loader.png"
          alt="Loader"
          width={28}
          height={28}
          priority
        />
      </div>
    </div>
  );
} 