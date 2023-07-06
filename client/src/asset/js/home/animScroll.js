let observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const elements = new Array();

document.querySelectorAll('.animScroll').forEach(el => {
    elements.push(el);
    observer.observe(el);
});

// youtube.com/watch?v=T33NN_pPeNI