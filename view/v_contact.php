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

<article id="formContainer">
    <div class="alert-container">
    </div>
    <main>
        <div class="pres-container">
            <div id="pres" class="animate">
                <img draggable="false" src="<?= PATH_IMAGES; ?>contact/contact.png" id="imgcontact">
                <noscript>
                    <h3>Activez d'abord javascript pour pouvoir envoyer un message</h3>
                </noscript>
                <h3 class="present">Pour tout contact, vous pouvez aussi passer par cette page.<br>
                    Pour cela, c'est très simple : <br>
                    • Rentrez le nom / pseudonyme sous lequel vous enverrez le message<br>
                    • Rentrez votre adresse mail<br>
                    • Rentrez simplement votre message !
                </h3>
            </div>
        </div>
        <div class="form-container">
            <div class="formulaire animate">
                <form method="post" id="sendMessageForm">
                    <input type="hidden" name="instant-request" value="true">
                    <table class="form-style">
                        <tr>
                            <td>
                                <label>
                                    Votre nom <span class="required">*</span>
                                </label>
                            </td>
                            <td>
                                <input type="text" name="name" class="long" required placeholder="Nom Prénom">
                                <span class="error" id="errorname"></span>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label>
                                    Votre adresse e-mail <span class="required">*</span>
                                </label>
                            </td>
                            <td>
                                <input type="email" name="email" class="long" required placeholder="example@mail.com">
                                <span class="error" id="erroremail"></span>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label>
                                    Message <span class="required">*</span>
                                </label>
                            </td>
                            <td>
                                <textarea name="message" class="long field-textarea" required placeholder="Voici mon message.." maxlength="300" oninput="getNbCharsLeft(this);" onfocus="appearCharsLeft();" onblur="disappearCharsLeft();"></textarea>
                                <div class="nb-chars-left">
                                    <p class="to-modify">nb chars</p>
                                    <p class="nb-chars-left-text">caractères restants</p>
                                    <div class="spinner">
                                        <div class="bounce1 bounce"></div>
                                        <div class="bounce2 bounce"></div>
                                        <div class="bounce3 bounce"></div>
                                    </div>
                                </div>
                                <span class="error" id="errormsg"></span>
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td class="input-container">
                                <input type="submit" name="send-message" value="Envoyer">
                                <input type="reset" value="Réinitialiser" onclick="initNbCharsLeft();">
                            </td>
                        </tr>
                    </table>
                </form>
            </div>
        </div>
    </main>
</article>