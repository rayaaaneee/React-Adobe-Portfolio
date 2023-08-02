const textTab = ["Rayane Merlin", "Full Stack Developper", "Designer", "IT Student (BAC +2)"];
var index = 1;

const element = document.querySelector(".subtitle > h2");

const typeWriter = (text, element, speed) => {
    let i = 0;
    index = (index + 1) % textTab.length;
    const type = () => {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        } else {
            setTimeout(() => {
                erase(element, 100);
            }, 5500);
        }
    };
    type();
};

const erase = (element, speed) => {
    let i = element.innerHTML.length;
    const erase = () => {
        if (i > 0) {
            element.innerHTML = element.innerHTML.slice(0, i - 1);
            i--;
            setTimeout(erase, speed);
        } else {
            setTimeout(() => {
                typeWriter(textTab[index], element, 100);
            }, 500);
        }
    };
    erase();
};

setTimeout(() => {
    erase(element, 100);
}, 4000);


// Fonction qui s'occupe du hover sur de l'image
const imgMenu = document.querySelector(".menu .download-img");
const colorMenuImg = () => {
    imgMenu.classList.remove("dl-img");
    imgMenu.classList.add("dl-img-hover");
}

const uncolorMenuImg = () => {
    imgMenu.classList.add("dl-img");
    imgMenu.classList.remove("dl-img-hover");
}

const check = (element) => {

    let checkBox = element.querySelector("input[type=checkbox]");

    if (checkBox.checked) {
        checkBox.checked = false;
    } else {
        checkBox.checked = true;
    }
}

const menu = document.querySelector(".menu-links");
const checkBox = document.querySelector(".hamburger-container input[type=checkbox]");
const hideLinks = document.querySelector(".hide-links");

checkBox.checked = false;
let hideLinkIsBlock = true;

const toggleMenuClass = () => {
    menu.classList.toggle("active");

    if (hideLinkIsBlock) {
        hideLinks.style.display = "none";
    } else {
        hideLinks.style.removeProperty("display");
    }
    hideLinkIsBlock = !hideLinkIsBlock;
}