import React, { useEffect } from 'react';

import '../asset/css/index/appearence.css';
import '../asset/css/index/dark-style.css';
import '../asset/css/index/style.css';

import '../asset/css/media/index/style.css';

import faviconDarkTheme from '../asset/img/favicon/favicon-dark-theme.png';
import whiteFavicon from '../asset/img/favicon/favicon-light-theme.png';

import CV from '../asset/file/CV.pdf';

import Poppins from '../asset/font/Poppins/Poppins.woff2';
import Poppins2 from '../asset/font/Poppins/Poppins2.woff2';
import Poppins3 from '../asset/font/Poppins/Poppins3.woff2';

const title = 'Adobe Portfolio';

const Index = () => {

    useEffect(() => {
        document.title = title;
    });

    return (
        <>
            <header>
                <div class="triangle border-triangle header-triangle"></div>
                <div class="background-container">
                    <div class="triangle triangle-red"></div>
                    <div class="triangle triangle-orange"></div>
                    <div class="triangle triangle-yellow"></div>
                    <div class="circle circle-one"></div>
                    <div class="circle circle-two"></div>
                </div>
                <nav class="menu basic-menu">
                    <div class="logo">
                        <img src={ faviconDarkTheme } alt="logo" draggable="false" />
                    </div>
                    <ul class="menu-links">
                        <li><a href="./?page=home">Accueil</a></li>
                        <li><a href="./?page=course">Parcours</a></li>
                        <li><a href="./?page=perso">Perso</a></li>
                        <li><a href="./?page=contact">Contact</a></li>
                        <li class="cv-download">
                            <a href={ CV } download="CV_Rayane_Merlin.pdf" onmouseover="colorMenuImg();" onmouseleave="uncolorMenuImg();">
                                <div class="container-cv-download">
                                    <p>C</p>
                                    <p>V</p>
                                    <div class="download-img dl-img"></div>
                                </div>
                            </a>
                        </li>
                        <div class="hide-links"></div>
                    </ul>
                    <div class="hamburger-container" onclick="check(this);toggleMenuClass();">
                        <input type="checkbox" id="hamburger-checkbox" />
                        <div class="hamburger-bar top-bar"></div>
                        <div class="hamburger-bar middle-bar"></div>
                        <div class="hamburger-bar bottom-bar"></div>
                    </div>
                </nav>
                <a href="./?page=home" class="get-start">Découvrir</a>
            </header>
            <main>
                <div class="container">
                    <div class="title">
                        <h1>Adobe Portfolio</h1>
                        <div class="main-bar"></div>
                        <div class="subtitle">
                            <h2>Rayane Merlin</h2>{/*  Texte dynamique  */}
                            <div class="vertical-bar"></div>
                        </div>
                    </div>
                </div>
            </main>
            <footer>
                <div class="btn-switch-mode">
                    <div class="media-dark-theme-form">
                        <button class="dark-mode-button"/>
                    </div>
                    <div class="media-light-theme-form">
                        <button class="dark-mode-button"/>
                    </div>
                </div>
                <div class="triangle border-triangle footer-triangle"></div>
                <a href="./?page=about" class="about-page">
                    <p>Crédits</p>
                </a>
                <ul class="footer-links">
                    <li title="Linked In">
                        <a class="linkedin-link" href="https://www.linkedin.com/in/rayanemerlin/" target="_blank">
                        </a>
                    </li>
                    <li title="School Gitlab">
                        <a class="gitlab-link" href="https://forge.univ-lyon1.fr/p2103994" target="_blank">
                        </a>
                    </li>
                    <li title="Personal Github">
                        <a class="github-link" href="https://github.com/rayaaaneee" target="_blank">
                        </a>
                    </li>
                    <li title="Mail">
                        <a class="mail-link" href="mailto:rayane.merlin8@gmail.com">
                        </a>
                    </li>
                    <li title="Phone">
                        <a class="tel-link" href="tel:+33768283277">
                        </a>
                    </li>
                </ul>
            </footer>
        </>
    );
}

export default Index;