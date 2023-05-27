import React from "react"
import "./ExerciseEverydayStyles.css"
import cycling from "./img/Cycling.png"
import running from "./img/Running.png"
import yoga from "./img/Yoga.png"
import esports from "./img/E-Sports.png"
import sun from "./img/sun.PNG"
import maps from "./img/maps.PNG"
import tent from "./img/tent.PNG"
import LinkedinLogo from "./img/LinkedinLogo.png"
import instagramLogo from "./img/instagramLogo.png"
import twitterLogo from "./img/twitterLogo.png"

export default function ExerciseEverydayComponent() {
  return(
    <div>
      <div className="ExerciseBackground">
        <div className="ExerciseTitleContent">
          <div>
            <h1>EXERCISE</h1>
            <h2>EVERY DAY</h2>
          </div>
        </div>
        <div className="IconGrid">
          <div className="IconObject"><img style ={{width: 120}}img src = {running} alt="RunningIcon"/><p>Running</p></div>
          <div className="IconObject"><img style ={{width: 115}}img src = {yoga} alt="YogaIcon"/><p>Yoga</p></div>
          <div className="IconObject"><img style ={{width: 120}}img src = {cycling} alt="CyclingIcon"/><p>Cycling</p></div>
          <div className="IconObject"><img style ={{width: 150}}img src = {esports} alt="ESportsIcon"/><p>E-Sports</p></div>
        </div>
        <div className="ExerciseContent">
          <div className="RunningContainer">
            <h1>RUNNING</h1>
            <p>
              Redback Operations builds cutting-edge technologies for connected health,<br/> fitness and sport to enable smart exercise. It is focused on providing a<br/>
              community-driven exercise and well-being gaming experience with<br/> competitive elements.
            </p>
          </div>
          <div className="YogaContainer">
            <h1>YOGA</h1>
            <p>
              Redback Operations builds cutting-edge technologies for connected health,<br/> fitness and sport to enable smart exercise. It is focused on providing a<br/>
              community-driven exercise and well-being gaming experience with<br/> competitive elements.
            </p>
          </div>
          <div className="CyclingContainer">
            <h1>CYCLING</h1>
            <p>
              Redback Operations builds cutting-edge technologies for connected health,<br/> fitness and sport to enable smart exercise. It is focused on providing a<br/>
              community-driven exercise and well-being gaming experience with<br/> competitive elements.
            </p>
          </div>
          <div className="E-SportsContainer">
            <h1>E-SPORTS</h1>
            <p>
              Redback Operations builds cutting-edge technologies for connected health,<br/> fitness and sport to enable smart exercise. It is focused on providing a<br/>
              community-driven exercise and well-being gaming experience with<br/> competitive elements.
            </p>
          </div>
        </div>
        <div className="ProjectsTitle">
          <h1>Some of Our Projects</h1>
        </div>
        <div className="ProjectGrid">
          <div className="ProjectObject"><h1>Project 1</h1><p>Project Sun Cycle</p><img style ={{width: 300}} img src = {sun} alt="RunningIcon"/></div>
          <div className="ProjectObject"><h1>Project 2</h1><p>Run With the Drawing</p><img style ={{width: 300}} img src = {maps} alt="YogaIcon"/></div>
          <div className="ProjectObject"><h1>Project 3</h1><p>Camp Exercise Simulator</p><img style ={{width: 300}} img src = {tent} alt="CyclingIcon"/></div>
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
