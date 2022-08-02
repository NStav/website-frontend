import React from "react";
import "./OurProjectsStyles.css";
import "@fontsource/bodoni-moda";
import { ProjectContent } from "./ProjectContent";
import projectDetail from "../../../assets/project.json";

export default function OurProjectComponent() {
	const { projects, leaders } = projectDetail;
	return (
		<div>
			<div className="Content">
				<div className="InfoContent">
					<h1>{projects[0].name}</h1>
					<p>{projects[0].description}</p>
				</div>
				<div className="ImgDisplay">
					<div className="Rectangle1"></div>
					<div className="HeadsetImg"></div>
				</div>
			</div>
			<div className="Content1">
				<div className="Img2"></div>
				<div className="ProjectDetail1">
					<p>{projects[1].description}</p>
					<br></br>
					<p>{projects[2].description}</p>
					<br></br>
					<p>{projects[3].description}</p>
					<br></br>
					<p>{projects[4].description}</p>
				</div>
			</div>

			<ProjectContent />
		</div>
	);
}
