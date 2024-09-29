import { gsap } from "gsap";
import { useEffect, useRef, useState } from "react";
import "./styles.scss";

const Index = () => {
  const panels = useRef([]);
  const panelsContainer = useRef();
  const [currentPanel, setCurrentPanel] = useState(0);

  const createPanelsRefs = (panel, index) => {
    panels.current[index] = panel;
  };

  // Function to navigate panels
  const goToPanel = (index) => {
    if (index >= 0 && index < panels.current.length) {
      setCurrentPanel(index); // Update the state for the current panel
      gsap.to(panels.current, {
        xPercent: -100 * index, // Animate each panel by -100% of its width per index
        duration: 0.75,
        ease: "power1.inOut",
      });
    }
  };

  // Handle Next button click
  const handleNext = () => {
    if (currentPanel < panels.current.length - 1) {
      goToPanel(currentPanel + 1);
    }
  };

  // Handle Previous button click
  const handlePrevious = () => {
    if (currentPanel > 0) {
      goToPanel(currentPanel - 1);
    }
  };

  useEffect(() => {
    // Initial GSAP animation for scroll-triggered panel navigation (if needed)
    gsap.to(panels.current, {
      xPercent: -100 * (panels.current.length - 1),
      ease: "none",
    });
  }, []);

  return (
    <section className="storySection">
      <h1 className="heading">Our Story</h1>
      <div className="containerStory" ref={panelsContainer}>
        <div className="panel" ref={(el) => createPanelsRefs(el, 0)}>
          <div className="card">
            <button className="left-button" onClick={handlePrevious}>
              <img className="left" src="/Arrow.svg" alt="Previous" />
            </button>
            <p>Panel 1: Our beginning...</p>
            <button className="right-button" onClick={handleNext}>
              <img className="right" src="/Arrow.svg" alt="Next" />
            </button>
          </div>
        </div>
        <div className="panel" ref={(el) => createPanelsRefs(el, 1)}>
          <div className="card">
            <button className="left-button" onClick={handlePrevious}>
              <img className="left" src="/Arrow.svg" alt="Previous" />
            </button>
            <p>Panel 2: Our Growth...</p>
            <button className="right-button" onClick={handleNext}>
              <img className="right" src="/Arrow.svg" alt="Next" />
            </button>
          </div>
        </div>
        <div className="panel" ref={(el) => createPanelsRefs(el, 2)}>
          <div className="card">
            <button className="left-button" onClick={handlePrevious}>
              <img className="left" src="/Arrow.svg" alt="Previous" />
            </button>
            <p>Panel 3: Our Future...</p>
            <button className="right-button" onClick={handleNext}>
              <img className="right" src="/Arrow.svg" alt="Next" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Index;
