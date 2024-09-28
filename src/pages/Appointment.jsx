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

      <section className="optionSection">
        <div className="container">
          <div className="card cLeft">
            <div className="left">
              <h1>Psycology</h1>
              <button>
                <img src="./Arrow.svg" alt="" />
                Learn More
              </button>
            </div>
            <div className="right">
              <img src="./Img.jpg" alt="" />
            </div>
          </div>
          <div className="card cRight">
            <div className="left">
              <h1>Life Coach</h1>
              <button>
                <img src="./Arrow.svg" alt="" />
                Learn More
              </button>
            </div>
            <div className="right">
              <img src="./Img.jpg" alt="" />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Appointment;
