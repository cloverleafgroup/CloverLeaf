
import React, { useMemo } from 'react';

const CloverParticles: React.FC = () => {
  const particles = useMemo(() => {
    return Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 20}s`,
      duration: `${15 + Math.random() * 15}s`,
      size: `${12 + Math.random() * 24}px`,
      opacity: 0.1 + Math.random() * 0.2,
    }));
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none">
      {particles.map((p) => (
        <span
          key={p.id}
          className="material-symbols-outlined absolute bottom-[-50px] text-primary animate-clover-float"
          style={{
            left: p.left,
            fontSize: p.size,
            '--delay': p.delay,
            '--duration': p.duration,
            opacity: p.opacity,
          } as React.CSSProperties}
        >
          spa
        </span>
      ))}
    </div>
  );
};

export default CloverParticles;
