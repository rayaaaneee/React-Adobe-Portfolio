import { useRef, useContext } from 'react';
import { createPortal } from 'react-dom';

import { modalContext } from '../../function/context/modal-context';

import { useConditionalEffect } from '../../hook/useConditionalEffect';

import '../../asset/css/modal/style.scss';

// Utiliser createPortal pour afficher le modal

export const Modal = () => {

    const { modalInformations, setModalInformations } = useContext(modalContext);

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
        console.log(modalInformations);
        setTimeout(crossClick, modalDuration * 1000);
    }, [ modalInformations ])

    return createPortal(
        <>
            { modalInformations.isVisible && (
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