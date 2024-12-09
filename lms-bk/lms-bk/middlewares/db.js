const mongoose = require('mongoose');

exports.connectToDB = ()=>{
    mongoose.connect("mongodb+srv://garggarvit12:garg1234@cluster0.7bembvg.mongodb.net/lms?retryWrites=true&w=majority")
    .then(()=>{
        console.log("Connected to DB");
    })
}



