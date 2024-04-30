// One lance l'animation en appelant la fonction moveBackground
// On appelle la fonction moveBackground toutes les 50ms qui déplace les background de 0.4px et 0.7px
export class MoveBackground {

    background;

    speed;

    intervalMoveBackground;

    xs;

    moveListener;

    position;

    constructor(background) {

        this.background = background;

        this.position = background.getAttribute("position");
        //Faire bouger les backgrounds horizontalement

        //Déclaration de la vitesse
        this.speed = parseFloat(background.getAttribute("speedtranslate"));

        // Déclaration et initialisation de la position initiale
        this.x = 0;

        this.moveListener = this.move.bind(this);

        this.intervalMoveBackgrounds = setInterval(this.moveListener, 50);

    }

    move = () => {
        //On décremente la position par la vitesse
        this.x -= this.speed * parseFloat(this.speed)

        //On applique la nouvelle position
        this.background.style.backgroundPosition = `${this.x}px ${ this.position }`;
    }

    removeIntervals = () => {
        clearInterval(this.intervalMoveBackgrounds);
    }

    static bind = (backgrounds) => {
        return Array.from(backgrounds.map((background) => {
            return new MoveBackground(background);
        }));
    }
}