import { useEffect, useRef } from 'react';

import { animateApparition } from '../function/appearence';
import { animateImageLoading } from '../function/animate-image-loading';

import { ManageBody } from '../object/manage-body';

import { Music } from './component/perso/music';

import '../asset/css/perso/style.scss';
import '../asset/css/perso/dark-style.scss';
import '../asset/css/media/perso/style.scss';

import musicJson from '../asset/data/perso/music.json';

import photoPerso from '../asset/img/perso/img.png';

const Perso = () => {

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

    useEffect(() => {
        animateApparition();
        animateImageLoading();
    }, []);

    ManageBody.changeClass('perso');

    useEffect(() => {
        document.title = 'Qui suis-je ?';
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

            <div id='bar0' className="horizontal-bars animate" ref={ bar => bars.current.push(bar) }></div>
            <div className="content" onMouseOver={ () => colorBar(0) } onMouseLeave={ () => uncolorBar(0) }>
                <div className="title-part">
                    <h1>• Qui suis-je ?</h1>
                </div>
                <div className="content-part">
                    <div className="text">
                        <p>Je suis un étudiant de { age } ans, passionné par l'informatique et les nouvelles technologies. Actuellement en deuxième année de BUT informatique, je souhaite poursuivre mes études dans le domaine du développement et du design.</p>
                    </div>
                    <div className="photo">
                        <img alt='Photo' className='onloading' draggable="false" src={ photoPerso } id="photopres" />
                    </div>
                </div>
            </div>
            <div className="title t2">
                <p>Mes musiques :</p>
                <div id='bar1' className="horizontal-bars animate" ref={ bar => bars.current.push(bar) }></div>
                <h3>Voici quelques musiques qui m'ont marquées. Je me permets d'en parler dans ce PortFolio car la musique possède une place importante dans ma vie et dans la société en général. Ce que nous écoutons représente en quelque sorte qui nous sommes, est une source de créativité influant sur nous : les auditeurs.</h3>
            </div>
            <article id="music" onMouseOver={ () => colorBar(1) } onMouseLeave={ () => uncolorBar(1) }>
                <div id="frames">
                { musicJson.map((link, index) => {
                    return (
                        <Music link={ link } key={ index } />
                        );
                }) }
                </div>
            </article>
            <div className="title t3">
                <p>Les références :</p>
            </div>
            <div id='bar2' className="horizontal-bars animate" ref={ bar => bars.current.push(bar) }></div>
            <article id="references" onMouseOver={ () => colorBar(2) } onMouseLeave={ () => uncolorBar(2) }>
            </article>
        </>
    );
}

export default Perso;