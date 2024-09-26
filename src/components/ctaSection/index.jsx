import React from "react";
import "./styles.scss";

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
          <h3>Are you ready?</h3>
          <h1>To improving your mental well-being</h1>
          <p>
            Join Thousands of our User who already using Mind Ease to Improve
            their mental well-being
          </p>
          <div className="buttonContainer">
            <button className="consult">Consult Now</button>
            <button className="talk">Lets Talk</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default index;
