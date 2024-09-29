import { gsap } from "gsap";
import { useEffect, useRef, useState } from "react";
import "./styles.scss";

const Index = () => {
  const panels = useRef([]);
  const [currentPanel, setCurrentPanel] = useState(0); // Start from the first panel

  const createPanelsRefs = (panel, index) => {
    panels.current[index] = panel;
  };

  const goToPanel = (index) => {
    setCurrentPanel(index);
    gsap.to(panels.current, {
      xPercent: -100 * index,
      duration: 0.75,
      ease: "power1.inOut",
    });
  };

  const handleNext = () => {
    const nextIndex = (currentPanel + 1) % panels.current.length; // Loop to the first panel after the last one
    goToPanel(nextIndex);
  };

  const handlePrevious = () => {
    const prevIndex =
      (currentPanel - 1 + panels.current.length) % panels.current.length; // Loop to the last panel if at the first
    goToPanel(prevIndex);
  };

  useEffect(() => {
    // Initialize the slider to the first panel
    gsap.set(panels.current, { xPercent: 0 });
  }, []);

  return (
    <section className="storySection">
      <h1 className="heading">Our Story</h1>
      <div className="containerStory">
        {/* Original panels */}
        <div className="panel" ref={(el) => createPanelsRefs(el, 0)}>
          <div className="card">
            <button className="left-button" onClick={handlePrevious}>
              <img className="left" src="/Arrow.svg" alt="Previous" />
            </button>
            <p>Panel 1: Our beginning...</p>
            <p>
              In the midst of a bustling city, an idea emerged as many friends
              struggled with mental health. A desire to help was translated into
              a plan for creating a website that provides information and
              support for mental health. An initial concept for a safe and
              user-friendly website was designed by a small team.
            </p>
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
            <p>
              The website named "MindCare" was developed through the hard work
              of the team. Creativity and technology were combined to create a
              platform that includes discussion forums, helpful articles, and
              online counseling services. Involvement from mental health
              professionals ensured that the content provided was relevant and
              useful.
            </p>
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
            <p>
              After the launch, positive attention from the community was
              received by MindCare. Benefits from the available content and
              support were felt by users. Webinars and workshops on mental
              health were held, building a caring community. The journey of
              MindCare proved that meaningful change in mental health can be
              created through dedication and collaboration.
            </p>
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
