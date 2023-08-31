import { NavLink } from "react-router-dom";
import React, { useContext } from "react";
import Button from "@mui/material/Button";
import  "./AnalyticsStyles.css"
import LinkedinLogo from "./img/LinkedinLogo.png"
import instagramLogo from "./img/instagramLogo.png"
import twitterLogo from "./img/twitterLogo.png"
import data from './AnalyticsData.json'

export default function AnalyticsComponent() {

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  
  return (
    <div>
      <div className="AnalyticsBackground">
        <div className="AnalyticsTitle">
          <h1>Your Statistics</h1>
        </div>
        <div className="AnalyticsGrid">
          <div className="AnalyticsGridObject"> <h1>Distace</h1> <p>{data.Distance}</p> </div>
          <div className="AnalyticsGridObject"> <h1>Average BPM</h1> <p>{data.Average_BPM}</p> </div>
          <div className="AnalyticsGridObject"> <h1>BPM Peak</h1> <p>{data.BPM_Peak}</p> </div>
        </div>
        <div className="AnalyticsGrid">
          <div className="AnalyticsGridObject"> <h1>Average Pace</h1> <p>{data.Average_Pace}</p> </div>
          <div className="AnalyticsGridObject"> <h1>Incline</h1> <p>{data.Incline}</p> </div>
          <div className="AnalyticsGridObject"> <h1>Duration</h1> <p>{data.Duration}</p> </div>
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
