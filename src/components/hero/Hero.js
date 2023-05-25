import React from "react";
import "./HeroStyles.css";

import Video from "../../assets/0be9b123-d00bc462.mp4";

function Hero() {
  return (
    <div className="hero">
      <video autoPlay loop muted id="video">
        <source src={Video} type="video/mp4" />
      </video>
      <div className="overlay"></div>
      <div className="content">
        <h1>The country of tourism!!!</h1>
        <h2>Europe's largest and best-preserved delta</h2>
      </div>
    </div>
  );
}

export default Hero;
