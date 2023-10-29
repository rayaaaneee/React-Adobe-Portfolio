// Appeler la méthode bind() pour lancer l'effect
export class ParallaxBackground {

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
    * @returns {ParallaxBackground[]} - Array of Parallax instances
    */
    static bind = (backgrounds) => {
        return Array.from(backgrounds.map((element) => {
            return new ParallaxBackground(element);
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