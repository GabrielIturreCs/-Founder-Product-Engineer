'use client';

import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation, Variants } from 'framer-motion';

interface RevealProps {
  children: React.ReactNode;
  width?: "fit-content" | "100%";
  delay?: number;
  y?: number;
  staggerChildren?: boolean;
  staggerDelay?: number;
}

export function Reveal({ 
  children, 
  width = "fit-content", 
  delay = 0.2, 
  y = 30,
  staggerChildren = false,
  staggerDelay = 0.1 
}: RevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  const containerVariants: Variants = {
    hidden: { opacity: 0, y: y },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        delay: delay,
        ease: [0.16, 1, 0.3, 1] as any,
        staggerChildren: staggerChildren ? staggerDelay : 0,
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1] as any
      }
    }
  };

  if (staggerChildren) {
    return (
      <BoxWithRef ref={ref} width={width}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={mainControls}
          style={{ width }}
        >
          {React.Children.map(children, (child) => (
            <motion.div variants={itemVariants}>
              {child}
            </motion.div>
          ))}
        </motion.div>
      </BoxWithRef>
    );
  }

  return (
    <div ref={ref} style={{ position: "relative", width, overflow: "visible" }}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={mainControls}
      >
        {children}
      </motion.div>
    </div>
  );
}

// Simple wrapper to forward ref if needed, or just use div
const BoxWithRef = React.forwardRef<HTMLDivElement, { children: React.ReactNode; width: string }>(
  ({ children, width }, ref) => (
    <div ref={ref} style={{ position: "relative", width, overflow: "visible" }}>
      {children}
    </div>
  )
);
BoxWithRef.displayName = "BoxWithRef";
