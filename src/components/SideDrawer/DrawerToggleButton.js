import React from 'react'
import "./DrawerToggleButton.css";

const drawerToggleButton = props => (
        
<button className="togglebtnclass"  onClick={props.click}>
    <div className="togglebtnline" />
    <div className="togglebtnline" />
    <div className="togglebtnline" />
</button>
);

export default drawerToggleButton