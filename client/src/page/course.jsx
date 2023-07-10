import { ManageBody } from '../functions/manageBody';
import Main from './components/main';
import { useEffect } from 'react';

const Course = () => {

    ManageBody.changeClass('course');

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