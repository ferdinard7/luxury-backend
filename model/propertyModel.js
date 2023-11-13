const mongoose = require("mongoose");


const PropertySchema = new mongoose.Schema({
    title : {
        type: String,
        required: true,
    },
    desc : {
        type: String,
        // required: true,
    },
    img : {
        type: String,
        required: true,
    },
    age : {
        type: String
    },
    pool : {
        type: String
    },
    parking_space : {
        type: String
    },
    price : {
        type: Number,
        required: true,
    },
    gym : {
        type: String
    },
    type : {
        type: String
    },
    security : {
        type: String
    },
    dining : {
        type: String
    },
    temple : {
        type: String
    },
    party : {
        type: String
    },
    allivator : {
        type: String
    },
    cctv : {
        type: String
    },
    water : {
        type: String
    },
    location : {
        type: String
    },
    inStock: {
        type: Boolean,
        default: true
    },
}, {
    timestamps: true,
})

module.exports = mongoose.model("Property", PropertySchema);