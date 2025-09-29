import { useContext, useEffect, useRef, useState } from 'react';

import { animateApparition } from '../function/appearence';
import { animateImageLoading } from '../function/animate-image-loading';

import { ManageBody } from '../object/manage-body';
import { Semester as SemesterObject } from '../object/semester';

import { 
    main, 
    initHeight, 
    colorPointAssociateToSemester, 
    uncolorPointAssociateToSemester, 
    onclickSemester, 
    setPointsContainers, 
    setSemesters, 
    setTimeline, 
    intervalMoveSemesters, 
    intervalAnimation, 
    onScroll, 
    disclickSemester 
} from '../function/background-page-functions';

import languageContext from '../function/context/language-context';

import { Semester } from './component/background/semester';
import { Point } from './component/background/point';

import { FrameSemester } from './component/background/frame-semester';

import medalImg from '../asset/img/background/medal-white.png';

import '../asset/scss/background/style.scss';
import '../asset/scss/background/semester-page.scss';
import '../asset/scss/background/dark-style.scss';

import semesterJson from '../asset/data/background/semester.json';


const Background = () => {

    useEffect(() => {
        document.querySelector("html").classList.add('background');
        return () => {
            document.querySelector("html").classList.remove('background');
        }
    }, []);

    const elementsToAnimate = useRef([]);
    const imagesToLoad = useRef([]);

    const { language } = useContext(languageContext);

    useEffect(() => {

        animateApparition(elementsToAnimate.current);
        animateImageLoading(imagesToLoad.current);

        document.title = language.background.title;
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

    ManageBody.changeClass('background');

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

    const [currentSemester, setCurrentSemester] = useState(null);

    return (
        <>
            <div className="explain-container">
                <div className="explain" ref={ (element) => ( elementsToAnimate.current.push(element) ) }>
                    <img className="medal-img" src={ medalImg } alt="icon-study" draggable="false" />
                    <h1 className="explain-text">{ language.background.main_text }</h1>
                    <p className="explain-text">{ language.background.main_subtext_1 }</p>
                    <p className="explain-text">{ language.background.main_subtext_2 }</p>
                    <a href="#view" className="explain-text" onClick={ clearUrl }>
                        <p>{ language.background.consult }</p>
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
                                clickSemester={ () => (onclickSemester(i)) } 
                                colorPoint={ () => colorPointAssociateToSemester(i) } 
                                uncolorPoint={ () => uncolorPointAssociateToSemester(i) } 
                                openSemesterPage={ (_) => (setCurrentSemester(semester)) } />
                            );
                        }) }
                    </div>
                </div>
            </article>
            <FrameSemester
                semester={ currentSemester }
                onClose={ (_) => {
                    let index = semestersObjects.findIndex((semester) => semester.id === currentSemester.id);
                    disclickSemester(index);
                    setCurrentSemester(null);
                } }
                language={ language }
            />
        </>
    );
}

export default Background;