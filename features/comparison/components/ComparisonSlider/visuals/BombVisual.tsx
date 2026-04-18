'use client';
import { motion } from "framer-motion";

interface Props {
  position: number;
  label: string;
}

export function BombVisual({ position, label }: Props) {
  const isActive = position > 50;

  return (
    <motion.div
      className="flex flex-col items-center gap-4"
      animate={{
        scale: isActive ? 1.1 : 0.9,
        opacity: isActive ? 1 : 0.5,
      }}
      transition={{ duration: 0.3 }}
    >
      <div 
        className="relative w-24 h-32 md:w-32 md:h-40 flex items-center justify-center transition-all duration-300"
      >
        <motion.div
          className={`w-16 h-24 md:w-20 md:h-28 rounded-full bg-linear-to-b transition-all duration-300 ${
            isActive
              ? "from-nuclear-orange via-nuclear-red to-nuclear-red-glow shadow-[0_0_30px_var(--nuclear-red)]"
              : "from-muted to-muted-foreground/20"
          }`}
          animate={{
            scale: isActive ? [1, 1.05, 1] : 1,
          }}
          transition={{ duration: 0.5, repeat: Infinity }}
        >
          {isActive && (
            <>
              <motion.div
                className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-yellow-500/50 blur-md"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{ duration: 0.3, repeat: Infinity }}
              />
              <motion.div
                className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-yellow-500"
                animate={{ y: [0, -10, 0], opacity: [1, 0, 1] }}
                transition={{ duration: 0.5, repeat: Infinity }}
              />
            </>
          )}
        </motion.div>
      </div>

      <span
        className={`font-bold transition-colors duration-300 ${
          isActive ? "text-nuclear-red" : "text-muted-foreground"
        }`}
      >
        {label}
      </span>
    </motion.div>
  );
}