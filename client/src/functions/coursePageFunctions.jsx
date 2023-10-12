export let barCentered = false;
export let height = null;
export let initialX = new Array();
export let bordersScreen = null;
export let margin = null;

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

var coef = 1.02;
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