import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

import '../../asset/css/modal/message-modal.scss';

// Utiliser createPortal pour afficher le modal

export const ModalMessage = (props) => {

    // Durée de l'animation en secondes
    const modalDuration = 4;

    let modalStatus = props.isSuccess ? "success" : "error";

    const modalRef = useRef(null);

    const message = props.isSuccess ? (props.messages.success) : (props.messages.error);
    let crossClicked = false;

    const crossClick = () => {
        if (!crossClicked) {
            crossClicked = true;
            modalRef.current.classList.add('fade-out');
            setTimeout(() => {
                props.closeModal();
            }, 200);
        }
    }

    useEffect(() => {
        setTimeout(crossClick, modalDuration * 1000);
    })

    return createPortal(
        <div ref={ modalRef } className={`${ modalStatus }-message-container message-container`}>
            <div className="cross-container" onClick={ crossClick }>
                <div className="cross">
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
            </div>
            <img src={ require(`../../asset/img/modal/${ modalStatus }.png`) } alt={ modalStatus } draggable="false" />
            <div className={`${ modalStatus }-message`}>
                <p>{ message }</p>
            </div>
        </div>,
    document.body)
}