import { useState, useEffect } from 'react';

import '../../asset/css/loader/style.css';
import '../../asset/css/loader/media.css';
import '../../asset/css/loader/dark-style.css';

import adobeIcon from '../../asset/img/loader/adobe.png';
import cursorIcon from '../../asset/img/loader/cursor.png';
import loadIcon from '../../asset/img/loader/load.png';

import faviconLightTheme from '../../asset/img/header/portfolio_logo.png';

const Loader = () => {

    /* Déclaration du tableau de texte */
    var texts = [
        "Lecture des préférences...",
        "Recherche des modules externes...",
        "Recherche des paramètres prédéfinis...",
        "Initialisation des outils...",
        "Initialisation...",
        "Initialisation de l'extensibilité universelle...",
        "Initialisation des composants partagés...",
        "Initialisation d'AXE...",
        "Chargement de la palette...",
        "Recherche de [...]...",
        "Lecture des paramètres de couleurs...",
        "Création des tables de conversion des couleurs...",
        "Lecture des pinceaux...",
        "Démarrage des modules externes...<br> SP Substance Suite",
    ];

    //Balise texte à modifier
    var [loadertext, setLoaderText] = useState(texts[0]);
    //Case du tableau de textes a afficher
    var i = 0;

    var maxTime = 2200;

    const changeCursor = () => {

    }

    const unchangeCursor = () => {

    }

    let [containerIsVisible, setContainerIsVisible] = useState(false);

    useEffect(() => {
        setContainerIsVisible(true);
        setTimeout(() => {
            setContainerIsVisible(false);
        }, maxTime);
      }, []);

    return (
        <>
            <div id="background"></div>
            <div id="container" className={ containerIsVisible ? 'visible' : '' } onMouseOver={ changeCursor } onMouseOut={ unchangeCursor }>
                <div id="left">
                    <div id="title">
                        <img draggable="false" src={ faviconLightTheme } alt="PortFolio" />
                        <h1>Adobe Portfolio</h1>
                    </div>
                    <div id="loader">
                    </div>
                    <div id="text">
                        <div className="abovetext">
                            <p className="highfontweight">© 1990 - 2022 Adobe. All rights reserved.</p>
                            <p className="highfontweight">Illustration de Flore Marquin</p>
                            <p className="lowfontweight">Illustration inspirée par le seigneur des anneaux : Les anneaux de pouvoirs. "Pour obtenir plus de détails et des informations juridiques, rendez vous sur l'écran.</p>
                            <p id="toChange" className="highfontweight">{ loadertext }</p>
                        </div>
                        <div className="undertext">

                        </div>
                        <p id="underChange" className="lowfontweight2">Russel Williams, Thomas Knoll, John Knoll, Mark Hamburg, Jackie Lincoln-O w y ang, A lan Erickson, Sarah Kong, Jerry Harris, Mike Shaw, Thomas Ruark, Yukie Takahashi, David Dobish, John Peterson, Adam Jerugim, Yuko Kagita, Foster Brereton, Meredith Payne Stotzner, Tai Luxon, Vinod Balakrishnan, David Hackel, Eric Floch, Judy Lee, Kevin Hopps, Barkin Aygun, Shanmugh Natarajan, Vishal Wadhwa, Pulkit Jindal, Quynn Megan Le, Stephen Nielson, Bob Archer, Kavana Anand, Chad Rolfs, Charles F. Rose III, Kamal Arora, Joel Baer, Metthew Neldam, Jacob Correia, Pulkit Mehta, Jesper S. Bache, Eric C hing, Dustin Passofaro, Sagar Pathak, Irina Maderych, Praveen Gelra, Vasanth Pai, Zijun Wei, Nithesh Gangadhar Salian</p>
                    </div>
                    <div id="logo">
                        <img draggable="false" src={ adobeIcon } alt="Adobe" />
                        <p>Adobe Creative Cloud</p>
                    </div>
                </div>
                <div id="right">
                    <div id="img">
                        <img draggable="false" src={ loadIcon } alt="Adobe Portfolio" />
                    </div>
                    <div id="logomedia">
                        <img draggable="false" src={ adobeIcon } alt="Adobe" />
                        <p>Adobe Creative Cloud</p>
                    </div>
                </div>
            </div>
            <div id="cursor">
                <div className="point p0"></div>
                <div className="point p1"></div>
                <div className="point p2"></div>
                <div className="point p3"></div>
                <div className="point p4"></div>
                <div className="point p5"></div>
            </div>
        </>
    );
}

export default Loader;