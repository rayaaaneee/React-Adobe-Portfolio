import { ManageBody } from '../functions/manageBody';
import Main from './components/main';

const NotFound = () => {

    ManageBody.changeClass('not-found');

    useEffect(() => {
        document.title = 'Page introuvable';
    });

    return (
        <>
            <Main child=
            { 
            <>
                <h1>404</h1>
            </> 
            } />
        </>
    );
}

export default NotFound;