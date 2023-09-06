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
        <img src={MountainCycling} alt="Cyclist in Mountains"/>
      </div>
      <div className="TutorialContent2">
        <div className="BecomeMember"> 
          <h1>BECOME A MEMBER</h1>
          <p>
            Become a member today and join a community of thousands while receiving the latest news and updates along with limited offers and opportunities.
            <img src={Cards} alt="Cards"/>
          </p>
        </div>
        
        <div className="JoinProject">
          <h1>JOIN THE PROJECT</h1>
          <p>
            <img src={Group} alt="Group of People"/>
            We are welcoming to any and all with a passion for revolutionising the fitness industry and the gaming industry.
          </p>
        </div>

        <div className="BuyProduct">
          <h1>BUY A PRODUCT</h1>
          <p>
            If getting fit while having fun sounds like a good idea to you then pick up some of our products before they're gone.
            <img src={Watches} alt="Watches"/>
          </p>
        </div>
      </div>
      
      <div className="Footer">
				<div className="FooterContent">
					<h1>Follow Us on Social Media</h1>
				  <div className="SocialImg"><p><img src={LinkedinLogo} alt="Redback LinkedIn"/>LinkedIn</p></div>
          <div className="SocialImg"><p><img src={instagramLogo} alt="Redback Instagram"/>Instagram</p></div>
          <div className="SocialImg"><p><img src={twitterLogo} alt="Redback Twitter"/>Twitter</p></div>
					<h2> © 2023, Redback Operations </h2>
				</div>
      </div>
    </div>
  );
}
