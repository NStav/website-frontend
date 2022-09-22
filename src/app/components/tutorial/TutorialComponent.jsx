import React from "react";
import  "./tutorialStyle.css"
import run_video from "./img/RUN.png"
import deadlift from "./img/deadlift.png"
import gym from "./img/gym.png"
import biking from "./img/biking.png"

export default function TutorialComponent() {
  return <div className="tutorial">
    <div className="tutorial-title">
      <h2>HOW TO PARTICIPATE IN OUR PLATFORM</h2> 
    </div>
    <img className="tutorial-banner-img" src={run_video}></img>
    <div className="tutorial-container">

      <div className="tutorial-container-1">
        <p>
        <h3>BECOME A MEMBER</h3>
        Lorem Ipsum is simply dummy text of the printing and
         typesetting industry. Lorem Ipsum has been the industry's standard dummy 
        text ever since the 1500s, when an unknown printer took a galley of type and
        </p>
        <img src={deadlift} className="tutorial-img1"></img>
      </div>

      <div className="tutorial-container-1">
        <img src={gym} className="tutorial-img"></img>
        <p>
        <h3>JOIN THE PROJECT</h3>
        Lorem Ipsum is simply dummy text of the printing and
         typesetting industry. Lorem Ipsum has been the industry's standard dummy 
        text ever since the 1500s, when an unknown printer took a galley of type and
        </p>
      </div>

      <div className="tutorial-container-1">
        <p>
        <h3>BUY THE PRODUCT</h3>
        Lorem Ipsum is simply dummy text of the printing and
         typesetting industry. Lorem Ipsum has been the industry's standard dummy 
        text ever since the 1500s, when an unknown printer took a galley of type and
        </p>
        <img src={biking} className="tutorial-img"></img>
      </div>

    </div>
       <p className="faq">
       <h3>FAQ</h3>
       </p>
    <p className="tutorial-footer">
       <h4>Title 1:XXXXXXX</h4>
        Lorem Ipsum is simply dummy text of the printing and
         typesetting industry. Lorem Ipsum has been the industry's standard dummy 
        text ever since the 1500s, when an unknown printer took a galley of type and
        <h4>Title 1:XXXXXXX</h4>
        <h4>Title 1:XXXXXXX</h4>
        <h4>Title 1:XXXXXXX</h4>
        <h4>Title 1:XXXXXXX</h4>
    </p>
  </div>;
}
