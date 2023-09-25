const express = require('express');
require('dotenv').config();

const app = express();

const PORT = process.env.PORT;

app.use(express.json);

app.get('/api', (req, res) => {
    res.send({
        'status': 'success',
        'message': 'Hello World!'
    });
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});