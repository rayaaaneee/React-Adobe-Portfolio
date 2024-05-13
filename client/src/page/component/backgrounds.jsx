import { useEffect, useRef } from 'react';

import { MoveBackground } from '../../object/move-background';
import { ParallaxBackground } from '../../object/parallax-background';

const Backgrounds = () => {

    const backgroundsObjects = [
        {
            speedparallax : 0.02,
            speedtranslate : 0.6,
            position: "center",
        },
        {
            speedparallax : -0.03,
            speedtranslate : 0.7,
            position: "center",
        },
        {
            speedparallax : -0.05,
            speedtranslate : 0.73,
            position: "top",
        }
    ]

    const backgrounds = useRef([]);

    useEffect(() => {
        const moveBackgrounds = MoveBackground.bind(backgrounds.current);
        const backgroundsParallaxes = ParallaxBackground.bind(backgrounds.current);
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
                    <div id={ `background${ i + 1 }` } key={ i } ref={ background => backgrounds.current[i] = background } 
                    className="background" speedparallax={ background.speedparallax } speedtranslate={ background.speedtranslate } position={ background.position }></div>
                );
            }) }
        </>
    );
}

export default Backgrounds;