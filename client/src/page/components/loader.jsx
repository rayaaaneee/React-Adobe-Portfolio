import { useContext, useState, useEffect, useRef } from 'react';
import { ManageThemes } from '../../functions/manageThemes';
import { animateImageLoading } from '../../functions/animateImageLoading';
import loaderContext from '../../functions/loaderContext';

import '../../asset/css/loader/style.scss';
import '../../asset/css/loader/media.scss';
import '../../asset/css/loader/dark-style.scss';

import adobeIcon from '../../asset/img/loader/adobe.png';
import loadIcon from '../../asset/img/loader/load.png';

import faviconLightTheme from '../../asset/img/header/portfolio_logo.png';
import faviconDarkTheme from '../../asset/img/header/dark-theme/dark_portfolio_logo.png';

const Loader = () => {

    const {wasLoaderShowed, setWasLoaderShowed} = useContext(loaderContext);
    var [isLoading, setIsLoading] = useState(true);

    var points = [
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null)
    ];

    var cursor = useRef(null);

    /* Déclaration du tableau de texte */
    var texts = [
        "Lecture des préférences...",
        "Initialisation des outils...",
        "Chargement de la palette...",
        "Création des tables de conversion des couleurs...",
        "Lecture des pinceaux...",
        "Chargement .",
        "Chargement . .",
        "Chargement . . .",
    ];

    //Balise texte à modifier
    var [textIndex, setTextIndex] = useState(0);

    var maxTime = 2000;

    let textDuration = parseInt(maxTime / ( texts.length ));

    let [containerIsVisible, setContainerIsVisible] = useState(false);
    let [theme, setTheme] = useState();

    const disappearBackgroundTime = maxTime/1.5;
    let [isBackgroundVisible, setIsBackgroundVisible] = useState(true);

    useEffect(() => {

        animateImageLoading();

        document.body.classList.add('no-scroll');

        setTimeout(() => {
            let textIndexTmp = 0;
            let intervalText = setInterval(() => {
                if (texts.length === textIndexTmp) {
                    clearInterval(intervalText);
                } else {
                    setTextIndex(textIndexTmp + 1);
                    textIndexTmp++;
                }
            }, textDuration);
        }, 200);

        // Animer le curseur
        let cursorIndex = 0;
        let intervalCursor = setInterval(() => {
            let index = (cursorIndex)%6;
            let previousIndex = (cursorIndex-1)%6;

            if (previousIndex === -1) {
                previousIndex = 5;
            }

            points[index].current.classList.add('loading');
            points[previousIndex].current.classList.remove('loading');

            cursorIndex++;
        }, 100);

        setTimeout(() => {
            setIsBackgroundVisible(false);
        }, disappearBackgroundTime);

        setTimeout(() => {
            setContainerIsVisible(false);
        }, maxTime);

        setTimeout(() => {
            clearInterval(intervalCursor);
            setIsLoading(false);
            setWasLoaderShowed(true);
            document.removeEventListener("mousemove", followCursor);
            document.body.classList.remove('no-scroll');
        }, maxTime + 300);

        setContainerIsVisible(true);

        switch (ManageThemes.getThemeName()) {
            case 'dark':
                setTheme(faviconDarkTheme);
                break;
            case 'light':
            default:
                setTheme(faviconLightTheme);
                break;
        }

        document.addEventListener("mousemove", followCursor);

        return () => {
            clearInterval(intervalCursor);
        }
    },[]);

    const followCursor = (e) => {
        cursor.current && (cursor.current.style.left = e.clientX-47+ "px");
        cursor.current && (cursor.current.style.top = e.clientY-28+"px");
    };

    const changeCursor = () => {
        cursor.current && (cursor.current.classList.add('visible'));
    }

    const unchangeCursor = () => {
        cursor.current && (cursor.current.classList.remove('visible'));
    }

    return (
        <>
            { isLoading ? (
                <main id='loaderContainer' style={{ zIndex: containerIsVisible ? "10000" : "-1" }}>
                    <div id="background" className={ isBackgroundVisible ? 'visible' : '' }></div>
                    <div id="container" className={ containerIsVisible ? 'visible' : 'hidden' } onMouseOver={ changeCursor } onMouseOut={ unchangeCursor }>
                        <div id="left">
                            <div id="title">
                                <img draggable="false" src={ theme } className='onloading' alt="PortFolio" />
                                <h1>Adobe Portfolio</h1>
                            </div>
                            <div id="loader">
                            </div>
                            <div id="text">
                                <div className="abovetext">
                                    <p className="highfontweight">© 1990 - 2022 Adobe. All rights reserved.</p>
                                    <p className="highfontweight">Illustration de Flore Marquin</p>
                                    <p className="lowfontweight">Illustration inspirée par le seigneur des anneaux : Les anneaux de pouvoirs. "Pour obtenir plus de détails et des informations juridiques, rendez vous sur l'écran.</p>
                                    <p id="toChange" className="highfontweight">{ texts[textIndex] }</p>
                                </div>
                                <div className="undertext">
                                </div>
                                <p id="underChange" className="lowfontweight2">Russel Williams, Thomas Knoll, John Knoll, Mark Hamburg, Jackie Lincoln-O w y ang, A lan Erickson, Sarah Kong, Jerry Harris, Mike Shaw, Thomas Ruark, Yukie Takahashi, David Dobish, John Peterson, Adam Jerugim, Yuko Kagita, Foster Brereton, Meredith Payne Stotzner, Tai Luxon, Vinod Balakrishnan, David Hackel, Eric Floch, Judy Lee, Kevin Hopps, Barkin Aygun, Shanmugh Natarajan, Vishal Wadhwa, Pulkit Jindal, Quynn Megan Le, Stephen Nielson, Bob Archer, Kavana Anand, Chad Rolfs, Charles F. Rose III, Kamal Arora, Joel Baer, Metthew Neldam, Jacob Correia, Pulkit Mehta, Jesper S. Bache, Eric C hing, Dustin Passofaro, Sagar Pathak, Irina Maderych, Praveen Gelra, Vasanth Pai, Zijun Wei, Nithesh Gangadhar Salian</p>
                            </div>
                            <div id="logo">
                                <img draggable="false" src={ adobeIcon } className='onloading' alt="Adobe" />
                                <p>Adobe Creative Cloud</p>
                            </div>
                        </div>
                        <div id="right">
                            <div id="img">
                                <img draggable="false" src={ loadIcon } className='onloading' alt="Adobe Portfolio" />
                            </div>
                            <div id="logomedia">
                                <img draggable="false" className='onloading' src={ adobeIcon } alt="Adobe" />
                                <p>Adobe Creative Cloud</p>
                            </div>
                        </div>
                    </div>
                    <div id="cursor" ref={cursor}>
                        <div ref={points[0]} className="point p0"></div>
                        <div ref={points[1]} className="point p1"></div>
                        <div ref={points[2]} className="point p2"></div>
                        <div ref={points[3]} className="point p3"></div>
                        <div ref={points[4]} className="point p4"></div>
                        <div ref={points[5]} className="point p5"></div>
                    </div>
                </main>
                ) :
                <></> 
            }
        </>
    );
}
export default Loader;