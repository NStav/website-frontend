import React from "react";
import  "./dailySummaryStyle.css"
import run_video from "./img/RUN.png"
import deadlift from "./img/deadlift.png"
import gym from "./img/gym.png"
import biking from "./img/biking.png"

export default function DailySummaryComponent() {
  return <div className="ds">
    <div className="ds-title">
      <h2> Your Daily Report</h2> 
    </div>
    <img className="ds-banner-img" src={run_video}></img>
    <div className="ds-container">
      <div>
        <p>
        <h3>Exercise 1:</h3>
        </p>
        <br></br>
        <div className="loop" >
        <div className="para">
        <p>
          Time: 02/08/22
        </p>
        <p>
          DURATION: 36 mins
        </p>
        </div>        
        <div className="para">
        <p>
          Type: running
        </p>
        <p>
          Location: melbourne
        </p>
        </div>
        <p>
          Lorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the industry's
          standard dummy text ever since the 1500s, when an unknown 
          printer took a galley of type and
        </p>
        </div>
     
        <div className="loop" >
        <div className="para">
        <p>
          Time: 02/08/22
        </p>
        <p>
          DURATION: 36 mins
        </p>
        </div>        
        <div className="para">
        <p>
          Type: running
        </p>
        <p>
          Location: melbourne
        </p>
        </div>
        <p>
          Lorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the industry's
          standard dummy text ever since the 1500s, when an unknown 
          printer took a galley of type and
        </p>
        </div>

        <p>
        <h3>Exercise 2:</h3>
        </p>

        <div className="loop" >
        <div className="para">
        <p>
          Time: 02/08/22
        </p>
        <p>
          DURATION: 36 mins
        </p>
        </div>        
        <div className="para">
        <p>
          Type: running
        </p>
        <p>
          Location: melbourne
        </p>
        </div>
        <p>
          Lorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the industry's
          standard dummy text ever since the 1500s, when an unknown 
          printer took a galley of type and
        </p>
        </div>
      </div>
    </div>
  </div>;
}
