import React, { useContext, useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useTypewriter } from 'react-simple-typewriter';

import '../asset/css/index/appearence.scss';
import '../asset/css/index/dark-style.scss';
import '../asset/css/index/style.scss';
import '../asset/css/media/index/style.scss';

import faviconDarkTheme from '../asset/img/favicon/favicon-dark-theme.png';

import CV from '../asset/file/CV.pdf';

import { ManageBody } from '../object/manage-body';
import { ManageWebsiteLanguages } from '../object/manage-website-languages';

import loaderContext from '../function/context/loader-context';
import themeContext from '../function/context/theme-context';
import languageContext from '../function/context/language-context';

const Index = () => {

    const { setWasLoaderShowed } = useContext(loaderContext);

    const { setIsDarkTheme } = useContext(themeContext);

    const { language, setLanguage } = useContext(languageContext);

    useEffect(() => (setWasLoaderShowed(false)));

    const selectLanguageOptions = useRef(null);

    ManageBody.changeClass('index');

    const setTheme = (isDarkTheme) => {
        switch (isDarkTheme) {
            case false:
            default:
                setIsDarkTheme(false);
                break;
            case true:
                setIsDarkTheme(true);
                break;
        }
    }

    useEffect(() => {
        document.title = language.index.title;
    });

    const textTab = language.index.description;

    const [textTypeWriter] = useTypewriter({
        words: textTab,
        loop: true,
        typeSpeed: 100,
        deleteSpeed: 50,
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

    useEffect(() => {
        const handleClick = (e) => {
            if (
                (selectLanguageOptions.current.classList.contains('active'))
                && 
                (selectLanguageOptions.current.closest(".select-language") !== e.target)
                &&
                (!(selectLanguageOptions.current.closest(".select-language").contains(e.target))) 
            ) {
                selectLanguageOptions.current.classList.remove('active');
            }
        };

        window.addEventListener('click', handleClick);

        // Nettoyer l'effet
        return () => {
            window.removeEventListener('click', handleClick);
        };
    }, []); 

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
                    <div className='left-top-angular'>
                        <div className="logo">
                            <img src={ faviconDarkTheme } alt="logo" draggable="false" />
                        </div>
                        <div className='select-language'>
                            <div className='choice' onClick={ (e) => { selectLanguageOptions.current.classList.toggle("active")} }>
                                <img src={ require('../asset/img/index/flags/' + language.flag_img) }></img>
                                <p>{ language.denomination }</p>
                                <svg
                                  viewBox="0 0 24 24"
                                  fill="currentColor"
                                  height="1em"
                                  width="1em"
                                >
                                  <path d="M11.178 19.569a.998.998 0 001.644 0l9-13A.999.999 0 0021 5H3a1.002 1.002 0 00-.822 1.569l9 13z" />
                                </svg>
                                <div className="options-wrapper">
                                    <div className='options' ref={ selectLanguageOptions }>
                                    { ManageWebsiteLanguages.supportedLanguages.map(
                                        ([name, json]) => {
                                            return name !== language.current && 
                                            (<div className='option' onClick={ (e) => {
                                                ManageWebsiteLanguages.setLanguage(name);
                                                setLanguage(json);
                                            } }>
                                                <img src={ require('../asset/img/index/flags/' + json.flag_img) }></img>
                                                <p>{ json.denomination }</p>
                                            </div>)
                                        }) 
                                    }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <ul className={ `menu-links ${menuClass}` } style={{ pointerEvents: checked ? 'all' : 'none' }}>
                        <li>
                            <NavLink to={'/home'}>{ language.menu.home }</NavLink>
                        </li>
                        <li>
                            <NavLink to={'/background'}>{ language.menu.background }</NavLink>
                        </li>
                        <li>
                            <NavLink to={'/myself'}>{ language.menu.myself }</NavLink>
                        </li>
                        <li>
                            <NavLink to={'/contact'}>{ language.menu.contact }</NavLink>
                        </li>
                        <li className="cv-download">
                            <a href={ CV } download="CV_Rayane_Merlin.pdf" onMouseOver={ colorMenuImg } onMouseLeave={ uncolorMenuImg }>
                                <div className="container-cv-download">
                                    <p>C</p>
                                    <p>V</p>
                                    <div className="download-img dl-img"></div>
                                </div>
                            </a>
                        </li>
                    </ul>
                    <div className="hamburger-container" onClick={ toggleMenuClass }>
                        <input type="checkbox" id="hamburger-checkbox" checked={ checked } />
                        <div className="hamburger-bar top-bar"></div>
                        <div className="hamburger-bar middle-bar"></div>
                        <div className="hamburger-bar bottom-bar"></div>
                    </div>
                </nav>
                <NavLink to={'/home'} className="get-start">{ language.index.discover }</NavLink>
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
                    <div className="media-dark-theme-form" onClick={ () => setTheme(true) }>
                        <button className="dark-mode-button"/>
                    </div>
                    <div className="media-light-theme-form" onClick={ () => setTheme(false) }>
                        <button className="dark-mode-button"/>
                    </div>
                </div>
                <div className="triangle border-triangle footer-triangle"></div>
                <NavLink to={'/about'} className="about-page">
                    <p>{ language.index.credentials }</p>
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