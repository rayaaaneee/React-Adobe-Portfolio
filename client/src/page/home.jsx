import Main from './components/main';
import { ManageBody } from '../functions/manageBody';
import { ManageThemes } from '../functions/manageThemes';
import { useEffect, useState, useRef } from 'react';
import { useReactToPrint } from 'react-to-print';

import { Project } from '../objects/project';
import { SchoolCompetence } from '../objects/school_competence';
import { animateApparition } from '../functions/apparition';
import { ScrollProjects } from '../functions/scrollProjects';
import { animateCards } from '../functions/3dEffectCard';

import '../asset/css/home/style.scss';
import '../asset/css/home/frame-cv.scss';
import '../asset/css/home/project-page.scss';
import '../asset/css/home/dark-style.scss';

import '../asset/css/media/home/style.scss';
import '../asset/css/media/home/project-page.scss';
import '../asset/css/media/home/frame-cv.scss';

import competenceJson from '../asset/data/home/competence.json';
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

import cvImg from '../asset/file/CV.png';
import cvPdf from '../asset/file/CV.pdf';

const Home = () => {

    ManageBody.changeClass('home');

    useEffect(() => { animateApparition() }, []);;

    const [zoomImgState, setZoomImg] = useState(ManageThemes.isDarkTheme ? darkZoomImg : zoomImg);
    const [downloadImgState, setDownloadImg] = useState(ManageThemes.isDarkTheme ? darkDownloadImg : downloadImg);
    const [linkImgState, setLinkImg] = useState(ManageThemes.isDarkTheme ? darkLinkImg : linkImg);

    const images = [zoomImg, downloadImg, linkImg];
    const darkImages = [darkZoomImg, darkDownloadImg, darkLinkImg];
    const states  = [setZoomImg, setDownloadImg, setLinkImg];

    useEffect(() => {
        document.title = 'Accueil';
    });

    let projectsObjects = [];
    projectJson.projects.forEach(project => {
      let projectObject = new Project(project);

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
  
    const growImg = () => {}
  
    const shrinkImg = () => {}
  
    const colorBar = () => {}
  
    const uncolorBar = () => {}

    let [projectPageIsVisible, setProjectPageIsVisible] = useState(false);
    let projectPageRef = useRef(null);
    let projectPageContentRef = useRef(null);
    useEffect(() => {
        if (projectPageIsVisible) {
            document.body.style.overflowY = "hidden";
            projectPageContentRef.current.scrollTo(0, 0);
            projectPageRef.current.classList.add('visible');
        } else {
            document.body.style.removeProperty('overflow-y');
            projectPageRef.current.classList.remove('visible');
        }
    }, [projectPageIsVisible]);

    let [currentProject, setCurrentProject] = useState(null);
    const openProjectPage = (project) => {
        setProjectPageIsVisible(true);
        setCurrentProject(project);
    }
    
    const closeProjectPage = () => {
        setProjectPageIsVisible(false);
    }

    let [cvContainerIsVisible, setCvContainerIsVisible] = useState(false);

    let frameCvRef = useRef(null);

    var [cvVisibilityChanged, setCvVisibilityChanged] = useState(false);
    useEffect(() => {
      if (cvContainerIsVisible) {
        document.body.style.overflow = 'hidden';
        frameCvRef.current.classList.add('visible');
        frameCvRef.current.scrollTo(0, 0);
        setCvVisibilityChanged(true);
      } else if (cvVisibilityChanged) {
        frameCvRef.current.classList.add('hidden');
        frameCvRef.current.classList.remove('visible');
        setTimeout(() => {
          document.body.style.removeProperty('overflow');
          frameCvRef.current.classList.remove('hidden');
        }, 150);
      }
    }, [cvContainerIsVisible, cvVisibilityChanged]);

    useEffect(() => {
      frameCvRef.current.classList.remove('hidden');
    }, []);

    useEffect(() => {
      document.getElementById('pageContent').scrollTo({top: 0});
    });

    var [isCvInformationsVisible, setCvInformationsVisible] = useState(false);

    const handlePrintPdf = () => {
      window.open(cvPdf).print();
    }

    /* let cvImgRef = useRef(null);
    const handlePrintPdf = useReactToPrint({
      content: () => cvImgRef.current,
      contentStyle: `
        width: 100vw;
        height: 100vh;
        background-color: blue;
      `,
    }); */

    useEffect(() => {
      new ScrollProjects();
      animateCards();
    });

    const currentProjectViewingRef = useRef(null);
    useEffect(() => {
      var growing = true;
      const animateProjectViewing = () => {
        switch(growing){
            case true:
                currentProjectViewingRef.current.classList.add('animate');
/*                 currentProjectViewingRef.current.querySelector("img").style.transform = "scale(1)";
                currentProjectViewingRef.current.style.transform = "scale(0.9)"; */
                break;
            case false:
                currentProjectViewingRef.current.classList.remove('animate');
/*                 currentProjectViewingRef.current.querySelector("img").style.transform = "scale(0.85)";
                currentProjectViewingRef.current.style.removeProperty('transform'); */
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
            <Main child={
              <>
              <article id="main">
                  <div className="title t1" id="firstmid">
                    <p>Mes projets</p>
                  </div>
                  <div className="horizontal-bars animate" id="horizontal-bar1"></div>
                  <div className="projects-chevrons-container">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="chevron left animate">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                    </svg>
                    <article className="projects">
                    { projectsObjects.map((project, i) => (
                      <div
                        className="main-container animate"
                        onMouseOver={ () => colorBar(1) }
                        onMouseLeave={ () => uncolorBar(1) }
                        onClick={ () => openProjectPage(project) }
                        data-date={ project.getFormatDate() }
                        key={i}
                      >
                        <div className="content" onMouseOver={ () => { growImg(i) }} onMouseLeave={ () => { shrinkImg(i) }} >
                            <div className="to_download">
                                <p>{ project.getTitle() }</p>
                                <img alt='download-link' src={ project.isLink() ? linkImgState : downloadImgState } draggable="false" />
                            </div>
                            <img alt='project-icon' src={ ManageThemes.isDarkTheme ? project.getDarkReactIcon() : project.getReactIcon() } imgLightTheme={project.getReactIcon()} imgDarkTheme={project.getDarkReactIcon()} className="workslogos" draggable="false" />
                        </div>
                    </div>
                    ))}
                    </article>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="chevron right animate">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                  </div>
                  {/* Page des projets */}
                  <div ref={projectPageRef} className="project-page-container">
                    <div className="project-page">
                      <div className="project-page-content" ref={projectPageContentRef} >
                        <div className="title-project-container">
                          <img alt='link-or-download' className="link-or-download" src={currentProject ? (currentProject.isLink() ? darkLinkImg : darkDownloadImg) : '' } draggable="false" />
                          <p className="title-project">{currentProject ? currentProject.getTitle() : ''}</p>
                        </div>
                        {currentProject ? (currentProject.hasLanguages() ? 
                          <>
                            <div className="project-languages-skills title-page-project">
                              <img src={ languages } alt='langages-icones' draggable="false" />
                              <p className="title-language-skill">Langage{
                                currentProject.getLanguages().length > 1 ? 's' : ''
                              } :</p>
                            </div>
                            <div className="project-languages-skills-container page-content">
                              {currentProject.getLanguages().map((language) => {
                                return (
                                  <div className="skill-language-container template" style={{backgroundColor: language.color}}>
                                    <p>{language.name}</p>
                                  </div>
                                );
                              })}
                            </div>
                          </>
                        : '') : '' }
                        {currentProject ? (currentProject.hasCompetences() ? 
                          <>
                            <div className="project-languages-skills title-page-project">
                              <img src={ skills } alt='languages-icone' draggable="false" />
                              <p className="title-languages-skill">Compétence{
                                currentProject.getCompetences().length > 1 ? 's' : ''
                              } :</p>
                            </div>
                            <div className="project-languages-skills-container page-content">
                              {currentProject.getCompetences().map((competence) => {
                                return (
                                  <div className="skill-language-container template" style={{backgroundColor: competence.color}}>
                                    <p>{competence.name}</p>
                                  </div>
                                );
                              })}
                            </div>
                          </>
                        : '') : ''}
                        <div className="project-desc text-project-container">
                          <div className="project-desc-text title-page-project">
                            <img src={ descriptionIcon } alt="icone-description" draggable="false" />
                            <p>Description :</p>
                          </div>
                          <p className="project-desc-value page-content">
                            {currentProject ? currentProject.getDescription() : ''}
                          </p>
                        </div>
                      
                        { currentProject ? 
                          (currentProject.hasUseDescription() ? 
                              <div className="project-use-desc text-project-container">
                                <div className="project-use-desc-text title-page-project">
                                  <img src={ useDescriptionIcon } alt="notice-utilisation-icone" draggable="false" />
                                  <p>Utilisation :</p>
                                </div>
                                <p className="project-use-desc-value page-content">
                                  {currentProject ? currentProject.getUseDescription() : ''}
                                </p>
                              </div>
                            : 
                              ''
                          ) : '' 
                        }
                        { currentProject ? (currentProject.isLink() ?
                          <a href={ currentProject.getLink() } className="link-btn title-page-project" rel='noreferrer' target="_blank">Consulter {currentProject.getTitle()}</a>
                          :
                          ''
                          ) 
                        : ''}
                        { currentProject ? (currentProject.isDownload() ?
                           <a href={ currentProject.getFile() } className="download-btn title-page-project" download>Télécharger {currentProject.getFileName()}</a>
                           :
                          ''
                          ) 
                        : ''}
                        <div className="project-size-container text-project-container">
                          <img src={ whiteMemoryIcon } alt="mémoire-icone" draggable="false" />
                          <p className="page-content">Taille du fichier :</p>
                          <p className="project-size-value page-content"></p>
                          <p className="page-content">Mo</p>
                        </div>
                        <div className="background-project-page"></div>
                      </div>
                      <div title='Quitter' className="quit-project-button" onClick={closeProjectPage}>
                        <p>X</p>
                      </div>
                    </div>
                    <a href={ "ok" } className='current-project-viewing' ref={currentProjectViewingRef}>
                      <img className='img-current-project-viewing' src={ currentProject ? currentProject.getDarkReactIcon() : '' } alt='project-icon' draggable="false" />
                    </a>
                  </div>
              </article>
              <h2 className="explicationtext">Vous trouverez ici mes projets importants, qu'ils soient scolaires ou faits de mon côté. <br/>Il vous suffit de cliquer pour les télécharger.</h2>
              {/* Page du CV */}
              <article id="cv">
                  <div className="title t2" id="secondmid">
                    <p>Mon CV</p>
                  </div>
                  <div className="horizontal-bars animate" id="horizontal-bar2"></div>
                  <div id="container-cv" className="animate" onMouseOver={colorBar(2)} onMouseLeave={ uncolorBar(2) }>
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
                          <div id="cross" title='Quitter' onClick={() =>{
                            setCvContainerIsVisible(false);
                          }}>
                            <p>x</p>
                          </div>
                          <div id="print" onClick={ handlePrintPdf }>
                            <img draggable="false" id="imgbutton" src={require('../asset/img/home/frame-cv/print.png')} />
                          </div>
                          <a href={cvPdf} download="CV_Rayane_Merlin.pdf">
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
                        <div id="informations" className={isCvInformationsVisible? 'visible' : ''}>
                          <div id="title">
                            <p>{cvInformationsJson.name}</p>
                          </div>
                          <div id="size">
                            <p>Taille : {cvInformationsJson.size}</p>
                          </div>
                          <div id="date">
                            <p>Modification : {cvInformationsJson.date}</p>
                          </div>
                          <div id="type">
                            <p>Type : {cvInformationsJson.type}</p>
                          </div>
                        </div>
                      </div>
                      <div id="container-cv-text-bar">
                        <div className="framecv-bar"></div>
                        <div id="framecv-text">
                          <p>À savoir : <br/><br/> Voici mon CV, celui-ci est amené à être modifié avec le temps, dans quelques mois il sera différent. <br/>
                            N'hésitez pas à passer sur ce site, celui-ci est mis à jour très régulièrement et contiendra donc forcément la dernière version en date. </p>
                        </div>
                        <div className="framecv-bar"></div>
                      </div>
                      <div id="backgroundCV"></div>
                    </div>
                    <div id="cv-text">
                      <div className="blackbar"></div>
                      <div id="zoom">
                        <p>N'hésitez pas à cliquer sur l'image du C.V pour zoomer, cela vous permettra de le visionner dans sa qualité optimale sans avoir besoin de le télécharger.</p>
                        <img draggable="false" src={ zoomImgState } alt="zoom" />
                      </div>
                      <p className="beforebutton">Vous pouvez télécharger mon CV actuel au format pdf en cliquant sur le bouton ci-dessous.</p>
                      <a href={ cvPdf } download="CV_Rayane_Merlin.pdf"><button className="cv-button">Télécharger</button></a>
                      <div className="blackbar"></div>
                    </div>
                  </div>
              </article>
              <article id="realisation">
                  <div className="title t3" id="firstmid">
                    <p>Mes compétences :</p>
                  </div>
                  <div className="horizontal-bars animate" id="horizontal-bar3"></div>
                  <div className="school-competence-container">
                    { schoolCompetenceObjects.map((competence, i) => (
                      <div className="card animate" key={i}>
                        <div className="card-front">
                          <div className="linear-gradient-circle-container card-top-container">
                            <div className="linear-gradient-circle" style={{ background: competence.getGradient() }}>
                              <img src={ require(`../asset/img/home/card/${competence.getImage()}`) } alt="" />
                            </div>
                          </div>
                          <h1 className="title-card" style={{ color: competence.getTitleColor() }}>
                            • {competence.getTitle()}
                          </h1>
                          <div className="card-bottom-container">
                            <div className="card-bottom" style={{ backgroundColor: competence.getBottomColor() }}></div>
                          </div>
                        </div>
                        <div className="card-back">
                          <div className="info-icon-container card-top-container">
                            <img src={ require('../asset/img/home/card/' + competence.getInfoIcon()) } draggable="false" />
                          </div>
                          <h2 className="card-back-title" style={{ color: competence.getTitleColor() }}>
                            {competence.getTitle()} c'est :
                          </h2>
                          <p className="card-description" style={{ color: competence.getTitleColor() }}>
                            {competence.getDescription()}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </article>
                </>
              } images={ images } darkImages={ darkImages } states={ states }  />
          </>
    );
}

export default Home;