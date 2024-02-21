const mongoose = require('mongoose');
const { options } = require('../routes/products');

uri = "mongodb+srv://arkadiptamojumder14:vav3qDapxkMDLc0w@cluster0.mnc8hdp.mongodb.net/Cluster0?retryWrites=true&w=majority"

const connectDB = () => {
    console.log('Connecting to the desired database')
    return mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
}

module.exports = connectDB;