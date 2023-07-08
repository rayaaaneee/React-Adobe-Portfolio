<head>
    <!-- CSS DE BASE -->
    <link rel="stylesheet" href="<?= PATH_CSS; ?>contact/style.css">
    <!-- CSS DARK THEME -->
    <link rel="stylesheet" href="<?= PATH_CSS; ?>contact/dark-style.css">
    <!-- CSS DES MEDIA QUERIES -->
    <link rel="stylesheet" href="<?= PATH_MEDIA; ?>contact/style.css">
    <!-- SCRIPTS JS -->
    <script type="text/javascript" src="<?= PATH_SCRIPTS; ?>contact/sendMessage.js" defer></script>
    <script type="text/javascript" src="<?= PATH_SCRIPTS; ?>header/script.js" defer></script>
    <script type="text/javascript" src="<?= PATH_SCRIPTS; ?>contact/script.js" defer></script>
    <script type="text/javascript" src="<?= PATH_SCRIPTS; ?>general/moveBackground.js" defer></script>
    <script type="text/javascript" src="<?= PATH_SCRIPTS; ?>general/removeLoader.js" defer></script>
    <script src="<?= PATH_SCRIPTS; ?>general/error.js" defer></script>
    <title>Me contacter</title>
</head>

<header>
    <div id="startbackground"></div>
</header>
<!-- Loader -->
<iframe id="loader" src="loader/"></iframe>
<script type="text/javascript" src="<?= PATH_SCRIPTS; ?>general/removeLoader.js" defer></script>

<?php require_once PATH_VIEWS_PARTS . 'background.php'; ?>