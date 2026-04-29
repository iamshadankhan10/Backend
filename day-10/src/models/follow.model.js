const mongoose = require('mongoose');

const followSchema = new mongoose.Schema({
    follower: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
        required: true
    },
    following: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
        required: true
    }
}, { 
    timestamps: true 
});

const followModel = mongoose.model('follows', followSchema);

module.exports = followModel;