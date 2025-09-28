import { useContext, useEffect, useRef } from 'react';

import { ManageBody } from '../object/manage-body';

import { Title } from './component/general/title';

import languageContext from '../function/context/language-context';

import { animateApparition } from '../function/appearence';

import '../asset/scss/about/style.scss';
import '../asset/scss/about/dark-style.scss';
import '../asset/scss/media/about/style.scss';

import { Logo, LogoColors } from './component/logo';

const About = () => {

    const elementsToAnimate = useRef([]);
    // const imagesToLoad = useRef([]);
    useEffect(() => {
        animateApparition(elementsToAnimate.current);
        //animateImageLoading(imagesToLoad.current);
    }, []);

    ManageBody.changeClass('about');

    const { language } = useContext(languageContext);

    useEffect(() => {
        document.title = language.about.title;
    });


    return (
        <div className="grid-container">
            <article className='illustration'>
                <Logo 
                    ref={ el => elementsToAnimate.current[0] = el } 
                    headerText={language.title} 
                    squared 
                    color={LogoColors.theme} 
                    className={'left-logo'} 
                />
            </article>
            <article className='about'>
                <Title text={language.about.title} index={1} />
            </article>
        </div>
    );
}

export default About;