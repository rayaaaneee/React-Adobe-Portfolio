import { useRef, useContext } from 'react';
import { useConditionalEffect } from '../../hooks/useConditionalEffect';
import { createPortal } from 'react-dom';

import '../../asset/css/modal/message-modal.scss';
import { modalContext, modalInformationsContext } from '../../functions/contexts/modalContext';

// Utiliser createPortal pour afficher le modal

export const Modal = () => {

    const { isVisible } = useContext(modalContext);   
    const { modalInformations } = useContext(modalInformationsContext);

    // Durée de l'animation en secondes
    const modalDuration = 4;


    const modalRef = useRef(null);

    let crossClicked = false;

    const crossClick = () => {
        if (!crossClicked) {
            crossClicked = true;
            modalRef.current.classList.add('fade-out');
            setTimeout(() => {
                modalRef.current.classList.add('hidden');
                modalRef.current.classList.remove('fade-out');
            }, 200);
        }
    }

    useConditionalEffect(() => {
        setTimeout(crossClick, modalDuration * 1000);
    }, [isVisible])

    return createPortal(
        <>
            { isVisible && (
                <div ref={ modalRef } className={`${ modalInformations && modalInformations.modalStatus }-message-container message-container` } >
                    <div className="cross-container" onClick={ crossClick }>
                        <div className="cross">
                            <div className="bar"></div>
                            <div className="bar"></div>
                        </div>
                    </div>
                    <img src={ require(`../../asset/img/modal/${ modalInformations && modalInformations.modalStatus }.png`) } 
                    alt={ modalInformations && modalInformations.modalStatus } draggable="false" />
                    <div className={`${ modalInformations && modalInformations.modalStatus }}-message`}>
                        <p>{ modalInformations && modalInformations.message }</p>
                    </div>
                </div>
            )}
        </> , document.body
    )
}