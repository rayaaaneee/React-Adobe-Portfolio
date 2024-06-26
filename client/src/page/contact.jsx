import { useEffect, useMemo, useRef, useState, useContext } from 'react';

import { animateApparition } from '../function/appearence';
import { animateImageLoading } from '../function/animate-image-loading';
import { sendMessage } from '../function/api/send-message';

import modalContext from '../function/context/modal-context';
import languageContext from '../function/context/language-context';

import { ManageBody } from '../object/manage-body';
import { ManageThemes } from '../object/manage-themes';

import '../asset/css/contact/style.scss';
import '../asset/css/contact/dark-style.scss';
import '../asset/css/media/contact/style.scss';

import contactImg from '../asset/img/contact/contact.png';
import { ModalInformations } from '../object/modal-informations';

const Contact = () => {

    const elementsToAnimate = useRef([]);
    const imagesToLoad = useRef([]);
    useEffect(() => {
        animateApparition(elementsToAnimate.current);
        animateImageLoading(imagesToLoad.current);
    }, []);

    ManageBody.changeClass('contact');

    const { language } = useContext(languageContext);

    useEffect(() => {
        document.title = language.contact.title;
    });

    let nameInput = useRef(null);
    let emailInput = useRef(null);
    let messageInput = useRef(null);

    let errornameRef = useRef(null);
    let erroremailRef = useRef(null);
    let errormsgRef = useRef(null);

    const { setModalInformations } = useContext(modalContext);

    const trySend = (formData) => {
        sendMessage(
            formData, 
            (data) => {
                if (data.success) {
                    setModalInformations(
                        (informations) => {
                            informations.isSuccess = true;
                            informations.setMessageSuccess(data.success);
                            informations.isVisible = true;
                            return ModalInformations.initRow(informations);
                        }
                    );
                } else {
                    setModalInformations(
                        (informations) => {
                            informations.isSuccess = false;
                            informations.setMessageError(data.error);
                            informations.isVisible = true;
                            return ModalInformations.initRow(informations);
                        }
                    );
                }
            },
            (err) => {
                setModalInformations(
                    (informations) => {
                        informations.isSuccess = false;
                        informations.setMessageError(language.contact.error);
                        informations.isVisible = true;
                        return ModalInformations.initRow(informations);
                    }
                );
            },
        );

    }

    const isEmpty = (string) => {
        return string.trim() === "";
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let formData = new FormData(e.currentTarget);

        let firsterror = null;
        if (isEmpty(formData.get('name'))) {
            errornameRef.current.innerHTML = `• ${ language.contact.error_name }`;
            if (!firsterror) firsterror = nameInput.current;
        } else {
            errornameRef.current.innerHTML = "";
        }

        let emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{1,5})+$/;
        if (!emailPattern.test(formData.get('email'))) {
            erroremailRef.current.innerHTML = `• ${ language.contact.error_email }`;
            if (!firsterror) firsterror = emailInput.current;
        } else {
            erroremailRef.current.innerHTML = "";
        }

        if (isEmpty(formData.get('message'))) {
            errormsgRef.current.innerHTML = `• ${ language.contact.error_message }`;
            if (!firsterror) firsterror = messageInput.current;
        } else {
            errormsgRef.current.innerHTML = "";
        }

        if (firsterror) firsterror.focus();
        else {
            trySend(formData);
            e.currentTarget.reset();
            setNbChars(0);
        }
    }

    const textareaMaxLength = 300;
    const nameInputMaxLength = 50;
    const emailInputMaxLength = 50;

    const switchNbCharsText = (charsLeft) => {
        let text;
        switch (charsLeft) {
            case 0:
                text = `• ${ language.contact.no_chars_left }`;
                break;
            case 1:
                text = language.contact.one_char_left;
                break;
            default:
                text = language.contact.chars_left;
                break;
        }
        return text;
    }

    const verifyLength = (input, maxLength) => {
        if (input.value.length > maxLength) {
            input.value = input.value.substring(0, maxLength);
        }
    }

    const [oldNbChars, setOldNbChars] = useState(0);
    const [textareaHasChanged, setTextareaHasChanged] = useState(false);
    const handleChars = () => {
        // On recupère le nombre de caractères max et on le soustrait au nombre de caractères actuel
        verifyLength(messageInput.current, textareaMaxLength);

        let oldNbCharsTmp = nbChars.valueOf();

        setOldNbChars(oldNbCharsTmp);

        setNbChars(messageInput.current.value.length);

        nbChars === textareaMaxLength && (setTextareaHasChanged((changed) => !changed));
    }

    const [isScalingCharsLeft, setIsScalingCharsLeft] = useState(false);
    const animateScale = () => {
        if (nbChars === textareaMaxLength && oldNbChars === textareaMaxLength) {
            setIsScalingCharsLeft(true);
            setTimeout(() => {
                setIsScalingCharsLeft(false);
            }, 100);
        }
    }

    const [charsLeftColor, setCharsLeftColor] = useState('rgb(0, 0, 0)');
    const changeColorNbCharsLeft = (newNbCharsLeft) => {
        // Plus le nombre de caractères restants est faible, plus la couleur est rouge
        let redShade = null;
        if (ManageThemes.isDarkTheme) {
            redShade = Math.round(newNbCharsLeft * (255 / 300));
        } else {
            redShade = Math.round(255 - newNbCharsLeft * (255 / 300));
        }

        setCharsLeftColor(`rgb(${redShade}, 0, 0)`);
    }

    const [isAppearCharsLeft, setIsAppearCharsLeft] = useState(false);

    const [nbChars, setNbChars] = useState(0);
    const nbCharsLeft = useMemo(() => {
        let newNbCharsLeft = textareaMaxLength - nbChars;
        changeColorNbCharsLeft(newNbCharsLeft); 
        return newNbCharsLeft;
    }, [nbChars]);

    useEffect(() => {
        animateScale();
    }, [nbChars, textareaHasChanged]);

    return (
        <>
            <article id="formContainer">
                <div className="alert-container"></div>
                <main id='contactPage'>
                    <div className="pres-container">
                        <div id="pres" ref={ (element) => elementsToAnimate.current.push(element) } >
                            <img draggable="false" ref={ (img) => imagesToLoad.current.push(img) } src={ contactImg } id="imgcontact" alt="Contact Icon" />
                            <h3 className="present" dangerouslySetInnerHTML={{ __html: language.contact.description }}></h3>
                        </div>
                    </div>
                    <div className="form-container">
                        <div className="formulaire" ref={ (element) => elementsToAnimate.current.push(element) } >
                            <form id="sendMessageForm" onSubmit={ handleSubmit }>

                                <div className='input-container'>
                                    <label htmlFor='name'>
                                        { language.contact.name } <span className="required">*</span>
                                    </label>
                                    <input ref={ nameInput } type="text" name="name" required placeholder={ language.contact.name_placeholder } 
                                    maxLength={ nameInputMaxLength } 
                                    onInput={ (event) => (
                                        verifyLength(event.currentTarget, nameInputMaxLength)) } />
                                    <span ref={ errornameRef } className="error" id="errorname"></span>
                                </div>

                                <div className='input-container'>
                                    <label htmlFor='email'>
                                    { language.contact.email } <span className="required">*</span>
                                    </label>
                                    <input ref={emailInput} type="email" name="email" required placeholder={ language.contact.email_placeholder } maxLength={ emailInputMaxLength } onInput={ (event) => (
                                        verifyLength(event.currentTarget, emailInputMaxLength)) } />
                                    <span ref={erroremailRef} className="error" id="erroremail"></span>
                                </div>

                                <div className='input-container'>
                                    <label htmlFor='name'>
                                    { language.contact.message } <span className="required">*</span>
                                    </label>
                                    <textarea ref={messageInput} name="message" required placeholder={ language.contact.message_placeholder } onInput={ handleChars } onFocus={() => setIsAppearCharsLeft(true) } onBlur={ () => setIsAppearCharsLeft(false) }></textarea>
                                    <div className={`nb-chars-left ${ isAppearCharsLeft && 'visible'}`}>
                                        <p className="to-modify" style={{ color: charsLeftColor}}>{ nbCharsLeft > 0 && nbCharsLeft }</p>
                                        <p className={`nb-chars-left-text ${isScalingCharsLeft && 'scale'}`} style={{ color: charsLeftColor}}>{ switchNbCharsText( nbCharsLeft ) }</p>
                                        <div className="spinner">
                                            <div className="bounce1 bounce" style={{ backgroundColor: charsLeftColor}}></div>
                                            <div className="bounce2 bounce" style={{ backgroundColor: charsLeftColor}}></div>
                                            <div className="bounce3 bounce" style={{ backgroundColor: charsLeftColor}}></div>
                                        </div>
                                    </div>
                                    <span ref={errormsgRef} className="error" id="errormsg"></span>
                                </div>

                                <div className="buttons-container">
                                    <button type="submit" readOnly className="orange-buttons">{ language.contact.send }</button>
                                    <button readOnly className="orange-buttons"  type="reset">{ language.contact.reset }</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </main>
            </article>
        </>
    );
}

export default Contact;