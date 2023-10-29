import { useRef, useContext } from 'react';
import { createPortal } from 'react-dom';

import { useConditionalEffect } from '../../hook/useConditionalEffect';

import '../../asset/css/modal/message-modal.scss';
import { modalContext, modalInformationsContext } from '../../function/context/modal-context';

// Utiliser createPortal pour afficher le modal

export const Modal = () => {

    const { modalIsVisible } = useContext(modalContext);
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
        console.log('modalIsVisible', modalIsVisible);
        console.log('modalInformations', modalInformations);
        setTimeout(crossClick, modalDuration * 1000);
    }, [modalIsVisible])

    return createPortal(
        <>
            { modalIsVisible && (
                <div ref={ modalRef } className={`${ modalInformations.modalStatus }-message-container message-container` } >
                    <div className="cross-container" onClick={ crossClick }>
                        <div className="cross">
                            <div className="bar"></div>
                            <div className="bar"></div>
                        </div>
                    </div>
                    <img src={ require(`../../asset/img/modal/${ modalInformations.modalStatus }.png`) } 
                    alt={ modalInformations.modalStatus } draggable="false" />
                    <div className={`${ modalInformations.modalStatus }-message`}>
                        <p>{ modalInformations.message }</p>
                    </div>
                </div>
            )}
        </>, document.body
    )
}