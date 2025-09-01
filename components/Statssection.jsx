"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import clsx from "clsx";
import AnimatedReactiveParticles from "./AnimatedReactiveParticles";

const stats = [
  { value: 50, suffix: "+", label: "Industries Covered" },
  { value: 1000, suffix: "+", label: "Interview Questions" },
  { value: 95, suffix: "%", label: "Success Rate" },
  { value: 24, suffix: "/7", label: "AI Support" },
];

const StatsSection = () => {
  const [inView, setInView] = useState(false);
  const ref = useRef(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Track which card is hovered
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) setInView(true);
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <section
      ref={ref}
      onMouseMove={(e) => {
        mouseX.set(e.clientX);
        mouseY.set(e.clientY);
      }}
      className="relative w-full py-28 md:py-36 bg-gradient-to-b from-muted/20 via-muted/40 to-muted/20 overflow-hidden"
    >
      {/* Liquid background */}
      <LiquidWaveBackground />

      {/* Interactive magnetic particles */}
      <AnimatedReactiveParticles
        mouseX={mouseX}
        mouseY={mouseY}
        hoveredCard={hoveredCard}
      />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto text-center">
          {stats.map((stat, index) => (
            <MagneticCard
              key={index}
              index={index}
              mouseX={mouseX}
              mouseY={mouseY}
              inView={inView}
              setHoveredCard={setHoveredCard}
            >
              <AnimatedRollingCounter
                target={stat.value}
                inView={inView}
                suffix={stat.suffix}
                fast={index === 1}
              />
              <p className="mt-3 text-muted-foreground text-sm sm:text-base md:text-lg tracking-wide font-medium">
                {stat.label}
              </p>
            </MagneticCard>
          ))}
        </div>
      </div>
    </section>
  );
};

/* === Magnetic Hover Card === */
const MagneticCard = ({ children, mouseX, mouseY, index, inView, setHoveredCard }) => {
  const cardRef = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-50, 50], [10, -10]);
  const rotateY = useTransform(x, [-50, 50], [-10, 10]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      const cardX = e.clientX - rect.left - rect.width / 2;
      const cardY = e.clientY - rect.top - rect.height / 2;
      x.set(cardX / 10);
      y.set(cardY / 10);
    };

    if (typeof window !== "undefined") {
      window.addEventListener("mousemove", handleMouseMove);
      return () => window.removeEventListener("mousemove", handleMouseMove);
    }
  }, [x, y]);

  return (
    <motion.div suppressHydrationWarning
      ref={cardRef}
      onMouseEnter={() => setHoveredCard(cardRef)}
      onMouseLeave={() => setHoveredCard(null)}
      className={clsx(
        "relative flex flex-col items-center justify-center p-6 sm:p-8 rounded-2xl shadow-xl border backdrop-blur-xl bg-white/5 border-white/10",
        "hover:shadow-purple-500/40 transition-all duration-500 ease-out"
      )}
      style={{ rotateX, rotateY }}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.25 }}
    >
      {children}
    </motion.div>
  );
};

/* === Rolling Counter Animation === */
const AnimatedRollingCounter = ({ target, inView, suffix, fast }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;

    let start = 0;
    const duration = fast ? 800 : 1800;
    const increment = target / (duration / 16);

    const animateCount = () => {
      start += increment;
      if (start < target) {
        setCount(Math.ceil(start));
        requestAnimationFrame(animateCount);
      } else {
        setCount(target);
      }
    };

    animateCount();
  }, [inView, target, fast]);

  return (
    <motion.h3
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="text-4xl sm:text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 bg-clip-text text-transparent"
    >
      {count}
      {suffix}
    </motion.h3>
  );
};

/* === Liquid Wave Background === */
const LiquidWaveBackground = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
      <motion.div suppressHydrationWarning
        className="absolute w-[140%] h-[200%] -left-1/5 -top-1/3 rounded-full bg-gradient-to-r from-purple-500/30 via-pink-400/20 to-cyan-400/30 blur-[120px]"
        animate={{
          x: ["0%", "10%", "0%"],
          y: ["0%", "10%", "0%"],
        }}
        transition={{
          repeat: Infinity,
          duration: 12,
          ease: "easeInOut",
        }}
      />
    </div>
  );
};


export default StatsSection;
