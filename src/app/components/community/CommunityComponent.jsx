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
        <div className="Buttons2">
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
                  <div className="Column1"> 
                  4566
                  </div>
                  <div className="Column2"> 
                  35 hrs
                  </div>
                  <div className="Column3"> 
                  36
                  </div>
                  <div className="Column4"> 
                  12
                  </div>
                  <div className="Row2"> 
                  Daily Active Users
                  </div>
                  <div className="Row2"> 
                  Average Time Spent
                  </div>
                  <div className="Row2"> 
                  Scheduled Classes
                  </div>
                  <div className="Row2"> 
                  Ranking
                  </div>
              </div>
      </div>
      <div className="CommunityContent2">
        <h1>Quick Access To</h1>
        <div className="Graphic"><img style ={{width: 815, height: 505}} img src={Graphic} alt="Graphic"/></div>
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
