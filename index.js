const express = require('express');
const messages = require('./messages/messages');

const app = express();
app.use(express.json());
const port = 8000;

app.use('/messages', messages);

app.listen(port, () => {
    console.log('Server started on http:localhost:' + port)
});