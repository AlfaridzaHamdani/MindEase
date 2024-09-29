import React, { useEffect, lazy, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./styles.scss";
import Arrow from "/ArrowDark.svg";
import Button from "./button";

const RoundedBtn = () => {
  return (
    <a className="roundedBtn">
      <img src={Arrow} alt="arrow" />
    </a>
  );
};

const Index = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray("h1").forEach((text) => {
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
        }
      );
    });
  }, []);

  const text =
    "Connecting you with qualified psychologists for better mental well-being.";

  // Memisahkan teks menjadi per kata
  const words = text.split(" ");

  useEffect(() => {
    // Animasi untuk setiap kata
    words.forEach((word, index) => {
      gsap.fromTo(
        `.word-${index}`,
        { y: 30, opacity: 0 }, // Awal: y = 30, opacity = 0
        {
          y: 0, // Akhir: y = 0
          opacity: 1, // Akhir: opacity = 1
          delay: index * 0.1, // Penundaan untuk setiap kata
          duration: 0.5, // Durasi animasi
        }
      );
    });
  }, [words]);

  return (
    <>
      <section className="heroSection">
        <div className="leftSide">
          <div className="category">
            <h3 className="text">Mindfulness</h3>
            <h3 className="text">Meditation</h3>
          </div>

          <div className="heroText">
            <div className="top">
              <div className="rounded"></div>
              <div className="textReveal">
                <h1 className="text">START YOUR JOURNEY</h1>
              </div>
              <div className="background"></div>
            </div>
            <div className="borderedText">
              <div className="textReveal">
                <h1 className="text">
                  TO
                  <span>MENTAL CLARITY</span>
                </h1>
              </div>
              <div className="background"></div>
            </div>
            <div className="bottom">
              <div className="rounded"></div>
              <div className="textReveal">
                <h1 className="text">AND WELL-BEING</h1>
              </div>
              <div className="background"></div>
            </div>
          </div>
          <div className="paragraph">
            <div className="textReveal">
              <p
                className="text"
                style={{ display: "flex", flexWrap: "wrap", gap: "2px" }}
              >
                {words.slice(0, 5).map((word, index) => (
                  <span key={index} className={`word-${index}`}>
                    {word}&nbsp; {/* Menambahkan spasi setelah setiap kata */}
                  </span>
                ))}
              </p>
            </div>
            <div className="textReveal">
              <p
                className="text"
                style={{ display: "flex", flexWrap: "wrap", gap: "2px" }}
              >
                {words.slice(5).map((word, index) => (
                  <span key={index + 5} className={`word-${index + 5}`}>
                    {word}&nbsp; {/* Menambahkan spasi setelah setiap kata */}
                  </span>
                ))}
              </p>
            </div>
          </div>

          <div className="cta">
            <div className="text">
              <a href="#">Subscribe Now</a>
              <a href="#">Explore</a>
            </div>

            <div className="icons">
              <div></div>
              <div></div>
            </div>
          </div>
        </div>

        <div className="midSide">
          <div className="img" onLoad={lazy}></div>
        </div>

        <div className="rightSide">
          <div className="container">
            <div className="text">
              <h3 className="text">MindEase</h3>
              <hr />
              <p className="text">Wanna Know More about our website?</p>
            </div>
            <div className="cta">
              <RoundedBtn />
            </div>
          </div>
          <div className="img"></div>
        </div>
      </section>

      <div className="button">
        <Button />
      </div>
    </>
  );
};

export default Index;
