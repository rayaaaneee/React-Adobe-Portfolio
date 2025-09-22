import { useContext } from "react";

import themeContext from "../../../function/context/theme-context"

export const SwitchThemeButton = ({ className }) => {

	const { setIsDarkTheme } = useContext(themeContext);

	const setTheme = (isDarkTheme) => {
		switch (isDarkTheme) {
			case false:
			default:
				setIsDarkTheme(false);
				break;
			case true:
				setIsDarkTheme(true);
				break;
		}
	}

  	return (
    	<div className={`btn-switch-mode ${className}`}>
            <div className="media-dark-theme-form" onClick={ () => setTheme(true) }>
                <button className="dark-mode-button"/>
            </div>
            <div className="media-light-theme-form" onClick={ () => setTheme(false) }>
                <button className="dark-mode-button"/>
            </div>
        </div>
  	)
}
