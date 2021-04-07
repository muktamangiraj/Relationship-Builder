const mongoose = require('mongoose');

const RelationSchema = mongoose.Schema({
    Name : {
        type : String,
        required : "Required"
    },
    Relation : {
        type : String,
        required : "Required"
    },
    With : {
        type : String,
        required : "Required"
    }
}, {
    timestamps: true
});

var relation = mongoose.model("relation", RelationSchema);
module.exports = relation;