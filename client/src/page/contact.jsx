import { animateApparition } from '../functions/appearence';
import { ManageBody } from '../functions/manageBody';
import { useEffect, useRef } from 'react';

import '../asset/css/contact/style.scss';
import '../asset/css/contact/dark-style.scss';
import '../asset/css/media/contact/style.scss';

import contactImg from '../asset/img/contact/contact.png';
import { ManageThemes } from '../functions/manageThemes';

const Contact = () => {

    useEffect(() => {animateApparition()}, []);;

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

    const validateForm = () => {

        let result = true;
        let firsterror = null;

        errornameRef.current.innerHTML = "";
        erroremailRef.current.innerHTML = "";
        errormsgRef.current.innerHTML = "";

        if (nameInput.current.value == "") {
            errornameRef.current.innerHTML = "• Veuillez entrez un nom valide";
            result = false;
            if (!firsterror) firsterror = nameInput.current;
        }

        let emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{1,5})+$/;
        if (!emailPattern.test(emailInput.current.value)) {
            erroremailRef.current.innerHTML = "• Veuillez entrez une adresse mail valide";
            if (!firsterror) firsterror = emailInput.current;
            result = false;
        }

        if (messageInput.current.value == "") {
            errormsgRef.current.innerHTML = "• Veuillez entrez un message valide";
            if (!firsterror) firsterror = messageInput.current;
            result = false;
        }
        if (firsterror) firsterror.focus();

        return result;
    }

    let nbCharsLeftContainerRef = useRef(null);
    let charsLeftToModifyRef = useRef(null);
    let nbCharsLeftTextRef = useRef(null);
    let nbCharsLeftSpinnerRef = useRef(null);

    const textareaMaxLength = 300;

    let oldNbCharsLeft;
    const getNbCharsLeft = () => {
        // On recupère le nombre de caractères max et on le soustrait au nombre de caractères actuel
        let nbCharsLeft = textareaMaxLength - messageInput.current.value.length;

        if (nbCharsLeft <= 0) {
            messageInput.current.value = messageInput.current.value.substring(0, textareaMaxLength);
            nbCharsLeft = 0;
        }

        charsLeftToModifyRef.current.innerHTML = nbCharsLeft;

        charsLeftToModifyRef.current.classList.add('visible');
        nbCharsLeftSpinnerRef.current.classList.add('visible');

        if (nbCharsLeft == 0) {
            nbCharsLeftTextRef.current.innerHTML = "• Aucun caractère restant";
            charsLeftToModifyRef.current.classList.remove('visible');
            nbCharsLeftSpinnerRef.current.classList.remove('visible');
            animateScale(nbCharsLeft, oldNbCharsLeft);
        } else {
            if (nbCharsLeft == 1) {
                nbCharsLeftTextRef.current.innerHTML = "caractère restant";
            } else {
                nbCharsLeftTextRef.current.innerHTML = "caractères restants";
            }
        }

        oldNbCharsLeft = nbCharsLeft;
        changeColorNbCharsLeft();
    }

    const animateScale = (nbCharsLeft, oldNbCharsLeft) => {
        if (nbCharsLeft === 0 && oldNbCharsLeft === 0) {
            nbCharsLeftTextRef.current.classList.add('scale');
            setTimeout(() => {
                nbCharsLeftTextRef.current.classList.remove('scale');
            }, 100);
        }
    }

    const changeColorNbCharsLeft = () => {
        // Plus le nombre de caractères restants est faible, plus la couleur est rouge
        let color = null;
        if (ManageThemes.isDarkTheme) {
            color = Math.round(0 + charsLeftToModifyRef.current.innerHTML * 255 / 300);
        } else {
            color = Math.round(255 - charsLeftToModifyRef.current.innerHTML * 255 / 300);
        }
    
        charsLeftToModifyRef.current.style.color = `rgb(${color}, 0, 0)`;
        nbCharsLeftTextRef.current.style.color = `rgb(${color}, 0, 0)`;
        nbCharsLeftSpinnerRef.current.querySelectorAll('div').forEach((element) => {
            element.style.backgroundColor = `rgb(${color}, 0, 0)`;
        });
    }

    const appearCharsLeft = () => {
        nbCharsLeftContainerRef.current.classList.add('visible');
    }

    const disappearCharsLeft = () => {
        nbCharsLeftContainerRef.current.classList.remove('visible');
    }

    return (
            <article id="formContainer">
                <div className="alert-container"></div>
                <main id='contactPage'>
                    <div className="pres-container">
                        <div id="pres" className="animate">
                            <img draggable="false" src={ contactImg } id="imgcontact" alt="Contact Icon" />
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
                            <form method="post" id="sendMessageForm">
                                <input type="hidden" name="instant-request" value="true" />
                                <table className="form-style">
                                    <tr>
                                        <td>
                                            <label>
                                                Votre nom <span className="required">*</span>
                                            </label>
                                        </td>
                                        <td>
                                            <input readOnly ref={nameInput} type="text" name="name" className="long" required placeholder="Nom Prénom" />
                                            <span ref={errornameRef} className="error" id="errorname"></span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <label>
                                                Votre adresse e-mail <span className="required">*</span>
                                            </label>
                                        </td>
                                        <td>
                                            <input readOnly ref={emailInput} type="email" name="email" className="long" required placeholder="example@mail.com" />
                                            <span ref={erroremailRef} className="error" id="erroremail"></span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <label>
                                                Message <span className="required">*</span>
                                            </label>
                                        </td>
                                        <td>
                                            <textarea ref={messageInput} name="message" className="long field-textarea" required placeholder="Voici mon message.." onInput={getNbCharsLeft} onFocus={appearCharsLeft} onBlur={disappearCharsLeft}></textarea>
                                            <span ref={errormsgRef} className="error" id="errormsg"></span>
                                            <div ref={nbCharsLeftContainerRef} className="nb-chars-left">
                                                <p className="to-modify visible" ref={charsLeftToModifyRef}>{textareaMaxLength}</p>
                                                <p ref={nbCharsLeftTextRef} className="nb-chars-left-text">caractères restants</p>
                                                <div className="spinner visible" ref={nbCharsLeftSpinnerRef}>
                                                    <div className="bounce1 bounce"></div>
                                                    <div className="bounce2 bounce"></div>
                                                    <div className="bounce3 bounce"></div>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td className="input-container">
                                            <input readOnly className="orange-buttons" value="Envoyer" onClick={ validateForm } />
                                            <input readOnly className="orange-buttons"  type="reset" value="Réinitialiser" />
                                        </td>
                                    </tr>
                                </table>
                            </form>
                        </div>
                    </div>
                </main>
            </article>
    );
}

export default Contact;