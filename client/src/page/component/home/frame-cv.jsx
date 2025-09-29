import { useEffect, useRef, useState } from "react";

import { useConditionalEffect } from "../../../hook/useConditionalEffect";

import cvInformationsJson from '../../../asset/data/home/cv-info.json';

import '../../../asset/scss/home/frame-cv.scss';
import '../../../asset/scss/media/home/frame-cv.scss';

import cvImg from '../../../asset/img/home/frame-cv/CV.png';

export const FrameCV = ({ isVisible, onClose, language }) => {

    const frameCvRef = useRef(null);
    
    const cvPdfIframe = useRef(null);

    const handlePrintPdf = () => {
        cvPdfIframe.current.contentWindow.focus();
        cvPdfIframe.current.contentWindow.print();
    }

    const closeCvPreviewOnEscape = (e) => {
        if (e.key === 'Escape') {
            onClose(e);
        }
    }

    var [cvVisibilityChanged, setCvVisibilityChanged] = useState(false);
    useConditionalEffect(() => {

        if (isVisible) {

            document.body.style.overflow = 'hidden';
            frameCvRef.current.classList.add('visible');
            setCvVisibilityChanged(true);
            
            document.addEventListener('keydown', closeCvPreviewOnEscape);

        } else if (cvVisibilityChanged) {

            frameCvRef.current.scrollTo(0, 0);
            frameCvRef.current.classList.add('hidden');
            frameCvRef.current.classList.remove('visible');

            document.removeEventListener('keydown', closeCvPreviewOnEscape);

            setTimeout(() => {

              document.body.style.removeProperty('overflow');
              frameCvRef.current.classList.remove('hidden');
            
            }, 150);

        }

    }, [isVisible, cvVisibilityChanged]);

    useEffect(() => {
        frameCvRef.current.classList.remove('hidden');
    }, []);

    var [isCvInformationsVisible, setCvInformationsVisible] = useState(false);

    return (
        <div id="framecv-visible" ref={frameCvRef}>
            {/* On met le CV dans le rendu, caché dans l'HTML pour s'en servir en cas d'impression */}
            <iframe ref={cvPdfIframe} src={ `/CV.pdf` } className="hidden" title='CV'></iframe>
          	<div id="containerFrameCV">
          	  	<div id="imgcv">
          	  	  	<img draggable="false" src={cvImg} alt="CV-icon" />
          	  	</div>
          	  	<div id="buttons">
          	  	  	<div id="cross" title={ language.home.cv_frame.quit } onClick={ onClose}>
          	  	  	</div>
          	  	  	<div id="print" onClick={ handlePrintPdf }>
          	  	  	  	<img draggable="false" id="imgbutton" alt="print" src={require('../../../asset/img/home/frame-cv/print.png')} />
          	  	  	</div>
          	  	  	<a href={ `/CV.pdf` } download="CV_Rayane_Merlin.pdf">
          	  	  	  	<div id="download">
          	  	  	  	  	<img draggable="false" id="imgbutton" src={require('../../../asset/img/home/frame-cv/download.png')} alt="dl" />
          	  	  	  	</div>
          	  	  	</a>
          	  	  	<div id="infos" onClick={() => {
          	  	  	  	setCvInformationsVisible(!isCvInformationsVisible)
          	  	  	}} onMouseLeave={() => {
          	  	  	  	setCvInformationsVisible(false);
          	  	  	}}>
          	  	  	  <img draggable="false" id="imgbutton" src={require('../../../asset/img/home/frame-cv/infos.png')} alt="" />
          	  	  	</div>
          	  	</div>
          	  	<div id="informations" className={ isCvInformationsVisible && 'visible' }>
          	  	  	<div id="title">
          	  	  	  	<p>{cvInformationsJson.name}</p>
          	  	  	</div>
          	  	  	<div id="size">
          	  	  	  	<p>{`${language.home.cv_frame.size} : ${cvInformationsJson.size}`}</p>
          	  	  	</div>
          	  	  	<div id="date">
          	  	  	  	<p>{`${language.home.cv_frame.modification} : ${cvInformationsJson.date}`}</p>
          	  	  	</div>
          	  	  	<div id="type">
          	  	  	  	<p>{`${language.home.cv_frame.type} : ${cvInformationsJson.type}`}</p>
          	  	  	</div>
          	  	</div>
          	</div>
          	<div id="container-cv-text-bar">
          	    <div className="framecv-bar"></div>
          	    <div id="framecv-text">
          	        <p dangerouslySetInnerHTML={{ __html: language.home.cv_frame.text }}></p>
          	    </div>
          	    <div className="framecv-bar"></div>
          	</div>
          	<div id="backgroundCV"></div>
        </div>
    );
};
