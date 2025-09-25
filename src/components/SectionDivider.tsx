"use client";

import { motion } from "framer-motion";

interface SectionDividerProps {
  variant?: "balls" | "dots" | "geometric";
  height?: "sm" | "md" | "lg";
}

export default function SectionDivider({
  variant = "balls",
  height = "md",
}: SectionDividerProps) {
  const getHeight = () => {
    switch (height) {
      case "sm":
        return "h-16";
      case "md":
        return "h-24";
      case "lg":
        return "h-32";
      default:
        return "h-24";
    }
  };

  const renderBalls = () => (
    <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
      {/* Pelotitas flotantes */}
      <motion.div
        className="absolute w-8 h-8 bg-soft-blue/30 rounded-full"
        animate={{
          y: [-10, 10, -10],
          x: [-5, 5, -5],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ left: "10%" }}
      />
      <motion.div
        className="absolute w-6 h-6 bg-art-orange/30 rounded-full"
        animate={{
          y: [10, -10, 10],
          x: [5, -5, 5],
        }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
        style={{ left: "25%" }}
      />
      <motion.div
        className="absolute w-10 h-10 bg-soft-blue/20 rounded-full"
        animate={{
          y: [-8, 8, -8],
          x: [-3, 3, -3],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        style={{ left: "40%" }}
      />
      <motion.div
        className="absolute w-7 h-7 bg-art-orange/25 rounded-full"
        animate={{
          y: [8, -8, 8],
          x: [3, -3, 3],
        }}
        transition={{
          duration: 4.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.5,
        }}
        style={{ left: "55%" }}
      />
      <motion.div
        className="absolute w-5 h-5 bg-soft-blue/35 rounded-full"
        animate={{
          y: [-12, 12, -12],
          x: [-4, 4, -4],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        style={{ left: "70%" }}
      />
      <motion.div
        className="absolute w-9 h-9 bg-art-orange/20 rounded-full"
        animate={{
          y: [12, -12, 12],
          x: [4, -4, 4],
        }}
        transition={{
          duration: 4.2,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2.5,
        }}
        style={{ left: "85%" }}
      />
    </div>
  );

  const renderDots = () => (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="flex space-x-8">
        {[...Array(7)].map((_, i) => (
          <motion.div
            key={i}
            className="w-3 h-3 bg-soft-blue/40 rounded-full"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.4, 0.8, 0.4],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.2,
            }}
          />
        ))}
      </div>
    </div>
  );

  const renderGeometric = () => (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="flex space-x-12">
        <motion.div
          className="w-6 h-6 border-2 border-soft-blue/50 transform rotate-45"
          animate={{
            rotate: [45, 405, 45],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="w-8 h-8 bg-art-orange/20 rounded-full"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
        />
        <motion.div
          className="w-4 h-4 border-2 border-art-orange/60 transform rotate-12"
          animate={{
            rotate: [12, 372, 12],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
        <motion.div
          className="w-7 h-7 bg-soft-blue/25 rounded-full"
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.25, 0.7, 0.25],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5,
          }}
        />
      </div>
    </div>
  );

  return (
    <div
      className={`relative ${getHeight()} bg-gradient-to-r from-soft-blue/10 via-light-sage/5 to-soft-blue/10 overflow-hidden`}
    >
      {variant === "balls" && renderBalls()}
      {variant === "dots" && renderDots()}
      {variant === "geometric" && renderGeometric()}
    </div>
  );
}
