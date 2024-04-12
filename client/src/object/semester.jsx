export class Semester
{
    fr_title;
    en_title;
    es_title;

    fr_description;
    en_description;
    es_description;

    icon;
    iconPath;
    whiteIcon;
    schoolName;
    schoolIcon;
    schoolIconPath;
    schoolLocation;
    schoolAddress;
    matters;

    fr_specialties;
    en_specialties;
    es_specialties;
    
    startingDate;
    endingDate;

    constructor(semester)
    {
        this.id = semester.id;

        this.fr_title = semester.fr.title;
        this.en_title = semester.en.title;
        this.es_title = semester.es.title;

        this.fr_description = semester.fr.description;
        this.en_description = semester.en.description;
        this.es_description = semester.es.description;

        this.startingDate = new Date(semester.starting_date);
        this.endingDate = new Date(semester.ending_date);
        this.icon = semester.icon;
        this.whiteIcon = semester.white_icon;
        this.schoolIcon = semester.school_icon;

        this.fr_specialties = semester.fr.specialties;
        this.en_specialties = semester.en.specialties;
        this.es_specialties = semester.es.specialties;

        this.matters = semester.subjects;
        this.schoolName = semester.school_name;
        this.schoolLocation = semester.school_location;
        this.schoolAddress = semester.school_address;
    }

    static processRow(semesters)
    {
        return semesters.map((semester) => {
            return new Semester(semester);
        })
    }

    formatStartingDate()
    {
        return this.startingDate.toLocaleString('fr').split(' ')[0];
    }

    formatEndingDate()
    {
        return this.endingDate.toLocaleString('fr').split(' ')[0];
    }

    hasSpecialties()
    {
        let specialties = this.fr_specialties ?? this.en_description ?? this.es_specialties;
        return specialties.length  > 0;
    }

    hasMatters()
    {
        return this.matters != null;
    }

    getTitle(language){
        if (language === 'fr')
        {
            return this.fr_title;
        } else if (language === 'en') {
            return this.en_title;
        } else if (language === 'es') {
            return this.es_title;
        } else {
            return this.en_title;
        }
    }

    getDescription(language){
        if (language === 'fr')
        {
            return this.fr_description;
        } else if (language === 'en') {
            return this.en_description;
        } else if (language === 'es') {
            return this.es_description;
        } else {
            return this.en_description;
        }
    }

    getSpecialties(language) {
        if (language === 'fr')
        {
            return this.fr_specialties;
        } else if (language === 'en') {
            return this.en_specialties;
        } else if (language === 'es') {
            return this.es_specialties;
        } else {
            return this.en_specialties;
        }
    }
}
