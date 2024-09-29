import React, { useRef } from "react";
import "./styles.scss";
import { gsap } from "gsap";

const index = () => {
  const imgRef = useRef(null);

  const handleMouseEnter = () => {
    gsap.to(imgRef.current, {
      scale: 1.1, // Zoom in
      duration: 0.5,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = () => {
    gsap.to(imgRef.current, {
      scale: 1, // Kembali ke ukuran semula
      duration: 0.5,
      ease: "power2.out",
    });
  };

  return (
    <>
      <section className="explanation">
        <div className="textReveal">
          <h1>Explanation of MindEase</h1>
        </div>
        <div className="container">
          <div
            style={{
              overflow: "hidden",
              position: "relative",
              borderRadius: "16px",
              height: "auto",
            }}
          >
            <img
              src="/puzzle.jpg"
              alt="images"
              loading="lazy"
              ref={imgRef}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            />
          </div>
          <p>
            A bridge for those seeking to consult their mental health with
            qualified psychologists and experts. We connect you to professional
            support for a better understanding of your mental well-being.
          </p>
        </div>
      </section>
    </>
  );
};

export default index;
