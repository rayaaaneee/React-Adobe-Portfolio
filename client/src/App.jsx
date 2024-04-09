import { useEffect } from 'react';
import { ManageThemes } from './object/manage-themes';
import { ManageWebsiteLanguages } from './object/manage-website-languages';
import Contexts from './page/component/contexts';

import Router from './router/router';
import './style.scss';

const App = () => {

  ManageThemes.manageThemes();
  ManageWebsiteLanguages.manageLanguages();

  document.body.scrollTop = 0;

  return (
    <>
      <Contexts>
        <Router/>
      </Contexts>
    </>
  );
}

export default App;