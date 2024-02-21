const mongoose = require('mongoose');
const { options } = require('../routes/products');



const connectDB = async(uri) => {
    try {
        const conn = await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        });
        console.log(`MongoDB connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error: ', ${error}`);
        process.exit(1);
    }
}

module.exports = connectDB;