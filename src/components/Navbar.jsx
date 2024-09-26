import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./styles/navbar.scss";
import { gsap } from "gsap";

const Navbar = () => {
  const navbar = ["Appointment", "About"];
  const itemRefs = useRef([]);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [hoveredItemWidth, setHoveredItemWidth] = useState(0);
  const [hoveredItemHeight, setHoveredItemHeight] = useState(0);
  const [prefWidth, setPrefWidth] = useState(null);
  const [activeLink, setActiveLink] = useState(null);
  const [prefIndex, setPrefIndex] = useState(null);

  const homeRef = useRef(null);
  const [homeWidth, setHomeWidth] = useState(null);

  useEffect(() => {
    const homeItem = homeRef.current;
    if (homeItem) {
      const width = parseFloat(
        homeItem.getBoundingClientRect().width.toFixed(2)
      );
      setHomeWidth(width);
    }
  });

  const handleMouseEnter = (index) => {
    setHoveredItem(index);

    const prefItem = itemRefs.current[prefIndex];
    if (prefItem) {
      const width = parseFloat(
        prefItem.getBoundingClientRect().width.toFixed(2)
      );
      console.log("Pref Width:", width);
      setPrefWidth(width);
    }

    if (prefIndex !== null && prefIndex !== index && index > prefIndex) {
      gsap.to(".backgroundHovered", {
        backgroundColor: "#2c2c2c",
        x: hoveredItemWidth,
        width: prefWidth,
      });
    } else if (prefIndex !== null && index < prefIndex) {
      gsap.fromTo(
        ".backgroundHovered",
        {
          backgroundColor: "#2c2c2c",
          x: hoveredItemWidth,
          width: hoveredItemWidth,
        },
        {
          x: 0,
          backgroundColor: "#2c2c2c",
          width: prefWidth,
        }
      );
    } else if (prefIndex == null && index == 0) {
      console.log("prefIndex is null and index is 0");
      gsap.to(".backgroundHovered", {
        backgroundColor: "#2c2c2c",
        x: 0,
        width: hoveredItemWidth,
      });
    } else if (prefIndex == null && index > 0) {
      gsap.to(".backgroundHovered", {
        backgroundColor: "#2c2c2c",
        x: hoveredItemWidth,
        width: hoveredItemWidth,
      });
    }

    setPrefIndex(index);

    const item = itemRefs.current[index];
    if (item) {
      const width = parseFloat(item.getBoundingClientRect().width.toFixed(2));
      const height = parseFloat(item.getBoundingClientRect().height.toFixed(2));
      setHoveredItemWidth(width);
      setHoveredItemHeight(height);
    }
  };

  const handleMouseLeave = (index) => {
    setHoveredItem(null);
    setPrefIndex(null);
  };

  useEffect(() => {
    if (hoveredItem !== null) {
      console.log("Hovered Item Width:", hoveredItemWidth);
      console.log("Hovered Item Height:", hoveredItemHeight);
    }
  }, [hoveredItemWidth]);

  const handleMouseLeaveLink = () => {
    gsap.to(".backgroundHovered", {
      x: -homeWidth,
      width: homeWidth,
    });
  };

  return (
    <nav className="navbar">
      <div className="home" ref={homeRef}>
        <Link to="/">Home /</Link>
      </div>

      <div className="link" onMouseLeave={() => handleMouseLeaveLink()}>
        {navbar.map((item, index) => (
          <NavLink
            key={index}
            ref={(el) => (itemRefs.current[index] = el)}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
            to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
            className={({ isActive }) => `item ${isActive ? "active" : ""}`}
          >
            {item}
          </NavLink>
        ))}
        <div className="backgroundHovered"></div>
      </div>
    </nav>
  );
};

export default Navbar;
