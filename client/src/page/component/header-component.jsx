import { useContext, useEffect, useRef } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import '../../asset/scss/header/style.scss';
import '../../asset/scss/header/dark-style.scss';
import '../../asset/scss/media/header/style.scss';

import languageContext from '../../function/context/language-context';

import { SwitchThemeButton } from './index/switch-theme-button';
import { HamburgerMenu } from './hamburger-menu';
import { MenuLink } from './menu-link';
import { SelectLanguageButton } from './select-language-button';
import { Logo, LogoColors } from './logo';
import { useConditionalEffect } from '../../hook/useConditionalEffect';

const HeaderComponent = ({ hasFooter = true }) => {

    const { language } = useContext(languageContext);

    const location = useLocation();

    const hamburgerMenu = useRef(null);
    const mediaMenu = useRef(null);

    const links = [
        {to: '/home', text: language.menu.home, isColored: false },
        {to: '/blog', text: language.menu.blog, isColored: false },
        {to: '/background', text: language.menu.background, isColored: false },
        {to: '/myself', text: language.menu.myself, isColored: false },
        {to: '/contact', text: language.menu.contact, isColored: false },
        {to: '/about', text: language.menu.about, isColored: true }
    ]

    // Close menu when changing page
    useConditionalEffect(() => {
        (hamburgerMenu.current) && hamburgerMenu.current.querySelector("input[type='checkbox']")?.click();
    }, [location.pathname]);

    // Handle menu logic
    useEffect(() => {

        let checkbox = hamburgerMenu.current && hamburgerMenu.current.querySelector("input[type='checkbox']");

        const onClosing = () => {
             document.body.classList.remove("full-menu-active");
        }

        const onOpening = () => {
            document.body.classList.add("full-menu-active");
        }

        const onClickMenu = (e) => {
            if (!e.currentTarget.classList.contains("active")) {
                checkbox?.click();
            }
        }
        
        const clickOutsideMenu = (e) => {
            if (mediaMenu.current?.classList.contains("active") && !e.target.closest('#menu-container')) {
                checkbox?.click();
            }
        }

        const observer = new MutationObserver(() => {
            if (mediaMenu.current && mediaMenu.current.classList.contains("active")) {
                onOpening();
            } else onClosing();
        });

        observer.observe(mediaMenu.current, { attributes: true, attributeFilter: ['class'] });

        mediaMenu.current && mediaMenu.current.addEventListener('click', onClickMenu);

        window.addEventListener('click', clickOutsideMenu);

        return () => {
            window.removeEventListener('click', clickOutsideMenu);
            mediaMenu.current && mediaMenu.current.removeEventListener('click', onClickMenu);
        };
        
    }, []);


    return (
        <header>
            <nav id="menu-container">
                <ul className={"header-media-menu"} ref={ mediaMenu }>
                    <SelectLanguageButton className={"onmenu"} />
                    { hasFooter && ( 
                        <NavLink to={'/'}>
                            <Logo color={LogoColors.black} className="menu-logo" />
                        </NavLink>
                    ) }
                    { links.map((link) => (
                        <MenuLink key={link.to} to={link.to} isColored={link.isColored}>{ link.text }</MenuLink>
                    )) }
                    <SwitchThemeButton pinkMoon whiteIcons/>
                    <div className='menu-footer'></div>
                </ul>
                <HamburgerMenu ref={hamburgerMenu} black menuElement={mediaMenu.current}/>
            </nav>
        </header>
    );
}

export default HeaderComponent;