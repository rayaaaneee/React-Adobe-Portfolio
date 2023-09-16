import { ManageBody } from '../functions/manageBody';
import { useEffect } from 'react';
import { animateApparition } from '../functions/apparition';
import Main from './components/main';

const NotFound = () => {

    useEffect(() => {animateApparition()}, []);;

    ManageBody.changeClass('not-found');

    useEffect(() => {
        document.title = 'Page introuvable';
    });

    return (
        <>
                <h1>404</h1>
        </>
    );
}

export default NotFound;