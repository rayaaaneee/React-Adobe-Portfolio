export const Project = ({ project, key, colorBar, uncolorBar, openProjectPage, isDarkTheme, darkLinkImg, darkDownloadImg, linkImg, downloadImg }) => {
    return (
        <div
        className="main-container animate"
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
                <img alt='project-icon' src={ isDarkTheme ? project.getDarkReactIcon() : project.getReactIcon() } className="workslogos onloading" draggable="false" />
            </div>
        </div>
    )
}