import "../components/styles/appointment.scss";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Consultant = (image) => {
  return (
    <div className="consultant">
      <img src={`./${image}.jpg`} alt="" className={image} />
    </div>
  );
};

const Appointment = () => {
  const consultant = ["user1", "user2", "user3", "user4"];
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
          <div className="card cLeft">
            <div className="left">
              <h1>Psycology</h1>
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
          </div>
          <div className="card cRight">
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
          </div>
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
          <div className="card">
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

      <Footer />
    </>
  );
};

export default Appointment;
