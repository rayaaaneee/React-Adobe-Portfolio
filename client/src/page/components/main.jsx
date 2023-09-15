import { useContext } from "react";
import FooterComponent from "./footer-component";
import HeaderComponent from "./header-component";
import Loader from "./loader";
import wasLoaderShowed from "../../functions/wasLoaderShowed";

import '../../asset/css/general/animation.scss';
import '../../asset/css/general/background.scss';
import '../../asset/css/general/dark-background.scss';
import '../../asset/css/general/dark-scrollbar.scss';
import '../../asset/css/general/error.scss';
import '../../asset/css/general/general.scss';
import '../../asset/css/general/presets-animation.scss';
import '../../asset/css/general/scrollbar.scss';

import Backgrounds from "./backgrounds";

const Main = (props) => {

    // Si le loader a déjà été chargé on ne l'affiche pas
    const {wasLoader, setWasLoader} = useContext(wasLoaderShowed);

    return (
        <>
            { !wasLoader && (
                <>
                    {/* <div style={{ backgroundColor : "black", height: "100vh", width: "100vw", zIndex: 10 }}></div> */}
                    <Loader />
                </>
            )}
            <HeaderComponent page={ props.page } images={ props.images } darkImages={ props.darkImages } states={ props.states } />
            <Backgrounds />
            <div id="pageContent" style={ props.style }>
                { props.child }
            </div>
            <FooterComponent />
        </>
    );
}

export default Main;