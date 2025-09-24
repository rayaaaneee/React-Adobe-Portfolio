import { useContext, useEffect, useRef } from "react";

import '../../../asset/css/general/select-language-button.scss'

import { ManageWebsiteLanguages } from "../../../object/manage-website-languages";

import languageContext from "../../../function/context/language-context";

export const SelectLanguageButton = ({ className = null }) => {

	const selectLanguageOptions = useRef(null);

	const { language, setLanguage } = useContext(languageContext);

    useEffect(() => {
        const handleClick = (e) => {
            if (
                (selectLanguageOptions.current.classList.contains('active'))
                    && 
                (selectLanguageOptions.current.closest(".select-language") !== e.target)
                    &&
                (!(selectLanguageOptions.current.closest(".select-language").contains(e.target))) 
            ) {
                selectLanguageOptions.current.classList.remove('active');
            }
        };

        window.addEventListener('click', handleClick);

        // Nettoyer l'effet
        return () => {
            window.removeEventListener('click', handleClick);
        };
    }, []); 

    return (
        <div className={`select-language ${className}`}>
            <div className='choice' onClick={ (_) => { selectLanguageOptions.current.classList.toggle("active")} }>
                <img alt='current-flag' src={ require('../../../asset/img/index/flags/' + language.flag_img) }></img>
                <p>{ language.denomination }</p>
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  height="1em"
                  width="1em"
                >
                  <path d="M11.178 19.569a.998.998 0 001.644 0l9-13A.999.999 0 0021 5H3a1.002 1.002 0 00-.822 1.569l9 13z" />
                </svg>
                <div className="options-wrapper">
                    <div className='options' ref={ selectLanguageOptions }>
                    { ManageWebsiteLanguages.supportedLanguages.map(
                        ([name, json]) => {
                            return name !== language.current && 
                            (<div className='option' onClick={ (_) => {
                                ManageWebsiteLanguages.setLanguage(name);
                                setLanguage(json);
                            } }>
                                <img alt={`${name}-flag`} src={ require('../../../asset/img/index/flags/' + json.flag_img) }></img>
                                <p>{ json.denomination }</p>
                            </div>)
                        }) 
                    }
                    </div>
                </div>
            </div>
        </div>
    )
}
