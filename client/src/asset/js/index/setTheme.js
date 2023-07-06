const setLightThemeForm = $('.media-light-theme-form')[0];
const setDarkThemeForm = $('.media-dark-theme-form')[0];
const favicon = $('link[rel="icon"]')[0];

$(setLightThemeForm).submit(function (event) {

    event.preventDefault();

    if (setLightThemeForm.checkValidity() === false) {
        event.stopPropagation();
    } else {
        formData = new FormData(setLightThemeForm);
        theme = {
            name: 'light',
            form: formData
        };
        setTheme(theme);
    }

});

$(setDarkThemeForm).submit(function (event) {

    event.preventDefault();

    if (setDarkThemeForm.checkValidity() === false) {
        event.stopPropagation();
    } else {
        formData = new FormData(setDarkThemeForm);
        theme = {
            name: 'dark',
            form: formData
        };
        setTheme(theme);
    }

});

const setTheme = (theme) => {
    $.ajax({
        type: "POST",
        url: "./index.php",
        data: theme.form,
        processData: false,
        contentType: false,
        cache: false,
        timeout: 60000,
        success: function (data) {
            if (theme.name === 'light') {
                document.body.classList.remove('body-dark');
            } else {
                document.body.classList.add('body-dark');
            }
            changeFavicon(theme.name);
        }
    });
}

const changeFavicon = (theme) => {
    if (theme === 'light') {
        favicon.href = './asset/img/favicon/favicon-light-theme.png';
    } else {
        favicon.href = './asset/img/favicon/favicon-dark-theme.png';
    }
}

