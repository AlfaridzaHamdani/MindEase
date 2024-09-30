import "../components/styles/lifeCoach.scss";
import Footer from "../components/Footer";
import Heading from "../components/heading";
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Bola from "../../public/bolaKusut.jpg";
import Hero from "../../public/HeroImage.jpg";
import User from "../../public/user5.jpg";
const Schedule = ({ day, date, month, booked }) => {
  return (
    <div className={` ${booked == 25 ? `full` : `card`}`}>
      <h3>{day}</h3>
      <h3>
        {date} {month}
      </h3>
      <div className="status">
        <h2>
          <span className={booked < 20 ? `green` : `red`}>{booked}</span>
          /25
        </h2>
        <h3>Booked</h3>
      </div>
    </div>
  );
};

const LifeCoach = () => {
  const schedule = [
    { day: "Monday", date: 30, month: "SEP", booked: 10 },
    { day: "Tuesday", date: 1, month: "OCT", booked: 15 },
    { day: "Wednesday", date: 2, month: "OCT", booked: 20 },
    { day: "Thursday", date: 3, month: "OCT", booked: 18 },
    { day: "Friday", date: 4, month: "OCT", booked: 22 },
    { day: "Saturday", date: 5, month: "OCT", booked: 5 },
    { day: "Sunday", date: 6, month: "OCT", booked: 25 },
  ];

  const maskRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const mask = maskRef.current;
    const content = contentRef.current;

    gsap.set(mask, { xPercent: -50, yPercent: -50 });

    const moveMask = (e) => {
      const bounds = content.getBoundingClientRect();

      if (
        e.clientX >= bounds.left &&
        e.clientX <= bounds.right &&
        e.clientY >= bounds.top &&
        e.clientY <= bounds.bottom
      ) {
        mask.style.display = "block";
        gsap.to(mask, {
          x: e.clientX,
          y: e.clientY,
          duration: 0.3,
          ease: "power2.out",
        });
      } else {
        mask.style.display = "none";
      }
    };

    const handleScroll = () => {
      const bounds = content.getBoundingClientRect();
      const x = window.innerWidth / 2;
      const y = window.innerHeight / 2;

      if (
        x < bounds.left ||
        x > bounds.right ||
        y < bounds.top ||
        y > bounds.bottom
      ) {
        mask.style.display = "none";
      }
    };

    window.addEventListener("mousemove", moveMask);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("mousemove", moveMask);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Heading />
      <section className="bannerSection">
        <div className="left">
          <p>
            Are you feeling stuck and unfulfilled in life? Perhaps your
            challenges are impacting various areas of your well-being. Or worse,
            could they be hindering your potential for success? Connect with a
            Life Coach at MindEase today!
          </p>
        </div>
        <div className="right">
          <h2>Growth</h2>
        </div>
        <div className="heading">
          <h3>Life Coach</h3>
          <h2>YourMind</h2>
        </div>
      </section>

      <section className="buttonSection">
        <button>Book an Appointment Now!</button>
        <p>13.983+ People Have Consulted Here</p>
      </section>

      <section className="explainSection">
        <div className="container">
          <div className="left">
            <h1>What Exactly you do In Physcholog Feature?</h1>
            <p>
              Counseling is a one-on-one consultation with a psychologist to
              address issues that disrupt your daily life or put yourself and
              others at risk.
            </p>
          </div>
          <div className="right">
            <div className="wrapper">
              <h1>3</h1>
              <h1>Signs you need to consult with physchology</h1>
            </div>
            <div className="containerCard">
              <div className="card">
                <p>
                  Harming or endangering oneself (e.g., Feeling low self-esteem,
                  self-harming thoughts, eating disorders)
                </p>
              </div>
              <div className="card">
                <p>
                  Harming or endangering others (e.g., Struggling to control
                  emotions leading to violence against others)
                </p>
              </div>
              <div className="card">
                <p>
                  Disrupting daily life (e.g., Inability to sleep leading to
                  difficulty focusing at work, loss of appetite resulting in
                  physical illness)
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="scheaduleSection">
        <h1 className="heading">Future Appointment</h1>
        <div className="container">
          {schedule.map((item, index) => (
            <Schedule
              key={index}
              day={item.day}
              date={item.date}
              month={item.month}
              booked={item.booked}
            />
          ))}
        </div>
      </section>

      <section className="pricingSection">
        <h1 className="heading">Choose your right plan</h1>

        <div className="container">
          <div className="card">
            <div className="top">
              <div className="level">
                <p>Pro</p>
              </div>
              <p className="desc">
                A bridge for those seeking to consult their mental health with
                qualified psychologists and experts.{" "}
              </p>
            </div>
            <div className="price">
              <h1>
                $8 <h2>/session</h2>
              </h1>
              <hr />
            </div>
            <div className="feature">
              <ul>
                <li>Assesmen Pra-konseling</li>
                <li>Lembar Kerja (Worksheet)</li>
                <li>Tes Kesehatan Mental</li>
                <li>Tes Kepribadian</li>
              </ul>
            </div>
            <div className="cta">
              <hr />
              <button>I want This One!</button>
            </div>
          </div>
          <div className="card">
            <div className="top">
              <div className="level">
                <p>Pro Plus</p>
              </div>
              <p className="desc">
                A bridge for those seeking to consult their mental health with
                qualified psychologists and experts.{" "}
              </p>
            </div>
            <div className="price">
              <h1>
                $12 <h2>/session</h2>
              </h1>
              <hr />
            </div>
            <div className="feature">
              <ul>
                <li>Assesmen Pra-konseling</li>
                <li>Lembar Kerja (Worksheet)</li>
                <li>Tes Kesehatan Mental</li>
                <li>Tes Kepribadian</li>
              </ul>
            </div>
            <div className="cta">
              <hr />
              <button>I want This One!</button>
            </div>
          </div>
          <div className="card proBundling">
            <div className="top">
              <div className="level">
                <p>Pro Bundling</p>
              </div>
              <p className="desc">
                A bridge for those seeking to consult their mental health with
                qualified psychologists and experts.{" "}
              </p>
            </div>
            <div className="price">
              <h1>
                $59 <h2>/session</h2>
              </h1>
              <hr />
            </div>
            <div className="feature">
              <ul>
                <li>Assesmen Pra-konseling</li>
                <li>Lembar Kerja (Worksheet)</li>
                <li>Tes Kesehatan Mental</li>
                <li>Tes Kepribadian</li>
              </ul>
            </div>
            <div className="cta">
              <hr />
              <button>I want This One!</button>
            </div>
          </div>
        </div>
      </section>

      <section className="stepsSection">
        <h1 className="heading">3 Step’s To Consult</h1>
        <div className="container">
          <div className="top">
            <div className="img">
              <img src={User} alt="image" className="img-inside" />
            </div>
            <div className="card">
              <h1>Choose Product</h1>
              <p>
                Wonder twenty hunted and put income set desire expect. Am
                cottage calling.
              </p>
            </div>
            <div className="img">
              <img src={Hero} alt="image" className="img-inside" />
            </div>
            <div className="card">
              <h1>Choose Your Session</h1>
              <p>
                Conveying or northward offending admitting perfectly my. Colonel
                gravit and moonlight.
              </p>
            </div>
            <div className="img">
              <img src={Bola} alt="image" className="img-inside" />
            </div>
            <div className="card">
              <h1>Start Consult</h1>
              <p>
                Moderate children at of outweigh it. Unsatiable it considered
                invitation he travelling insensible.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div ref={maskRef} className="mask-cursor"></div>

      <section className="ctaSectionAppoinment content">
        <div className="container" ref={contentRef}>
          <h1>
            Got a problem? Don’t keep it to yourself. Reach out to a
            psychologist at MindEase for help.
          </h1>
          <Link to={"/appointment/psychology/form"}>
            Book An Appointment Now!
          </Link>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default LifeCoach;
