import { useState, forwardRef } from "react";

import '../../asset/scss/general/hamburger-menu.scss';

// menuElement : tableau des éléments du menu à faire apparaître/disparaître (pas un seul élément)
export const HamburgerMenu = forwardRef(({className = null, menuElement = null, onCheck = () => {}, style = {}}, ref = null) => {
    
    const toggleMenuClass = () => {
        menuElement.classList.toggle("active");
        toggleChecked();
    };

    const [checked, setChecked] = useState(false);

    const toggleChecked = () => {
        setChecked(!checked);
        onCheck(!checked);
    };
    
    return (
        <div ref={ref}
            className={`hamburger-container ${className}`}
            style={{ ...style }}
            onClick={toggleMenuClass}>
            <input type="checkbox" id="hamburger-checkbox" checked={checked} />
            <div className="hamburger-bar top-bar"></div>
            <div className="hamburger-bar middle-bar"></div>
            <div className="hamburger-bar bottom-bar"></div>
        </div>
    );
});
