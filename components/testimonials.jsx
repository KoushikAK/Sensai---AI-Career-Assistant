"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { testimonial } from "@/data/testimonial";

const Testimonials = () => {
  const controls = useAnimation();
  const slides = [...testimonial, ...testimonial]; // duplicate for seamless loop
  const duration = slides.length * 1; // faster speed (lower = faster)

  useEffect(() => {
    controls.start({
      x: ["0%", "-50%"],
      transition: { repeat: Infinity, duration, ease: "linear" },
    });
  }, [controls, duration]);

  const handleMouseEnter = () => {
    controls.stop();
  };
  const handleMouseLeave = () => {
    controls.start({
      x: ["0%", "-50%"],
      transition: { repeat: Infinity, duration, ease: "linear" },
    });
  };

  return (
    <section className="w-full py-12 md:py-24 bg-muted/50 relative">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          What Our Users Say
        </h2>

        <div className="relative overflow-hidden">
          {/* Gradient overlays */}
          <div className="absolute top-0 left-0 w-16 h-full bg-gradient-to-r from-muted/50 to-transparent pointer-events-none z-10" />
          <div className="absolute top-0 right-0 w-16 h-full bg-gradient-to-l from-muted/50 to-transparent pointer-events-none z-10" />

          <motion.div
            className="flex gap-6"
            animate={controls}
          >
            {slides.map((item, index) => (
              <Card
                key={index}
                className="bg-background flex-shrink-0 w-72 md:w-80 rounded-xl transition-transform duration-300 hover:scale-105 hover:shadow-lg"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <CardContent className="pt-6">
                  <div className="flex flex-col space-y-4">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="relative h-12 w-12 flex-shrink-0">
                        <Image
                          width={48}
                          height={48}
                          src={item.image}
                          alt={item.author}
                          className="rounded-full object-cover border-2 border-primary/20"
                        />
                      </div>
                      <div>
                        <p className="font-semibold">{item.author}</p>
                        <p className="text-sm text-muted-foreground">{item.role}</p>
                        <p className="text-sm text-primary">{item.company}</p>
                      </div>
                    </div>

                    <blockquote className="relative italic text-muted-foreground 
                      before:content-['“'] before:text-3xl before:text-primary before:absolute before:-top-4 before:-left-2
                      after:content-['”'] after:text-3xl after:text-primary after:absolute after:-bottom-4">
                      {item.quote}
                    </blockquote>
                  </div>
                </CardContent>
              </Card>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
