// Models the Object `PostMessage` structure
// Referred by index.js

const mongoose = require("mongoose")

// defining the data structure of postmessage.
var PostMessage = mongoose.model("PostMessage", // First Parameter is MongoDB collection name.
{
    title : {type:String},
    message : {type:String},
}, 'Postmessages', 'postmessages', 'postMessages') // Added names to specify other names for the collection on MongoDB/first parameter.

module.exports = { PostMessage }