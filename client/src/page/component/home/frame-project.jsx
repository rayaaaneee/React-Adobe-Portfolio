import { forwardRef } from 'react';

import MarkdownPreview from '@uiw/react-markdown-preview';

import darkLinkImg from '../../../asset/img/home/icon/white-link.png';
import skills from '../../../asset/img/home/icon/skills.png';
import languages from '../../../asset/img/home/icon/language.png';
import descriptionIcon from '../../../asset/img/home/icon/desc-icon-pink.png';
import useDescriptionIcon from '../../../asset/img/home/icon/use-desc-icon-pink.png';
import whiteMemoryIcon from '../../../asset/img/home/icon/white-memory-icon.png';
import anchorLink from '../../../asset/img/home/icon/anchor-link.png';
import githubIcon from '../../../asset/img/home/icon/github-pink.png';
import darkDownloadImg from '../../../asset/img/home/icon/white-download.png';

import '../../../asset/scss/home/project-page.scss';
import '../../../asset/scss/media/home/project-page.scss';

export const FrameProject = forwardRef(({ 
	project, 
	onClosePage, 
	onOpenViewer, 
	onCloseViewer, 
	projectViewerRef,
	currentProjectSquareRef,
	language 
	}, ref) => (
		<div ref={ref} className="project-page-container">
    	    <div className="project-page-content" ref={ref} >
    	        <div className='background-project-page'></div>
    	        <div className='parts'>
    	          	<div className="title-project-container">
    	          	  	<img alt='link-or-download' className="link-or-download" src={project && (project.isLink() ? darkLinkImg : darkDownloadImg) } draggable="false" />
    	          	  	<p className="title-project">{ project && project.getTitle() }</p>
    	          	</div>
    	          	{project && (project.hasLanguages() &&
    	          	  	<>
    	          	    	<div className="project-languages-skills title-page-project">
    	          	      		<img src={ languages } alt='langages-icones' draggable="false" />
    	          	      		<p className="title-language-skill">{ language.home.projects_frame.languages + (project.getLanguages().length > 1 ? 's' : '') } :</p>
    	          	    	</div>
    	          	    	<div className="project-languages-skills-container page-content">
    	          	      		{project.getLanguages().map((language, index) => {
    	          	        		return (
    	          	          			<div key={index} className="skill-language-container template" style={{backgroundColor: language.color}}>
    	          	            			<p>{language.name}</p>
    	          	          			</div>
    	          	        		);
    	          	      		})}
    	          	    	</div>
    	          	  	</>
    	          	) }
    	          	{project && (project.hasCompetences() &&
    	          	  	<>
    	          	  	  	<div className="project-languages-skills title-page-project">
    	          	  	  	  	<img src={ skills } alt='languages-icone' draggable="false" />
    	          	  	  	  	<p className="title-languages-skill">{
    	          	  	  	    language.home.projects_frame.skills + (project.getCompetences().length > 1 ? 's' : '') } :</p>
    	          	  	  	</div>
    	          	  	  	<div className="project-languages-skills-container page-content">
    	          	  	  	  	{project.getCompetences().map((competence, index) => {
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
    	          	  	<MarkdownPreview className='project-desc-value page-content' source={ project && project.getDescription() } />
    	          	</div>
    	          	{ project && 
    	          	  	(project.hasUseDescription() &&
    	          	  	    <div className="project-use-desc text-project-container">
    	          	  	      	<div className="project-use-desc-text title-page-project">
    	          	  	      	  	<img src={ useDescriptionIcon } alt="notice-utilisation-icone" draggable="false" />
    	          	  	      	  	<p>{ language.home.projects_frame.for_using } :</p>
    	          	  	      	</div>
    	          	  	      	<MarkdownPreview className='project-use-desc-value page-content' source={ project && project.getUseDescription() } />
    	          	  	    </div>
    	          	  	) 
    	          	}
    	          	{ project && 
    	          	  	(project.hasRepository() &&
    	          	      	<div className="project-repository text-project-container">
    	          	        	<div className="project-repository-text title-page-project">
    	          	          		<img src={ githubIcon } alt="notice-utilisation-icone" draggable="false" />
    	          	          		<p>{ language.home.projects_frame.repository } :</p>
    	          	        	</div>
    	          	        	<a target='_blank' href={ project.getRepository() } className="project-repository-value page-content">
    	          	          		<p>{ project.getRepository() }</p>
    	          	          		<img src={ anchorLink } alt="repository-link" draggable="false" />
    	          	        	</a>
    	          	      	</div>
    	          	  	) 
    	          	}
    	        </div>
    	        { project && (project.isLink() &&
    	          	<a onClick={ () => onOpenViewer(project.getLink()) }
    	          	className="link-btn title-page-project" 
    	          	rel='noreferrer'>{ `${language.home.projects_frame.consult} ${project.getTitle()}` }</a>
    	          	)
    	        }
    	        { project && (project.isDownload() &&
    	        	<a href={ `/project/${project.getFile()}` } className="download-btn title-page-project" download>{ `${language.home.projects_frame.download} ${project.getFileName()}`}</a>
    	        ) }
    	        <div className="project-size-container text-project-container">
    	          	<img src={ whiteMemoryIcon } alt="mémoire-icone" draggable="false" />
    	          	<p className="page-content">{language.home.projects_frame.file_size} :</p>
    	          	<p className="project-size-value page-content">{ project && project.getSize() }</p>
    	          	<p className='page-content'> Mo </p>
    	        </div>
    	        <div className='project-viewer-container' ref={ projectViewerRef }>
    	          	<div className='cross-project-viewer' title={ language.home.projects_frame.quit_preview } onClick={ onCloseViewer }>
    	          	</div>
    	          	<iframe src='' className='project-viewer onloading'></iframe>
    	        </div>
    	    </div>
    	    <a href={ `/project/${project && project.getFile()}` }
    	        className='current-project-viewing' download ref={currentProjectSquareRef} title={`${ language.home.projects_frame.download } ${project && project.getTitle() }`}>
    	        <img className='img-current-project-viewing' src={ project && (project.getDarkReactIcon()) } alt='project-icon' draggable="false" />
    	    </a>
    	    <div title={ language.home.projects_frame.quit } className="quit-project-button" onClick={ onClosePage}>
    	    </div>
    	</div>
	)
);
