import { forwardRef } from "react"

export const CompetenceCard = forwardRef(({ key, competence }, ref) => {
    return (
        <div className="card animate" key={ key } ref={ ref }>
          <div className="card-front">
            <div className="linear-gradient-circle-container card-top-container">
              <div className="linear-gradient-circle" style={{ background: competence.getGradient() }}>
                <img src={ require(`../../../asset/img/home/card/${competence.getImage()}`) } alt="card-image" />
              </div>
            </div>
            <h1 className="title-card" style={{ color: competence.getTitleColor() }}>
              • { competence.getTitle() }
            </h1>
            <div className="card-bottom-container">
              <div className="card-bottom" style={{ backgroundColor: competence.getBottomColor() }}></div>
            </div>
          </div>
          <div className="card-back">
            <div className="info-icon-container card-top-container">
              <img src={ require('../../../asset/img/home/card/' + competence.getInfoIcon()) } draggable="false" />
            </div>
            <h2 className="card-back-title" style={{ color: competence.getTitleColor() }}>
              {competence.getTitle()} c'est :
            </h2>
            <p className="card-description" style={{ color: competence.getTitleColor() }}>
              {competence.getDescription()}
            </p>
          </div>
        </div>
    )
});