export class SchoolCompetence
{
    #title;
    #description;
    #image;
    #gradient;
    #titleColor;
    #infoIcon;
    #bottomColor;

    constructor(data)
    {
        this.title = data.title;
        this.description = data.description;
        this.image = data.image;
        this.gradient = data.gradient;
        this.titleColor = data.title_color;
        this.infoIcon = data.info_icon;
        this.bottomColor = data.bottom_color;
    }

    getTitle()
    {
        return this.title;
    }

    getDescription()
    {
        return this.description;
    }

    getImage()
    {
        return this.image;
    }

    getGradient()
    {
        return this.gradient;
    }

    getTitleColor()
    {
        return this.titleColor;
    }

    getInfoIcon()
    {
        return this.infoIcon;
    }

    getInfoIconPath()
    {
        return "home/card/" + this.infoIcon;
    }

    getBottomColor()
    {
        return this.bottomColor;
    }
}
