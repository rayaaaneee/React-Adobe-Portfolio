<head>
    <!-- CSS -->
    <link rel="stylesheet" href="<?= PATH_CSS; ?>index/style.css">
    <link rel="stylesheet" href="<?= PATH_CSS; ?>index/appearence.css">
    <!-- CSS DARK MODE -->
    <link rel="stylesheet" href="<?= PATH_CSS; ?>index/dark-style.css">
    <!-- CSS DES MEDIA QUERIES -->
    <!-- SCRIPT JS -->
    <script type="text/javascript" src="<?= PATH_SCRIPTS; ?>general/jquery-3.6.4.min.js" defer></script>
    <script type="text/javascript" src="<?= PATH_SCRIPTS; ?>index/setTheme.js" defer></script>
    <script src="<?= PATH_SCRIPTS; ?>index/script.js" defer></script>
    <!-- FONTS -->
    <link href='https://fonts.googleapis.com/css?family=Poppins' rel='stylesheet'>
    <link href='<?= $theme->getFavicon(); ?>' rel='icon' type='image/x-icon' />
    <title>Adobe Portfolio</title>
</head>

<body class="<?= $theme->getBodyClass(); ?>">
    <header>
        <div class="triangle border-triangle header-triangle"></div>
        <div class="background-container">
            <div class="triangle triangle-red"></div>
            <div class="triangle triangle-orange"></div>
            <div class="triangle triangle-yellow"></div>
            <div class="circle circle-one"></div>
            <div class="circle circle-two"></div>
        </div>
        <nav class="menu basic-menu">
            <div class="logo">
                <img src="<?= PATH_IMAGES; ?>favicon/favicon-dark-theme.png" alt="logo" draggable="false">
            </div>
            <ul class="menu-links">
                <li><a href="./?page=home">Accueil</a></li>
                <li><a href="./?page=course">Parcours</a></li>
                <li><a href="./?page=perso">Perso</a></li>
                <li><a href="./?page=contact">Contact</a></li>
                <li class="cv-download">
                    <a href="<?= PATH_FILES; ?>CV.pdf" download="CV_Rayane_Merlin.pdf" onmouseover="colorMenuImg();" onmouseleave="uncolorMenuImg();">
                        <div class="container-cv-download">
                            <p>C</p>
                            <p>V</p>
                            <div class="download-img dl-img"></div>
                        </div>
                    </a>
                </li>
                <div class="hide-links"></div>
            </ul>
            <div class="hamburger-container" onclick="check(this);toggleMenuClass();">
                <input type="checkbox" id="hamburger-checkbox">
                <div class="hamburger-bar top-bar"></div>
                <div class="hamburger-bar middle-bar"></div>
                <div class="hamburger-bar bottom-bar"></div>
            </div>
        </nav>
        <div class="menu media-menu">
            <div class="logo">
                <img src="<?= PATH_IMAGES; ?>favicon/white-favicon.png" alt="logo" draggable="false">
            </div>
            <ul class="menu-page">
                <!--                 <li><a href="./?page=home">Accueil</a></li>
                <li><a href="./?page=course">Parcours</a></li>
                <li><a href="./?page=perso">Perso</a></li>
                <li><a href="./?page=contact">Contact</a></li>
                <li class="cv-download">
                    <a href="<= PATH_FILES; ?>CV.pdf" download="CV_Rayane_Merlin.pdf" onmouseover="colorMenuImg();" onmouseleave="uncolorMenuImg();">
                        <div class="container-cv-download">
                            <p>C</p>
                            <p>V</p>
                            <div class="download-img dl-img"></div>
                        </div>
                    </a>
                </li> -->
            </ul>
            <div class="hamburger-container" onclick="check(this);toggleMenuClass();">
                <input type="checkbox" id="hamburger-checkbox">
                <div class="hamburger-bar top-bar"></div>
                <div class="hamburger-bar middle-bar"></div>
                <div class="hamburger-bar bottom-bar"></div>
            </div>
        </div>
        <a href="./?page=home" class="get-start">Découvrir</a>
        </div>
    </header>
    <main>
        <div class="container">
            <div class="title">
                <h1>Adobe Portfolio</h1>
                <div class="main-bar"></div>
                <div class="subtitle">
                    <h2>Rayane Merlin</h2> <!-- Texte dynamique -->
                    <div class="vertical-bar"></div>
                </div>
            </div>
        </div>
    </main>
    <footer>
        <div class="btn-switch-mode">
            <form action="./" method="post" class="media-dark-theme-form">
                <input type="hidden" name="instant-request" value="true">
                <input type="hidden" name="index-form-set-theme" value="true">
                <input type="hidden" name="set-dark-mode" value="true">
                <button type="submit" class="<?= $theme->getButtonClass() ?> mode-button">
                </button>
            </form>
            <form action="./" method="post" class="media-light-theme-form">
                <input type="hidden" name="instant-request" value="true">
                <input type="hidden" name="index-form-set-theme" value="true">
                <input type="hidden" name="set-light-mode" value="true">
                <button type="submit" class="<?= $theme->getButtonClass() ?> mode-button"></button>
            </form>
        </div>
        <div class="triangle border-triangle footer-triangle"></div>
        <a href="./?page=about" class="about-page">
            <p>Crédits</p>
        </a>
        <ul class="footer-links">
            <li title="Linked In">
                <a class="linkedin-link" href="https://www.linkedin.com/in/rayanemerlin/" target="_blank">
                </a>
            </li>
            <li title="School Gitlab">
                <a class="gitlab-link" href="https://forge.univ-lyon1.fr/p2103994" target="_blank">
                </a>
            </li>
            <li title="Personal Github">
                <a class="github-link" href="https://github.com/rayaaaneee" target="_blank">
                </a>
            </li>
            <li title="Mail">
                <a class="mail-link" href="mailto:rayane.merlin8@gmail.com">
                </a>
            </li>
            <li title="Phone">
                <a class="tel-link" href="tel:+33768283277">
                </a>
            </li>
        </ul>
    </footer>
</body>