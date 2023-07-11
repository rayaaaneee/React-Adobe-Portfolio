const PATH_IMAGES = "images/";
const PATH_PROJECTS = "images/";

export class Project
{
    #id;

    #title;
    #useDescription;
    #projectDescription;
    #image;
    #icon;
    #usesSkills;
    #usesLanguages;

    #isDownload;
    #isLink;

    #projectLink;
    #projectFile;

    #endDate;
    #languages = [];

    constructor(project)
    {
/* 
        manageLanguages = ManageLanguages.getInstance(); */

        this.id = project.id;
        this.title = project.title;
        this.useDescription = project.use_desc;
        this.projectDescription = project.project_desc;
        this.image = project.image;
        this.icon = project.icon;
        this.isDownload = project.is_download;
        this.isLink = project.is_link;
        this.projectLink = project.link;
        this.projectFile = project.file;

        if (project.date === "now"){
            this.endDate = new Date(Date.now());
        } else {
            this.endDate = new Date();
            let [month, year] = project.date.split("-");
            this.endDate = new Date(parseInt(year), 0, parseInt(month));
        }

        this.usesSkills = project.uses_skills;
        this.usesLanguages = project.uses_languages;

        /* project.languages.forEach(language => {
            tmp_language = strtoupper(language);
            this.languages[] = manageLanguages.getLanguage(tmp_language);
        }); */
    }

    getTypeImageName()
    {
        let result = null;
        if (this.isLink) {
            result = "link";
        } else {
            result = "download";
        }
        return result;
    }

    getTypeImagePath(name)
    {
        return PATH_IMAGES + "home/icon/" + name;
    }

    getId()
    {
        return this.id;
    }

    getTitle()
    {
        return this.title;
    }

    getUseDescription()
    {
        return this.useDescription;
    }

    getDescription()
    {
        return this.projectDescription;
    }

    getIcon()
    {
        return this.icon;
    }

    getIconPath(filename)
    {
        return PATH_IMAGES + "home/project-logos/" + filename;
    }

    isDownload()
    {
        return this.isDownload;
    }

    isLink()
    {
        return this.isLink;
    }

    getLink()
    {
        if (this.isLink) {
            return PATH_PROJECTS . this.projectLink;
        } else {
            return null;
        }
    }

    getFile()
    {
        if (this.isDownload) {
            return PATH_PROJECTS . this.projectFile;
        } else {
            return null;
        }
    }

    getFileSize()
    {
        if (this.isDownload) {
            let path = PATH_PROJECTS . this.projectFile;
            /* let size = filesize(path) */;
            let size = size / 1000000;
            return Math.round(size, 2);
        } else {
            return null;
        }
    }

    getImage()
    {
        return this.image;
    }

    getDate()
    {
        return this.endDate;
    }

    getFormatDate()
    {
        const day = String(this.endDate.getDate()).padStart(2, '0');
        const month = String(this.endDate.getMonth() + 1).padStart(2, '0');
        const year = String(this.endDate.getFullYear());

        return `${day}/${year}`;
    }

    getLanguages()
    {
        return this.languages;
    }

    usesSkills()
    {
        return this.usesSkills;
    }

    usesLanguages()
    {
        return this.usesLanguages;
    }
}
