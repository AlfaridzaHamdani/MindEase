import React from "react";
import "./styles.scss";
import heroImg from "/HeroImage.png";
import Button from "./button";

const index = () => {
  return (
    <>
      <section>
        <div className="leftSide">
          <div className="category">
            <h3>Mindfullness</h3>
            <h3>Meditation</h3>
          </div>

          <div className="heroText">
            <div className="top">
              <div className="rounded"></div>
              <h1>START YOUR JOURNEY</h1>
              <div className="background"></div>
            </div>
            <div className="borderedText">
              <h1>
                TO <span>MENTAL CLARITY</span>
              </h1>
              <div className="background"></div>
            </div>
            <div className="bottom">
              <div className="rounded"></div>
              <h1>AND WELL-BEING</h1>
              <div className="background"></div>
            </div>
          </div>
          <div className="paragraph">
            <p>
              Connecting you with qualified psychologists for better mental
              well-being.
            </p>
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
          <div className="img"></div>
        </div>

        <div className="rightSide">
          <div className="container">
            <div className="text">
              <h3>MindEase</h3>
              <hr />
              <p>Wanna Know More about our website?</p>
            </div>
            <div className="cta">
              <a href="#"></a>
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

export default index;
