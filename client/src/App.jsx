import { useMemo, useState } from 'react';
import { ManageThemes } from './functions/manageThemes';
import wasLoaderShowed from './functions/wasLoaderShowed';

import Router from './router/router';
import './style.css';

const App = () => {

  ManageThemes.manageThemes();

  const [wasLoader, setWasLoader] = useState(null);
  const loaderValue = useMemo(
    () => ({ wasLoader, setWasLoader }), 
    [wasLoader]
  );

  return (
    <wasLoaderShowed.Provider value={loaderValue} >
      <Router/>
    </wasLoaderShowed.Provider>
  );
}

export default App;