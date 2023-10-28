const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app: any = express();
const port: number | string = process.env.PORT || 3000;

app.use(cors(port));
app.use(express.json());

const database: string = 'portfolio';
const dbUrl: string = 'mongodb://localhost:27017/' + database;

app.post('/send',(req: any, res: any) => {
    require('./parts/sendMessage').sendMessage(dbUrl, req, res);
});

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});

