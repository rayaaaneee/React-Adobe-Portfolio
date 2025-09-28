import { forwardRef, useContext } from "react";

import languageContext from "../../../function/context/language-context";

export const CompetenceCard = forwardRef(({ competence, skillImageToLoad }, ref) => {

    const { language } = useContext(languageContext);

    return (
        <div className="card animate" ref={ ref }>
            <div className="card-front">
                <div className="linear-gradient-circle-container card-top-container" style={{ backgroundColor: competence.getBottomColor() }}>
                    <div className="linear-gradient-circle" style={{ background: competence.getGradient() }}>
                        <img alt='competence-card' ref={skillImageToLoad} src={ require(`../../../asset/img/home/card/${competence.getImage()}`) } />
                    </div>
                </div>
                <h1 className="title-card" style={{ color: competence.getTitleColor() }}>
                    • { competence.getTitle(language.current) }
                </h1>
                <div className="card-bottom-container">
                    <div className="card-bottom" style={{ backgroundColor: competence.getBottomColor() }}></div>
                </div>
            </div>
            <div className="card-back">
                <div className="info-icon-container card-top-container">
                    <img alt='competence-card-info-icon' src={ require('../../../asset/img/home/card/' + competence.getInfoIcon()) } draggable="false" />
                </div>
                <h2 className="card-back-title" style={{ color: competence.getTitleColor() }}>
                    {competence.getTitle(language.current)} { language.home.is }
                </h2>
                <p className="card-description" style={{ color: competence.getTitleColor() }}>
                    {competence.getDescription(language.current)}
                </p>
            </div>
        </div>
    )
});