import { getCookie, setCookie, removeCookie, isCookie } from '../hook/useCookies';

import faviconLightTheme from '../asset/img/favicon/favicon-light-theme.png';
import faviconDarkTheme from '../asset/img/favicon/favicon-dark-theme.png';

export class ManageThemes {

    static isDarkTheme;
    static cookieName = 'theme';

    static getSystemTheme = () => {

        let isDarkTheme = false;

        isDarkTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;

        ManageThemes.isDarkTheme = isDarkTheme;

        setCookie(ManageThemes.cookieName, ManageThemes.getThemeName());
    }

    static setTheme = () => {

        const newFaviconLink = document.createElement('link');
        newFaviconLink.rel = 'icon';

        switch(ManageThemes.getThemeName()) {
          case 'dark' :
            newFaviconLink.href = faviconDarkTheme;
            break;
          case 'light' :
            newFaviconLink.href = faviconLightTheme;
            break;
          default :
            newFaviconLink.href = faviconLightTheme;
            break;
        }

        document.head.querySelector('link[rel="icon"]');
        document.head.appendChild(newFaviconLink);
    }

    static setBodyTheme = () => {
        document.body.id = ManageThemes.isDarkTheme ? 'dark' : '';
    }

    static getThemeName = () => {
        return ManageThemes.isDarkTheme ? "dark" : "light";
    }

    static manageThemes = () => {
        if (isCookie(ManageThemes.cookieName)) {
            switch (getCookie(ManageThemes.cookieName)) {
                case 'dark' :
                    ManageThemes.isDarkTheme = true;
                    break;
                case 'light' :
                default :
                    ManageThemes.isDarkTheme = false;
                    break;
            }
        } else {
            ManageThemes.getSystemTheme();
        }
        ManageThemes.updateTheme();
    }

    static toggleThemes = () => {
        ManageThemes.isDarkTheme = !ManageThemes.isDarkTheme;
        ManageThemes.updateTheme();
    }

    static set(theme) {
        switch(theme) {
            case 'light':
                ManageThemes.isDarkTheme = false;
                break;
            case 'dark':
                ManageThemes.isDarkTheme = true;
                break;
            default :
                ManageThemes.isDarkTheme = false;
                break;
        }
        ManageThemes.updateTheme();
    }

    static updateTheme() {
        ManageThemes.setTheme();
        ManageThemes.setBodyTheme();
        removeCookie(ManageThemes.cookieName);
        setCookie(ManageThemes.cookieName, ManageThemes.getThemeName());
    }
}