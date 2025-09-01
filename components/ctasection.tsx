"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface PremiumCTAProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  link?: string;
}

const PremiumCTA: React.FC<PremiumCTAProps> = ({
  title = "Ready to Accelerate Your Career?",
  subtitle = "Join thousands of professionals who are advancing their careers with AI-powered guidance.",
  buttonText = "Start Your Journey Today",
  link = "/dashboard",
}) => {
  const blob1 = useRef<HTMLDivElement>(null);
  const blob2 = useRef<HTMLDivElement>(null);
  const blob3 = useRef<HTMLDivElement>(null);

  // Mouse parallax effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = e.clientX / innerWidth - 0.5;
      const y = e.clientY / innerHeight - 0.5;

      if (blob1.current) {
        blob1.current.style.transform = `translate(${x * 40}px, ${y * 40}px)`;
      }
      if (blob2.current) {
        blob2.current.style.transform = `translate(${x * -30}px, ${y * 30}px)`;
      }
      if (blob3.current) {
        blob3.current.style.transform = `translate(${x * 20}px, ${y * -20}px)`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="w-full relative overflow-hidden">
      {/* Glowing background blobs */}
      <div className="absolute inset-0 -z-10">
        <div
          ref={blob1}
          className="absolute top-[-30%] left-[-20%] w-[500px] h-[500px] bg-purple-500 rounded-full opacity-40 animate-blob transition-transform duration-500"
        ></div>
        <div
          ref={blob2}
          className="absolute top-[20%] right-[-10%] w-[400px] h-[400px] bg-pink-500 rounded-full opacity-30 animate-blob animation-delay-2000 transition-transform duration-500"
        ></div>
        <div
          ref={blob3}
          className="absolute bottom-[-20%] left-[10%] w-[600px] h-[600px] bg-red-500 rounded-full opacity-25 animate-blob animation-delay-4000 transition-transform duration-500"
        ></div>
      </div>

      <div className="mx-auto py-24 bg-gradient-to-r from-purple-700 via-pink-600 to-red-600 rounded-3xl shadow-2xl transform transition-all hover:scale-105">
        <div className="flex flex-col items-center justify-center space-y-6 text-center max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl relative z-10">
            {title}
          </h2>
          <p className="mx-auto max-w-[650px] text-white/80 md:text-xl relative z-10">
            {subtitle}
          </p>
          <Link href={link} passHref>
            <Button
              size="lg"
              variant="secondary"
              className="h-12 px-6 mt-5 font-semibold text-white bg-white/10 hover:bg-white/20 animate-bounce relative z-10 neon-button"
            >
              {buttonText} <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>

      {/* Blob animation & neon glow styles */}
      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob { animation: blob 10s infinite; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }

        /* Neon text effect */
        .neon-text {
          text-shadow:
            0 0 5px #fff,
            0 0 10px #fff,
            0 0 20px #ff00ff,
            0 0 30px #ff00ff,
            0 0 40px #ff00ff,
            0 0 55px #ff00ff,
            0 0 75px #ff00ff;
        }

        .neon-text-sub {
          text-shadow:
            0 0 3px #fff,
            0 0 6px #fff,
            0 0 10px #ff77ff;
        }

        .neon-button {
          box-shadow:
            0 0 5px #fff,
            0 0 10px #ff00ff,
            0 0 20px #ff00ff;
          transition: box-shadow 0.3s ease, transform 0.3s ease;
        }
        .neon-button:hover {
          box-shadow:
            0 0 10px #fff,
            0 0 20px #ff00ff,
            0 0 40px #ff00ff,
            0 0 60px #ff00ff;
          transform: scale(1.05);
        }
      `}</style>
    </section>
  );
};

export default PremiumCTA;
