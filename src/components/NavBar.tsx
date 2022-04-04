import React, {useEffect, useState} from "react";
import { CSSTransition }  from 'react-transition-group';
import '../styles/NavBar.css';

// Images
import Logo from '../img/logo.png';
import Dropdown from '../svg/dropdown.svg';
import Close from '../svg/close.svg';
import {Link} from "react-router-dom";
import {supabase} from "../supabaseClient";
import {Session} from "@supabase/supabase-js";

const NavBar = () => {
    const [showSideBar, setShowSideBar] = React.useState(false);
    const changeShowSideBar = () => setShowSideBar(!showSideBar);
    const [session, setSession] = useState<Session | null>(null)

    useEffect(() => {
        setSession(supabase.auth.session())

        supabase.auth.onAuthStateChange((_event, session) => {
            setSession(session);
        });
    }, []);

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
                            {session ?
                                <Link to="/account"><button className="sidebar-button">Mijn Profiel</button></Link> :
                                <Link to="/auth"><button className="sidebar-button">Sign in</button></Link>
                            }
                        </div>
                        <div>
                            <Link to="/"><button className="sidebar-button">Mijn bord</button></Link>
                        </div>
                        <a href="https://www.stimular.nl/doe-het-zelf/mvo/wegwijzer-mvo/"><button className="sidebar-button">MVO wegwijzer</button></a>
                        <div className="mvo-links-wrapper">
                            <div className="mvo-links-content">
                                <a href="https://www.stimular.nl/doe-het-zelf/mvo/wegwijzer-mvo/focus-bepalen-mvo/">Focus bepalen</a>
                                <a href="https://www.stimular.nl/doe-het-zelf/mvo/wegwijzer-mvo/mvo-doelen-stellen/">MVO-doelen stellen</a>
                                <a href="https://www.stimular.nl/doe-het-zelf/mvo/wegwijzer-mvo/maatregelen-mvo/">Maatregelen uitvoeren</a>
                                <a href="https://www.stimular.nl/doe-het-zelf/mvo/wegwijzer-mvo/monitoren-mvo/">Monitoren van de voortgang</a>
                                <a href="https://www.stimular.nl/doe-het-zelf/mvo/wegwijzer-mvo/communiceren-mvo/">Communiceren over MVO</a>
                            </div>
                        </div>
                    </nav>
                </div>
            </CSSTransition>
        </div>
    );
}

export default NavBar;