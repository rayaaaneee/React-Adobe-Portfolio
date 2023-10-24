const mongoose = require('mongoose');

export const sendMessage = async (req: any, res: any) => {
    res.status(200).send(JSON.stringify({ message: 'hello world' }));
}