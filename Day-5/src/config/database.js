const mongoose = require("mongoose")

function connectToDb(){
    mongoose.connect("mongodb+srv://iamshadankhan10_db_user:UgAiPZKLqyFbjxCI@cluster0.hifkosk.mongodb.net/Day-5")
    .then(()=>{
        console.log("Connected to Database");
        
    })
}

module.exports = connectToDb