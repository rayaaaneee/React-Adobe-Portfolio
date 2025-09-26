import { useContext, useEffect, useRef } from 'react';

import { animateApparition } from '../function/appearence';
import { animateImageLoading } from '../function/animate-image-loading';

import { ManageBody } from '../object/manage-body';

import languageContext from '../function/context/language-context';

import { Music } from './component/myself/music';
import { Title } from './component/general/title';

import '../asset/css/myself/style.scss';
import '../asset/css/myself/dark-style.scss';
import '../asset/css/media/myself/style.scss';

import musicJson from '../asset/data/myself/music.json';

import photoPerso from "../asset/img/myself/crop.jpg";

import { getAge } from '../function/get-age';

const Myself = () => {

    const elementsToAnimate = useRef([]);
    const imagesToLoad = useRef([]);
    useEffect(() => {
        animateApparition(elementsToAnimate.current);
        animateImageLoading(imagesToLoad.current);
    }, []);

    ManageBody.changeClass('myself');

    const { language } = useContext(languageContext);

    useEffect(() => {
        document.title = language.myself.title;
    });

    let age = getAge('02/05/2003');

    const bars = useRef([]);
    const colorBar = (index) => {
      bars.current[index].classList.add('colored');
    }
  
    const uncolorBar = (index) => {
      bars.current[index].classList.remove('colored');
    }

    return (
        <>
            <Title text={language.myself.title} index={1} />
            <div id='bar0' className="horizontal-bars" ref={ bar => { bars.current.push(bar); elementsToAnimate.current.push(bar) } }></div>
            <div className="content" onMouseOver={ () => colorBar(0) } onMouseLeave={ () => uncolorBar(0) }>
                <div className="title-part">
                    <h1>• { language.myself.description_title }</h1>
                </div>
                <div className="content-part">
                    <div className="text">
                        <p>{ language.myself.description.replace("{{age}}", age) }</p>
                    </div>
                    <div className="photo">
                        <img alt='Photo' ref={ (img) => imagesToLoad.current.push(img) } draggable="false" src={ photoPerso } id="photopres" />
                    </div>
                </div>
            </div>
            <Title text={language.myself.musics} index={2} />
            <div id='bar1' className="horizontal-bars" ref={ bar => { bars.current.push(bar); elementsToAnimate.current.push(bar) } }></div>
            <h3>{ language.myself.musics_description }</h3>
            <article id="music" onMouseOver={ () => colorBar(1) } onMouseLeave={ () => uncolorBar(1) }>
                <div id="frames">
                { musicJson.map((link) => {
                    return (
                        <Music link={ link } />
                    );
                }) }
                </div>
            </article>
            <article id="references" onMouseOver={ () => colorBar(2) } onMouseLeave={ () => uncolorBar(2) }>
                <Title text={language.myself.references} index={3} />
                <div id='bar2' className="horizontal-bars" ref={ bar => { bars.current.push(bar); elementsToAnimate.current.push(bar) } }></div>
            </article>
            <article id="networks" onMouseOver={ () => colorBar(3) } onMouseLeave={ () => uncolorBar(3) }>
                <Title text={language.myself.networks} index={4} />
                <div id='bar3' className="horizontal-bars" ref={ bar => { bars.current.push(bar); elementsToAnimate.current.push(bar) } }></div>
            </article>
        </>
    );
}

export default Myself;