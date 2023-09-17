import { ManageThemes } from './functions/manageThemes';
import Contexts from './page/components/contexts';

import Router from './router/router';
import './style.css';

const App = () => {

  ManageThemes.manageThemes();

  return (
    <Contexts>
      <Router/>
    </Contexts>
  );
}

export default App;