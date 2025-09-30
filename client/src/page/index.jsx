import { useContext, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useTypewriter } from 'react-simple-typewriter';

import '../asset/scss/index/appearence.scss';
import '../asset/scss/index/dark-style.scss';
import '../asset/scss/index/style.scss';
import '../asset/scss/media/index/style.scss';

import { ManageBody } from '../object/manage-body';

import loaderContext from '../function/context/loader-context';
import languageContext from '../function/context/language-context';
import { Logo, LogoColors } from './component/logo';

const Index = () => {

    const { setWasLoaderShowed } = useContext(loaderContext);

    const { language } = useContext(languageContext);

    useEffect(() => (setWasLoaderShowed(false)));

    useEffect(() => {document.title = language.index.title});

    useEffect(() => {
        const hamburgerMenu = document.body.querySelector('.hamburger-container');
        hamburgerMenu && hamburgerMenu.classList.remove('black');
        return () => {
            hamburgerMenu && hamburgerMenu.classList.add('black');
        }
    });

    ManageBody.changeClass('index');

    const textTab = language.index.description;
    const shortedTextTab = language.index.shorted_description;

    const template = {
        loop: true,
        typeSpeed: 100,
        deleteSpeed: 50,
    }
    const [textTypeWriter] = useTypewriter({
        words: textTab,
        ...template
    });

    const [shortedTextTypeWriter] = useTypewriter({
        words: shortedTextTab,
        ...template
    });

    const footerLinks = [
        { title: "Linked In", link: "https://www.linkedin.com/in/rayanemerlin/", target: "_blank", rel: "noreferrer" },
        { title: "Github", link: "https://github.com/rayaaaneee", target: "_blank", rel: "noreferrer" },
        { title: "Mail", link: "mailto:rayane.merlin8@gmail.com" },
        { title: "Phone", link: "tel:+33768283277" }
    ]

    return (
        <>
            <main>
                <div className="triangle border-triangle header-triangle"></div>
                <div className="background-container">
                    <div className="triangle triangle-red"></div>
                    <div className="triangle triangle-orange"></div>
                    <div className="triangle triangle-yellow"></div>
                    <div className="circle circle-one"></div>
                    <div className="circle circle-two"></div>
                </div>
                    <div className='left-top-angular'>
                        <Logo color={LogoColors.white} className={"index-logo"}/>
                    </div>
                <NavLink to={'/home'} className="get-start one">{ language.index.discover }</NavLink>
                <div className="container">
                    <div className="title">
                        <h1>{ language.title }</h1>
                        <div className="main-bar"></div>
                        <div className="subtitle">
                            <h2 className='one'>{ textTypeWriter }</h2>{/*  Texte dynamique  */}
                            <h2 className='two'>{ shortedTextTypeWriter }</h2>{/*  Texte dynamique  */}
                            <div className="vertical-bar"></div>
                        </div>
                    </div>
                    <NavLink to={'/home'} className="get-start two">{ language.index.discover }</NavLink>
                </div>
            </main>
            <footer>
                <div className="triangle border-triangle footer-triangle"></div>
                <ul className="footer-links">
                    { footerLinks.map((footerLink, index) => (
                        <li key={index} title={footerLink.title}>
                            <a 
                                className={`${footerLink.title.toLowerCase().replace(' ', '')}-link`} 
                                href={footerLink.link} 
                                target={footerLink.target} 
                                rel={footerLink.rel}>    
                            </a>
                        </li>
                    ))}
                </ul>
            </footer>
        </>
    );
}

export default Index;