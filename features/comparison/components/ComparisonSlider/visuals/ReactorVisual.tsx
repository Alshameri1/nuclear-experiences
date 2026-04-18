'use client';
import { motion } from "framer-motion";

interface Props {
  position: number;
  label: string;
}

export function ReactorVisual({ position, label }: Props) {
  const isActive = position < 50;

  return (
    <motion.div
      className="flex flex-col items-center gap-4"
      animate={{ scale: isActive ? 1.05 : 0.92, opacity: isActive ? 1 : 0.5 }}
      transition={{ duration: 0.4 }}
    >
      <div className="relative" style={{ width: 96, height: 180 }}>
        <svg
          viewBox="0 0 96 180"
          width="96"
          height="180"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Steam puffs (active only) */}
          {isActive && (
            <>
              <motion.ellipse
                cx="48" cy="16" rx="16" ry="7"
                fill="#93C5FD"
                animate={{ opacity: [0, 0.7, 0], y: [0, -14, -28], scaleX: [1, 1.3, 1.6] }}
                transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.ellipse
                cx="60" cy="12" rx="11" ry="5"
                fill="#BFDBFE"
                animate={{ opacity: [0, 0.5, 0], y: [0, -18, -34], scaleX: [1, 1.4, 1.8] }}
                transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              />
              <motion.ellipse
                cx="36" cy="14" rx="10" ry="5"
                fill="#BAE6FD"
                animate={{ opacity: [0, 0.6, 0], y: [0, -12, -26], scaleX: [1, 1.2, 1.5] }}
                transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              />
            </>
          )}

          {/* Tower body — hyperboloid shape */}
          <path
            d="M 14,28 Q 48,38 82,28 L 88,152 Q 48,140 8,152 Z"
            fill={isActive ? "#1E3A5F" : "#1C1C1C"}
            stroke={isActive ? "#3B82F6" : "#4B5563"}
            strokeWidth="1.5"
          />

          {/* Top rim ellipse */}
          <ellipse
            cx="48" cy="28" rx="34" ry="8"
            fill={isActive ? "#1D4ED8" : "#374151"}
            fillOpacity="0.4"
            stroke={isActive ? "#3B82F6" : "#4B5563"}
            strokeWidth="1.5"
          />

          {/* Control rods */}
          {[0, 1, 2].map((i) => (
            <motion.rect
              key={i}
              x={32 + i * 10}
              y={38}
              width={4}
              rx={2}
              fill={isActive ? "#60A5FA" : "#6B7280"}
              fillOpacity={isActive ? 0.9 : 0.5}
              animate={isActive
                ? { height: [12, 20, 12] }
                : { height: 12 }
              }
              transition={{
                duration: 2,
                delay: i * 0.35,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}

          {/* Core glow at base */}
          <motion.ellipse
            cx="48" cy="148" rx="30" ry="8"
            fill="#3B82F6"
            animate={isActive
              ? { opacity: [0.25, 0.7, 0.25], scaleX: [1, 1.2, 1] }
              : { opacity: 0.08 }
            }
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Bottom base */}
          <ellipse
            cx="48" cy="152" rx="40" ry="10"
            fill={isActive ? "#1E3A5F" : "#1C1C1C"}
            stroke={isActive ? "#3B82F6" : "#4B5563"}
            strokeWidth="1.5"
          />
        </svg>
      </div>

      <span
        className={`font-bold transition-colors duration-300 ${
          isActive ? "text-blue-400" : "text-muted-foreground"
        }`}
      >
        {label}
      </span>
    </motion.div>
  );
}