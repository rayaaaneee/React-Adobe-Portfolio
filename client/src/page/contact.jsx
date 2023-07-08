import { ManageBody } from '../functions/manageBody';
import Main from './components/main';

const Contact = () => {

    ManageBody.changeClass('contact');

    return (
        <>
            <Main child={ <></> } />
        </>
    );
}

export default Contact;