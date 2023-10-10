import { animateApparition } from '../functions/appearence';
import { animateImageLoading } from '../functions/animateImageLoading';
import { ManageBody } from '../functions/manageBody';
import { useEffect } from 'react';

import medalImg from '../asset/img/course/medal-white.png'

import '../asset/css/course/style.scss';
import '../asset/css/course/semester-page.scss';
import '../asset/css/course/dark-style.scss';

import { Semester } from '../objects/semester';


import semesterJson from '../asset/data/course/semester.json';


const Course = () => {

    useEffect(() => {
        animateApparition();
        animateImageLoading();
    }, []);;

    ManageBody.changeClass('course');

    useEffect(() => {
        document.title = 'Mon parcours';
    });

    return (
        <>
            <div class="explain-container">
                <div class="explain animate">
                    <img class="medal-img" src={ medalImg } alt="icon-study" draggable="false" />
                    <h1 class="explain-text">Qu'est-ce que cette page ?</h1>
                    <p class="explain-text">Voici mon parcours scolaire allant de l'obtention du bac jusqu'à aujourd'hui.</p>
                    <p class="explain-text">Cliquez sur chacune des cases pour en savoir plus sur chaque semestre, leur contenu et les projets réalisés.</p>
                    <a href="#view" class="explain-text" onclick="clearUrl();">
                        <p>Consulter</p>
                        <div class="arrow-view-container">
                            <div class="arrow-view"></div>
                            <div class="arrow-view"></div>
                        </div>
                    </a>
                </div>
            </div>
            <article id="parallax-projects">
                <div id="timeline" style="transform:translateY(100vh);"></div>
                <div id="fordisplay">
                    <div id="points">
                        <?php for ($i = 0; $i < $nbSemesters; $i++) { ?>
                            <div class="point-container" data-date='<?= $semesters[$i]->formatStartingDate(); ?>'>
                                <div class="point" id="p<?= $i + 1 ?>"></div>
                            </div>
                        <?php } ?>
                    </div>
                    <div id="projects">
                        <div id="view"></div>
                        <?php for ($i = 0; $i < $nbSemesters; $i++) : ?>
                            <div class="project animate" id="proj<?= $i + 1; ?>" onmouseover="colorButtonsAssociateToProject(this);" onclick="onclickProject(this)" onmouseout="uncolorButtonsAssociateToProject(this)">
                                <div class="title-project-container">
                                    <img src="<?= $semesters[$i]->getIconPath(); ?>" alt="icon-study" draggable="false" />
                                    <h1 class="title-project"><?= $semesters[$i]->getTitle(); ?></h1>
                                    <div class="arrow-container">
                                        <div class="arrow" onclick="openSemesterPage(this, event);"></div>
                                    </div>
                                </div>
                                <p class="project-description"><?= $semesters[$i]->getDescription(); ?></p>
                                <div class="bottom-project-container">
                                    <div class="bottom-project"></div>
                                </div>
                                <div class="hidden-informations hidden" hidden>
                                    <p class="starting-date"><?= $semesters[$i]->formatStartingDate(); ?></p>
                                    <p class="ending-date"><?= $semesters[$i]->formatEndingDate(); ?></p>
                                    <p class="title-semester"><?= $semesters[$i]->getTitle(); ?></p>
                                    <p class="icon-white"><?= $semesters[$i]->getWhiteIconPath(); ?></p>
                                    <p class="school-icon"><?= $semesters[$i]->getSchoolIconPath(); ?></p>
                                    <p class="has-specialties"><?= $semesters[$i]->hasSpecialties(); ?></p>
                                    <div class="specialties-container">
                                        <?php if ($semesters[$i]->hasSpecialties()) : ?>
                                            <?php foreach ($semesters[$i]->getSpecialties() as $specialty) : ?>
                                                <p class="specialty">- <?= $specialty; ?></p>
                                            <?php endforeach; ?>
                                        <?php endif; ?>
                                    </div>
                                    <p class="has-subjects"><?= $semesters[$i]->hasSubjects(); ?></p>
                                    <?php if ($semesters[$i]->hasSubjects()) : ?>
                                        <p class="subject"><?= $semesters[$i]->getSubjectsPath(); ?></p>
                                    <?php endif; ?>
                                    <p class="school-name"><?= $semesters[$i]->getSchoolName(); ?></p>
                                    <p class="school-location"><?= $semesters[$i]->getSchoolLocation(); ?></p>
                                    <p class="school-address"><?= $semesters[$i]->getSchoolAddress(); ?></p>
                                </div>
                            </div>
                        <?php endfor; ?>
                    </div>
                </div>
            </article>
            <article id="semesterPage">
                <div class="semester-page-main-container">
                    <div class="semester-page-title-img-container">
                        <img class="semester-page-img" alt="icon-study" draggable="false" />
                        <p class="title-semester"></p>
                    </div>
                    <div class="semester-page-body">
                        <div class="semester-part semester-date-part">
                            <div class="semester-page-date semester-page-title-part">
                                <img src="<?= PATH_IMAGES; ?>course/calendar-pink.png" alt="calendar" draggable="false" />
                                <div class="page-title-part"> Dates : </div>
                            </div>
                            <div class="semester-page-content semester-page-content-date">
                                <div class="timeline-semester-date-container">
                                    <div class="timeline"></div>
                                    <div class="semester-point-container">
                                        <div class="semester-point"></div>
                                        <div class="semester-point"></div>
                                    </div>
                                </div>
                                <div class="text-semester-date-container">
                                    <p class="semester-page-starting-date">Date de début ou quoi</p>
                                    <p class="semester-page-ending-date">Date de fin ou quoi</p>
                                </div>
                            </div>
                        </div>
                        <div class="semester-part semester-school-part">
                            <div class="semester-page-school semester-page-title-part">
                                <img src="<?= PATH_IMAGES; ?>course/school-pink.png" alt="school-icon" draggable="false" />
                                <div class="page-title-part"> Ecole : </div>
                            </div>
                            <div class="semester-page-content">
                                <img class="semester-school-img" alt="school-icon" draggable="false" src="" />
                                <div class="semester-school-text">
                                    <h3 class="semester-school-name"></h3>
                                    <p class="semester-school-location"></p>
                                    <p class="semester-school-address"></p>
                                </div>
                            </div>
                        </div>
                        <div class="semester-part semester-specialties-part">
                            <div class="semester-page-specialties semester-page-title-part">
                                <img src="<?= PATH_IMAGES; ?>course/specialties-pink.png" alt="specialty-icon" draggable="false" />
                                <div class="page-title-part"> Spécialités : </div>
                            </div>
                            <div class="semester-page-content">
                                <p class="semester-page-specialty"></p>
                                <p class="semester-page-specialty"></p>
                            </div>
                        </div>
                        <div class="semester-part semester-subjects-part">
                            <div class="semester-page-tab semester-page-title-part">
                                <img src="<?= PATH_IMAGES; ?>course/tab.png" alt="tab-icon" draggable="false" />
                                <div class="page-title-part"> Matières : </div>
                            </div>
                            <div class="semester-page-content">
                                <p class="semester-page-subject">Ici sont les matières étudiées et les coefficients de ces mêmes matières .</p>
                                <button onclick="openImageSemester();">Voir les matières</button>
                            </div>
                        </div>
                    </div>
                    <div class="semester-page-subjects">
                        <div class="image-subject-container">
                            <img src="" class="semester-page-subjects-image" alt="subjects" draggable="false">
                            <div class="leave-semester-subject" onclick="closeImageSemester();">
                                <p>X</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="all-cross-container">
                    <div class="cross-semester-page-container" onclick="closeSemesterPage();">
                        <p>X</p>
                    </div>
                </div>
                <div class="background-semester-page"></div>
            </article>
        </>
    );
}

export default Course;