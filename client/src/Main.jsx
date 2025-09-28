import { useContext } from "react";
import { useLocation } from "react-router-dom";

import Backgrounds from "./page/component/backgrounds";
import HeaderComponent from "./page/component/header-component";
import Loader from "./page/component/loader";

import loaderContext from "./function/context/loader-context";

import "./asset/scss/styles.scss";
import "./asset/scss/general/animation.scss";
import "./asset/scss/general/dark-scrollbar.scss";
import "./asset/scss/general/presets-animation.scss";
import "./asset/scss/general/scrollbar.scss";


const Main = ({ children }) => {

  	// Si le loader a déjà été chargé on ne l'affiche pas
  	const { wasLoaderShowed } = useContext(loaderContext);

  	window.scrollTo(0, 0);

  	// Récupérer l'url de la page actuelle
  	const url = useLocation().pathname;
  	let isRootPage = url === "/";

  	return (
    	<>
    	  	<HeaderComponent 
				showLogo={ !isRootPage }
				showGithub={ !isRootPage }
			/>
    	  	{ (!isRootPage && !wasLoaderShowed) && (
    	  	  	<Loader />
    	  	) }
			{ !isRootPage && (
    	  		<Backgrounds />
			) }
    	  	<div id="pageContent">
    	  		{ children }
    	  	</div>
    	</>
  	);
};

export default Main;
