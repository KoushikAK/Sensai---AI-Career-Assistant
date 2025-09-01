"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const HeroSection = () => {
  const imageRef = useRef(null);
  const gradientRef = useRef(null);

  // === 3D Tilt for Hero Image ===
  useEffect(() => {
    const imageElement = imageRef.current;

    const handleMouseMoveTilt = (e) => {
      const { left, top, width, height } = imageElement.getBoundingClientRect();
      const x = (e.clientX - left) / width - 0.5;
      const y = (e.clientY - top) / height - 0.5;
      imageElement.style.transform = `rotateY(${x * 15}deg) rotateX(${
        y * -15
      }deg) scale(1.05)`;
    };

    const resetTilt = () => {
      imageElement.style.transform = "rotateY(0deg) rotateX(0deg) scale(1)";
    };

    imageElement.addEventListener("mousemove", handleMouseMoveTilt);
    imageElement.addEventListener("mouseleave", resetTilt);

    return () => {
      imageElement.removeEventListener("mousemove", handleMouseMoveTilt);
      imageElement.removeEventListener("mouseleave", resetTilt);
    };
  }, []);

  // === Smooth Trailing Gradient ===
  useEffect(() => {
    const gradientElement = gradientRef.current;

    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;
    const easing = 0.1; // Lower = smoother and slower movement

    const handleMouseMove = (e) => {
      targetX = e.clientX;
      targetY = e.clientY;
    };

    const animateGradient = () => {
      currentX += (targetX - currentX) * easing;
      currentY += (targetY - currentY) * easing;

      gradientElement.style.left = `${currentX}px`;
      gradientElement.style.top = `${currentY}px`;

      requestAnimationFrame(animateGradient);
    };

    // Set initial styles for consistent glow
    gradientElement.style.width = "400px";
    gradientElement.style.height = "400px";
    gradientElement.style.opacity = "0.35";
    gradientElement.style.filter = "blur(140px)";

    window.addEventListener("mousemove", handleMouseMove);
    animateGradient();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section className="relative w-full min-h-screen flex flex-col justify-center items-center pt-28 md:pt-36 pb-12 overflow-hidden">
      {/* === Smooth Trailing Gradient Glow === */}
      <div
        ref={gradientRef}
        className="pointer-events-none fixed z-50 w-[400px] h-[400px] rounded-full bg-gradient-to-r from-purple-500 via-cyan-400 to-pink-500 blur-[150px] opacity-40 -translate-x-1/2 -translate-y-1/2"
      />

      {/* Background Neon Blobs */}
      <div className="absolute top-[-150px] left-[-120px] w-[500px] h-[500px] bg-purple-700 rounded-full blur-[200px] opacity-40 animate-pulse" />
      <div className="absolute bottom-[-150px] right-[-120px] w-[500px] h-[500px] bg-cyan-500 rounded-full blur-[220px] opacity-40 animate-pulse" />

      <div className="relative z-10 max-w-6xl px-6 text-center space-y-6">
        {/* Animated Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold tracking-tight bg-gradient-to-r from-purple-400 via-cyan-400 to-pink-500 bg-clip-text text-transparent animate-gradient"
        >
          Unlock Your <span className="text-white drop-shadow-lg">Future</span>
          <br />
          With AI-Powered Career Coaching
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mx-auto max-w-[650px] text-gray-300 text-lg md:text-xl leading-relaxed"
        >
          Build a smarter career with AI-driven tools, real-time interview prep,
          and insights that help you win the job you deserve.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="flex justify-center gap-5 pt-6"
        >
          <Link href="/dashboard">
            <Button
              size="lg"
              className="px-8 py-6 text-lg font-semibold rounded-xl bg-gradient-to-r from-purple-600 to-cyan-500 shadow-[0_0_25px_rgba(59,130,246,0.4)] backdrop-blur-lg hover:scale-[1.05] transition-all duration-300"
            >
              Get Started
            </Button>
          </Link>
          <Link href="https://www.youtube.com/roadsidecoder" target="_blank">
            <Button
              size="lg"
              variant="outline"
              className="px-8 py-6 text-lg rounded-xl border-2 border-cyan-400 text-cyan-300 hover:bg-cyan-500/10 hover:shadow-[0_0_15px_rgba(34,211,238,0.6)] transition-all duration-300"
            >
              Watch Demo
            </Button>
          </Link>
        </motion.div>

        {/* Hero Image with 3D Tilt */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-12 relative perspective-1000"
        >
          <div
            ref={imageRef}
            className="rounded-2xl shadow-[0_0_35px_rgba(147,51,234,0.5)] border border-gray-700 mx-auto transition-transform duration-300"
          >
            <Image
              src="/banner.jpeg"
              width={1280}
              height={720}
              alt="Dashboard Preview"
              className="rounded-2xl"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
