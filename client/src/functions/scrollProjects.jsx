export class ScrollProjects {

    gap;

    chevrons = {
        left: null,
        right: null
    }

    projectsContainer;

    scrollLeftListener;
    scrollRightListener;

    setGapOnResize = (() => { this.gap = this.initGap }).bind(this);

    constructor(projects, chevronLeft, chevronRight) {

        this.scrollLeftListener = this.scrollLeft.bind(this);
        this.scrollRightListener = this.scrollRight.bind(this);

        this.projectsContainer = projects;
        this.chevrons.left = chevronLeft;
        this.chevrons.right = chevronRight;

        this.chevrons.left.addEventListener('click', this.scrollLeftListener);
        this.chevrons.right.addEventListener('click', this.scrollRightListener);
        this.gap = this.initGap();
        window.addEventListener('resize', this.setGapOnResize);
    }


    initGap = () => {
        let gap = this.projectsContainer.querySelector('.main-container').offsetWidth;
        let rowGap = window.getComputedStyle(this.projectsContainer).getPropertyValue('row-gap');
        // On divise par 2 car la marge est appliquée à la fois à gauche et à droite
        rowGap = parseInt(rowGap);
        return gap + rowGap;
    }

    scrollLeft = () => {
        this.projectsContainer.scrollLeft -= this.gap;
        if (this.projectsContainer.scrollLeft === 0) {
            this.chevrons.left.classList.add('alert');
            setTimeout(() => {
                this.chevrons.left.classList.remove('alert');
            }, 400);
        } else {
            this.animateChevrons(this.chevrons.left);
        }
    }

    scrollRight = () => {
        this.projectsContainer.scrollLeft += this.gap;
        if (this.projectsContainer.scrollLeft >= this.projectsContainer.scrollWidth - this.projectsContainer.offsetWidth - 5) {
            this.chevrons.right.classList.add('alert');
            setTimeout(() => {
                this.chevrons.right.classList.remove('alert');
            }, 400);
        } else {
            this.animateChevrons(this.chevrons.right);
        }
    }

    animateChevrons = (chevron) => {
        chevron.classList.add('scale');
        setTimeout(() => {
            chevron.classList.remove('scale');
        }, 300);
    }

    removeListeners = () => {
        this.chevrons.left.removeEventListener('click', this.scrollLeftListener);
        this.chevrons.right.removeEventListener('click', this.scrollRightListener);
        window.removeEventListener('resize', this.setGapOnResize);
    }
}