import { ManageBody } from '../functions/manageBody';
import Main from './components/main';

const NotFound = () => {

    ManageBody.changeClass('not-found');

    return (
        <>
            <Main child={ <></> } />
        </>
    );
}

export default NotFound;