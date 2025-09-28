import { useContext } from "react";

import '../../../asset/scss/general/switch-mode-button.scss';

import themeContext from "../../../function/context/theme-context"

export const SwitchThemeButton = ({ className, s_size = false, whiteIcons = false, pinkMoon = false }) => {

	const { isDarkTheme, setIsDarkTheme } = useContext(themeContext);

	const changeTheme = () => (setIsDarkTheme(!isDarkTheme));

	const button = 
		(<button 
			className={`mode-button ${whiteIcons && 'white'} ${pinkMoon && 'pink-moon'} ${className}`} 
			onClick={changeTheme}>	
		</button>);

	if (s_size) {
		return button;
	}

	return s_size ? button : <div className={`theme-form`}>{button}</div>;
}
