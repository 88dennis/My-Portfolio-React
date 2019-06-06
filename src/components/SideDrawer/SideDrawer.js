import React from 'react';
import './SideDrawer.css';

const sideDrawer = props => {
    let drawerClasses = 'sidedrawer';
    if(props.show) {
        drawerClasses = 'sidedrawer open';
    }
    return (
    <nav className={drawerClasses}>
    <div>{props.children}</div>
    </nav>
);
}

export default sideDrawer;