import { animateApparition } from '../functions/apparition';
import { ManageBody } from '../functions/manageBody';
import Main from './components/main';
import { useEffect } from 'react';

const Course = () => {

    useEffect(() => {animateApparition()}, []);;

    ManageBody.changeClass('course');

    useEffect(() => {
        document.body.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        document.title = 'Mon parcours';
    });


    return (
        <>
            <Main child={ <></> } />
        </>
    );
}

export default Course;