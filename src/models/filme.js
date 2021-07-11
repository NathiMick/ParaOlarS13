const mongoose = require('mongoose');

const filmeSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    year: {
        type: String,
        required: true
    },
    rated: {
        type: String,
        required: true
    },
    released: {
        type: Date,
        required: true
    },
    runTime: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        required: true
    },
    director: {
        type: String,
        required: true
    },
    writer: {
        type: String,
        required: true
    },
    plot: {
        type: String,
        required: true
    },
    language: {
        type: String,
        required: true
    }


})

module.exports = mongoose.model('filme', filmeSchema)