import { useContext, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useTypewriter } from 'react-simple-typewriter';

import '../asset/css/index/appearence.scss';
import '../asset/css/index/dark-style.scss';
import '../asset/css/index/style.scss';
import '../asset/css/media/index/style.scss';

import faviconDarkTheme from '../asset/img/favicon/favicon-dark-theme.png';

import { ManageBody } from '../object/manage-body';

import loaderContext from '../function/context/loader-context';
import languageContext from '../function/context/language-context';

import { CredentialsButton } from './component/index/credentials-button';
import { SelectLanguageButton } from './component/index/select-language-button';
import { SwitchThemeButton } from './component/index/switch-theme-button copy';

const Index = () => {

    const { setWasLoaderShowed } = useContext(loaderContext);

    const { language } = useContext(languageContext);

    useEffect(() => (setWasLoaderShowed(false)));

    ManageBody.changeClass('index');

    useEffect(() => {
        document.title = language.index.title;
    });

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

    const [menuClass, setMenuClass] = useState(''); 
    const toggleMenuClass = () => {
        if (menuClass === '') {
            setMenuClass('active');
        } else {
            setMenuClass('');
        }
        toggleChecked();
    }

    const [checked, setChecked] = useState(false);

    const toggleChecked = () => {
        setChecked(!checked);
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
                    <div className='left-top-angular'>
                        <div className="logo">
                            <img src={ faviconDarkTheme } alt="logo" draggable="false" />
                        </div>
                        <SelectLanguageButton className={'one'} />
                    </div>
                    <ul className={ `menu-links ${menuClass} one` } style={{ pointerEvents: checked ? 'all' : 'none' }}>
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
                    </ul>
                    <ul className={ `menu-links ${menuClass} two` } style={{ pointerEvents: checked ? 'all' : 'none' }}>
                        <SelectLanguageButton className={'two loaded'} />
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
                        <li>
                            <CredentialsButton className={'two loaded'} />
                        </li>
                        <SwitchThemeButton className={"two loaded"}/>
                    </ul>
                    <div className="hamburger-container" onClick={ toggleMenuClass }>
                        <input type="checkbox" id="hamburger-checkbox" checked={ checked } />
                        <div className="hamburger-bar top-bar"></div>
                        <div className="hamburger-bar middle-bar"></div>
                        <div className="hamburger-bar bottom-bar"></div>
                    </div>
                </nav>
                <NavLink to={'/home'} className="get-start one">{ language.index.discover }</NavLink>
            </header>
            <main>
                <div className="container">
                    <div className="title">
                        <h1>Adobe Portfolio</h1>
                        <div className="main-bar"></div>
                        <div className="subtitle">
                            <h2>{ shortedTextTypeWriter }</h2>{/*  Texte dynamique  */}
                            <div className="vertical-bar"></div>
                        </div>
                    </div>
                    <NavLink to={'/home'} className="get-start two">{ language.index.discover }</NavLink>
                </div>
            </main>
            <footer>
                <SwitchThemeButton className={"one"}/>
                <div className="triangle border-triangle footer-triangle"></div>
                <CredentialsButton className={'one'} />
                <ul className="footer-links">
                    <li title="Linked In">
                        <a className="linkedin-link" href="https://www.linkedin.com/in/rayanemerlin/" target="_blank" rel="noreferrer">
                        </a>
                    </li>
                    <li title="Personal Github">
                        <a className="github-link" href="https://github.com/rayaaaneee" target="_blank" rel="noreferrer">
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