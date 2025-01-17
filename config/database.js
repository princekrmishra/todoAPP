const mongoose = require("mongoose");

require("dotenv").config();

const dbConnect = () => {
    mongoose.connect(process.env.DATABASE_URL) //agr mujhe isi feed krna h to .env library use krni pdegi to first install -> it (npm i dotenv) then write line num 3

.then( () => console.log("DB ka connection is Successful"))

.catch((error) => {
    console.log("Issue in DB connection");
    console.error(error.message);
    //iska mtlb kya h?
    process.exit(1);
}); 
}

module.exports = dbConnect; 