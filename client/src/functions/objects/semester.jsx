export class Semester
{
    #title;
    #description;
    #icon;
    #iconPath;
    #whiteIcon;
    #schoolName;
    #schoolIcon;
    #schoolIconPath;
    #schoolLocation;
    #schoolAddress;
    #subjects;
    #specialties;
    #startingDate;
    #endingDate;

    constructor(semester)
    {
        this.title = semester['title'];
        this.description = semester['description'];
        this.startingDate = new DateTime(semester['starting_date']);
        this.endingDate = new DateTime(semester['ending_date']);
        this.icon = semester['icon'];
        this.iconPath = PATH_IMAGES + 'course/' + this.icon;
        this.whiteIcon = semester['white_icon'];
        this.schoolIcon = semester['school_icon'];
        this.schoolIconPath = PATH_IMAGES + 'course/semester/' + this.schoolIcon;
        this.specialties = semester['specialties'];
        this.subjects = semester['subjects'];
        this.schoolName = semester['school_name'];
        this.schoolLocation = semester['school_location'];
        this.schoolAddress = semester['school_address'];
    }

    static processRow(semesters)
    {
        semesters = array_map(function (semester) {
            return new Semester(semester);
        }, semesters);

        tmp_result = [];
        semesters.forEach(semester => {
            tmp_result[] = semester;
        });
        return tmp_result;
    }

    getTitle()
    {
        return this.title;
    }

    getDescription()
    {
        return this.description;
    }

    getStartingDate()
    {
        return this.startingDate;
    }

    getEndingDate()
    {
        return this.endingDate;
    }

    formatStartingDate()
    {
        return this.startingDate.format('d/m/Y');
    }

    formatEndingDate()
    {
        return this.endingDate.format('d/m/Y');
    }

    getIconPath()
    {
        return this.iconPath;
    }

    getIcon()
    {
        return this.icon;
    }

    getWhiteIcon()
    {
        return this.whiteIcon;
    }

    getWhiteIconPath()
    {
        return PATH_IMAGES + 'course/' + this.whiteIcon;
    }

    getSchoolIcon()
    {
        return this.schoolIcon;
    }

    getSchoolIconPath()
    {
        return this.schoolIconPath;
    }

    getSpecialties()
    {
        return this.specialties;
    }

    hasSpecialties()
    {
        return count(this.specialties) > 0;
    }

    getSubjects()
    {
        return this.subjects;
    }

    getSubjectsPath()
    {
        return PATH_IMAGES +  'course/semester/' + this.subjects;
    }

    hasSubjects()
    {
        return this.subjects != null;
    }

    getSchoolName()
    {
        return this.schoolName;
    }

    getSchoolLocation()
    {
        return this.schoolLocation;
    }

    getSchoolAddress()
    {
        return this.schoolAddress;
    }
}
