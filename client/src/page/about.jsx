import { ManageBody } from '../functions/manageBody';
import Main from './components/main';

const About = () => {

    ManageBody.changeClass('about');

    return (
        <>
            <Main child={ <></> } />
        </>
    );
}

export default About;