import { ManageBody } from '../functions/manageBody';
import { useEffect } from 'react';
import { animateApparition } from '../functions/apparition';
import Main from './components/main';

const NotFound = () => {

    useEffect(() => {animateApparition()}, []);;

    ManageBody.changeClass('not-found');

    useEffect(() => {
        window.scrollTo({ top: 0 });
    }, []);

    useEffect(() => {
        document.title = 'Page introuvable';
    });

    return (
        <>
            <Main child=
            { 
                <h1>404</h1>
            } />
        </>
    );
}

export default NotFound;