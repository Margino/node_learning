const express = require('express');
const app     = express();
const port    = 3000;

app.get('/', (req, res) => {
    res.send('Hello!');
});

app.get('/hello', (req, res, next) => {
    res.send('Hello there!');
    next()
},
(req, res, next) => {
    console.log('Text next()');
});

app.get('/game', (req, res) => {
    res.send('Game page');
});

app.use((req, res, next) => {
    res.status(404).send('Page no found!');
});

app.listen(port, () => {
    console.log(`Sever runs on the port ${port}`);
});
