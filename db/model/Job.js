const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
    author: {
        type: String,
        required: true,
        min: 6,
        max: 1500
    },
    visibility: {
        type: String,
        // required: true,
        max: 255,
        min: 6
    },
    status: {
        type: String,
        // required: true,
        max: 50,
        min: 6
    },
    permalink: {
        type: String,
        // required: true,
        max: 1024,
        min: 6
    },
    logo: {
        type: String,
        // required: true,
        max: 1024,
        min: 6
    },
    type: {
        type: String,
        // required: true,
        max: 1024,
        min: 6
    },
    lastDate: {
        type: String,
        // required: true,
        max: 1024,
        min: 6
    },
    featureImage: {
        type: String,
        // required: true,
        max: 1024,
        min: 6
    },
    title: {
        type: String,
        // required: true,
        max: 150,
        min: 6
    },
    releseDate: {
        type: String,
        max: 1200
    },
    description: {
        type: String,
        max: 2000
    },
    postContent: {
        type: String,
        // required: true,
        max: 10000,
        min: 6
    },
    publishDate: {
        type: String,
        // required: true,
        max: 20,
        min: 3
    },
    updateUser: [String],
    updateDate: [Date],
    date: {
        type: Date,
        default: Date.now
    }
});
module.exports = mongoose.model('jobs', jobSchema);