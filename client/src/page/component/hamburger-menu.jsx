import { useState, forwardRef } from "react";

import '../../asset/css/general/hamburger-menu.scss';

// menuElement : tableau des éléments du menu à faire apparaître/disparaître (pas un seul élément)
export const HamburgerMenu = forwardRef(({className = null, menuElements = [], onCheck = () => {}, style = {}, black = false,}, ref = null) => {
    
    const toggleMenuClass = () => {
        menuElements.forEach((element) => {
            element.classList.toggle("active");
        });
        toggleChecked();
    };

    const [checked, setChecked] = useState(false);

    const toggleChecked = () => {
        setChecked(!checked);
        onCheck(!checked);
    };
    
    return (
        <div ref={ref}
            className={`hamburger-container ${className} ${black && "black"}`}
            style={{ ...style }}
            onClick={toggleMenuClass}>
            <input type="checkbox" id="hamburger-checkbox" checked={checked} />
            <div className="hamburger-bar top-bar"></div>
            <div className="hamburger-bar middle-bar"></div>
            <div className="hamburger-bar bottom-bar"></div>
        </div>
    );
});
