import { NavLink } from "react-router-dom";

import '../../asset/css/general/menu.link.scss';

export const MenuLink = ({ className = null, to, children = <></>, isColored }) => {
    return (
        <li className="menu-link">
            <NavLink to={ to } className={ `${className} ${isColored ? 'colored' : ''}` }>{ children }</NavLink>
        </li>
    )
}
