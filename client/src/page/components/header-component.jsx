import '../../asset/css/header/style.css';
import '../../asset/css/header/dark-style.css';
import '../../asset/css/media/header/style.css';

import { NavLink } from 'react-router-dom';
import { ManageThemes } from '../../functions/theme';

const HeaderComponent = () => {
    const changeTheme = () => {
        console.log('Changing theme');
        ManageThemes.toggleThemes();
    }
    return (
        <header>
            <nav id="menu-container">
                <ul className="menu">
                    <NavLink to={"/"} className="menu-logo-container">
                        <div className="logo"></div>
                    </NavLink>
                    <li>
                        <NavLink className="sites s1" to={"/home"}>
                            <p id="text1">ACCUEIL</p>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className="sites s2" to={"/course"}>
                            <p id="text2">PARCOURS</p>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className="sites s3" to={"/perso"}>
                            <p id="text3">PERSO</p>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className="sites s4" to={"/contact"}>
                            <p id="text4">CONTACT</p>
                        </NavLink>
                    </li>
                    <div className="theme-form">
                        <button className="mode-button"></button>
                    </div>
                </ul>
                <ul className="mediamenu">
                    <NavLink to={"/"}>
                        <div className="logo"></div>
                    </NavLink>
                    <NavLink className="mediasites" id="receptionsite" to={"/home"}></NavLink>
                    <NavLink className="mediasites" id="coursesite" to={"/course"}></NavLink>
                    <NavLink className="mediasites" id="personalsite" to={"/perso"}></NavLink>
                    <NavLink className="mediasites" id="contactsite" to={"/contact"}></NavLink>
                    <button className="mode-button"></button>
                </ul>
            </nav>
        </header>
    );
}

export default HeaderComponent;