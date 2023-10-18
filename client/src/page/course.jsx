import { animateApparition } from '../functions/appearence';
import { animateImageLoading } from '../functions/animateImageLoading';
import { ManageBody } from '../functions/manageBody';
import { useEffect, useRef, useState } from 'react';
import { main, distanceMiddle, getNewScale, isInSide, initHeight, colorButtonsAssociateToSemester, 
uncolorButtonsAssociateToSemester, onclickSemester, setPointsContainers, setSemesters, setBarCentered, 
height, margin, pointRotation, intervalMoveSemesters } from '../functions/coursePageFunctions';

import medalImg from '../asset/img/course/medal-white.png';
import dateImg from '../asset/img/course/calendar-pink.png';
import specialtiesImg from '../asset/img/course/specialties-pink.png';
import schoolImg from '../asset/img/course/school-pink.png';
import matterImg from '../asset/img/course/tab.png';

import '../asset/css/course/style.scss';
import '../asset/css/course/semester-page.scss';
import '../asset/css/course/dark-style.scss';

import { Semester } from '../objects/semester';

import semesterJson from '../asset/data/course/semester.json';


const Course = () => {

    useEffect(() => {
        animateApparition();
        animateImageLoading();
    }, []);

    useEffect(() => {
        document.title = 'Mon parcours';
        setPointsContainers(pointsContainers.current);
        setSemesters(semestersRef.current);
        main();
        return () => {
            document.removeEventListener('scroll', onScroll);
            document.removeEventListener('resize', initHeight);
            clearInterval(intervalMoveSemesters);
        }
    });

    ManageBody.changeClass('course');

    const semesters = Semester.processRow(semesterJson);

    let timelineRef = useRef(null);
    let pointsContainers = useRef([]);
    let semestersRef = useRef([]);

    // Si l'utilisateur clique sur "Consulter", on retire le hash de l'url
    const clearUrl = () => {
        setTimeout(() => {
            // Remplacement du hash dans l'URL affichée dans la barre d'adresse
            window.history.replaceState(null, null, window.location.href.split('#')[0]);
        }, 0);
    }

    const onScroll = () => {
        // Mouvement de la barre
        if (window.scrollY < height) {
            setBarCentered(false);
            let translateValue = (height - (window.scrollY) * 1.7);
            if (translateValue < 0) {
                setBarCentered(true);
                translateValue = 0;
            }
            timelineRef.current.style.transform = "translateY(" + translateValue + "px)";
        } else {
            timelineRef.current.removeAttribute("style");
        }

        // Modifications des points
        let pointMarginTop = null;
        pointsContainers.current.forEach((point, index) => {

            let scrollValue = window.scrollY;
            pointMarginTop = point.querySelector(".point").offsetTop - scrollValue + margin;

            // if (index == 2) if (isInFivePercentSide(pointMarginTop)) console.log("in");

            if (isInSide(pointMarginTop)) {
                point.style.opacity = 0;
            } else {
                point.style.opacity = 1;
            }

            let distanceMid = distanceMiddle(pointMarginTop);

            // Plus le point est proche du milieu de l'écran, plus il est grand
            pointRotation[index] = -pointMarginTop / 3;
            point.querySelector(".point").style.transform = "rotate(" + pointRotation[index] + "deg) scale(" + getNewScale(distanceMid) + ")";
        });
    }

    const [semesterPageIsOpen, setSemesterPageIsOpen] = useState(false);
    const [currentSemester, setCurrentSemester] = useState(null);

    const semesterPage = useRef(null);
    const crossSemesterPage = useRef(null);
    const semesterPageSubjectsContainer = useRef(null);

    useEffect(() => {
        if (semesterPageIsOpen) {
            animateImageLoading();
            document.body.style.overflow = "hidden";
            semesterPage.current.classList.add("visible");
        } else {
            setCurrentSemester(null);
            semesterPage.current.classList.remove("visible");
            document.body.style.removeProperty("overflow");
        }
    }, [semesterPageIsOpen]);

    const openSemesterPage = (semester) => {
        setSemesterPageIsOpen(true);
        setCurrentSemester(semester);
    }
    const closeSemesterPage = () => {
        setSemesterPageIsOpen(false);
    }

    const openImageSemester = () => {
        crossSemesterPage.current.classList.add("hidden");
        semesterPageSubjectsContainer.current.classList.add("visible");
    }
    const closeImageSemester = () => {
        crossSemesterPage.current.classList.remove("hidden");
        semesterPageSubjectsContainer.current.classList.remove("visible");
    }

    document.addEventListener('resize', initHeight);
    document.addEventListener('scroll', onScroll);

    return (
        <>
            <div className="explain-container">
                <div className="explain animate">
                    <img className="medal-img" src={ medalImg } alt="icon-study" draggable="false" />
                    <h1 className="explain-text">Qu'est-ce que cette page ?</h1>
                    <p className="explain-text">Voici mon parcours scolaire allant de l'obtention du bac jusqu'à aujourd'hui.</p>
                    <p className="explain-text">Cliquez sur chacune des cases pour en savoir plus sur chaque semestre, leur contenu et les projets réalisés.</p>
                    <a href="#view" className="explain-text" onClick={ clearUrl }>
                        <p>Consulter</p>
                        <div className="arrow-view-container">
                            <div className="arrow-view"></div>
                            <div className="arrow-view"></div>
                        </div>
                    </a>
                </div>
            </div>
            <article id="parallax-semesters">
                <div ref={ timelineRef } id="timeline" style={{transform: "translateY(100vh)"}}></div>
                <div id="fordisplay">
                    <div id="points">
                        {semesters.map((semester, i) => {
                            return (
                                <div ref={ point => (pointsContainers.current[i] = point) } className="point-container" datadate={ semester.formatStartingDate() }>
                                    <div className="point"></div>
                                </div>
                            );
                        })}
                    </div>
                    <div id="semesters">
                        <div id="view"></div>
                        { semesters.map((semester, i) => {
                            return (
                                <div className="semester animate" initial-x={ (Math.floor(Math.random() * 20) - 10) } ref={ semester => (semestersRef.current[i] = semester) } onMouseOver={ () => colorButtonsAssociateToSemester(i) } onClick={ () => onclickSemester(i) } onMouseOut={ () => uncolorButtonsAssociateToSemester(i) }>
                                    <div className="title-semester-container">
                                        <img src={ semester.getIcon() } alt="icon-study" draggable="false" />
                                        <h1 className="title-semester">{ semester.title }</h1>
                                        <div className="arrow-container">
                                            <div className="arrow" onClick={ (event) => 
                                                { event.stopPropagation(); openSemesterPage(semester); } 
                                            }></div>
                                        </div>
                                    </div>
                                    <p className="semester-description" dangerouslySetInnerHTML={{ __html : semester.description }}></p>
                                    <div className="bottom-semester-container">
                                        <div className="bottom-semester"></div>
                                    </div>
                                </div>
                            );
                        }) }
                    </div>
                </div>
            </article>
            <article ref={ semesterPage } id="semesterPage">
                { currentSemester && (
                    <>
                        <div className="semester-page-main-container">
                            <div className="semester-page-title-img-container">
                                <img className="semester-page-img" alt="icon-study" draggable="false" src={ currentSemester.getWhiteIcon() } />
                                <p className="title-semester">{ currentSemester.title }</p>
                            </div>
                            <div className="semester-page-body">
                                <div className="semester-part semester-date-part">
                                    <div className="semester-page-date semester-page-title-part">
                                        <img src={ dateImg } alt='date-icon' draggable="false" />
                                        <div className="page-title-part"> Dates : </div>
                                    </div>
                                    <div className="semester-page-content semester-page-content-date">
                                        <div className="timeline-semester-date-container">
                                            <div className="timeline"></div>
                                            <div className="semester-point-container">
                                                <div className="semester-point"></div>
                                                <div className="semester-point"></div>
                                            </div>
                                        </div>
                                        <div className="text-semester-date-container">
                                            <p className="semester-page-starting-date">{ currentSemester.formatStartingDate() }</p>
                                            <p className="semester-page-ending-date">{ currentSemester.formatEndingDate() }</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="semester-part semester-school-part">
                                    <div className="semester-page-school semester-page-title-part">
                                        <img src={ schoolImg } alt="school-icon" draggable="false" />
                                        <div className="page-title-part"> Ecole : </div>
                                    </div>
                                    <div className="semester-page-content">
                                        <img className="semester-school-img onloading" alt="school-icon" draggable="false" src={ currentSemester.getSchoolIcon() } />
                                        <div className="semester-school-text">
                                            <h3 className="semester-school-name">{ currentSemester.schoolName }</h3>
                                            <p className="semester-school-location">{ currentSemester.schoolLocation }</p>
                                            <p className="semester-school-address">{ currentSemester.schoolAddress }</p>
                                        </div>
                                    </div>
                                </div>
                                { currentSemester.hasSpecialties() && (
                                    <div className="semester-part semester-specialties-part">
                                        <div className="semester-page-specialties semester-page-title-part">
                                            <img src={ specialtiesImg } alt='specialties-icon' draggable="false" />
                                            <div className="page-title-part"> Spécialités : </div>
                                        </div>
                                        <div className="semester-page-content">
                                            { currentSemester.specialties.map((specialty) => {
                                                return (
                                                    <p className="semester-page-specialty">• { specialty }</p>
                                                );
                                            } ) }
                                        </div>
                                    </div>
                                ) }
                                { currentSemester.hasMatters() && (
                                    <div className="semester-part semester-subjects-part">
                                        <div className="semester-page-tab semester-page-title-part">
                                            <img src={ matterImg } alt="matters-icon" draggable="false" />
                                            <div className="page-title-part"> Matières : </div>
                                        </div>
                                        <div className="semester-page-content">
                                            <p className="semester-page-subject">Ici sont les matières étudiées et les coefficients de ces mêmes matières .</p>
                                            <button onClick={ openImageSemester }>Voir les matières</button>
                                        </div>
                                    </div>
                                ) }
                            </div>
                            { currentSemester.hasMatters() && (
                                <div ref={ semesterPageSubjectsContainer } className="semester-page-subjects">
                                    <div className="image-subject-container">
                                        <img src={ currentSemester.getMattersImg() } className="semester-page-subjects-image" alt="subjects" draggable="false" />
                                        <div className="leave-semester-subject" onClick={ closeImageSemester }>
                                            <p>X</p>
                                        </div>
                                    </div>
                                </div>
                            ) }
                        </div>
                        <div className="all-cross-container">
                            <div ref={ crossSemesterPage } className="cross-semester-page-container" onClick={ () => closeSemesterPage() }>
                                <p>X</p>
                            </div>
                        </div>
                        <div className="background-semester-page"></div>
                    </>
                ) }
            </article>
        </>
    );
}

export default Course;