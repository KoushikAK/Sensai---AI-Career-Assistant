"use client";
import { motion } from "framer-motion";
import { howItWorks } from "@/data/howItWorks";
import React from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

export default function HowItWorks() {
  return (
    <section className="w-full py-16 md:py-24 bg-gradient-to-b ">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-4xl font-extrabold mb-4 bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
            How It Works
          </h2>
          <p className="text-muted-foreground text-lg">
            Four simple steps to accelerate your career growth
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {howItWorks.map((item, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="flex flex-col items-center text-center space-y-4 p-6 rounded-2xl bg-white/5 backdrop-blur-md shadow-md transition-all duration-300 hover:shadow-xl cursor-pointer group"
            >
              {/* Icon with hover color change */}
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center shadow-inner transition-all duration-300 group-hover:bg-primary/80">
                {React.cloneElement(item.icon, {
                  className:
                    "w-8 h-8 text-primary group-hover:text-white transition-colors duration-300",
                })}
              </div>

              {/* Title */}
              <h3 className="font-semibold text-xl">{item.title}</h3>

              {/* Description */}
              <p className="text-muted-foreground text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
