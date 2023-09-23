import { animateApparition } from '../functions/appearence';
import { ManageBody } from '../functions/manageBody';
import { useEffect } from 'react';

const Course = () => {

    useEffect(() => {animateApparition()}, []);;

    ManageBody.changeClass('course');

    useEffect(() => {
        document.title = 'Mon parcours';
    });


    return (
        <>
        </>
    );
}

export default Course;