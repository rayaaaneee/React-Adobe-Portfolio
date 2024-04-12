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
        this.title_en = data.en.title;
        this.description_en = data.en.description;

        this.title_fr = data.fr.title;
        this.description_fr = data.fr.description;

        this.title_es = data.es.title;
        this.description_es = data.es.description;

        this.image = data.image;
        this.gradient = data.gradient;
        this.titleColor = data.title_color;
        this.infoIcon = data.info_icon;
        this.bottomColor = data.bottom_color;
    }

    getTitle(language)
    {
        if (language === 'fr')
        {
            return this.title_fr;
        } else if (language === 'en') {
            return this.title_en;
        } else if (language === 'es') {
            return this.title_es;
        } else {
            return this.title_en;
        }
    }

    getDescription(language)
    {
        if (language === 'fr')
        {
            return this.description_fr;
        } else if (language === 'en') {
            return this.description_en;
        } else if (language === 'es') {
            return this.description_es;
        } else {
            return this.description_en;
        } 
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

    getBottomColor()
    {
        return this.bottomColor;
    }
}
