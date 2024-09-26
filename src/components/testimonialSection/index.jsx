import React from "react";
import "./styles.scss";

const Card = ({ message, img, star, type, prefesion, color }) => {
  return (
    <div className={`card ${type ? "show" : "hidden"}`}>
      <div className="top">
        <p>{message}</p>
        <img src={img} alt="customer feedback" />
      </div>
      <div className="bot">
        <div className="star">
          {[...Array(star)].map((_, index) => (
            <img key={index} src="/star.svg" alt={`star ${index + 1}`} />
          ))}
        </div>
        <h2 style={{ backgroundColor: `#${color}` }}>{prefesion}</h2>
      </div>
    </div>
  );
};

const Index = () => {
  const top = [
    {
      message:
        "This app is a lifesaver! Mindease has completely transformed how I deal with stress and anxiety. ",
      img: "/user1.jpg",
      star: 4,
      type: "show",
      prefesion: "Teacher",
      color: "F6D6D2",
    },
    {
      message:
        "This app is a lifesaver! Mindease has completely transformed how I deal with stress and anxiety. ",
      img: "/user2.jpg",
      star: 5,
      type: "hidden",
      prefesion: "Student",
      color: "E9FCD6",
    },
  ];

  const mid = [
    {
      message:
        "This app is a lifesaver! Mindease has completely transformed how I deal with stress and anxiety. ",
      img: "/user3.jpg",
      star: 4,
      type: "show",
      prefesion: "Office Workers",
      color: "E9FCD6",
    },
    {
      message:
        "This app is a lifesaver! Mindease has completely transformed how I deal with stress and anxiety. ",
      img: "/user4.jpg",
      star: 5,
      type: "hidden",
      prefesion: "Lawyers",
      color: "F6D6D2",
    },
    {
      message:
        "This app is a lifesaver! Mindease has completely transformed how I deal with stress and anxiety. ",
      img: "/user5.jpg",
      star: 5,
      type: "hidden",
      prefesion: "Artists",
      color: "E9FCD6",
    },
  ];

  const bot = [
    {
      message:
        "This app is a lifesaver! Mindease has completely transformed how I deal with stress and anxiety. ",
      img: "/user6.jpg",
      star: 4,
      type: "show",
      prefesion: "Student",
      color: "E9FCD6",
    },
    {
      message:
        "This app is a lifesaver! Mindease has completely transformed how I deal with stress and anxiety. ",
      img: "/user7.jpg",
      star: 5,
      type: "hidden",
      prefesion: "Lawyers",
      color: "F6D6D2",
    },
  ];

  return (
    <>
      <section className="testimonialSection">
        <h1>Our Customers Said</h1>
        <div className="container">
          <div className="containerTop">
            {top.map((item, index) => (
              <Card
                key={index}
                message={item.message}
                img={item.img}
                star={item.star}
                type={item.type}
                prefesion={item.prefesion}
                color={item.color}
              />
            ))}
          </div>
          <div className="containerMid">
            {mid.map((item, index) => (
              <Card
                key={index}
                message={item.message}
                img={item.img}
                star={item.star}
                type={item.type}
                prefesion={item.prefesion}
                color={item.color}
              />
            ))}
          </div>
          <div className="containerBot">
            {bot.map((item, index) => (
              <Card
                key={index}
                message={item.message}
                img={item.img}
                star={item.star}
                type={item.type}
                prefesion={item.prefesion}
                color={item.color}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
