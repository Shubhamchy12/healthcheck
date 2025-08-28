import React,{ useState, useEffect } from "react";
import Heal  from "../assets/Heal.avif"
import Health from "../assets/health.avif";
import Health2 from "../assets/health2.avif"
import Health3 from "../assets/health3.avif"

function Heroes() {
//   const heroStyle = {
//     backgroundImage: `url(${Health})`,
//     backgroundSize: "cover",
//     backgroundPosition: "center",
//     height: "510px",
//     width: "100%",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     color: "green",
//     textAlign: "center",
//     borderRadius: "10px",
//     fontSize: "25px"
//   };


  const heroImages = [Heal,Health, Health2, Health3]; 
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const heroStyle = {
    backgroundImage: `url(${heroImages[currentIndex]})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "510px",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    textAlign: "center",
    borderRadius: "10px",
    fontSize: "25px",
    transition: "background-image 1s ease-in-out", // smooth transition
    position: "relative",
  };

  return (
    <div style={heroStyle}>
      <div className="hero-text">
        <h2>Your Health, Our Priority</h2>
        <p>Check your Health with Simple Test</p>
        <button>Explore Test</button>
      </div>
    </div>
  );
}

export default Heroes;
