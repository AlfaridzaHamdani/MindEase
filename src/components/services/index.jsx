import React from "react";
import "./styles.scss";

const Index = () => {
  const services = [
    {
      title: "Teletherapy Platforms",
      description:
        "Aplikasi ini memungkinkan pengguna untuk mengakses sesi terapi secara daring dengan profesional kesehatan mental. Contoh platform ini adalah BetterHelp dan Talkspace, di mana pengguna dapat memilih terapis berdasarkan spesialisasi dan kebutuhan mereka.",
      icon: "/IconBrain.svg",
      url: "/service1",
    },
    {
      title: "Mindfulness and Meditation Apps",
      description:
        "Layanan ini menyediakan teknik meditasi dan latihan mindfulness untuk membantu pengguna mengelola stres dan kecemasan. Contoh aplikasi ini adalah Headspace dan Calm, yang menawarkan panduan meditasi, suara relaksasi, dan sesi pernapasan.",
      icon: "/IconBrain.svg",
      url: "/service2",
    },
    {
      title: "Mental Health Assessment Tools",
      description:
        "Website yang menawarkan alat penilaian kesehatan mental untuk membantu pengguna memahami kondisi mental mereka. Misalnya, aplikasi seperti Moodfit atau Moodpath memberikan kuisioner yang mengukur suasana hati dan memberikan saran untuk perbaikan.",
      icon: "/IconBrain.svg",
      url: "/service2",
    },
    {
      title: "Support Community Platforms",
      description:
        "Aplikasi ini menciptakan komunitas bagi individu yang mengalami masalah kesehatan mental untuk berbagi pengalaman dan mendukung satu sama lain. Contoh platform ini adalah 7 Cups, yang menyediakan ruang untuk percakapan anonim dan dukungan peer-to-peer.",
      icon: "/IconBrain.svg",
      url: "/service2",
    },
  ];

  return (
    <>
      <div>
        <span>SERVICES & TREATMENT</span>
        <h1>Speciality and health care services</h1>
      </div>

      <div className="container">
        {services.map((service, index) => (
          <Card
            key={index}
            title={service.title}
            description={service.description}
            icon={service.icon}
            url={service.url}
          />
        ))}
      </div>
    </>
  );
};

const Card = ({ title, description, icon, url }) => {
  return (
    <div className="card">
      <img src={icon} alt={title} />
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
        {/* <a href={url}>Learn More</a> */}
      </div>
    </div>
  );
};

export default Index;
