<head>
    <!-- CSS DE BASE-->
    <link rel="stylesheet" href="<?= PATH_CSS; ?>perso/style.scss">
    <!-- CSS DARK MODE -->
    <link rel="stylesheet" href="<?= PATH_CSS; ?>perso/dark-style.css">
    <!-- CSS DES MEDIA QUERIES -->
    <link rel="stylesheet" href="<?= PATH_MEDIA; ?>perso/media.css">
    <!-- SCRIPTS JS -->
    <script type="text/javascript" src="<?= PATH_SCRIPTS; ?>perso/script.js" defer></script>
    <script type="text/javascript" src="<?= PATH_SCRIPTS; ?>header/script.js" defer></script>
    <script type="text/javascript" src="<?= PATH_SCRIPTS; ?>general/moveBackground.js" defer></script>
    <title>Perso</title>
</head>

<header>
    <div id="startbackground"></div>
</header>
<!-- Loader -->
<script type="text/javascript" src="<?= PATH_SCRIPTS; ?>general/removeLoader.js" defer></script>
<iframe id="loader" src="loader/"></iframe>

<?php require_once PATH_VIEWS_PARTS . 'background.php'; ?>

<div class="title t1">
    <p>Perso</p>
</div>
<div class="horizontal-bars animate" id="horizontal-bar1"></div>
<div class="content" onmouseover="colorBar(1);" onmouseleave="uncolorBar(1);">
    <div class="title-part">
        <h1>• Qui suis-je ?</h1>
    </div>
    <div class="content-part">
        <div class="text">
            <p>Je suis un étudiant de 19 ans, passionné par l'informatique et les nouvelles technologies. Actuellement en deuxième année de BUT informatique, je souhaite poursuivre mes études dans le domaine du développement et du design.</p>
        </div>
        <div class="photo">
            <img draggable="false" src="<?= PATH_IMAGES; ?>perso/img.png" id="photopres">
        </div>
    </div>
</div>
<div class="title t2">
    <p>Mes musiques :</p>
    <div class="horizontal-bars animate" id="horizontal-bar2"></div>
    <h3>Voici quelques musiques qui m'ont marquées. Je me permets d'en parler dans ce PortFolio car la musique possède une place importante dans ma vie et dans la société en général. Ce que nous écoutons représente en quelque sorte qui nous sommes, est une source de créativité influant sur nous : les auditeurs.</h3>
</div>
<article id="music" onmouseover="colorBar(2);" onmouseleave="uncolorBar(2);">
    <div id="frames">
        <?php foreach ($music_links as $link) : ?>
            <iframe class="animate" allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write" frameborder="0" height="175" style="max-width:500px;overflow:hidden;background:transparent;" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" src="<?= $link; ?>"></iframe>
        <?php endforeach; ?>
    </div>
</article>
<div class="title t3">
    <p>Les références :</p>
</div>
<div class="horizontal-bars animate" id="horizontal-bar3"></div>
<article id="references">

</article>