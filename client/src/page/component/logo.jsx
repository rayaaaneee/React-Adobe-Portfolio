import { forwardRef } from "react";
import "../../asset/css/general/logo.scss";

export const LogoColors = Object.freeze({
    light: null,
    black: "black",
    white: "white",
    theme: "theme"
});

export const Logo = forwardRef(({color = LogoColors.theme, className = null, squared = false, displayCredentials = null, backgroundSquares = null, headerText = null }, ref = undefined) =>  {
    
    if (!squared && displayCredentials) throw new Error("You can only display credentials with a squared logo.");
    if (!squared && backgroundSquares) throw new Error("You can only display background squares with a squared logo.");
    if (!squared && headerText) throw new Error("You can only display header text with a squared logo.");

    if (squared && displayCredentials === null) displayCredentials = true;
    if (squared && backgroundSquares === null) backgroundSquares = true;

    return (
        <>
            { squared ? (
                // Jouer avec scale pour changer la taille de l'élément en conservant les proportions
                <div className={`square-container ${color} ${className}`} ref={ref}>
                    { backgroundSquares && (
                        ["one", "two", "three"]
                            .map((className, i) => <div key={i} className={`square ${className}`}></div>)) }
                    <div className="main-square">
                        { headerText && (<h1 className='header-text'>{headerText}</h1>) }
                        <h1 className='port'>P</h1>
                        <h2 className='folio'>f</h2>
                        {displayCredentials && (<p className='author'>By <span>Rayane Merlin</span></p>)}
                    </div>
                </div>
            ) : (
                <div className={`logo ${color} ${className}`} ref={ref}></div>
            ) } 
        </>
    );
});

