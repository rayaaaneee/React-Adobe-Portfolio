var points = document.querySelectorAll(".point");
var height = null;
var bordersScreen = null;
var margin = null;
var initialX = new Array();
var pointRotation = new Array();

( initHeight = () => {
    height = window.innerHeight;
    bordersScreen = (height / 20);
    margin = (height / 100) * 10;
}) ()

const isInSide = (pointMarginTop) => {
    if (barCentered) {
        if (pointMarginTop <= bordersScreen || pointMarginTop >= height - (bordersScreen * 1.5)) {
            return true;
        } else {
            return false;
        }
    } else {
        if (pointMarginTop <= bordersScreen) {
            return true;
        }
    }
}

var coef = 1.02;
const isInFivePercentSide = (pointMarginTop) => {
    if (barCentered) {
        if (pointMarginTop <= (bordersScreen + (coef * bordersScreen)) || pointMarginTop >= (height - ((bordersScreen) - (bordersScreen * coef)))) {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
}

const distanceMiddle = (pointMarginTop) => {
    let distance = pointMarginTop - (height / 2);
    return Math.abs(distance);
}

const getNewScale = (distanceMid) => {
    let min = 1;
    let max = 2.2;

    let scale = (distanceMid / (height)) * (max - min) - min;
    scale = scale * 1.5;
    return scale;
}

var bar = document.querySelector("#timeline");
var barCentered = false;
var translateBarValue = (height - (window.scrollY) * 1.7);

const onscroll = () => {
    // Mouvement de la barre
    if (window.scrollY < height) {
        barCentered = false;
        let translateValue = (height - (window.scrollY) * 1.7);
        if (translateValue < 0) {
            barCentered = true;
            translateValue = 0;
        }
        bar.style.transform = "translateY(" + translateValue + "px)";
    } else {
        bar.removeAttribute("style");
    }

    // Modifications des points
    let pointMarginTop = null;
    points.forEach((point, index) => {

        let scrollValue = window.scrollY;
        pointMarginTop = point.offsetTop - scrollValue + margin;

        /* if (index == 2) if (isInFivePercentSide(pointMarginTop)) console.log("in"); */

        if (isInSide(pointMarginTop)) {
            point.parentNode.style.opacity = 0;
        } else {
            point.parentNode.style.opacity = 1;
        }

        let distanceMid = distanceMiddle(pointMarginTop);

        // Plus le point est proche du milieu de l'écran, plus il est grand
        pointRotation[index] = -pointMarginTop / 3;
        point.style.transform = "rotate(" + pointRotation[index] + "deg) scale(" + getNewScale(distanceMid) + ")";
    });
}

// Fonction qui permet de faire défiler les points
var addToScale = 0;
const moveProjects = (time = 50) => {
    let i = Math.floor(Math.random() * projects.length);

    let timeInterval = time;

    let wasPassed = [];

    let intervalAnimation = setInterval(() => {

        while (wasPassed.includes(i)) {
            i = Math.floor(Math.random() * projects.length);
        }

        wasPassed.push(i);

        let project = projects[i];

        project.style.transition = "background-color 0.5s, box-shadow  0.1s, transform 3s, backdrop-filter 1s";

        let proba = Math.floor(Math.random() * 100);
        let lessOrMore = Math.floor(Math.random() * 3);

        let Y = null;
        let X = null;
        let scale = null;
        let rotate = null;
        if (project.id == lastProjectId)
            scale = addToScale;
        else
            scale = 0;

        let tmpScale = Math.floor(Math.random() * 2);
        if (proba < 65) {

            X = Math.floor(Math.random() * 3);
            rotate = Math.floor(Math.random() * 5);
            Y = (Math.floor(Math.random() * 2));

            if (lessOrMore == 0) {
                Y = -Y;
                scale += 1 - (tmpScale / 100);
                rotate = -rotate / 4;
            } else {
                scale += 1 + (tmpScale / 100);
                rotate = rotate / 4;
            }

        } else {

            X = Math.floor(Math.random() * 2);
            rotate = Math.floor(Math.random() * 7);
            Y = (Math.floor(Math.random() * 4));

            if (lessOrMore == 0) {
                Y = -Y;
                scale += 1 - (tmpScale / 100);
                rotate = -rotate / 7;
            } else {
                scale += 1 + (tmpScale / 100);
                rotate = rotate / 7;
            }
        }
        let newX = initialX[i] + X;
        translate = "translateX(" + (newX) + "vw) translateY(" + Y + "vh) scale(" + scale + ") rotate(" + rotate + "deg)";
        project.style.transform = translate;

        if (i == projects.length - 1) {
            clearInterval(intervalAnimation);
            i = 0;
        }
        i++;
    }, timeInterval);
}

var main = () => {
    for (var i = 0; i < points.length; i++)
        pointRotation.push(160);

    moveProjects(1);
    setInterval(moveProjects, 1000);
    document.addEventListener("scroll", onscroll);
}
var projects = document.querySelectorAll(".project");
projects.forEach((project, index) => {
    let rand = Math.floor(Math.random() * 20) - 10;
    initialX[index] = rand;
    project.style.transform = "translateX(" + rand + "vw)";
    if (index == projects.length - 1) {
        main();
    }
});

const colorPoint = (point) => {
    point.classList.add("selected");
    point.style.boxShadow = "0 0 10px 0 rgb(0, 0, 0)";
    point.style.backdropFilter = "blur(10px)";
    point.parentNode.classList.add("focus");
}

const uncolorPoint = (point) => {
    point.classList.remove("selected");
    point.style.removeProperty("box-shadow");
    point.style.removeProperty("backdrop-filter");
    point.parentNode.classList.remove("focus");
}

const modifyScale = (element, newscale) => {
    tmp = element.style.transform;
    scale = tmp.split("scale(")[1].split(")")[0];
    scale = parseFloat(scale);
    scale = scale + (newscale);
    element.style.transform = tmp.split("scale(")[0] + "scale(" + scale + ")";
}

var isSelect = false;
var lastProjectId = null;
const onclickProject = (project) => {
    if (!isSelect) {
        lastProjectId = project.id;

        isSelect = true;

        project.classList.add("selected");
        let nbPoint = project.id.replace("proj", "");
        let point = document.querySelector("#p" + nbPoint);
        project.querySelector(".arrow-container .arrow").classList.add("active");

        colorPoint(point);

        let onclickScale = 0.05;
        modifyScale(point, -onclickScale);
        modifyScale(project, onclickScale);
        addToScale = onclickScale;

    } else {
        let lastProject = document.querySelector("#" + lastProjectId);
        if (lastProjectId == project.id) {
            disclickProject(project);
            isSelect = false;
            lastProjectId = null;
        } else {
            disclickProject(lastProject);
            isSelect = false;
            onclickProject(project);
        }
        lastProject.querySelector(".arrow-container .arrow").classList.remove("active");
    }
}

const disclickProject = (project) => {
    project.classList.remove("selected");

    let nbPoint = project.id.replace("proj", "");
    let point = document.querySelector("#p" + nbPoint);

    uncolorPoint(point);

    modifyScale(point, 0.1);
    modifyScale(project, -0.05);
    addToScale = 0;
}

const colorButtonsAssociateToProject = (project) => {
    let nbPoint = project.id.replace("proj", "");
    let point = document.querySelector("#p" + nbPoint);
    colorPoint(point);
}

const uncolorButtonsAssociateToProject = (project) => {
    if (!isSelect || project.id != lastProjectId) {
        let nbPoint = project.id.replace("proj", "");
        let point = document.querySelector("#p" + nbPoint);
        uncolorPoint(point);
    }
}

// Si la taille de la fenetre change on mettra à jour les valeurs de la hauteur de la fenetre
window.onresize = initHeight;

// En cas de rechargement de la page on mettra à jour les valeurs de la hauteur de la fenetre meme si l'utilisateur n'a pas encore scroll dans la page
if (translateBarValue < 0) {
    bar.style.removeProperty("transform");
    barCentered = true;
} else {
    bar.style.transform = "translateY(" + translateBarValue + "px)";
    barCentered = false;
}

// Si l'utilisateur clique sur "Consulter", on retire le hash de l'url
const clearUrl = () => {
    setTimeout(() => {
        history.replaceState(null, null, window.location.href.split('#')[0]);
        // Remplacement du hash dans l'URL affichée dans la barre d'adresse
        window.location.hash = '';
    }, 0);
}


