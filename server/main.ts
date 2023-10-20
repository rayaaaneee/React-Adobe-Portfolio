const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors(port));

app.get('/', (req : any, res : any) => {
    res.json({ message: 'hello world' });
});

app.get('/send/:message', (req : any, res : any) => {
    console.log(req.params.message);
});

app.post('/send', (req : any, res : any) => {
    console.log(req.query);
});

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});

