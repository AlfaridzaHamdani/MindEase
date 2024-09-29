import "../components/styles/appointment.scss";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState } from "react";
import { Link } from "react-router-dom";

const Consultant = (image) => {
  return (
    <div className="consultant">
      <img src={`./${image}.jpg`} alt="" className={image} />
    </div>
  );
};

const Question = ({ question, answer, isActive, onClick }) => {
  return (
    <div className="question">
      <h1 onClick={onClick} style={{ cursor: "pointer" }}>
        {question}
      </h1>
      {isActive && <p>{answer}</p>}
    </div>
  );
};

const Appointment = () => {
  const consultant = ["user1", "user2", "user3", "user4"];
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

  return (
    <>
      <Navbar />
      <section className="appointmentSection">
        <div className="heading">
          <h1>
            Quick <p></p> Easy Appointments
          </h1>
          <h1>
            for Better<span> Health!</span>
          </h1>
        </div>

        <div className="card">
          <div className="stat helped">
            <div className="wrapper">
              <img src="./Arrow.svg" alt="arrow" />
              <h3>30.000+</h3>
            </div>
            <p>People helped</p>
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
              <h3>100+</h3>
            </div>
            <p>Consultant team ready to help</p>
          </div>
        </div>
      </section>

      <section className="optionSection">
        <div className="container">
          <Link to={"/appointment/psychology"} className="card cLeft">
            <div className="left">
              <h1>Psychology</h1>
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
              <h1>Life Coach</h1>
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
          <h1>Consultant you can trust</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda
            cum nemo atque earum necessitatibus quae quidem, quis, iure mollitia
            deleniti similique veritatis, blanditiis nesciunt saepe eius
            molestiae ipsum? Rem, possimus.
          </p>
        </div>

        <div className="wrapper ">
          <div className="row top">
            {consultant.slice(0, 2).map((image) => Consultant(image))}
          </div>
          <div className="row bot">
            {consultant.slice(2, 4).map((image) => Consultant(image))}
          </div>
        </div>
      </section>

      <section className="differencesSection">
        <div className="container">
          <h1 className="heading">Differences in Consultation</h1>
          <div className="containerCard">
            <div className="card">
              <h1>Counseling</h1>
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
              <h1>Mentoring</h1>
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
          <h1>Frequenlty asked questions</h1>
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
