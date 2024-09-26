import React from "react";
import "./styles.scss";

const index = () => {
  return (
    <>
      <section className="aboutSection">
        <h1>About Us</h1>
        <div className="container">
          <div className="left">
            <h2 className="">
              <span>“MindEase Healthcare” </span>Providing <br />{" "}
              <span>The Best Opportunities</span> For Health <br /> & Wellness
              Around The Globe.
            </h2>
            <p className="">
              MindEase Healthcare is an organization dedicated to providing
              top-notch healthcare services. Our mission is to deliver quality
              care by combining the latest technology with a compassionate
              approach. We believe in a holistic approach to health and
              wellness, ensuring that our patients receive the best care
              possible.
            </p>
            <button className="">
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
                src="./HeroImage2.png"
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
