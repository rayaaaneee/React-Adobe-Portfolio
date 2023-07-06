// Si c'est nul on ne met pas de message d'erreur

var crossClicked = false;

let crossClick = () => {
    message = alertContainer.querySelector('.message-container');
    message.classList.add('fade-out');
    crossClicked = true;
    setTimeout(() => {
        message.remove();
    }, 200);
}

let naturalMessageRemoval = () => {
    if (!crossClicked) {
        message = alertContainer.querySelector('.message-container');
        message.classList.add('fade-out');
        setTimeout(() => {
            message.remove();
        }, 200);
    }
}