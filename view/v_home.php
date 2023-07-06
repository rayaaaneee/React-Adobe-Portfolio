<head>
    <!-- CSS -->
    <link rel="stylesheet" href="<?= PATH_CSS; ?>home/style.scss">
    <link rel="stylesheet" href="<?= PATH_CSS; ?>home/frame-cv.css">
    <link rel="stylesheet" href="<?= PATH_CSS; ?>home/dark-style.css">
    <link rel="stylesheet" href="<?= PATH_CSS; ?>home/project-page.css">
    <link rel="stylesheet" href="<?= PATH_CSS; ?>home/animation.css">
    <!-- CSS DES MEDIA QUERIES -->
    <link rel="stylesheet" href="<?= PATH_MEDIA; ?>home/frame-cv.css">
    <link rel="stylesheet" href="<?= PATH_MEDIA; ?>home/project-page.css">
    <link rel="stylesheet" href="<?= PATH_MEDIA; ?>home/style.css">
    <!-- SCRIPTS JS -->
    <script type="text/javascript" src="<?= PATH_SCRIPTS; ?>home/script.js" defer></script>
    <script type="text/javascript" src="<?= PATH_SCRIPTS; ?>home/3dEffectCard.js" defer></script>
    <script type="text/javascript" src="<?= PATH_SCRIPTS; ?>home/scrollProjects.js" defer></script>
    <script type="text/javascript" src="<?= PATH_SCRIPTS; ?>header/script.js" defer></script>
    <script type="text/javascript" src="<?= PATH_SCRIPTS; ?>general/moveBackground.js" defer></script>
    <script type="text/javascript" src="<?= PATH_SCRIPTS; ?>general/removeLoader.js" defer></script>
    <title>Accueil</title>
</head>

<header>
    <div id="startbackground"></div>
</header>
<!-- Loader -->
<iframe id="loader" src="loader/"></iframe>

<?php require_once PATH_VIEWS_PARTS . 'background.php'; ?>

