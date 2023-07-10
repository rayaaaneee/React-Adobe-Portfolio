export const animateApparition = () => {
    const intersectionObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("view");
              entry.target.classList.remove("hide");
            } else {
              entry.target.classList.remove("view");
              entry.target.classList.add("hide");
            }
        });
    });

    // Tous les éléments à animer ont la classe "animate"
    const classListElementsToAnimate = 'animate';
    const elements = document.querySelectorAll(`.${classListElementsToAnimate}`);
    elements.forEach((element) => {
        intersectionObserver.observe(element);
        element.classList.remove(classListElementsToAnimate);
    });
}