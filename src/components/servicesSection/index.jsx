import React from "react";
import "./styles.scss";

const Index = () => {
  const services = [
    {
      title: "Teletherapy Platforms",

      icon: "/Img.jpg",
      url: "/service1",
    },
    {
      title: "Mindfulness and Meditation Apps",

      icon: "/Img.jpg",
      url: "/service2",
    },
    {
      title: "Mental Health Assessment Tools",

      icon: "/Img.jpg",
      url: "/service2",
    },
    {
      title: "Support Community Platforms",

      icon: "/Img.jpg",
      url: "/service2",
    },
  ];

  return (
    <>
      <section className="serviceSection">
        <div className="heading">
          <h1>Here' what you can do with our Mental health care services</h1>
          <button>
            Learn More <img src="/Arrow.svg" alt="" />
          </button>
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
