import { useContext } from "react";
import FooterComponent from "./footer-component";
import HeaderComponent from "./header-component";
import Loader from "./loader";

import loaderContext from "../../functions/loaderContext";

import "../../asset/css/general/animation.scss";
import "../../asset/css/general/background.scss";
import "../../asset/css/general/dark-background.scss";
import "../../asset/css/general/dark-scrollbar.scss";
import "../../asset/css/general/error.scss";
import "../../asset/css/general/general.scss";
import "../../asset/css/general/presets-animation.scss";
import "../../asset/css/general/scrollbar.scss";

import Backgrounds from "./backgrounds";
import { useLocation } from "react-router-dom";

const Main = ({ children }) => {
  // Si le loader a déjà été chargé on ne l'affiche pas
  const { wasLoaderShowed } = useContext(loaderContext);

  window.scrollTo(0, 0);

  // Récupérer l'url de la page actuelle
  const url = useLocation().pathname;
  let isRootPage = url === "/";

  return (
    <>
      {isRootPage ? (
        <>{ children }</>
      ) : (
        <>
          {!wasLoaderShowed && (
            <>
              {/* <div style={{ backgroundColor : "black", height: "100vh", width: "100vw", zIndex: 10 }}></div> */}
              <Loader />
            </>
          )}
          <HeaderComponent/>
          <Backgrounds />
          <div id="pageContent" /* style={ props.style } */>
            { children }
          </div>
          <FooterComponent />
        </>
      )}
    </>
  );
};

export default Main;
