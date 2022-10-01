import React from "react";
import  "./CyclingStyle.css"
import rectangle31 from "./img/rectangle31.png"
import rectangle37 from "./img/rectangle37.png"
import rectangle35 from "./img/rectangle35.png"
import rectangle38 from "./img/rectangle38.png"
import rectangle46 from "./img/rectangle46.png"
import rectangle47 from "./img/rectangle47.png"
import rectangle48 from "./img/rectangle48.png"

export default function CyclingComponent() {
  return <div className="container-center-horizontal">
  <form className="cycling-component" name="form2" action="form2" method="post">
    <div className="overlap-group10">
      <div className="overlap-group4">
        <img className="rectangle-31" src={rectangle31} alt="Rectangle 31" />
        <img className="rectangle-37" src={rectangle37} alt="Rectangle 37" />
        <div className="where-grit-meets-paradise-worksans-bold-white-64px"><h1 className="title">
      Where grit meets paradise
    </h1></div>
        <div className="rectangle-40"></div>
        <img className="rectangle-35" src={rectangle35} alt="Rectangle 35" />
      </div>
      <div className="community-worksans-bold-white-36px"><h1 className="community">
      COMMUNITY
    </h1></div>
    <div className="train-in-a-small-gro">
      TRAIN IN A SMALL GROUP SETTING, WITH AN EXTREMELY HOSPITABLE, FRIENDLY, AND LOCAL CYCLING COMMUNITY. THE SPIRIT OF THE RIDES ARE
      INCLUSIVE, THE STRONGEST RIDERS WILL SUPPORT ALL AGES AND ABILITIES EVEN IN THE MOST CHALLENGING MOMENTS.
    </div>
    </div>
    <div className="group-container">
      <div className="group-57">
        <div className="adventure worksans-bold-white-36px"><h1 className="title-adventure">
        ADVENTURE
      </h1></div>
      <div className="roll-through-small-a">
        ROLL THROUGH SMALL ARTISAN TOWNS, FILL YOUR BOTTLES FROM WATERFALLS&nbsp;&nbsp;CASCADING ON THE SIDE OF THE ROAD (YES ITS SAFE!),
        CLIMB THE INCREDIBLY STEEP WINDING JUNGLE ROADS AND DESCEND THROUGH THE CLOUDS BACK TO TOWN. THIS IS WHAT ADVENTURE FEELS LIKE ON
        TWO WHEELS.
      </div>
      </div>
      <div className="overlap-group5">
      <div className="rectangle-39"></div>
        <img className="rectangle-38" src={rectangle38} alt="Rectangle 38"/>
      </div>
    </div>
    <div className="overlap-group2">
      <div className="cycling-title"><h1 className="cycling-map">
      CYCLING MAP
    </h1></div>
      <div className="overlap-group-container">
        <div className="overlap-group9">
          <div className="overlap-group-2">
          </div>
          <img className="rectangle-4" src={rectangle46} alt="Rectangle 46" />
          <div className= "view"><button className="view_button">VIEW</button></div>
          <div className="line-name">
      LINE NAME
    </div>
        </div>
        <div className="overlap-group7">
          <img className="rectangle-4" src={rectangle47} alt="Rectangle 47" />
          <div className="line-name">LINE NAME</div>
        </div>
        <div className="overlap-group8">
          <img className="rectangle-4" src={rectangle48} alt="Rectangle 48" />
          <div className="line-name">LINE NAME</div>
        </div>
      </div>
    </div>
    <div className="overlap-group3">
      <div className="join-us-bodonimoda-bold-white-24px"><h1 className="title-join-us">
      JOIN US
    </h1></div>
      <div className="overlap-group6">
      <p className="join-the-mailing-list">
        JOIN THE MAILING LIST FOR THE LATEST UPDATES AND
      <br />
      TRIP DATES!
    </p>
      </div>
      <div className="enter_name_box">
        <form>
          <input type="text" placeholder="Enter Name" style={{width: "600px"}}/>
        </form>
      </div>
      <div className="enter_email_box">
        <form>
          <input type="text" placeholder="Enter Email" style={{width: "600px"}}/>
        </form>
      </div>
      <div className= "submit"><button className="submit_button">Submit</button></div>
    </div>
  </form>
</div>;
}
