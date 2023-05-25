import React from "react";
import logo from "../../assets/uni-logo.jpg";
import "./FooterStyles.css";

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="top">
          <img src={logo} width="30px" height="30px" alt="/" />
          <h3>ROMANIA</h3>
        </div>
      </div>
    </div>
  );
}

export default Footer;
