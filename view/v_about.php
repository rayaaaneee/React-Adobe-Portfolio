<head>
    <!-- CSS -->
    <link rel="stylesheet" href="<?= PATH_CSS; ?>about/style.css">
    <!-- CSS DARK MODE -->
    <link rel="stylesheet" href="<?= PATH_CSS; ?>about/dark-style.css">
    <!-- CSS DES MEDIA QUERIES -->
    <link rel="stylesheet" href="<?= PATH_MEDIA; ?>about/style.css">
    <!-- SCRIPT JS -->
    <?php if (!$theme->isLightTheme()) { ?>
        <script type="text/javascript" src="<?= PATH_SCRIPTS; ?>header/script.js" defer></script>
    <?php } ?>
    <script type="text/javascript" src="<?= PATH_SCRIPTS; ?>general/moveBackground.js" defer></script>
    <title>À propos</title>
</head>

<?php require_once PATH_VIEWS_PARTS . 'background.php'; ?>

<div class="main-container">
    <div class="content">
        <div class="privacy">
            <div class="title-container title-container-first-child">
                <h1 class="title title1">• Politique de confidentialité</h1>
                <div class="bar first-bar animate"></div>
                <img src="<?= PATH_IMAGES . "about/" . $theme->getImagePath("privacy"); ?>" alt="privacy" draggable="false" imageothertheme="<?= PATH_IMAGES . "about/" . $theme->getOtherThemeImagePath("privacy"); ?>" />
            </div>
            <p class="text-content">Votre vie privée est importante pour moi. La politique d'Adobe PortFolio est de respecter votre vie privée et de se conformer à toutes les lois et réglementations applicables concernant les informations personnelles que je pourrais collecter à votre sujet, y compris sur mon site Web, par l'adresse <a href="./"><strong>https://rayanemerlin.com/</strong></a></br>Cette politique est en vigueur depuis le 7 février 2023 et a été mise à jour pour la dernière fois le 7 février 2023.</p>
            <h2 class="subtitle">- Me contacter</h2>
            <p class="text-content">Pour toute question ou préoccupation concernant votre vie privée, vous pouvez me contacter en utilisant les coordonnées suivantes :</br><a href="./?page=contact">https://rayanemerlin.com/?page=contact</a></p>
            <h2 class="subtitle">- Informations collectées</h2>
            <p class="text-content">Les informations que je collecte incluent à la fois les informations que vous fournissez sciemment et activement lorsque vous utilisez ou participez à l'un de nos services et promotions, et toute information envoyée automatiquement par vos appareils lors de l'accès à nos produits et services.
            </p>
            <h2 class="subtitle">- Log Data</h2>
            <p class="text-content">Lorsque vous visitez ce site Web, les serveurs peuvent enregistrer automatiquement les données standard fournies par votre navigateur Web. Il peut inclure l'adresse IP (Internet Protocol) de votre appareil, le type et la version de votre navigateur, les pages que vous visitez, l'heure et la date de votre visite, le temps passé sur chaque page, d'autres détails sur votre visite et des détails techniques qui se produisent dans conjonction avec les erreurs que vous pourriez rencontrer. </br> Veuillez noter que même si ces informations peuvent ne pas être personnellement identifiables en elles-mêmes, il peut être possible de les combiner avec d'autres données pour identifier personnellement des personnes individuelles.
            </p>
            <h2 class="subtitle">- Informations personnelles</h2>
            <p class="text-content">Il pourrait vous être demandées des informations personnelles qui peuvent inclure un ou plusieurs des éléments suivants :</br>• Nom</br>• Email</p>
            <h2 class="subtitle">- Utilisation des cookies</h2>
            <p class="text-content">L'utilisation des « cookies » pour collecter des informations sur vous et votre activité sur notre site. Un cookie est un petit élément de données que notre site Web stocke sur votre ordinateur et auquel il accède à chaque fois que vous visitez, afin que je puissions comprendre comment vous utilisez notre site.</p>
        </div>
        <div class="contact">
            <div class="title-container">
                <h1 class="title title2">• À propos</h1>
                <div class="bar second-bar animate"></div>
                <img src="<?= PATH_IMAGES . "about/" . $theme->getImagePath("about"); ?>" alt="about_icon" draggable="false" imageothertheme="<?= PATH_IMAGES . "about/" . $theme->getOtherThemeImagePath("about"); ?>" />
            </div>
            <p class="text-content">Ce site a été entièrement codé par mes soins dans le but de présenter mon parcours, mes projets et mes compétences. </br> De même, tous les projets présentés ont pu être codés en partie ou entièrement par mes soins. </br> Le logo a été inspiré du logo officiel d'Adobe Photoshop (plus généralement de l'ensemble des logos de la suite Adobe). Le loader a lui été inspiré du chargement officiel d'Adobe Photoshop 2022.</p>
        </div>
    </div>
</div>