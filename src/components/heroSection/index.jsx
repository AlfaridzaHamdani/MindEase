import React from "react";
import "./styles.scss";

const index = () => {
  return (
    <section>
      <div className="container">
        <div className="category">
          <h3>Mindfullness</h3>
          <h3>Meditation</h3>
        </div>

        <div className="heroText">
          <div className="top">
            <div className="rounded"></div>
            <h1>WHERE YOUR</h1>
            <div className="background"></div>
          </div>
          <div className="borderedText">
            <h1>MENTAL HEALTH</h1>
            <div className="background"></div>
          </div>
          <div className="bottom">
            <div className="rounded"></div>
            <h1>FLOURISHES</h1>
            <div className="background"></div>
          </div>
        </div>
        <div className="paragraph">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo
            iure nam laboriosam
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

      <div className="heroImg"></div>
    </section>
  );
};

export default index;
