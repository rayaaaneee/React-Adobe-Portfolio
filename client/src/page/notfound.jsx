import { useContext, useEffect, useRef } from 'react';

import { animateApparition } from '../function/appearence';
import { animateImageLoading } from '../function/animate-image-loading';

import languageContext from '../function/context/language-context';

import { ManageBody } from '../object/manage-body';

const NotFound = () => {

    const elementsToAnimate = useRef([]);
    const imagesToLoad = useRef([]);
    useEffect(() => {
        animateApparition(elementsToAnimate.current);
        animateImageLoading(imagesToLoad.current);
    }, []);

    ManageBody.changeClass('not-found');

    const { language } = useContext(languageContext);

    useEffect(() => {
        document.title = language.not_found.title;
    });

    return (
        <>
            <h1>404 { language.not_found.title }</h1>
        </>
    );
}

export default NotFound;