import { getCookie, setCookie, removeCookie, isCookie } from '../hook/useCookies';

import frenchSentences from '../asset/data/language/fr.json';
import englishSentences from '../asset/data/language/en.json';
import spanishSentences from '../asset/data/language/es.json';

export class ManageWebsiteLanguages {

    static cookieName = 'language';
    static language = ManageWebsiteLanguages.defaultLanguage;

    static supportedLanguages = [
        ['en', englishSentences],
        ['fr', frenchSentences],
        ['es', spanishSentences]
    ];

    static defaultLanguage = 'en';

    static isSupported(language) {
        return this.supportedLanguages.some(([name, _]) => name === language);
    }

    static getSystemLanguage = () => {
        return navigator.language || navigator.userLanguage;
    }

    static manageLanguages = () => {
        if (isCookie(ManageWebsiteLanguages.cookieName)) {
            ManageWebsiteLanguages.language = getCookie(ManageWebsiteLanguages.cookieName);
        } else {
            ManageWebsiteLanguages.language = ManageWebsiteLanguages.getSystemLanguage();
            if (!ManageWebsiteLanguages.isSupported(ManageWebsiteLanguages.language)) {
                ManageWebsiteLanguages.language = ManageWebsiteLanguages.defaultLanguage;
            }
        }

        ManageWebsiteLanguages.setLanguage(ManageWebsiteLanguages.language);
    }

    static setLanguage = (language) => {
        if (ManageWebsiteLanguages.isSupported(language)) {
            ManageWebsiteLanguages.language = language;
            setCookie(ManageWebsiteLanguages.cookieName, language);
        }
    }

    static removeLanguage = () => {
        removeCookie(ManageWebsiteLanguages.cookieName);
    }

    static getLanguage = () => {
        return ManageWebsiteLanguages.language;
    }

    static getSentences = () => {
        let json = ManageWebsiteLanguages.supportedLanguages.find(([name, _]) => name === ManageWebsiteLanguages.language)[1];
        if (json === null) {
            json = ManageWebsiteLanguages.supportedLanguages.find(([name, _]) => name === ManageWebsiteLanguages.defaultLanguage)[1];
        }
        return json;
    }
}