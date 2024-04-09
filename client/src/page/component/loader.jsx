import { useContext, useState, useEffect, useRef } from 'react';

import { animateImageLoading } from '../../function/animate-image-loading';

import loaderContext from '../../function/context/loader-context';

import languageContext from '../../function/context/language-context';

import { ManageThemes } from '../../object/manage-themes';

import '../../asset/css/loader/style.scss';
import '../../asset/css/loader/media.scss';
import '../../asset/css/loader/dark-style.scss';

import adobeIcon from '../../asset/img/loader/adobe.png';
import loadIcon from '../../asset/img/loader/load.png';

import faviconLightTheme from '../../asset/img/header/portfolio_logo.png';
import faviconDarkTheme from '../../asset/img/header/dark-theme/dark_portfolio_logo.png';

const Loader = () => {

    const {setWasLoaderShowed} = useContext(loaderContext);
    const [isLoading, setIsLoading] = useState(true);

    const { language } = useContext(languageContext);

    const points = [
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null)
    ];

    const cursor = useRef(null);

    /* Déclaration du tableau de texte */
    const texts = language.loader.texts;

    //Balise texte à modifier
    const [textIndex, setTextIndex] = useState(0);

    const maxTime = 2300;
    const timeToAppearTexts = 200;


    const textDuration = parseInt((maxTime + timeToAppearTexts) / ( texts.length ));

    const [containerIsVisible, setContainerIsVisible] = useState(false);
    const [theme, setTheme] = useState();

    const disappearBackgroundTime = maxTime/1.5;
    const [isBackgroundVisible, setIsBackgroundVisible] = useState(true);

    const imagesToLoad = useRef([]);
    useEffect(() => {

        animateImageLoading(imagesToLoad.current);

        document.body.classList.add('no-scroll');

        setTimeout(() => {
            let intervalText = setInterval(() => {
                if (texts.length - 1 === textIndex) {
                    console.log(texts.length - 1, textIndex);
                    clearInterval(intervalText);
                } else {
                    setTextIndex(i => i + 1);
                }
            }, textDuration);
        }, timeToAppearTexts);

        // Animer le curseur
        let cursorIndex = 1;
        let intervalCursor = setInterval(() => {
            let index = (cursorIndex)%6;
            let previousIndex = (cursorIndex-1)%6;

            points[index].current.classList.add('loading');
            points[previousIndex].current.classList.remove('loading');

            cursorIndex++;
        }, 100);

        setTimeout(() => {
            setIsBackgroundVisible(false);
        }, disappearBackgroundTime);

        setTimeout(() => {
            setContainerIsVisible(false);
        }, maxTime - 300);

        setTimeout(() => {
            clearInterval(intervalCursor);
            setIsLoading(false);
            setWasLoaderShowed(true);
            document.removeEventListener("mousemove", followCursor);
            document.body.classList.remove('no-scroll');
        }, maxTime);

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
    }, []);

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
                                <img draggable="false" src={ theme } ref={ (img) => ( imagesToLoad.current.push(img) ) } alt="PortFolio" />
                                <h1>Adobe Portfolio</h1>
                            </div>
                            <div id="loader">
                            </div>
                            <div id="text">
                                <div className="abovetext">
                                    <p className="highfontweight">© 1990 - 2022 Adobe. All rights reserved.</p>
                                    <p className="highfontweight">{ language.loader.illustration_creator }</p>
                                    <p className="lowfontweight">{ language.loader.illustration_inspiration }</p>
                                    <p id="toChange" className="highfontweight">{ texts[textIndex] }</p>
                                </div>
                                <div className="undertext">
                                </div>
                                <p id="underChange" className="lowfontweight2">Russel Williams, Thomas Knoll, John Knoll, Mark Hamburg, Jackie Lincoln-O w y ang, A lan Erickson, Sarah Kong, Jerry Harris, Mike Shaw, Thomas Ruark, Yukie Takahashi, David Dobish, John Peterson, Adam Jerugim, Yuko Kagita, Foster Brereton, Meredith Payne Stotzner, Tai Luxon, Vinod Balakrishnan, David Hackel, Eric Floch, Judy Lee, Kevin Hopps, Barkin Aygun, Shanmugh Natarajan, Vishal Wadhwa, Pulkit Jindal, Quynn Megan Le, Stephen Nielson, Bob Archer, Kavana Anand, Chad Rolfs, Charles F. Rose III, Kamal Arora, Joel Baer, Metthew Neldam, Jacob Correia, Pulkit Mehta, Jesper S. Bache, Eric C hing, Dustin Passofaro, Sagar Pathak, Irina Maderych, Praveen Gelra, Vasanth Pai, Zijun Wei, Nithesh Gangadhar Salian</p>
                            </div>
                            <div id="logo">
                                <img draggable="false" src={ adobeIcon } ref={ (img) => ( imagesToLoad.current.push(img) ) } alt="Adobe" />
                                <p>Adobe Creative Cloud</p>
                            </div>
                        </div>
                        <div id="right">
                            <div id="img">
                                <img draggable="false" src={ loadIcon } ref={ (img) => ( imagesToLoad.current.push(img) ) } alt="Adobe Portfolio" />
                            </div>
                            <div id="logomedia">
                                <img draggable="false" ref={ (img) => ( imagesToLoad.current.push(img) ) } src={ adobeIcon } alt="Adobe" />
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