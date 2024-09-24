import React from "react";
import "./styles.scss";

const Index = () => {
  const services = [
    {
      title: "Teletherapy Platforms",

      icon: "/IconBrain.svg",
      url: "/service1",
    },
    {
      title: "Mindfulness and Meditation Apps",

      icon: "/IconBrain.svg",
      url: "/service2",
    },
    {
      title: "Mental Health Assessment Tools",

      icon: "/IconBrain.svg",
      url: "/service2",
    },
    {
      title: "Support Community Platforms",

      icon: "/IconBrain.svg",
      url: "/service2",
    },
  ];

  return (
    <>
      <section className="serviceSection">
        <div className="headings">
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
      </section>
    </>
  );
};

const Card = ({ title, icon, url }) => {
  return (
    <div className="card">
      <img src={icon} alt={title} />
      <div className="container">
        <h2>{title}</h2>
      </div>
    </div>
  );
};

export default Index;
