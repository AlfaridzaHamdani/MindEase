import React from "react";
import "./styles.scss";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const index = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray(".h1, .h2").forEach((text) => {
      gsap.fromTo(
        text,
        { y: 64, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          scrollTrigger: {
            trigger: text,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
          duration: 0.8,
          delay: 0.5,
        }
      );
    });
  }, []);

  return (
    <>
      <section className="aboutSection">
        <h1>About Us</h1>
        <div className="container">
          <div className="left">
            <div className="textReveal">
              <h2 className="h2">
                <span>“MindEase Healthcare” </span>Providing
              </h2>
            </div>

            <div className="textReveal">
              <h2 className="h2 second">
                <span>The Best Opportunities</span> For Health
              </h2>
            </div>
            <div className="textReveal">
              <h2 className="h2">& Wellness Around The Globe.</h2>
            </div>
            <p className="">
              MindEase Healthcare is an organization dedicated to providing
              top-notch healthcare services. Our mission is to deliver quality
              care by combining the latest technology with a compassionate
              approach. We believe in a holistic approach to health and
              wellness, ensuring that our patients receive the best care
              possible.
            </p>
            <button className="btn">
              Join Us <img src="/Arrow.svg" alt="" />
            </button>
          </div>
          <div className="right">
            <div className="wrapper">
              <div></div>
              <img
                src="./HeroImage.jpg"
                alt="Modern healthcare facility"
                className="firstImg"
              />
              <img
                src="./HeroImage2.jpg"
                alt="Healthcare professionals discussing"
                className="secondImg"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default index;
