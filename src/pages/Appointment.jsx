import React, { useState } from "react";
import SearchBar from "../components/searchBar";
import Navbar from "../components/Navbar";
import "../components/styles/appointment.scss";

const CategoryNav = ({ title, icon }) => {
  return (
    <div className="category">
      <div className="category-icon">
        <img src={icon} alt={title} />
      </div>
      <h2 className="category-title">{title}</h2>
    </div>
  );
};

const DoctorCard = ({ name, category, image, rating }) => {
  return (
    <div className="doctor">
      <img src={image} alt={name} />
      <div className="container">
        <div className="wrapper-1">
          <h2>{name}</h2>
          <h3>{category}</h3>
        </div>
        <div className="wrapper-2">
          <img src="/star.svg" alt="" />
          <p>{rating}</p>
        </div>
      </div>
    </div>
  );
};

const Time = ({ time }) => {
  return (
    <div className="time">
      <p>{time}</p>
    </div>
  );
};

const Date = ({ day, date, times, selected }) => {
  return (
    <div className="date">
      <div className={`container ${selected ? "selected" : "notSelected"}`}>
        <h1>{day}</h1>
        <p>{date}</p>
      </div>
      <div className="time-options">
        {times.map((time, index) => (
          <Time key={index} time={time} />
        ))}
      </div>
    </div>
  );
};

const Appointment = () => {
  const [selectedDateIndex, setSelectedDateIndex] = useState(null);

  const categories = [
    { title: "Psychiatrist", icon: "/img2.jpg" },
    { title: "Psychologist", icon: "/img2.jpg" },
    { title: "Psychotherapist", icon: "/img2.jpg" },
    { title: "Child and Adolescent Psychiatrist", icon: "/img2.jpg" },
    { title: "Forensic Psychiatrist", icon: "/img2.jpg" },
    { title: "Counselor 1", icon: "/img2.jpg" },
    { title: "Counselor 2", icon: "/img2.jpg" },
    { title: "Counselor 3", icon: "/img2.jpg" },
  ];

  const doctors = [
    {
      name: "Dr. John Doe",
      category: "Psychiatrist",
      image: "/user1.jpg",
      rating: "4.5",
    },
    {
      name: "Dr. Jane Smith",
      category: "Psychologist",
      image: "/user2.jpg",
      rating: "4.7",
    },
    {
      name: "Dr. Emily Johnson",
      category: "Psychotherapist",
      image: "/user3.jpg",
      rating: "4.6",
    },
  ];

  const dates = [
    { day: "Monday", date: "12", times: ["08:30", "09:30"] },
    { day: "Tuesday", date: "13", times: ["08:30", "09:30"] },
    { day: "Wednesday", date: "14", times: ["08:30", "09:30"] },
    { day: "Thursday", date: "15", times: ["08:30", "09:30"], selected: true },
    { day: "Friday", date: "16", times: ["08:30", "09:30"] },
    { day: "Saturday", date: "17", times: ["08:30", "09:30"] },
    { day: "Sunday", date: "18", times: ["08:30", "09:30"] },
  ];

  const handleDateClick = (index) => {
    setSelectedDateIndex(index);
  };

  return (
    <>
      <SearchBar />
      <Navbar />
      <h1 className="heading-1">Make Appointment</h1>
      <section className="categorySection">
        <div className="categories">
          <h2 className="body-1">Choose category</h2>
          <div className="container">
            {categories.map((item, index) => (
              <CategoryNav key={index} title={item.title} icon={item.icon} />
            ))}
          </div>
        </div>
      </section>

      <section className="doctorSection">
        <div className="doctors">
          <h2 className="body-1">Choose doctor</h2>
          <div className="container">
            {doctors.map((item, index) => (
              <DoctorCard
                key={index}
                name={item.name}
                category={item.category}
                image={item.image}
                rating={item.rating}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="dntSection">
        <div className="dnt">
          <h2 className="body-1">Choose date and time</h2>
          <hr />
          <div className="dates">
            {dates.map((item, index) => (
              <div key={index}>
                <Date
                  day={item.day.slice(0, 3)}
                  date={item.date}
                  times={item.times}
                  selected={item.selected}
                />
              </div>
            ))}
          </div>
          <div className="bookNow">
            <h2 className="body-1">Book Now</h2>
            <button className="button">Book Now</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Appointment;
