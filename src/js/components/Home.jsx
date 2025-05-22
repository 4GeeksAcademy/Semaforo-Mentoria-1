import React, { useState } from "react";
import TrafficLight from "./TrafficLight";

const Home = () => {
  const [color, setColor] = useState("red");
  const handleLightClick = (selectedColor) => {
    setColor(selectedColor);
  };

  return (
    <div className="container text-center">
      <div
        className={`light red ${color === "red" ? "active" : ""}`}
        onClick={() => handleLightClick("red")}
      >
    
      </div>
      <div
        className={`light yellow ${color === "yellow" ? "active" : ""}`}
        onClick={() => handleLightClick("yellow")}
      >
      
      </div>
      <div
        className={`light green ${color === "green" ? "active" : ""}`}
        onClick={() => handleLightClick("green")}
      >
        
      </div>

      {/*  <TrafficLight /> */}
    </div>
  );
};

export default Home;
