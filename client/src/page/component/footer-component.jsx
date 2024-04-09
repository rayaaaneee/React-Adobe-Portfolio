import { useContext } from 'react';
import { NavLink } from 'react-router-dom';

import '../../asset/css/footer/style.scss';
import '../../asset/css/footer/dark-style.scss';
import '../../asset/css/media/footer/style.scss';

import languageContext from '../../function/context/language-context';

const FooterComponent = () => {

    const { language } = useContext(languageContext);

    return (
        <footer>
            <div id="footer1">
                <div className="point-footer-container">
                    <p className="point-footer"> • </p>
                </div>
                <NavLink className="redirect-about" to={"/about"}>
                    <p>{ language.footer.about }</p>
                </NavLink>
                {/* <p>Ce site a été créé dans le but de présenter mes projets et mes compétences.</p> 
                <p>2022, Copyright © - Rayane Merlin</p> */}
            </div>
            <div id="footer2">
                <a href="https://github.com/rayaaaneee" id="footergithubimg" className="footer-github-img" target="_blank"></a>
                <a href="https://www.linkedin.com/in/rayanemerlin/" id="footerlinkedinimg" target="_blank" className=" footer-linkedin-img" rel="noreferrer"></a>
                <a href="mailto:rayane.merlin8@gmail.com" id="footermailimg" target="_blank" className="footer-mail-img"></a>
                <a href="tel:+33768283277" id="footerphoneimg" target="_blank" className="footer-phone-img"></a>
            </div>
        </footer>
    );
}

export default FooterComponent;