import { useContext } from "react";

import modalContext from "../function/context/modal-context";

import { ModalInformations } from "../object/modal-informations";

/* Setter automatique simplifié */
const useModalInformationsState = (callback) => {
    const { setModalInformations } = useContext(modalContext);
    setModalInformations((information) => {
        let tmpInformation = callback(information);
        return ModalInformations.initRow(tmpInformation);
    });
}

export default useModalInformationsState;