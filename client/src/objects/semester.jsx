export class Semester
{
    title;
    description;
    icon;
    iconPath;
    whiteIcon;
    schoolName;
    schoolIcon;
    schoolIconPath;
    schoolLocation;
    schoolAddress;
    subjects;
    specialties;
    startingDate;
    endingDate;

    constructor(semester)
    {
        this.title = semester.title;
        this.description = semester.description;
        this.startingDate = new Date(semester.starting_date);
        this.endingDate = new Date(semester.ending_date);
        this.icon = semester.icon;
        console.log(this.icon);
        this.whiteIcon = semester.white_icon;
        this.schoolIcon = semester.school_icon;
        this.specialties = semester.specialties;
        this.subjects = semester.subjects;
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
        return this.specialties.length > 0;
    }

    hasSubjects()
    {
        return this.subjects != null;
    }

    getIcon() {
        return require('../asset/img/course/' + this.icon);
    }
}
