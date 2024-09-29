import "../components/styles/lifeCoach.scss";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const LifeCoach = () => {
  return (
    <>
      <Navbar />
      <section className="bannerSection">
        <div className="container">
          <h1>
            Unlock Your True <span>Potential</span> with a Professional Life
            Coach
          </h1>
          <p>
            Merasa Down? Bingung Pilih Karir? Stres dengan Tugas? Kecanduan
            Gadget? Nggak Pede Sama Body? Yuk, Curhat Bareng Life Coach di Life
            Consultation Indonesia!
          </p>
        </div>
      </section>

      <section className="explainSection">
        <div className="container">
          <div className="left">
            <h1>Apa itu Konseling?</h1>
            <p>
              Konseling adalah layanan konsultasi one-on-one dengan Psikolog
              Satu Persen untuk mengatasi masalah kehidupan yang mengganggu
              kehidupan sehari-hari dan membahayakan dirimu atau orang lain.
            </p>
          </div>
          <div className="right">
            <div className="wrapper">
              <h1>3</h1>
              <h1>tanda kamu butuh Konseling dengan Psikolog</h1>
            </div>
            <div className="containerCard">
              <div className="card">
                <p>
                  Menyakiti atau membahayakan diri sendiri (e.g: Merasa harga
                  diri rendah, pikiran yang menyakiti diri sendiri, gangguan
                  nafsu makan)
                </p>
              </div>
              <div className="card">
                <p>
                  Menyakiti atau membahayakan orang lain (e.g: Sulit mengontrol
                  emosi hingga melakukan kekerasan kepada orang lain)
                </p>
              </div>
              <div className="card">
                <p>
                  Mengganggu kehidupan sehari-hari (e.g: Tidak bisa tidur
                  sehingga sulit fokus di pekerjaan, hilang nafsu makan hingga
                  sakit fisik)
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="scheaduleSection">
        <h1 className="heading">Jadwal Terdekat</h1>
        <div className="container">
          <div className="card">
            <h3>Monday</h3>
            <h3>30 SEP</h3>
            <div className="status">
              <h2>10/25</h2>
              <h3>Booked</h3>
            </div>
          </div>
          <div className="card">
            <h3>Tuesday</h3>
            <h3>1 OCT</h3>
            <div className="status">
              <h2>15/25</h2>
              <h3>Booked</h3>
            </div>
          </div>
          <div className="card">
            <h3>Wednesday</h3>
            <h3>2 OCT</h3>
            <div className="status">
              <h2>20/25</h2>
              <h3>Booked</h3>
            </div>
          </div>
          <div className="card">
            <h3>Thursday</h3>
            <h3>3 OCT</h3>
            <div className="status">
              <h2>18/25</h2>
              <h3>Booked</h3>
            </div>
          </div>
          <div className="card">
            <h3>Friday</h3>
            <h3>4 OCT</h3>
            <div className="status">
              <h2>22/25</h2>
              <h3>Booked</h3>
            </div>
          </div>
          <div className="card">
            <h3>Saturday</h3>
            <h3>5 OCT</h3>
            <div className="status">
              <h2>5/25</h2>
              <h3>Booked</h3>
            </div>
          </div>
          <div className="card">
            <h3>Sunday</h3>
            <h3>6 OCT</h3>
            <div className="status">
              <h2>12/25</h2>
              <h3>Booked</h3>
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

export default LifeCoach;
