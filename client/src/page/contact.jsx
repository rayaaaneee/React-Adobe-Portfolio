import { useEffect, useMemo, useRef, useState, useContext } from 'react';

import { animateApparition } from '../function/appearence';
import { animateImageLoading } from '../function/animate-image-loading';
import { sendMessage } from '../function/send-message';

import modalContext from '../function/context/modal-context';

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

    useEffect(() => {
        document.title = 'Contact';
    });

    let nameInput = useRef(null);
    let emailInput = useRef(null);
    let messageInput = useRef(null);

    let errornameRef = useRef(null);
    let erroremailRef = useRef(null);
    let errormsgRef = useRef(null);

    const { setModalInformations } = useContext(modalContext);
    let modalMessages = [
        "Votre message a bien été envoyé !",
        "Une erreur est survenue lors de l'envoi du message."
    ];

    const trySend = (formData) => {
        sendMessage(formData)
        .then((response) => {

            let isSuccess = (response === 200);

            setModalInformations(
                (informations) => {
                    informations.isSuccess = isSuccess;
                    informations.setMessages(modalMessages[0], modalMessages[1]);
                    informations.isVisible = true;
                    return ModalInformations.initRow(informations);
                }
            );
        })
    }

    const isEmpty = (string) => {
        return string.trim() === "";
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let formData = new FormData(e.currentTarget);

        let firsterror = null;
        if (isEmpty(formData.get('name'))) {
            errornameRef.current.innerHTML = "• Veuillez entrez un nom valide";
            if (!firsterror) firsterror = nameInput.current;
        } else {
            errornameRef.current.innerHTML = "";
        }

        let emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{1,5})+$/;
        if (!emailPattern.test(formData.get('email'))) {
            erroremailRef.current.innerHTML = "• Veuillez entrez une adresse mail valide";
            if (!firsterror) firsterror = emailInput.current;
        } else {
            erroremailRef.current.innerHTML = "";
        }

        if (isEmpty(formData.get('message'))) {
            errormsgRef.current.innerHTML = "• Veuillez entrez un message valide";
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
                            <h3 className="present">Pour tout contact, vous pouvez aussi passer par cette page.<br/>
                                Pour cela, c'est très simple : <br/>
                                • Rentrez le nom / pseudonyme sous lequel vous enverrez le message<br/>
                                • Rentrez votre adresse mail<br/>
                                • Rentrez simplement votre message !
                            </h3>
                        </div>
                    </div>
                    <div className="form-container">
                        <div className="formulaire" ref={ (element) => elementsToAnimate.current.push(element) } >
                            <form id="sendMessageForm" onSubmit={ handleSubmit }>

                                <div className='input-container'>
                                    <label htmlFor='name'>
                                        Votre nom <span className="required">*</span>
                                    </label>
                                    <input ref={ nameInput } type="text" name="name" required placeholder="Nom Prénom" 
                                    maxLength={ nameInputMaxLength } 
                                    onInput={ (event) => (
                                        verifyLength(event.currentTarget, nameInputMaxLength)) } />
                                    <span ref={ errornameRef } className="error" id="errorname"></span>
                                </div>

                                <div className='input-container'>
                                    <label htmlFor='email'>
                                        Votre adresse e-mail <span className="required">*</span>
                                    </label>
                                    <input ref={emailInput} type="email" name="email" required placeholder="example@mail.com" maxLength={ emailInputMaxLength } onInput={ (event) => (
                                        verifyLength(event.currentTarget, emailInputMaxLength)) } />
                                    <span ref={erroremailRef} className="error" id="erroremail"></span>
                                </div>

                                <div className='input-container'>
                                    <label htmlFor='name'>
                                        Message <span className="required">*</span>
                                    </label>
                                    <textarea ref={messageInput} name="message" required placeholder="Voici mon message.." onInput={ handleChars } onFocus={() => setIsAppearCharsLeft(true) } onBlur={ () => setIsAppearCharsLeft(false) }></textarea>
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
                                    <input type="submit" readOnly className="orange-buttons" value="Envoyer" />
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