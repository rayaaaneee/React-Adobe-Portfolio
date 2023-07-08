import { ManageThemes } from './functions/theme';

import Router from './router/router';
import './style.css';

const App = () => {

  ManageThemes.manageThemes();

  return (
    <Router/>
  );
}

export default App;