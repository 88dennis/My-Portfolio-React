import React from 'react';
import "./style.css";
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import logo from '../../images/DS3.png';
// import drawerToggle from "./components/SideDrawer/DrawerToggleButton.js";
// import { Link } from "react-router-dom";

const toolbar = props => (
<header className="toolbar">
    <nav className = "toolbarnav">
    <div>
        <DrawerToggleButton  click = {props.drawerClickHandler}/>
        </div>
        
        {/* <div className="toolbarlogo"><a className="alinks" href="/">{props.navtitle}</a></div> */}
        <div className="toolbarlogo"><h1>{props.navtitle}</h1></div>
        
        <div className="spacer" />

        {/* <div className="toolbarnavitems">{props.children}
        </div> */}

        <div className="toolbarlogo"><img className="toolbarlogoimg" src={logo} alt="Logo"  onClick = {props.modalInfoClikHandler}/></div>
    </nav>
</header>
);

export default toolbar