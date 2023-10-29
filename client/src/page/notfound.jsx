import { ManageBody } from '../object/manage-body';
import { useEffect } from 'react';
import { animateApparition } from '../function/appearence';

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