import { ManageBody } from '../functions/manageBody';
import Main from './components/main';

const About = () => {

    ManageBody.changeClass('about');

    useEffect(() => {
        document.title = 'À propos';
    });

    return (
        <>
            <Main child={ <></> } />
        </>
    );
}

export default About;