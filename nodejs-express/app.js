const express = require('express');
const app     = express();

app.get('/', (req, res) => {
    res.send('Hello!');
});

app.get('/hello', (req, res) => {
    res.send('Hello there!');
});

app.get('/game', (req, res) => {
    res.send('Game page');
});

app.listen(3000, () => {
    console.log('Sever runs on the port 3000');
});
