import { forwardRef } from "react"

import linkImg from '../../../asset/img/home/icon/black-link.png';
import darkLinkImg from '../../../asset/img/home/icon/white-link.png';
import downloadImg from '../../../asset/img/home/icon/black-download.png';
import darkDownloadImg from '../../../asset/img/home/icon/white-download.png';

export const Project = forwardRef(({ project, colorBar, uncolorBar, onClick, isDarkTheme, imageToLoad }, ref) => {

    return (
        <div
            className="main-container"
            ref={ ref }
            onMouseOver={ colorBar }
            onMouseLeave={ uncolorBar }
            onClick={ onClick }
            data-date={ project.getFormatDate() } >
                <div className="content">
                    <div className="to_download">
                        <p>{ project.getTitle() }</p>
                        <img alt='download-link'
                          	src={ 
                          	project.isLink() ? 
                          	  	isDarkTheme ? darkLinkImg : linkImg 
                          	  	  	:
                          	  	isDarkTheme ? darkDownloadImg : downloadImg
                          	} draggable="false" />
                    </div>
                    <img alt='project-icon' 
		    			src={ isDarkTheme ? project.getDarkReactIcon() : project.getReactIcon() } 
		    			className="workslogos" 
		    			draggable="false" 
		    			ref={ imageToLoad } 
		    	    />
                </div>
        </div>
    )
});