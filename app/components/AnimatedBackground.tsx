'use client';

import { useEffect, useState, useCallback } from 'react';

const colors = {
  background: '#fbf7f5',
  text: {
    primary: '#2c2a28',
    secondary: '#ccc3ba'
  },
  accent: '#672421',
};

export default function AnimatedBackground() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    setMousePosition({
      x: (e.clientX / window.innerWidth),
      y: (e.clientY / window.innerHeight)
    });
  }, []);

  const handleScroll = useCallback(() => {
    setScrollPosition(window.scrollY);
  }, []);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleMouseMove, handleScroll]);

  return (
    <>
      {/* Base light background */}
      <div className="fixed inset-0 bg-[#fbf7f5]" />
      
      {/* Subtle gradient overlay */}
      <div 
        className="fixed inset-0 opacity-10 transition-transform duration-300 ease-out"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, #672421 0%, transparent 70%)`
        }}
      />

      {/* Decorative elements */}
      <div className="fixed inset-0 overflow-hidden">
        {/* Subtle accent lines */}
        {[...Array(3)].map((_, i) => (
          <div
            key={`line-${i}`}
            className="absolute w-full h-[1px]"
            style={{
              background: `linear-gradient(90deg, transparent 0%, #67242110 20%, #67242120 50%, #67242110 80%, transparent 100%)`,
              top: `${20 + i * 30}%`,
              transform: `translateY(${scrollPosition * (i % 2 === 0 ? 0.05 : -0.05)}px)`,
              opacity: 0.1
            }}
          />
        ))}

        {/* Floating dots */}
        {[...Array(20)].map((_, i) => (
          <div
            key={`dot-${i}`}
            className="absolute rounded-full"
            style={{
              width: `${Math.random() * 2 + 1}px`,
              height: `${Math.random() * 2 + 1}px`,
              backgroundColor: '#672421',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: 0.05,
              transform: `translateY(${scrollPosition * (i % 2 === 0 ? 0.1 : -0.1)}px)`
            }}
          />
        ))}
      </div>

      {/* Very subtle vignette */}
      <div 
        className="fixed inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(circle at 50% 50%, transparent 0%, #fbf7f520 70%, #fbf7f540 100%)`
        }}
      />
    </>
  );
} 