import React from "react";
import  "./AboutUsStyles.css"
import barbell from "./img/barbell.png"
import deadlift from "./img/deadlift.png"
import gym from "./img/gym.png"
import biking from "./img/biking.png"
import data from "../../../../src/assets/project.json"

export default function AboutUsComponent() {
  return <div className="about-us">
    <img className="about-us-banner-img" src={barbell}></img>
    <div className="about-us-title"><h2>ABOUT US</h2> <p>Redback Operations aims to harness the power of IoT, AI and 3D game worlds to push your exercise routine into the future.</p></div>
    <div>
      {data.about.map((aboutUs)=> {
                if (aboutUs.number % 2 == 0)
                  return <div key={data.about.number} className="about-us-container">
                    <img className="about-us-img" src={require(`./img/${aboutUs.img}`)} alt ="Image not found"/>
                    <p>Project {aboutUs.description}</p>
                  </div>
                return <div key={data.about.number} className="about-us-container">
                  <p>Project {aboutUs.description}</p> 
                  <img className="about-us-img" src={require(`./img/${aboutUs.img}`)} alt ="Image not found" />
                </div>
            })}
    </div>
    <div className="about-us-footer" >
      {data.aboutFooter.map((footer)=> {
        return <p key={data.aboutFooter.number}> {footer.description} </p>
      })}
    </div>
  </div>;  
}
