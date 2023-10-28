const mongoose = require('mongoose');

export const sendMessage = async (req: any, res: any) => {
    let name: String = req.body.name;
    let email: String = req.body.email;
    let message: String = req.body.message;
    console.log(name, email, message);
    res.status(200).send();
}