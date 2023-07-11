import Main from './components/main';
import { ManageBody } from '../functions/manageBody';
import { useEffect, useState } from 'react';

import { Project } from '../functions/objects/project';
import { SchoolCompetence } from '../functions/objects/school_competence';
import { animateApparition } from '../functions/apparition';

import '../asset/css/home/style.scss';
import '../asset/css/home/frame-cv.scss';
import '../asset/css/home/project-page.scss';
import '../asset/css/home/dark-style.scss';

import '../asset/css/media/home/style.scss';
import '../asset/css/media/home/project-page.scss';
import '../asset/css/media/home/frame-cv.scss';

import competenceJson from '../asset/data/home/competence.json';
import frameworkJson from '../asset/data/home/framework.json';
import languageJson from '../asset/data/home/language.json';
import projectJson from '../asset/data/home/project.json';
import schoolCompetenceJson from '../asset/data/home/school_competence.json';

import zoomImg from '../asset/img/home/icon/zoom.png'
import darkZoomImg from '../asset/img/home/icon/zoom-white.png'

import cvImg from '../asset/file/CV.png';

const Home = () => {

    ManageBody.changeClass('home');

    useEffect(() => {animateApparition()}, []);;

    const [zoomImgState, setZoomImg] = useState(zoomImg);

    const images = [zoomImg];
    const darkImages = [darkZoomImg];
    const states  = [setZoomImg];

    useEffect(() => {
        document.title = 'Accueil';
    });
    let projectsObjects = [];
    projectJson.projects.forEach(project => {
        let projectObject = new Project(project);
        projectsObjects.unshift(projectObject);
    });

    let schoolCompetenceObjects = [];
    schoolCompetenceJson.competences.forEach(school_competence => {
        let schoolCompetenceObject = new SchoolCompetence(school_competence);
        schoolCompetenceObjects.push(schoolCompetenceObject);
    });

    const growImg = (i) => {}
    const shrinkImg = (i) => {}

    const colorBar = (i) => {}
    const uncolorBar = (i) => {}

    const openProjectPage = () => {}
    const closeProjectPage = () => {}
    const openPage = () => {}
    const closePage = () => {}
    const printPDF = () => {}
    const showInformations = () => {}
    const hideInformations = () => {}

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
                        onClick={ () => openProjectPage() }
                        data-date={ project.getFormatDate() }
                        key={i}
                      >
                        <div className="content" onMouseOver={ () => { growImg(i) }} onMouseLeave={ () => { shrinkImg(i) }} >
                            <div className="to_download">
                                <p>{ project.getTitle() }</p>
                                <img src="<?= $project->getTypeImagePath($theme->getImagePath($project->getTypeImageName())); ?>" draggable="false" />
                            </div>
                            <img src="<?= $project->getIconPath($theme->getImagePath($project->getIcon())) ?>" class="workslogos" draggable="false" />
                        </div>
                    </div>
                    ))}
                    </article>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="chevron right animate">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                  </div>
                  <div className="project-page-container">
                    <div className="project-page">
                      <div className="project-page-content">
                        <div className="title-project-container">
                          <img className="link-or-download" src="<?= home/icon/white-link.png" draggable="false" />
                          <p className="title-project"></p>
                        </div>
                        <div className="project-languages-skills title-page-project">
                          <img src="<?= home/icon/skills.png" draggable="false" />
                          <p className="title-language-skill">Compétences :</p>
                        </div>
                        <div className="project-languages-skills-container page-content">
                          <div className="skill-language-container template hidden">
                            <p></p>
                          </div>
                        </div>
                        <div className="project-desc text-project-container">
                          <div className="project-desc-text title-page-project">
                            <img src="<?= home/icon/desc-icon-pink.png" draggable="false" />
                            <p>Description :</p>
                          </div>
                          <p className="project-desc-value page-content"></p>
                        </div>
                        <div className="project-use-desc text-project-container">
                          <div className="project-use-desc-text title-page-project">
                            <img src="<?= home/icon/use-desc-icon-pink.png" draggable="false" />
                            <p>Utilisation :</p>
                          </div>
                          <p className="project-use-desc-value page-content"></p>
                        </div>
                        <a href="" className="link-btn title-page-project" target="_blank"></a>
                        <a href="" className="download-btn title-page-project" download></a>
                        <div className="project-size-container text-project-container">
                          <img src="<?= home/icon/white-memory-icon.png" draggable="false" />
                          <p className="page-content">Taille du fichier :</p>
                          <p className="project-size-value page-content"></p>
                          <p className="page-content">Mo</p>
                        </div>
                        <div className="background-project-page"></div>
                      </div>
                      <div className="quit-project-button" onClick={closeProjectPage}>
                        <p>X</p>
                      </div>
                    </div>
                  </div>
              </article>
              <h2 className="explicationtext">Vous trouverez ici mes projets importants, qu'ils soient scolaires ou faits de mon côté. <br/>Il vous suffit de cliquer pour les télécharger.</h2>
              <article id="cv">
                  <div className="title t2" id="secondmid">
                    <p>Mon CV</p>
                  </div>
                  <div className="horizontal-bars animate" id="horizontal-bar2"></div>
                  <div id="container-cv" className="animate" onMouseOver={colorBar(2)} onMouseLeave={ uncolorBar(2) }>
                    <div id="cv-img" onClick={openPage}>
                      <img src={ cvImg } alt="cv" data-lightbox="CV_Rayane_Merlin.png" data-title="Voici mon C.V actuel, celui-ci est amené à être modifié mais restera à jour sur le site." draggable="false" />
                    </div>
                    <div id="framecv-visible">
                      <div id="container">
                        <div id="imgcv">
                          <img draggable="false" src="<?= PATH_FILES; ?>CV.png" alt="photo" />
                        </div>
                        <div id="buttons">
                          <div id="cross" onClick={closePage}>
                            <p>x</p>
                          </div>
                          <div id="print" onClick={printPDF}>
                            <img draggable="false" id="imgbutton" src="<?= home/frame-cv/print.png" />
                          </div>
                          <a href="<?= PATH_FILES; ?>CV.pdf" download="CV_Rayane_Merlin.pdf">
                            <div id="download">
                              <img draggable="false" id="imgbutton" src="<?= home/frame-cv/download.png" alt="dl" />
                            </div>
                          </a>
                          <div id="infos" onClick={showInformations} onMouseLeave={hideInformations}>
                            <img draggable="false" id="imgbutton" src="<?= home/frame-cv/infos.png" alt="" />
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
                      <div id="container-cv-text-bar" className="animate">
                        <div className="framecv-bar"></div>
                        <div id="framecv-text">
                          <p>À savoir : <br/><br/> Voici mon CV, celui-ci est amené à être modifié avec le temps, dans quelques mois il sera différent. <br/>
                            N'hésitez pas à passer sur ce site, celui-ci est mis à jour très régulièrement et contiendra donc forcément la dernière version en date. </p>
                        </div>
                        <div className="framecv-bar"></div>
                      </div>
                      <div id="background"></div>
                    </div>
                    <div id="cv-text">
                      <div className="blackbar"></div>
                      <div id="zoom">
                        <p>N'hésitez pas à cliquer sur l'image du C.V pour zoomer, cela vous permettra de le visionner dans sa qualité optimale sans avoir besoin de le télécharger.</p>
                        <img draggable="false" src={ zoomImgState } alt="zoom" />
                      </div>
                      <p className="beforebutton">Vous pouvez télécharger mon CV actuel au format pdf en cliquant sur le bouton ci-dessous.</p>
                      <a href="<?= PATH_FILES; ?>CV.pdf" download="CV_Rayane_Merlin.pdf"><button className="cv-button">Télécharger</button></a>
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
                            <img src={competence.getInfoIconPath()} draggable="false" />
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