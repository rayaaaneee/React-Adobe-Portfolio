import Main from './components/main';
import { ManageBody } from '../functions/manageBody';

const Home = () => {

    ManageBody.changeClass('home');

    return (
        <>
            <Main child={ <></> } />
        </>
    );
}

export default Home;