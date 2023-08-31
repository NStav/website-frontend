import { NavLink } from "react-router-dom";
import React, { useContext } from "react";
import Button from "@mui/material/Button";
import  "./CommunityStyles.css"
import Graphic from "./img/GraphicTemp.PNG"

export default function CommunityComponent() {

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };




  return (
    <div>
      <div className="CommunityContent">
        <h1>
          Community Page
        </h1>
        <p>
          Welcome......
        </p>
        <div className="Buttons1">

          <div className="Buttons1Spacing"> 
            <Button
                style={{
                  backgroundColor: "black",
                  padding: "18px 36px",
                  fontSize: 35,
                  fontWeight: 900,
                }}
                variant="contained"
                onClick={handleCloseNavMenu}
                exact
                component={NavLink}
                to="/community"
              >
                Channels
            </Button>
          </div>
          <div className="Buttons1Spacing">
            <Button
              style={{
                backgroundColor: "black",
                padding: "18px 36px",
                fontSize: 35,
                fontWeight: 900,
              }}
              
              variant="contained"
              onClick={handleCloseNavMenu}
              exact
              component={NavLink}
              to="/community"
            >
              Messages 
            </Button>
          </div>
          <div>
          <Button
              style={{
                
                backgroundColor: "black",
                padding: "18px 36px",
                fontSize: 35,
                fontWeight: 900,
                
              }}
              variant="contained"
              onClick={handleCloseNavMenu}
              exact
              component={NavLink}
              to="/community"
            >
              Members
            </Button>
          </div>
        </div>

        <div className="Buttons2">
          <div className="Buttons2Spacing">
            <Button
              style={{
                backgroundColor: "#E87461",
                padding: "18px 36px",
                fontSize: 30,
                fontWeight: 900,
              }}
              
              variant="contained"
              onClick={handleCloseNavMenu}
              exact
              component={NavLink}
              to="/community"
            >
              Your Daily Summary
            </Button>
          </div>
          <div className="Button2Spacing2">
            <Button
              style={{
                
                backgroundColor: "#E87461",
                padding: "18px 36px",
                fontSize: 30,
                fontWeight: 900,
                
              }}
              
              variant="contained"
              onClick={handleCloseNavMenu}
              exact
              component={NavLink}
              to="/exerciseEveryday"
            >
              The Exercise Guide
            </Button>
          </div>
        </div>

        <div className="Buttons3">
        <Button
              style={{
                backgroundColor: "#E87461",
                fontSize: 30,
                fontWeight: 900,
                width: 400,
                height: 90,
              }}
              
              variant="contained"
              onClick={handleCloseNavMenu}
              exact
              component={NavLink}
              to="/tutorial"
            >
              The Tutorial Page
            </Button>
        </div>
              <h2> Our Platform</h2>
              <h3>We are the world leading platform that provides users:</h3>
              <div className="StatsGrid">
                  <div className="StatsGridObject"> <h1>4556</h1><h2>Daily Active Users</h2></div>
                  <div className="StatsGridObject"> <h1>35 hrs</h1><h2>Average Time Spent</h2></div>
                  <div className="StatsGridObject"> <h1>36</h1><h2>Scheduled Classes</h2></div>
                  <div className="StatsGridObject"> <h1>12</h1><h2>Ranking</h2></div>
              </div>
      </div>
      <div className="CommunityContent2">
        <h1>Quick Access To</h1>
        <div className="Graphic"><img src={Graphic} alt="Graphic"/></div>
        <h2>7 days user goal <br/> completion progress</h2>
        <div className="Button4">
          <Button
              style={{
                backgroundColor: "#E87461",
                padding: "18px 36px",
                fontSize: 28,
                fontWeight: 900,
                fontStyle: "normal",
                width: 380,
                height: 90,
                marginLeft: 100
              }}
              
              variant="contained"
              onClick={handleCloseNavMenu}
              exact
              component={NavLink}
              to="/community"
            >
              Cycling
            </Button>
        </div>
      </div> 
    </div>
  );
}
