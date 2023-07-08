import FooterComponent from "./footer-component";
import HeaderComponent from "./header-component";
import Loader from "./loader";

import '../../asset/css/general/animation.scss';
import '../../asset/css/general/background.scss';
import '../../asset/css/general/dark-background.scss';
import '../../asset/css/general/dark-scrollbar.scss';
import '../../asset/css/general/error.scss';
import '../../asset/css/general/general.scss';
import '../../asset/css/general/loader-frame.scss';
import '../../asset/css/general/presets-animation.scss';
import '../../asset/css/general/scrollbar.scss';

import Backgrounds from "./backgrounds";

const Main = (props) => {
    return (
        <>
            <Loader />
            <HeaderComponent />
            <Backgrounds />
            <div className="page-content" style={ props.style }>
                { props.child }
            </div>
            <FooterComponent />
        </>
    );
}

export default Main;