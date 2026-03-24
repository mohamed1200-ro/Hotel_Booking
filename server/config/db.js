const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        mongoose.connection.on('connected' , () => console.log('Connected to MongoDB'))
        await mongoose.connect(`${process.env.MONGO_URI}/hotel-booking`);
    } catch (error) {
        console.log("MongoDB Connection Error: ", error.message);
    }
}

module.exports = connectDB;
