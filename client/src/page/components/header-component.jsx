import '../../asset/css/header/style.scss';
import '../../asset/css/header/dark-style.scss';
import '../../asset/css/media/header/style.scss';

import { NavLink } from 'react-router-dom';
import { ManageThemes } from '../../functions/manageThemes';

const switchImages = (images, darkImages, states) => {
    switch (ManageThemes.isDarkTheme) {
        case true:
            for (let i = 0; i < states.length; i++) {
                states[i](darkImages[i]);
            }
            break;
        case false:
            for (let i = 0; i < states.length; i++) {
                states[i](images[i]);
            }
        default:
            break;
    }
}

const HeaderComponent = (props) => {

    const changeTheme = () => {
        ManageThemes.toggleThemes();
        switchImages(props.images, props.darkImages, props.states);
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
                        <button className="mode-button" onClick={ changeTheme }></button>
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
                    <button className="mode-button" onClick={ changeTheme }></button>
                </ul>
            </nav>
        </header>
    );
}

export default HeaderComponent;