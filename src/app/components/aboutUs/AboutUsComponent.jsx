import React from "react";
import  "./AboutUsStyles.css"
import ManRunning from "./img/ManRunning.jpeg"
import Cyclist from "./img/cyclist.jpeg"
import Ali from "./img/Ali-Hassani.png"
import Kevin from "./img/Kevin-Lee.png"
import Imali from "./img/Imali-Dias.png"
import Emily from "./img/Emily-Chin.png"
import Will from "./img/William-Hebblewhite.png"
import Sharni from "./img/Sharni-Sujatha.png"
import Ray from "./img/Raymond-Corrigan.png"
import Akshat from "./img/Akshat-Arora.png"
import Mason from "./img/Mason-William-Allcorn.png"
import LinkedinLogo from "./img/LinkedinLogo.png"
import instagramLogo from "./img/instagramLogo.png"
import twitterLogo from "./img/twitterLogo.png"

export default function AboutUsComponent() {
  return (
    <div>
      <div className="AboutUsContent">
        <div className="AboutUs">
            <h1>ABOUT US</h1>
            <p>
              Redback Operations creates technology for linked health, fitness, and sport in order to promote safe smart action. It aspires to provide a competitive, community-driven,
              fitness and wellness gaming experience.
            </p>
            <img src={ManRunning} alt="Man Running"/>
        </div>
        <div className="DirectorsStudentContainer">
              <div className="GridStyle">
                  <h3 className="DirectorsHeading">Board of Directors</h3>
                  <div className="DirectorsMembers">
                      <div className="GridDirectors"><img src = {Mason}/><h2>Kevin Lee</h2></div>
                      <div className="GridDirectors"><img src = {Ali}/><h2>Ismali Dias</h2></div>
                  </div>
                  <h2 className="StudentHeading">Student Leaderships</h2>
                  <div className="StudentMembers">
                      <div className="GridStudents"> <h2>Cyber Team</h2>< img src = {Kevin}/><h2>Melvin Manoj<br/>Team Leader</h2></div>
                      <div className="GridStudents"> <h2>Data Science/AI Team</h2><img src = {Imali}/><h2>Mark Telly<br/>Team Leader</h2></div>
                      <div className="GridStudents"> <h2>Data Science/AI Team</h2><img src = {Emily}/><h2>Ella Zarandi<br/>Team Leader</h2></div>
                      <div className="GridStudents"> <h2>DevOps Team</h2><img src = {Will}/><h2>Arjodh Singh<br/>Team Leader</h2></div>
                      <div className="GridStudents"> <h2>Design Team</h2><img src = {Sharni}/><h2>Avinash Maruya<br/>Team Leader</h2></div>
                      <div className="GridStudents"> <h2>IoT Team</h2><img src = {Ray}/><h2>Ella Zarandi<br/>Team Leader</h2></div>
                      <div className="GridStudents"> <h2>Mobile Team</h2><img src = {Akshat}/><h2>The Tung Trong<br/>Team Leader</h2></div>
                      <div className="GridStudents"> <h2>VR Team</h2><img src = {Ali}/><h2>Hilal Irshad<br/>Team Leader <br/> <br/></h2></div>
                  </div>
              </div>
          </div>
          <div className="Cyclist">< img src={Cyclist} alt="Cyclist"/></div>
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
