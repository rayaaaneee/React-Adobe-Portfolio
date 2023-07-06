/* Déclaration du tableau de texte */
var texts = [
    "Lecture des préférences...",
    "Recherche des modules externes...",
    "Recherche des paramètres prédéfinis...",
    "Initialisation des outils...",
    "Initialisation...",
    "Initialisation de l'extensibilité universelle...",
    "Initialisation des composants partagés...",
    "Initialisation d'AXE...",
    "Chargement de la palette...",
    "Recherche de [...]...",
    "Lecture des paramètres de couleurs...",
    "Création des tables de conversion des couleurs...",
    "Lecture des pinceaux...",
    "Démarrage des modules externes...<br> SP Substance Suite",
];

//Balise texte à modifier
var loadertext = document.getElementById("dynamicTextLoaderBox");
//Case du tableau de textes a afficher
var i = 0;

//Fonction qui fait apparaitre la page en augmentant son opacité progressivement
(function appearPage(){
    var opacity = 0;
    setInterval(function(){
        if(opacity < 1){
            opacity += 0.03;
            containerLoaderBox.style.opacity = opacity;
            if(opacity > 0.95){
                opacity = 1;
                containerLoaderBox.style.opacity = opacity;
            }
        }
    }, 8);
}) ();

// On place le texte i dans le texte à intervalle régulier
setInterval(loadPage, 130);

function loadPage(){
    if(i < texts.length){
        loadertext.innerHTML = texts[i];
        i++;
    }
}

var containerLoaderBox = document.getElementById("containerLoaderBox");
var backgroundLoader = containerLoaderBox.getElementById("backgroundLoader");

var maxTime = 2200;

setTimeout(disappearPage,maxTime);
setTimeout(disappearBackground,maxTime/1.5);

function disappearBackground(){
    var opacity = 1;
    setInterval(function(){
        if(opacity > 0){
            if(opacity <= 0.2){
                opacity = 0;
            }
            opacity -= 0.2;
            backgroundLoader.style.opacity = opacity;
        } 
        if(opacity <= 0){
            backgroundLoader.style.display = "none";
        }
}, 70);
}

var cursorLoaderBox = containerLoaderBox.getElementById("cursorLoaderBox");
function disappearPage(){
    var opacity = 1;
    setInterval(function(){
        if(opacity > 0){
            opacity -= 0.03;
            containerLoaderBox.style.opacity = opacity;
            if(opacity < 0.05){
                opacity = 0;
            }
        }
        if(opacity == 0){
            cursorLoaderBox.display = "none";
            containerLoaderBox.style.display = "none";
            containerLoaderBox.removeAttribute("onmouseon");
            containerLoaderBox.removeAttribute("onmouseoff");
        }
    }, 8);
}
var intervalChangePoint = null;
function changeCursor(){
    containerLoaderBox.querySelectorAll(".point:not(.p0)").forEach(function(element){
        element.style.scale = 1;
    });
    cursorLoaderBox.querySelector(".p0").style.scale = 1.5;
    clearInterval(intervalChangePoint);
    document.body.style.cursor = "none";
    cursor.style.display = "block";
    cursor.style.position = "absolute";
    /* Le curseur est centré par rapport a la souris */
    document.addEventListener("mousemove", function(e){
        cursor.style.left = e.clientX-47+ "px";
        cursor.style.top = e.clientY+-28+"px";
    });

    /* Animation du curseur */
    var i = -1;
    intervalChangePoint = setInterval(function(){
        i++;
        index = i%6;
        animateCursor(index);
        if(i!=0)
            if(index-1==-1)
                initialCursor(5);
            else
                initialCursor(index-1);
    },120);

    // Au bout de 3s, on remet le curseur de base automatiquement (ca correspond au temps de disparition du loader)
    setTimeout(function(interval){
        window.clearInterval(interval);
    },3000);
}

// Remettre le curseur de base en place quand la souris quitte le container
function unchangeCursor(){
    clearInterval(intervalChangePoint);
    containerLoaderBox.style.cursor = "default";
    cursor.style.display = "none";
}

// Fonction qui prend en paramètre l'index du point a animer et l'anime
function animateCursor(index){
    containerLoaderBox.querySelector(".p"+index).style.scale = 1.5;
    containerLoaderBox.querySelector(".p"+index).style.transition = "all 0.3s";
}

// Fonction qui prend en paramètre l'index du point a remettre en place et le remet en place
function initialCursor(index){
    containerLoaderBox.querySelector(".p"+index).style.scale = 1;
    containerLoaderBox.querySelector(".p"+index).style.transition = "all 0.3s";
}