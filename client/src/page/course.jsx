import { animateApparition } from '../functions/appearence';
import { animateImageLoading } from '../functions/animateImageLoading';
import { ManageBody } from '../functions/manageBody';
import { useEffect, useRef, useState } from 'react';
import { main, distanceMiddle, getNewScale, isInSide, initHeight, colorButtonsAssociateToSemester, 
uncolorButtonsAssociateToSemester, onclickSemester, setPoints, setSemesters, setBarCentered, 
height, margin, pointRotation, intervalMoveSemesters } from '../functions/coursePageFunctions';

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
        document.title = 'Mon parcours';
        setPoints(points.current);
        setSemesters(semestersRef.current);
        main();
        return () => {
            document.removeEventListener('scroll', onScroll);
            document.removeEventListener('resize', initHeight);
            clearInterval(intervalMoveSemesters);
        }
    }, []);

    ManageBody.changeClass('course');

    let semesters = Semester.processRow(semesterJson);

    let timelineRef = useRef(null);
    let points = useRef([]);
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
        points.current.forEach((point, index) => {

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

    useEffect(() => {
        if (semesterPageIsOpen) {

        } else {

        }
    }, [semesterPageIsOpen]);

    const openSemesterPage = (semester) => {
        setSemesterPageIsOpen(true);
        setCurrentSemester(semester);
    }
    const closeSemesterPage = () => {
        setSemesterPageIsOpen(false);
        setCurrentSemester(null);
    }

    const openImageSemester = () => {}
    const closeImageSemester = () => {}

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
                                <div ref={ point => (points.current[i] = point) } className="point-container" datadate={ semester.formatStartingDate() }>
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
            <article id="semesterPage">
                <div className="semester-page-main-container">
                    <div className="semester-page-title-img-container">
                        <img className="semester-page-img" alt="icon-study" draggable="false" />
                        <p className="title-semester">{ currentSemester && currentSemester.title }</p>
                    </div>
                    <div className="semester-page-body">
                        <div className="semester-part semester-date-part">
                            <div className="semester-page-date semester-page-title-part">
                                <img src="PATH_IMAGES;course/calendar-pink.png" alt="calendar" draggable="false" />
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
                                    <p className="semester-page-starting-date">{ currentSemester && currentSemester.formatStartingDate() }</p>
                                    <p className="semester-page-ending-date">{ currentSemester && currentSemester.formatEndingDate() }</p>
                                </div>
                            </div>
                        </div>
                        <div className="semester-part semester-school-part">
                            <div className="semester-page-school semester-page-title-part">
                                <img src="PATH_IMAGES;course/school-pink.png" alt="school-icon" draggable="false" />
                                <div className="page-title-part"> Ecole : </div>
                            </div>
                            <div className="semester-page-content">
                                <img className="semester-school-img" alt="school-icon" draggable="false" src="" />
                                <div className="semester-school-text">
                                    <h3 className="semester-school-name">{ currentSemester && currentSemester.schoolName }</h3>
                                    <p className="semester-school-location">{ currentSemester && currentSemester.schoolLocation }</p>
                                    <p className="semester-school-address">{ currentSemester && currentSemester.schoolAddress }</p>
                                </div>
                            </div>
                        </div>
                        <div className="semester-part semester-specialties-part">
                            <div className="semester-page-specialties semester-page-title-part">
                                <img src="PATH_IMAGES;course/specialties-pink.png" alt="specialty-icon" draggable="false" />
                                <div className="page-title-part"> Spécialités : </div>
                            </div>
                            <div className="semester-page-content">
                                <p className="semester-page-specialty"></p>
                                <p className="semester-page-specialty"></p>
                            </div>
                        </div>
                        <div className="semester-part semester-subjects-part">
                            <div className="semester-page-tab semester-page-title-part">
                                <img src="PATH_IMAGES;course/tab.png" alt="tab-icon" draggable="false" />
                                <div className="page-title-part"> Matières : </div>
                            </div>
                            <div className="semester-page-content">
                                <p className="semester-page-subject">Ici sont les matières étudiées et les coefficients de ces mêmes matières .</p>
                                <button onClick={ openImageSemester() }>Voir les matières</button>
                            </div>
                        </div>
                    </div>
                    <div className="semester-page-subjects">
                        <div className="image-subject-container">
                            <img src="" className="semester-page-subjects-image" alt="subjects" draggable="false" />
                            <div className="leave-semester-subject" onClick={ closeImageSemester }>
                                <p>X</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="all-cross-container">
                    <div className="cross-semester-page-container" onClick={ closeSemesterPage }>
                        <p>X</p>
                    </div>
                </div>
                <div className="background-semester-page"></div>
            </article>
        </>
    );
}

export default Course;