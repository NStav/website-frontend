import { NavLink } from "react-router-dom";
import React, { useContext } from "react";
import Button from "@mui/material/Button";
import  "./SunCycleStyles.css"
import LinkedinLogo from "./img/LinkedinLogo.png"
import instagramLogo from "./img/instagramLogo.png"
import twitterLogo from "./img/twitterLogo.png"
import VRcycle from './img/VRcycle.jpg'
import VRheadset from './img/VRheadest.jpg'
export default function AnalyticsComponent() {

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };




  return (
    <div>
      <div className="SunCycleBackground">
        <h1>PROJECT SUN CYCLE</h1>
        <div className="SunCycleOverview"> 
          <h1>Overview</h1>
          <p>
            Project Sun Cycle is a Virtual Reality based game which is designed to be plated in tandem with one of our Smart Bikes. It involves a single player experience where you 
            are able to explore and travel across a beautiful post-apocalyptic world completing fun and interesting tasks by traveling throughout this world.
            <img src={VRcycle} alt="VRcycle"/>
          </p>
        </div>
        <div className="SunCyclePurpose">
          <h1>PURPOSE</h1>
          <p> This project strives towards an overall goal of creating a fun and immersive experience that will encourage people to exercise by gamifying exercise and providing a 
            convenient way to enjoy exercise in the comfort of your own home.
          </p>
        </div>
        <div className="SunCycleHowItWorks">
          <h1>HOW IT WORKS</h1>
          <p>
            <img src={VRheadset} alt="VRheadset"/>
            Project Sun Cycle will be able to be played using our Smart Bike by simply logging in to your account set up with your Smart Bike Application and Sun Cycle is run from
            your VR headset you will have the option to pair your devices together and seamlessly enjoy Sun Cycle using your Smart Bike.
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
