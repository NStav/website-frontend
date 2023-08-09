import { NavLink } from "react-router-dom";
import React, { useContext } from "react";
import Button from "@mui/material/Button";
import  "./AnalyticsStyles.css"
import LinkedinLogo from "./img/LinkedinLogo.png"
import instagramLogo from "./img/instagramLogo.png"
import twitterLogo from "./img/twitterLogo.png"

export default function AnalyticsComponent() {

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };


  const Distance = '0'
  const AverageBPM = '0'
  const PeakBPM = '0'
  const AveragePace = '0'
  const Incline = '0'
  const Duration = '0:00'
  
  return (
    <div>
      <div className="AnalyticsBackground">
        <div className="AnalyticsTitle">
          <h1>Your Statistics</h1>
        </div>
        <div className="AnalyticsGrid">
          <div className="AnalyticsGridObject"> <h1>Distace</h1> <p>{Distance}</p> </div>
          <div className="AnalyticsGridObject"> <h1>Average BPM</h1> <p>{AverageBPM}</p> </div>
          <div className="AnalyticsGridObject"> <h1>BPM Peak</h1> <p>{PeakBPM}</p> </div>
          <div className="AnalyticsGridObject"> <h1>Average Pace</h1> <p>{AveragePace}</p> </div>
          <div className="AnalyticsGridObject"> <h1>Incline</h1> <p>{Incline}</p> </div>
          <div className="AnalyticsGridObject"> <h1>Duration</h1> <p>{Duration}</p> </div>
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
