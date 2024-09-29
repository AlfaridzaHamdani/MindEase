import React from "react";
import "./styles.scss";
import { Link } from "react-router-dom";

const index = () => {
  return (
    <>
      <section className="ctaSection">
        <div className="container">
          <div className="element el1"></div>
          <div className="element el2"></div>
          <div className="element el3"></div>
          <div className="element el4"></div>
          <div className="element el5"></div>
          <div className="element el6"></div>
          <div className="textReveal">
            <h3>Are you ready?</h3>
          </div>
          <div className="textReveal">
            <h1>To improving your mental</h1>
          </div>
          <div className="textReveal">
            <h1>well-being</h1>
          </div>
          <p>
            Join Thousands of our User who already using Mind Ease to Improve
            their mental well-being
          </p>
          <div className="buttonContainer">
            <Link to={"/appointment"} className="consult btn">
              Consult Now
            </Link>
            <button className="talk btn">Lets Talk</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default index;
