import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/heroSection";
import Services from "../components/servicesSection";
import Explanation from "../components/explanationSection";
import CTA from "../components/ctaSection";

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Explanation />
      <Services />
      <CTA />
    </>
  );
};

export default LandingPage;
