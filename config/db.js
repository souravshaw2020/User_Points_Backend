const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({path:`${__dirname}/dev.env`});

const connectDB = async () => {
    try {
        await mongoose.connect(`mongodb://localhost:${process.env.DBPORT}/${process.env.DB_NAME}`);
        console.log('MongoDB Connected');
    }
    catch (err) {
        console.error(err);
        process.exit(1);
    }
}

module.exports = connectDB;