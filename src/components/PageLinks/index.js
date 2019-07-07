import React from 'react';
import './style.css';
import { Link } from "react-router-dom";

const pagelinks = props => (
  <section>
    <Link to="/homepage"><div className={window.location.pathname === "/homepage" ? "listDiv now" : "listDiv notnow"} onClick={props.backToSamePage}>
        Home</div></Link>

        <Link to="/profilepage" onClick={props.backToSamePage}><div className={window.location.pathname === "/profilepage" ? "listDiv now" : "listDiv notnow"} onClick={props.backToSamePage}>
      @dennis Profile</div></Link>

      <Link to="/resumepage"><div className={window.location.pathname === "/resumepage" ? "listDiv now" : "listDiv notnow"} onClick={props.backToSamePage}>
      Resume </div></Link>

        <Link to="/projectspage" onClick={props.backToSamePage}><div className={window.location.pathname === "/projectspage" ? "listDiv now" : "listDiv notnow"} onClick={props.backToSamePage}>
      Projects </div></Link>

        <Link to="/gamespage" onClick={props.backToSamePage}><div className={window.location.pathname === "/gamespage" ? "listDiv now" : "listDiv notnow"} onClick={props.backToSamePage}>
      Games </div></Link>

    <Link to="/settingspage"><div className={window.location.pathname === "/settingspage" ? "listDiv now" : "listDiv notnow"} onClick={props.backToSamePage}>
      Settings </div></Link>

      <Link to="/testpage"><div className={window.location.pathname === "/testpage" ? "listDiv now" : "listDiv notnow"} onClick={props.backToSamePage}>
      Test Page </div></Link>

      <Link to="/gethelppage"><div className={window.location.pathname === "/gethelppage" ? "listDiv now" : "listDiv notnow"} onClick={props.backToSamePage}>
      Get Help </div></Link>

  </section>
)

export default pagelinks