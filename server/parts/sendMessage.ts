const mongoose = require('mongoose');

const collection: string = 'message';

export const sendMessage = async (dbUrl: string, req: any, res: any) => {

    let name: string = req.body.name;
    let email: string = req.body.email;
    let message: string = req.body.message;

    // Si un des champs est vide on retourne une erreur 400
    if (!name || !email || !message) {
        res.status(400).send();
        return;
    }

    // Si un des champs est trop long on retourne une erreur 400
    if (name.length > 50 || email.length > 50 || message.length > 300) {
        res.status(400).send();
        return;
    }
    console.log(dbUrl);
    await mongoose.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true });
    let db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', () => {
        console.log('Connected to database');
    });

    const messageSchema = new mongoose.Schema({
        name: String,
        email: String,
        message: String
    });

    const Message = mongoose.model('Message', messageSchema, collection);

    const newMessage = new Message({
        name: name,
        email: email,
        message: message
    });

    await newMessage.save();

    res.status(200).send();
}