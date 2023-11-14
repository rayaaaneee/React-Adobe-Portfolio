import { ManageThemes } from './object/manage-themes';
import Contexts from './page/component/contexts';

import Router from './router/router';
import './style.scss';

const App = () => {

  ManageThemes.manageThemes();

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