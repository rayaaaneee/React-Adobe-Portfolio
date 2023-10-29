import { useContext } from "react";
import { useLocation } from "react-router-dom";

import FooterComponent from "./footer-component";
import HeaderComponent from "./header-component";

import Loader from "./loader";

import loaderContext from "../../function/context/loader-context";

import "../../asset/css/general/animation.scss";
import "../../asset/css/general/background.scss";
import "../../asset/css/general/dark-background.scss";
import "../../asset/css/general/dark-scrollbar.scss";
import "../../asset/css/general/general.scss";
import "../../asset/css/general/presets-animation.scss";
import "../../asset/css/general/scrollbar.scss";

import Backgrounds from "./backgrounds";

const Main = ({ children }) => {
  // Si le loader a déjà été chargé on ne l'affiche pas
  const { wasLoaderShowed } = useContext(loaderContext);

  window.scrollTo(0, 0);

  // Récupérer l'url de la page actuelle
  const url = useLocation().pathname;
  let isRootPage = url === "/";
  let isCoursePage = url.includes("/course");

  return (
    <>
      {isRootPage ? (
        <>{children}</>
      ) : (
        <>
          {!wasLoaderShowed && (
            <>
              <Loader />
            </>
          )}
          <HeaderComponent />
          <Backgrounds />
          <div id="pageContent">
            {children}
          </div>
          {!isCoursePage && <FooterComponent />}
        </>
      )}
    </>
  );
};

export default Main;
