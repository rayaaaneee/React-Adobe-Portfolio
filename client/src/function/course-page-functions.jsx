export let barCentered = false;
export const setBarCentered = (bool) => {
    barCentered = bool;
}
export let height = null;
export let pointRotation = [];
export let bordersScreen = null;
export let margin = null;
export let isSelect = false;
export let lastSemesterIndex = null;
export let addToScale = 0;
export let intervalAnimation = null;

let pointsContainers;
export const setPointsContainers = (pointsContainersTmp) => {
    pointsContainers = pointsContainersTmp
}
let semesters;
export const setSemesters = (semestersTmp) => {
    semesters = semestersTmp
}

let timeline;
export const setTimeline = (timelineTmp) => {
    timeline = timelineTmp
}

export const initHeight = () => {
    height = window.innerHeight;
    bordersScreen = (height / 20);
    margin = (height / 100) * 10;
}

export const isInSide = (pointMarginTop) => {
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

export const getNewScale = (distanceMid) => {
    let min = 1;
    let max = 2.2;

    let scale = (distanceMid / (height)) * (max - min) - min;
    scale = scale * 1.5;
    return scale;
}

export const distanceMiddle = (pointMarginTop) => {
    let distance = pointMarginTop - (height / 2);
    return Math.abs(distance);
}

let coef = 1.02;
export const isInFivePercentSide = (pointMarginTop) => {
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

const colorPoint = (point) => {
    point.classList.add("focus");
}

const uncolorPoint = (point) => {
    point.classList.remove("focus");
}

const modifyScale = (element, newscale) => {
    let tmp = element.style.transform;
    let scale = tmp.split("scale(")[1].split(")")[0];
    scale = parseFloat(scale);
    scale = scale + (newscale);
    element.style.transform = tmp.split("scale(")[0] + "scale(" + scale + ")";
}

export const colorPointAssociateToSemester = (i) => {
    let point = pointsContainers[i];
    colorPoint(point);
}

export const uncolorPointAssociateToSemester = (i) => {
    console.log("uncolorPoint");
    if (!isSelect || (i !== lastSemesterIndex)) {
        let point = pointsContainers[i];
        uncolorPoint(point);
    }
}

export const onclickSemester = (i) => {
    let semester = semesters[i];
    let point = pointsContainers[i];
    if (!isSelect) {
        lastSemesterIndex = i;

        isSelect = true;

        semester.classList.add("selected");

        colorPoint(point);

        let onclickScale = 0.05;
        modifyScale(point.querySelector(".point"), -onclickScale);
        modifyScale(semester, onclickScale);
        addToScale = onclickScale;

    }
}

export const disclickSemester = (i) => {

    let semester = semesters[i];

    semester.classList.remove("selected");

    let point = pointsContainers[i];

    isSelect = false;

    uncolorPoint(point);

    modifyScale(point.querySelector(".point"), 0.1);
    modifyScale(semester, -0.05);
    addToScale = 0;
}

// Fonction qui permet de faire défiler les points
const moveSemesters = (time = 50) => {

    let i = Math.floor(Math.random() * semesters.length);

    let timeInterval = time;

    let wasPassed = [];

    intervalAnimation = setInterval(() => {

        while (wasPassed.includes(i)) {
            i = Math.floor(Math.random() * semesters.length);
        }
        wasPassed.push(i);

        let semester = semesters[i];

        let proba = Math.floor(Math.random() * 100);
        let lessOrMore = Math.floor(Math.random() * 3);

        let Y = null;
        let X = null;
        let scale = null;
        let rotate = null;

        if (i === lastSemesterIndex)
            scale = addToScale;
        else
            scale = 0;

        let tmpScale = Math.floor(Math.random() * 2);
        if (proba < 65) {

            X = Math.floor(Math.random() * 3);
            rotate = Math.floor(Math.random() * 5);
            Y = (Math.floor(Math.random() * 2));

            if (lessOrMore === 0) {
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

            if (lessOrMore === 0) {
                Y = -Y;
                scale += 1 - (tmpScale / 100);
                rotate = -rotate / 7;
            } else {
                scale += 1 + (tmpScale / 100);
                rotate = rotate / 7;
            }
        }
        let newX = parseInt(semester.getAttribute("initial-x")) + X;
        let semesterStyle = "translateX(" + (newX) + "vw) translateY(" + Y + "vh) scale(" + scale + ") rotate(" + rotate + "deg)";
        semester.style.transform = semesterStyle;

        if (wasPassed.length === semesters.length) {
            clearInterval(intervalAnimation);
        }

    }, timeInterval);
}

export let intervalMoveSemesters = null;

export const main = () => {
    for (let i = 0; i < pointsContainers.length; i++) {
        pointRotation.push(160);
    }
    initHeight();
    moveSemesters(1);
    intervalMoveSemesters = setInterval(moveSemesters, 3000);
}

export const onScroll = () => {
    // Mouvement de la barre
    if (window.scrollY < height) {
        setBarCentered(false);
        let translateValue = (height - (window.scrollY) * 1.7);
        if (translateValue < 0) {
            setBarCentered(true);
            translateValue = 0;
        }
        timeline.style.transform = "translateY(" + translateValue + "px)";
    } else {
        timeline.removeAttribute("style");
    }

    // Modifications des points
    let pointMarginTop = null;
    pointsContainers.forEach((point, index) => {

        let scrollValue = window.scrollY;
        pointMarginTop = point.querySelector(".point").offsetTop - scrollValue + margin;

        if (isInSide(pointMarginTop)) {
            point.style.opacity = 0;
        } else {
            point.style.opacity = 1;
        }

        let distanceMid = distanceMiddle(pointMarginTop);

        // Plus le point est proche du milieu de l'écran, plus il est grand
        pointRotation[index] = -pointMarginTop / 3;
        point.querySelector(".point").style.transform = "rotate(" + pointRotation[index] + "deg) scale(" + getNewScale(distanceMid) + ")";
    });
}