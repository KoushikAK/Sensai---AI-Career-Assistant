"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Facebook, Twitter, Linkedin, Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative mt-16 flex">
      {/* Animated Gradient Border */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-70 blur-3xl animate-pulse" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative z-10 max-w-7xl mx-auto px-6 py-12 rounded-2xl backdrop-blur-lg border border-white/10 bg-gray-950/70 shadow-[0_0_50px_rgba(99,102,241,0.25)]"
      >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Logo & Tagline */}
          <motion.div whileHover={{ scale: 1.02 }} className="space-y-3">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-2xl font-extrabold bg-gradient-to-r from-indigo-400 to-pink-500 bg-clip-text text-transparent">
                AI Career Coach
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Guiding your career with AI-driven insights, helping you unlock
              your full potential.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div whileHover={{ scale: 1.03 }}>
            <h3 className="text-white text-lg font-semibold mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li>
                <Link href="/" className="hover:text-indigo-400 transition">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-indigo-400 transition"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-indigo-400 transition"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-indigo-400 transition"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Resources */}
          <motion.div whileHover={{ scale: 1.03 }}>
            <h3 className="text-white text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li>
                <Link href="/blog" className="hover:text-indigo-400 transition">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/faqs" className="hover:text-indigo-400 transition">
                  FAQs
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="hover:text-indigo-400 transition"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="hover:text-indigo-400 transition"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div whileHover={{ scale: 1.02 }}>
            <h3 className="text-white text-lg font-semibold mb-4">
              Stay Updated
            </h3>
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
              <Link
                href="https://facebook.com"
                target="_blank"
                className="hover:text-indigo-400 transition"
              >
                <Facebook size={20} />
              </Link>
              <Link
                href="https://twitter.com"
                target="_blank"
                className="hover:text-indigo-400 transition"
              >
                <Twitter size={20} />
              </Link>
              <Link
                href="https://linkedin.com"
                target="_blank"
                className="hover:text-indigo-400 transition"
              >
                <Linkedin size={20} />
              </Link>
              <Link
                href="https://github.com"
                target="_blank"
                className="hover:text-indigo-400 transition"
              >
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
          className="border-t border-gray-800 mt-10 pt-5 flex flex-col md:flex-row items-center justify-between text-sm text-gray-400"
        >
          <p>
            © {new Date().getFullYear()} AI Career Coach. All Rights Reserved.
          </p>
          <p className="mt-3 md:mt-0">
            Crafted with <span className="text-pink-400">♥</span> using{" "}
            <span className="text-indigo-400">Next.js & AI</span>
          </p>
        </motion.div>
      </motion.div>
    </footer>
  );
}
