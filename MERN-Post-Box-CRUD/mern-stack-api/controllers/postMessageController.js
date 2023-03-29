// HTTP Models for to route the Object `postmessage` into the server specified at `../index.js`

const express = require("express")
var router = express.Router()

var ObjectID = require('mongoose').Types.ObjectId

var { PostMessage } = require("../models/postMessage")

router.get('/', (req, res) => { // model constructor that routes to GET document referred by postmessage.
    PostMessage.find((err,docs) => {
        if(!err) res.send(docs)
        else console.log("Error while retrieving all records : " + JSON.stringify(err,undefined,2))
    })
})

router.post('/', (req, res) => { // model constructor that routes to POST document referred by postmessage.
    var newrecord = new PostMessage ({
        title: req.body.title,
        message: req.body.message
    })

    newrecord.save((err, docs) => { // Catches errors if making a newrecord is not possible.
        if(!err) res.send(docs)
        else console.log("Error while creating new records : "+ JSON.stringify(err,undefined,2))
    })

})

router.put('/:id', (req, res) => { // model constructor that routes to PUT document referred by postmessage.
    if(!ObjectID.isValid(req.params.id))
        return res.status(400).send("No record with given id : " + req.params.id) // Catches errors if ID sent is invalid.

    var updatedrecord = { // Defines initial state of the new record to be PUT.
        title: req.body.title,
        message: req.body.message
    }

     // Catches errors if making a newrecord is not possible. If there is none, it updates the object `postmessage`
     PostMessage.findByIdAndUpdate(req.params.id, { $set : updatedrecord}, {new:true}, (err, docs) => {
        if(!err) res.send(docs)
        else console.log("Error while updating a records : " + JSON.stringify(err,undefined,2)) 
    })
})

router.delete('/:id', (req ,res) => { // model constructor that routes to DELETE document referred by postmessage.
    if(!ObjectID.isValid(req.params.id))
        return res.status(400).send("No record with given id : " + req.params.id) // Catches errors if ID sent is invalid.

     // Catches errors if the record specified is not available. If there is none, it deletes the object `postmessage`
     PostMessage.findByIdAndRemove(req.params.id,(err, docs) => {
        if(!err) res.send(docs)
        else console.log("Error while deleting a records : " + JSON.stringify(err,undefined,2))
    })
})

module.exports = router