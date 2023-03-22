// Index created on MongoDB. It's subfolders are the collections specified on postmessage.js

const mongoose = require("mongoose")

mongoose.connect('mongodb://127.0.0.1:27017/postManagerDB',{useNewUrlParser:true,useUnifiedTopology:true},
err => {
    if(!err)
        console.log("MongoDB connection succeeded.")
    else
        console.log("Error while connecting to MongoDB : " + JSON.stringify(err, undefined, 2))
})
