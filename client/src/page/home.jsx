import Main from './components/main';
import { ManageBody } from '../functions/manageBody';

const Home = () => {

    ManageBody.changeClass('home');

    useEffect(() => {
        document.title = 'Accueil';
    });

    return (
        <>
            <Main child={ <></> } />
        </>
    );
}

export default Home;