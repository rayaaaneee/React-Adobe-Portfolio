import "../../asset/css/general/logo.scss";

export const LogoColors = Object.freeze({
    light: null,
    black: "black",
    white: "white",
    theme: "theme"
});

export const Logo = ({color = LogoColors.theme, className = null}) => 
    (<div className={`logo ${color} ${className}`}></div>);