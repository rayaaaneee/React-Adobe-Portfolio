export class Language
{
    #name;
    #color;

    constructor(language, color)
    {
        this.name = language;
        this.color = color;
    }

    getName()
    {
        return this.name;
    }

    getColor()
    {
        return this.color;
    }

    displayLanguage()
    {
        return this.name + ' - ' + this.color;
    }
}
