"use client";
import { motion, useAnimation } from "framer-motion";
import { cn } from "@/lib/utils";

interface JitteryTextProps {
  children?: React.ReactNode;
  duration?: number;
  className?: string;
}

export default function JitterText({
  children,
  duration = 0.6, // Default duration to 0.6
  className,
}: JitteryTextProps) {
  const controls = useAnimation();

  const startAnimation = () => {
    controls.start({
      y: [1.5, 1, -1, 1.5, -1.5, 1, -0.5, 0],
      x: [0, -1, 1.5, -1.5, 1, -1, 0.5, 0],
      rotate: [0.5, -1.5, 1, -1.5, 1, -1, 1, 0],
      transition: {
        repeat: Infinity,
        repeatDelay: 0.5,
        repeatType: "reverse",
        ease: "easeInOut",
        duration: duration,
      },
    });
  };

  const stopAnimation = () => {
    controls.start({
      y: 0,
      x: 0,
      rotate: 0,
      transition: {
        duration: 0.2, // Slight duration to smooth stop
      },
    });
  };

  return (
    <div onMouseEnter={startAnimation} onMouseLeave={stopAnimation}>
      <motion.span className={cn("inline-block", className)} animate={controls}>
        {children}
      </motion.span>
    </div>
  );
}
