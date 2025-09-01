import React from "react";
import StatsSection from "@/components/Statssection";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/testimonials";
import FAQSection from "@/components/FAQSection";
import PremiumCTA from "@/components/ctasection";
import FeaturesSection from "@/components/FeaturesSection";
import HeroSection from "@/components/hero";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <HeroSection />

      {/* Features Section */}
      <FeaturesSection />

      {/* Stats Section */}
      <StatsSection />

      {/* How It Works Section */}
      <HowItWorks />

      {/* Testimonials section */}
      <Testimonials />

      {/* FAQ Section */}
      <FAQSection />

      {/* CTA Section */}
      <PremiumCTA />
    </div>
  );
}
