export const animateApparition = (elementsToAnimate) => {
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
    elementsToAnimate.forEach((element) => {
        intersectionObserver.observe(element);
    });
}