import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/heroSection";
import Services from "../components/services";

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Services />
    </>
  );
};

export default LandingPage;
