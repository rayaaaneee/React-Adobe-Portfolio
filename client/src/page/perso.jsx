import { ManageBody } from '../functions/manageBody';
import { useEffect } from 'react';
import { animateApparition } from '../functions/apparition';
import Main from './components/main';

import '../asset/css/perso/style.scss';
import '../asset/css/perso/dark-style.scss';
import '../asset/css/media/perso/style.scss';

import Musics from '../asset/data/perso/music.json';

import photoPerso from '../asset/img/perso/img.png';

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

const Perso = () => {

    useEffect(() => {animateApparition()}, []);

    ManageBody.changeClass('perso');

    useEffect(() => {
        document.title = 'Qui suis-je ?';
    });

    let age = getAge('02/05/2003')

    return (
        <>
                <div className="title t1">
                        <p>Perso</p>
                    </div>
                    <div className="horizontal-bars animate" id="horizontal-bar1"></div>
                    <div className="content" onMouseOver={ () => {} } onMouseLeave={ () => {}}>
                        <div className="title-part">
                            <h1>• Qui suis-je ?</h1>
                        </div>
                        <div className="content-part">
                            <div className="text">
                                <p>Je suis un étudiant de { age } ans, passionné par l'informatique et les nouvelles technologies. Actuellement en deuxième année de BUT informatique, je souhaite poursuivre mes études dans le domaine du développement et du design.</p>
                            </div>
                            <div className="photo">
                                <img alt='Photo' draggable="false" src={ photoPerso } id="photopres" />
                            </div>
                        </div>
                    </div>
                    <div className="title t2">
                        <p>Mes musiques :</p>
                        <div className="horizontal-bars animate" id="horizontal-bar2"></div>
                        <h3>Voici quelques musiques qui m'ont marquées. Je me permets d'en parler dans ce PortFolio car la musique possède une place importante dans ma vie et dans la société en général. Ce que nous écoutons représente en quelque sorte qui nous sommes, est une source de créativité influant sur nous : les auditeurs.</h3>
                    </div>
                    <article id="music" onMouseOver={ () => {} } onMouseLeave={ () => {} }>
                        <div id="frames">
                        { Musics.map((music, index) => {
                            return (
                                <iframe className="animate" allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write" frameborder="0" height="175" style={{ maxWidth: '500px',overflow: 'hidden', background: 'transparent' }} sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" src={ music }></iframe>
                                );
                        }) }
                        </div>
                    </article>
                    <div className="title t3">
                        <p>Les références :</p>
                    </div>
                    <div className="horizontal-bars animate" id="horizontal-bar3"></div>
                    <article id="references">

                </article>
        </>
    );
}

export default Perso;