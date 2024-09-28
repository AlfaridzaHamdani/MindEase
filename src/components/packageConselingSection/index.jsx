import React from "react";
import "./styles.scss";

const index = () => {
  const services = [
    {
      title: "VOICE CALL",
      type: "Rekomendasi",
      duration: "± 60 menit",
      price: "Rp 259.000",
      features: [
        "Konsultasi via Telepon",
        "Mengungkap Masalah",
        "Mencari Tahu Penyebabnya",
        "Menemukan Solusi",
        "Pendampingan dan Evaluasi",
        "24/7 chat tersedia*",
      ],
    },
    {
      title: "VIDEO CALL",
      type: "Rekomendasi",
      duration: "± 60 menit",
      price: "Rp 309.000",
      features: [
        "Konsultasi via Video Call",
        "Mengungkap Masalah",
        "Mencari Tahu Penyebabnya",
        "Menemukan Solusi",
        "Pendampingan dan Evaluasi",
        "24/7 chat tersedia*",
      ],
    },
    {
      title: "Bundling Extra Webinar",
      type: "Rekomendasi + Eksklusif Webinar",
      duration: "± 2 Jam",
      price: "Rp 614.000",
      features: [
        "Konsultasi via Video Call",
        "Mengungkap Masalah",
        "Mencari Tahu Penyebabnya",
        "Menemukan Solusi",
        "Pendampingan dan Evaluasi",
        "24/7 chat tersedia*",
        "Akses Webinar",
      ],
    },
    {
      title: "BUNDLING",
      type: "Rekomendasi",
      duration: "± 3 Jam",
      price: "Rp 809.000",
      features: [
        "Konsultasi via Video Call",
        "Mengungkap Masalah",
        "Mencari Tahu Penyebabnya",
        "Menemukan Solusi",
        "Pendampingan dan Evaluasi",
        "24/7 chat tersedia*",
        "Akses Webinar",
      ],
    },
  ];

  return (
    <div className="app">
      <div className="service-cards">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="service-header">
              <h2>{service.title}</h2>
              <span className="badge">{service.type}</span>
            </div>
            <div className="service-body">
              <p>{service.duration}</p>
              <ul>
                {service.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </div>
            <div className="service-footer">
              <span className="price">{service.price}</span>
              <button className="buy-button">Pilih Paket</button>
            </div>
          </div>
        ))}
      </div>
      <button className="next-button">Lanjut</button>
    </div>
  );
};

export default index;
