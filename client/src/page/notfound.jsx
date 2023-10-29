import { useEffect, useRef } from 'react';

import { animateApparition } from '../function/appearence';
import { animateImageLoading } from '../function/animate-image-loading';

import { ManageBody } from '../object/manage-body';

const NotFound = () => {

    const elementsToAnimate = useRef([]);
    const imagesToLoad = useRef([]);
    useEffect(() => {
        animateApparition(elementsToAnimate.current);
        animateImageLoading(imagesToLoad.current);
    }, []);

    ManageBody.changeClass('not-found');

    useEffect(() => {
        document.title = 'Page introuvable';
    });

    return (
        <>
            <h1>404 Not found</h1>
        </>
    );
}

export default NotFound;