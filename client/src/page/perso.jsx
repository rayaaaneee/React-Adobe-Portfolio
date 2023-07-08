import { ManageBody } from '../functions/manageBody';
import Main from './components/main';

const Perso = () => {

    ManageBody.changeClass('perso');

    return (
        <>
            <Main child={ <></> } />
        </>
    );
}

export default Perso;