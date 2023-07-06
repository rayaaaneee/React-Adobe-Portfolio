const express = require('express');
require('dotenv').config();

const app = express();

const PORT = process.env.PORT || 80;

app.use(express.json);

app.get('/', (req, res) => {
    res.send({
        'status': 'success',
        'message': 'Hello World!'
    });
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});