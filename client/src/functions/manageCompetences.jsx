import competencesJson from '../asset/data/home/competence.json';

export class ManageCompetences {

    static competences = competencesJson.competences;

    static getCompetence = (name) => {
        let result = null;
        ManageCompetences.competences.forEach(language => {
            if (language.name.toUpperCase() === name.toUpperCase()) {
                result = language;
            }
        });
        return result;
    }

    static logCompetences = () => {
        console.log(ManageCompetences.competences);
    }

    static getLength = () => {
        return ManageCompetences.competences.length;
    }
}