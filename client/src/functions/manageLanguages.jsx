import languagesJson from '../asset/data/home/language.json';

export class ManageLanguages {

    static languages = languagesJson.languages;

    static getLanguage = (name) => {
        let result = null;
        ManageLanguages.languages.forEach(language => {
            if (language.name.toUpperCase() === name.toUpperCase()) {
                result = language;
            }
        });
        return result;
    }

    static logLanguages = () => {
        ManageLanguages.languages.forEach(language => {
            console.log(ManageLanguages.languages);
        });
    }

    static getLength = () => {
        return ManageLanguages.languages.length;
    }
}