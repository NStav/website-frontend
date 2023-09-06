import { NavLink } from "react-router-dom";
import React, { useState } from "react";
import Button from "@mui/material/Button";
import  "./ProductsStyles.css"
import LinkedinLogo from "./img/LinkedinLogo.png"
import instagramLogo from "./img/instagramLogo.png"
import twitterLogo from "./img/twitterLogo.png"
import SmartBike from "./img/SmartBike.jpg"
import VRheadset from "./img/VRheadset.jpg"
import GPS from "./img/GPS.png"

export default function AnalyticsComponent() {

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  var [count, setCount] = useState(1)
  const NextProduct1 = () => {
    count = 2
    setCount(count)
  }

  const NextProduct2 = () => {
    count = 3
    setCount(count)
  }

  const NextProduct3 = () => {
    count = 1
    setCount(count)
  }
  
  return (
    <div>
      <div className="ProductBackground">
        
        {
          count === 1 ?
          <div className="ProductItem">
            <h1>Smart Bike</h1>
            <p>
              <img src={SmartBike} alt="SmartBike"/>
              The Smart Bike is an IoT enabled indoor exercise bike which can track and store your exercise data. Able to connect to your smartphone for tracking and viewing your statistics while also handling the different bikes settings such as incline
              and resistance. 
            </p>
            <div className="ProductButton">
            <Button
                style={{
                  backgroundColor: "#E87461",
                  padding: "18px 36px",
                  fontSize: 30,
                  fontWeight: 900,
                }}
                sx={{ mx: 8, color: "white", display: "block", marginLeft: "auto", marginRight: "auto"}}
                variant="contained"
                onClick={NextProduct1}
              >
                Next
              </Button>

              <Button
                style={{
                  backgroundColor: "#E87461",
                  padding: "18px 36px",
                  fontSize: 30,
                  fontWeight: 900,
                }}
                sx={{ mx: 8, color: "white", display: "block", marginLeft: "auto", marginRight: "auto"}}
                variant="contained"
                onClick={handleCloseNavMenu}
                component={NavLink}
                to="/products"
              >
                Learn More
              </Button>
            </div>
          </div>
          : count === 2 ?
          <div className="ProductItem">
            <h1>Sun Cycle</h1>
            <p>
              <img src={VRheadset} alt="VR headset"/>
              Project Suncycle is a Virtual Reality based game which is played in combination with an exercise bike. It is a single player experience where the player is able to explore and travel acros the post-apocalyptic tribal world completing quests. It is a 
              fun and immersive experience which will make exercise in the comfort of your own home fun and motivating.
            </p>
            <div className="ProductButton">
            <Button
                style={{
                  backgroundColor: "#E87461",
                  padding: "18px 36px",
                  fontSize: 30,
                  fontWeight: 900,
                }}
                sx={{ mx: 8, color: "white", display: "block", marginLeft: "auto", marginRight: "auto"}}
                variant="contained"
                onClick={NextProduct2}
              >
                Next
              </Button>

              <Button
                style={{
                  backgroundColor: "#E87461",
                  padding: "18px 36px",
                  fontSize: 30,
                  fontWeight: 900,
                }}
                sx={{ mx: 8, color: "white", display: "block", marginLeft: "auto", marginRight: "auto"}}
                variant="contained"
                onClick={handleCloseNavMenu}
                component={NavLink}
                to="/products"
              >
                Learn More
              </Button>
            </div>
          </div>
          : 
          <div className="ProductItem">
            <h1>Project Orion</h1>
            <p>
              <img src={GPS} alt="GPS"/>
              Project Orion is a comprehensive system which utilises wearable GPS technology for a wide range of tracking purposes such as exercise, day to day life and event safety.  
            </p>
            <div className="ProductButton">
            <Button
                style={{
                  backgroundColor: "#E87461",
                  padding: "18px 36px",
                  fontSize: 30,
                  fontWeight: 900,
                }}
                sx={{ mx: 8, color: "white", display: "block", marginLeft: "auto", marginRight: "auto"}}
                variant="contained"
                onClick={NextProduct3}
              >
                Next
              </Button>

              <Button
                style={{
                  backgroundColor: "#E87461",
                  padding: "18px 36px",
                  fontSize: 30,
                  fontWeight: 900,
                }}
                sx={{ mx: 8, color: "white", display: "block", marginLeft: "auto", marginRight: "auto"}}
                variant="contained"
                onClick={handleCloseNavMenu}
                component={NavLink}
                to="/projectOrion"
              >
                Learn More
              </Button>
            </div>
          </div>
        }

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
