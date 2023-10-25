import { animateApparition } from '../functions/appearence';
import { animateImageLoading } from '../functions/animateImageLoading';
import { sendMessage } from '../functions/message';
import { ManageBody } from '../functions/manageBody';

import { ModalMessage } from './components/modal-message';

import { useEffect, useMemo, useRef, useState } from 'react';

import '../asset/css/contact/style.scss';
import '../asset/css/contact/dark-style.scss';
import '../asset/css/media/contact/style.scss';

import contactImg from '../asset/img/contact/contact.png';
import { ManageThemes } from '../functions/manageThemes';


const Contact = () => {

    useEffect(() => {
        animateApparition();
        animateImageLoading();
    }, []);;

    ManageBody.changeClass('contact');

    useEffect(() => {
        document.title = 'Contact';
    });

    let nameInput = useRef(null);
    let emailInput = useRef(null);
    let messageInput = useRef(null);

    let errornameRef = useRef(null);
    let erroremailRef = useRef(null);
    let errormsgRef = useRef(null);

    const [sendIsSuccess, setSendIsSuccess] = useState(null);
    const sendAnswers = {
        success : "Votre message a bien été envoyé !", 
        error : "Une erreur est survenue lors de l'envoi de votre message."
    }

    const trySend = (message) => {
        sendMessage()
        .then((response) => {

            let isSuccess = (response === 200);

            setSendIsSuccess(isSuccess);

        })
    }

    const isEmpty = (string) => {
        return string.trim() === "";
    }

    const validateForm = (e) => {

        e.preventDefault();

        let firsterror = null;

        errornameRef.current.innerHTML = "";
        erroremailRef.current.innerHTML = "";
        errormsgRef.current.innerHTML = "";

        if (isEmpty(nameInput.current.value)) {
            errornameRef.current.innerHTML = "• Veuillez entrez un nom valide";
            if (!firsterror) firsterror = nameInput.current;
        }

        let emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{1,5})+$/;
        if (!emailPattern.test(emailInput.current.value)) {
            erroremailRef.current.innerHTML = "• Veuillez entrez une adresse mail valide";
            if (!firsterror) firsterror = emailInput.current;
        }

        if (isEmpty(messageInput.current.value)) {
            errormsgRef.current.innerHTML = "• Veuillez entrez un message valide";
            if (!firsterror) firsterror = messageInput.current;
        }

        if (firsterror) firsterror.focus();
        else {
            trySend(messageInput.current.value);
            e.currentTarget.form.reset();
            setNbChars(0);
        }
    }

    const textareaMaxLength = 300;

    let oldNbChars = 0;

    const switchNbCharsText = (charsLeft) => {
        let text;
        switch (charsLeft) {
            case 0:
                text = "• Aucun caractère restant";
                break;
            case 1:
                text = "caractère restant";
                break;
            default:
                text = `caractères restants`;
                break;
        }
        return text;
    }

    const handleChars = (e) => {
        // On recupère le nombre de caractères max et on le soustrait au nombre de caractères actuel
        
        if (messageInput.current.value.length > textareaMaxLength) {
            messageInput.current.value = messageInput.current.value.substring(0, textareaMaxLength);
        }
        
        oldNbChars = nbChars;
        setNbChars(messageInput.current.value.length);
    }

    const [isScalingCharsLeft, setIsScalingCharsLeft] = useState(false);
    const animateScale = () => {
        console.log(nbChars, textareaMaxLength, oldNbChars);
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
        animateScale();
        return newNbCharsLeft;
    }, [nbChars]);

    return (
        <>
            { sendIsSuccess !== null && (
                <ModalMessage isSuccess={ sendIsSuccess } closeModal={ () => setSendIsSuccess(null) } messages={ sendAnswers } />
            ) }
            <article id="formContainer">
                <div className="alert-container"></div>
                <main id='contactPage'>
                    <div className="pres-container">
                        <div id="pres" className="animate">
                            <img draggable="false" className='onloading' src={ contactImg } id="imgcontact" alt="Contact Icon" />
                            <h3 className="present">Pour tout contact, vous pouvez aussi passer par cette page.<br/>
                                Pour cela, c'est très simple : <br/>
                                • Rentrez le nom / pseudonyme sous lequel vous enverrez le message<br/>
                                • Rentrez votre adresse mail<br/>
                                • Rentrez simplement votre message !
                            </h3>
                        </div>
                    </div>
                    <div className="form-container">
                        <div className="formulaire animate">
                            <form id="sendMessageForm">

                                <div className='input-container'>
                                    <label htmlFor='name'>
                                        Votre nom <span className="required">*</span>
                                    </label>
                                    <input ref={nameInput} type="text" name="name" required placeholder="Nom Prénom" maxLength="50" />
                                    <span ref={errornameRef} className="error" id="errorname"></span>
                                </div>

                                <div className='input-container'>
                                    <label htmlFor='email'>
                                        Votre adresse e-mail <span className="required">*</span>
                                    </label>
                                    <input ref={emailInput} type="email" name="email" required placeholder="example@mail.com" maxLength="50" />
                                    <span ref={erroremailRef} className="error" id="erroremail"></span>
                                </div>

                                <div className='input-container'>
                                    <label htmlFor='name'>
                                        Message <span className="required">*</span>
                                    </label>
                                    <textarea ref={messageInput} name="message" required placeholder="Voici mon message.." onInput={ handleChars } onFocus={() => setIsAppearCharsLeft(true) } onBlur={ () => setIsAppearCharsLeft(false) }></textarea>
                                    <span ref={errormsgRef} className="error" id="errormsg"></span>
                                    <div className={`nb-chars-left ${ isAppearCharsLeft && 'visible'}`}>
                                        <p className="to-modify" style={{ color: charsLeftColor}}>{ nbCharsLeft > 0 && nbCharsLeft }</p>
                                        <p className={`nb-chars-left-text ${isScalingCharsLeft && 'scale'}`} style={{ color: charsLeftColor}}>{ switchNbCharsText( nbCharsLeft ) }</p>
                                        <div className="spinner">
                                            <div className="bounce1 bounce" style={{ backgroundColor: charsLeftColor}}></div>
                                            <div className="bounce2 bounce" style={{ backgroundColor: charsLeftColor}}></div>
                                            <div className="bounce3 bounce" style={{ backgroundColor: charsLeftColor}}></div>
                                        </div>
                                    </div>
                                </div>

                                <div className="buttons-container">
                                    <input type="submit" readOnly className="orange-buttons" value="Envoyer" onClick={ validateForm } />
                                    <input readOnly className="orange-buttons"  type="reset" value="Réinitialiser" />
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