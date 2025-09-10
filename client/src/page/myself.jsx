import { useContext, useEffect, useRef } from 'react';

import { animateApparition } from '../function/appearence';
import { animateImageLoading } from '../function/animate-image-loading';

import { ManageBody } from '../object/manage-body';

import languageContext from '../function/context/language-context';

import { Music } from './component/myself/music';

import '../asset/css/myself/style.scss';
import '../asset/css/myself/dark-style.scss';
import '../asset/css/media/myself/style.scss';

import musicJson from '../asset/data/myself/music.json';

import photoPerso from "../asset/img/myself/crop.jpg";

const Myself = () => {

    const getAge = (birthDate) => {
        const today = new Date();
        const birthDateTab = birthDate.split('/');
        const birthDateObject = new Date(birthDateTab[2], birthDateTab[1] - 1, birthDateTab[0]);
        let age = today.getFullYear() - birthDateObject.getFullYear();
        const m = today.getMonth() - birthDateObject.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDateObject.getDate())) {
            age--;
        }
        return age;
    }

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
            <div className="title t1">
                <p>Perso</p>
            </div>
            <div id='bar0' className="horizontal-bars" ref={ bar => { bars.current.push(bar); elementsToAnimate.current.push(bar) } }></div>
            <div className="content" onMouseOver={ () => colorBar(0) } onMouseLeave={ () => uncolorBar(0) }>
                <div className="title-part">
                    <h1>• { language.myself.title }</h1>
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
            <div className="title t2">
                <p>{ language.myself.musics }</p>
                <div id='bar1' className="horizontal-bars" ref={ bar => { bars.current.push(bar); elementsToAnimate.current.push(bar) } }></div>
                <h3>{ language.myself.musics_description }</h3>
            </div>
            <article id="music" onMouseOver={ () => colorBar(1) } onMouseLeave={ () => uncolorBar(1) }>
                <div id="frames">
                { musicJson.map((link) => {
                    return (
                        <Music link={ link } />
                    );
                }) }
                </div>
            </article>
            <div className="title t3">
                <p>{ language.myself.references }</p>
            </div>
            <div id='bar2' className="horizontal-bars" ref={ bar => { bars.current.push(bar); elementsToAnimate.current.push(bar) } }></div>
            <article id="references" onMouseOver={ () => colorBar(2) } onMouseLeave={ () => uncolorBar(2) }>
            </article>
        </>
    );
}

export default Myself;