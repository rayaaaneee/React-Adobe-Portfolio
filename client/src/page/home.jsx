import { useContext, useEffect, useState, useRef } from 'react';

import { ManageBody } from '../object/manage-body';

import { Project as ProjectObject } from '../object/project';
import { SchoolCompetence } from '../object/school-competence';
import { ScrollProjects } from '../object/scroll-projects';

import { animateApparition } from '../function/appearence';
import { animateCards } from '../function/3d-effect-card';
import { animateImageLoading } from '../function/animate-image-loading';

import { CompetenceCard } from './component/home/competence-card';
import { Project } from './component/home/project';
import { Title } from './component/general/title';

import { FrameProject } from './component/home/frame-project';
import { FrameCV } from './component/home/frame-cv';

import themeContext from '../function/context/theme-context';
import languageContext from '../function/context/language-context';

import '../asset/scss/home/style.scss';
import '../asset/scss/home/dark-style.scss';
import '../asset/scss/media/home/style.scss';

import projectJson from '../asset/data/home/project.json';
import schoolCompetenceJson from '../asset/data/home/school_competence.json';

import zoomImg from '../asset/img/home/icon/zoom.png';
import darkZoomImg from '../asset/img/home/icon/zoom-white.png';
import cvImg from '../asset/img/home/frame-cv/CV.png';

const Home = () => {

    ManageBody.changeClass('home');

    const elementsToAnimate = useRef([]);

	const projectsImagesToLoad = useRef([]);
	const skillsImagesToLoad = useRef([]);

	let imagesToLoad = [];

    useEffect(() => { 

      	(elementsToAnimate.current) && animateApparition(elementsToAnimate.current);

      	(projectsImagesToLoad.current && skillsImagesToLoad.current) 
			&& (imagesToLoad = [...projectsImagesToLoad.current, ...skillsImagesToLoad.current])
	  	 	&& (animateImageLoading(imagesToLoad));

    }, []);

    const { isDarkTheme } = useContext(themeContext);

    const { language } = useContext(languageContext);

    useEffect(() => {
        document.title = language.home.title;
    });

    let projectsObjects = [];
    projectJson.projects.forEach(project => {

      	let projectObject = new ProjectObject(project);

      	let projectIconImg = require('../asset/img/home/project-logos/' + projectObject.getIcon() + '.png');
      	let projectIconImgDark = require('../asset/img/home/project-logos/' + projectObject.getIcon() + '-white.png');

      	projectObject.setReactIcon(projectIconImg);
      	projectObject.setDarkReactIcon(projectIconImgDark);

      	projectsObjects.unshift(projectObject);

    });

    let schoolCompetenceObjects = [];
    schoolCompetenceJson.competences.forEach(school_competence => {
        let schoolCompetenceObject = new SchoolCompetence(school_competence);
        schoolCompetenceObjects.push(schoolCompetenceObject);
    });

    const bars = useRef([]);
    const colorBar = (index) => {
      	bars.current[index].classList.add('colored');
    }
  
    const uncolorBar = (index) => {
      	bars.current[index].classList.remove('colored');
    }

	// Null when no project is opened, otherwise contains the project object

    let [currentProject, setCurrentProject] = useState(null);

	// Set on true to display the CV container

    let [cvContainerIsVisible, setCvContainerIsVisible] = useState(false);

    const chevrons = useRef({
      	left: null,
      	right: null
    });
    const projects = useRef([]);

    const cards = useRef([]);

    useEffect(() => {
      	const scrollProjects = new ScrollProjects(projects.current, chevrons.current.left, chevrons.current.right);
      	animateCards(cards.current);

      	return () => {
      	  	scrollProjects.removeListeners();
      	}
    });

    return (
        <>
            <article id="main">
				<Title id={"firstmid"} index={1} text={language.home.projects} />
                <div id="bar0" className="horizontal-bars" ref={ bar => { bars.current.push(bar); elementsToAnimate.current.push(bar)} }></div>
                <div className="projects-chevrons-container" onMouseOver={ () => colorBar(0)} onMouseLeave={ () => uncolorBar(0) }>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="chevron left" ref={(chevron) => {chevrons.current.left = chevron; elementsToAnimate.current.push(chevron) } }>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
                <article className="projects" ref={ projects }>
                    { projectsObjects.map((project, i) => (
                      	<Project 
							project={ project } 
							colorBar={ () => colorBar(1) }
							imageToLoad={ (project) => { projectsImagesToLoad.current[i] = project } }
                      		ref={ (project) => { elementsToAnimate.current.push(project) } }
                      		uncolorBar={ () => uncolorBar(1) } 
                      		onClick={ () => setCurrentProject(project) } 
                      		isDarkTheme={ isDarkTheme } 
						/>
                    ))}
                </article>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="chevron right" ref={(chevron) => {chevrons.current.right = chevron; elementsToAnimate.current.push(chevron)} }>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
                </div>
                {/* Page des projets */}
				<FrameProject 
					project={ currentProject }
					onClose={ () => setCurrentProject(null) }
					language={ language }
				/>
            </article>
            <h2 className="explicationtext" dangerouslySetInnerHTML={{ __html: language.home.projects_desc }}></h2>
            {/* Page du CV */}
            <article id="cv">
              	<Title id={"secondmid"} index={2} text={language.home.cv} />
              	<div id="bar1" className="horizontal-bars" ref={ bar => { bars.current.push(bar); elementsToAnimate.current.push(bar) } }></div>
              	<div id="container-cv" onMouseOver={() => colorBar(1)} onMouseLeave={ () => uncolorBar(1) } ref={ (container) => { elementsToAnimate.current.push(container) } }>
                	<div id="cv-img" onClick={() => {
                	  	setCvContainerIsVisible(true);
                	}}>
                	  	<img src={ cvImg } alt="cv" data-lightbox="CV_Rayane_Merlin.png" data-title="Voici mon C.V actuel, celui-ci est amené à être modifié mais restera à jour sur le site." draggable="false" />
                	</div>
					<FrameCV 
						isVisible={cvContainerIsVisible} 
						onClose={ (_) => setCvContainerIsVisible(false) } 
						language={language} 
					/>
                	<div id="cv-text">
                	  <div className="blackbar"></div>
                	  <div id="zoom">
                	    <p>{ language.home.cv_subtext_1 }</p>
                	    <img draggable="false" src={ isDarkTheme ? darkZoomImg : zoomImg } alt="zoom" />
                	  </div>
                	  <p className="beforebutton">{ language.home.cv_subtext_2 }</p>
                	  <a href={ `/CV.pdf` } download="CV_Rayane_Merlin.pdf"><button className="cv-button">{ language.home.download }</button></a>
                	  <div className="blackbar"></div>
                	</div>
              </div>
            </article>
            <article id="realisation">
                <Title id={"firstmid"} index={3} text={language.home.skills} />
                <div id="bar2" className="horizontal-bars" ref={ bar => { bars.current.push(bar); elementsToAnimate.current.push(bar) } }></div>
                <div className="school-competence-container" onMouseOver={ () => colorBar(2) } onMouseLeave={ () => uncolorBar(2)}>
                  	{ schoolCompetenceObjects.map((competence, i) => (
                  	  	<CompetenceCard 
							skillImagesToLoad={ (skill) => { skillsImagesToLoad.current[i] = skill } }
							competence={ competence } 
							ref={ card => { cards.current[i] = card; elementsToAnimate.current.push(card) } } 
						/>
                  	))}
                </div>
            </article>
        </>
    );
}

export default Home;