import { ManageThemes } from './object/manage-themes';
import Contexts from './page/component/contexts';

import Router from './router/router';
import './style.css';

const App = () => {

  ManageThemes.manageThemes();

  return (
    <>
      <Contexts>
        <Router/>
      </Contexts>
    </>
  );
}

export default App;