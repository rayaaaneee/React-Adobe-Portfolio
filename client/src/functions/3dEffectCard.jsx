export const animateCards = () => {

    const cards = document.querySelectorAll('.card');
    var lastCardClicked = null;

    const startRotate = (event) => {
        event.stopPropagation();
        const cardItem = event.currentTarget;

        if (lastCardClicked) {
            stopRotate(null, event.currentTarget);
        } else {
            lastCardClicked = cardItem;
        }

        cardItem.classList.add('clicked');

        cardItem.removeEventListener('click', startRotate);
        cardItem.addEventListener('click', stopRotate);
    }

    const stopRotate = (event = null, newCard = null) => {
        const cardItem = event ? event.currentTarget : lastCardClicked;

        cardItem.style.removeProperty('transform');
        lastCardClicked = newCard;

        cardItem.classList.remove('clicked');

        cardItem.removeEventListener('click', stopRotate);
        cardItem.addEventListener('click', startRotate);
    }

    cards.forEach(card => {
        card.addEventListener('click', startRotate);
    });
}