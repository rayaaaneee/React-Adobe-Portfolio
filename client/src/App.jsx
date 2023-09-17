import { useEffect, useMemo, useRef, useState } from 'react';
import { ManageThemes } from './functions/manageThemes';
import loaderContext from './functions/loaderContext';
import themeContext from './functions/themeContext';

import Router from './router/router';
import './style.css';

const App = () => {

  ManageThemes.manageThemes();

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

  return (
    <themeContext.Provider value={themeValue} >
      <loaderContext.Provider value={loaderValue} >
        <Router/>
      </loaderContext.Provider>
    </themeContext.Provider>
  );
}

export default App;