import { useContext, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';

import { ManageBody } from '../object/manage-body';

import { animateApparition } from '../function/appearence';
import { animateImageLoading } from '../function/animate-image-loading';

import themeContext from '../function/context/theme-context';
import languageContext from '../function/context/language-context';

import '../asset/css/about/style.scss';
import '../asset/css/about/dark-style.scss';
import '../asset/css/media/about/style.scss';

import privacyImg from '../asset/img/about/privacy.png';
import aboutImg from '../asset/img/about/about.png';
import darkPrivacyImg from '../asset/img/about/privacy-white.png';
import darkAboutImg from '../asset/img/about/about-white.png';

const About = () => {

    const elementsToAnimate = useRef([]);
    const imagesToLoad = useRef([]);
    useEffect(() => {
        animateApparition(elementsToAnimate.current);
        animateImageLoading(imagesToLoad.current);
    }, []);

    ManageBody.changeClass('about');

    const { language } = useContext(languageContext);

    useEffect(() => {
        document.title = language.about.title;
    });

    const { isDarkTheme } = useContext(themeContext);

    return (
            <div className="main-container" ref={ (element) => { elementsToAnimate.current.push(element) } }>
                <div className="content">
                    <div className="privacy">
                    <div className="title-container title-container-first-child">
                            <h1 className="title title1">• { language.about.main_title }</h1>
                            <div className="bar first-bar" ref={ (element) => { elementsToAnimate.current.push(element) } }>
                            </div>
                            <img src={ isDarkTheme ? darkPrivacyImg : privacyImg } alt="privacy" draggable="false" />
                        </div>
                        <p className="text-content">{ language.about.main_text }<br/><NavLink to={"/"}><strong>https://rayanemerlin.com/</strong></NavLink><br/>{ language.about.main_text_explaination }</p>
                        <h2 className="subtitle">- { language.about.contact_me }</h2>
                        <p className="text-content">{ language.about.contact_me_text }<br/><NavLink to={'/contact'}>https://rayanemerlin.com/contact</NavLink></p>
                        <h2 className="subtitle">- { language.about.informations }</h2>
                        <p className="text-content">{ language.about.informations_text }
                        </p>
                        <h2 className="subtitle">- { language.about.log_data }</h2>
                        <p className="text-content" dangerouslySetInnerHTML={{ __html: language.about.log_data_text }}></p>
                        <h2 className="subtitle">- { language.about.personal_data }</h2>
                        <p className="text-content" dangerouslySetInnerHTML={{ __html: language.about.personal_data_text }}></p>
                        <h2 className="subtitle">- { language.about.cookies }</h2>
                        <p className="text-content">{ language.about.cookies_text }</p>
                    </div>
                    <div className="contact">
                    <div className="title-container">
                            <h1 className="title title2">• { language.about.title }</h1>
                            <div className="bar second-bar" ref={ (element) => { elementsToAnimate.current.push(element) } }>
                            </div>
                            <img src={ isDarkTheme ? darkAboutImg : aboutImg } alt="about_icon" draggable="false" />
                        </div>
                        <p className="text-content" dangerouslySetInnerHTML={{ __html: language.about.inspirations_text }}></p>
                    </div>
                </div>
            </div>
    );
}

export default About;