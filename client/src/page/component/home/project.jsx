import { forwardRef } from "react"

export const Project = forwardRef(({ project, key, colorBar, uncolorBar, openProjectPage, isDarkTheme, darkLinkImg, darkDownloadImg, linkImg, downloadImg, imageLoadingRef }, ref) => {
    return (
        <div
        className="main-container"
        ref={ ref }
        onMouseOver={ colorBar }
        onMouseLeave={ uncolorBar }
        onClick={ openProjectPage }
        data-date={ project.getFormatDate() }
        key={ key } >
            <div className="content">
                <div className="to_download">
                    <p>{ project.getTitle() }</p>
                    <img alt='download-link' src={ 
                      project.isLink() ? 
                        isDarkTheme ? darkLinkImg : linkImg 
                          :
                        isDarkTheme ? darkDownloadImg : downloadImg
                      } draggable="false" />
                </div>
                <img ref={ imageLoadingRef } alt='project-icon' src={ isDarkTheme ? project.getDarkReactIcon() : project.getReactIcon() } className="workslogos" draggable="false" />
            </div>
        </div>
    )
});