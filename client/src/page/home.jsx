import { useContext, useEffect, useState, useRef } from 'react';

import MarkdownPreview from '@uiw/react-markdown-preview';

import { ManageBody } from '../object/manage-body';

import { Project as ProjectObject } from '../object/project';
import { SchoolCompetence } from '../object/school-competence';
import { ScrollProjects } from '../object/scroll-projects';

import { animateApparition } from '../function/appearence';
import { animateCards } from '../function/3d-effect-card';
import { animateImageLoading } from '../function/animate-image-loading';

import { useConditionalEffect } from '../hook/useConditionalEffect';

import { CompetenceCard } from './component/home/competence-card';
import { Project } from './component/home/project';

import themeContext from '../function/context/theme-context';
import languageContext from '../function/context/language-context';

import '../asset/css/home/style.scss';
import '../asset/css/home/frame-cv.scss';
import '../asset/css/home/project-page.scss';
import '../asset/css/home/dark-style.scss';

import '../asset/css/media/home/style.scss';
import '../asset/css/media/home/project-page.scss';
import '../asset/css/media/home/frame-cv.scss';

import projectJson from '../asset/data/home/project.json';
import schoolCompetenceJson from '../asset/data/home/school_competence.json';
import cvInformationsJson from '../asset/data/home/cv-info.json';

import zoomImg from '../asset/img/home/icon/zoom.png';
import darkZoomImg from '../asset/img/home/icon/zoom-white.png';
import downloadImg from '../asset/img/home/icon/black-download.png';
import darkDownloadImg from '../asset/img/home/icon/white-download.png';
import linkImg from '../asset/img/home/icon/black-link.png';
import darkLinkImg from '../asset/img/home/icon/white-link.png';
import skills from '../asset/img/home/icon/skills.png';
import languages from '../asset/img/home/icon/language.png';
import descriptionIcon from '../asset/img/home/icon/desc-icon-pink.png';
import useDescriptionIcon from '../asset/img/home/icon/use-desc-icon-pink.png';
import whiteMemoryIcon from '../asset/img/home/icon/white-memory-icon.png';
import anchorLink from '../asset/img/home/icon/anchor-link.png';

import cvImg from '../asset/img/home/frame-cv/CV.png';

