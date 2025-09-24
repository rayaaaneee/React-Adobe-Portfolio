import { useContext, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';

import '../../asset/css/header/style.scss';
import '../../asset/css/header/dark-style.scss';
import '../../asset/css/media/header/style.scss';

import languageContext from '../../function/context/language-context';

import { SwitchThemeButton } from './index/switch-theme-button';
import { HamburgerMenu } from './hamburger-menu';
import { MenuLink } from './menu-link';
import { SelectLanguageButton } from './index/select-language-button';

const HeaderComponent = () => {

    const { language } = useContext(languageContext);

    const hamburgerMenu = useRef(null);
    const mediaMenu = useRef(null);

    const links = [
        {to: '/home', text: language.menu.home, isColored: false },
        {to: '/blog', text: language.menu.blog, isColored: false },
        {to: '/background', text: language.menu.background, isColored: false },
        {to: '/myself', text: language.menu.myself, isColored: false },
        {to: '/contact', text: language.menu.contact, isColored: false },
        {to: '/about', text: language.index.credentials, isColored: true }
    ]

    useEffect(() => {

        let checkbox = hamburgerMenu.current && hamburgerMenu.current.querySelector("input[type='checkbox']");

        const onClickMenu = (e) => {
            if (!e.currentTarget.classList.contains("active")) {
                checkbox?.click();
            }
        }

        mediaMenu.current?.addEventListener('click', onClickMenu);

        const clickOutsideMenu = (e) => {
            if (mediaMenu.current?.classList.contains("active") && !e.target.closest('#menu-container')) {
                checkbox?.click();
            }
        }

        window.addEventListener('click', clickOutsideMenu);

        return () => {
            window.removeEventListener('click', clickOutsideMenu);

            mediaMenu.current?.removeEventListener('click', onClickMenu);

        };
        
    }, []);

    return (
        <header>
            <nav id="menu-container">
                <ul className={"header-media-menu"} ref={ mediaMenu }>
                    <SelectLanguageButton className={"onmenu"} />
                    <NavLink to={'/'} className='logo black'></NavLink>
                    { links.map((link) => (
                        <MenuLink key={link.to} to={link.to} isColored={link.isColored}>{ link.text }</MenuLink>
                    )) }
                    <SwitchThemeButton pinkMoon whiteIcons/>
                    <div className='menu-footer'></div>
                </ul>
                <HamburgerMenu ref={hamburgerMenu} black menuElements={[mediaMenu.current]}/>
            </nav>
        </header>
    );
}

export default HeaderComponent;