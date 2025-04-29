'use client';

import AnimatedBackground from './AnimatedBackground';

interface PageLayoutProps {
  children: React.ReactNode;
  className?: string;
}

export default function PageLayout({ children, className = '' }: PageLayoutProps) {
  return (
    <div className="relative min-h-screen">
      <AnimatedBackground />
      <div className={`relative z-10 ${className}`}>
        {children}
      </div>
    </div>
  );
} 