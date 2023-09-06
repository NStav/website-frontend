import { NavLink } from "react-router-dom";
import React, { useContext } from "react";
import Button from "@mui/material/Button";
import  "./ProjectOrionStyles.css"
import LinkedinLogo from "./img/LinkedinLogo.png"
import instagramLogo from "./img/instagramLogo.png"
import twitterLogo from "./img/twitterLogo.png"
import WearableTechnology from "./img/WearableTechnology.jpg"
import IoT from "./img/IoT.jpg"

export default function AnalyticsComponent() {

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };




  return (
    <div>
      <div className="ProjectOrionBackground">
        <div className="ProjectOrionBackgroundImg">
          <div className="ProjectOrionContent">
            <h1>PROJECT ORION</h1>
            <h2>The future of sports and physical activity based tracking technology.</h2>
          </div>
        </div>
        <div className="ProjectOrionPurpose">
          <h1>Our Purpose</h1>
          <p>
            <img src={WearableTechnology} alt="Wearable technology"/>
            Within Project Orion we aim to create a comprehensive system that integrates visual and IoT data for a wide range of tracking purposes. Such as individual tracking, activity recognition, overcrowding detection, collision prediction, heart rate 
            monitoring, heatmap generation, contact tracing, alerting, historical analysis and emergency evacuation planning. We aim to combine these functionalities within a system that will provide a robust and versatile soluition for monitoring and analysis
            across many different contexts.
          </p>
        </div>
        <div className="ProjectOrionWork">
          <h1>How Will it Work?</h1>
          <p>
            We are utilising different sensor types, communication types and tracking approaches with a range of IoT devices to create and implement new wearable technologies for tracking. We aim to take an innovative and experimental approach through the
            utilisation of IoT embedded nodes such as ESP and ARM micro-controllers in conjunction with WiFi, Bluetooth and 5G, though these avanced networking technologies we will be at the forefront of tracking technologies.
            <img src={IoT} alt="IoT graphic"/>
          </p>
        </div>
      </div>
      <div className="Footer">
				<div className="FooterContent">
					<h1>Follow Us on Social Media</h1>
				  <div className="SocialImg"><p><img src={LinkedinLogo} alt="Redback LinkedIn"/>LinkedIn</p></div>
					<div className="SocialImg"><p><img src={instagramLogo} alt="Redback Instagram"/>Instagram</p></div>
					<div className="SocialImg"><p><img src={twitterLogo} alt="Redback Twitter"/>Twitter</p></div>
					<h2> © 2023, Redback Operations </h2>
				</div>
      </div>
  </div>
  );
}
