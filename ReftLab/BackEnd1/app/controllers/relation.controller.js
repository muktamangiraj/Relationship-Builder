const relation = require('../models/relation.model.js');

var express = require("express");
var router = express.Router();
// Create and Save a relation 
exports.create = (req, res) => {
    
    
    if (req.body.Name
        && req.body.Relation
        && req.body.With) {
            
        var head_Details = new relation({
            Name: req.body.Name,
            Relation: req.body.Relation,
            With: req.body.With
        });

        head_Details.save(function (saveErr, saveResult) {
            if (saveErr || !saveResult) {
                res.json({ status: "ERROR", msg: "Getting issue." });
            } else {
                res.json({
                    status: "OK",
                    message: "Relation saved successfully",
                    data: saveResult
                });
            }
        });

    } else {
        res.json({ status: "ERROR", msg: "Please Enter all valid details." });
    }
};

// Retrieve and return all relation from the database.
exports.findAll = (req, res) => {
        relation.find()
    .then(relation => {
        res.send(relation);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving notes."
        });
    });

   
};

// Find a single relation with a relationId
// exports.findOne = (req, res) => {

// };

// Update a note identified by the relationId in the request
exports.update = (req, res) => {
    if (req.body.Id && req.body.Name && req.body.Relation && req.body.With) {

        relation.findOne({ _id: req.body.Id }, function (err, Data) {
            if (err || !Data) {
                res.json({ status: "ERROR", msg: "Relation not found." });
            } else {
                relation.findOneAndUpdate({ _id: req.body.Id }, {
                    $set: {
                        Name: req.body.Name,
                        Relation: req.body.Relation,
                        With: req.body.With
                    }
                }, { new: true },
                    function (updateErr, updateData) {
                        if (updateErr || !updateData) {
                            res.json({ status: "ERROR", msg: "Getting some issue." });
                        } else {
                            res.json({
                                status: "OK",
                                msg: "Topic details updated successfully.",
                                data: updateData
                            });
                        }
                    }
                );
            }
        });

    } else {
        res.json({ status: "ERROR", msg: "Please Enter all valid details." });
    }

};

// Delete a relation with the specified noteId in the request
// exports.delete = (req, res) => {

// };