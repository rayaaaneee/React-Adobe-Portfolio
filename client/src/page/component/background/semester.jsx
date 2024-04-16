import { forwardRef, useContext } from "react";

import MarkdownPreview from '@uiw/react-markdown-preview';

import languageContext from "../../../function/context/language-context";

export const Semester = forwardRef(({ semester, clickSemester, colorPoint, uncolorPoint, openSemesterPage }, ref) => {

    const { language } = useContext(languageContext);
    return (
        <div className="semester animate" initial-x={ (Math.floor(Math.random() * 20) - 10) } ref={ ref } onMouseOver={ colorPoint } onClick={ () => { clickSemester(); openSemesterPage() } } onMouseOut={ uncolorPoint }>
            <div className="title-semester-container">
                <img src={ require("../../../asset/img/background/" + semester.icon) } alt="icon-study" draggable="false" />
                <h1 className="title-semester">{ semester.getTitle(language.current) }</h1>
            </div>
            <MarkdownPreview className='semester-description' source={ semester.getDescription(language.current) } />
            <div className="bottom-semester-container">
                <div className="bottom-semester"></div>
            </div>
        </div>
    )
})