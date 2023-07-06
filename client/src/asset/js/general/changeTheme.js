const noMediaFormChangeTheme = $('.theme-form')[0];
const mediaFormChangeTheme = $('.media-theme-form')[0];
const formChangeTheme = [noMediaFormChangeTheme, mediaFormChangeTheme];

const favicon = $('link[rel="icon"]')[0];
const imagesToChange = $('[imageothertheme]');

$(formChangeTheme).on('submit', (event) => {
    event.preventDefault();
    if (event.target.checkValidity() === false) {
        event.stopPropagation();
    } else {
        var formData = new FormData(event.target);
        changeTheme(formData);
    }
});

const changeTheme = (formData) => {
    $.ajax({
        type: "POST",
        url: "./index.php",
        data: formData,
        processData: false,
        contentType: false,
        cache: false,
        timeout: 60000,
        success: function (data) {
            document.body.classList.toggle('body-dark');
            changeFavicon();
            changeImages();
        }
    });
}

const changeFavicon = () => {
    if (document.body.classList.contains('body-dark')) {
        favicon.href = './asset/img/favicon/favicon-dark-theme.png';
    } else {
        favicon.href = './asset/img/favicon/favicon-light-theme.png';
    }
}

const changeImages = () => {
    imagesToChange.each(function (index, element) {
        var currentImage = $(element).attr('src');
        var imageOtherTheme = $(element).attr('imageothertheme');
        $(element).attr('src', imageOtherTheme);
        $(element).attr('imageothertheme', currentImage);
    });
}