<article id="main">
    <div class="title t1" id="firstmid">
        <p>Mes projets</p>
    </div>
    <div class="horizontal-bars animate" id="horizontal-bar1"></div>
    <div class="projects-chevrons-container">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="chevron left">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
        <article class="projects">
            <?php
            $i = 1;
            foreach ($projects as $project) { ?>
                <div class="main-container animate" onmouseover="colorBar(1);" onmouseleave="uncolorBar(1);" onclick="openProjectPage(this);" data-date="<?= $project->getFormatDate(); ?>">
                    <div class="content" onmouseover="growImg(<?= $i ?>);" onmouseleave="shrinkImg(<?= $i ?>);">
                        <div class="to_download">
                            <p><?= $project->getTitle() ?></p>
                            <img src="<?= $project->getTypeImagePath($theme->getImagePath($project->getTypeImageName())); ?>" imageothertheme="<?= $project->getTypeImagePath($theme->getOtherThemeImagePath($project->getTypeImageName())); ?>" draggable="false">
                        </div>
                        <img src="<?= $project->getIconPath($theme->getImagePath($project->getIcon())) ?>" imageothertheme="<?= $project->getIconPath($theme->getOtherThemeImagePath($project->getIcon())); ?>" id="img<?= $i ?>" class="workslogos" draggable="false">
                    </div>
                    <p class="project-desc hidden"><?= $project->getDescription() ?></p>
                    <p class="project-use-desc hidden"><?= $project->getUseDescription() ?></p>
                    <p class="project-img hidden"><?= $project->getImage(); ?></p>
                    <p class="project-is-download hidden"><?= $project->isDownload(); ?></p>
                    <p class="project-is-link hidden"><?= $project->isLink(); ?></p>
                    <div class="project-uses-skills hidden"><?= $project->usesSkills(); ?></div>
                    <div class="project-uses-languages hidden"><?= $project->usesLanguages(); ?></div>
                    <div class="project-languages hidden">
                        <?php foreach ($project->getLanguages() as $language) : ?>
                            <div class="project-language hidden">
                                <p class="project-language-name"><?= $language->getName(); ?></p>
                                <p class="project-language-color"><?= $language->getColor(); ?></p>
                            </div>
                        <?php endforeach; ?>
                    </div>
                    <?php if ($project->isDownload()) { ?>
                        <p class="project-file hidden"><?= $project->getFile() ?></p>
                        <p class="project-size hidden"><?= $project->getFileSize(); ?></p>
                    <?php }
                    if ($project->isLink()) { ?>
                        <p class="project-link hidden"><?= $project->getLink(); ?></p>
                    <?php } ?>
                </div>
            <?php
                $i++;
            }
            ?>
        </article>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="chevron right">
            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
    </div>
    <div class="project-page-container">
        <div class="project-page">
            <div class="project-page-content">
                <div class="title-project-container">
                    <img class="link-or-download" src="<?= PATH_IMAGES; ?>home/icon/white-link.png" draggable="false">
                    <p class="title-project"></p>
                </div>
                <div class="project-languages-skills title-page-project">
                    <img src="<?= PATH_IMAGES; ?>home/icon/skills.png" draggable="false">
                    <p class="title-language-skill">Compétences :</p>
                </div>
                <div class="project-languages-skills-container page-content">
                    <div class="skill-language-container template hidden">
                        <p></p>
                    </div>
                </div>
                <div class="project-desc text-project-container">
                    <div class="project-desc-text title-page-project">
                        <img src="<?= PATH_IMAGES; ?>home/icon/desc-icon-pink.png" draggable="false">
                        <p>Description :</p>
                    </div>
                    <p class="project-desc-value page-content"></p>
                </div>
                <div class="project-use-desc text-project-container">
                    <div class="project-use-desc-text title-page-project">
                        <img src="<?= PATH_IMAGES; ?>home/icon/use-desc-icon-pink.png" draggable="false">
                        <p>Utilisation :</p>
                    </div>
                    <p class="project-use-desc-value page-content"></p>
                </div>
                <a href="" class="link-btn title-page-project" target="_blank"></a>
                <a href="" class="download-btn title-page-project" download></a>
                <div class="project-size-container text-project-container">
                    <img src="<?= PATH_IMAGES; ?>home/icon/white-memory-icon.png" draggable="false">
                    <p class="page-content">Taille du fichier :</p>
                    <p class="project-size-value page-content"></p>
                    <p class="page-content">Mo</p>
                </div>
                <div class="background-project-page"></div>
            </div>
            <div class="quit-project-button" onclick="closeProjectPage();">
                <p>X
                <p>
            </div>
        </div>
