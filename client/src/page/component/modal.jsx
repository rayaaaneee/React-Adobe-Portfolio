import { useRef, useContext } from 'react';
import { createPortal } from 'react-dom';

import modalContext from '../../function/context/modal-context';

import { useConditionalEffect } from '../../hook/useConditionalEffect';

import '../../asset/css/modal/style.scss';
import { ModalInformations } from '../../object/modal-informations';

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

                setModalInformations((informations) => {
                    informations = new ModalInformations();
                    return informations;
                });
            }, 200);
        }
    }

    useConditionalEffect(() => {
        if (modalInformations.isVisible) {
            setTimeout(() => {
                crossClick();
                crossClicked = false;
            }, modalDuration * 1000);
        }
    }, [ modalInformations ]);

    return createPortal(
        <>
            { modalInformations.isVisible && (
                <div ref={ modalRef } className={`${ modalInformations.getStatus() }-message-container message-container` } >
                    <img src={ require(`../../asset/img/modal/${ modalInformations.getStatus() }.png`) } 
                    alt={ modalInformations.getStatus() } draggable="false" />
                    <div className={`${ modalInformations.getStatus() }-message message`}>
                        <p>{ modalInformations.getMessage() }</p>
                    </div>
                    <div className="cross-container" onClick={ crossClick }>
                        <div className="cross">
                            <div className="bar"></div>
                            <div className="bar"></div>
                        </div>
                    </div>
                </div>
            )}
        </>, document.body
    )
}