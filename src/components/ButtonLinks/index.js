import React from 'react';
import './style.css';
import iconHome from '../../images/cookie.png';
import iconLinkedIn from '../../images/linkedin-icon-8.png';
import iconGitHub from '../../images/githublogo.png';
import { Link } from "react-router-dom";


const buttonLinks = props => (
    <div className="buttonLinksWrap">
<div className="buttonLinksCont">

{/* <header className="buttonLinksHeader"><h1>{props.profilegreet}</h1></header> */}
<section className="buttonLinksContent">
{props.children}

<button className="buttonLinksbtn"><Link to="/usermainpage">
<img className="iconsimg" src={iconHome} alt="cookie.png" /></Link></button>

<button className="buttonLinksbtn"><a href="https://www.linkedin.com/in/dennissarmiento80/" target="_blank" rel="noopener noreferrer">
<img className="iconsimg" src={iconLinkedIn} alt="linkedin-icon-8.png" /></a></button>

<button className="buttonLinksbtn"><a href="https://github.com/88dennis" target="_blank" rel="noopener noreferrer">
<img className="iconsimg" src={iconGitHub} alt="linkedin-icon-8.png" /></a></button>

{/* <button className="resumebtn" onClick={props.modalResumeClick}>
Resume</button> */}

<a href="https://drive.google.com/file/d/1RMwCk935e4n3OCbdthJvm2Nvea0vSsWK/view" target="_blank" rel="noopener noreferrer"><button className="resumebtn">Resume</button></a>


</section>

{/* <section className="buttonLinksBtn">
{props.goBack &&<button onClick={props.onGoBack}>Go Back</button>}
{props.logOut &&<button><a href="/">LOG OUT</a></button>}
</section> */}

</div>
</div>
)

export default buttonLinks