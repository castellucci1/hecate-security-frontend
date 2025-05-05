'use client';

import Image from 'next/image';

export default function Background() {
  return (
    <>
      {/* Background gradient overlay */}
      <div className="fixed inset-0 z-0" style={{
        background: 'radial-gradient(ellipse 80% 60% at 50% 30%, rgba(255,255,255,0.08) 0%, rgba(17,18,22,1) 100%)'
      }} />
      {/* Background illustration */}
      <Image
        src="/assets/illustrations/H%C3%A9cate%20Ilustraciones-33.png"
        alt="Ilustración Hécate"
        className="fixed inset-0 w-full h-full object-cover opacity-20 pointer-events-none z-0"
        style={{mixBlendMode: 'lighten'}}
        width={1920}
        height={1080}
        priority
      />
    </>
  );
} 