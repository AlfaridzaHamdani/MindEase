import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import "./styles.scss";

gsap.registerPlugin(ScrollTrigger);

const Index = () => {
  const panels = useRef([]);
  const panelsContainer = useRef();

  const createPanelsRefs = (panel, index) => {
    panels.current[index] = panel;
  };

  useEffect(() => {
    gsap.to(panels.current, {
      xPercenet: -100 * (panels.current.length - 1),
      ease: "none",
      ScrollTrigger: {
        trigger: panelsContainer.current,
        pin: true,
        scrub: 1,
        snap: 1 / (panels.current.length - 1),
        end: () => "+=" + panelsContainer.current.offsetWidth,
      },
    });
  }, []);

  return (
    <section className="storySection">
      <h1 className="heading">Our Story</h1>
      <div className="containerStory">
        <div className="card">
          <button>
            <img className="left" src="/Arrow.svg" alt="" />
          </button>
          <button>
            <img className="right" src="/Arrow.svg" alt="" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Index;
