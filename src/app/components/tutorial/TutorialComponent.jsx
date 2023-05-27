import React from "react"
import "./TutorialStyles.css"
import MountainCycling from "./img/mountaincycling.jpg"
import Cards from "./img/cards.jpg"
import Group from "./img/group.jpg"
import Watches from "./img/watches.jpg"
import LinkedinLogo from "./img/LinkedinLogo.png"
import instagramLogo from "./img/instagramLogo.png"
import twitterLogo from "./img/twitterLogo.png"

export default function OurTeamComponent() {
  return(

    <div>
      <div className="TutorialContent">
      <h1> HOW TO PARTICIPATE IN OUR PLATFORM</h1>
      <div className="CyclingImage"><img style ={{width: 1903, height: 998}} img src={MountainCycling} alt="Cyclist in Mountains"/></div>
      </div>
      <div className="TutorialContent2">
        <h1>BECOME A MEMBER</h1>
        <h2>
          Become a member today and join a community of thousands while <br/> receiving the latest news and updates along with limited offers and <br/> opportunities.
        </h2>
        <div className="CardsImage"><img style ={{width: 900, height: 642}} img src={Cards} alt="Cards"/></div>

        <h3>JOIN THE PROJECT</h3>
        <h2>
          We are welcoming to any and all with a passion for revolutionising <br/> the fitness industry and the gaming industry.
        </h2>
        <div className="GroupImage"><img style ={{width: 900, height: 600}} img src={Group} alt="Group of People"/></div>

        <h4>BUY A PRODUCT</h4>
        <h5>
          If getting fit while having fun sounds like a good idea <br/>to you then pick up some of our products before<br/> they're gone.
        </h5>
        <div className="WatchesImage"><img style ={{width: 900, height: 506}} img src={Watches} alt="Watches"/></div>
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
