maxTime = 2200;

// On bloque le scroll au depart
document.body.style.overflowY = "hidden";

//Suppression du loader au bout de MaxTime millisecondes
setTimeout(() => {
    document.getElementById("loader").remove();
},maxTime+600);

// Suppression du background de base pour cacher la page au tout début
setTimeout(() =>{
    document.getElementById("startbackground").remove();
},maxTime/1.6);

// Autoriser le scroll a peine avant le chargement complet de la page
setTimeout(() =>{
    document.body.removeAttribute("style");
},maxTime/1.1);