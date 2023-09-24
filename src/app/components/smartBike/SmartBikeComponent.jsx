import { NavLink } from "react-router-dom";
import React, { useContext } from "react";
import Button from "@mui/material/Button";
import  "./SmartBikeStyles.css"
import LinkedinLogo from "./img/LinkedinLogo.png"
import instagramLogo from "./img/instagramLogo.png"
import twitterLogo from "./img/twitterLogo.png"
import SmartBike from "./img/smartbike.jpg"
import IoT from "./img/IoT.jpg"

export default function AnalyticsComponent() {

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };




  return (
    <div>
      <div className="SmartBikeBackground">
        <h1>SMART BIKE PROJECT</h1>
        <div className="SmartBikeOverview">
          <h1>OVERVIEW</h1>
          <p>
            <img src={SmartBike} alt="smartbike"/>
            The Smart Bike Project is an IoT enabled indoor exercise bike which utilises sensor data and delivers it to the cloud, where it is integrated into the bikes mobile
            application to provide a smart and concise approach to exercise indoors. It can also be linked with our one of our other products,
             Project Sun Cycle to deliver an immersive VR experience.
          </p>
        </div>
        <div className="SmartBikePurpose">
          <h1>PURPOSE</h1>
          <p> This project aims to solve some of the major problems of exercising, such as convenience and motivation. Poor weather conditions such as freezing cold, pouring rain
            or extreme heat and harsh sun make keeping up with exercise plans and fitness goals all year round very difficult, especially when it comes to cycling as physical 
            environment and traffic also have to be taken into account. With our Smart Bike we aim to circumvent these issues by allowing for convient and accesible exercise in your
            own home while also being able to track, plan and achieve tangible exercise goals while gamifying exericse and making it fun.
          </p>
        </div>
        <div className="SmartBikeHowItWorks"> 
          <h1>HOW IT WORKS</h1>
          <p>
            The Smart Bike is able to measure and track speed, cadence, power readings, heart rate readings from a chest strap and manipulate resistance and incline of the bike. 
            The tracked exercises data is received via Bluetooth using a Raspberry Pi and submitted bia MQTT allowing for the data to be distributed to the Flutter mobile application.
            The mobile application will display all the gathered data while also providing an interface for starting, stopping and managing exercise, such as allowing for the changing
            of intensity.
            <img src={IoT} alt="Iot"/>
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
