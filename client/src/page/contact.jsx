import { ManageBody } from '../functions/manageBody';
import Main from './components/main';
import { useEffect } from 'react';

const Contact = () => {

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