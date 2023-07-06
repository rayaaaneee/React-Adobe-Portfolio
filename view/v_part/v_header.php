<!DOCTYPE html>
<html lang="fr">

<head>
    <!-- CSS DE BASE -->
    <link rel="stylesheet" href="<?= PATH_CSS; ?>general/general.css">
    <link rel="stylesheet" href="<?= PATH_CSS; ?>general/background.css">
    <link rel="stylesheet" href="<?= PATH_CSS; ?>general/loaderframe.css">
    <link rel="stylesheet" href="<?= PATH_CSS; ?>general/scrollbar.css">
    <link rel="stylesheet" href="<?= PATH_CSS; ?>general/presets-animation.css">
    <link rel="stylesheet" href="<?= PATH_CSS; ?>general/animation.css">
    <!-- CSS HEADER & FOOTER -->
    <link rel="stylesheet" href="<?= PATH_CSS; ?>header/style.css">
    <link rel="stylesheet" href="<?= PATH_CSS; ?>footer/style.css">
    <!-- CSS DARK MODE -->
    <link rel="stylesheet" href="<?= PATH_CSS; ?>header/dark-style.css">
    <link rel="stylesheet" href="<?= PATH_CSS; ?>footer/dark-style.css">
    <link rel="stylesheet" href="<?= PATH_CSS; ?>general/dark-scrollbar.css">
    <link rel="stylesheet" href="<?= PATH_CSS; ?>general/dark-background.css">
    <!-- CSS MEDIA QUERIES -->
    <link rel="stylesheet" href="<?= PATH_MEDIA; ?>header/style.css">
    <link rel="stylesheet" href="<?= PATH_MEDIA; ?>footer/style.css">
    <!-- SCRIPTS JS -->
    <script type="text/javascript" src="<?= PATH_SCRIPTS; ?>general/jquery-3.6.4.min.js" defer></script>
    <script type="text/javascript" src="<?= PATH_SCRIPTS; ?>general/changeTheme.js" defer></script>
    <script type="text/javascript" src="<?= PATH_SCRIPTS; ?>general/animateApparition.js" defer></script>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- FAVICON & FONTS -->
    <link sizes="180x180" href="<?= $theme->getFavicon() ?>" rel="icon" type="image/png">
    <link href='https://fonts.googleapis.com/css?family=Poppins' rel='stylesheet'>
</head>

<body class="<?= $theme->getBodyClass(); ?>">
    <header>
        <nav id="menu-container">
            <ul class="menu">
                <a href="./" class="menu-logo-container">
                    <div class="logo"></div>
                </a>
                <li onmouseover="change(1);" onmouseleave="unchange(1);"><a class="sites s1" href="./?page=home">
                        <p id="text1">ACCUEIL</p>
                    </a></li>
                <li onmouseover="change(2);" onmouseleave="unchange(2);"><a class="sites s2" href="./?page=course">
                        <p id="text2">PARCOURS</p>
                    </a></li>
                <li onmouseover="change(3);" onmouseleave="unchange(3);"><a class="sites s3" href="./?page=perso">
                        <p id="text3">PERSO</p>
                    </a></li>
                <li onmouseover="change(4);" onmouseleave="unchange(4);"><a class="sites s4" href="./?page=contact">
                        <p id="text4">CONTACT</p>
                    </a></li>
                <form action="" method="post" class="theme-form">
                    <input type="hidden" name="instant-request" value="true">
                    <input type="hidden" name="dark-mode" value="true">
                    <button type="submit" class="mode-button"></button>
                </form>
            </ul>
            <ul class="mediamenu">
                <a href="./">
                    <div class="logo"></div>
                </a>
                <a class="mediasites" id="receptionsite" href="./?page=home"></a>
                <a class="mediasites" id="coursesite" href="./?page=course"></a>
                <a class="mediasites" id="personalsite" href="./?page=perso"></a>
                <a class="mediasites" id="contactsite" href="./?page=contact"></a>
                <form action="" method="post" class="media-theme-form">
                    <input type="hidden" name="instant-request" value="true">
                    <input type="hidden" name="dark-mode" value="true">
                    <button type="submit" class="mode-button"></button>
                </form>
            </ul>
        </nav>
    </header>