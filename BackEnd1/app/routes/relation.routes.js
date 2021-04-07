// const relation = require('../models/relation.model');
var express = require("express");
var router = express.Router();

module.exports = (app) => {
    const relation = require('../controllers/relation.controller.js');
            console.log("dfghjkhgfdghjkhgf");
    // Create a new relation
    app.post('/addRelation', relation.create);

    // Retrieve all relation
    app.get('/getAllRelation', relation.findAll);

    // Retrieve a single relation with relationId
    // app.get('/relation/:relationId', relation.findOne);

    // Update a relation with relationId
    app.post('/updateRelation', relation.update);

    // Delete a relation with noteId
    // app.delete('/relation/:noteId', relation.delete);
}