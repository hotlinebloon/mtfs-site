import { motion, useReducedMotion } from "framer-motion";
import { useMemo } from "react";

function FloatingPaths({ position }: { position: number }) {
  const shouldReduceMotion = useReducedMotion();

  const paths = useMemo(
    () =>
      Array.from({ length: 12 }, (_, index) => ({
        id: index,
        d: `M ${-160 + index * 24 * position} ${40 + index * 18}
            C ${120 + index * 14 * position} ${-80 + index * 12},
              ${380 - index * 12 * position} ${270 - index * 10},
              ${860 - index * 18 * position} ${120 + index * 10}`,
        width: 1.1 + index * 0.08,
        opacity: 0.18 + index * 0.018,
        duration: 26 + index * 1.4,
      })),
    [position],
  );

  return (
    <div className="hero-bubble-paths-layer" aria-hidden="true">
      <svg viewBox="0 0 696 316" fill="none" preserveAspectRatio="none">
        {paths.map((path) => (
          <motion.path
            key={path.id}
            d={path.d}
            stroke="currentColor"
            strokeWidth={path.width}
            strokeOpacity={path.opacity}
            initial={shouldReduceMotion ? false : { pathLength: 0.25 }}
            animate={
              shouldReduceMotion
                ? { pathLength: 1 }
                : {
                    pathLength: [0.25, 1, 0.25],
                    pathOffset: [0, 1, 0],
                  }
            }
            transition={
              shouldReduceMotion
                ? undefined
                : {
                    duration: path.duration,
                    repeat: Infinity,
                    ease: "linear",
                  }
            }
          />
        ))}
      </svg>
    </div>
  );
}

export default function HeroBackgroundPaths() {
  return (
    <div className="hero-bubble-paths" aria-hidden="true">
      <FloatingPaths position={1} />
      <FloatingPaths position={-1} />
    </div>
  );
}