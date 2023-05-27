import React from "react";
import "./OurProjectsStyles.css";
import "@fontsource/bodoni-moda";
import Logo from "./img/Logo.png"
import LinkedinLogo from "./img/LinkedinLogo.png"
import instagramLogo from "./img/instagramLogo.png"
import twitterLogo from "./img/twitterLogo.png"
export default function OurProjectComponent() {


	return (
		<div>
			
			<div className="LogoImg"><img style ={{width: 280, height: 280}} img src={Logo} alt="Redback Logo" /></div>
			<div className="OurProjectContent">
				<div className="BgSunCycle">
					<h1>Project Sun Cycle</h1>
					<p>
						Sun Cycle is a virtual reality game where the player rides a bike and completes a set of tasks. <br/> <br/>
						
						                                                             
					</p>
				</div>
				
				<div className="BgSmartBike">
				<h1>Smart Bike Project</h1>
				<p>
					Using a mobile application that is immersed in a Virtual environment, Smart Bike is a bicycle that is connected to the internet of things.
					it gathers data while providing the user with an entertaining atmosphere.
				</p>
				</div>

				<div className="BgMobileApp">
					<h1>Mobile App</h1>
					<p>
						An app that connects users to the fitness community, collects and stores data, and gives them access to a market where they may buy and sell things.
						The user can utilise the app while on the go and connect their exercise to it.
					</p>
				</div>

				<div className="BgFrontEnd">
					<h1>Project Web Development-Front end</h1>
					<p>
						To improve Redback's reputation and provide clients with high-quality, convienient, and affordable venue to assess their fitness. <br/> <br/>
						
					</p>
				</div>
				
				<div className = "BgGit">
					<h1>Git App Repository-Google Cloud</h1>
					<p>
						The primary goal is to transfer a GitHub repository's contents to the Google Cloud so that team members and the general public can access them. <br/> <br/>
					</p>
				</div>

				<div className="BgTableau">
					<h1>Tableau Dashboard</h1>
					<p>
						Create a dataset for a fitness tracker using Tableau, then describe the dashboard. Reflection and guidance or the Tableau dashboard. <br/> <br/>
					</p>
				</div>
					
				<div className="BgDesign">
					<h1>Workout Analysis Model and Design</h1>
					<p>
						Whether the user is exercising outside or utilising VR inside, both scenarios provide post-exercise data analysis of the workout. <br/> <br/>
					</p>
				</div>

				<div className="BgPosture">
					<h1>Posture Analysis</h1>
					<p>
						A user's posture should be taken into accoutn when determining whether their workout has any impact on their psychology or areodynamics. Thus, it is possible to 
						determine whether it has an impace on performance or speed.
					</p>
				</div>

				<div className="BgConsumption">
					<h1>Oxygen Consumption</h1>
					<p>
						The study's objective to predict how much oxygen the heart will consume without using expensive procedures. <br/> <br/>
					</p>
				</div>


				<div className="BgPrediction">
					<h1>Oxygen Uptake Prediction</h1>
					<p>
						Using machine learning to assess wearable data throughout everyday activities, oxygen uptake patterns are predicted. <br/> <br/>
					</p>
				</div>

				<div className="BgMobile">
					<h1>Mobile Application Fixes</h1>
					<p>
						The objective is to construct an application extension for the marketplace with a placeholder greyscale design that corrects the abnormalities. <br/> <br/>
					</p>
				</div>

				<div className="BgWebDesign">
					<h1>Website Design Project</h1>
					<p>
						The goal of this project is to redesign the website in a way that is useful and aesthetically pleasant. <br/> <br/>
					</p>
				</div>

				<div className="BgSecurity">
					<h1>Cyber Security Team</h1>
					<p>
						This project aims to demonstrate the creation of a reusable Compute Engine image, an IAM service account, the installation and configuration of the Google Cloud
						Engine (GCE) plugin, and the execution of a job (such as the development of a Redback frontend project) on a Jenkins server.
					</p>
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
