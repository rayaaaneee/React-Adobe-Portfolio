import { animateApparition } from '../functions/apparition';
import { ManageBody } from '../functions/manageBody';
import { useEffect } from 'react';
import Main from './components/main';

const Contact = () => {

    useEffect(() => {animateApparition()}, []);;

    ManageBody.changeClass('contact');

    useEffect(() => {
        document.title = 'Contact';
    });

    return (
        <Main child={
            <></>
        } />
    );
}

export default Contact;