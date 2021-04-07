const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
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
    postContent: {
        type: String,
        // required: true,
        max: 5000,
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
module.exports = mongoose.model('posts', userSchema);