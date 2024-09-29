import "./styles.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__left">
        <div className="footer__left__about">
          <div className="footer__left__wrapperLogo">
            <img src="./Logo.svg" alt="" />
            <h3>MindEase</h3>
          </div>
          <p>
            Quam pharetra egestas imperdiet sed. Sed morbi arcu mauris ac
            lacinia non ut elit tellus. Eleifend elementum at eleifend mi amet.
          </p>
        </div>
        <div className="footer__left__copyright">
          @2024 MindEase. All rights reserved.
        </div>
      </div>
      <div className="footer__right">
        <div className="footer__right__link">
          <h3>Menu</h3>
          <ul>
            <li>Home</li>
            <li>Appointment</li>
            <li>AboutUs</li>
          </ul>
        </div>
        <div className="footer__right__link">
          <h3>Legal</h3>
          <ul>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
            <li>Disclaimer</li>
          </ul>
        </div>
        <div className="footer__right__link">
          <h3>Follow Us</h3>
          <ul>
            <li>Facebook</li>
            <li>Instagram</li>
            <li>Twitter</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
