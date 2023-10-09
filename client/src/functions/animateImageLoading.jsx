const handleImageLoad = (event) => {
    event.target.classList.remove('onloading');
}

export const animateImageLoading = () => {
    const images = document.querySelectorAll('.onloading');
    images.forEach((image) => {
        image.addEventListener('load', handleImageLoad);
    });
}

