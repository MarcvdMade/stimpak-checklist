import React from "react";
import { CSSTransition }  from 'react-transition-group';
import '../styles/NavBar.css';

// Images
import Logo from '../img/logo.png';
import Dropdown from '../svg/dropdown.svg';
import Close from '../svg/close.svg';

const NavBar = () => {
    const [showSideBar, setShowSideBar] = React.useState(false);
    const changeShowSideBar = () => setShowSideBar(!showSideBar)

    return (
        <div>
            <div className="nav-wrapper">
                <div className="nav-content">
                    <img src={Logo} alt="stimular logo"/>
                    <img className="dropdown" src={Dropdown} alt="hamburger menu" onClick={changeShowSideBar} />
                </div>
            </div>
            <CSSTransition
                in={showSideBar}
                classNames="sidebar"
                timeout={200}
            >
                <div className="sidebar-nav-wrapper">
                    <img className="close" onClick={changeShowSideBar} src={Close} alt="close menu" />
                    <nav>
                        <div>
                            <button className="sidebar-button">Mijn Profiel</button>
                        </div>
                        <button className="sidebar-button">Mijn bord</button>
                        <button className="sidebar-button">MVO wegwijzer</button>
                    </nav>
                </div>
            </CSSTransition>
        </div>
    );
}

export default NavBar;