import React from 'react'
import Container from "@mui/material/Container";
import "./OurProjectsStyles.css";
import "@fontsource/bodoni-moda";
import projectDetail from "../../../assets/project.json";
export const ProjectContent = () => {
    const { projects, leaders } = projectDetail;
	console.log("projectes : ", projects);
	console.log("leaders : ", leaders);
	console.log("pro1", projects[0].name);

    const Name = projects.map(project=>{
        if(project.number === 4){
           return  <div>
                <div className='grid-project'><p> Project {project.number} : {project.name}</p></div>
                <div className='grid-description'><p className='c-text'> {project.description}</p><p className='c-img4'><img src={require('../../../assets/basketball.png')} alt=""/><div className='content4-label'></div></p></div>
            </div>
        }
        if(project.number === 5){
            return  <div>
                <div className='label'></div>
                 <div className='grid-project'><p> Project {project.number} : {project.name}</p></div>
                 <div className='grid-description'><p className='c-text'> {project.description}</p></div>
             </div>
         }
         if(project.number === 9){
            return  <div>
                 <div className='grid-project'><p> Project {project.number} : {project.name}</p></div>
                 <div className='grid-description'><p className='c-text'> {project.description}</p><p className='c-img5'><img src={require('../../../assets/gymnast.png')} alt=""/><div className='content5-label'></div></p></div>
             </div>
         }
         if(project.number === 12){
            return  <div>
                <div className='label2'></div>
                 <div className='grid-project'><p> Project {project.number} : {project.name}</p></div>
                 <div className='grid-description'><p className='c-text'> {project.description}</p></div>
             </div>
         }
        return (
            <div>
                <div className='grid-project'><p> Project {project.number} : {project.name}</p></div>
                <div className='grid-description'><p className='c-text'> {project.description}</p></div>
            </div>
        )
    })
  return (
    
    <div className='Project-Content-Container'>
        <div className='ProjectContent'>{Name}</div>
    </div>
  )
}
