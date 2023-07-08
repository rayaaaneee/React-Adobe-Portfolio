import { ManageThemes } from './functions/theme';

import Router from './router/router';
import './style.css';

const App = () => {

  let manageThemes = new ManageThemes();

  return (
    <Router/>
  );
}

export default App;