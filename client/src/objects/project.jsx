import { ManageLanguages } from '../functions/manageLanguages';
import { ManageCompetences } from '../functions/manageCompetences';

const PATH_PROJECTS = "../asset/project/";

export class Project
{
    #id;

    #title;
    #useDescription;
    #projectDescription;
    #image;
    #icon;
    #usesCompetences;
    #usesLanguages;

    #isDownload;
    #isLink;

    #link;
    #file;

    #size;

    #endDate;
    #languages;
    #competences;

    #stateImg = null;

    #reactIcon = null;
    #darkReactIcon = null;

    constructor(project)
    {
        this.#id = project.id;
        this.#title = project.title;
        this.#useDescription = project.use_desc;
        this.#projectDescription = project.project_desc;
        this.#image = project.image;
        this.#icon = project.icon;
        this.#isDownload = project.is_download;
        this.#isLink = project.is_link;
        this.#link = project.link;
        this.#file = project.file;

        this.#endDate = new Date();
        let [month, year] = project.date.split("-");
        this.#endDate = new Date(parseInt(year), 0, parseInt(month));

        this.#usesCompetences = project.competences.length > 0;
        this.#usesLanguages = project.languages.length > 0;

        this.#size = project.size;

        this.#languages = [];

        project.languages.forEach(language => {
            let objectLanguage = ManageLanguages.getLanguage(language);
            this.#languages.push(objectLanguage);
        });

        this.#competences = new Array();

        project.competences.forEach(competence => {
            let objectCompetence = ManageCompetences.getCompetence(competence);
            this.#competences.push(objectCompetence);
        });
    }

    setReactIcon(img) {
        this.#reactIcon = img;
    }

    setDarkReactIcon(img) {
        this.#darkReactIcon = img;
    }

    getReactIcon() {
        return this.#reactIcon;
    }

    getDarkReactIcon() {
        return this.#darkReactIcon;
    }

    getTypeImageName()
    {
        let result = null;
        if (this.#isLink) {
            result = "link";
        } else {
            result = "download";
        }
        return result;
    }

    getId()
    {
        return this.#id;
    }

    getTitle()
    {
        return this.#title;
    }

    getUseDescription()
    {
        return this.#useDescription;
    }

    getDescription()
    {
        return this.#projectDescription;
    }

    getIcon()
    {
        return this.#icon;
    }

    isDownload()
    {
        return this.#isDownload;
    }

    isLink()
    {
        return this.#isLink;
    }

    getLink()
    {
        if (this.#isLink) {
            return this.#link;
        } else {
            return null;
        }
    }

    getFile()
    {
        if (this.#isDownload) {
            return this.#file;
        } else {
            return null;
        }
    }

    getFileName()
    {
        if (this.#isDownload) {
            return this.#file;
        } else {
            return null;
        }
    }

    getFileSize()
    {
        if (this.#isDownload) {
        } else {
            return null;
        }
    }

    getImage()
    {
        return this.#image;
    }

    getDate()
    {
        return this.#endDate;
    }

    getFormatDate()
    {
        const month = String(this.#endDate.getDate()).padStart(2, '0');
        const year = String(this.#endDate.getFullYear());

        return `${month}/${year}`;
    }

    getLanguages()
    {
        return this.#languages;
    }

    getCompetences()
    {
        return this.#competences;
    }

    hasCompetences()
    {
        return this.#usesCompetences;
    }

    hasLanguages()
    {
        return this.#usesLanguages;
    }

    hasUseDescription()
    {
        return this.#useDescription != null;
    }

    getSize()
    {
        return this.#size;
    }
}
