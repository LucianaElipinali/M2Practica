const mongoose = require("mongoose");
require("dotenv").config();
const URI = process.env.MONGO_URI;

const conDB = async() =>{
    mongoose.connect(URI);
};

module.exports = conDB;



   


