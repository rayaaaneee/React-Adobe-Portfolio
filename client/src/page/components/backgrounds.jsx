import { MoveBackground, Parallax } from '../../functions/utilsBackgrounds';
import { useEffect, useRef } from 'react';

const Backgrounds = () => {

    const backgroundsObjects = [
        {
            speedparallax : 0.02,
            speedtranslate : 0.6
        },
        {
            speedparallax : -0.03,
            speedtranslate : 0.7
        },
        {
            speedparallax : -0.05,
            speedtranslate : 0.73
        }
    ]

    const backgrounds = useRef([]);

    useEffect(() => {
        const moveBackgrounds = MoveBackground.bind(backgrounds.current);
        const backgroundsParallaxes = Parallax.bind(backgrounds.current);
        return () => {
            backgroundsParallaxes.forEach((background) => {
                background.removeListeners();
            });
            moveBackgrounds.forEach((background) => {
                background.removeIntervals();
            });
        }
    }, []);

    return (
        <>
            { backgroundsObjects.map((background, i) => {
                return (
                    <div id={ `background${ i + 1 }` } ref={ background => backgrounds.current[i] = background } 
                    className="background" speedparallax={ background.speedparallax } speedtranslate={ background.speedtranslate }></div>
                );
            }) }
        </>
    );
}

export default Backgrounds;