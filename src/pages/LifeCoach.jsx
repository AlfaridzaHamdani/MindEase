import "../components/styles/lifeCoach.scss";
import Navbar from "../components/Navbar";

const LifeCoach = () => {
  return (
    <>
      <Navbar />
      <section className="bannerSection">
        <div className="container">
          <h1>
            Consult with a <br />
            <span>Life Coach</span>
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
            <div className="card">
              <p>
                Menyakiti atau membahayakan diri sendiri (e.g: Merasa harga diri
                rendah, pikiran yang menyakiti diri sendiri, gangguan nafsu
                makan)
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
                Mengganggu kehidupan sehari-hari (e.g: Tidak bisa tidur sehingga
                sulit fokus di pekerjaan, hilang nafsu makan hingga sakit fisik)
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="scheaduleSection">
        <div className="container">
          <div className="card">
            <h3>Senin</h3>
            <h3>30 SEP</h3>
            <div className="status">
              <h2>8/25</h2>
              <h2>Booked</h2>
            </div>
          </div>
          <div className="card">
            <h3>Senin</h3>
            <h3>30 SEP</h3>
            <div className="status">
              <h2>8/25</h2>
              <h2>Booked</h2>
            </div>
          </div>
          <div className="card">
            <h3>Senin</h3>
            <h3>30 SEP</h3>
            <div className="status">
              <h2>8/25</h2>
              <h2>Booked</h2>
            </div>
          </div>
          <div className="card">
            <h3>Senin</h3>
            <h3>30 SEP</h3>
            <div className="status">
              <h2>8/25</h2>
              <h2>Booked</h2>
            </div>
          </div>
          <div className="card">
            <h3>Senin</h3>
            <h3>30 SEP</h3>
            <div className="status">
              <h2>8/25</h2>
              <h2>Booked</h2>
            </div>
          </div>
          <div className="card">
            <h3>Senin</h3>
            <h3>30 SEP</h3>
            <div className="status">
              <h2>8/25</h2>
              <h2>Booked</h2>
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
    </>
  );
};

export default LifeCoach;
