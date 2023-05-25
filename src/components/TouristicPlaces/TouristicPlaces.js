import React from "react";
import "./TouristicPlacesStyles.css";

import romania1 from "../../assets/romania1.jpg";
import romania2 from "../../assets/romania2.jpg";
import romania3 from "../../assets/romania3.jpg";
import romania4 from "../../assets/Citadel-Rasnov-Romania.jpg";
import romania6 from "../../assets/romania3.jpg";
import romania7 from "../../assets/romania2.jpg";
import SelectsImg from "../SelectsImg/SelectsImg";

function TouristicPlaces() {
  return (
    <div name="views" className="touristicplaces">
      <div className="container">
        <SelectsImg bgImg={romania1} text="Bora Bora" />
        <SelectsImg bgImg={romania2} text="Emerald Bay" />
        <SelectsImg bgImg={romania3} text="Maldives" />
        <SelectsImg bgImg={romania4} text="Grenada" />
        <SelectsImg bgImg={romania6} text="Barbados" />
        <SelectsImg bgImg={romania7} text="Key West" />
      </div>
    </div>
  );
}

export default TouristicPlaces;
