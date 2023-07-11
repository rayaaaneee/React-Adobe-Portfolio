import { animateApparition } from '../functions/apparition';
import { ManageBody } from '../functions/manageBody';
import { useEffect } from 'react';
import Main from './components/main';

import '../asset/css/contact/style.scss';
import '../asset/css/contact/dark-style.scss';
import '../asset/css/media/contact/style.scss';

import contactImg from '../asset/img/contact/contact.png';

const Contact = () => {

    useEffect(() => {animateApparition()}, []);;

    ManageBody.changeClass('contact');

    useEffect(() => {
        document.title = 'Contact';
    });

    return (
        <Main child={
            <article id="formContainer">
{/*                 <div className="alert-container">
                </div> */}
                <main>
                    <div className="pres-container">
                        <div id="pres" className="animate">
                            <img draggable="false" src={ contactImg } id="imgcontact" />
                            <noscript>
                                <h3>Activez d'abord javascript pour pouvoir envoyer un message</h3>
                            </noscript>
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
                                            <input type="text" name="name" className="long" required placeholder="Nom Prénom" />
                                            <span className="error" id="errorname"></span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <label>
                                                Votre adresse e-mail <span className="required">*</span>
                                            </label>
                                        </td>
                                        <td>
                                            <input type="email" name="email" className="long" required placeholder="example@mail.com" />
                                            <span className="error" id="erroremail"></span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <label>
                                                Message <span className="required">*</span>
                                            </label>
                                        </td>
                                        <td>
                                            <textarea name="message" className="long field-textarea" required placeholder="Voici mon message.." maxLength="300" onInput="getNbCharsLeft(this);" onFocus="appearCharsLeft();" onBlur="disappearCharsLeft();"></textarea>
                                            <div className="nb-chars-left">
                                                <p className="to-modify">nb chars</p>
                                                <p className="nb-chars-left-text">caractères restants</p>
                                                <div className="spinner">
                                                    <div className="bounce1 bounce"></div>
                                                    <div className="bounce2 bounce"></div>
                                                    <div className="bounce3 bounce"></div>
                                                </div>
                                            </div>
                                            <span className="error" id="errormsg"></span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td className="input-container">
                                            <input type="submit" name="send-message" value="Envoyer" />
                                            <input type="reset" value="Réinitialiser" onClick="initNbCharsLeft();" />
                                        </td>
                                    </tr>
                                </table>
                            </form>
                        </div>
                    </div>
                </main>
            </article>
        } />
    );
}

export default Contact;