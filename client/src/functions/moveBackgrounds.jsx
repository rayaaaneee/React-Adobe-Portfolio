// One lance l'animation en appelant la fonction moveBackground
// On appelle la fonction moveBackground toutes les 50ms qui déplace les background de 0.4px et 0.7px
export const moveBackgrounds = () => {
    //Faire bouger les backgrounds horizontalement

    var background1 = document.getElementById("background1");
    var background2 = document.getElementById("background2");
    var background3 = document.getElementById("background3");

    //Déclaration de la vitesse
    var speed1 = parseFloat(background1.getAttribute("speedtranslate"));
    var speed2 = parseFloat(background2.getAttribute("speedtranslate"));
    var speed3 = parseFloat(background3.getAttribute("speedtranslate"));

    // Déclaration et initialisation de la position initiale
    let xs = [0, 0, 0];

    // Récupérer la largeur de chaque background
    var widths = [background1.offsetWidth, background2.offsetWidth, background3.offsetWidth];

    setInterval(() => {
        //On décremente la position par la vitese
        xs[0] -= speed1 * parseFloat(speed1);
        xs[1] -= speed2 * parseFloat(speed2);
        xs[2] -= speed3 * parseFloat(speed3);

        //On applique la nouvelle position
        background1.style.backgroundPosition = xs[0] + "px center";
        background2.style.backgroundPosition = xs[1] + "px center";
        background3.style.backgroundPosition = xs[2] + "px center";
    }, 50);
}

// Appeler la méthode bind() pour lancer l'effect
export class Parallax {
    constructor(element) {
        this.element = element;
        this.ratio = parseFloat(element.getAttribute('speedparallax'));
        this.x = 0;
        this.onScroll = this.onScroll.bind(this);
        document.addEventListener('scroll', this.onScroll);
    }

    /** 
    * @returns {Parallax[]} - Array of Parallax instances
    */
    static bind() {
        return Array.from(document.querySelectorAll('[speedparallax]')).map((element) => {
            return new Parallax(element);
        }); 
    }

    /**
     * @param {Event} event - Scroll event
     */
    onScroll() {
        this.x = window.scrollY * this.ratio;
        this.element.style.transform = `translateY(${this.x}px)`;
    }
}