</article>
<h2 class="explicationtext">Vous trouverez ici mes projets importants, qu'ils soient scolaire ou faits de mon côté. <br>Il vous suffit de cliquer pour les télécharger.</h2>
<article id="cv">
    <div class="title t2" id="secondmid">
        <p>Mon CV</p>
    </div>
    <div class="horizontal-bars animate" id="horizontal-bar2"></div>
    <div id="container-cv" class="animate" onmouseover="colorBar(2);" onmouseleave="uncolorBar(2);">
        <div id="cv-img" onclick="openPage();">
            <img src="<?= PATH_FILES; ?>CV.png" alt="cv" data-lightbox="CV_Rayane_Merlin.png" data-title="Voici mon C.V actuel, celui-ci est amené à être modifié mais restera à jour sur le site." draggable="false">
        </div>
        <div id="framecv-visible">
            <div id="container">
                <div id="imgcv">
                    <img draggable="false" src="<?= PATH_FILES; ?>CV.png" alt="photo">
                </div>
                <div id="buttons">
                    <div id="cross" onclick="closePage();">
                        <p>x</p>
                    </div>
                    <div id="print" onclick="printPDF();">
                        <img draggable="false" id="imgbutton" src="<?= PATH_IMAGES; ?>home/frame-cv/print.png">
                    </div>
                    <a href="<?= PATH_FILES; ?>CV.pdf" download="CV_Rayane_Merlin.pdf">
                        <div id="download">
                            <img draggable="false" id="imgbutton" src="<?= PATH_IMAGES; ?>home/frame-cv/download.png" alt="dl">
                        </div>
                    </a>
                    <div id="infos" onclick="showInformations();" onmouseleave="hideInformations();">
                        <img draggable="false" id="imgbutton" src="<?= PATH_IMAGES; ?>home/frame-cv/infos.png" alt="" id="imginfo">
                    </div>
                </div>
                <div id="informations">
                    <div id="title">
                        <p></p>
                    </div>
                    <div id="size">
                        <p></p>
                    </div>
                    <div id="date">
                        <p></p>
                    </div>
                    <div id="type">
                        <p></p>
                    </div>
                </div>
            </div>
            <div id="container-cv-text-bar" class="animate">
                <div class="framecv-bar"></div>
                <div id="framecv-text">
                    <p>À savoir : <br><br> Voici mon CV, celui-ci est amené à être modifié avec le temps, dans quelques mois il sera différent. <br>
                        N'hésitez pas à passer sur ce site, celui-ci est mis à jour très régulièrement et contiendra donc forcément la dernière version en date. </p>
                </div>
                <div class="framecv-bar"></div>
            </div>
            <div id="background"></div>
        </div>
        <div id="cv-text">
            <div class="blackbar"></div>
            <div id="zoom">
                <p>N'hésitez pas à cliquer sur l'image du C.V pour zoomer, cela vous permettra de le visionner dans sa qualité optimale sans avoir besoin de le télécharger.</p>
                <img draggable="false" src="<?= PATH_IMAGES . "home/icon/" . $theme->getImagePath("zoom"); ?>" imageothertheme="<?= PATH_IMAGES . "home/icon/" . $theme->getOtherThemeImagePath("zoom"); ?>" alt="zoom">
            </div>
            <p class="beforebutton">Vous pouvez télécharger mon CV actuel au format pdf en cliquant sur le bouton ci-dessous.</p>
            <a href="<?= PATH_FILES; ?>CV.pdf" download="CV_Rayane_Merlin.pdf"><button class="cv-button">Télécharger</button></a>
            <div class="blackbar"></div>
        </div>
</article>
<article id="realisation">
    <div class="title t3" id="firstmid">
        <p>Mes compétences :</p>
    </div>
    <div class="horizontal-bars animate" id="horizontal-bar3"></div>
    <div class="school-competence-container">
        <?php foreach ($school_competences as $school_competence) : ?>
            <div class="card animate">
                <div class="card-front">
                    <div class="linear-gradient-circle-container card-top-container">
                        <div class="linear-gradient-circle" style="background:<?= $school_competence->getGradient(); ?>">
                            <img src="<?= $school_competence->getImagePath(); ?>" alt="">
                        </div>
                    </div>
                    <h1 class="title-card" style="color:<?= $school_competence->getTitleColor(); ?>">• <?= $school_competence->getTitle(); ?></h1>
                    <div class="card-bottom-container">
                        <div class="card-bottom" style="background-color:<?= $school_competence->getBottomColor(); ?>"></div>
                    </div>
                </div>
                <div class="card-back">
                    <div class="info-icon-container card-top-container">
                        <img src="<?= $school_competence->getInfoIconPath(); ?>" draggable="false">
                    </div>
                    <h2 class="card-back-title" style="color:<?= $school_competence->getTitleColor(); ?>"><?= $school_competence->getTitle(); ?> c'est :</h2>
                    <p class="card-description" style="color:<?= $school_competence->getTitleColor(); ?>"><?= $school_competence->getDescription(); ?></p>
                </div>
            </div>
        <?php endforeach; ?>
    </div>
</article>