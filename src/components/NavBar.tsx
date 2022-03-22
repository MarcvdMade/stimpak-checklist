import React from "react";
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
            <div className="side-nav-wrapper">
                <nav>
                    <p>Mijn board</p>
                    <p>Mijn profiel</p>
                    <p>MVO wegwijzer</p>
                </nav>
            </div>
        </div>
    );
}

export default NavBar;