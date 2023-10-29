import loaderContext from '../../functions/contexts/loaderContext';
import themeContext from '../../functions/contexts/themeContext';
import { modalContext, modalInformationsContext} from '../../functions/contexts/modalContext';

import { useEffect, useMemo, useRef, useState } from 'react';

import { ManageThemes } from '../../functions/manageThemes';
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
    const [modalIsVisible, setModalIsVisible] = useState(null);
    const modalValue = useMemo(
      () => ({ modalIsVisible, setModalIsVisible }), 
      [modalIsVisible]
    );

    // Gérer les informations de la modale
    const [modalInformations, setModalInformations] = useState(null);
    const modalInformationsValue = useMemo(
      () => ({ modalInformations, setModalInformations }), 
      [modalInformations]
    );

    
    return (
      <>
        <modalContext.Provider value={modalValue} >
          <modalInformationsContext.Provider value={modalInformationsValue} >
            <loaderContext.Provider value={loaderValue} >
                <themeContext.Provider value={themeValue} >
                  <Modal />
                  { children }
                </themeContext.Provider>
            </loaderContext.Provider>
          </modalInformationsContext.Provider>
        </modalContext.Provider>
      </>
    )
}

export default Contexts;