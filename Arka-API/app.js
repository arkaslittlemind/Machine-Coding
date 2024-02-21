
require('dotenv').config({ path: './config.env' });

const express = require('express');
const app = express();

//const connectDB = require('./db/connect');

const PORT = process.env.PORT || 5000;
//const mode = process.env.NODE_ENV;

const products_routes = require('./routes/products');

app.get('/', (req, res) => {
    res.send('Hi, I am live!');
});

//middleware to set router
app.use('/api/products', products_routes);

const start = async () => {
    try {
        app.listen(PORT, () => {
            console.log(`Server is running fine on port ${PORT}`)
        });
    } catch (error) {
        console.log(error);
    }
}

start();

