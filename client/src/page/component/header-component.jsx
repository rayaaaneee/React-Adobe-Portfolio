import { useContext } from 'react';
import { NavLink } from 'react-router-dom';

import '../../asset/css/header/style.scss';
import '../../asset/css/header/dark-style.scss';
import '../../asset/css/media/header/style.scss';

import themeContext from '../../function/context/theme-context';

import languageContext from '../../function/context/language-context';

const HeaderComponent = () => {

    const { isDarkTheme, setIsDarkTheme } = useContext(themeContext);

    const changeTheme = () => {
        setIsDarkTheme(!isDarkTheme);
    }

    const { language } = useContext(languageContext);

    return (
        <header>
            <nav id="menu-container">
                <ul className="menu">
                    <NavLink to={"/"} className="menu-logo-container">
                        <div className="logo"></div>
                    </NavLink>
                    <li>
                        <NavLink className="sites s1" to={"/home"}>
                            <p id="text1">{ language.menu.home }</p>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className="sites s2" to={"/background"}>
                            <p id="text2">{ language.menu.background }</p>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className="sites s3" to={"/myself"}>
                            <p id="text3">{ language.menu.myself }</p>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className="sites s4" to={"/contact"}>
                            <p id="text4">{ language.menu.contact }</p>
                        </NavLink>
                    </li>
                    <div className="theme-form">
                        <button className="mode-button" onClick={ changeTheme }></button>
                    </div>
                </ul>
                <ul className="mediamenu">
                    <NavLink to={"/"}>
                        <div className="logo"></div>
                    </NavLink>
                    <NavLink className="mediasites" id="receptionsite" to={"/home"}></NavLink>
                    <NavLink className="mediasites" id="backgroundsite" to={"/background"}></NavLink>
                    <NavLink className="mediasites" id="personalsite" to={"/perso"}></NavLink>
                    <NavLink className="mediasites" id="contactsite" to={"/contact"}></NavLink>
                    <button className="mode-button" onClick={ changeTheme }></button>
                </ul>
            </nav>
        </header>
    );
}

export default HeaderComponent;