const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hi, I am live!');
});
