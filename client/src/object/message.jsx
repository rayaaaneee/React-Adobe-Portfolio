export class Message
{
    #id;

    #name;
    #email;
    #message;
    #dateString;
    #timeString;

    constructor(name, email, message, date, time)
    {
        this.name = name;
        this.email = email;
        this.message = message;


        this.dateString = date;
        this.timeString = time;
    }

    getId()
    {
        return this.id;
    }

    getName()
    {
        return this.name;
    }

    getEmail()
    {
        return this.email;
    }

    getMessage()
    {
        return this.message;
    }

    getDate()
    {
        return this.dateString;
    }

    getTime()
    {
        return this.timeString;
    }

    __toString()
    {
        return "Name: " + this.name + " Email: " + this.email + " Message: " + this.message + " Date: " + this.dateString + " Time: " + this.timeString;
    }
}
