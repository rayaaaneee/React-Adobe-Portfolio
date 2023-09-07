import { moveBackgrounds, Parallax } from '../../functions/moveBackgrounds';
import { useEffect } from 'react';

const Backgrounds = () => {

    useEffect(() => {
        moveBackgrounds();
        Parallax.bind();
    }, []);

    return (
        <>
            <div id="background1" className="background" speedparallax="0.02" speedtranslate="0.6"></div>
            <div id="background2" className="background" speedparallax="-0.03" speedtranslate="0.7"></div>
            <div id="background3" className="background" speedparallax="-0.05" speedtranslate="0.73"></div>
        </>
    );
}

export default Backgrounds;