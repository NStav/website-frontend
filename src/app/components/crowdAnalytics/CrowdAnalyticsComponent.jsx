import { NavLink } from "react-router-dom";
import React, { useContext } from "react";
import Button from "@mui/material/Button";
import  "./CrowdAnalyticsStyles.css"
import LinkedinLogo from "./img/LinkedinLogo.png"
import instagramLogo from "./img/instagramLogo.png"
import twitterLogo from "./img/twitterLogo.png"
import Heatmap from "./img/heatmaps.jpg"
import ProximityData from "./img/proximitydata.png"
import KernelDensity from "./img/kerneldensity.png"
export default function AnalyticsComponent() {

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  
  return (
    <div>
      <div className="CrowdAnalyticsBackground">
        <div className="CrowdAnalyticsTitle">
          <h1>Crowd Analytics</h1>
        </div>
        <div className="HeatMap">
          <h1>Heatmap</h1>
          <img src={Heatmap} alt="Heatmap"/>
        </div>
        <div className="CrowdData">
          <div className="Contact">
            <p>Contact Tracing: <img src={ProximityData} alt="Proximity Data"/></p>
          </div>
          <div className="Overcrowding">
            <p>Overcrowding: <img src={KernelDensity} alt="Kernel Density Estimation"/></p>
          </div>
        </div>
        
        <br/>
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
