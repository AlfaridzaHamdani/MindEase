import HeroSection from "../components/heroSection";
import Services from "../components/servicesSection";
import Explanation from "../components/explanationSection";
import Testimonial from "../components/testimonialSection";
import CTA from "../components/ctaSection";
import Footer from "../components/Footer";
import Heading from "../components/heading";

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
