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

app.use((req, res, next) => {
    res.status(404).send('Page no found!');
});

app.listen(3000, () => {
    console.log('Sever runs on the port 3000');
});
