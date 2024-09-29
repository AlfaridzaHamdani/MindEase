import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import "./styles/navbar.scss";
import { gsap } from "gsap";

const Navbar = () => {
  const navbar = ["Appointment", "About"];
  const itemRefs = useRef([]);
  const [hoveredItemWidth, setHoveredItemWidth] = useState(0);
  const [hoveredItemLeft, setHoveredItemLeft] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0); // Default activeIndex Home
  const homeRef = useRef(null);
  const [homeWidth, setHomeWidth] = useState(null);
  const location = useLocation();
  const linkRef = useRef(null);

  useEffect(() => {
    const homeItem = homeRef.current;
    if (homeItem) {
      const width = parseFloat(
        homeItem.getBoundingClientRect().width.toFixed(2)
      );
      setHomeWidth(width);
    }
  }, []);

  useEffect(() => {
    navbar.forEach((item, index) => {
      if (location.pathname === `/${item.toLowerCase()}`) {
        setActiveIndex(index);
        handleSetActiveBackground(index, false); // Update background on page load
      }
    });
  }, [location.pathname]);

  const handleSetActiveBackground = (index, isHovering) => {
    const item = itemRefs.current[index];
    const homeItem = homeRef.current;

    const homeLeft = homeItem.getBoundingClientRect().left;
    const parentRect = linkRef.current.getBoundingClientRect();

    let width, left;

    if (isHovering && index === 2) {
      // Hovering Home
      width = homeWidth;
      left = homeLeft - parentRect.left;
    } else if (item) {
      const rect = item.getBoundingClientRect();
      width = rect.width;
      left = rect.left - parentRect.left;
    } else {
      // Kembali ke Home jika tidak ada yang di-hover
      width = homeWidth;
      left = homeLeft - parentRect.left;
    }

    setHoveredItemWidth(width);
    setHoveredItemLeft(left);

    gsap.to(".backgroundHovered", {
      x: left,
      width: width,
      backgroundColor: "#2c2c2c",
      ease: "power3.out",
      duration: 0.3,
    });

    // Handle color changes
    if (isHovering) {
      // Set color white for hovered item, and keep active item white too
      gsap.to(itemRefs.current[index], {
        color: "#fcfcfc",
        duration: 0.3,
        ease: "power3.out",
      });

      // Keep the active item white
      if (index !== activeIndex) {
        gsap.to(itemRefs.current[activeIndex], {
          color: "#2c2c2c",
          duration: 0.3,
          ease: "power3.out",
        });
      }
    } else {
      navbar.forEach((_, idx) => {
        // Change active item color to white, others to dark
        gsap.to(itemRefs.current[idx], {
          color: idx === activeIndex ? "#fcfcfc" : "#2c2c2c",
          duration: 0.3,
          ease: "power3.out",
        });
      });
    }
  };

  const handleMouseEnter = (index) => {
    handleSetActiveBackground(index, true);
  };

  const handleMouseLeaveLink = () => {
    handleSetActiveBackground(activeIndex, false);
  };

  const handleLinkClick = (index) => {
    setActiveIndex(index);
    handleSetActiveBackground(index, false);
  };

  const handleMouseLeaveItem = (index) => {
    if (index !== activeIndex) {
      gsap.to(itemRefs.current[index], {
        color: "#2c2c2c",
        duration: 0.3,
        ease: "power3.out",
      });
    }
  };

  const handleMouseLeaveHome = () => {
    handleSetActiveBackground(activeIndex, false); // Reset to activeIndex on mouse leave
  };

  return (
    <nav className="navbar">
      <div className="home" ref={homeRef}>
        <Link
          to="/"
          onMouseEnter={() => handleSetActiveBackground(2, true)} // Hover Home
          onMouseLeave={handleMouseLeaveHome} // Leave Home
          onClick={() => handleLinkClick(2)} // Click Home
        >
          Home /
        </Link>
      </div>

      <div className="link" ref={linkRef} onMouseLeave={handleMouseLeaveLink}>
        {navbar.map((item, index) => (
          <NavLink
            key={index}
            ref={(el) => (itemRefs.current[index] = el)}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeaveItem(index)}
            onClick={() => handleLinkClick(index)}
            to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
            className={({ isActive }) => `item ${isActive ? "active" : ""}`}
          >
            {item}
          </NavLink>
        ))}
        <div
          className="backgroundHovered"
          style={{
            width: hoveredItemWidth,
            transform: `translateX(${hoveredItemLeft}px)`,
          }}
        ></div>
      </div>
    </nav>
  );
};

export default Navbar;
