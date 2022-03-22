import React, { useState } from "react";
import '../styles/NavBar.css';

// Images
import Logo from '../img/logo.png';
import Dropdown from '../svg/dropdown.svg';

const NavBar = () => {
    
    return (
        <div>
            <div className="nav-wrapper">
                <div className="nav-content">
                    <img src={Logo} />
                    <img className="dropdown" src={Dropdown} />
                </div>
            </div>
            <div className="sidebar-nav-wrapper">
                <nav>
                    <button className="sidebar-button">Mijn bord</button>
                    <button className="sidebar-button">Mijn Profiel</button>
                    <button className="sidebar-button">MVO wegwijzer</button>
                </nav>
            </div>
        </div>
    );
}

export default NavBar;