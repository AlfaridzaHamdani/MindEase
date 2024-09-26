import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/heroSection";
import Services from "../components/servicesSection";
import Explanation from "../components/explanationSection";
import Testimonial from "../components/testimonialSection";
import CTA from "../components/ctaSection";
import Footer from "../components/footer";

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Explanation />
      <Services />
      <Testimonial />
      <CTA />
      <Footer />
    </>
  );
};

export default LandingPage;
