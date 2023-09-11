import { ManageBody } from '../functions/manageBody';
import { ManageThemes } from '../functions/manageThemes';
import { animateApparition } from '../functions/apparition';
import Main from './components/main';
import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';

import '../asset/css/about/style.scss';
import '../asset/css/about/dark-style.scss';
import '../asset/css/media/about/style.scss';

import privacyImg from '../asset/img/about/privacy.png';
import aboutImg from '../asset/img/about/about.png';
import darkPrivacyImg from '../asset/img/about/privacy-white.png';
import darkAboutImg from '../asset/img/about/about-white.png';

const About = () => {

    animateApparition();

    ManageBody.changeClass('about');

    useEffect(() => {
        document.title = 'À propos';
    });

    useEffect(() => {
        document.body.scrollTo(0, 0);
    }, []);

    const [privacyImgState, setPrivicyImgState] = useState(privacyImg);
    const [aboutImgState, setAboutImgState] = useState(aboutImg);

    const states = [setPrivicyImgState, setAboutImgState];
    const images = [privacyImg, aboutImg];
    const darkImages = [darkPrivacyImg, darkAboutImg];

    return (
        <Main child={
            <div className="main-container">
                <div className="content">
                    <div className="privacy">
                    <div className="title-container title-container-first-child">
                            <h1 className="title title1">• Politique de confidentialité</h1>
                            <div className="bar first-bar animate"></div>
                            <img src={ privacyImgState } alt="privacy" draggable="false" />
                        </div>
                        <p className="text-content">Votre vie privée est importante pour moi. La politique d'Adobe PortFolio est de respecter votre vie privée et de se conformer à toutes les lois et réglementations applicables concernant les informations personnelles que je pourrais collecter à votre sujet, y compris sur mon site Web, par l'adresse <NavLink to={"/"}><strong>https://rayanemerlin.com/</strong></NavLink><br/>Cette politique est en vigueur depuis le 7 février 2023 et a été mise à jour pour la dernière fois le 7 février 2023.</p>
                        <h2 className="subtitle">- Me contacter</h2>
                        <p className="text-content">Pour toute question ou préoccupation concernant votre vie privée, vous pouvez me contacter en utilisant les coordonnées suivantes :<br/><NavLink to={'/contact'}>https://rayanemerlin.com/contact</NavLink></p>
                        <h2 className="subtitle">- Informations collectées</h2>
                        <p className="text-content">Les informations que je collecte incluent à la fois les informations que vous fournissez sciemment et activement lorsque vous utilisez ou participez à l'un de nos services et promotions, et toute information envoyée automatiquement par vos appareils lors de l'accès à nos produits et services.
                        </p>
                        <h2 className="subtitle">- Log Data</h2>
                        <p className="text-content">Lorsque vous visitez ce site Web, les serveurs peuvent enregistrer automatiquement les données standard fournies par votre navigateur Web. Il peut inclure l'adresse IP (Internet Protocol) de votre appareil, le type et la version de votre navigateur, les pages que vous visitez, l'heure et la date de votre visite, le temps passé sur chaque page, d'autres détails sur votre visite et des détails techniques qui se produisent dans conjonction avec les erreurs que vous pourriez rencontrer. <br/> Veuillez noter que même si ces informations peuvent ne pas être personnellement identifiables en elles-mêmes, il peut être possible de les combiner avec d'autres données pour identifier personnellement des personnes individuelles.
                        </p>
                        <h2 className="subtitle">- Informations personnelles</h2>
                        <p className="text-content">Il pourrait vous être demandées des informations personnelles qui peuvent inclure un ou plusieurs des éléments suivants :<br/>• Nom<br/>• Email</p>
                        <h2 className="subtitle">- Utilisation des cookies</h2>
                        <p className="text-content">L'utilisation des « cookies » pour collecter des informations sur vous et votre activité sur notre site. Un cookie est un petit élément de données que notre site Web stocke sur votre ordinateur et auquel il accède à chaque fois que vous visitez, afin que je puissions comprendre comment vous utilisez notre site.</p>
                    </div>
                    <div className="contact">
                    <div className="title-container">
                            <h1 className="title title2">• À propos</h1>
                            <div className="bar second-bar animate"></div>
                            <img src={ aboutImgState } alt="about_icon" draggable="false" />
                        </div>
                        <p className="text-content">Ce site a été entièrement codé par mes soins dans le but de présenter mon parcours, mes projets et mes compétences. <br/> De même, tous les projets présentés ont pu être codés en partie ou entièrement par mes soins. <br/> Le logo a été inspiré du logo officiel d'Adobe Photoshop (plus généralement de l"ensemble des logos de la suite Adobe). Le loader a lui été inspiré du chargement officiel d'Adobe Photoshop 2022.</p>
                    </div>
                </div>
            </div>
        } images={ images } darkImages={ darkImages } states={ states } />
    );
}

export default About;