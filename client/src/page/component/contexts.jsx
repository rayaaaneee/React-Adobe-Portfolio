import { useEffect, useMemo, useRef, useState } from 'react';

import loaderContext from '../../function/context/loader-context';
import themeContext from '../../function/context/theme-context';
import { modalContext } from '../../function/context/modal-context';

import { ManageThemes } from '../../object/manage-themes';
import { ModalInformations } from '../../object/modal-informations';

import { Modal } from './modal'; 

const Contexts = ({ children }) => {

    // Gérer l'accessibilité du thème (hors index)
    const [isDarkTheme, setIsDarkTheme] = useState(ManageThemes.isDarkTheme);
    const themeValue = useMemo(
      () => ({ isDarkTheme, setIsDarkTheme }),
      [isDarkTheme]
    );

    // Si le State accessible de partout (hors index) est modifié, on met à jour le thème
    const isInitialMount = useRef(true);
    useEffect(() => {
        // Si c'est le premier chargement, je ne fait rien
        if (isInitialMount.current) {
          isInitialMount.current = false;
        } else {
          ManageThemes.toggleThemes();
        }
    }, [isDarkTheme]);

    // Gérer l'accessibilité à l'information de si le loader a déjà été affiché
    const [wasLoaderShowed, setWasLoaderShowed] = useState(null);
    const loaderValue = useMemo(
      () => ({ wasLoaderShowed, setWasLoaderShowed }), 
      [wasLoaderShowed]
    );

    // Gérer la modale
    const [modalInformations, setModalInformations] = useState(new ModalInformations());
    const modalValue = useMemo(
      () => ({ modalInformations, setModalInformations }), 
      [modalInformations]
    );

    return (
      <>
        <modalContext.Provider value={modalValue} >
            <loaderContext.Provider value={loaderValue} >
                <themeContext.Provider value={themeValue} >
                  <Modal />
                  { children }
                </themeContext.Provider>
            </loaderContext.Provider>
        </modalContext.Provider>
      </>
    )
}

export default Contexts;