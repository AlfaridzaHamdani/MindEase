import "../components/styles/appointment.scss";
import Footer from "../components/Footer";
import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import Heading from "../components/heading";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Consultant = ({ name }) => {
  return (
    <div className="consultant">
      <img src={`./${name}.jpg`} alt={name} className={name} loading="lazy" />
    </div>
  );
};

const Question = ({ question, answer, isActive, onClick }) => {
  return (
    <div className="question">
      <div className="textReveal">
        <h1 onClick={onClick} style={{ cursor: "pointer" }}>
          {question}
        </h1>
      </div>
      {isActive && <p>{answer}</p>}
    </div>
  );
};

const Counter = ({ targetValue }) => {
  const counterRef = useRef(null);
  const startValue = 0;

  useEffect(() => {
    const duration = 2;

    gsap.to(
      { value: startValue },
      {
        value: targetValue,
        duration: duration,
        onUpdate: function () {
          counterRef.current.innerText = `${Math.floor(
            this.targets()[0].value
          )}+`;
        },
        ease: "power1.out",
      }
    );
  }, [targetValue]);

  return (
    <h3 className="h3" ref={counterRef}>
      {startValue}+
    </h3>
  );
};

const Appointment = () => {
  const consultants = [
    { id: 1, name: "user1" },
    { id: 2, name: "user2" },
    { id: 3, name: "user3" },
    { id: 4, name: "user4" },
  ];
  const faqs = [
    {
      question:
        "What is the purpose of this mental health consultation service?",
      answer:
        "Our service provides access to professional mental health counselors who offer personalized guidance and support for a variety of mental health concerns.",
    },
    {
      question: "How do I book a consultation with a mental health expert?",
      answer:
        "You can book a consultation by selecting a counselor from our platform, choosing a date and time, and confirming the appointment through our booking system.",
    },
    {
      question: "Are the consultations confidential?",
      answer:
        "Yes, all consultations are strictly confidential to ensure your privacy and comfort.",
    },
    {
      question: "What types of mental health issues can be addressed?",
      answer:
        "Our experts can help with anxiety, depression, stress management, relationship issues, and more.",
    },
    {
      question: "How much does a consultation cost?",
      answer:
        "The cost varies depending on the counselor and session length, and all fees are transparently listed before booking.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray("h1, .h3, .p").forEach((text) => {
      gsap.fromTo(
        text,
        { y: 64, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          scrollTrigger: {
            trigger: text,
            start: "top bottom",
            toggleActions: "play none none reverse",
          },
          duration: 0.8,
          delay: 0.3,
        }
      );
    });

    gsap.fromTo(
      ".one",
      { rotate: "0deg" },
      { rotate: "-5deg", duration: 1, delay: 0.5 }
    );
    gsap.fromTo(
      ".second",
      { rotate: "0deg" },
      { rotate: "-10deg", duration: 1, delay: 0.5 }
    );
    gsap.fromTo(
      ".third",
      { rotate: "0deg" },
      { rotate: "-15deg", duration: 1, delay: 0.5 }
    );
  }, []);

  const counterRef = useRef(null);

  useEffect(() => {
    const targetValue = 30000;
    let startValue = 0;
    const duration = 2;

    gsap.to(
      { value: startValue },
      {
        value: targetValue,
        duration: duration,
        onUpdate: function () {
          counterRef.current.innerText = `${Math.floor(
            this.targets()[0].value
          )}+`;
        },
        ease: "power1.out",
      }
    );
  }, []);

  return (
    <>
      <Heading />
      <section className="appointmentSection">
        <div className="heading">
          <div className="textReveal">
            <h1>
              Quick <p></p> Easy Appointments
            </h1>
          </div>
          <div className="textReveal bot">
            <h1>
              for Better<span> Health!</span>
            </h1>
          </div>
        </div>

        <div className="card">
          <div className="stat helped">
            <div className="wrapper">
              <img src="./Arrow.svg" alt="arrow" />
              <div className="textReveal">
                <Counter targetValue={30000} />
              </div>
            </div>
            <div className="textReveal">
              <p className="p">People helped</p>
            </div>
          </div>

          <div className="container">
            <img src="./user1.jpg" alt="" />
            <div className="one"></div>
            <div className="second"></div>
            <div className="third"></div>
          </div>
          <div className="stat helper">
            <div className="wrapper">
              <img src="./Arrow.svg" alt="arrow" />
              <div className="textReveal">
                <Counter targetValue={100} />
              </div>
            </div>
            <div className="textReveal">
              <div className="textReveal">
                <p className="p">Consultant team ready</p>
              </div>
              <div className="textReveal">
                <p className="p">to help</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="optionSection">
        <div className="container">
          <Link to={"/appointment/psychology"} className="card cLeft">
            <div className="left">
              <div className="textReveal">
                <h1>Psychology</h1>
              </div>
              <div className="container">
                <ul>
                  <li>S2 Physchologist Consult</li>
                  <li>Stress, Trauma, Anxiety, Bipolar, Etc.</li>
                  <li>Get a Diagnosa</li>
                </ul>
              </div>
            </div>
            <div className="right">
              <button>
                <img src="./Arrow.svg" alt="" />
              </button>
            </div>
          </Link>
          <Link to={"/appointment/life-coach"} className="card cRight">
            <div className="left">
              <div className="textReveal">
                <h1>Life Coach</h1>
              </div>
              <div className="container">
                <ul>
                  <li>S2 Physchologist Consult</li>
                  <li>Stress, Trauma, Anxiety, Bipolar, Etc.</li>
                  <li>Get a Diagnosa</li>
                </ul>
              </div>
            </div>
            <div className="right">
              <button>
                <img src="./Arrow.svg" alt="" />
              </button>
            </div>
          </Link>
        </div>
      </section>

      <section className="consultantSection">
        <div className="text">
          <div className="textReveal">
            <h1>Consultant you</h1>
          </div>
          <div className="textReveal">
            <h1>can trust</h1>
          </div>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda
            cum nemo atque earum necessitatibus quae quidem, quis, iure mollitia
            deleniti similique veritatis, blanditiis nesciunt saepe eius
            molestiae ipsum? Rem, possimus.
          </p>
        </div>

        <div className="wrapper">
          <div className="row top">
            {consultants.slice(0, 2).map((image) => (
              <Consultant key={image.id} name={image.name} />
            ))}
          </div>
          <div className="row bot">
            {consultants.slice(2, 4).map((image) => (
              <Consultant key={image.id} name={image.name} />
            ))}
          </div>
        </div>
      </section>

      <section className="differencesSection">
        <div className="container">
          <div className="textReveal">
            <h1 className="heading">Differences in Consultation</h1>
          </div>
          <div className="containerCard">
            <div className="card">
              <div className="textReveal">
                <h1>Counseling</h1>
              </div>
              <div className="wrapper">
                <p>
                  Intended for users with CLINICAL problems (eg: trauma,
                  depression, anxiety, bipolar, sexuality issues)
                </p>
                <p>
                  Provided with a more in-depth assessment and specific therapy
                  if needed
                </p>
                <p>
                  Handled by a Psychologist who is a Masters graduate in adult
                  clinical psychology.
                </p>
              </div>
            </div>
            <div className="card">
              <div className="textReveal">
                <h1>Mentoring</h1>
              </div>
              <div className="wrapper">
                <p>
                  Dealing with NON-CLINICAL issues (examples: friendship,work,
                  love, interests, family problems,self-knowledge, future)
                </p>
                <p>
                  Providing technical guidance and directives (e.g.
                  self-reflection or action plan creation)
                </p>
                <p>
                  Handled by trained Mentors who are graduates of S1 Psychology
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="faqSection">
        <div className="left">
          <div className="textReveal">
            <h1>Frequenlty asked</h1>
          </div>
          <div className="textReveal">
            <h1>questions</h1>
          </div>
          <p>Still need help? Chat to us.</p>
        </div>
        <div className="right">
          {faqs.map((faq, index) => (
            <Question
              key={index}
              question={faq.question}
              answer={faq.answer}
              isActive={activeIndex === index}
              onClick={() => handleClick(index)}
            />
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Appointment;
