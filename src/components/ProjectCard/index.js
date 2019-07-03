import React from "react";
import "./style.css";
// import { Link } from "react-router-dom";


function ProjectCard(props) {
  return (
    <div className="card">
    
    <div className="imgcontainerwrap">
      <div className="img-container fade">
        <button className="projectbtn"><a href={props.directProjectLink} target="_blank" rel="noopener noreferrer"><img className="projectimg" alt={props.name} src={props.image} /></a></button>
      </div>
      </div>

      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.name}
          </li>

          <li>
            <button onClick={() => props.projectLinkBtnHandler(props.id)}>Project Info</button>
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
