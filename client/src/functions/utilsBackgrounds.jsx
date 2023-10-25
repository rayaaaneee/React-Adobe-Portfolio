// One lance l'animation en appelant la fonction moveBackground
// On appelle la fonction moveBackground toutes les 50ms qui déplace les background de 0.4px et 0.7px
export class MoveBackground {

    background;

    speed;

    intervalMoveBackground;

    xs;

    moveListener;

    constructor(background) {

        this.background = background;
        //Faire bouger les backgrounds horizontalement

        //Déclaration de la vitesse
        this.speed = parseFloat(background.getAttribute("speedtranslate"));

        // Déclaration et initialisation de la position initiale
        this.x = 0;

        this.moveListener = this.move.bind(this);

        this.intervalMoveBackgrounds = setInterval(this.moveListener, 50);

    }

    move = () => {
        //On décremente la position par la vitese
        this.x -= this.speed * parseFloat(this.speed)

        //On applique la nouvelle position
        this.background.style.backgroundPosition = this.x + "px center";
        this.background.style.backgroundPosition = this.x + "px center";
        this.background.style.backgroundPosition = this.x + "px center";
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

// Appeler la méthode bind() pour lancer l'effect
export class Parallax {

    // Element du background
    element;

    ratio;

    x;

    onScrollListener;

    constructor(element) {
        this.element = element;
        this.ratio = parseFloat(element.getAttribute('speedparallax'));
        this.x = 0;
        this.onScrollListener = this.onScrollListener.bind(this);
        document.addEventListener('scroll', this.onScrollListener);
    }

    /** 
    * @returns {Parallax[]} - Array of Parallax instances
    */
    static bind = (backgrounds) => {
        return Array.from(backgrounds.map((element) => {
            return new Parallax(element);
        })); 
    }

    /**
     * @param {Event} event - Scroll event
     */
    onScrollListener = () => {
        this.x = window.scrollY * this.ratio;
        this.element.style.transform = `translateY(${this.x}px)`;
    }

    removeListeners = () => {
        document.removeEventListener('scroll', this.onScrollListener);
    }
}