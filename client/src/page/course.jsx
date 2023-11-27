import { useEffect, useRef, useState } from 'react';

import { animateApparition } from '../function/appearence';
import { animateImageLoading } from '../function/animate-image-loading';

import { ManageBody } from '../object/manage-body';
import { Semester as SemesterObject } from '../object/semester';

import { useConditionalEffect } from '../hook/useConditionalEffect';

import { main, initHeight, colorPointAssociateToSemester, 
uncolorPointAssociateToSemester, onclickSemester, setPointsContainers, 
setSemesters, setTimeline, intervalMoveSemesters, intervalAnimation, onScroll } 
from '../function/course-page-functions';

import { Semester } from './component/course/semester';
import { Point } from './component/course/point';

import medalImg from '../asset/img/course/medal-white.png';
import dateImg from '../asset/img/course/calendar-pink.png';
import specialtiesImg from '../asset/img/course/specialties-pink.png';
import schoolImg from '../asset/img/course/school-pink.png';
import matterImg from '../asset/img/course/tab.png';

import '../asset/css/course/style.scss';
import '../asset/css/course/semester-page.scss';
import '../asset/css/course/dark-style.scss';

import semesterJson from '../asset/data/course/semester.json';


const Course = () => {

    const elementsToAnimate = useRef([]);
    const imagesToLoad = useRef([]);
    useEffect(() => {

        animateApparition(elementsToAnimate.current);
        animateImageLoading(imagesToLoad.current);

        document.title = 'Mon parcours';
        setPointsContainers(pointsContainers.current);
        setSemesters(semesters.current);
        setTimeline(timelineRef.current);
        main();

        document.addEventListener('resize', initHeight);
        document.addEventListener('scroll', onScroll);
        return () => {
            clearInterval(intervalMoveSemesters);
            clearInterval(intervalAnimation);
            document.removeEventListener('scroll', onScroll);
            document.removeEventListener('resize', initHeight);
        }
    }, []);

    ManageBody.changeClass('course');

    const semestersObjects = SemesterObject.processRow(semesterJson);

    let timelineRef = useRef(null);
    let pointsContainers = useRef([]);
    let semesters = useRef([]);

    // Si l'utilisateur clique sur "Consulter", on retire le hash de l'url
    const clearUrl = () => {
        setTimeout(() => {
            // Remplacement du hash dans l'URL affichée dans la barre d'adresse
            window.history.replaceState(null, null, window.location.href.split('#')[0]);
        }, 0);
    }

    const [semesterPageIsOpen, setSemesterPageIsOpen] = useState(false);
    const [currentSemester, setCurrentSemester] = useState(null);

    const semesterPage = useRef(null);
    const crossSemesterPage = useRef(null);
    const semesterPageSubjectsContainer = useRef(null);

    useConditionalEffect(() => {
        if (semesterPageIsOpen) {
            semesterPage.current.scrollTo(0, 0);
            document.body.style.overflow = "hidden";
            semesterPage.current.classList.add("visible");
        } else {
            semesterPage.current.classList.add("hidden");
            semesterPage.current.classList.remove("visible");
            semesterPage.current.scrollTo({ top: 0 });
            setTimeout(() => {
                document.body.style.removeProperty("overflow");
                semesterPage.current.classList.remove("hidden");
                setCurrentSemester(null);
            }, 400);
        }
    }, [semesterPageIsOpen]);

    const openSemesterPage = (semester) => {
        setSemesterPageIsOpen(true);
        setCurrentSemester(semester);
    }
    const closeSemesterPage = () => {
        setSemesterPageIsOpen(false);
    }

    const openSubjectsImageSemester = () => {
        crossSemesterPage.current.classList.add("hidden");
        semesterPageSubjectsContainer.current.classList.add("visible");
    }
    const closeSubjectsImageSemester = () => {
        crossSemesterPage.current.classList.remove("hidden");
        semesterPageSubjectsContainer.current.classList.add("hidden");
        semesterPageSubjectsContainer.current.classList.remove("visible");

        setTimeout(() => {
            semesterPageSubjectsContainer.current.classList.remove("hidden");
        }, 300);
    }

    return (
        <>
            <div className="explain-container">
                <div className="explain" ref={ (element) => ( elementsToAnimate.current.push(element) ) }>
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
                        {semestersObjects.map((semester, i) => {
                            return (
                                <Point ref={ point => (pointsContainers.current[i] = point )} 
                                semester={ semester } />
                            );
                        })}
                    </div>
                    <div id="semesters">
                        <div id="view"></div>
                        { semestersObjects.map((semester, i) => {
                            return (
                                <Semester semester={ semester }
                                ref={ semester => { semesters.current[i] = semester; elementsToAnimate.current.push(semester) } } 
                                clickSemester={ () => onclickSemester(i) } 
                                colorPoint={ () => colorPointAssociateToSemester(i) } 
                                uncolorPoint={ () => uncolorPointAssociateToSemester(i) } 
                                openSemesterPage={ (event) => { event.stopPropagation(); openSemesterPage(semester); } 
                                } />
                            );
                        }) }
                    </div>
                </div>
            </article>
            <article ref={ semesterPage } id="semesterPage">
                { currentSemester && (
                    <>
                        { currentSemester.hasMatters() && (
                            <div ref={ semesterPageSubjectsContainer } className="semester-page-subjects">
                                <div className="image-subject-container">
                                    <img src={ currentSemester.getMattersImg() } className="semester-page-subjects-image" alt="subjects" draggable="false" />
                                    <div className="leave-semester-subject" onClick={ closeSubjectsImageSemester }>
                                        <p>X</p>
                                    </div>
                                </div>
                            </div>
                        ) }
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
                                        <img className="semester-school-img" alt="school-icon" draggable="false" src={ currentSemester.getSchoolIcon() } />
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
                                            <button onClick={ openSubjectsImageSemester }>Voir les matières</button>
                                        </div>
                                    </div>
                                ) }
                            </div>
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