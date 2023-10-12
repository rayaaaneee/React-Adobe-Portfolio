export let barCentered = false;
export const setBarCentered = (bool) => {
    barCentered = bool;
}
export let height = null;
export let initialX = [];
export let pointRotation = [];
export let bordersScreen = null;
export let margin = null;
export let isSelect = false;
export let lastSemesterId = null;
export let addToScale = 0;

let points;
export const setPoints = (pointsTmp) => {
    points = pointsTmp
}
let semesters;
export const setSemesters = (semestersTmp) => {
    semesters = semestersTmp
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
    let tmp = element.style.transform;
    let scale = tmp.split("scale(")[1].split(")")[0];
    scale = parseFloat(scale);
    scale = scale + (newscale);
    element.style.transform = tmp.split("scale(")[0] + "scale(" + scale + ")";
}

const colorButtonsAssociateToSemester = (semester) => {
    let nbPoint = semester.id.replace("proj", "");
    let point = document.querySelector("#p" + nbPoint);
    colorPoint(point);
}

const uncolorButtonsAssociateToSemester = (semester) => {
    if (!isSelect || semester.id != lastSemesterId) {
        let nbPoint = semester.id.replace("proj", "");
        let point = document.querySelector("#p" + nbPoint);
        uncolorPoint(point);
    }
}

const onclickSemester = (semester) => {
    if (!isSelect) {
        lastSemesterId = semester.id;

        isSelect = true;

        semester.classList.add("selected");
        let nbPoint = semester.id.replace("proj", "");
        let point = document.querySelector("#p" + nbPoint);
        semester.querySelector(".arrow-container .arrow").classList.add("active");

        colorPoint(point);

        let onclickScale = 0.05;
        modifyScale(point, -onclickScale);
        modifyScale(semester, onclickScale);
        addToScale = onclickScale;

    } else {
        let lastsemester = document.querySelector("#" + lastSemesterId);
        if (lastSemesterId === semester.id) {
            disclickSemester(semester);
            isSelect = false;
            lastSemesterId = null;
        } else {
            disclickSemester(lastsemester);
            isSelect = false;
            onclickSemester(semester);
        }
        lastsemester.querySelector(".arrow-container .arrow").classList.remove("active");
    }
}

const disclickSemester = (semester) => {
    semester.classList.remove("selected");

    let nbPoint = semester.id.replace("proj", "");
    let point = document.querySelector("#p" + nbPoint);

    uncolorPoint(point);

    modifyScale(point, 0.1);
    modifyScale(semester, -0.05);
    addToScale = 0;
}

// Fonction qui permet de faire défiler les points
const moveSemesters = (time = 50) => {
    let i = Math.floor(Math.random() * semesters.length);

    let timeInterval = time;

    let wasPassed = [];

    let intervalAnimation = setInterval(() => {

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
        if (semester.id === lastSemesterId)
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
        let newX = initialX[i] + X;
        let translate = "translateX(" + (newX) + "vw) translateY(" + Y + "vh) scale(" + scale + ") rotate(" + rotate + "deg)";
        semester.style.transform = translate;

        if (i === semesters.length - 1) {
            clearInterval(intervalAnimation);
            i = 0;
        }
        i++;
    }, timeInterval);
}

export const main = () => {
    for (var i = 0; i < points.length; i++) {
        pointRotation.push(160);
    }
    initHeight();
    moveSemesters(1);
    setInterval(moveSemesters, 1000);
}