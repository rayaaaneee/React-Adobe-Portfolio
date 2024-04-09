import { getCookie, setCookie, removeCookie, isCookie } from '../hook/useCookies';

import frenchSentences from '../asset/data/language/fr.json';
import englishSentences from '../asset/data/language/en.json';

export class ManageWebsiteLanguages {

    static cookieName = 'language';
    static language = ManageWebsiteLanguages.defaultLanguage;

    static supportedLanguages = [
        ['en', englishSentences],
        ['fr', frenchSentences],
    ];

    static defaultLanguage = 'en';

    static isSupported(languageCode) {
        return this.supportedLanguages.some(([code, _]) => code === languageCode);
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
        switch (ManageWebsiteLanguages.language) {
            case 'fr':
                return frenchSentences;
            case 'en':
            default:
                return englishSentences;
        }
    }
}