const Home = () => {

    ManageBody.changeClass('home');

    const elementsToAnimate = useRef([]);
    const imagesToLoad = useRef([]);
    useEffect(() => { 
      animateApparition(elementsToAnimate.current);
      animateImageLoading(imagesToLoad.current);
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

    let [projectPageIsVisible, setProjectPageIsVisible] = useState(false);
    let projectPageRef = useRef(null);
    useEffect(() => {
      projectPageRef.current.style.display = 'none';
      setTimeout(() => {
        projectPageRef.current.style.removeProperty('display');
      }, 400);
    }, []);
    let projectPageContentRef = useRef(null);

    useConditionalEffect(() => {
        if (projectPageIsVisible) {
            document.body.style.overflowY = "hidden";
            projectPageRef.current.classList.add('visible');
            document.addEventListener('keydown', closeProjectPageOnEscape);
        } else {
          projectPageRef.current.scrollTo({ top: 0 });
          projectPageRef.current.classList.add('hidden');
          projectPageRef.current.classList.remove('visible');
          setTimeout(() => {
              document.body.style.removeProperty('overflow-y');
              projectPageRef.current.classList.remove('hidden');
          }, 500);
        }
    }, [projectPageIsVisible]);

    let [isProjectViewerVisible, setIsProjectViewerVisible] = useState(false);

    let [currentProject, setCurrentProject] = useState(null);
    const openProjectPage = (project) => {
        setProjectPageIsVisible(true);
        setCurrentProject(project);
        if (project.isLink()) {
          currentProjectViewingRef.current.setAttribute('target', '_blank');
        } else {
          currentProjectViewingRef.current.removeAttribute('target');
        }
    }

    const closeProjectPage = () => setProjectPageIsVisible(false);
    let projectViewerContainerRef = useRef(null);
    let projectViewer;

    useEffect(() => {
      projectViewer = projectViewerContainerRef.current.querySelector('.project-viewer');
    });
    
    const openProjectViewer = (link) => {
      setIsProjectViewerVisible(true);
      projectViewerContainerRef.current.classList.add('visible');
      if (link.toLowerCase().endsWith('pdf')) {
        link = `./project/${link}`;
      }
      setTimeout(() => {
        projectViewer.setAttribute('src', link);
        projectViewer.onload = () => {
          projectViewer.classList.remove('onloading');
          projectViewer.removeEventListener('load', projectViewer.onload);
        }
      }, 400);
    }

    const closeProjectViewer = () => {
      setIsProjectViewerVisible(false);
      projectViewer.removeAttribute('src');

      projectViewerContainerRef.current.classList.add('hidden');
      projectViewerContainerRef.current.classList.remove('visible');

      setTimeout(() => {
        projectViewer.classList.add('onloading');
        projectViewerContainerRef.current.classList.remove('hidden');
      }, 300);
    }

    const closeProjectPageOnEscape = (e) => {
      if (e.key === 'Escape') {
        console.log("Escape");
        if (isProjectViewerVisible) {
          console.log('Closing viewer');
          closeProjectViewer();
        } else if (projectPageIsVisible) {
          document.removeEventListener('keydown', closeProjectPageOnEscape);
          closeProjectPage();
          console.log('Closing page');
        }
      }
    }

    let [cvContainerIsVisible, setCvContainerIsVisible] = useState(false);

    let frameCvRef = useRef(null);

    let cvPdfIframe = useRef(null);
    const handlePrintPdf = () => {
      cvPdfIframe.current.contentWindow.focus();
      cvPdfIframe.current.contentWindow.print();
    }

    const closeCvPreviewOnEscape = (e) => {
      if (e.key === 'Escape') {
        setCvContainerIsVisible(false);
      }
    }

    var [cvVisibilityChanged, setCvVisibilityChanged] = useState(false);
    useConditionalEffect(() => {

      if (cvContainerIsVisible) {
  
        document.body.style.overflow = 'hidden';
        frameCvRef.current.classList.add('visible');
        setCvVisibilityChanged(true);

        document.addEventListener('keydown', closeCvPreviewOnEscape);

      } else if (cvVisibilityChanged) {

        frameCvRef.current.scrollTo(0, 0);
        frameCvRef.current.classList.add('hidden');
        frameCvRef.current.classList.remove('visible');

        document.removeEventListener('keydown', closeCvPreviewOnEscape);

        setTimeout(() => {

          document.body.style.removeProperty('overflow');
          frameCvRef.current.classList.remove('hidden');
  
        }, 150);

      }
    }, [cvContainerIsVisible, cvVisibilityChanged]);

    useEffect(() => {
      frameCvRef.current.classList.remove('hidden');
    }, []);

    var [isCvInformationsVisible, setCvInformationsVisible] = useState(false);

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

    const currentProjectViewingRef = useRef(null);
    useEffect(() => {
      var growing = true;
      const animateProjectViewing = () => {
        switch(growing){
            case true:
                currentProjectViewingRef.current.classList.add('animate');
                break;
            case false:
                currentProjectViewingRef.current.classList.remove('animate');
                break;
            default:
                break;
        } 
        growing = !growing;
      }
      let intervalAnimationCurrentProjectViewing = setInterval(animateProjectViewing, 3000);

      return () => {
        clearInterval(intervalAnimationCurrentProjectViewing);
      }
    });

    return (
      <>
              <article id="main">
                  {/* On met le CV dans le rendu, caché dans l'HTML pour s'en servir en cas d'impression */}
                  <iframe ref={cvPdfIframe} src={ `/CV.pdf` } className="hidden" title='CV'></iframe>
                  <div className="title t1" id="firstmid">
                    <p>{ language.home.projects }</p>
                  </div>
                  <div id="bar0" className="horizontal-bars" ref={ bar => { bars.current.push(bar); elementsToAnimate.current.push(bar)} }></div>
                  <div className="projects-chevrons-container" onMouseOver={ () => colorBar(0)} onMouseLeave={ () => uncolorBar(0) }>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="chevron left" ref={(chevron) => {chevrons.current.left = chevron; elementsToAnimate.current.push(chevron) } }>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                    </svg>
                    <article className="projects" ref={ projects }>
                    { projectsObjects.map((project) => (
                      <Project project={ project } colorBar={ () => colorBar(1) }
                      ref={ (project) => { elementsToAnimate.current.push(project) } }
                      imageLoadingRef={ (image) => { imagesToLoad.current.push(image) } }
                      uncolorBar={ () => uncolorBar(1) } 
                      openProjectPage={ () => openProjectPage(project) } 
                      isDarkTheme={isDarkTheme} darkLinkImg={darkLinkImg} 
                      darkDownloadImg={darkDownloadImg} linkImg={linkImg} 
                      downloadImg={downloadImg} />
                    ))}
                    </article>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="chevron right" ref={(chevron) => {chevrons.current.right = chevron; elementsToAnimate.current.push(chevron)} }>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                  </div>
                  {/* Page des projets */}
                  <div ref={projectPageRef} className="project-page-container">
                      <div className="project-page-content" ref={projectPageContentRef} >
                        <div className='background-project-page'></div>
                        <div className='parts'>
                          <div className="title-project-container">
                            <img alt='link-or-download' className="link-or-download" src={currentProject && (currentProject.isLink() ? darkLinkImg : darkDownloadImg) } draggable="false" />
                            <p className="title-project">{ currentProject && currentProject.getTitle() }</p>
                          </div>
                          {currentProject && (currentProject.hasLanguages() &&
                            <>
                              <div className="project-languages-skills title-page-project">
                                <img src={ languages } alt='langages-icones' draggable="false" />
                                <p className="title-language-skill">{
                                  language.home.projects_frame.languages + (currentProject.getLanguages().length > 1 ? 's' : '') } :</p>
                              </div>
                              <div className="project-languages-skills-container page-content">
                                {currentProject.getLanguages().map((language, index) => {
                                  return (
                                    <div key={index} className="skill-language-container template" style={{backgroundColor: language.color}}>
                                      <p>{language.name}</p>
                                    </div>
                                  );
                                })}
                              </div>
                            </>
                          ) }
                          {currentProject && (currentProject.hasCompetences() &&
                            <>
                              <div className="project-languages-skills title-page-project">
                                <img src={ skills } alt='languages-icone' draggable="false" />
                                <p className="title-languages-skill">{
                                  language.home.projects_frame.skills + (currentProject.getCompetences().length > 1 ? 's' : '') } :</p>
                              </div>
                              <div className="project-languages-skills-container page-content">
                                {currentProject.getCompetences().map((competence, index) => {
                                  return (
                                    <div key={index} className="skill-language-container template" style={{backgroundColor: competence.color}}>
                                      <p>{competence.name}</p>
                                    </div>
                                  );
                                })}
                              </div>
                            </>
                          ) }
                          <div className="project-desc text-project-container">
                            <div className="project-desc-text title-page-project">
                              <img src={ descriptionIcon } alt="icone-description" draggable="false" />
                              <p>{ language.home.projects_frame.description } :</p>
                            </div>
                            <MarkdownPreview className='project-desc-value page-content' source={ currentProject && currentProject.getDescription() } />
                          </div>
                          { currentProject && 
                            (currentProject.hasUseDescription() &&
                                <div className="project-use-desc text-project-container">
                                  <div className="project-use-desc-text title-page-project">
                                    <img src={ useDescriptionIcon } alt="notice-utilisation-icone" draggable="false" />
                                    <p>{ language.home.projects_frame.for_using } :</p>
                                  </div>
                                  <MarkdownPreview className='project-use-desc-value page-content' source={ currentProject && currentProject.getUseDescription() } />
                                </div>
                            ) 
                          }
                          { currentProject && 
                            (currentProject.hasRepository() &&
                                <div className="project-repository text-project-container">
                                  <div className="project-repository-text title-page-project">
                                    <img src={ useDescriptionIcon } alt="notice-utilisation-icone" draggable="false" />
                                    <p>{ language.home.projects_frame.repository } :</p>
                                  </div>
                                  <a target='_blank' href={ currentProject.getRepository() } className="project-repository-value page-content">
                                    <p>{ currentProject.getRepository() }</p>
                                    <img src={ anchorLink } alt="repository-link" draggable="false" />
                                  </a>
                                </div>
                            ) 
                          }
                        </div>
                        { currentProject && (currentProject.isLink() &&
                          <a onClick={ () => openProjectViewer(currentProject.getLink()) }
                          className="link-btn title-page-project" 
                          rel='noreferrer'>{ `${language.home.projects_frame.consult} ${currentProject.getTitle()}` }</a>
                          )
                        }
                        { currentProject && (currentProject.isDownload() &&
                           <a href={ `/project/${currentProject.getFile()}` } className="download-btn title-page-project" download>{ `${language.home.projects_frame.download} ${currentProject.getFileName()}`}</a>
                        ) }
                        <div className="project-size-container text-project-container">
                          <img src={ whiteMemoryIcon } alt="mémoire-icone" draggable="false" />
                          <p className="page-content">{language.home.projects_frame.file_size} :</p>
                          <p className="project-size-value page-content">{ currentProject && currentProject.getSize() }</p>
                          <p className='page-content'> Mo </p>
                        </div>
                        <div className='project-viewer-container' ref={ projectViewerContainerRef }>
                          <div className='cross-project-viewer' title={ language.home.projects_frame.quit_preview } onClick={ closeProjectViewer }>
                          </div>
                          <iframe src='' className='project-viewer onloading'></iframe>
                        </div>
                      </div>
                      <a href={ `/project/${currentProject && currentProject.getFile()}` }
                          className='current-project-viewing' download ref={currentProjectViewingRef} title={`${ language.home.projects_frame.download } ${currentProject && currentProject.getTitle() }`}>
                        <img className='img-current-project-viewing' src={ currentProject && (currentProject.getDarkReactIcon()) } alt='project-icon' draggable="false" />
                      </a>
                      <div title={ language.home.projects_frame.quit } className="quit-project-button" onClick={closeProjectPage}>
                      </div>
                  </div>
              </article>
              <h2 className="explicationtext" dangerouslySetInnerHTML={{ __html: language.home.projects_desc }}></h2>
              {/* Page du CV */}
              <article id="cv">
                  <div className="title t2" id="secondmid">
                    <p>{ language.home.cv }</p>
                  </div>
                  <div id="bar1" className="horizontal-bars" ref={ bar => { bars.current.push(bar); elementsToAnimate.current.push(bar) } }></div>
                  <div id="container-cv" onMouseOver={() => colorBar(1)} onMouseLeave={ () => uncolorBar(1) } ref={ (container) => { elementsToAnimate.current.push(container) } }>
                    <div id="cv-img" onClick={() => {
                      setCvContainerIsVisible(true);
                    }}>
                      <img src={ cvImg } alt="cv" data-lightbox="CV_Rayane_Merlin.png" data-title="Voici mon C.V actuel, celui-ci est amené à être modifié mais restera à jour sur le site." draggable="false" />
                    </div>
                    <div id="framecv-visible" ref={frameCvRef}>
                      <div id="containerFrameCV">
                        <div id="imgcv">
                          <img draggable="false" src={cvImg} alt="photo" />
                        </div>
                        <div id="buttons">
                          <div id="cross" title={ language.home.cv_frame.quit } onClick={() =>{
                            setCvContainerIsVisible(false);
                          }}>
                          </div>
                          <div id="print" onClick={ handlePrintPdf }>
                            <img draggable="false" id="imgbutton" src={require('../asset/img/home/frame-cv/print.png')} />
                          </div>
                          <a href={ `/CV.pdf` } download="CV_Rayane_Merlin.pdf">
                            <div id="download">
                              <img draggable="false" id="imgbutton" src={require('../asset/img/home/frame-cv/download.png')} alt="dl" />
                            </div>
                          </a>
                          <div id="infos" onClick={() => {
                            setCvInformationsVisible(!isCvInformationsVisible)
                          }} onMouseLeave={() => {
                            setCvInformationsVisible(false);
                          }}>
                            <img draggable="false" id="imgbutton" src={require('../asset/img/home/frame-cv/infos.png')} alt="" />
                          </div>
                        </div>
                        <div id="informations" className={ isCvInformationsVisible && 'visible' }>
                          <div id="title">
                            <p>{cvInformationsJson.name}</p>
                          </div>
                          <div id="size">
                            <p>{`${language.home.cv_frame.size} : ${cvInformationsJson.size}`}</p>
                          </div>
                          <div id="date">
                            <p>{`${language.home.cv_frame.modification} : ${cvInformationsJson.date}`}</p>
                          </div>
                          <div id="type">
                            <p>{`${language.home.cv_frame.type} : ${cvInformationsJson.type}`}</p>
                          </div>
                        </div>
                      </div>
                      <div id="container-cv-text-bar">
                        <div className="framecv-bar"></div>
                        <div id="framecv-text">
                          <p dangerouslySetInnerHTML={{ __html: language.home.cv_frame.text }}></p>
                        </div>
                        <div className="framecv-bar"></div>
                      </div>
                      <div id="backgroundCV"></div>
                    </div>
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
                  <div className="title t3" id="firstmid">
                    <p>{ language.home.skills }</p>
                  </div>
                  <div id="bar2" className="horizontal-bars" ref={ bar => { bars.current.push(bar); elementsToAnimate.current.push(bar) } }></div>
                  <div className="school-competence-container" onMouseOver={ () => colorBar(2) } onMouseLeave={ () => uncolorBar(2)}>
                    { schoolCompetenceObjects.map((competence, i) => (
                      <CompetenceCard competence={ competence } ref={ card => { cards.current[i] = card; elementsToAnimate.current.push(card) } } />
                    ))}
                  </div>
                </article>
          </>
    );
}

export default Home;