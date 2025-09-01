"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

/* === Magnetic & Interactive Particles === */
export default function AnimatedReactiveParticles() {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    // Generate particles only on client
    const newParticles = Array.from({ length: 15 }, () => ({
      size: Math.random() * 50 + 30, // 30px to 80px
      left: Math.random() * 100,     // percentage
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="absolute inset-0">
      {particles.map((p, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: [0, 1, 0], y: ["0%", "-130%"] }}
          transition={{
            duration: 4,
            delay: i * 0.3,
            repeat: Infinity,
          }}
          className="absolute rounded-full bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 opacity-25 blur-3xl"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.left}%`,
            top: "100%",
          }}
        />
      ))}
    </div>
  );
}
