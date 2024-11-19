import React from "react";
import "./Footer.scss";
import hcmut from "../images/HCMUT.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="contact-info">
        <div>Liên lạc qua:</div>
        <div>contact@hcmut.com.edu</div>
        <div>(434) 546-4356</div>
      </div>
      <div className="quick-links">
        <div>About My Bach Khoa</div>
        <div>HCMUT</div>
      </div>
      <div className="brand-info">
        {/* <img src='hcmut' alt="HCMUT Logo" /> */}
        <div>© 2020 Lift Media. All rights reserved.</div>
        <div>HCMUT SSPS</div>
      </div>
    </footer>
  );
};

export default Footer;