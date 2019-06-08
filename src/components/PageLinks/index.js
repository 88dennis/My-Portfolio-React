import React from 'react';
import './style.css';
import { Link } from "react-router-dom";

const pagelinks = props => (
  <section>
    <Link to="/usermainpage"><div className={window.location.pathname === "/usermainpage" ? "listDiv now" : "listDiv notnow"} onClick={props.backToSamePage}>
        Home</div></Link>

        <Link to="/searchpeoplepage" onClick={props.backToSamePage}><div className={window.location.pathname === "/searchpeoplepage" ? "listDiv now" : "listDiv notnow"} onClick={props.backToSamePage}>
      Search People </div></Link>

      <Link to="/notificationspage" onClick={props.backToSamePage}><div className={window.location.pathname === "/notificationspage" ? "listDiv now" : "listDiv notnow"} onClick={props.backToSamePage}>
      Notifications </div></Link>

    <Link to="/profilepage" onClick={props.backToSamePage}><div className={window.location.pathname === "/profilepage" ? "listDiv now" : "listDiv notnow"} onClick={props.backToSamePage}>
      Profile</div></Link>

      <Link to="/transactionhistorypage" onClick={props.backToSamePage}><div className={window.location.pathname === "/transactionhistorypage" ? "listDiv now" : "listDiv notnow"} onClick={props.backToSamePage}>
      Transaction History</div></Link>

    <Link to="/settingspage"><div className={window.location.pathname === "/settingspage" ? "listDiv now" : "listDiv notnow"} onClick={props.backToSamePage}>
      Settings </div></Link>

      <Link to="/testpage"><div className={window.location.pathname === "/testpage" ? "listDiv now" : "listDiv notnow"} onClick={props.backToSamePage}>
      Test Page </div></Link>

      <Link to="/gethelppage"><div className={window.location.pathname === "/gethelppage" ? "listDiv now" : "listDiv notnow"} onClick={props.backToSamePage}>
      Get Help </div></Link>


  </section>
)

export default pagelinks