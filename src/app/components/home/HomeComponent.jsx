import React from "react"
import "./HomeStyles.css";
import Logo from "./img/Logo.png"
import cycle from "./img/cycleicon.png"
import controller from "./img/controllericon.png"
import phone from "./img/phoneicon.png"
import running from "./img/runningicon.png"
import VR from "./img/VRicon.png"
import LinkedinLogo from "./img/LinkedinLogo.png"
import instagramLogo from "./img/instagramLogo.png"
import twitterLogo from "./img/twitterLogo.png"

export default function HomepageComponent() {
  return (
    <div>
      <div className="HomeContent">
        <h1>WELCOME TO REDBACK OPERATIONS!</h1>
        <div className="RedbackLogo"><img style ={{width: 350}} img src = {Logo} alt="RedbackLogo"/></div>
        <div className="HomeBackgroundSunset">
        <div className="HomeProjectGrid">
            <div className="HomeProjectObject"><h1>Project 1</h1><p>Smart Bike Project</p><img style ={{width: 200}} img src = {cycle} alt="CyclingIcon"/></div>
            <div className="HomeProjectObject"><h1>Project 2</h1><p>Project Sun Cycle</p><img style ={{width: 200}} img src = {VR} alt="VRIcon"/></div>
            <div className="HomeProjectObject"><h1>Project 3</h1><p>Mobile App</p><img style ={{width: 200}} img src = {phone} alt="PhoneIcon"/></div>
            <div className="HomeProjectObject"><p>Running</p><img style ={{width: 200}} img src = {running} alt="RunningIcon"/></div>
            <div className="HomeProjectObject"><p>Cycling</p><img style ={{width: 200}} img src = {cycle} alt="CyclingaIcon"/></div>
            <div className="HomeProjectObject"><p>Sports</p><img style ={{width: 200}} img src = {controller} alt="ControllerIcon"/></div>
          </div>
        </div>
        <h2>Welcome to  our website where it shows what we are planning for the future related to exercising!</h2>
        <h3>Our Projects</h3>
        <div className="HomeProjectsContent">
          <div className="MissionBackground">
            <h4>MISSION</h4>
            <p>
              Our Mission is to make a Smart Bike which <br/> would transform your indoor cycling <br/> experience along with our very <br/> own interactive VR game and our 
              mobile app <br/> to bring theworld to you!
            </p>
          </div>
          <div className="VisionBackground">
            <h4>VISION</h4>
            <p>
              Redback Operations strives to give users a <br/> completely immersive experience where <br/> they may be involved with other <br/> users both casually and competitively
              <br/> through developing our very own IoT,<br/> VR and mobile app game.
            </p>
          </div>
          <div className="GoalsBackground">
            <h4>GOALS</h4>
            <p>
              Creates a vibrant, self-supporting online community. <br/> To offer cutting-edge IoT sensors and AI and to give <br/> user real-time performance feedback. <br/> Provide
              consumers the chance to explore <br/> completely immersive 3D worlds in the <br/> comfort of their own homes.
            </p>
          </div>
        </div>
      </div>
      <div className="Footer">
				<div className="FooterContent">
					<h1>Follow Us on Social Media</h1>
				  <div className="SocialImg"><img style ={{width: 35, height: 35}}img src={LinkedinLogo} alt="Redback LinkedIn" /> <p>LinkedIn</p></div>
          <div className="SocialImg"><img style ={{width: 35, height: 35}}img src={instagramLogo} alt="Redback Instagram" /> <p>Instagram</p></div>
          <div className="SocialImg"><img style ={{width: 35, height: 35}}img src={twitterLogo} alt="Redback Twitter" /> <p>Twitter</p></div>
					<p1> © 2023, Redback Operations </p1>
				</div>
			</div>
    </div>
  );
}
