import { NavLink } from 'react-router-dom';

import languageContext from '../../../function/context/language-context';

import { useContext } from 'react';

export const CredentialsButton = ({ className }) => {

    const { language } = useContext(languageContext);

    return (
        <NavLink to={'/about'} className={`about-page ${className.toString()}`}>
            <p>{ language.index.credentials }</p>
        </NavLink>
    )
}
