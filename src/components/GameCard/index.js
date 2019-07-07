import React from "react";
// import "./style.css";
// import { Link } from "react-router-dom";


function ProjectCard(props) {
  return (
    <div className="card">
    
    <div className="imgcontainerwrap">
      <div className="img-container fade">
        <button className="projectbtn"><a href={props.directgameLink} target="_blank" rel="noopener noreferrer"><img className="projectimg" alt={props.name} src={props.image} /></a></button>
      </div>
      </div>

      <div className="content">
        <ul>
          <li className="projectNameList">
          Name: <strong>{props.name}</strong> 
          </li>

          <li className="btnlinksholder">
          <button className="projectInfoBtn" onClick={() => props.gameLinkBtnHandler(props.id)}>App Info</button>
          <button className="gitHubBtnProjects"><a href={props.directGitHubLink} target="_blank" rel="noopener noreferrer"><img className="githubimg" alt={props.name} src={props.gitimage} /></a></button>
          </li>

        </ul>

      </div>
      {/* <span onClick={() => props.projectLinkBtnHandler(props.id)} className="remove">
        ?
      </span> */}
 
    </div>
  );
}



export default ProjectCard;
