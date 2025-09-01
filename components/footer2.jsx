"use client";

import Link from "next/link";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Facebook, Twitter, Linkedin, Github } from "lucide-react";
import { useEffect } from "react";

export default function Footer() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX / window.innerWidth - 0.5);
      mouseY.set(e.clientY / window.innerHeight - 0.5);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const translateX = useTransform(mouseX, [-0.5, 0.5], ["-20px", "20px"]);
  const translateY = useTransform(mouseY, [-0.5, 0.5], ["-10px", "10px"]);

  return (
    <footer className="relative w-full overflow-hidden bg-gray-950/90 text-gray-300">
      {/* Interactive AI Gradient Wave */}
      <motion.div
        className="absolute -bottom-0 left-0 w-full h-[400px] opacity-70"
        style={{
          x: translateX,
          y: translateY,
          backgroundImage:
            "radial-gradient(circle at 20% 50%, rgba(99,102,241,0.5) 0%, transparent 70%), radial-gradient(circle at 80% 50%, rgba(236,72,153,0.5) 0%, transparent 70%)",
          backgroundSize: "200% 200%",
          filter: "blur(90px)",
        }}
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Footer Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative z-10 px-6 py-20"
      >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 max-w-[90%] mx-auto">

          {/* Logo & Tagline */}
          <motion.div whileHover={{ scale: 1.02 }} className="space-y-3">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-2xl font-extrabold bg-gradient-to-r from-indigo-400 to-pink-500 bg-clip-text text-transparent">
                AI Career Coach
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Guiding your career with AI-driven insights, helping you unlock your full potential.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div whileHover={{ scale: 1.03 }}>
            <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li><Link href="/" className="hover:text-indigo-400 transition">Home</Link></li>
              <li><Link href="/about" className="hover:text-indigo-400 transition">About Us</Link></li>
              <li><Link href="/services" className="hover:text-indigo-400 transition">Services</Link></li>
              <li><Link href="/contact" className="hover:text-indigo-400 transition">Contact</Link></li>
            </ul>
          </motion.div>

          {/* Resources */}
          <motion.div whileHover={{ scale: 1.03 }}>
            <h3 className="text-white text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li><Link href="/blog" className="hover:text-indigo-400 transition">Blog</Link></li>
              <li><Link href="/faqs" className="hover:text-indigo-400 transition">FAQs</Link></li>
              <li><Link href="/careers" className="hover:text-indigo-400 transition">Careers</Link></li>
              <li><Link href="/privacy" className="hover:text-indigo-400 transition">Privacy Policy</Link></li>
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div whileHover={{ scale: 1.02 }}>
            <h3 className="text-white text-lg font-semibold mb-4">Stay Updated</h3>
            <p className="text-sm text-gray-400 mb-3">
              Subscribe to get AI-powered career tips & insights.
            </p>
            <div className="flex items-center gap-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-gray-800/70 border-gray-700 text-gray-200 focus:ring-2 focus:ring-indigo-500"
              />
              <Button className="bg-indigo-600 hover:bg-indigo-700 transition">
                Subscribe
              </Button>
            </div>
            <div className="flex space-x-4 mt-5">
              <Link href="https://facebook.com" target="_blank" className="hover:text-indigo-400 transition">
                <Facebook size={20} />
              </Link>
              <Link href="https://twitter.com" target="_blank" className="hover:text-indigo-400 transition">
                <Twitter size={20} />
              </Link>
              <Link href="https://linkedin.com" target="_blank" className="hover:text-indigo-400 transition">
                <Linkedin size={20} />
              </Link>
              <Link href="https://github.com" target="_blank" className="hover:text-indigo-400 transition">
                <Github size={20} />
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Bottom Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="border-t border-gray-800 mt-16 pt-5 flex flex-col md:flex-row items-center justify-between text-sm text-gray-400 max-w-[90%] mx-auto"
        >
          <p>© {new Date().getFullYear()} AI Career Coach. All Rights Reserved.</p>
          <p className="mt-3 md:mt-0">
            Crafted with <span className="text-pink-400">♥</span> using{" "}
            <span className="text-indigo-400">Next.js & AI</span>
          </p>
        </motion.div>
      </motion.div>
    </footer>
  );
}
