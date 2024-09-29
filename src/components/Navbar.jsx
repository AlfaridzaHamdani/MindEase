import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import "./styles/navbar.scss";
import { gsap } from "gsap";

const Navbar = () => {
  const navbar = ["Appointment", "About"];
  const itemRefs = useRef([]);
  const [hoveredItemWidth, setHoveredItemWidth] = useState(0);
  const [hoveredItemLeft, setHoveredItemLeft] = useState(0);
  const [activeIndex, setActiveIndex] = useState(2); // Default activeIndex Home
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
    // Update activeIndex based on location.pathname
    if (location.pathname === "/") {
      setActiveIndex(2); // Set Home as active
      handleSetActiveBackground(2, false); // Ensure Home background is active
    } else {
      navbar.forEach((item, index) => {
        if (location.pathname === `/${item.toLowerCase()}`) {
          setActiveIndex(index);
          handleSetActiveBackground(index, false); // Update background on page load
        }
      });
    }

    // Set colors on mount and refresh
    updateLinkColors(activeIndex);
  }, [location.pathname, activeIndex]);

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
    updateLinkColors(index, isHovering);
  };

  const updateLinkColors = (index, isHovering = false) => {
    navbar.forEach((_, idx) => {
      gsap.to(itemRefs.current[idx], {
        color: idx === index ? "#fcfcfc" : "#2c2c2c", // Set color based on active index
        duration: 0.3,
        ease: "power3.out",
      });
    });

    // Ensure active link is white
    gsap.to(itemRefs.current[index], {
      color: "#fcfcfc",
      duration: 0.3,
      ease: "power3.out",
    });

    if (isHovering) {
      gsap.to(itemRefs.current[index], {
        color: "#fcfcfc", // Highlight hovered item
        duration: 0.3,
        ease: "power3.out",
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
      <div
        className="home"
        ref={homeRef}
        onMouseEnter={() => handleSetActiveBackground(2, true)} // Hover Home
        onMouseLeave={handleMouseLeaveHome} // Leave Home
        onClick={() => handleLinkClick(2)} // Click Home
      >
        <Link to="/">Home /</Link>
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
            style={{ color: activeIndex === index ? "#fcfcfc" : "#2c2c2c" }} // Set text color directly based on active index
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
