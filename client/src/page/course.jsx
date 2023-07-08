import { ManageBody } from '../functions/manageBody';
import Main from './components/main';

const Course = () => {

    ManageBody.changeClass('course');

    return (
        <>
            <Main child={ <></> } />
        </>
    );
}

export default Course;