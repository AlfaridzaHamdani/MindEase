import React, { useEffect, useState } from "react";
import HeroSection from "../components/heroSection";
import Services from "../components/servicesSection";
import Explanation from "../components/explanationSection";
import Testimonial from "../components/testimonialSection";
import CTA from "../components/ctaSection";
import Footer from "../components/Footer";
import Heading from "../components/heading";
import PreLoad from "../components/preLoad";
import { useGSAP } from "@gsap/react";

const LandingPage = () => {
  return (
    <>
      <div className="page">
        <Heading />
        <HeroSection />
        <Explanation />
        <Services />
        <Testimonial />
        <CTA />
        <Footer />
      </div>
    </>
  );
};

export default LandingPage;
