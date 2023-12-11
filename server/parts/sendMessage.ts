import { Request, Response } from "express";
import { db } from "../main";

const sendMessage = async (req: Request, res: Response) => {

    let name: string = req.body.name;
    let email: string = req.body.email;
    let message: string = req.body.message;

    // Si un des champs est vide on retourne une erreur 400
    if (!name || !email || !message) {
        res.status(400).send({
            error: 'Un des champs est vide'
        });
        return;
    }

    // Si un des champs est trop long on retourne une erreur 400
    if (name.length > 50 || email.length > 50 || message.length > 300) {
        res.status(400).send({
            error: 'Un des champs est trop long'
        });
        return;
    }

    // On vérifie que l'email est bien un email
    if (!email.includes('@') || !email.includes('.')) {
        res.status(400).send({
            error: 'L\'email n\'est pas valide'
        });
        return;
    }

    db.prepare('INSERT INTO message (name, email, message) VALUES (?, ?, ?)').run(name, email, message);

    res.status(200).send({
        success: 'Message envoyé avec succès !'
    });
}

export default sendMessage;