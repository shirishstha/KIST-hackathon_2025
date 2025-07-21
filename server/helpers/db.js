//external module 
const mongoose = require('mongoose');

const connectDB = async () =>{
    try {
       const conn = await mongoose.connect(process.env.MONGO_URL);
       console.log("Database connected successfully",conn.connection.host)

        
    } catch (error) {
        console.log('Database Connection failed ', error);
        
    }
}

module.exports = connectDB;
    