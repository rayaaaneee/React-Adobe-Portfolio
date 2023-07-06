const validateForm = () => {

    var name = document.forms["myForm"]["name"];
    var email = document.forms["myForm"]["email"];
    var message = document.forms["myForm"]["message"];

    if (name.value == "") {
        document.getElementById('errorname').innerHTML = "Veuillez entrez un nom valide";
        name.focus();
        return false;
    } else {
        document.getElementById('errorname').innerHTML = "";
    }

    if (email.value == "") {
        document.getElementById('erroremail').innerHTML = "Veuillez entrez une adresse mail valide";
        email.focus();
        return false;
    } else {
        document.getElementById('erroremail').innerHTML = "";
    }

    if (email.value.indexOf("@", 0) < 0) {
        document.getElementById('erroremail').innerHTML = "Veuillez entrez une adresse mail valide";
        email.focus();
        return false;
    }

    if (email.value.indexOf(".", 0) < 0) {
        document.getElementById('erroremail').innerHTML = "Veuillez entrez une adresse mail valide";
        email.focus();
        return false;
    }

    if (message.value == "") {
        document.getElementById('errormsg').innerHTML = "Veuillez entrez un message valide";
        message.focus();
        return false;
    } else {
        document.getElementById('errormsg').innerHTML = "";
    }

    return true;
}


const nbCharsLeftContainer = document.querySelector('.nb-chars-left');
const isDarkTheme = document.body.classList.contains('body-dark');

const textarea = document.querySelector('.field-textarea');
const maxlength = textarea.getAttribute("maxlength");
nbCharsLeftContainer.querySelector('.to-modify').innerHTML = maxlength;

var oldNbCharsLeft = null;
var nbCharsLeft = null;
const getNbCharsLeft = (element) => {
    // On recupère le nombre de caractères max et on le soustrait au nombre de caractères actuel
    nbCharsLeft = parseInt(maxlength) - element.value.length;
    nbCharsLeftContainer.querySelector('.to-modify').innerHTML = nbCharsLeft;

    animateScaleCharsLeftText();

    if (nbCharsLeft == 0) {
        nbCharsLeftContainer.querySelector('.nb-chars-left-text').innerHTML = "Aucun caractère restant";

        console.log("nbCharsLeft == 0");
        animateScaleCharsLeft();

        nbCharsLeftContainer.querySelector('.to-modify').style.display = 'none';
        nbCharsLeftContainer.querySelector('.spinner').style.display = 'none';
        nbCharsLeftContainer.querySelector('.nb-chars-left-text').style.marginLeft = '1vw';
    } else if (nbCharsLeft == 1) {
        nbCharsLeftContainer.querySelector('.nb-chars-left-text').innerHTML = "caractère restant";

        nbCharsLeftContainer.querySelector('.to-modify').style.removeProperty('display');
        nbCharsLeftContainer.querySelector('.spinner').style.removeProperty('display');
        nbCharsLeftContainer.querySelector('.nb-chars-left-text').style.removeProperty('margin-left');
    } else {
        nbCharsLeftContainer.querySelector('.nb-chars-left-text').innerHTML = "caractères restants";

        nbCharsLeftContainer.querySelector('.to-modify').style.removeProperty('display');
        nbCharsLeftContainer.querySelector('.spinner').style.removeProperty('display');
        nbCharsLeftContainer.querySelector('.nb-chars-left-text').style.removeProperty('margin-left');
    }

    changeColorNbCharsLeft();

    oldNbCharsLeft = nbCharsLeft;
}

const appearCharsLeft = () => {
    nbCharsLeftContainer.style.opacity = 1;
}

const disappearCharsLeft = () => {
    nbCharsLeftContainer.style.removeProperty('opacity');
}

const initNbCharsLeft = () => {
    // On change le texte quand l'opacity du conteneur est à 0
    setTimeout(() => {
        nbCharsLeftContainer.querySelector('.to-modify').innerHTML = 300;
    }, 400);
}

const changeColorNbCharsLeft = () => {
    // Plus le nombre de caractères restants est faible, plus la couleur est rouge
    let color = null;
    if (isDarkTheme) {
        color = Math.round(0 + (nbCharsLeftContainer.querySelector('.to-modify').innerHTML * 255 / 300));
    } else {
        color = Math.round(255 - (nbCharsLeftContainer.querySelector('.to-modify').innerHTML * 255 / 300));
    }

    nbCharsLeftContainer.querySelector('.to-modify').style.color = `rgb(${color}, 0, 0)`;
    nbCharsLeftContainer.querySelector('.nb-chars-left-text').style.color = `rgb(${color}, 0, 0)`;
    nbCharsLeftContainer.querySelectorAll('.spinner > div').forEach((element) => {
        element.style.backgroundColor = `rgb(${color}, 0, 0)`;
    });
}

const animateScale = (element) => {
    element.style.transform = 'scale(1.05) translateX(0.3vw)';
    setTimeout(() => {
        element.style.removeProperty('transform');
    }, 100);
}

const animateScaleCharsLeft = (event = null) => {
    animateScale(nbCharsLeftContainer);
}

const animateScaleCharsLeftText = (event = null) => {
    if (nbCharsLeft == 0) {
        addEventListener('keydown', animateScaleCharsLeft);
    } else if (nbCharsLeft == 1 && oldNbCharsLeft == 0) {
        removeEventListener('keydown', animateScaleCharsLeft);
    }
}