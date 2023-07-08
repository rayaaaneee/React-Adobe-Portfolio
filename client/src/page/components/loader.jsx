import { useState, useEffect } from 'react';
import { ManageThemes } from '../../functions/theme';

import '../../asset/css/loader/style.css';
import '../../asset/css/loader/media.css';
import '../../asset/css/loader/dark-style.css';

import adobeIcon from '../../asset/img/loader/adobe.png';
import loadIcon from '../../asset/img/loader/load.png';

import faviconLightTheme from '../../asset/img/header/portfolio_logo.png';
import faviconDarkTheme from '../../asset/img/header/dark-theme/dark_portfolio_logo.png';

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
        "Démarrage des modules externes...",
        "SP Substance Suite",
    ];

    //Balise texte à modifier
    var [textIndex, setTextIndex] = useState(0);

    //Case du tableau de textes a afficher
    var i = 0;

    var maxTime = 2200;

    let textDuration = parseInt(maxTime / ( texts.length ));

    let [containerIsVisible, setContainerIsVisible] = useState(false);
    let [theme, setTheme] = useState();

    useEffect(() => {

        setContainerIsVisible(true);
        setTimeout(() => {
            setContainerIsVisible(false);
        }, maxTime);

        switch (ManageThemes.isDarkTheme) {
            case true:
                setTheme(faviconDarkTheme);
                break;
            case false:
                setTheme(faviconLightTheme);
                break;
        }
    }, []);

    useEffect(() =>{
        let intervalText = setInterval(() => {
            if (texts.length === textIndex) {
                clearInterval(intervalText);
            } else {
                setTextIndex(textIndex + 1);
            }
        }, textDuration);

        return () => {
            clearInterval(intervalText);
        }
    });

    const disappearBackgroundTime = maxTime/1.5;
    let [isBackgroundVisible, setBackgroundVisible] = useState(true);

    setTimeout(() => {
        setBackgroundVisible(false);
    }, disappearBackgroundTime);

    var interval = null;

    const changeCursor = () => {
        document.querySelectorAll(".point:not(.p0)").forEach(function(element){
            element.style.scale = 1;
        });
        document.body.querySelector(".p0").style.scale = 1.5;
        clearInterval(interval);
        document.body.style.cursor = "none";
        cursor.style.display = "block";
        cursor.style.position = "absolute";
        /* Le curseur est centré par rapport a la souris */
        document.addEventListener("mousemove", function(e){
            cursor.style.left = e.clientX-47+ "px";
            cursor.style.top = e.clientY+-28+"px";
        });

        /* Animation du curseur */
        var i = -1;
        interval = setInterval(function(){
            i++;
            let index = i%6;
            animateCursor(index);
            if(i!=0)
                if(index-1==-1)
                    initialCursor(5);
                else
                    initialCursor(index-1);
        },120);

        // Au bout de 3s, on remet le curseur de base automatiquement (ca correspond au temps de disparition du loader)
        setTimeout(function(interval){
            window.clearInterval(interval);
        },3000);
    }

    var cursor = document.getElementById("cursor");
    // Remettre le curseur de base en place quand la souris quitte le container
    const unchangeCursor = () => {
        clearInterval(interval);
        document.body.style.cursor = "default";
        cursor.style.display = "none";
    }

    // Fonction qui prend en paramètre l'index du point a animer et l'anime
    const animateCursor = (index) => {
        document.querySelector(".p"+index).style.scale = 1.5;
        document.querySelector(".p"+index).style.transition = "all 0.3s";
    }

    // Fonction qui prend en paramètre l'index du point a remettre en place et le remet en place
    function initialCursor(index){
        document.querySelector(".p"+index).style.scale = 1;
        document.querySelector(".p"+index).style.transition = "all 0.3s";
    }

    return (
        <main id='loaderContainer'>
            <div id="background" className={ isBackgroundVisible ? 'visible' : '' }></div>
            <div id="container" className={ containerIsVisible ? 'visible' : '' } onMouseOver={ changeCursor } onMouseOut={ unchangeCursor }>
                <div id="left">
                    <div id="title">
                        <img draggable="false" src={ theme } alt="PortFolio" />
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
            <div id="cursor" className={ containerIsVisible ? 'visible' : '' }>
                <div className="point p0"></div>
                <div className="point p1"></div>
                <div className="point p2"></div>
                <div className="point p3"></div>
                <div className="point p4"></div>
                <div className="point p5"></div>
            </div>
        </main>
    );
}

export default Loader;