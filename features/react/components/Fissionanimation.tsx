'use client';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const GEN_ANGLES: number[][] = [
  [0],
  [0, 180],
  [-45, 45, 135, 225],
  [-67.5, -22.5, 22.5, 67.5, 112.5, 157.5, 202.5, 247.5],
  [
    -78.75, -56.25, -33.75, -11.25,
    11.25,  33.75,  56.25,  78.75,
    101.25, 123.75, 146.25, 168.75,
    191.25, 213.75, 236.25, 258.75,
  ],
];

const RADIUS_RATIOS = [0, 0.33, 0.58, 0.78, 0.93];

const toRad = (deg: number) => (deg * Math.PI) / 180;

interface Particle {
  id: string;
  x: number;
  y: number;
  angleDeg: number;
  pw: number;
  ph: number;
  isNucleus: boolean;
}

function buildParticles(gen: number, size: number): Particle[] {
  const half = size / 2;
  const r = RADIUS_RATIOS[gen] * half;
  const isNucleus = gen === 0;
  const pw = isNucleus ? size * 0.09 : size * 0.105;
  const ph = isNucleus ? size * 0.09 : size * 0.042;

  return GEN_ANGLES[gen].map((angleDeg, i) => ({
    id: `g${gen}-${i}`,
    x:  Math.cos(toRad(angleDeg)) * r,
    y:  Math.sin(toRad(angleDeg)) * r,
    angleDeg,
    pw,
    ph,
    isNucleus,
  }));
}


export interface FissionAnimationProps {
  color?: string;
  speed?: 'slow' | 'fast';
  size?: number;
  className?: string;
}

export function FissionAnimation({
  color = '#22d3ee',
  speed = 'slow',
  size = 200,
  className = '',
}: FissionAnimationProps) {
  const half = size / 2;

  const holdMs = speed === 'fast' ? 500  : 2080;
  const transSec = speed === 'fast' ? 0.21 : 1.6;
  const stagger = speed === 'fast' ? 0.014: 0.001;

  const [gen, setGen] = useState(0);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    let t: ReturnType<typeof setTimeout>;

    if (fading) {
      t = setTimeout(() => {
        setFading(false);
        setGen(0);
      }, (transSec + 0.3) * 1000);
    } else if (gen < GEN_ANGLES.length - 1) {
      t = setTimeout(() => setGen(g => g + 1), holdMs);
    } else {
      t = setTimeout(() => setFading(true), holdMs);
    }

    return () => clearTimeout(t);
  }, [gen, fading, holdMs, transSec]);

  const particles: Particle[] = fading ? [] : buildParticles(gen, size);

  return (
    <div
      aria-hidden="true"
      className={`relative select-none ${className}`}
      style={{ width: size, height: size }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: `radial-gradient(circle, ${color}1a 0%, transparent 70%)`,
          pointerEvents: 'none',
          borderRadius: '50%',
        }}
      />

      <AnimatePresence>
        {!fading && gen > 0 && (
          <motion.div
            key={`flash-${gen}`}
            initial={{ scale: 0.3, opacity: 0.7 }}
            animate={{ scale: 2.2, opacity: 0 }}
            transition={{ duration: transSec * 0.9, ease: 'easeOut' }}
            style={{
              position: 'absolute',
              left: half - size * 0.09,
              top: half - size * 0.09,
              width: size * 0.18,
              height: size * 0.18,
              borderRadius: '50%',
              background:   color,
              pointerEvents: 'none',
            }}
          />
        )}
      </AnimatePresence>

      {/* particles */}
      <AnimatePresence mode="sync">
        {particles.map((p, idx) => (
          <motion.div
            key={p.id}
            initial={{
              x: 0,
              y: 0,
              rotate:  p.isNucleus ? 45 : p.angleDeg,
              scale: 0,
              opacity: 0,
            }}
            animate={{
              x: p.x,
              y: p.y,
              rotate: p.isNucleus ? 45 : p.angleDeg,
              scale: 1,
              opacity: 1,
            }}
            exit={{
              scale: 0,
              opacity: 0,
              transition: { duration: transSec * 0.55, ease: 'easeIn' },
            }}
            transition={{
              type: 'spring',
              duration: transSec,
              delay: idx * stagger,
              bounce: 0.28,
            }}
            style={{
              position: 'absolute',
              left: half - p.pw / 2,
              top: half - p.ph / 2,
              width: p.pw,
              height: p.ph,
              borderRadius: p.isNucleus ? '18%' : '50%',
              background: color,
              boxShadow: [
                `0 0 ${size * 0.028}px ${color}`,
                `0 0 ${size * 0.06}px  ${color}66`,
                `0 0 ${size * 0.11}px  ${color}33`,
              ].join(', '),
              pointerEvents: 'none',
            }}
          />
        ))}
      </AnimatePresence>
    </div>
  );
}