import "./styles.scss";
import { Link, useLocation } from "react-router-dom";

const index = () => {
  const location = useLocation();

  const imgSrc =
    location.pathname === "/appointment/psychology"
      ? "../public/Logo.svg"
      : "./Logo.svg" || location.pathname === "/appointment/life-coach"
      ? "../public/Logo.svg"
      : "./Logo.svg";

  return (
    <>
      <Link to={"/"} className="headingContainer">
        <img src={imgSrc} alt="Logo" />
        <div className="logoWrapper">
          <h2 className="logo">MindEase</h2>
          <h2 className="subLogo">MentalHealthCare</h2>
        </div>
      </Link>
    </>
  );
};

export default index;
