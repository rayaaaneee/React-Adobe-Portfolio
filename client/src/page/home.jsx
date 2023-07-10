import Main from './components/main';
import { ManageBody } from '../functions/manageBody';
import { useEffect, useState } from 'react';

const Home = () => {

    ManageBody.changeClass('home');

    useEffect(() => {
        document.title = 'Accueil';
    });

    const mainPath = '../asset/data/home/';
    const jsonFilenames = [
        'competence.json',
        'framework.json',
        'language.json',
        'project.json',
        'school_competence.json',
    ]

    const [jsonData, setJsonData] = useState(null);

    useEffect(() => {
        const fetchData = async (filename) => {
          try {
            const response = await fetch(mainPath + filename);
            const data = await response.json();
            setJsonData(data);
          } catch (error) {
            console.error('Une erreur s\'est produite lors de la récupération du JSON :', error);
          }
        };
        console.log(fetchData(jsonFilenames[0]));
    }, []);

    return (
        <>
            <Main child={ <></> } />
        </>
    );
}

export default Home;