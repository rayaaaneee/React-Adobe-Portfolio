const handleImageLoad = (event) => {
    event.target.classList.remove('onloading');
}

export const animateImageLoading = (images) => {
    images.forEach((image) => {
        image.classList.add('onloading');
        image.addEventListener('load', handleImageLoad);
    });
}