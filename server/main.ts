const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors(port));
app.use(express.json());

app.post('/send', require('./parts/sendMessage').sendMessage);

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});

