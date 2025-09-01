"use client";

import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { faqs } from "@/data/faqs";
import { motion } from "framer-motion";
import { useState } from "react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="w-full py-12 md:py-24 bg-gray-50 dark:bg-gray-900 transition-colors duration-500">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl"> {/* Wider container */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            Find answers to common questions about our platform
          </p>
        </div>

        <div className="max-w-full mx-auto space-y-4">
          <Accordion type="single" collapsible className="w-full" value={openIndex}>
            {faqs.map((faq, index) => {
              const isOpen = openIndex === `item-${index}`;
              return (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  onClick={() => setOpenIndex(isOpen ? null : `item-${index}`)}
                  className={`rounded-xl transition-all duration-300
                    ${isOpen
                      ? "bg-gradient-to-r from-blue-100 to-blue-200 dark:from-blue-900 dark:to-blue-800 shadow-xl ring-2 ring-blue-400 dark:ring-blue-500"
                      : "bg-white dark:bg-gray-800 hover:shadow-md"}
                  `}
                >
                  <AccordionTrigger className="flex justify-between items-center px-6 py-4 font-medium text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
                    {faq.question}
                    <motion.span
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                    </motion.span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 py-4 text-gray-600 dark:text-gray-300">
                    <motion.div
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -5 }}
                      transition={{ duration: 0.3 }}
                    >
                      {faq.answer}
                    </motion.div>
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
