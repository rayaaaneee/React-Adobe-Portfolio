import { forwardRef } from "react";

export const Semester = forwardRef(({ semester, clickSemester, colorPoint, uncolorPoint, openSemesterPage }, ref) => {
    console.log(semester);
    return (
        <div className="semester animate" initial-x={ (Math.floor(Math.random() * 20) - 10) } ref={ ref } onMouseOver={ colorPoint } onClick={ () => { clickSemester(); openSemesterPage() } } onMouseOut={ uncolorPoint }>
            <div className="title-semester-container">
                <img src={ semester.getIcon() } alt="icon-study" draggable="false" />
                <h1 className="title-semester">{ semester.title }</h1>
            </div>
            <p className="semester-description" dangerouslySetInnerHTML={{ __html : semester.description }}></p>
            <div className="bottom-semester-container">
                <div className="bottom-semester"></div>
            </div>
        </div>
    )
})