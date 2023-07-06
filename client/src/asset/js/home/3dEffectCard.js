const cards = document.querySelectorAll('.card');

var lastCardClicked = null;

function startRotate(event) {
    event.stopPropagation();
    const cardItem = event.currentTarget;

    console.log(lastCardClicked);

    if (lastCardClicked) {
        stopRotate(null, event.currentTarget);
    } else {
        lastCardClicked = cardItem;
    }

    console.log(lastCardClicked);

    cardItem.classList.add('clicked');

    cardItem.removeEventListener('click', startRotate);
    cardItem.addEventListener('click', stopRotate);
}

function stopRotate(event = null, newCard = null) {
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