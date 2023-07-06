function change(index){
    changeColor(index);
    changeDisplay(index);
}

function unchange(index){
    unchangeColor(index);
    unchangeDisplay(index);
}

function changeColor(index){
    var text = document.querySelector('#text'+index);
    text.style.color="rgb(239, 195, 153)";
}

function unchangeColor(index){
    var text = document.querySelector('#text'+index);
    text.removeAttribute("style");
}

function changeDisplay(index){
    var bloc = document.querySelector('.s'+index);
    bloc.style.display="relative";
}

function unchangeDisplay(index){
    var bloc = document.querySelector('.s'+index);
    bloc.style.display="block";
}

/* let links = document.querySelectorAll('nav ul li a');

links.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        let href = this.getAttribute('href');
        history.pushState(null, null, href);
    }); 
}); */