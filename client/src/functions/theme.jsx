import faviconLightTheme from '../asset/img/favicon/favicon-light-theme.png';
import faviconDarkTheme from '../asset/img/favicon/favicon-dark-theme.png';

export class ManageThemes {

    static isDarkTheme;

    static getSystemTheme = () => {

        let isDarkTheme = false;

        isDarkTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;

        ManageThemes.isDarkTheme = !isDarkTheme;
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
        ManageThemes.setTheme();
        ManageThemes.setBodyTheme();
    }

    static toggleThemes = () => {
        ManageThemes.isDarkTheme = !ManageThemes.isDarkTheme;
        ManageThemes.manageThemes();
    }
}