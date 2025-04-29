'use client';

import { useEffect, useRef, useState } from 'react';

export default function FadeIn({ 
  children, 
  delay = 0,
  direction = 'up'
}: { 
  children: React.ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
}) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  const getTransform = () => {
    switch (direction) {
      case 'up': return 'translateY(20px)';
      case 'down': return 'translateY(-20px)';
      case 'left': return 'translateX(20px)';
      case 'right': return 'translateX(-20px)';
      default: return 'translateY(20px)';
    }
  };

  return (
    <div
      ref={ref}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'none' : getTransform(),
        transition: `all 0.6s ease-out ${delay}s`,
      }}
    >
      {children}
    </div>
  );
} 