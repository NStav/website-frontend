import React from "react";
import  "./dailySummaryStyle.css"
import run_video from "./img/RUN.png"
import deadlift from "./img/deadlift.png"
import gym from "./img/gym.png"
import biking from "./img/biking.png"

export default function DailySummaryComponent() {
  return <div className="tutorial">
    <div className="tutorial-title">
      <h2>HOW TO PARTICIPATE IN OUR PLATFORM</h2> 
    </div>
    <img className="tutorial-banner-img" src={run_video}></img>
    <div className="tutorial-container">

      <div className="tutorial-container-1">
        <p>
        <h3>BECOME A MEMBER</h3>
        Roll through small artisan towns, fill your 
        bottles from waterfalls  cascading on the side of the road (yes its safe!), climb the incredibly steep winding 
        jungle roads and descend through the clouds back to town. This is what adventure feels like on two wheels.
        </p>
        <img src={deadlift} className="tutorial-img1"></img>
      </div>

      <div className="tutorial-container-1">
        <img src={gym} className="tutorial-img"></img>
        <p>
        <h3>JOIN THE PROJECT</h3>
        Getting back to the true you. It can be that simple. 
        Yoga offers up a way for us to see a world that is working for you instead of against you. 
        </p>
      </div>

      <div className="tutorial-container-1">
        <p>
        <h3>BUY THE PRODUCT</h3>
        Roll through small artisan towns, fill your 
        bottles from waterfalls  cascading on the side of the road (yes its safe!), climb the incredibly steep winding 
        jungle roads and descend through the clouds back to town. This is what adventure feels like on two wheels.
        </p>
        <img src={biking} className="tutorial-img"></img>
      </div>

    </div>
       <p>
       <h3>FAQ</h3>
       </p>
    <p className="tutorial-footer">
       <h4>Title 1:XXXXXXX</h4>
       Roll through small artisan towns, fill your 
        bottles from waterfalls  cascading on the side of the road (yes its safe!), climb the incredibly steep winding 
        jungle roads and descend through the clouds back to town. This is what adventure feels like on two wheels.
        <h4>Title 1:XXXXXXX</h4>
        <h4>Title 1:XXXXXXX</h4>
        <h4>Title 1:XXXXXXX</h4>
        <h4>Title 1:XXXXXXX</h4>
    </p>
  </div>;
}
