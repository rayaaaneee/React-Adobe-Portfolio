import { animateApparition } from '../functions/appearence';
import { animateImageLoading } from '../functions/animateImageLoading';
import { ManageBody } from '../functions/manageBody';
import { useEffect, useRef } from 'react';
import { main, distanceMiddle, getNewScale, isInSide, isInFivePercentSide, initHeight, colorPoint, uncolorPoint, modifyScale, setPoints, setSemesters, barCentered, setBarCentered, height, initialX, bordersScreen, margin, isSelect, lastSemesterId, pointRotation } from '../functions/coursePageFunctions';

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
        }
    }, []);
    document.addEventListener('resize', initHeight);

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
            pointMarginTop = point.offsetTop - scrollValue + margin;

            // if (index == 2) if (isInFivePercentSide(pointMarginTop)) console.log("in");

            if (isInSide(pointMarginTop)) {
                point.parentNode.style.opacity = 0;
            } else {
                point.parentNode.style.opacity = 1;
            }

            let distanceMid = distanceMiddle(pointMarginTop);

            // Plus le point est proche du milieu de l'écran, plus il est grand
            pointRotation[index] = -pointMarginTop / 3;
            point.style.transform = "rotate(" + pointRotation[index] + "deg) scale(" + getNewScale(distanceMid) + ")";
        });
    }

    const openSemesterPage = (semester) => {}
    const closeSemesterPage = (semester) => {}
    const openImageSemester = () => {}
    const closeImageSemester = () => {}

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
            <article id="parallax-projects">
                <div ref={ timelineRef } id="timeline" style={{transform: "translateY(100vh)"}}></div>
                <div id="fordisplay">
                    <div id="points">
                        {semesters.map((semester, i) => {
                            return (
                                <div ref={ point => (points.current[i] = point) } className="point-container" dataDate={ semester.formatStartingDate() }>
                                    <div className="point" id={`p${i + 1}`}></div>
                                </div>
                            );
                        })}
                    </div>
                    <div id="projects">
                        <div id="view"></div>
                        { semesters.map((semester, i) => {
                            return (
                                <div className="project animate" id={`proj${i + 1}`} ref={ semester => (semestersRef.current[i] = semester) }/* onMouseOver={ colorButtonsAssociateToProject(this) } onClick={ onclickProject(this) } onMouseOut={ uncolorButtonsAssociateToProject(this) } */>
                                    <div className="title-project-container">
                                        <img src={ semester.getIcon() } alt="icon-study" draggable="false" />
                                        <h1 className="title-project">{ semester.title }</h1>
                                        <div className="arrow-container">
                                            <div className="arrow" onClick={ () => openSemesterPage(semester) }></div>
                                        </div>
                                    </div>
                                    <p className="project-description">{ semester.description }</p>
                                    <div className="bottom-project-container">
                                        <div className="bottom-project"></div>
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
                        <p className="title-semester"></p>
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
                                    <p className="semester-page-starting-date">Date de début ou quoi</p>
                                    <p className="semester-page-ending-date">Date de fin ou quoi</p>
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
                                    <h3 className="semester-school-name"></h3>
                                    <p className="semester-school-location"></p>
                                    <p className="semester-school-address"></p>
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