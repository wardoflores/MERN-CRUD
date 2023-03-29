// Refers to /models/postmessage [1]

require("./db")
const express = require("express")
const bodyparser = require("body-parser")
const cors = require('cors')

// Refers to module that routes the postmessage model using HTTP request modelled controllers.
var postmessagesroutes = require("./controllers/postMessageController")

var app = express()
app.use(cors({origin:'http://localhost:3000'})) // no forward slash in the end.
app.use(bodyparser.json())

// Initiates connection to `http://localhost:4000`
app.listen(4000,()=>console.log("Server started at : 4000")) // Port 4000 of localhost

app.use("/postMessages",postmessagesroutes) // initiate ./controllers/postmessage.js module
