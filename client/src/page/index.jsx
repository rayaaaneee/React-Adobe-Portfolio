import React, { useContext, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useTypewriter } from 'react-simple-typewriter';

import '../asset/css/index/appearence.scss';
import '../asset/css/index/dark-style.scss';
import '../asset/css/index/style.scss';
import '../asset/css/media/index/style.scss';

import faviconDarkTheme from '../asset/img/favicon/favicon-dark-theme.png';

import CV from '../asset/file/CV.pdf';

import { ManageBody } from '../object/manage-body';
import { ManageThemes } from '../object/manage-themes';

import loaderContext from '../function/context/loader-context';

const Index = () => {

    const { setWasLoaderShowed } = useContext(loaderContext);

    useEffect(() => {
            setWasLoaderShowed(false);
        }
    );

    ManageBody.changeClass('index');

    const setTheme = (theme) => {
        ManageThemes.set(theme);
    }

    useEffect(() => {
        document.title = 'Adobe Portfolio';
    });

    const textTab = [
        "Rayane Merlin", 
        "Full Stack Developper", 
        "Designer", 
        "IT Student (BAC +3)"
    ];

    const [textTypeWriter] = useTypewriter({
        words: textTab,
        loop: true,
        typeSpeed: 100,
        deleteSpeed: 200,
    });

    let [menuClass, setMenuClass] = useState(''); 
    const toggleMenuClass = () => {
        if (menuClass === '') {
            setMenuClass('active');
        } else {
            setMenuClass('');
        }
        toggleChecked();
    }

    let [imgMenuClass, setImgMenuClass] = useState('dl-img');
    let [checked, setChecked] = useState(false);

    const toggleChecked = () => {
        setChecked(!checked);
    }

    const colorMenuImg = () => {
        setImgMenuClass('dl-img-hover');
    }

    const uncolorMenuImg = () => {
        setImgMenuClass('dl-img');
    }

    return (
        <>
            <header>
                <div className="triangle border-triangle header-triangle"></div>
                <div className="background-container">
                    <div className="triangle triangle-red"></div>
                    <div className="triangle triangle-orange"></div>
                    <div className="triangle triangle-yellow"></div>
                    <div className="circle circle-one"></div>
                    <div className="circle circle-two"></div>
                </div>
                <nav className="menu basic-menu">
                    <div className="logo">
                        <img src={ faviconDarkTheme } alt="logo" draggable="false" />
                    </div>
                    <ul className={ `menu-links ${menuClass}` }>
                        <li><NavLink to={'/home'}>Accueil</NavLink></li>
                        <li><NavLink to={'/course'}>Parcours</NavLink></li>
                        <li><NavLink to={'/perso'}>Perso</NavLink></li>
                        <li><NavLink to={'/contact'}>Contact</NavLink></li>
                        <li className="cv-download">
                            <a href={ CV } download="CV_Rayane_Merlin.pdf" onMouseOver={ colorMenuImg } onMouseLeave={ uncolorMenuImg }>
                                <div className="container-cv-download">
                                    <p>C</p>
                                    <p>V</p>
                                    <div className="download-img dl-img"></div>
                                </div>
                            </a>
                        </li>
                        <div className={ 'hide-links ' + (checked ? 'disabled' : '') }></div>
                    </ul>
                    <div className="hamburger-container" onClick={ toggleMenuClass }>
                        <input type="checkbox" id="hamburger-checkbox" checked={ checked } />
                        <div className="hamburger-bar top-bar"></div>
                        <div className="hamburger-bar middle-bar"></div>
                        <div className="hamburger-bar bottom-bar"></div>
                    </div>
                </nav>
                <NavLink to={'/home'} className="get-start">Découvrir</NavLink>
            </header>
            <main>
                <div className="container">
                    <div className="title">
                        <h1>Adobe Portfolio</h1>
                        <div className="main-bar"></div>
                        <div className="subtitle">
                            <h2>{ textTypeWriter }</h2>{/*  Texte dynamique  */}
                            <div className="vertical-bar"></div>
                        </div>
                    </div>
                </div>
            </main>
            <footer>
                <div className="btn-switch-mode">
                    <div className="media-dark-theme-form" onClick={ () => setTheme('dark') }>
                        <button className="dark-mode-button"/>
                    </div>
                    <div className="media-light-theme-form" onClick={ () => setTheme('light') }>
                        <button className="dark-mode-button"/>
                    </div>
                </div>
                <div className="triangle border-triangle footer-triangle"></div>
                <NavLink to={'/about'} className="about-page">
                    <p>Crédits</p>
                </NavLink>
                <ul className="footer-links">
                    <li title="Linked In">
                        <a className="linkedin-link" href="https://www.linkedin.com/in/rayanemerlin/" target="_blank">
                        </a>
                    </li>
                    <li title="School Gitlab">
                        <a className="gitlab-link" href="https://forge.univ-lyon1.fr/p2103994" target="_blank">
                        </a>
                    </li>
                    <li title="Personal Github">
                        <a className="github-link" href="https://github.com/rayaaaneee" target="_blank">
                        </a>
                    </li>
                    <li title="Mail">
                        <a className="mail-link" href="mailto:rayane.merlin8@gmail.com">
                        </a>
                    </li>
                    <li title="Phone">
                        <a className="tel-link" href="tel:+33768283277">
                        </a>
                    </li>
                </ul>
            </footer>
        </>
    );
}

export default Index;